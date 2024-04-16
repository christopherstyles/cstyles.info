"use client";

import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: 0, y: 5 },
  initial: { opacity: 0, x: 0, y: 5 },
  enter: { opacity: 1, x: 0, y: 0 },
};

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      animate="enter"
      className="w-full"
      initial="initial"
      transition={{
        duration: 1,
        type: "spring",
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
