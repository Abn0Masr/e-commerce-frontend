"use client";

import React from "react";

import FlexContainer from "@/components/ui/FlexContainer";
import Slider from "@/components/ui/Slider";
import { SwiperSlide } from "swiper/react";

const SideSlider: React.FC = () => {
  return (
    <FlexContainer fh fw className="md-fh">
      <Slider>
        <SwiperSlide className="h-full bg-black">
          <div>Omar</div>
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <div>Omar1</div>
        </SwiperSlide>
      </Slider>
    </FlexContainer>
  );
};

export default SideSlider;
