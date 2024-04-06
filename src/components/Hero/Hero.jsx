import { useEffect, useState } from "react";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import { heroImageAdaptive } from "../../data/heroImage";
import { hero } from "../../data/dataText";
import Header from "../Header/Header";
import * as s from "./Hero.styled";

const Hero = () => {
  const screenWidth = useScreenWidth();
  const [imageAdaptive, setImageAdaptive] = useState(
    heroImageAdaptive[screenWidth]
  );
  const { accentTitle, mainTitle, accentTitleSecond, text } = hero;

  useEffect(() => {
    setImageAdaptive(heroImageAdaptive[screenWidth]);
  }, [screenWidth]);

  return (
    <>
      <s.SectionWrapper>
        <Header />
        <s.Container>
          <s.Content>
            <s.WrapTitle>
              <s.AccentTitle>{accentTitle}</s.AccentTitle>
              <s.MainTitle>{mainTitle}</s.MainTitle>
              <s.AccentTitleSecond>{accentTitleSecond}</s.AccentTitleSecond>
            </s.WrapTitle>
            <picture>
              <source
                srcSet={`${imageAdaptive.oneWebpX} 1x, ${imageAdaptive.twoWebpX} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${imageAdaptive.oneX} 1x, ${imageAdaptive.twoX} 2x`}
                type="image/jpeg"
              />
              <s.Image src={imageAdaptive.oneX} alt="ape section hero" />
            </picture>
            <s.SecondaryBlock>
              <s.Button href="#mint">MEET APES</s.Button>
              <s.Text>{text}</s.Text>
            </s.SecondaryBlock>
          </s.Content>
        </s.Container>
      </s.SectionWrapper>
    </>
  );
};

export default Hero;
