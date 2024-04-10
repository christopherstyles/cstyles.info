import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";

import { IProject } from "@/components/project";

export default async function Page({ params }: { params: { slug: string } }) {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <>
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-20 text-5xl">Work</h1>
        {/* <section className="mb-48 flex flex-col gap-8 text-2xl">
          <p>A collection of recent projects.</p>
        </section> */}
      </div>
      <section className="grid grid-cols-1 gap-x-16 gap-y-20 md:grid-cols-2">
        {data.projects
          .sort((a: IProject, b: IProject) => a.position - b.position)
          .map((project: IProject) => (
            <Link
              href={`/work/${project.slug}`}
              key={`${project.slug}-condensed`}
            >
              <div
                className="flex flex-col gap-6"
                style={
                  {
                    "--frame-bg-from": project.frameColorStart,
                    "--frame-bg-to": project.frameColorEnd,
                  } as React.CSSProperties
                }
              >
                <div className="flex w-full flex-col self-stretch bg-gradient-to-b from-[var(--frame-bg-from)] to-[var(--frame-bg-to)] p-16 sm:p-20 md:p-12 lg:p-14">
                  <Image
                    alt={project.title}
                    className="shadow-[0_20px_200px] shadow-black/40"
                    height={1728}
                    src={`${project.posterImages[0].src}`}
                    sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
                    width={2880}
                  />
                </div>
                <h2 className="text-2xl">{project.title}</h2>
              </div>
            </Link>
          ))}
      </section>
    </>
  );
}

// export async function generateStaticParams() {
//   const posts = await fetch('https://.../posts').then((res) => res.json())

//   return posts.map((post) => ({
//     slug: post.slug,
//   }))
// }
