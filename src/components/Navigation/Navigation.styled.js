import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  border-radius: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: inherit;
  padding: 10px;
  width: 48px;
  height: 48px;
  border: none;
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  backdrop-filter: blur(12px);
  transition: ${theme.animation.transition};
  background: ${theme.color.bgBtnPrimary};
  color: ${theme.color.textSecondary};

  &:hover {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: ${theme.color.textPrimary};
  }
`;
