import * as s from "./Section.styled";

const Section = ({ id, children, title, titleAccent }) => {
  return (
    <s.Section id={id}>
      <s.Container>
        <s.Title>{title}</s.Title>
        {children}
      </s.Container>
    </s.Section>
  );
};

export default Section;
