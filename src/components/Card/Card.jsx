const Card = ({ card }) => {
  const { name, title, text, icon } = card;
  switch (name) {
    case "text":
      return (
        <div>
          <p>{text}</p>
          <h2>{title}</h2>
        </div>
      );
    case "link":
      return (
        <a
          href="https://opensea.io/collection/boredapeyachtclub"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link to opensea"
        >
          <div>{icon()}</div>
          <h2>{title}</h2>
        </a>
      );
    default:
      return;
  }
};

export default Card;
