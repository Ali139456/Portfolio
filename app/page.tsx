import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import LiveProducts from "@/components/LiveProducts";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col pb-20">
      <Hero />
      <About />
      <Experience />
      <TechStack />
      <LiveProducts />
      <Contact />
    </div>
  );
}
