import useActiveSection from "../hooks/useActiveSection.js";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];
const ids = links.map((l) => l.id);

export default function Navbar() {
  const active = useActiveSection(ids);
  return (
    <header className="bar">
      <nav aria-label="Main">
        <a className="logo" href="#top" aria-label="Back to top">AS</a>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className={active === l.id ? "active" : ""}>
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
