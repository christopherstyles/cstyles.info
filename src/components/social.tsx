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
        aria-label="Email Chris Styles (opens in the default mail application)"
        className="p-2"
        href="mailto:cstyles@hey.com"
        rel="noreferrer noopener"
        target="_blank"
        whileHover={{ scale: 1, y: -3 }}
      >
        <RxEnvelopeClosed size={iconSize} />
      </motion.a>

      <motion.a
        aria-label="GitHub: Chris Styles (opens in a new tab)"
        className="p-2"
        href="https://www.github.com/christopherstyles"
        rel="noreferrer noopener"
        target="_blank"
        whileHover={{ scale: 1, y: -3 }}
      >
        <VscGithubInverted size={iconSize} />
      </motion.a>
      <motion.a
        aria-label="LinkedIn: Chris Styles (opens in a new tab)"
        className="p-2"
        href="https://www.linkedin.com/in/christopherstyles"
        rel="noreferrer noopener"
        target="_blank"
        whileHover={{ scale: 1, y: -3 }}
      >
        <RxLinkedinLogo size={iconSize} />
      </motion.a>
    </>
  );
}
