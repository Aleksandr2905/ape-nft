import { useEffect, useState } from "react";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import * as s from "./Hero.styled";
import { heroImageAdaptive } from "../../data/heroImage";
import Header from "../Header/Header";

const Hero = () => {
  const screenWidth = useScreenWidth();
  const [imageAdaptive, setImageAdaptive] = useState(
    heroImageAdaptive[screenWidth]
  );

  useEffect(() => {
    setImageAdaptive(heroImageAdaptive[screenWidth]);
  }, [screenWidth]);

  return (
    <>
      <s.SectionWrapper>
        <Header />
        <s.Container>
          <s.AccentTitle>diD yOu seE iT ?</s.AccentTitle>
          <s.MainTitle>YACHT APES</s.MainTitle>
          <s.AccentTitle>Apes aRe eveRywhere</s.AccentTitle>
          <picture>
            <source
              srcSet={`${imageAdaptive.oneWebpX} 1x, ${imageAdaptive.twoWebpX} 2x`}
              type="image/webp"
            />
            <source
              srcSet={`${imageAdaptive.oneX} 1x, ${imageAdaptive.twoX} 2x`}
              type="image/jpeg"
            />
            <img src={imageAdaptive.oneX} alt="apes" />
          </picture>
          <s.Button href="#mint">MEET APES</s.Button>
          <s.Text>
            Yacht Ape is a collection of unique digital apes that you can own in
            NFT format
          </s.Text>
        </s.Container>
      </s.SectionWrapper>
    </>
  );
};

export default Hero;
