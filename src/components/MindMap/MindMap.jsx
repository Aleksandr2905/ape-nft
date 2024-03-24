import Section from "../Section/Section";
import Slider from "../Slider/Slider";
import { cardsMindMap } from "../../data/cardsMindMap";
import Card from "../Card/Card";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import * as s from "./MindMap.styled";

const MindMap = () => {
  const screen = useScreenWidth();
  return (
    <Section id="mindMap" title="MIND map">
      {screen === "mobile" ? (
        <Slider cards={cardsMindMap} />
      ) : (
        <s.List>
          {cardsMindMap.map((card) => (
            <li key={card.id}>
              <Card card={card} />
            </li>
          ))}
        </s.List>
      )}
    </Section>
  );
};

export default MindMap;
