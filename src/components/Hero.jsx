import useTyping from "../hooks/useTyping.js";
import { profile } from "../data.js";

export default function Hero() {
  const typed = useTyping(profile.roles);
  const initials = profile.name.split(" ").map((w) => w[0]).join("");

  return (
    <section id="top" className="bento first">
      <div className="tile s8 r2 glow intro">
        <p className="mono">Hi, I'm</p>
        <h1 className="grad">{profile.name}</h1>
        <p className="typed" aria-hidden="true">
          <span className="prompt">&gt;</span> {typed}
          <span className="caret" />
        </p>
        <p className="sr-only">Full-stack web developer</p>
        <p className="lead">{profile.intro}</p>
        <div className="cta">
          <a className="btn primary" href="#projects">See my work</a>
          <a className="btn" href={profile.resume} download>Download resume</a>
        </div>
      </div>

      <div className="tile s4 r2 profile">
        {profile.photo ? (
          <img className="avatar" src={profile.photo} alt={profile.name} />
        ) : (
          <div className="avatar" aria-hidden="true">{initials}</div>
        )}
        <p className="profile-name">{profile.name}</p>
        <p className="muted">Full-stack web developer</p>
        <p className="status"><span className="dot" />Open to work</p>
      </div>
    </section>
  );
}
