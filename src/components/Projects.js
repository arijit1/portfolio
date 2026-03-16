import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Langgraph-cassette",
    date: "2025",
    description: "Built an open-source Node.js framework for reproducible LLM testing by caching external API responses and eliminating token usage, reducing development cost by ~50%.",
    tags: ["Node.js", "Open Source", "LLM", "Testing Framework"]
  },
  {
    title: "GitHub Repository Chatbot (Won Hackathon)",
    date: "2025",
    description: "Developed LLM-powered GitHub repository chatbot supporting semantic search and contextual interaction with repository content. Won Hackathon by sidetrip.ai.",
    tags: ["LLM", "Semantic Search", "Hackathon Winner"]
  },
  {
    title: "Short Content Media Platform",
    date: "2024",
    description: "Developed a short-form content platform scaling to an early user base of 20–30 users.",
    tags: ["Full Stack", "Media Platform"]
  },
  {
    title: "HealthCare-AI On FingerTip",
    date: "2022",
    description: "Led development of an AI-driven healthcare monitoring prototype, integrating ML models for vitals tracking and X-ray analysis. Ranked Top 100 in India 5G Hackathon.",
    tags: ["Machine Learning", "Healthcare", "Hackathon"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-gradient">Featured Projects</span>
      </motion.h2>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {projects.map((proj, index) => (
          <motion.div 
            key={index}
            className="glass"
            style={{ 
              padding: '2rem', 
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.3)' }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>{proj.title}</h3>
              <span style={{ fontSize: '0.85rem', color: 'var(--accent-secondary)', fontWeight: 500, padding: '4px 8px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '12px' }}>{proj.date}</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
              {proj.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {proj.tags.map((tag, i) => (
                <span key={i} style={{ 
                  fontSize: '0.8rem', 
                  color: 'var(--accent-primary)', 
                  background: 'rgba(59, 130, 246, 0.1)', 
                  padding: '4px 10px', 
                  borderRadius: '12px',
                  fontWeight: 500
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
