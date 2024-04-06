import PropTypes from "prop-types";
import { modalNavBtn } from "../../data/modalNavBtn";
import * as s from "./NavMenu.styled";

const NavMenu = ({ onClose }) => {
  return (
    <s.NavWrapper>
      {modalNavBtn.map((item) => (
        <s.Button key={item.id} href={`${item.id}`} onClick={onClose}>
          {item.text}
        </s.Button>
      ))}
    </s.NavWrapper>
  );
};

NavMenu.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default NavMenu;
