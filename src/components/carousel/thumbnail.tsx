import Image from "next/image";
import { HTMLMotionProps, motion } from "framer-motion";
import { Screenshot } from "../types";
import { variants } from "./variants";

interface ThumbnailProps extends HTMLMotionProps<"button"> {
  active: boolean;
  image: Screenshot;
}

export default function Thumbnail({ active, image, ...props }: ThumbnailProps) {
  return (
    <motion.button
      aria-label="Select this image as the current slide"
      animate={active ? "active" : "inactive"}
      className="shrink-0 overflow-hidden focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 md:rounded-md dark:focus-visible:ring-neutral-200"
      initial={false}
      key={image.src}
      variants={variants.thumbnail}
      whileFocus="active"
      whileHover={{ opacity: 1 }}
      {...props}
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
  );
}
