import { useState } from "react";
import { cardFaq } from "../../data/cardFaq";
import Section from "../Section/Section";
import * as s from "./Faq.styled";

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
            <s.WrapItem>
              <s.ImageWrap>
                <s.Image
                  srcSet={`${item.oneX} 1x, ${item.twoX} 2x`}
                  src={item.oneX}
                  alt={`"Image ape faq ${item.id}"`}
                  loading="lazy"
                />
              </s.ImageWrap>
              <s.Content>
                <s.Title>{item.title}</s.Title>
                <s.Text>{item.text}</s.Text>
              </s.Content>
            </s.WrapItem>
          </s.Item>
        ))}
      </s.Wrapper>
    </Section>
  );
};

export default Faq;
