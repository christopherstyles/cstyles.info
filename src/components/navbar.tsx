"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { VscGithubAlt } from "react-icons/vsc";
import { VscArrowLeft } from "react-icons/vsc";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import Menu from "@/components/menu";

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
            animate={pathname === "/" ? "visible" : "hidden"}
            initial="initial"
            variants={variants}
            transition={{ delay: pathname === "/" ? 0.1 : 0 }}
          >
            <h1 className="whitespace-nowrap text-2xl leading-none dark:font-light">
              <Link href="/">Chris Styles</Link>
            </h1>
          </motion.div>
        </div>

        <div className="absolute left-0 top-0">
          <motion.div
            animate={pathname === "/" ? "hidden" : "visible"}
            initial="initial"
            variants={variants}
            whileHover={{ scale: 2, x: "25%" }}
          >
            <Link href={pathname.includes("/work/") ? "/work" : "/"}>
              <div className="-ml-6 -mt-6 p-6">
                <VscArrowLeft size={24} color="currentColor" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>

      <nav className="hidden gap-4 text-base md:flex dark:font-light">
        <Link href="/work">Work</Link>
        <Link href="/cv">CV</Link>
        <Link href="/about">About</Link>
        <a href="mailto:cstyles@hey.com">Contact</a>
        <a href="https://www.github.com/christopherstyles">
          <VscGithubAlt size={24} color="currentColor" />
        </a>
      </nav>

      <div className="relative -mt-2 flex rounded-full  md:hidden">
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center "
          onClick={() => setMenuIsOpen(!isMenuOpen)}
        >
          <HiOutlineMenuAlt4 size={24} />
        </button>
        <Menu isMenuOpen={isMenuOpen} setMenuIsOpen={setMenuIsOpen} />
      </div>
    </header>
  );
}
