import X from "../../assets/icons/add-sharp.svg?react";
import Section from "../Section/Section";
import Form from "../Form/Form";
import * as s from "./Mint.styled";

const Mint = () => {
  return (
    <Section id="mint" title="Are you in?">
      <s.Wrapper>
        <s.Icon>
          <X />
        </s.Icon>
        <s.Text>
          Join the YACHT APE community to be one of the first to receive our
          limited edition NFT
        </s.Text>
        <Form />
      </s.Wrapper>
    </Section>
  );
};

export default Mint;
