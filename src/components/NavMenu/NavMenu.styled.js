import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

// проверить стили

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  backdrop-filter: blur(12px);
  transition: ${theme.animation.transition};
  background: ${theme.color.bgBtnPrimary};
`;

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
`;
