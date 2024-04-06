import PropTypes from "prop-types";
import Discord from "../../assets/icons/discord.svg?react";
import Metamask from "../../assets/icons/meta-mask-color.svg?react";
import * as s from "./InputForm.styled";

const InputForm = ({ name, placeholder, type, register, errors }) => {
  return (
    <s.WrapperInput>
      {name === "username" ? (
        <s.Icons>
          <Discord />
        </s.Icons>
      ) : (
        <s.Icons>
          <Metamask />
        </s.Icons>
      )}
      <s.Input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        $errors={!!errors[name]}
      />
      <s.Error>{errors[name]?.message}</s.Error>
    </s.WrapperInput>
  );
};

InputForm.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default InputForm;
