"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { VscArrowLeft } from "react-icons/vsc";

import Menu from "@/components/menu";
import Social from "./social";

const MotionLink = motion(Link);

export default function Navbar() {
  const pathname = usePathname();

  const variants = {
    initial: { opacity: 0 },
    hidden: { opacity: 0, x: [0, "-100%", "100%"] },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <header className="mx-auto flex w-full max-w-screen-2xl items-center justify-between p-12 px-4 md:px-6">
      <div className="relative flex h-full w-full">
        <div className="absolute left-2 top-2">
          <AnimatePresence>
            {pathname !== "/" && (
              <MotionLink
                animate={pathname === "/" ? "hidden" : "visible"}
                aria-label="Go to the home page"
                href="/"
                initial="initial"
                title="Home page link"
                variants={variants}
                whileHover={{ scale: 1.4, x: 4 }}
                whileTap={{ scale: 1.4, x: 4 }}
              >
                <div className="-ml-6 -mt-6 p-2">
                  <VscArrowLeft size={32} color="currentColor" />
                </div>
              </MotionLink>
            )}
          </AnimatePresence>
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

      <Menu />
    </header>
  );
}
