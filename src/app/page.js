import Hero from "./_components/Hero";
import About from "./_components/About";
import Services from "./_components/Services";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import Timeline from "./_components/Timeline";
import Testimonial from "./_components/Testimonial";
import Contact from "./_components/Contact";
import { getAllData } from "@/utils/getAllData";
import Footer from "./_components/Footer";


export default async function Home() {
  const data = await getAllData();

  return (
    <div data-theme="bumblebee">
      <Hero data={data} />
      <main className="px-6" >
        <About data={data} />
        <Services data={data} />
        <Skills data={data} />
        <Projects data={data} />
        <Timeline data={data} />
        <Testimonial data={data} />
        <Contact data={data} />
      </main>
      <Footer data={data} />
    </div>
  );
}