import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 16px;
  }
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: ${theme.color.bgBtnPrimary};

  &:focus {
    outline: 1px solid ${theme.color.textPrimary};

    & svg {
      fill: ${theme.color.textPrimary};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 80px;
    height: 80px;
  }
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${theme.color.bgSecondary};
    transition: ${theme.animation.transition};

    &:hover {
      fill: ${theme.color.textPrimary};
    }
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 24px;
    height: 24px;

    & svg {
      width: 24px;
      height: 24px;
    }
  }
`;
