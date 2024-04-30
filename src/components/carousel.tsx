"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Keyboard, Navigation } from "swiper/modules";
import type { Screenshot } from "./types";

import "swiper/css";
import "swiper/css/navigation";

interface CarouselProps {
  screenshots: Screenshot[];
}

export function Carousel({ screenshots }: CarouselProps) {
  const handleSlideChange = (swiper: SwiperClass) => {
    const slides = swiper.slides;
    slides.forEach((slide, index) => {
      slide.style.transition =
        "opacity 0.3s ease-in-out, transform 0.3s ease-out";
      if (index === swiper.activeIndex) {
        slide.style.opacity = "1";
        slide.style.transform = "scale(1)";
      } else {
        slide.style.opacity = "0.2";
        slide.style.transform = "scale(0.93)";
      }
    });
  };

  return (
    <Swiper
      breakpoints={{}}
      centeredSlides={true}
      className="[--swiper-theme-color:#ffffff]"
      keyboard={{
        enabled: true,
      }}
      modules={[Keyboard, Navigation]}
      navigation={true}
      onInit={handleSlideChange}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      slidesPerView={"auto"}
      spaceBetween={16}
    >
      {screenshots.map((screenshot, i) => (
        <SwiperSlide
          className="!w-full max-w-4xl px-4 py-20"
          key={`${screenshot.src}`}
        >
          <Image
            alt={`${screenshot.alt}`}
            className="aspect-[5/3] select-none rounded-lg object-cover shadow-lg lg:rounded-xl lg:shadow-2xl"
            draggable={false}
            height={1728}
            key={screenshot.src}
            loading={i === 0 ? "eager" : "lazy"}
            src={screenshot.src}
            width={2880}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
