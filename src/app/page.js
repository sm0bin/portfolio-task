import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Timeline from "./_components/Timeline";
import Testimonial from "./_components/Testimonial";
import Contact from "./_components/Contact";

export default function Home() {
  return (
    // Hero
    // About
    // Services
    // Skills
    // Projects (with custom modal for a detailed overview)
    // Timeline (divided into Education and Experience)
    // Testimonial (Auto Slide format)
    // Contact Form
    <main>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Timeline />
      <Testimonial />
      <Contact />



    </main>
  );
}
