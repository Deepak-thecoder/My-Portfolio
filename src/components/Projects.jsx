import React, { useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
   {
    name: "Hotel Management",
    description: "Spring Boot + React + MySQL",
    details: "A full-stack hotel booking system where users can search for rooms, make reservations, and pay online. Includes dynamic pricing based on season and room availability, concurrency-safe booking to prevent double-booking, admin panel for managing rooms, bookings, and customers, and email notifications for bookings and cancellations."
  },
  {
    name: "School Management System",
    description: "Spring Boot + React + MySQL",
    details: "A comprehensive school management platform that handles student enrollment, teacher management, class scheduling, attendance tracking, and exam results. Includes role-based authentication for admins, teachers, and students, automated report generation, notifications for parents and students, and a dashboard for analytics and insights."
  },
  {
    name: "Currency Converter",
    description: "React + API Integration",
    details: "An interactive currency converter app that fetches live exchange rates from a public API. Users can select currencies, enter amounts, and instantly get converted values. Includes dropdowns for selecting currencies, real-time rate updates, error handling for API failures, and a responsive UI suitable for desktop and mobile devices."
  }
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div 
            className="project" 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onClick={() => setSelected(project)}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button>View Details</button>
          </motion.div>
        ))}
      </div>

      {selected && (
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 1000, color: '#fff', padding: '2rem', textAlign: 'center'
          }}
          onClick={() => setSelected(null)}
        >
          <motion.div 
            initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }}
            style={{ maxWidth: '600px', background: '#222', padding: '2rem', borderRadius: '15px' }}
          >
            <h2>{selected.name}</h2>
            <p>{selected.details}</p>
            <button onClick={() => setSelected(null)}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
