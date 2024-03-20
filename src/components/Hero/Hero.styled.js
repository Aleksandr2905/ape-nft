import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const SectionWrapper = styled.section`
  min-width: 360px;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 8px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  padding: 36px 64px 19px;
  border-radius: 12px;
  text-align: center;
  margin-top: 54px;
  background-color: ${theme.color.accent};
  color: ${theme.color.textSecondary};
`;

export const AccentTitle = styled.p`
  font-family: ${theme.fonts.biro};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.69;
  /* color: ${theme.color.textSecondary}; */
`;

export const MainTitle = styled.h1`
  font-family: ${theme.fonts.grotesk};
  font-size: 44px;
  line-height: 1;
  letter-spacing: 0.01em;
  margin-bottom: 8px;
  /* color: ${theme.color.textSecondary}; */
`;

// export const Image = styled.picture`
//   width: 100%;
//   height: 284px;
// `;

export const Button = styled.a`
  border-radius: 8px;
  padding: 10px 70px 12px 70px;
  margin-bottom: 12px;
  width: 100%;
  height: 41px;
  transition: ${theme.animation.transition};
  backdrop-filter: blur(12px);
  background-color: ${theme.color.bgBtnPrimary};

  &:hover {
    color: ${theme.color.textPrimary};
  }
`;

export const Text = styled.p`
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  /* text-align: center; */
  /* color: ${theme.color.textSecondary}; */
`;
