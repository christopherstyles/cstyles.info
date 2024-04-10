import { motion } from "framer-motion";
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
  return (
    <>
      {isMenuOpen && (
        <div
          key="menu"
          className="fixed inset-0 overflow-auto rounded-lg bg-white px-12 py-6 text-gray-900 dark:bg-black dark:bg-black dark:text-white"
        >
          <button
            type="button"
            className="absolute right-4 top-10 flex h-11 w-11 items-center justify-center md:hidden"
            onClick={() => setMenuIsOpen(!isMenuOpen)}
          >
            <HiOutlineXMark size={30} />
          </button>
          <ul className="flex h-full flex-col justify-center gap-8 whitespace-nowrap text-center text-2xl">
            <li key="menu-work">
              <Link href="/work" onClick={() => setMenuIsOpen(false)}>
                Work
              </Link>
            </li>
            <li key="menu-cv">
              <Link href="/cv" onClick={() => setMenuIsOpen(false)}>
                CV
              </Link>
            </li>
            <li key="menu-about">
              <Link href="/about" onClick={() => setMenuIsOpen(false)}>
                About
              </Link>
            </li>
            <li key="menu-contact">
              <a
                href="mailto:cstyles@hey.com"
                onClick={() => setMenuIsOpen(false)}
              >
                Contact
              </a>
            </li>
            <li key="menu-github">
              <a
                href="https://www.github.com/christopherstyles"
                aria-label="GitHub: christopherstyles (opens in a new tab)"
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => setMenuIsOpen(false)}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
