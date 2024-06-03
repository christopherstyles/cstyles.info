import Container from "@/components/container";

interface PageProps {
  params: { slug: string };
}

export default function Page({ params }: PageProps) {
  return (
    <div className="mx-auto mt-20 flex w-full flex-col items-start px-4 pt-10 md:px-6 md:pt-32">
      <Container>
        <div className="text-lg">
          <h1 className="sr-only mb-36 text-5xl">Curriculum Vitae</h1>
          <div className="mb-40 flex flex-col gap-24">
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl">Education</h2>
              <p>Maryland Institute College of Art, BA in Graphic Design</p>
            </section>
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl">Skills</h2>
              <ul className="space-y-6">
                <li>
                  <div className="font-bold">Languages</div>
                  <p className="font-normal">
                    Ruby, JavaScript, TypeScript, HTML/CSS
                  </p>
                </li>
                <li>
                  <div className="font-bold">Technologies</div>
                  Rails, React, Tailwind, Figma, Next.js, React Native,
                  PostgreSQL, Lit
                </li>
                <li>
                  <div className="font-bold">Additional Experience</div>
                  Accessibility, Continuous Integration (CircleCI, GitHub
                  Actions, TravisCI), CDN (Cloudinary, Imgix, KeyCDN, Fastly),
                  GraphQL (Apollo Federation, Hasura GraphQL Engine), Keen.io,
                  Mapbox, MySQL, Redis, Search (Algolia, Meilisearch,
                  Elasticsearch), StorybookJS, Zencoder
                </li>
                <li>
                  <div className="font-bold">Deployment</div>
                  AWS/Amplify, DigitalOcean/App Platform, Heroku/Dokku, Hetzner,
                  Netlify, Vercel
                </li>
              </ul>
            </section>
            <section className="flex flex-col gap-4">
              <h2 className="text-2xl">Work Experience</h2>
              <div className="flex flex-col gap-4 md:gap-8">
                <div>
                  <h3 className="mb-4">
                    <span className="font-bold">Senior Software Engineer</span>,
                    Kongregate (2021–2024)
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>
                      Collaborated with product designers and developers to
                      revamp and rebrand the Kongregate platform and website,
                      enhancing performance and ensuring a seamless experience
                      for 40,000+ daily users.
                    </li>

                    <li>
                      Coordinated with graphic artists, comic inkers, and
                      storytellers to create a generative NFT collection and
                      website for the Blood Vessels web3 RPG, consisting of
                      thousands of distinct layer-based art images.
                    </li>
                    <li>
                      Created a character card generator for the Blood Vessels
                      web3 RPG game, which could produce near limitless
                      role-based character data with randomized traits and
                      attributes, presented in an easy to parse UI.
                    </li>
                    <li>
                      Created a dashboard enabling teams to review visual
                      changes across NFT collection generation runs by providing
                      feature filters for comparison, reducing team review time
                      by nearly 80%.
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
                      Developed a bespoke content management system for station
                      managers of 20+ national radio stations, providing the
                      ability for artist management, automatic video
                      transcoding, music, and artist recommendations. Created a
                      versioned API for third-party tool integration.
                    </li>
                    <li>
                      Built a modular React frontend framework for political
                      think-tank organizations to easily deploy across multiple
                      initiatives.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4">
                    <span className="font-bold">Tech Lead</span>, A Hundred
                    Years (2012–2014)
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
                      Contributed to design system style guides and component
                      libraries for TED-Ed, utilizing Zeroheight and Lookbook.
                    </li>
                    <li>
                      Developed a playbook outlining company philosophy, design
                      and development process, and strategic approaches to
                      product discovery and implementation, which was adopted as
                      the standard by all new team members.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4">
                    <span className="font-bold">
                      Principal Software Engineer
                    </span>
                    , HUGE (2010-2012)
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>
                      Directed teams of 5-10 engineers in development and
                      delivery of multiple full-stack projects for clients.
                    </li>
                    <li>
                      <span className="font-bold">American University</span>:
                      Developed a frontend framework for release of their
                      award-winning site and subsequent child site spinoffs.
                    </li>
                    <li>
                      <span className="font-bold">Royal Caribbean</span>: Led
                      development efforts for company website rebrand and
                      updated purchase flows.
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
                      vertical releases to accommodate iVillage’s user base of
                      21.4 million users.
                    </li>
                    <li>
                      <span className="font-bold">Nintendo</span>: Launched an
                      interactive web experience for Punch-Out!!, a game selling
                      1.27 million copies.
                    </li>
                    <li>
                      <span className="font-bold">FX Networks</span>: Developed
                      high performance online experiences for the newly
                      redesigned fxnetworks.com in the run-up to a fall kickoff.
                    </li>
                    <li>
                      <span className="font-bold">JetBlue</span>: Created
                      interactive flight path visualizations and various
                      frontend experiences.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4">
                    <span className="font-bold">Web Developer</span>, Under
                    Armour (2008-2009)
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
                    <span className="font-bold">Web Developer</span>, Mammoth
                    NYC (2007-2008)
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
                    <span className="font-bold">Web Developer</span>, Splice
                    Today (2007-2010)
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>
                      Built full-stack solution for a daily online magazine
                      which receives millions of viewers per month. Included was
                      a bespoke administration system for content editors and
                      site managers to add and publish articles, monitor user
                      comments, and upload media.
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
                    <span className="font-bold">Animator/Video</span>, U.S.
                    Green Building Council (2007)
                  </h3>
                  <ul className="list-disc pl-5">
                    <li>
                      Created a feature animation for “Green School”, played as
                      the opener to the Greenbuild 2008 Boston/Chicago
                      Conference.
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
                        Cambridge Architectural Mesh, Cleveland Institute of
                        Art, Maryland Institute College of Art, and Cooper
                        Hewitt, Smithsonian Design Museum
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
          </div>
        </div>
      </Container>
    </div>
  );
}
