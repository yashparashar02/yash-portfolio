import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Experience from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Education from "./sections/Education/Education";
import Course from "./sections/Course/Course";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Background />
      <Navbar />

      <main className="pt-24 sm:pt-28">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Course />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;