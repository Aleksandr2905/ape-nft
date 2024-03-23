import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helpers/validation";
import InputForm from "../Input/InputForm";
import * as s from "./Form.styled";
import { Report } from "notiflix/build/notiflix-report-aio";

const Form = () => {
  const [buttonText, setButtonText] = useState("MINT");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ username, wallet }) => {
    try {
      const user = username.replace("@", "").toUpperCase();
      const walletAddress = wallet.toUpperCase();
      setButtonText("MINTED");
      Report.success(
        "Congratulations!",
        `Dear, ${user}, You have successfully monetized! Your wallet: ${walletAddress} Thank you for using our service.`,
        "Ok",
        () => {
          setTimeout(() => {
            setButtonText("MINT");
          }, 3000);
        }
      );
      reset();
    } catch (error) {
      setButtonText("ERROR");
    }
  };

  return (
    <s.Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <InputForm
        name="username"
        type="text"
        placeholder={"@username"}
        register={register}
        errors={errors}
      />
      <InputForm
        name="wallet"
        type="text"
        placeholder={"Wallet address"}
        register={register}
        errors={errors}
      />
      <s.Button type="submit">{buttonText}</s.Button>
    </s.Form>
  );
};

export default Form;
