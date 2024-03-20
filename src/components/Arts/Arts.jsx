import Section from "../Section/Section";
import Slider from "../Slider/Slider";
import { cardsArts } from "../../data/cardArts";

const Arts = () => {
  return (
    <Section id="collection" title="COLLECTION">
      <Slider cards={cardsArts} />
    </Section>
  );
};

export default Arts;
