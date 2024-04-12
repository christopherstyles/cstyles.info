import { RxLinkedinLogo, RxEnvelopeClosed } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";

export default function Footer(): JSX.Element {
  return (
    <footer className="flex w-full items-center justify-between p-12 px-16">
      <h1 className="text-xs text-neutral-600 dark:font-light">
        ©️ {new Date().getFullYear()}
      </h1>
      <nav className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/christopherstyles"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn: Chris Styles (opens in a new tab)"
        >
          <RxLinkedinLogo size={24} />
        </a>
        <a
          href="https://www.github.com/christopherstyles"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub: Chris Styles (opens in a new tab)"
        >
          <VscGithubInverted size={24} />
        </a>
        <a
          href="mailto:cstyles@hey.com"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Email Chris Styles (opens in the default mail application)"
        >
          <RxEnvelopeClosed size={24} />
        </a>
      </nav>
    </footer>
  );
}
