import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const List = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, 284px);
  gap: 24px;
  width: 592px;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1032px;
    grid-template-columns: repeat(auto-fill, 504px);
  }
`;
