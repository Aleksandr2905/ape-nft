import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Section = styled.section`
  min-width: 360px;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 8px;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 64px;
  margin-top: 60px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-family: ${theme.fonts.grotesk};
  font-size: 44px;
  font-weight: 900;
  line-height: 0.91;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};
`;

export const TitleAbout = styled.h3`
  font-family: ${theme.fonts.grotesk};
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};

  & span {
    color: ${theme.color.accent};
  }
`;
