"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { TfiWorld } from "react-icons/tfi";

import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-8 md:px-6">
      <div className="relative flex h-full w-full items-center justify-between">
        <div className="rounded-full opacity-100 backdrop-blur-md transition-all duration-200">
          <Link
            aria-label="Go to the home page"
            href="/"
            title="Home page link"
          >
            <div className="flex h-10 w-auto items-center justify-center rounded-lg bg-transparent px-2.5 font-semibold transition-colors duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-800">
              <TfiWorld className="size-5" />
            </div>
          </Link>
        </div>
        <div>
          <nav className="flex items-center gap-2 rounded-full text-sm uppercase backdrop-blur-md dark:font-light md:items-center">
            <ThemeToggle />
            <Link href="/about">
              <div className="flex h-10 w-auto items-center justify-center rounded-lg bg-transparent px-2.5 transition-colors duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-800">
                About
              </div>
            </Link>
            <Link href="/cv">
              <div className="flex h-10 w-auto items-center justify-center rounded-lg bg-transparent px-2.5 transition-colors duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-800">
                CV
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
