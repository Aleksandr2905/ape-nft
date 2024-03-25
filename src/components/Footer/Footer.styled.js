import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Copyright = styled.p`
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 24px;
  color: ${theme.color.textPrimary};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.19;
    margin-bottom: 40px;
  }
`;
