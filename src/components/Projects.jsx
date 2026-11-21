import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section id="projects">
      <p className="eyebrow">02 / Projects</p>
      <div className="bento">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
