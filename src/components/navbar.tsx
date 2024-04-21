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

      <button
        aria-label="Toggle the mobile menu"
        className="duration-400 group absolute right-4 top-10 z-50 flex h-11 w-11 origin-center touch-manipulation items-center justify-center outline-none transition-all ease-[cubic-bezier(0.08,0.6,0.54,0.92)] focus:outline-none focus-visible:ring focus-visible:ring-neutral-900 md:hidden"
        data-open={isMenuOpen}
        onClick={() => setMenuIsOpen(!isMenuOpen)}
        type="button"
      >
        <div className="relative flex h-8 w-8 flex-col items-center justify-center">
          <div className="duration-400 absolute top-[11px] h-0.5 w-6 origin-center bg-neutral-900 transition-all ease-[cubic-bezier(0.08,0.6,0.54,0.92)] group-data-[open=true]:top-[15px] group-data-[open=true]:rotate-45 dark:bg-neutral-100"></div>
          <div className="duration-400 absolute top-[18px] h-0.5 w-6 origin-center bg-neutral-900 transition-all ease-[cubic-bezier(0.08,0.6,0.54,0.92)] group-data-[open=true]:top-[15px] group-data-[open=true]:-rotate-45 dark:bg-neutral-100"></div>
        </div>
      </button>

      <Menu isMenuOpen={isMenuOpen} setMenuIsOpen={setMenuIsOpen} />
    </header>
  );
}
