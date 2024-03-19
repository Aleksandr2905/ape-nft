import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Title = styled.h2`
  font-family: ${theme.fonts.grotesk};
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 16px;
  color: ${theme.color.textPrimary};

  & span {
    color: ${theme.color.accent};
  }
`;

export const Text = styled.p`
  font-family: ${theme.fonts.messinaReg};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-transform: uppercase;
  text-align: right;
  margin-bottom: 36px;
  color: ${theme.color.textPrimary};
`;

export const WrapSecondaryText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 16px;
`;

export const SecondaryText = styled.p`
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;
  text-align: center;
  color: ${theme.color.textPrimary};
`;
