import Image from "next/image";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Timeline from "./_components/Timeline";
import Testimonial from "./_components/Testimonial";
import Contact from "./_components/Contact";
import { getAllData } from "@/utils/getAllData";


export default async function Home() {
  const data = await getAllData();

  return (
    <main className="px-6" data-theme="light">
      <Hero data={data} />
      <About data={data} />
      <Services data={data} />
      <Skills data={data} />
      <Projects data={data} />
      <Timeline data={data} />
      {/* <Testimonial data={data} /> */}
      <Contact data={data} />
    </main>
  );
}