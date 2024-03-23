import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  right: 0px;
  left: 0px;
  min-width: 360px;
  max-width: 480px;
  margin: 0 8px;
  padding: 8px 8px 0;
  z-index: 10;
`;

export const Icon = styled.div`
  margin-top: 8px;
  width: 48px;
  height: 32px;
`;
