import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../helpers/validation";
import InputForm from "../Input/InputForm";
import * as s from "./Form.styled";
import { Notify } from "notiflix/build/notiflix-notify-aio";

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
      setButtonText("MINTED");
      reset();
      Notify.success(`"${username}, you have successfully minted!!!"`);
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
