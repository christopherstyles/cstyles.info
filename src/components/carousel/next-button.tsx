import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { VscChevronRight } from "react-icons/vsc";

interface NextButtonProps extends HTMLMotionProps<"button"> {
  visible: boolean;
}

export default function NextButton({ visible, ...props }: NextButtonProps) {
  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.button
          animate={{ opacity: 0.2 }}
          exit={{ cursor: "default", opacity: 0, pointerEvents: "none" }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          whileTap={{ opacity: 1 }}
          {...props}
        >
          <VscChevronRight className="h-12 w-12 text-white md:h-14 md:w-14 xl:h-16 xl:w-16" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
