import { createPortal } from "react-dom";
import Logo from "../../assets/icons/logo.svg?react";
import { modalNavBtn } from "../../data/modalNavBtn";
import Footer from "../Footer/Footer";
import { social } from "../../data/social";
import * as s from "./MobileMenu.styled";

const modal = document.getElementById("modal");

const MobileMenu = ({ onClose }) => {
  return createPortal(
    <s.Wrapper>
      <s.Container>
        <s.LogoLink href="/" aria-label="Link to page Ape NFT">
          <Logo />
        </s.LogoLink>
        <s.NavWrap>
          <s.CloseBtn type="button" onClick={onClose}>
            Close
          </s.CloseBtn>
          <s.SocialWrap>
            {social.map(({ id, link, icon, ariaLabel }) => (
              <s.SocialBtn
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
              >
                <s.Icon>{icon()}</s.Icon>
              </s.SocialBtn>
            ))}
          </s.SocialWrap>
        </s.NavWrap>
      </s.Container>
      <s.NavBtnWrap>
        {modalNavBtn.map((item) => (
          <s.NavBtn key={item.id} href={`${item.id}`} onClick={onClose}>
            {item.text}
          </s.NavBtn>
        ))}
      </s.NavBtnWrap>
      <Footer />
    </s.Wrapper>,
    modal
  );
};

export default MobileMenu;
