import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { WiMoonAltWaxingCrescent4, WiSunrise } from "react-icons/wi";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme, theme } = useTheme();

  const setNextTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="group/theme-toggle relative">
      <button
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent transition-colors duration-100 hover:bg-neutral-200 dark:hover:bg-neutral-800"
        type="button"
        onClick={() => setNextTheme()}
      >
        {resolvedTheme === "light" && (
          <>
            <WiSunrise className="size-5" />
            <span className="sr-only">Toggle theme</span>
          </>
        )}
        {resolvedTheme === "dark" && (
          <>
            <WiMoonAltWaxingCrescent4 className="size-5" />
            <span className="sr-only">Toggle theme</span>
          </>
        )}
      </button>
      <div className="pointer-events-none absolute right-4 top-1/2 scale-95 whitespace-nowrap rounded px-1.5 text-xs capitalize text-neutral-900 opacity-0 transition-all duration-200 ease-[cubic-bezier(0.76,0,0.24,1)] [transform:rotateX(90deg)_translateY(0)_translateX(-50%)_scale(0.9)] group-hover/theme-toggle:opacity-100 group-hover/theme-toggle:[transform:rotateX(0deg)_translateY(-40%)_translateX(-50%)_scale(1)] dark:text-white">
        {theme} Mode
      </div>
    </div>
  );
}
