import {
  FaCode,
  FaFolder,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";

import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Reveal from "../../components/Reveal/Reveal";

import { projects } from "../../data/projects";

function Projects() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle icon={FaFolder}>
          Projects
        </SectionTitle>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.08}
              className="h-full"
            >
              <article className="group flex h-full min-w-0 flex-col rounded-2xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/10 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 sm:h-14 sm:w-14">
                    <FaCode className="text-xl text-purple-200 sm:text-2xl" />
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title} on GitHub`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 transition-all duration-300 hover:border-purple-300/40 hover:bg-white/10 hover:text-white"
                  >
                    <FiArrowUpRight className="text-xl" />
                  </a>
                </div>

                <h3 className="mt-7 break-words text-xl font-bold leading-tight text-white sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-5 flex-1 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies?.map((technology) => (
                    <span
                      key={technology}
                      className="max-w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-fit items-center gap-2 text-base font-semibold text-white transition-colors duration-300 hover:text-purple-200"
                >
                  View on GitHub

                  <FiArrowUpRight className="text-lg" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Projects;