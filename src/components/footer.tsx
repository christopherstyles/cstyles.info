import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="flex w-full items-center justify-between p-12 px-16">
      <h1 className="text-xs text-gray-600 dark:font-light">
        ©️ {new Date().getFullYear()}
      </h1>
      <nav className="flex gap-4">
        <a href="mailto:cstyles@hey.com">Get in touch</a>
      </nav>
    </footer>
  );
}
