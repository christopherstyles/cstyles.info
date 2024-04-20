import Image from "next/image";
import { motion } from "framer-motion";

import { Screenshot } from "../types";
import { variants } from "./variants";

const MotionImage = motion(Image);

interface SlidesProps {
  images: Screenshot[];
  index: number;
}

export default function Slides({ images, index }: SlidesProps) {
  return (
    <motion.div
      animate={{ x: `-${index * 100}%` }}
      className="mx-auto flex xl:max-w-[75vw]"
    >
      {images.map((image, i) => (
        <MotionImage
          alt={`${image.alt}`}
          animate={i === index ? "active" : "inactive"}
          className="aspect-[5/3] rounded-lg object-cover shadow-lg lg:rounded-xl lg:shadow-2xl"
          height={1728}
          initial={false}
          key={image.src}
          src={image.src}
          variants={variants.slide}
          width={2880}
        />
      ))}
    </motion.div>
  );
}
