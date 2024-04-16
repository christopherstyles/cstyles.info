import { RxEnvelopeClosed, RxLinkedinLogo } from "react-icons/rx";
import { VscGithubInverted } from "react-icons/vsc";

export interface SocialProps {
  size?: "sm" | "lg";
}

export default function Social({ size = "sm" }: SocialProps): JSX.Element {
  const iconSize: number = size === "sm" ? 16 : 24;

  return (
    <>
      <a
        href="mailto:cstyles@hey.com"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Email Chris Styles (opens in the default mail application)"
      >
        <RxEnvelopeClosed size={iconSize} />
      </a>

      <a
        href="https://www.github.com/christopherstyles"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="GitHub: Chris Styles (opens in a new tab)"
      >
        <VscGithubInverted size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/christopherstyles"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="LinkedIn: Chris Styles (opens in a new tab)"
      >
        <RxLinkedinLogo size={iconSize} />
      </a>
    </>
  );
}
