import { VscArrowRight } from "react-icons/vsc";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className="mx-auto max-w-5xl text-lg">
        <h1 className="mb-36 text-5xl">Curriculum Vitae</h1>
        <div className="mb-40 flex flex-col gap-24">
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl">Education</h2>
            <p>Maryland Institute College of Art, BA Graphic Design</p>
          </section>
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl">Skills</h2>
            <ul className="space-y-6">
              <li>
                <div className="font-bold">Languages</div>
                <p className="font-normal">Ruby, JavaScript, Typescript</p>
              </li>
              <li>
                <div className="font-bold">Frameworks</div>
                Ruby on Rails, Hotwire, React.js, React Native, Lit, Next.js,
                Gatsby, Bootstrap, Tailwind CSS
              </li>
              <li>
                <div className="font-bold">
                  Tooling and additional experience
                </div>
                Algolia Search, API Development, AWS, CircleCI, Cloudinary,
                CodeClimate, Elasticsearch, Fastly, Figma, Framer Motion, Github
                Actions, Google Firebase, GraphQL, GSAP, Hasura GraphQL Engine,
                Hashlips Art Engine, Imgix, Keen.io, KeyCDN, Lookbook, Mapbox,
                Meilisearch, Motion One, MySQL, Postgres, React Query, Redis,
                REST, StorybookJS, View Components, Zencoder, Zustand
              </li>
              <li>
                <div className="font-bold">Deployment experience</div>
                AWS Amplify, Digital Ocean, DO App Platform, Dokku, Heroku,
                Netlify, Vercel
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl">Work Experience</h2>
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Senior Software Engineer</span>,
                  Kongregate (2021 - 2024)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Collaborated with a small team to revamp and rebrand the
                    Kongregate platform and brand website, enhancing performance
                    and ensuring a seamless experience for 40,000+ daily users.
                  </li>
                  <li>
                    Collaborated to create a design library of web components
                    (Konstruct UI) that could be used across all Kongregate
                    properties.
                  </li>
                  <li>
                    Coordinated with graphic artists, storytellers, comic
                    inkers, and character riggers to curate a cutting-edge NFT
                    collection for the Blood Vessels web3 RPG, consisting of
                    thousands of distinct layer-based art images.
                  </li>
                  <li>
                    Created a character card generator for the Blood Vessels
                    web3 RPG game, which could produce near limitless role-based
                    character data with randomized traits and attributes,
                    presented in an easy to parse UI.
                  </li>
                  <li>
                    Architected a dashboard enabling teams to review generative
                    trait iterations in NFT collections, caching assets from S3
                    with Imgix, storing character data in Postgres, and
                    providing filters for feature comparison.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Senior Software Engineer</span>,
                  Bletchley Park (2014 - 2021)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Led development of 8+ projects for enterprise clients, SMB
                    customers, and internal stakeholders.
                  </li>
                  <li>
                    <span className="font-bold">NPR Live Sessions</span>:
                    Created a customized content management dashboard for
                    station managers of 20+ national radio stations; crafted a
                    versioned API for third-party tool integration.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Tech Lead</span>, A Hundred Years
                  (2012 - 2014)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Led full-stack development efforts for{" "}
                    <span className="font-bold">
                      TED-Ed, TED City, WorldScienceU, 100yrs
                    </span>
                    , and various microsites.
                  </li>
                  <li>
                    Developed a company playbook outlining company philosophy,
                    design and development process, and strategic approach
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Principal Software Engineer</span>
                  , HUGE (2010- 2012)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Directed teams of 5-10 engineers in development and delivery
                    of 6+ full-stack projects for clients.
                  </li>
                  <li>
                    <span className="font-bold">iVillage</span>: Orchestrated
                    vertical releases to accommodate iVillag’s user base of 21.4
                    million monthly visitors.
                  </li>
                  <li>
                    <span className="font-bold">Nintendo</span>: Launched an
                    interactive web experience for Punch-Out!!, a Wii game which
                    sold 1.27 million copies.
                  </li>
                  <li>
                    <span className="font-bold">American University</span>:
                    Designed a framework for release of award-winning site and
                    subsequent subsites.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl">Awards</h2>
            <ul className="list-disc pl-5">
              <li>
                2013 Webby in Education category for{" "}
                <span className="italic">TED-Ed</span>
              </li>
              <li>
                2010 OMMA Award, “Best in Show” for Integrated Online Campaign
                for <span className="italic">Pepsi Refresh</span>
              </li>
              <li>
                2010 “Best Web Site of Industry” in Education category by the
                Web Marketing Association for{" "}
                <span className="italic">American University</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
