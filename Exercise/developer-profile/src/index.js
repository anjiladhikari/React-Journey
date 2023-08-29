import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />

      <div>
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="./anjil.jpg" alt="anjil" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Anjil Adhikari</h1>
      <p> Full-stack web developer </p>
    </div>
  );
}

function SkillList() {
  const skilldata = skills;

  return (
    <div className="skill-list">
      {skilldata.map((skill) => (
        <Skill skillall={skill} key={skill.skill} />
      ))}

      {/* <Skill name="HTML+CSS" emoji="💪🏼" color="orange" /> */}
    </div>
  );
}

function Skill({ skillall }) {
  return (
    <div className="skill" style={{ backgroundColor: skillall.color }}>
      <span>{skillall.skill}</span>
      <span>
        {skillall.level === "advanced"
          ? "💪🏼"
          : skillall.level === "intermediate"
          ? "👍"
          : "👶"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

