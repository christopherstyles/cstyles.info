import { VscArrowRight } from "react-icons/vsc";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="mb-40 flex flex-col gap-12">
          <p className="text-2xl">
            Chris Styles is a design-focused software engineer, based in Oregon.
            His work focuses on creating beautiful, functional, and accessible
            digital experiences.
          </p>
        </div>
      </div>
      <section className="mb-24 flex w-full flex-col md:mb-48">
        <div className="flex w-full flex-col self-stretch bg-[#1A282A] p-0 md:p-24 lg:p-28">
          <Image
            className="shadow-[0_20px_200px] shadow-black/40"
            src="/images/project-board.jpg"
            width={2880}
            height={1728}
            alt="A board of project screenshots, displayed at a 25° angle"
          />
        </div>
      </section>
      <div className="mx-auto max-w-5xl">
        <section className="mb-48 flex w-full flex-col">
          <a
            className="inline-flex items-center gap-2 text-4xl"
            href="mailto:cstyles@hey.com"
          >
            Get in touch
            <VscArrowRight size={36} color="currentColor" />
          </a>
        </section>
      </div>
    </>
  );
}
