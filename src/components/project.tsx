import { IScreenshot } from "@/components/screenshot";
import RolesTable from "./roles-table";
import Screenshot from "@/components/screenshot";
import StackList from "./stack-list";

export interface IAgency {
  name: string;
  prefix: string;
  url: string;
}

export interface IRole {
  backend: boolean;
  frontend: boolean;
  project: string;
  technologies: string;
}

export interface IProject {
  agency: IAgency;
  awards: string;
  challenge: string;
  deck: string;
  description: string;
  frameColorEnd: string;
  frameColorStart: string;
  position: number;
  posterImages: IScreenshot[];
  roles: IRole[];
  screenshots: IScreenshot[];
  slug: string;
  stack: string[];
  title: string;
}

export default function Project({
  project,
}: {
  project: IProject;
}): JSX.Element {
  return (
    <>
      <div className="mx-auto mb-48 flex max-w-5xl flex-col space-y-20 text-lg">
        <div>
          <h1 className="text-5xl">{project.title}</h1>
        </div>
        <section className="flex flex-col gap-8">
          {project.deck && <p className="text-2xl">{project.deck}</p>}
          {project.challenge && <p>{project.challenge}</p>}
          {project.awards && <p>{project.awards}</p>}
          <p>
            {project.agency.prefix} {project.agency.name}
          </p>
        </section>
        {project.roles.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl">Role</h2>
            <div className="w-full max-w-5xl overflow-x-auto">
              <RolesTable roles={project.roles} />
            </div>
          </section>
        )}
        {project.stack.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl">Stack</h2>
            <div>
              <StackList stack={project.stack} />
            </div>
          </section>
        )}
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-16 md:gap-32">
        {project.screenshots.map((screenshot, index) => (
          <div key={`${project.slug}-screenshot-${index}`}>
            <Screenshot project={project} screenshot={screenshot} />
          </div>
        ))}
      </div>
    </>
  );
}
