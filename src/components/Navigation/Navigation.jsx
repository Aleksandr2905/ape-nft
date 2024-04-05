import { useEffect, useState } from "react";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavMenu from "../NavMenu/NavMenu";
import * as s from "./Navigation.styled";

const Navigation = () => {
  const [isOpenNavigation, setIsOpenNavigation] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const screen = useScreenWidth();

  useEffect(() => {
    setShowMobileMenu(screen === "mobile");
  }, [screen]);

  const toggleNavigationVisibility = () => {
    setIsOpenNavigation(!isOpenNavigation);
  };

  return (
    <s.Wrapper>
      <s.Button type="button" onClick={toggleNavigationVisibility}>
        {!isOpenNavigation ? "MENU" : "CLOSE"}
      </s.Button>
      {isOpenNavigation ? (
        showMobileMenu ? (
          <MobileMenu onClose={toggleNavigationVisibility} />
        ) : (
          <NavMenu onClose={toggleNavigationVisibility} />
        )
      ) : null}
    </s.Wrapper>
  );
};

export default Navigation;
