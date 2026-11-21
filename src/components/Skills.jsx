import { skills } from "../data.js";

export default function Skills() {
  return (
    <section id="skills">
      <p className="eyebrow">03 / Skills</p>
      <div className="bento">
        {skills.map((s) => (
          <div key={s.group} className="tile s4">
            <h3>{s.group}</h3>
            <ul className="chips">
              {s.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
