import { useState } from "react";
import { profile } from "../data.js";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  }

  return (
    <section id="contact">
      <p className="eyebrow">04 / Contact</p>
      <div className="bento">
        <div className="tile s12 glow contact">
          <h2 className="big">Let's build something <span className="grad">together.</span></h2>
          <p className="body">I'm open to fresher web developer roles. Email is the quickest way to reach me.</p>
          <div className="cta">
            <a className="btn primary" href={`mailto:${profile.email}`}>Email me</a>
            <button className="btn" type="button" onClick={copyEmail}>
              {copied ? "Email copied ✓" : "Copy email"}
            </button>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
