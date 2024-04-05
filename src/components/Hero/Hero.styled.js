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

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    height: 677px;
    margin-top: 16px;
  }
`;

export const Content = styled.div`
  position: relative;
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

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: 1019px;
    padding-top: 36px;
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

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.67;
  }
`;

export const AccentTitleSecond = styled.p`
  font-family: ${theme.fonts.biro};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.69;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.65;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.67;
    margin-left: 120px;
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

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 164px;
    word-spacing: 240px;
    margin-bottom: 30px;
  }
`;

export const Image = styled.img`
  width: 216px;
  height: 284px;
  margin: auto;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    position: absolute;
    width: 283px;
    height: 386px;
    left: 132px;
    bottom: -11px;
    z-index: 5;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 463px;
    height: 612px;
    left: 246px;
    bottom: -50px;
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

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 337px;
    gap: 28px;
    right: 0;
    bottom: 20px;
  }
`;

export const Button = styled.a`
  border-radius: 8px;
  padding: 10px 12px;
  margin-bottom: 12px;
  width: 100%;
  height: 41px;
  font-family: ${theme.fonts.grotesk};
  font-size: 16px;
  font-weight: 900;
  line-height: 1.19;
  transition: ${theme.animation.transition};
  backdrop-filter: blur(12px);
  background-color: ${theme.color.bgBtnPrimary};

  &:hover {
    color: ${theme.color.textPrimary};
  }

  &:focus {
    outline: 1px solid ${theme.color.textPrimary};
    color: ${theme.color.textPrimary};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    border-radius: 12px;
    padding: 16px 20px;
    height: 70px;
    font-size: 28px;
    line-height: 1.21;
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

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    text-indent: 24%;
    font-size: 16px;
    line-height: 1.19;
  }
`;
