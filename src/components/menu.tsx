import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { HiOutlineXMark } from "react-icons/hi2";
import { VscGithubAlt } from "react-icons/vsc";

export default function Menu({
  isMenuOpen,
  setMenuIsOpen,
}: {
  isMenuOpen: boolean;
  setMenuIsOpen: (isOpen: boolean) => void;
}) {
  // const variants = {
  //   initial: { opacity: 0, y: 50, scale: 0.3 },
  //   visible: { opacity: 1, y: 0, scale: 1 },
  //   hidden: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } },
  // };
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          key="menu"
          className="fixed inset-10 rounded-lg border border-white/40 bg-black bg-opacity-90 px-12 py-6"
        >
          <button
            type="button"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center md:hidden"
            onClick={() => setMenuIsOpen(!isMenuOpen)}
          >
            <HiOutlineXMark size={30} />
          </button>
          <ul className="flex h-full flex-col justify-center gap-8 whitespace-nowrap text-center text-2xl">
            <AnimatePresence initial={false}>
              <motion.li
                key="menu-work"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Link href="/work" onClick={() => setMenuIsOpen(false)}>
                  Work
                </Link>
              </motion.li>
              <motion.li
                key="menu-cv"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Link href="/cv" onClick={() => setMenuIsOpen(false)}>
                  CV
                </Link>
              </motion.li>
              <motion.li
                key="menu-about"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Link href="/about" onClick={() => setMenuIsOpen(false)}>
                  About
                </Link>
              </motion.li>
              <motion.li
                key="menu-contact"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <a
                  href="mailto:cstyles@hey.com"
                  onClick={() => setMenuIsOpen(false)}
                >
                  Contact
                </a>
              </motion.li>
              <motion.li
                key="menu-github"
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div>
                  <a
                    href="https://www.github.com/christopherstyles"
                    aria-label="GitHub: christopherstyles (opens in a new tab)"
                    target="_blank"
                    rel="noreferrer noopener"
                    onClick={() => setMenuIsOpen(false)}
                  >
                    <VscGithubAlt
                      className="inline"
                      size={36}
                      color="currentColor"
                    />
                  </a>
                </div>
              </motion.li>
            </AnimatePresence>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
