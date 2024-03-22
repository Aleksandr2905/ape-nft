import * as yup from "yup";

const discordRegexp = /^@(?=.{3,32}$)[a-z0-9]+(?:[._][a-z0-9]+)*$/;
const metamaskRegexp = /^1x[a-zA-Z0-9]{19}$/;

export const schema = yup.object().shape({
  username: yup
    .string()
    .required("Field is required")
    .matches(discordRegexp, "Wrong discord"),
  wallet: yup
    .string()
    .required("Field is required")
    .matches(metamaskRegexp, "Wrong address"),
});
