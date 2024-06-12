"use client";

import { useRef } from "react";
import { PiCalendarDots } from "react-icons/pi";

import type { WorkRole } from "@/components/types";
import clsx from "clsx";

interface RoleDateProps {
  className?: string;
  role: WorkRole;
}

export default function RoleDate({ className, role }: RoleDateProps) {
  const ref = useRef(null);

  return (
    <div className={clsx("flex shrink-0", className)}>
      <div className="flex shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-neutral-200 px-3 py-1 transition-opacity duration-200 dark:border-neutral-600">
        <PiCalendarDots className="h-4 w-4" />
        <div className="flex-none py-0.5 text-xs font-medium leading-5 ">
          {role.date}
        </div>
      </div>
    </div>
  );
}
