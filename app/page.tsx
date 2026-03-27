import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import LearningNext from "@/components/LearningNext";
import LiveProducts from "@/components/LiveProducts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col pb-0">
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <LearningNext />
      <LiveProducts />
      <Contact />
    </div>
  );
}
