import Link from "next/link";
import { HiOutlineXMark } from "react-icons/hi2";
import { RxEnvelopeClosed, RxLinkedinLogo } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";

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
          className="fixed inset-0 z-50 overflow-auto rounded-lg bg-neutral-100 px-12 py-6 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
        >
          <button
            type="button"
            className="absolute right-4 top-10 flex h-11 w-11 items-center justify-center md:hidden"
            onClick={() => setMenuIsOpen(!isMenuOpen)}
          >
            <HiOutlineXMark size={30} />
          </button>
          <ul className="flex h-full flex-col justify-center gap-2 divide-y divide-neutral-900 text-center text-2xl ">
            <li key="menu-about">
              <Link
                className="block p-6"
                href="/about"
                onClick={() => setMenuIsOpen(false)}
              >
                about
              </Link>
            </li>
            <li key="menu-cv">
              <Link
                className="block p-6"
                href="/cv"
                onClick={() => setMenuIsOpen(false)}
              >
                cv
              </Link>
            </li>
            <li className="p-6" key="menu-github">
              <div className="flex items-center justify-center gap-2">
                <a
                  className="p-6"
                  href="mailto:cstyles@hey.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Email Chris Styles (opens in the default mail application)"
                  onClick={() => setMenuIsOpen(false)}
                >
                  <RxEnvelopeClosed size={24} />
                </a>
                <a
                  className="p-6"
                  href="https://www.github.com/christopherstyles"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub: Chris Styles (opens in a new tab)"
                  onClick={() => setMenuIsOpen(false)}
                >
                  <VscGithubInverted size={24} />
                </a>
                <a
                  className="p-6"
                  href="https://www.linkedin.com/in/christopherstyles"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn: Chris Styles (opens in a new tab)"
                  onClick={() => setMenuIsOpen(false)}
                >
                  <RxLinkedinLogo size={24} />
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
