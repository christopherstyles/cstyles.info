import { IScreenshot } from "@/components/screenshot";
import RolesTable from "./roles-table";
import Screenshot from "@/components/screenshot";
import StackList from "./stack-list";

export interface IRole {
  backend: boolean;
  frontend: boolean;
  project: string;
  technologies: string;
}

export interface IProject {
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
      <div className="mx-auto mb-48 flex max-w-5xl flex-col space-y-20">
        <div>
          <h1 className="text-5xl">{project.title}</h1>
        </div>
        <section className="flex flex-col gap-8">
          {project.deck && <p className="text-2xl">{project.deck}</p>}
          {project.challenge && (
            <p className="text-lg font-extralight">{project.challenge}</p>
          )}
          {project.awards && (
            <p className="text-lg font-extralight">{project.awards}</p>
          )}
        </section>
        {project.stack.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl">Stack</h2>
            <div>
              <StackList stack={project.stack} />
            </div>
          </section>
        )}
        {project.roles.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl">Role</h2>
            <div className="w-full max-w-5xl overflow-x-auto">
              <RolesTable roles={project.roles} />
            </div>
          </section>
        )}
      </div>
      <div
        className="mx-auto grid grid-cols-12 gap-24 py-px"
        style={
          {
            "--frame-bg-from": project.frameColorStart as string,
            "--frame-bg-to": project.frameColorEnd as string,
          } as React.CSSProperties
        }
      >
        {project.screenshots.map((screenshot, index) => (
          <div
            className="col-span-12"
            key={`${project.slug}-screenshot-${index}`}
          >
            <Screenshot project={project} screenshot={screenshot} />
          </div>
        ))}
      </div>
    </>
  );
}
