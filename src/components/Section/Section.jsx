import * as s from "./Section.styled";

const Section = ({ id, children, title, titleAccent }) => {
  return (
    <s.Section id={id}>
      <s.Container>
        {id === "about" ? (
          <s.TitleAbout>
            {title} <span>{titleAccent}</span>
          </s.TitleAbout>
        ) : (
          <s.Title>{title}</s.Title>
        )}

        {children}
      </s.Container>
    </s.Section>
  );
};

export default Section;
