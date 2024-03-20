import styled, { keyframes } from "styled-components";
import { theme } from "../../stylesheet/theme";

const animation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  padding: 6px 0px 8px 0px;
  width: 100vw;
  /* max-width: 957px; */
  height: 52px;
  overflow: hidden;
  background-color: ${theme.color.accent};
`;

export const Text = styled.div`
  display: flex;
  gap: 24px;
  font-family: ${theme.fonts.grotesk};
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};
  width: 100%;
  white-space: nowrap;
  animation-name: ${animation};
  animation-duration: 12s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
`;

export const Icons = styled.div`
  width: 36px;
  height: 36px;
`;
