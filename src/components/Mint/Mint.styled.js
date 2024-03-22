import styled from "styled-components";
import X from "../../assets/icons/add-sharp.svg?react";
import { theme } from "../../stylesheet/theme";

export const WrapperDiscription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Icon = styled(X)`
  width: 36px;
  height: 36px;
`;

export const Text = styled.p`
  font-family: ${theme.fonts.messinaReg};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-transform: uppercase;
  text-align: center;
  color: ${theme.color.textPrimary};
`;
