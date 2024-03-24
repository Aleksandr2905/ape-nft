import { useEffect, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import NavMenu from "../NavMenu/NavMenu";
import { useScreenWidth } from "../../hooks/useScreenWidth";
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
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
