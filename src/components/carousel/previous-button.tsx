import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { VscChevronLeft } from "react-icons/vsc";

interface PreviousButtonProps extends HTMLMotionProps<"button"> {
  visible?: boolean;
}

export default function PreviousButton({
  visible = true,
  ...props
}: PreviousButtonProps) {
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
          <VscChevronLeft className="h-12 w-12 text-white md:h-14 md:w-14 xl:h-16 xl:w-16" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
