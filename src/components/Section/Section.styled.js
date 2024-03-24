import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Section = styled.section`
  min-width: ${theme.breakpoints.mobileMin};
  max-width: ${theme.breakpoints.mobileMax};
  margin: 0 auto;
  padding: 0 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: none;
    max-width: none;
    padding: 0 16px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 64px;
  margin-top: 60px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 0 72px;
    margin-top: 80px;
  }
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

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 40px;
    font-size: 80px;
    line-height: 1;
  }
`;
