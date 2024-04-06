import { useEffect, useState } from "react";
import X from "../../assets/icons/add-sharp.svg?react";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { aboutImageAdaptive } from "../../data/aboutImage";
import { about } from "../../data/dataText";
import Section from "../Section/Section";
import Banner from "../Banner/Banner";
import * as s from "./About.styled";

const About = () => {
  const screenWidth = useScreenWidth();
  const [imageAdaptive, setImageAdaptive] = useState(
    aboutImageAdaptive[screenWidth]
  );
  const { title, titleSpan, text, secondaryText } = about;

  useEffect(() => {
    setImageAdaptive(aboutImageAdaptive[screenWidth]);
  }, [screenWidth]);

  return (
    <>
      <Section id="about">
        <s.Wrapper>
          <s.Title>
            {title} <span>{titleSpan}</span>
          </s.Title>
          <s.Text>{text}</s.Text>
          <s.WrapSecondaryText>
            <X />
            <s.SecondaryText>{secondaryText}</s.SecondaryText>
          </s.WrapSecondaryText>
          <picture>
            <source
              srcSet={`${imageAdaptive.oneWebpX} 1x, ${imageAdaptive.twoWebpX} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${imageAdaptive.oneX} 1x, ${imageAdaptive.twoX} 2x`}
              type="image/jpeg"
            />
            <s.Img
              src={imageAdaptive.oneX}
              alt="ape section about"
              loading="lazy"
            />
          </picture>
        </s.Wrapper>
      </Section>
      <Banner />
    </>
  );
};

export default About;
