import fs from "node:fs/promises";

import Container from "@/components/container";
import FadeUp from "@/components/fade-up";
import type { WorkRole } from "@/components/types";
import clsx from "clsx";
import { PiMapPin } from "react-icons/pi";
import RoleDate from "./components/role-date";

export default async function Page() {
  const file = await fs.readFile(`${process.cwd()}/src/data/cv.json`, "utf8");
  const cv = JSON.parse(file);

  return (
    <div className="mx-auto mt-20 flex w-full flex-col items-start px-4 pt-10 md:px-6 md:pt-32">
      <Container>
        <div className="mx-auto max-w-screen-md">
          <h1 className="sr-only mb-36 text-5xl">Curriculum Vitae</h1>
          <article className="flex flex-col gap-12 pb-6 md:gap-20">
            <h2 className="text-3xl dark:font-medium">Work Experience</h2>
            <ul className="space-y-6">
              {cv.map((item: WorkRole, index: number) => (
                <li key={item.id} className="relative flex items-start gap-x-4">
                  <div
                    className={clsx(
                      index === cv.length - 1 ? "bottom-0" : "-bottom-8",
                      "absolute left-0 top-0 flex w-8 justify-center",
                    )}
                  >
                    <div className="w-px bg-neutral-300 dark:bg-neutral-600" />
                  </div>
                  <div className="relative flex h-8 w-8 flex-none items-center justify-center bg-neutral-50 dark:bg-neutral-900">
                    <div className="h-2 w-2 rounded-full bg-neutral-600 dark:bg-neutral-300" />
                  </div>
                  <div
                    className={clsx(
                      "flex flex-col gap-6",
                      index === cv.length - 1 ? "pb-0" : "pb-6",
                    )}
                  >
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p>{item.agency}</p>
                    </div>
                    <RoleDate className="flex md:hidden" role={item} />
                    <div className="flex items-center gap-2">
                      <PiMapPin className="h-4 w-4" />
                      <p>{item.location}</p>
                    </div>
                    <ul className="list-disc space-y-4 pl-4">
                      {item.highlights.map((highlight: string) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <RoleDate className="hidden md:flex" role={item} />
                </li>
              ))}
            </ul>

            <FadeUp>
              <section className="flex flex-col gap-4 pt-12">
                <h2 className="text-2xl">Education</h2>
                <p>Maryland Institute College of Art, BA in Graphic Design</p>
              </section>
            </FadeUp>

            <FadeUp>
              <section className="flex flex-col gap-6 dark:border-neutral-600">
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
                    AWS/Amplify, DigitalOcean/App Platform, Heroku/Dokku,
                    Hetzner, Netlify, Vercel
                  </li>
                </ul>
              </section>
            </FadeUp>

            <FadeUp>
              <section className="flex flex-col gap-4 dark:border-neutral-600">
                <h2 className="text-2xl">Awards</h2>
                <ul className="list-disc pl-5">
                  <li>
                    2013 Webby in Education category for{" "}
                    <span className="italic">TED-Ed</span>
                  </li>
                  <li>
                    2010 OMMA Award, “Best in Show” for Integrated Online
                    Campaign for <span className="italic">Pepsi Refresh</span>
                  </li>
                  <li>
                    2010 OMMA Award, “Best Integrated Online Campaign” in the
                    Non-Alcoholic Beverage category for{" "}
                    <span className="italic">Pepsi Refresh</span>
                  </li>
                  <li>
                    57th annual Cannes Lions, Bronze Cyber Lion for Best
                    Digitally Driven Integrated Campaign for{" "}
                    <span className="italic">Pepsi Refresh</span>
                  </li>
                  <li>
                    2010 “Best Web Site of Industry” in the Education category
                    by the Web Marketing Association for{" "}
                    <span className="italic">American University</span>
                  </li>
                </ul>
              </section>
            </FadeUp>
          </article>
        </div>
      </Container>
    </div>
  );
}
