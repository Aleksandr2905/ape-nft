import { useState, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Report } from "notiflix/build/notiflix-report-aio";
import { schema } from "../../helpers/validation";
import InputForm from "../Input/InputForm";
import * as s from "./Form.styled";

const Form = () => {
  const [buttonText, setButtonText] = useState("MINT");
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    setValue,
    control,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const saveToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value);
  };

  const getFromLocalStorage = (key) => {
    return window.localStorage.getItem(key);
  };

  const username = useWatch({ control, name: "username" });
  const wallet = useWatch({ control, name: "wallet" });

  useEffect(() => {
    if (isDirty) {
      const formData = JSON.stringify({ username, wallet });
      saveToLocalStorage("formData", formData);
    }
  }, [isDirty, username, wallet]);

  useEffect(() => {
    const localStorageFormData = getFromLocalStorage("formData");
    if (localStorageFormData) {
      const { username: savedUsername, wallet: savedWallet } =
        JSON.parse(localStorageFormData);
      setValue("username", savedUsername || "");
      setValue("wallet", savedWallet || "");
    }
  }, [setValue]);

  const onSubmit = (formData) => {
    try {
      const { username, wallet } = formData;
      const user = username.replace("@", "").toUpperCase();
      const walletAddress = wallet.toUpperCase();
      setButtonText("MINTED");
      Report.success(
        "Congratulations!",
        `Dear ${user}, You have successfully monetized! Your wallet: ${walletAddress}. Thank you for using our service.`,
        "Ok",
        () => {
          setTimeout(() => {
            setButtonText("MINT");
          }, 3000);
        }
      );
      reset();
      localStorage.removeItem("formData");
    } catch (error) {
      setButtonText("ERROR");
    }
  };

  return (
    <s.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <InputForm
        name="username"
        type="text"
        placeholder="@username"
        register={register}
        errors={errors}
      />
      <InputForm
        name="wallet"
        type="text"
        placeholder="Wallet address"
        register={register}
        errors={errors}
      />
      <s.Button type="submit">{buttonText}</s.Button>
    </s.Form>
  );
};

export default Form;
