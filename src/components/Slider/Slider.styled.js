import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
`;

export const Button = styled.button`
  font: 400 24px / 100% "Biro Script Plus", sans-serif;
  font-family: ${theme.fonts.biro};
  font-size: 24px;
  font-weight: 400;
  line-height: 1;
  background-color: transparent;
  border: none;
  color: ${theme.color.textPrimary};
`;
