"use client";

import { useState } from "react";
import { MotionConfig } from "framer-motion";
import useKeyPress from "react-use-keypress";

import { Screenshot } from "../types";
import { config } from "./config";
import Slides from "./slides";
import NextButton from "./next-button";
import PreviousButton from "./previous-button";
import Dock from "./dock";

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
    <MotionConfig reducedMotion="user" transition={config.transition}>
      <section>
        <div className="relative mx-auto flex h-full w-full flex-col justify-center md:pb-[110px]">
          <div className="relative rounded-lg lg:rounded-xl">
            <Slides images={images} index={index} />
          </div>

          <PreviousButton
            aria-label="Go to the previous slide"
            className="absolute -left-12 top-1/2 flex h-20 w-20 origin-center -translate-y-1/2 items-center justify-center rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral-900 sm:-left-10 md:-left-8 dark:focus-visible:ring-neutral-200"
            onClick={() => setIndex(index - 1)}
            visible={index > 0}
          />

          <NextButton
            aria-label="Go to the next slide"
            className="absolute -right-12 top-1/2 flex h-20 w-20 origin-center -translate-y-1/2 items-center justify-center rounded-full focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-neutral-900 sm:-right-10 md:-right-8 dark:focus-visible:ring-neutral-200"
            onClick={() => setIndex(index + 1)}
            visible={index + 1 < images.length}
          />

          <div className="absolute inset-x-0 bottom-6 hidden h-20 justify-center overflow-hidden py-1 md:flex">
            <Dock images={images} index={index} setIndex={setIndex} />
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
