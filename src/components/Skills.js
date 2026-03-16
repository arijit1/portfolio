import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "Java", "Python", "HTML/CSS"]
  },
  {
    title: "Core Concepts",
    skills: ["System Design", "Data Structures", "Machine Learning", "RAG", "Prompt Engineering"]
  },
  {
    title: "Databases & Cloud",
    skills: ["MySQL", "MongoDB", "Firebase", "Pinecone (VectorDB)", "Heroku", "Cyclic"]
  },
  {
    title: "Frameworks & Tools",
    skills: ["React.js", "Node.js", "Express.js", "Flask", "React Native", "Git", "LangChain", "OpenAI API"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Skills = () => {
  return (
    <section id="skills" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-gradient">Technical Arsenal</span>
      </motion.h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem'
      }}>
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="glass"
            style={{ padding: '2rem', borderRadius: '16px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.1 }}
          >
            <h3 style={{ 
              fontSize: '1.25rem', 
              fontWeight: 600, 
              color: 'var(--text-primary)', 
              marginBottom: '1.5rem',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '0.75rem'
            }}>
              {category.title}
            </h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
            >
              {category.skills.map((skill, i) => (
                <motion.span 
                  key={i}
                  variants={itemVariants}
                  style={{
                    padding: '8px 16px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                    cursor: 'default'
                  }}
                  whileHover={{
                    background: 'rgba(59, 130, 246, 0.15)',
                    color: 'var(--accent-primary)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    scale: 1.05
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
