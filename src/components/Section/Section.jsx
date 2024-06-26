import PropTypes from "prop-types";
import * as s from "./Section.styled";

const Section = ({ id, children, title }) => {
  return (
    <s.Section id={id}>
      <s.Container>
        <s.Title>{title}</s.Title>
        {children}
      </s.Container>
    </s.Section>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Section;
