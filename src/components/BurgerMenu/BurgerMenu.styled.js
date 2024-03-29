import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 16px;
  }
`;
