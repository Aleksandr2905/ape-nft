import { createPortal } from "react-dom";
import Logo from "../../assets/icons/logo.svg?react";
import { modalNavBtn } from "../../data/modalNavBtn";
import Footer from "../Footer/Footer";

const modal = document.getElementById("modal");

const MobileMenu = ({ onClose }) => {
  return createPortal(
    <div>
      <div>
        <a href="#">
          <Logo />
        </a>
        <div>
          <button>Close</button>
          <a href="">discord</a>
          <a href="">opensea</a>
          <a href="">twitter</a>
        </div>
      </div>
      <div>
        {modalNavBtn.map((item) => (
          <a key={item.id} href={`${item.id}`} onClick={onClose}>
            {item.text}
          </a>
        ))}
      </div>
      <Footer />
    </div>,
    modal
  );
};

export default MobileMenu;
