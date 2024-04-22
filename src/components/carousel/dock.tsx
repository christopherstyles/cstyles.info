import { motion } from "framer-motion";
import { config } from "./config";
import { Screenshot } from "../types";
import Thumbnail from "./thumbnail";

interface DockProps {
  images: Screenshot[];
  index: number;
  setIndex: (index: number) => void;
}

export default function Dock({ images, index, setIndex }: DockProps) {
  return (
    <motion.div
      animate={{
        x: `-${
          index *
            100 *
            (config.aspectRatios.collapsed / config.aspectRatios.full) +
          config.margin +
          index * config.gap
        }%`,
      }}
      className="flex"
      initial={false}
      style={{
        aspectRatio: config.aspectRatios.full,
        gap: `${config.gap}%`,
      }}
    >
      {images.map((image, i) => (
        <Thumbnail
          active={i === index}
          image={image}
          key={i}
          onClick={() => setIndex(i)}
          onFocus={() => setIndex(i)}
        />
      ))}
    </motion.div>
  );
}