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
                  Kongregate (2021–2024)
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
                  Bletchley Park (2014–2021)
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
                  (2012–2014)
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
                    design and development process, and strategic approaches.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Principal Software Engineer</span>
                  , HUGE (2010-2012)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Directed teams of 5-10 engineers in development and delivery
                    of multiple full-stack projects for clients.
                  </li>
                  <li>
                    <span className="font-bold">American University</span>: Led
                    development effort in creating a CSS framework for the
                    release of american.edu, and upon which subsequent sub brand
                    sites could be built and maintained.
                  </li>
                  <li>
                    <span className="font-bold">Royal Caribbean</span>: Led a
                    team of developers in architecting a scalable component
                    system to support purchase flows and modular site content.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Senior Software Engineer</span>,
                  HUGE (2008-2010)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    <span className="font-bold">iVillage</span>: Orchestrated
                    development efforts for sequential vertical releases with a
                    focus on performance and capabilities which could
                    accommodate iVillage’s user base of 21.4 million monthly
                    visitors.
                  </li>
                  <li>
                    <span className="font-bold">Nintendo</span>: Launched an
                    interactive web experience for Punch-Out!!, a Wii game which
                    sold 1.27 million copies.
                  </li>
                  <li>
                    <span className="font-bold">FX Networks</span>: Developed
                    high performance online experiences for the newly redesigned
                    fxnetworks.com prior to the fall kickoff.
                  </li>
                  <li>
                    Created interactive flight visualizations and various
                    frontend experiences for{" "}
                    <span className="font-bold">JetBlue</span>.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Web Developer</span>, Under Armour
                  (2008-2009)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Built interactive and updatable frontend microsites in
                    Flash/Actionscript and Javascript for{" "}
                    <span className="font-bold">
                      Under Armour Athletes Hunt
                    </span>
                    ,{" "}
                    <span className="font-bold">
                      Under Armour Mountain Gear
                    </span>
                    , and{" "}
                    <span className="font-bold">
                      Under Armour Performance Training
                    </span>
                    .
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Web Developer</span>, Mammoth NYC
                  (2007-2008)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Led frontend development efforts for a wide range of web
                    projects in the entertainment industry, such as{" "}
                    <span className="font-bold">
                      Young Frankenstein the Musical
                    </span>
                    , <span className="font-bold">One Hour Photo</span>,{" "}
                    <span className="font-bold">Dragon Dynasty</span>,{" "}
                    <span className="font-bold">IFC Entertainment</span>, and{" "}
                    <span className="font-bold">IFC In Theaters</span>.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Web Developer</span>, Splice Today
                  (2007-2010)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Built full-stack solution for a daily online magazine which
                    receives millions of viewers per month. Included was a
                    bespoke administration system for content editors and site
                    managers to add and publish articles, monitor user comments,
                    and upload media.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Web Developer</span>, Cooper
                  Hewitt, Smithsonian Design Museum (2007)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Built an interactive frontend experience for{" "}
                    <span className="font-bold">
                      IDEO Selects: Works From the Permanent Collection
                    </span>
                    .
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">Animator/Video</span>, U.S. Green
                  Building Council (2007)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Created a feature animation for “Green School”, played as
                    the opener to the Greenbuild 2008 Boston/Chicago Conference.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4">
                  <span className="font-bold">
                    Director of Design Technology
                  </span>
                  , Fastspot (2001–2007)
                </h3>
                <ul className="list-disc pl-5">
                  <li>
                    Led technology efforts in all aspects of frontend and
                    backend development, animation and interactive experience,
                    for a wide range of clients including{" "}
                    <span className="font-bold">
                      Cambridge Architectural Mesh, Cleveland Institute of Art,
                      Maryland Institute College of Art, and Cooper Hewitt,
                      Smithsonian Design Museum
                    </span>
                    .
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
                2010 OMMA Award, “Best Integrated Online Campaign” in the
                Non-Alcoholic Beverage category for{" "}
                <span className="italic">Pepsi Refresh</span>
              </li>
              <li>
                57th annual Cannes Lions, Bronze Cyber Lion for Best Digitally
                Driven Integrated Campaign for{" "}
                <span className="italic">Pepsi Refresh</span>
              </li>
              <li>
                2010 “Best Web Site of Industry” in the Education category by
                the Web Marketing Association for{" "}
                <span className="italic">American University</span>
              </li>
            </ul>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl">Open Source</h2>
            <ul className="list-disc pl-5">
              <li>
                <a
                  href="https://github.com/christopherstyles/ngp_van"
                  target="noreferrer noopener"
                  aria-label="GitHub: ngp_van Ruby wrapper for the NGP-VAN API (opens in a new tab)"
                >
                  ngp_van: A Ruby wrapper for the NGP-VAN API{" "}
                  <VscArrowRight className="inline align-text-top" size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/christopherstyles/vscode-html-entities"
                  target="noreferrer noopener"
                  aria-label="GitHub: ngp_van Ruby wrapper for the HTML Entities VSCode extension (opens in a new tab)"
                >
                  HTML Entities (VSCode extension){" "}
                  <VscArrowRight className="inline align-text-top" size={22} />
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
