"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "framer-motion";

import { IProject } from "@/components/project";

export interface IScreenshot {
  caption?: string;
  src: string;
  alt?: string;
}

export default function Screenshot({
  screenshot,
  project,
}: {
  screenshot: IScreenshot;
  project: IProject;
}): JSX.Element {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      className="relative flex w-full flex-col"
      ref={ref}
      style={
        {
          "--frame-bg-from": project.frameColorStart as string,
          "--frame-bg-to": project.frameColorEnd as string,
          opacity: isInView ? 1 : 0,
          transition: "all 0.6s ease-out",
          transform: `translateY(${isInView ? 0 : 35}px)`,
        } as React.CSSProperties
      }
    >
      <div className="flex w-full flex-col self-stretch bg-gradient-to-b from-[var(--frame-bg-from)] to-[var(--frame-bg-to)] p-8 sm:p-10 md:p-12 xl:p-20">
        <Image
          alt={`${screenshot.alt || project.title} screenshot`}
          className="rounded-sm shadow-[0_20px_200px] shadow-black/40"
          height={1728}
          src={screenshot.src}
          width={2880}
        />
      </div>
      {screenshot.caption && (
        <div className="w-full p-3">
          <p
            className="text-sm text-neutral-600 lg:max-w-screen-sm xl:max-w-screen-lg dark:text-neutral-200"
            dangerouslySetInnerHTML={{ __html: screenshot.caption }}
          ></p>
        </div>
      )}
    </section>
  );
}
