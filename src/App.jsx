import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import { profile } from "./data.js";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="wrap">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        © {new Date().getFullYear()} {profile.name} · Built with React and Vite
      </footer>
    </>
  );
}
