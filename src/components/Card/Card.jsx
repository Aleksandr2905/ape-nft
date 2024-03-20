import * as s from "./Card.styled";

const Card = ({ card }) => {
  const { name, title, text, icon } = card;
  switch (name) {
    case "text":
      return (
        <s.WrapperCardText>
          <s.Text>{text}</s.Text>
          <s.Title>{title}</s.Title>
        </s.WrapperCardText>
      );
    case "link":
      return (
        <s.WrapperCardLink
          href="https://opensea.io/collection/boredapeyachtclub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to opensea"
        >
          <s.IconWrapper>{icon()}</s.IconWrapper>
          <s.Title>{title}</s.Title>
        </s.WrapperCardLink>
      );
    default:
      return;
  }
};

export default Card;
