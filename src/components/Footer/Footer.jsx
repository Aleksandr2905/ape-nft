import { footer } from "../../data/dataText";
import Section from "../Section/Section";
import * as s from "./Footer.styled";

const Footer = () => {
  return (
    <Section>
      <s.Copyright>{footer.copyright}</s.Copyright>
    </Section>
  );
};

export default Footer;
