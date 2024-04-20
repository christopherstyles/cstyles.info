import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { VscInfo } from "react-icons/vsc";
import { Screenshot } from "../types";

interface InfoProps extends HTMLMotionProps<"button"> {
  image: Screenshot;
}

export default function Info({ image }: InfoProps) {
  return (
    <AnimatePresence initial={false}>
      {(image.caption?.length ?? 0) > 0 && (
        <motion.button
          animate={{ opacity: 1 }}
          className="absolute bottom-0 left-0 z-50"
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          onClick={() => alert(image.caption)}
        >
          <VscInfo className="text-white" size={32} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
