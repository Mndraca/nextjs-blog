import localFont from "next/font/local";

import Navbar from "@/comps/navbar";
import About from "./about";
import Projects from "@/comps/projects";
import Footer from "@/comps/footer";
import Contact from "./contact";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

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
