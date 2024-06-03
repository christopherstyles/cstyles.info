import { VscArrowRight } from "react-icons/vsc";

export default function OpenSource() {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl">Open Source</h2>
      <ul className="list-disc pl-5">
        <li>
          <a
            className="group"
            href="https://github.com/christopherstyles/ngp_van"
            target="noreferrer noopener"
            aria-label="GitHub: ngp_van Ruby wrapper for the NGP-VAN API (opens in a new tab)"
          >
            ngp_van: A Ruby wrapper for the NGP-VAN API{" "}
            <VscArrowRight
              className="inline align-text-top transition-transform group-hover:translate-x-1"
              size={22}
            />
          </a>
        </li>
        <li>
          <a
            className="group"
            href="https://github.com/christopherstyles/vscode-html-entities"
            target="noreferrer noopener"
            aria-label="GitHub: ngp_van Ruby wrapper for the HTML Entities VSCode extension (opens in a new tab)"
          >
            HTML Entities (VSCode extension){" "}
            <VscArrowRight
              className="inline align-text-top transition-transform group-hover:translate-x-1"
              size={22}
            />
          </a>
        </li>
      </ul>
    </section>
  );
}
