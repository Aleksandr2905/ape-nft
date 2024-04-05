import Logo from "../../assets/icons/logo.svg?react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import * as s from "./Header.styled";

const Header = () => {
  return (
    <s.Container>
      <s.LogoLink href="/" aria-label="Link to page Ape NFT">
        <Logo />
      </s.LogoLink>
      <BurgerMenu />
    </s.Container>
  );
};

export default Header;
