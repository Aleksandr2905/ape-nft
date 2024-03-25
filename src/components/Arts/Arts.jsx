import Section from "../Section/Section";
import Slider from "../Slider/Slider";
import { cardsArts } from "../../data/cardArts";
import * as s from "./Arts.styled";

const Arts = () => {
  return (
    <Section id="collection" title="COLLECTION">
      <s.Wrapper>
        <Slider cards={cardsArts} />
      </s.Wrapper>
    </Section>
  );
};

export default Arts;
