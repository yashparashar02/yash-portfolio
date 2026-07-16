import {
  FaBriefcase,
  FaMapMarkerAlt,
} from "react-icons/fa";

import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Reveal from "../../components/Reveal/Reveal";

import { experiences } from "../../data/experience";

function Experience() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle icon={FaBriefcase}>
          Experience
        </SectionTitle>

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company}-${experience.role}`}
              delay={index * 0.08}
            >
              <article className="rounded-2xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:border-purple-300/30 hover:bg-white/[0.07] sm:p-8 lg:p-10">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-tight text-white sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-purple-200 sm:text-lg">
                      {experience.company}
                    </p>

                    <div className="mt-3 flex items-center gap-2 text-sm text-slate-400 sm:text-base">
                      <FaMapMarkerAlt className="shrink-0 text-purple-300" />

                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <p className="shrink-0 text-sm font-semibold text-slate-300 sm:text-base">
                    {experience.duration}
                  </p>
                </div>

                <div className="my-7 h-px bg-white/10" />

                <ul className="space-y-4">
                  {experience.responsibilities.map((responsibility) => (
                    <li
                      key={responsibility}
                      className="flex items-start gap-4 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8"
                    >
                      <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-purple-300" />

                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Experience;