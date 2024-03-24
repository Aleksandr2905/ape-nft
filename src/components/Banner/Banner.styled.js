import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const BannerContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  padding: 6px 0px 8px 0px;
  width: 100%;
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
`;

export const Icons = styled.div`
  width: 36px;
  height: 36px;
`;
