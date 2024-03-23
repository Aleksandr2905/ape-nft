import Navigation from "../Navigation/Navigation";
import SocialMenu from "../SocialMenu/SocialMenu";
import * as s from "./BurgerMenu.styled";

const BurgerMenu = () => {
  return (
    <s.Wrapper>
      <Navigation />
      <SocialMenu />
    </s.Wrapper>
  );
};

export default BurgerMenu;
