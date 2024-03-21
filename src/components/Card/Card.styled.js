import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const WrapperCardText = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 12px;
  padding: 24px 12px;
  height: 242px;
  margin-bottom: 24px;
  background-color: ${theme.color.bgSecondary};
`;

export const Text = styled.p`
  font-family: ${theme.fonts.messinaReg};
  font-size: 12px;
  font-weight: 400;
  line-height: 1.17;
  text-align: center;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};
`;

export const Title = styled.h2`
  font-family: ${theme.fonts.grotesk};
  font-size: 32px;
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  color: ${theme.color.textPrimary};
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
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 12px;
  width: 24px;
  height: 24px;
`;

export const WrapperCardImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Image = styled.img`
  height: 100%;
  border-radius: 24px;
`;
