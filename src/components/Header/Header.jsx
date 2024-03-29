import Logo from "../../assets/icons/logo.svg?react";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import * as s from "./Header.styled";

const Header = () => {
  return (
    <s.Container>
      <a href="/" aria-label="Link to page Ape NFT">
        <s.Icon>
          <Logo />
        </s.Icon>
      </a>
      <BurgerMenu />
    </s.Container>
  );
};

export default Header;
