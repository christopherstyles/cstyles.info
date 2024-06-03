"use client";

import { motion } from "framer-motion";

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
};

export default function FadeUp({
  children,
  className,
  delay = 0,
  margin = "100% 0px -50px 0px",
}: FadeUpProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin, once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
}
