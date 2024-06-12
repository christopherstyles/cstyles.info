import Image from "next/image";
import Link from "next/link";
import { promises as fs } from "node:fs";

import Container from "@/components/container";
import FadeUp from "@/components/fade-up";
import type { Project } from "@/components/types";

interface PageProps {
  params: { slug: string };
}

export default async function Page({ params }: PageProps) {
  const file = await fs.readFile(
    `${process.cwd()}/src/data/projects.json`,
    "utf8",
  );
  const data = JSON.parse(file);

  return (
    <div className="mx-auto flex w-full flex-col items-start px-4 pt-10 md:px-6 md:pt-32">
      <Container>
        <div className="flex h-svh flex-col justify-center gap-12">
          <h1 className="mb-6 text-5xl md:mb-24">Chris Styles</h1>
          <p className="max-w-[48ch] text-pretty text-2xl">
            A design-focused software engineer working to create beautiful,
            functional, and accessible digital experiences.
          </p>
        </div>

        <section className="mb-20 grid grid-cols-1 gap-x-15 gap-y-16 md:grid-cols-2">
          {data
            .sort((a: Project, b: Project) => a.position - b.position)
            .map((project: Project, index: number) => (
              <FadeUp key={project.slug}>
                <Link
                  className="flex h-full flex-col focus-visible:outline-offset-8"
                  href={`/work/${project.slug}`}
                >
                  <figure
                    className="group flex h-full flex-col gap-4 transition-transform duration-1000 ease-out hover:-translate-y-0.5"
                    role="group"
                  >
                    <figcaption className="flex flex-col items-start gap-3">
                      <h2 className="text-2xl font-medium leading-[18px]">
                        {project.title}
                      </h2>
                      <p className="text-base font-normal opacity-40">
                        {project.agency.prefix} {project.agency.name}
                      </p>
                    </figcaption>
                    <div className="relative flex h-full w-full flex-col self-stretch bg-gradient-to-b">
                      <Image
                        alt={project.title}
                        className="object-cover shadow-xl shadow-black/10 transition-all duration-1000 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-black/50"
                        height={1728}
                        loading={index < 4 ? "eager" : "lazy"}
                        priority={index < 4}
                        sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                        src={`${project.posterImages[0].src}`}
                        width={2880}
                      />
                    </div>
                  </figure>
                </Link>
              </FadeUp>
            ))}
        </section>
      </Container>
    </div>
  );
}
