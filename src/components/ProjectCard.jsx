export default function ProjectCard({ project, index }) {
  const { title, description, stack, live, repo, learned, featured, category, screenshot } = project;
  return (
    <article className={`tile project ${featured ? "s7 r2 hot" : "s5"}`}>
      {screenshot && <img className="shot" src={screenshot} alt={`Screenshot of ${title}`} loading="lazy" />}
      <div className="project-head">
        <span className="mono">{String(index + 1).padStart(2, "0")}</span>
        <span className="pill">{category}</span>
      </div>
      <h3>{title}</h3>
      <p className="body">{description}</p>
      <ul className="chips" aria-label="Tech stack">
        {stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <details>
        <summary>What I learned</summary>
        <p>{learned}</p>
      </details>
      <div className="cta tight">
        <a className="btn primary" href={live} target="_blank" rel="noreferrer">Live demo ↗</a>
        <a className="btn" href={repo} target="_blank" rel="noreferrer">Source code</a>
      </div>
    </article>
  );
}
