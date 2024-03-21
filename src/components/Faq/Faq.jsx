import Section from "../Section/Section";
import { cardFaq } from "../../data/cardFaq";
import * as s from "./Faq.styled";
import { useState } from "react";

const Faq = () => {
  const [activeItem, setActiveItem] = useState(1);

  return (
    <Section id="faq" title="FAQ">
      <s.Wrapper>
        {cardFaq.map((item) => (
          <s.Item
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            $active={activeItem === item.id}
          >
            <s.Image
              srcSet={`${item.oneX} 1x, ${item.twoX} 2x`}
              src={item.oneX}
              alt={`"Card faq ${item.id}"`}
            />
            <s.Content>
              <s.Title>{item.title}</s.Title>
              <s.Text>{item.text}</s.Text>
            </s.Content>
          </s.Item>
        ))}
      </s.Wrapper>
    </Section>
  );
};

export default Faq;
