import { social } from "../../data/social";
import * as s from "./Social.styled";

const SocialMenu = () => {
  return (
    <s.Wrapper>
      {social.map(({ id, link, icon, ariaLabel }) => (
        <s.Button
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
        >
          <s.Icon>{icon()}</s.Icon>
        </s.Button>
      ))}
    </s.Wrapper>
  );
};

export default SocialMenu;
