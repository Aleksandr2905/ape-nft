import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  gap: 8px;
  padding: 8px 8px 10px;
  cursor: pointer;
  counter-increment: list-counter;

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
  > ${Content} > ${Title} {
    color: ${theme.color.accent};
  }
  > ${Content} > ${Text} {
    display: block;
  }
 `}
`;

export const Image = styled.img`
  display: none;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
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
`;

export const Text = styled.p`
  display: none;
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};
`;
