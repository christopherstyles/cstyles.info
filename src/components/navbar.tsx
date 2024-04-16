"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { VscArrowLeft } from "react-icons/vsc";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import Menu from "@/components/menu";
import Social from "./social";

export default function Navbar(): JSX.Element {
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
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: [0, "-100%", "100%"] },
  };

  return (
    <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between p-12 px-4 md:px-6">
      <div className="relative flex h-full w-full">
        <div className="absolute left-0 top-0">
          <motion.div
            animate={pathname === "/" ? "hidden" : "visible"}
            initial="initial"
            variants={variants}
            whileHover={{ scale: 2, x: "25%" }}
          >
            <Link
              href="/"
              arial-label="Go to the home page"
              title="Home page link"
            >
              <div className="-ml-6 -mt-6 p-6">
                <VscArrowLeft size={24} color="currentColor" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      <nav className="hidden gap-4 text-base md:flex md:items-center dark:font-light">
        <Link href="/about">about</Link>
        <Link href="/cv">cv</Link>
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
