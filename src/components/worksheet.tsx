import { Carousel } from "@/components/carousel";
import RolesTable from "./roles-table";
import StackList from "./stack-list";
import { Project } from "./types";

export default function Worksheet({ project }: { project: Project }) {
  return (
    <>
      <div className="mx-auto mb-24 flex max-w-5xl flex-col space-y-20 text-lg lg:mb-40">
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
            <div className="flex w-full">
              <div className="overflow-x-auto">
                <RolesTable roles={project.roles} />
              </div>
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

      <div className="mx-auto flex w-full flex-col gap-16 md:gap-32">
        <section
          className="relative flex w-full flex-col"
          style={
            {
              "--frame-bg-from": project.frameColorStart as string,
              "--frame-bg-to": project.frameColorEnd as string,
            } as React.CSSProperties
          }
        >
          <div className="flex w-full flex-col self-stretch overflow-hidden rounded-sm bg-gradient-to-b from-[var(--frame-bg-from)] to-[var(--frame-bg-to)] p-[clamp(2rem,5vw,4rem)] dark:bg-none">
          </div>
        </section>
      </div>
    </>
  );
}
