import Link from "next/link";
import { RxEnvelopeClosed, RxLinkedinLogo } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";

interface MenuProps {
  isMenuOpen: boolean;
  setMenuIsOpen: (isOpen: boolean) => void;
}

export default function Menu({ isMenuOpen, setMenuIsOpen }: MenuProps) {
  return (
    <>
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 overflow-auto rounded-lg bg-neutral-100 px-12 py-6 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
          key="menu"
        >
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
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
