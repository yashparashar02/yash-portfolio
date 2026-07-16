import { HiOutlineBookOpen } from "react-icons/hi2";

import Container from "../../components/Container/Container";
import Section from "../../components/Section/Section";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CourseCard from "../../components/CourseCard/CourseCard";
import Reveal from "../../components/Reveal/Reveal";

import { courses } from "../../data/courses";

function Course() {
  return (
    <Section id="professional-development">
      <Container>
        <SectionTitle icon={HiOutlineBookOpen}>
          Professional Development
        </SectionTitle>

        <div className="space-y-6">
          {courses.map((course, index) => (
            <Reveal
              key={course.id}
              delay={index * 0.08}
            >
              <CourseCard
                title={course.title}
                provider={course.provider}
                year={course.year}
                description={course.description}
                technologies={course.technologies}
                courseUrl={course.courseUrl}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Course;