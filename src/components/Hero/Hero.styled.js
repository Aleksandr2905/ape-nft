import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const SectionWrapper = styled.section`
  position: relative;
  min-width: ${theme.breakpoints.mobileMin};
  max-width: ${theme.breakpoints.mobileMax};
  margin: 0 auto;
  padding: 0 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: none;
    padding: 0 16px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  padding: 36px 64px 19px;
  border-radius: 12px;
  text-align: center;
  margin-top: 54px;
  background-color: ${theme.color.accent};
  color: ${theme.color.textSecondary};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 421px;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 591px;
    align-items: flex-start;
    margin-top: 96px;
  }
`;

export const AccentTitle = styled.p`
  font-family: ${theme.fonts.biro};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.69;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.65;
  }
`;

export const MainTitle = styled.h1`
  font-family: ${theme.fonts.grotesk};
  font-size: 44px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: 0.01em;
  margin-bottom: 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 92px;
    line-height: 1;
    word-spacing: 154px;
    margin-bottom: 16px;
  }
`;

export const Image = styled.picture`
  display: flex;
  width: 216px;
  height: 284px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    position: absolute;
    width: 283px;
    height: 386px;
    left: 206px;
    bottom: 0;
    z-index: 5;
  }
`;

export const SecondaryBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: column-reverse;
    position: relative;
    bottom: 16px;
    right: 8px;
    gap: 16px;
    width: 190px;
    margin-left: auto;
    z-index: 5;
  }
`;

export const Button = styled.a`
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 12px;
  width: 100%;
  height: 41px;
  transition: ${theme.animation.transition};
  backdrop-filter: blur(12px);
  background-color: ${theme.color.bgBtnPrimary};

  &:hover {
    color: ${theme.color.textPrimary};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }
`;

export const Text = styled.p`
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    text-align: justify;
    text-indent: 40%;
  }
`;
