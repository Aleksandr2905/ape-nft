import styled from "styled-components";
import { theme } from "../../stylesheet/theme";
import X from "../../assets/icons/add-sharp.svg?react";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Icon = styled(X)`
  width: 36px;
  height: 36px;
  margin: 0 auto;
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
