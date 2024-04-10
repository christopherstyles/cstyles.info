import { VscArrowRight } from "react-icons/vsc";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-20 text-5xl">Hello!</h1>
        <section className="mb-24 flex max-w-[610px] flex-col gap-8 text-2xl md:mb-48">
          <p>
            I’m Chris, a web developer living in rural Oregon with{" "}
            <a
              href="http://www.landbird.com/"
              className="underline"
              target="_blank"
            >
              @landbird
            </a>
            , three dogs, a raft of ducks, a lovely goose, and a couple of
            chickens. I like to alphabetize things, and wander in the woods.
          </p>
        </section>
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
