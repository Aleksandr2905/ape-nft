import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
  backdrop-filter: blur(12px);
  transition: ${theme.animation.transition};
  background: ${theme.color.bgBtnPrimary};
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  padding: 10px 0;
  border: none;
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  text-transform: uppercase;
  transition: ${theme.animation.transition};
  color: ${theme.color.textSecondary};

  &:hover {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.color.textPrimary};
  }

  &:focus {
    outline: 1px solid ${theme.color.textPrimary};
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.color.textPrimary};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 80px;
    height: 80px;
    font-size: 16px;
    line-height: 1.19;
  }
`;
