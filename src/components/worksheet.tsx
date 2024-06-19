import Image from "next/image";
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
      <div className="mx-auto max-w-screen-md">
        <div className="flex flex-col space-y-20 text-lg">
          <div>
            <h1 className="text-5xl">{project.title}</h1>
          </div>
          <section className="flex flex-col gap-8">
            {project.deck && <p className="text-2xl">{project.deck}</p>}
            {project.challenge && <p>{project.challenge}</p>}
            {project.awards && <p>{project.awards}</p>}
            <p className="text-sm opacity-50">
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
      </div>
      <section className="mx-auto mt-24 flex max-w-screen-md flex-col gap-24">
        {project.screenshots.map((screenshot) => (
          <Image
            alt={`${screenshot.alt}`}
            className="select-none rounded object-cover shadow-lg lg:shadow-2xl"
            draggable={false}
            height={1728}
            key={screenshot.src}
            loading="lazy"
            quality={65}
            sizes="(max-width: 768px) 100vw, 56rem"
            src={screenshot.src}
            width={2880}
          />
        ))}
      </section>
    </Container>
  );
}
