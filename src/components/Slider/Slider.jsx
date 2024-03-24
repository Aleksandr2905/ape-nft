import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import Card from "../Card/Card";
import * as s from "./Slider.styled";
import { theme } from "../../stylesheet/theme";

const Slider = ({ cards }) => {
  const refSlider = useRef(null);
  const breakpoints = {
    [theme.breakpoints.desktop.slice(0, -2)]: {
      slidesPerView: 4,
    },
    [theme.breakpoints.tablet.slice(0, -2)]: {
      slidesPerView: 2,
    },
  };

  const handlePrev = () => {
    refSlider.current.swiper.slidePrev(500);
  };
  const handleNext = () => {
    refSlider.current.swiper.slideNext(500);
  };

  const slideCards = cards.map((card) => (
    <SwiperSlide key={card.id}>
      <Card card={card} />
    </SwiperSlide>
  ));

  return (
    <>
      <Swiper
        ref={refSlider}
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={breakpoints}
      >
        {slideCards}
      </Swiper>
      <s.ButtonWrapper>
        <s.Button onClick={handlePrev}>Prev</s.Button>
        <s.Button onClick={handleNext}>Next</s.Button>
      </s.ButtonWrapper>
    </>
  );
};

export default Slider;
