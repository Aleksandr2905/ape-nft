import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import Card from "../Card/Card";

const Slider = ({ cards }) => {
  const refSlider = useRef(null);

  const handlePrev = () => {
    refSlider.current.swiper.slidePrev(1000);
  };
  const handleNext = () => {
    refSlider.current.swiper.slideNext(1000);
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
        // spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        enabled={{ parallax: true }}
      >
        {slideCards}
      </Swiper>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </>
  );
};

export default Slider;
