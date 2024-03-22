import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 107px 12px 107px;
  height: 41px;
  backdrop-filter: blur(12px);
  border: none;
  font-family: ${theme.fonts.grotesk};
  font-size: 16px;
  font-weight: 900;
  line-height: 1.19;
  transition: ${theme.animation.transition};
  background: ${theme.color.accent};
  color: ${theme.color.textPrimary};

  &:hover {
    color: ${theme.color.textSecondary};
  }
`;
