"use client";

import { motion } from "framer-motion";
import { RxEnvelopeClosed, RxLinkedinLogo } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";

interface SocialProps {
  size?: "sm" | "lg";
}

export default function Social({ size = "sm" }: SocialProps) {
  const iconSize: number = size === "sm" ? 16 : 24;

  return (
    <>
      <motion.a
        href="mailto:cstyles@hey.com"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Email Chris Styles (opens in the default mail application)"
        whileHover={{ scale: 1, y: -3 }}
      >
        <RxEnvelopeClosed size={iconSize} />
      </motion.a>

      <motion.a
        href="https://www.github.com/christopherstyles"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub: Chris Styles (opens in a new tab)"
        whileHover={{ scale: 1, y: -3 }}
      >
        <VscGithubInverted size={iconSize} />
      </motion.a>
      <motion.a
        href="https://www.linkedin.com/in/christopherstyles"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn: Chris Styles (opens in a new tab)"
        whileHover={{ scale: 1, y: -3 }}
      >
        <RxLinkedinLogo size={iconSize} />
      </motion.a>
    </>
  );
}
