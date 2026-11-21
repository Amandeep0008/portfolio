import { about, facts, projects } from "../data.js";

export default function About() {
  return (
    <section id="about">
      <p className="eyebrow">01 / About</p>
      <div className="bento">
        <div className="tile s7">
          <h2>A little about me</h2>
          {about.map((p) => (
            <p key={p} className="body">{p}</p>
          ))}
        </div>
        <div className="tile s5 stack-tile">
          <div className="stat">
            <span className="stat-num grad">{projects.length}</span>
            <span className="muted">live projects</span>
          </div>
          <ul className="facts">
            {facts.map((f) => (
              <li key={f.label}>
                <span className="mono small">{f.label}</span>
                <span>{f.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
