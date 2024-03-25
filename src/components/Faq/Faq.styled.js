import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WrapItem = styled.div`
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;
  position: relative;
  padding: 8px 8px 10px;
  cursor: pointer;
  counter-increment: list-counter;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 592px;
    margin: auto;
    padding: 24px;
    gap: 22px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1034px;
    margin: auto;
    padding: 18px 16px 24px 297px;
    gap: 22px;
  }

  &:before {
    content: "[ " counter(list-counter) " ]";
    padding-top: 8px;
    white-space: nowrap;
    font-family: ${theme.fonts.biro};
    font-size: 12px;
    font-weight: 400;
    line-height: 1;
    transition: ${theme.animation.transition};
    color: ${theme.color.accent};

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      padding-top: 14px;
      font-size: 24px;
      line-height: 1.67;
    }
  }

  &:hover::before {
    color: ${theme.color.textPrimary};
  }

  ${(props) =>
    props.$active &&
    `
    padding: 8px 8px 10px;
    border-radius: 12px;
    color: ${theme.color.accent};
    background-color: ${theme.color.bgSecondary};

    &:before {
    color: ${theme.color.textPrimary};
  }
  > ${WrapItem} > ${Content} > ${Title} {
    color: ${theme.color.accent};
  }
  > ${WrapItem} > ${Content} > ${Text} {
    display: block;
  }
   > ${WrapItem}> ${ImageWrap} {
    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      display: block;
  }

 `}
`;

export const ImageWrap = styled.div`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    position: absolute;
    z-index: 10;
    left: 20px;
    width: auto;
    height: 183px;
    border-radius: 16px;
    overflow: hidden;
    transform: rotate(-16deg);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: auto;
    height: 282px;
    border-radius: 24px;
    transform: rotate(-8deg);
  }
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 635px;
    gap: 36px;
  }
`;

export const Title = styled.h3`
  font-family: ${theme.fonts.grotesk};
  font-size: 20px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  transition: ${theme.animation.transition};
  color: ${theme.color.textPrimary};

  &:hover {
    color: ${theme.color.accent};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 32px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const Text = styled.p`
  display: none;
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
    line-height: 1.19;
  }
`;
