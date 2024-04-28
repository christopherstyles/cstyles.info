import { VscArrowRight } from "react-icons/vsc";
import { Carousel } from "@/components/carousel";
import RolesTable from "./roles-table";
import StackList from "./stack-list";
import { Project } from "./types";

interface WorksheetProps {
  project: Project;
}

export default function Worksheet({ project }: WorksheetProps) {
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
        {project.links && project.links.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl">Visit</h2>
            <ul className="flex flex-col gap-4">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    aria-label={`View ${link.title} (opens in a new tab)`}
                    className="group"
                    href={link.href}
                    rel="noreferrer noopener"
                    target="_blank"
                  >
                    {link.title}{" "}
                    <VscArrowRight
                      className="inline align-text-top transition-transform group-hover:translate-x-1"
                      size={22}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
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

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-16 md:gap-32">
        <section
          className="relative flex w-full flex-col"
          style={
            {
              "--frame-bg-from": project.frameColorStart as string,
              "--frame-bg-to": project.frameColorEnd as string,
            } as React.CSSProperties
          }
        >
          <div className="flex w-full flex-col self-stretch overflow-hidden rounded-md bg-gradient-to-b from-[var(--frame-bg-from)] to-[var(--frame-bg-to)] p-[clamp(2rem,5vw,4rem)] dark:bg-none">
            <Carousel images={project.screenshots} />
          </div>
        </section>
      </div>
    </>
  );
}
