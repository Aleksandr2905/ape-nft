import styled from "styled-components";
import { theme } from "../../stylesheet/theme";
import { Report } from "notiflix/build/notiflix-report-aio";

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

Report.init({
  width: "320px",
  backgroundColor: `${theme.color.textPrimary}`,
  borderRadius: "25px",
  rtl: false,
  zindex: 4002,
  backOverlay: true,
  backOverlayColor: "rgba(0,0,0,0.5)",
  backOverlayClickToClose: false,
  fontFamily: `${theme.fonts.messinaReg}`,
  svgSize: "110px",
  plainText: true,
  titleFontSize: "20px",
  titleMaxLength: 34,
  messageFontSize: "16px",
  messageMaxLength: 400,
  buttonFontSize: "14px",
  buttonMaxLength: 34,
  cssAnimation: true,
  cssAnimationDuration: 360,
  cssAnimationStyle: "fade",
  success: {
    svgColor: `${theme.color.accent}`,
    titleColor: `${theme.color.textSecondary}`,
    messageColor: `${theme.color.textSecondary}`,
    buttonBackground: `${theme.color.accent}`,
    buttonColor: `${theme.color.textPrimary}`,
    backOverlayColor: "rgba(0,0,0,0.5)",
  },
});
