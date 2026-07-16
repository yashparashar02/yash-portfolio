import { FaCode } from "react-icons/fa";

import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

import { skills } from "../../data/skills";

function Skills() {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle icon={FaCode}>
          Skills
        </SectionTitle>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group flex min-h-40 flex-col items-center justify-center rounded-2xl border border-white/10 bg-slate-950/35 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-purple-300/30 hover:bg-white/10 sm:min-h-44 sm:p-6"
              >
                <Icon className="mb-5 text-4xl text-slate-400 transition-colors duration-300 group-hover:text-purple-200 sm:text-5xl" />

                <h3 className="text-base font-semibold leading-snug text-slate-200 sm:text-lg">
                  {skill.name}
                </h3>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default Skills;