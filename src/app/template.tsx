"use client";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 50 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate="enter"
      className="w-full"
      initial="hidden"
      transition={
        {
          // type: "spring",
          // mass: 0.6,
          // damping: 10,
          // stiffness: 100,
          // velocity: 2,
        }
      }
      // variants={variants}
    >
      {children}
    </motion.div>
  );
}
