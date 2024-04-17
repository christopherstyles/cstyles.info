import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";

import { IProject } from "@/components/project";

export default async function Page({ params }: { params: { slug: string } }) {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

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
      <section className="mb-20 grid grid-cols-1 gap-x-10 gap-y-12 lg:grid-cols-2">
        {data.projects
          .sort((a: IProject, b: IProject) => a.position - b.position)
          .map((project: IProject, index: number) => (
            <Link
              href={`/work/${project.slug}`}
              key={`${project.slug}-condensed`}
            >
              <div
                style={
                  {
                    "--frame-bg-from": project.frameColorStart,
                    "--frame-bg-to": project.frameColorEnd,
                  } as React.CSSProperties
                }
              >
                <figure
                  className="group flex flex-col gap-4 transition-transform duration-1000 ease-out hover:-translate-y-1"
                  role="group"
                >
                  <div className="relative flex w-full flex-col self-stretch bg-gradient-to-b from-[var(--frame-bg-from)] to-[var(--frame-bg-to)] p-8 sm:p-10 md:p-12 xl:p-14">
                    <Image
                      alt={project.title}
                      className="rounded-sm shadow-xl shadow-black/10 transition-all duration-1000 ease-out group-hover:-translate-y-1.5 group-hover:shadow-2xl group-hover:shadow-black/50"
                      height={1728}
                      loading={index > 2 ? "lazy" : "eager"}
                      priority={index < 3}
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                      src={`${project.posterImages[0].src}`}
                      width={2880}
                    />
                  </div>
                  <figcaption className="flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-200">
                    <h2 className="">{project.title}</h2>
                    <p className="">
                      {project.agency.prefix} {project.agency.name}
                    </p>
                  </figcaption>
                </figure>
              </div>
            </Link>
          ))}
      </section>
    </>
  );
}
