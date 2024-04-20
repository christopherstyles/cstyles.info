interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-36 text-5xl">Chris Styles</h1>
        <div className="mb-40 flex flex-col gap-12">
          <p className="text-2xl">
            Chris was born in North Carolina and studied at the{" "}
            <a
              aria-label="Maryland Institute College of Art (opens in a new tab)"
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
    </>
  );
}
