import Image from "next/image";
import { motion } from "framer-motion";
import { aspectRatios, gap, margin, thumbnailVariants } from "./config";
import { Screenshot } from "../types";

interface ThumbnailsProps {
  images: Screenshot[];
  index: number;
  setIndex: (index: number) => void;
}

export default function Thumbnails({
  images,
  index,
  setIndex,
}: ThumbnailsProps) {
  return (
    <motion.div
      animate={{
        x: `-${
          index * 100 * (aspectRatios.collapsed / aspectRatios.full) +
          margin +
          index * gap
        }%`,
      }}
      className="flex"
      initial={false}
      style={{
        aspectRatio: aspectRatios.full,
        gap: `${gap}%`,
      }}
    >
      {images.map((image, i) => (
        <motion.button
          aria-label="Select this image as the current slide"
          animate={i === index ? "active" : "inactive"}
          className="shrink-0 overflow-hidden focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 md:rounded-md dark:focus-visible:ring-neutral-200"
          initial={false}
          key={image.src}
          onClick={() => setIndex(i)}
          onFocus={() => setIndex(i)}
          variants={thumbnailVariants}
          whileFocus="active"
          whileHover={{ opacity: 1 }}
        >
          <Image
            alt={`${image.alt}`}
            className="h-full w-full object-cover"
            draggable={false}
            height={1728}
            sizes="20vw"
            src={image.src}
            width={2880}
          />
        </motion.button>
      ))}
    </motion.div>
  );
}
