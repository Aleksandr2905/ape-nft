import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 592px;
    margin: 0 auto;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1032px;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.grotesk};
  font-size: 40px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 16px;
  white-space: pre-wrap;
  color: ${theme.color.textPrimary};

  & span {
    color: ${theme.color.accent};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 269px;
    font-size: 60px;
    white-space: normal;
    margin-bottom: 68px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 538px;
    font-size: 120px;
    margin-bottom: 56px;
  }
`;

export const Text = styled.p`
  min-width: 216px;
  font-family: ${theme.fonts.messinaReg};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.19;
  text-indent: 50%;
  text-transform: uppercase;
  text-align: right;
  margin-bottom: 36px;
  color: ${theme.color.textPrimary};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 275px;
    text-indent: initial;
    white-space: pre-wrap;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 409px;
    font-size: 24px;
    line-height: 1.21;
    margin-bottom: 0;
  }
`;

export const WrapSecondaryText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 16px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 269px;
    gap: 24px;
    margin-bottom: 36px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 417px;
    gap: 36px;
    margin-bottom: 40px;
  }
`;

export const SecondaryText = styled.p`
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;
  text-align: center;
  color: ${theme.color.textPrimary};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
    line-height: 1.19;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 313px;
    height: 422px;
    position: absolute;
    bottom: 0;
    right: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 492px;
    height: 662px;
  }
`;
