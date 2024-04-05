import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const WrapperCardText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 12px;
  padding: 24px 12px;
  height: 242px;
  background-color: ${theme.color.bgSecondary};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    height: 480px;
    border-radius: 24px;
    padding: 24px;
  }
`;

export const Text = styled.p`
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: start;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 128px;
    margin-left: auto;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 228px;
    margin-left: auto;
    font-size: 24px;
    line-height: 1.21;
  }
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.grotesk};
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 64px;
  }
`;

export const WrapperCardLink = styled.a`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 12px;
  padding: 24px;
  height: 242px;
  margin-bottom: 24px;
  background-color: ${theme.color.accent};
  --icon-padding: 12px;

  &:hover {
    --icon-padding: 0 0 12px 12px;
  }
  &:focus {
    outline: 1px solid ${theme.color.textPrimary};
    --icon-padding: 0 0 12px 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    height: 480px;
    border-radius: 24px;
    padding: 24px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: var(--icon-padding);

  & svg {
    width: 24px;
    height: 24px;
    fill: ${theme.color.textPrimary};

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 64px;
      height: 64px;
    }
  }
`;

export const WrapperCardImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 24px;
  height: 100%;
  border-radius: 24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 284px;
    height: 336px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 240px;
    height: 280px;
  }
`;

export const Image = styled.img`
  height: 100%;
  border-radius: 24px;
  object-fit: cover;
`;
