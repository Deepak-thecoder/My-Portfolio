import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { name: "Java", level: 90 },
    { name: "Spring Boot", level: 85 },
    { name: "React", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Docker", level: 70 }
  ];

  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div 
            className="skill" 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
          >
            <h4>{skill.name}</h4>
            <div style={{ background: '#333', borderRadius: '5px', height: '8px', marginTop: '0.5rem' }}>
              <div style={{
                width: `${skill.level}%`,
                background: 'linear-gradient(90deg, #ff4c60, #ff1f3a)',
                height: '8px',
                borderRadius: '5px'
              }}></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
