import { useEffect, useState } from "react";
import { useScreenWidth } from "../../hooks/useScreenWidth";
import * as s from "./Hero.styled";
import { heroImageAdaptive } from "../../data/heroImage";

const Hero = () => {
  const screenWidth = useScreenWidth();
  const [imageAdaptive, setImageAdaptive] = useState(
    heroImageAdaptive[screenWidth]
  );

  useEffect(() => {
    setImageAdaptive(heroImageAdaptive[screenWidth]);
  }, [screenWidth]);

  return (
    <s.SectionWrapper>
      <s.Container>
        <s.AccentTitle>diD yOu seE iT ?</s.AccentTitle>
        <s.MainTitle>YACHT APES</s.MainTitle>
        <s.AccentTitle>Apes aRe eveRywhere</s.AccentTitle>
        <s.Image style={{ width: "100%" }}>
          <source
            srcSet={`${imageAdaptive.oneWebpX} 1x, ${imageAdaptive.twoWebpX} 2x`}
          />
          <source
            srcSet={`${imageAdaptive.oneX} 1x, ${imageAdaptive.twoX} 2x`}
          />
          <img src={imageAdaptive.oneX} alt="apes" />
        </s.Image>
        <s.Button href="#mint">MEET APES</s.Button>
        <s.Text>
          Yacht Ape is a collection of unique digital apes that you can own in
          NFT format
        </s.Text>
      </s.Container>
    </s.SectionWrapper>
  );
};

export default Hero;
