import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  width: 100%;
  height: 52px;
  overflow: hidden;
  background-color: ${theme.color.accent};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 6px 0px 16px 0px;
    height: 86px;
  }
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts.grotesk};
  font-size: 36px;
  font-weight: 900;
  line-height: 1;
  padding: 6px 0px 8px 0px;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};
  width: 100%;
  white-space: nowrap;

  & span {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 36px;
    font-size: 64px;
  }
`;

export const Icons = styled.div`
  display: flex;
  margin-top: 10px;

  & svg {
    width: 36px;
    height: 36px;
  }
`;
