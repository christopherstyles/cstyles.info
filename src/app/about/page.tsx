import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <div className="mb-20">
          <h1 className="mb-4 text-5xl">Chris Styles</h1>
        </div>
        <section className="mb-40 flex flex-col gap-8 text-2xl">
          <p>
            Chris Styles was born in North Carolina and studied at the{" "}
            <a
              aria-label="Maryland Institute College of art (opens in a new tab)"
              href="https://www.mica.edu/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Maryland Institute College of Art
            </a>{" "}
            in Baltimore. He has worked in the design and technology industry
            for nearly two decades, leading teams and projects for clients like
            VuHaus (NPR Live Sessions), FX Networks, Nintendo, and TED-Ed. He
            currently lives in rural Oregon with his partner{" "}
            <a
              aria-label="Landbird (opens in a new tab)"
              href="http://www.landbird.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              @landbird
            </a>
            , three dogs, a raft of ducks, a lovely goose, and a few
            troublemaking chickens.
          </p>
        </section>
      </div>
      {/* <section className="mb-48 flex w-full flex-col">
        <div className="flex w-full flex-col self-stretch bg-[#1A282A] p-16 sm:p-20 md:p-24 lg:p-28">
          <Image
            className="shadow-[0_20px_200px] shadow-black/40"
            src="/images/project-board.jpg"
            width={2880}
            height={1728}
            alt="A board of project screenshots, displayed at a 25° angle"
          />
        </div>
      </section> */}
      {/* <div className="mx-auto max-w-5xl">
        <section className="mb-48 flex w-full flex-col">
          <a className="text-4xl" href="mailto:cstyles@hey.com">
            Get in touch
          </a>
        </section>
      </div> */}
    </>
  );
}
