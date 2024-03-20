import Section from "../Section/Section";
import Slider from "../Slider/Slider";
import { cardsMindMap } from "../../data/cardsMindMap";

const MindMap = () => {
  return (
    <Section id="mindMap" title="MIND map">
      <Slider cards={cardsMindMap} />
    </Section>
  );
};

export default MindMap;
