import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 216px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 592px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1032px;
  }
`;
