import styled from "styled-components";
import { theme } from "../../stylesheet/theme";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: absolute;
  right: 0px;
  left: 0px;
  min-width: ${theme.breakpoints.mobileMin};
  max-width: ${theme.breakpoints.mobileMax};
  padding: 8px 16px 0;
  z-index: 10;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: none;
    padding: 12px 28px 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 12px 54px 0;
  }
`;

export const LogoLink = styled.a`
  margin-top: 8px;
  width: 48px;
  height: 32px;
  cursor: pointer;
  transition: ${theme.animation.transition};

  &:focus {
    outline: 1px solid ${theme.color.textPrimary};

    & svg {
      fill: ${theme.color.textPrimary};
    }
  }

  & svg {
    fill: ${theme.color.textSecondary};

    &:hover {
      fill: ${theme.color.textPrimary};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 72px;
      height: 50px;
    }
  }
`;

// export const Icon = styled.div`
//   margin-top: 8px;
//   width: 48px;
//   height: 32px;
//   cursor: pointer;
//   transition: ${theme.animation.transition};

//   & svg {
//     fill: ${theme.color.textSecondary};

//     &:hover {
//       fill: ${theme.color.textPrimary};
//     }

//     @media screen and (min-width: ${theme.breakpoints.desktop}) {
//       width: 72px;
//       height: 50px;
//     }
//   }
// `;
