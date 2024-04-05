import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 16px;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  margin: 0 auto;
  padding: 62px 8px 56px;
  overflow: hidden;
  z-index: 100;
  background-color: ${theme.color.bgPrimary};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 8px;
`;

export const NavWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

export const LogoLink = styled.a`
  margin-top: 8px;
  width: 48px;
  height: 32px;
  cursor: pointer;

  &:focus {
    outline: 1px solid ${theme.color.textPrimary};

    & svg {
      fill: ${theme.color.accent};
    }
  }

  & svg {
    fill: ${theme.color.textPrimary};

    &:hover {
      fill: ${theme.color.accent};
    }
  }
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  width: 48px;
  height: 48px;
  border: none;
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-transform: uppercase;
  backdrop-filter: blur(12px);
  transition: ${theme.animation.transition};
  background: ${theme.color.bgSecondary};
  color: ${theme.color.textPrimary};

  &:hover {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.color.accent};
  }

  &:focus {
    outline: 1px solid ${theme.color.textPrimary};
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SocialBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 10px;
  width: 48px;
  height: 48px;
  backdrop-filter: blur(12px);
  background: ${theme.color.bgSecondary};

  &:focus {
    outline: 1px solid ${theme.color.textPrimary};
  }
`;

export const Icon = styled.div`
  width: 16px;
  height: 16px;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${theme.color.textPrimary};
    transition: ${theme.animation.transition};

    &:hover {
      fill: ${theme.color.accent};
    }
  }
`;

export const NavBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;
  margin-bottom: auto;
`;

export const NavBtn = styled.a`
  font-family: ${theme.fonts.messinaReg};
  font-size: 24px;
  font-weight: 600;
  line-height: 1.21;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};

  &:hover {
    color: ${theme.color.accent};
  }

  &:focus {
    outline: 1px solid ${theme.color.textPrimary};
  }
`;
