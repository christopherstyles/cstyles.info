import { promises as fs } from "fs";

import Worksheet from "@/components/worksheet";
import { Project } from "@/components/types";

export async function generateStaticParams() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

  return data.projects.map((project: Project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

  const project = data.projects.find(
    (project: Project) => project.slug === params.slug,
  );

  return <Worksheet project={project} />;
}
