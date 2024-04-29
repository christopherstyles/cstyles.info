import Image from "next/image";
import bioImage from "../../../public/images/bio/chris-and-lucy.jpg";

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <h1 className="sr-only mb-36 text-5xl">Chris Styles</h1>
        <div className="mb-24 grid grid-cols-1 gap-12 md:grid-cols-2">
          <Image
            alt="Chris standing while holding Lucy (a standard wire-haired dachshund)"
            className="order-first w-full md:order-last"
            sizes="50vw"
            src={bioImage}
            width={768}
            height={1024}
          />
          <div className="mb-40 flex flex-col gap-12">
            <p className="text-2xl md:mt-12">
              Chris Styles is an Oregon-based software developer working at the
              intersection of design and engineering.
            </p>
            <p className="text-lg">
              He was born in North Carolina and studied at the{" "}
              <a
                aria-label="Maryland Institute College of Art (opens in a new tab)"
                href="https://www.mica.edu/"
                rel="noreferrer noopener"
                target="_blank"
              >
                Maryland Institute College of Art
              </a>{" "}
              in Baltimore. Chris has worked in the design and technology
              industry for nearly two decades, leading teams and projects for
              clients like VuHaus (NPR Live Sessions), FX Networks, Nintendo,
              and TED-Ed. He lives with his partner{" "}
              <a
                aria-label="Landbird (opens in a new tab)"
                href="http://www.landbird.com/"
                rel="noreferrer noopener"
                target="_blank"
              >
                @landbird
              </a>
              , three dogs, a raft of ducks, a lovely goose, and a few
              mischievous chickens.
            </p>
            <p className="text-lg">
              If you’re interesting in chatting about a potential collaboration,
              or would just like to say hello, please{" "}
              <a href="mailto:cstyles@hey.com" className="underline">
                get in touch
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto flex max-w-5xl flex-col gap-16 border-t border-neutral-300 pt-16 dark:border-neutral-700">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h3 className="mb-4 text-base font-semibold uppercase md:mb-0">
            Contact
          </h3>
          <div>
            <a
              aria-label="Email Chris Styles (opens in the default mail application)"
              href="mailto:cstyles@hey.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              cstyles@hey.com
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <h3 className="mb-4 text-base font-semibold uppercase md:mb-0">
            Follow
          </h3>
          <div className="flex flex-col gap-3">
            <a
              aria-label="Visit Chris’s Instagram (opens in a new window)"
              href="https://www.instagram.com/christopherstyles/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Instagram
            </a>
            <a
              aria-label="Visit Chris’s LinkedIn (opens in a new window)"
              href="https://www.linkedin.com/in/christopherstyles/"
              rel="noreferrer noopener"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
