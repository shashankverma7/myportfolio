import React from "react";
import SkillsCard from "./elements/SkillsCard";

const skills = [
  {
    name: "Java",
    level: "Expert",
    percentage: 90,
    icon: "https://img.icons8.com/3d-fluency/94/java-coffee-cup-logo.png",
  },
  {
    name: "Spring Boot",
    level: "Expert",
    percentage: 90,
    icon: "https://img.icons8.com/color/48/spring-logo.png",
  },
  {
    name: "React",
    level: "Advanced",
    percentage: 85,
    icon: "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/react.png",
  },
  {
    name: "Tailwind",
    level: "Advanced",
    percentage: 80,
    icon: "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/tailwind.png",
  },
  {
    name: "Git",
    level: "Advanced",
    percentage: 80,
    icon: "https://img.icons8.com/ios/50/git.png",
  },
  {
    name: "HTML",
    level: "Advanced",
    percentage: 80,
    icon: "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/html.png",
  },
  {
    name: "CSS",
    level: "Proficient",
    percentage: 70,
    icon: "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/css.png",
  },
  {
    name: "MongoDB",
    level: "Proficient",
    percentage: 70,
    icon: "https://raw.githubusercontent.com/shashankvrma/portfolio/main/src/assets/mongo.png",
  },
  {
    name: "MySQL",
    level: "Proficient",
    percentage: 80,
    icon: "https://img.icons8.com/?size=100&id=11625&format=png&color=000000",
  },
  {
    name: "Docker",
    level: "Proficient",
    percentage: 80,
    icon: "https://img.icons8.com/?size=100&id=22813&format=png&color=000000",
  },
  {
    name: "Kubernetes",
    level: "Proficient",
    percentage: 80,
    icon: "https://img.icons8.com/color/48/kubernetes.png",
  },
  {
    name: "AWS",
    level: "Proficient",
    percentage: 70,
    icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
  },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full md:h-screen text-black bg-transparent">
      <div className="max-w-screen-2xl mx-auto flex flex-col p-4 justify-center w-full h-full">
        <section className="py-12" id="skills">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pb-8 mt-16 items-center text-center">
              <p className="text-bold text-4xl inline border-b-4 border-pink-600 text-slate-900 font-poppins">
                Skills
              </p>
            </div>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 md-lg:grid-cols-5 lg:grid-cols-6 gap-4 place-items-center">
              {skills.map((skill) => (
                <SkillsCard
                  key={skill.key}
                  name={skill.name}
                  image={skill.icon}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
