"use client";

import React from "react";
import { Swiper } from "swiper/react";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SliderProps {
  children: React.ReactNode;
}

const Slider: React.FC<SliderProps> = ({ children }) => {
  return <Swiper className="h-full">{children}</Swiper>;
};

export default Slider;
