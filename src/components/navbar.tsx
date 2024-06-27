"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiWorld } from "react-icons/tfi";

import { RxEnvelopeClosed } from "react-icons/rx";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-8 md:px-6">
      <div className="relative flex h-full w-full items-center justify-between">
        <div className="rounded-full opacity-100 backdrop-blur-md transition-all duration-200">
          <Link
            aria-label="Go to the home page"
            className="no-underline"
            href="/"
            title="Home page link"
          >
            <div className="flex h-10 w-auto items-center justify-center rounded-lg bg-transparent px-2.5 font-semibold transition-colors duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-700">
              <TfiWorld className="size-5" />
            </div>
          </Link>
        </div>
        <div>
          <nav className="flex items-center gap-2 rounded-full text-sm uppercase backdrop-blur-md dark:font-light md:items-center">
            <ThemeToggle />
            <Link className="no-underline" href="/about">
              <div className="flex h-10 w-auto items-center justify-center rounded-lg bg-transparent px-2.5 transition-all duration-100 hover:-translate-y-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700">
                About
              </div>
            </Link>
            <Link className="no-underline" href="/cv">
              <div className="flex h-10 w-auto items-center justify-center rounded-lg bg-transparent px-2.5 transition-all duration-100 hover:-translate-y-0.5 hover:bg-neutral-200 dark:hover:bg-neutral-700">
                CV
              </div>
            </Link>
            <a
              aria-label="Email Chris Styles (opens in the default mail application)"
              className="ml-2.5 flex aspect-square w-auto items-center justify-center rounded-full bg-neutral-800 p-3 px-4 text-sm font-medium lowercase text-neutral-50 no-underline transition-all duration-100 ease-out hover:-translate-y-0.5 dark:bg-neutral-50 dark:text-neutral-900 md:aspect-auto"
              href="mailto:cstyles@hey.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <span className="inline-block md:hidden">
                <RxEnvelopeClosed size={16} />
              </span>
              <span className="hidden md:block">cstyles@hey.com</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
