import { promises as fs } from "node:fs";

import type { Project } from "@/components/types";
import Worksheet from "@/components/worksheet";

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const file = await fs.readFile(`${process.cwd()}/src/app/data.json`, "utf8");
  const data = JSON.parse(file);

  return data.projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const file = await fs.readFile(`${process.cwd()}/src/app/data.json`, "utf8");
  const data = JSON.parse(file);

  const project = data.projects.find(
    (project: Project) => project.slug === params.slug,
  );

  return (
    <div className="mx-auto mt-20 flex w-full flex-col items-start px-4 pt-10 md:px-6 md:pt-32">
      <Worksheet project={project} />
    </div>
  );
}
