import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const WrapperInput = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  height: 60px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 0 0 8px;
  padding: 10px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background-color: ${theme.color.bgSecondary};
`;

export const Input = styled.input`
  border-radius: 0 8px 8px 0;
  padding: 22px 24px;
  width: 100%;
  height: 48px;
  border: 1px solid
    ${(props) =>
      props.$errors ? `${theme.color.accent}` : `${theme.color.bgSecondary}`};
  background-color: transparent;
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;
  color: ${(props) =>
    props.$errors ? `${theme.color.accent}` : `${theme.color.textPrimary}`};

  &::placeholder {
    color: ${theme.color.placeholder};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px ${theme.color.bgPrimary} inset;
    -webkit-text-fill-color: ${(props) =>
      props.$errors ? `${theme.color.accent}` : `${theme.color.textPrimary}`};
  }

  &:focus {
    caret-color: ${theme.color.textPrimary};
    outline: none;
    border: 1px solid
      ${(props) =>
        props.$errors ? `${theme.color.accent}` : `${theme.color.textPrimary}`};
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: 0;
  right: 0;
  font-family: ${theme.fonts.messinaReg};
  font-size: 10px;
  font-weight: 400;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: right;
  color: ${theme.color.accent};
`;
