"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import useKeyPress from "react-use-keypress";

import { Screenshot } from "../types";
import { transition } from "./config";
import Slides from "./slides";
import NextButton from "./next-button";
import PreviousButton from "./previous-button";
import Thumbnails from "./thumbnails";

interface CarouselProps {
  images: Screenshot[];
}

export function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  useKeyPress("ArrowRight", () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    }
  });

  useKeyPress("ArrowLeft", () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  });

  return (
    <MotionConfig reducedMotion="user" transition={transition}>
      <section>
        <div className="relative mx-auto flex h-full w-full flex-col justify-center md:pb-[110px]">
          <div className="relative rounded-lg lg:rounded-xl">
            <Slides images={images} index={index} />
          </div>

          <PreviousButton
            aria-label="Go to the previous slide"
            className="absolute -left-8 top-0 flex h-full w-1/2 origin-left items-center justify-start rounded-md focus:outline-none sm:-left-6 md:-left-8 md:h-[calc(100%_-_110px)]"
            onClick={() => setIndex(index - 1)}
            visible={index > 0}
          />

          <NextButton
            aria-label="Go to the next slide"
            className="absolute -right-8 top-0 flex h-full w-1/2 origin-right items-center justify-end rounded-md focus:outline-none sm:-right-6 md:-right-8 md:h-[calc(100%_-_110px)]"
            onClick={() => setIndex(index + 1)}
            visible={index + 1 < images.length}
          />

          <div className="absolute inset-x-0 bottom-6 hidden h-20 justify-center overflow-hidden py-1 md:flex">
            <Thumbnails images={images} index={index} setIndex={setIndex} />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
