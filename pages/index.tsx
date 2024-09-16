import Navbar from "@/comps/navbar";
import About from "./about";
import Projects from "@/comps/projects";
import Footer from "@/comps/footer";
import Contact from "./contact";

export default function Home() {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
