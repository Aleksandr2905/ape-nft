import PropTypes from "prop-types";
import * as s from "./Card.styled";

const Card = ({ card }) => {
  const { name, title, text, icon, oneX, twoX, webp, webp2X, alt } = card;
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
    case "img":
      return (
        <s.WrapperCardImg>
          <picture>
            <source srcSet={`${webp} 1x, ${webp2X} 2x`} type="image/webp" />
            <source srcSet={`${oneX} 1x, ${twoX} 2x`} type="image/jpeg" />
            <s.Image src={oneX} alt={alt} loading="lazy" />
          </picture>
        </s.WrapperCardImg>
      );
    default:
      return;
  }
};

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.oneOf(["text", "link", "img"]).isRequired,
    title: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.func,
    oneX: PropTypes.string,
    twoX: PropTypes.string,
    webp: PropTypes.string,
    webp2X: PropTypes.string,
    alt: PropTypes.string,
  }).isRequired,
};

export default Card;
