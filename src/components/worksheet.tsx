import { Carousel } from "@/components/carousel";
import { VscArrowRight } from "react-icons/vsc";
import Container from "./container";
import StackList from "./stack-list";
import type { Project } from "./types";

interface WorksheetProps {
  project: Project;
}

export default function Worksheet({ project }: WorksheetProps) {
  return (
    <Container>
      <div className="flex flex-col space-y-20 text-lg">
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
            <h2 className="text-3xl">
              <a
                aria-label={`View ${project.links[0].title} (opens in a new tab)`}
                className="group"
                href={project.links[0].href}
                rel="noreferrer noopener"
                target="_blank"
              >
                Visit
              </a>
            </h2>
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
        {project.stack.length > 0 && (
          <section className="flex flex-col gap-8">
            <h2 className="text-3xl">Stack</h2>
            <div>
              <StackList stack={project.stack} />
            </div>
          </section>
        )}
      </div>
      <section className="-mx-4 md:-mx-6">
        <Carousel screenshots={project.screenshots} />
      </section>
    </Container>
  );
}
