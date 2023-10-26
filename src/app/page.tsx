import Image from "next/image";
import Header from "./Essentials/Header";
import Hero from "./Sections/Hero";
import Card from "./Sections/Card";
import Projects from "./Pages/Projects/page";
import About from "./Pages/About/page";
import Contact from "./Pages/Contact/page";
import Technologies from "./Sections/Technologies";
import Work from "./Pages/Projects/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <div className="min-h-screen p-4">
      <Technologies />
    </div>
    <div className="min-h-screen p-4">
      <Work />
    </div>
      <Contact/>

    </div>
  );
}
