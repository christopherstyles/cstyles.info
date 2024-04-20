"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { VscArrowLeft } from "react-icons/vsc";

import Menu from "@/components/menu";
import Social from "./social";

const MotionLink = motion(Link);

export default function Navbar() {
  const [isMenuOpen, setMenuIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const variants = {
    initial: { opacity: 0 },
    hidden: { opacity: 0, x: [0, "-100%", "100%"] },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between p-12 px-4 md:px-6">
      <div className="relative flex h-full w-full">
        <div className="absolute left-2 top-2">
          <MotionLink
            animate={pathname === "/" ? "hidden" : "visible"}
            aria-label="Go to the home page"
            href="/"
            initial="initial"
            title="Home page link"
            variants={variants}
            whileHover={{ scale: 1.4, x: 4 }}
          >
            <div className="-ml-6 -mt-6 p-2">
              <VscArrowLeft size={24} color="currentColor" />
            </div>
          </MotionLink>
        </div>
      </div>

      <nav className="hidden gap-2 text-base md:flex md:items-center dark:font-light">
        <Link className="px-2" href="/about">
          about
        </Link>
        <Link className="px-2" href="/cv">
          cv
        </Link>
        <div>•</div>
        <Social />
      </nav>

      <div className="relative -mt-2 flex rounded-full md:hidden">
        <button
          aria-label="Open navigation menu"
          className="flex h-11 w-11 items-center justify-center "
          onClick={() => setMenuIsOpen(!isMenuOpen)}
          type="button"
        >
          <HiOutlineMenuAlt4 size={24} />
        </button>
        <Menu isMenuOpen={isMenuOpen} setMenuIsOpen={setMenuIsOpen} />
      </div>
    </header>
  );
}
