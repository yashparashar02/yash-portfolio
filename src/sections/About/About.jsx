import { FaUser } from "react-icons/fa";

import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Reveal from "../../components/Reveal/Reveal";

function About() {
  return (
    <Section id="about">
      <Container>
        <SectionTitle icon={FaUser}>
          About
        </SectionTitle>

        <Reveal>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 transition-all duration-300 hover:border-purple-300/30 hover:bg-white/[0.07] sm:p-8 lg:p-10">
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              I'm a Computer Science graduate and Java Software Engineer with
              hands-on experience in Java applications, REST APIs, debugging,
              and backend development. I enjoy building reliable software and
              solving technical problems through clean and maintainable code.
            </p>

            <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
              My experience includes working with Java, Spring Boot, React,
              JavaScript, MySQL, and RESTful APIs. I also practice Data
              Structures and Algorithms regularly to strengthen my
              problem-solving and software engineering fundamentals.
            </p>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default About;