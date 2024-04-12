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
          .map((project: IProject) => (
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
                      src={`${project.posterImages[0].src}`}
                      sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                      width={2880}
                    />
                  </div>
                  <figcaption className="flex items-center justify-between text-sm text-gray-400 dark:text-gray-400">
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

      {/* <section className="flex w-full flex-col">
        <div className="flex w-full flex-col self-stretch bg-[#1A282A] p-0 md:p-24 lg:p-28">
          <Image
            className="shadow-[0_20px_200px] shadow-black/40"
            src="/images/project-board.jpg"
            width={2880}
            height={1728}
            alt="A board of project screenshots, displayed at a 25° angle"
          />
        </div>
      </section> */}
    </>
  );
}
