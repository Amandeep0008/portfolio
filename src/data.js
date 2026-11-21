// Edit this file to update your whole portfolio.

export const profile = {
  name: "Amandeep Singh",
  roles: [
    "Full-stack web developer",
    "React developer",
    "Node.js and MongoDB builder",
  ],
  intro:
    "I build complete web apps, from the interface to the database, and deploy them so you can try them yourself.",
  email: "amandeepsingh48525@gmail.com",
  github: "https://github.com/Amandeep0008",
  linkedin: "https://www.linkedin.com/in/amandeep-singh-17304b320",
  resume: "/resume.pdf", // put your resume in the public/ folder as resume.pdf
};

export const about = [
  "I graduated in July 2026 with a B.Tech in Information Technology from B.P. Poddar Institute of Management and Technology.",
  "I'm looking for a fresher web developer role, ideally at a product team, where I can keep building real features and learn from experienced engineers.",
  // TODO: add one sentence about what you enjoy building.
];

// screenshot: save an image in public/screenshots/ and set the path, e.g. "/screenshots/job-tracker.png".
// Until then the hover preview shows a placeholder card.
export const projects = [
  {
    id: "job-tracker",
    title: "Job Application Tracker",
    category: "Full-stack",
    featured: true,
    screenshot: null,
    description:
      "Record job applications and follow each one from applied to offer. Secure login keeps every user's data private.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://job-application-tracker-frontend-uu66.onrender.com",
    repo: "https://github.com/Amandeep0008/job-application-tracker",
    learned:
      "Keeping each user's applications private with JWT auth middleware and bcrypt, and calculating stage-wise dashboard stats directly in MongoDB so the frontend doesn't have to do the heavy lifting.",
  },
  {
    id: "cinebook",
    title: "CineBook",
    category: "Frontend",
    screenshot: null,
    description:
      "Browse movies and book seats in a movie ticket booking web app.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://cinebook-booking-engine.vercel.app",
    repo: "https://github.com/Amandeep0008/cinebook-booking-engine",
    learned:
      "Managing seat availability and tiered ticket prices in a 2D array without state bugs, validating card details at checkout, and keeping booked seats synced across page reloads with localStorage.",
  },
  {
    id: "weathernow",
    title: "WeatherNow",
    category: "Frontend",
    screenshot: null,
    description: "Search any city and see its current weather conditions.",
    stack: ["HTML", "CSS", "JavaScript"],
    live: "https://weather-now-mdfz.vercel.app",
    repo: "https://github.com/Amandeep0008/weather_Now",
    learned:
      "Chaining geocoding and forecast API calls cleanly, using debouncing so the city autocomplete doesn't fire unnecessary requests on every keystroke, and saving recent searches in localStorage.",
  },
];

export const skills = [
  { group: "Frontend", items: ["React", "JavaScript (ES6+)", "HTML and CSS", "Responsive design"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT authentication"] },
  { group: "Database and tools", items: ["MongoDB", "Git and GitHub", "Vercel and Render"] },
];

// Optional: save a photo in public/ (for example public/me.jpg) and set it here as "/me.jpg".
// Until then the hero card shows your initials.
profile.photo = null;

export const facts = [
  { label: "Education", value: "B.Tech in Information Technology, 2026" },
  { label: "Focus", value: "Full-stack web (React, Node.js, MongoDB)" },
  { label: "Looking for", value: "Fresher web developer roles" },
];
