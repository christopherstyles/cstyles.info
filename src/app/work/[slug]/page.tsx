import { promises as fs } from "fs";

import Project, { IProject } from "@/components/project";

export async function generateStaticParams() {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

  return data.projects.map((project: IProject) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const file = await fs.readFile(process.cwd() + "/src/app/data.json", "utf8");
  const data = JSON.parse(file);

  const project = data.projects.find(
    (project: IProject) => project.slug === params.slug,
  );

  return <Project project={project} />;
}
