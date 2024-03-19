import X from "../../assets/icons/add-sharp.svg?react";
import * as s from "./Banner.styled";

const Banner = () => {
  return (
    <s.BannerContainer>
      <s.Text>
        <s.Icons>
          <X />
        </s.Icons>
        Destroy stereotypes
        <s.Icons>
          <X />
        </s.Icons>
        HAVE NO LIMITS
        <s.Icons>
          <X />
        </s.Icons>
        Break rules
        <s.Icons>
          <X />
        </s.Icons>
      </s.Text>
    </s.BannerContainer>
  );
};

export default Banner;
