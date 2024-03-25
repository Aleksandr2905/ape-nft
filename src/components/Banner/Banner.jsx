import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import X from "../../assets/icons/add-sharp.svg?react";
import * as s from "./Banner.styled";

const Banner = () => {
  const textRef = useRef(null);
  const spanRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { x: "100%" },
      {
        x: -spanRef.current.clientWidth,
        duration: 10,
        repeat: -1,
        ease: "none",
      }
    );
  });

  return (
    <s.BannerContainer>
      <s.Text ref={textRef}>
        <span ref={spanRef}>
          Destroy stereotypes{" "}
          <s.Icons>
            <X />
          </s.Icons>
        </span>
        <span>
          HAVE NO LIMITS{" "}
          <s.Icons>
            <X />
          </s.Icons>
        </span>
        <span>
          Break rules{" "}
          <s.Icons>
            <X />
          </s.Icons>
        </span>
      </s.Text>
    </s.BannerContainer>
  );
};

export default Banner;
