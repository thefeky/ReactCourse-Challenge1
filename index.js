import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  { skill: "HTML5", level: "advanced", colour: "pink" },
  { skill: "CSS3", level: "advanced", colour: "lightblue" },
  { skill: "JavaScript", level: "intermediate", colour: "gray" },
  { skill: "React", level: "beginner", colour: "red" },
  { skill: "Git and Github", level: "beginner", colour: "green" },
  { skill: "NodeJS", level: "beginner", colour: "orange" },
];

function App() {
  return (
    <div className="card">
      <Avatar avatarPic="https://i.imgur.com/3KR8yIE.jpeg" avatarName="Feky" />
      <div className="data">
        <Intro
          name="Ahmed Hany Elfeky"
          bio="Full-stack web developer specialized in MERN stack lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img className="avatar" src={props.avatarPic} alt={props.avatarName} />
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          colour={skill.colour}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, colour }) {
  return (
    <span className="skill" style={{ backgroundColor: colour }}>
      {skill}
      {level === "beginner" && "👇"}
      {level === "intermediate" && "👊"}
      {level === "advanced" && "👆"}
    </span>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
