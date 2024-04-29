import { useEffect, useState } from "react";
import Link from "next/link";
import { RxEnvelopeClosed, RxLinkedinLogo } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";
import { AnimatePresence, motion } from "framer-motion";

const container = {
  hidden: {
    clipPath: "rect(0% 100% 100% 100%)",
  },
  show: {
    clipPath: "rect(0% 100% 100% 0%)",
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 0,
    transition: { type: "tween", ease: "easeIn" },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

export default function Menu() {
  const [isMenuOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.button
        aria-label="Toggle the mobile menu"
        className="duration-400 group absolute right-4 top-10 z-50 flex h-11 w-11 origin-center touch-manipulation select-none items-center justify-center outline-none transition-all ease-out focus:outline-none focus-visible:ring focus-visible:ring-neutral-900 active:scale-110 md:hidden"
        data-open={isMenuOpen}
        onClick={() => setMenuIsOpen(!isMenuOpen)}
        type="button"
      >
        <div className="relative flex h-8 w-8 flex-col items-center justify-center">
          <div className="duration-400 absolute top-[10px] h-0.5 w-6 origin-center bg-neutral-900 transition-all ease-in-out group-data-[open=true]:top-[15px] group-data-[open=true]:rotate-45 dark:bg-neutral-100" />
          <div className="duration-400 absolute top-[20px] h-0.5 w-6 origin-center bg-neutral-900 transition-all ease-in-out group-data-[open=true]:top-[15px] group-data-[open=true]:-rotate-45 dark:bg-neutral-100" />
        </div>
      </motion.button>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 top-0 z-40 h-[105vh] w-full overflow-auto rounded-lg bg-neutral-100 px-12 py-6 text-neutral-900 md:hidden dark:bg-neutral-900 dark:text-neutral-100"
            animate="show"
            initial="hidden"
            exit="hidden"
            transition={{ ease: "easeInOut", duration: 0.5 }}
            variants={container}
          >
            <motion.ul className="flex h-full flex-col justify-center gap-2 text-center text-2xl font-medium">
              <motion.li variants={item}>
                <Link
                  className="block p-4"
                  href="/about"
                  onClick={() => setMenuIsOpen(false)}
                >
                  About
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link
                  className="block p-4"
                  href="/cv"
                  onClick={() => setMenuIsOpen(false)}
                >
                  CV
                </Link>
              </motion.li>
              <motion.li className="p-4" variants={item}>
                <div className="flex items-center justify-center gap-2">
                  <a
                    aria-label="Email Chris Styles (opens in the default mail application)"
                    className="p-6"
                    href="mailto:cstyles@hey.com"
                    onClick={() => setMenuIsOpen(false)}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <RxEnvelopeClosed size={24} />
                  </a>
                  <a
                    aria-label="GitHub: Chris Styles (opens in a new tab)"
                    className="p-6"
                    href="https://www.github.com/christopherstyles"
                    onClick={() => setMenuIsOpen(false)}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <VscGithubInverted size={24} />
                  </a>
                  <a
                    aria-label="LinkedIn: Chris Styles (opens in a new tab)"
                    className="p-6"
                    href="https://www.linkedin.com/in/christopherstyles"
                    onClick={() => setMenuIsOpen(false)}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    <RxLinkedinLogo size={24} />
                  </a>
                </div>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
