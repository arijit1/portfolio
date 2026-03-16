import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Staff Consultant",
    company: "Oracle",
    location: "Bengaluru, India",
    date: "Oct 2022 - Present",
    points: [
      "Built an AI-powered internal knowledge assistant using LLMs and vector search, enabling engineers to query technical documentation via natural language.",
      "Partnered with product managers, backend engineers, and enterprise clients to deliver customized banking UI solutions aligned with Oracle product architecture.",
      "Troubleshot onsite banking application issues by resolving missing client-side configurations, minimizing downtime and restoring system functionality.",
      "Improved platform performance by troubleshooting third-party API interactions and removing duplicate UI compilation, reducing API latency ~50% and build time by ~50%.",
      "Led development of a modern MSME banking portal by translating Figma designs into reusable Oracle JET components, enabling scalable digital banking workflows.",
      "Created Swagger-based API documentation to improve API visibility and support seamless integration for internal and partner teams."
    ]
  },
  {
    role: "Full Stack Developer",
    company: "Cognizant",
    location: "Bengaluru, India",
    date: "Jan 2020 - Oct 2022",
    points: [
      "Built Node.js/Express APIs for credit card application processing, implementing validation and transformation layers to ensure reliable integration with downstream systems.",
      "Collaborated with field agents to troubleshoot application issues and guide application workflows, enabling smoother customer onboarding.",
      "Developed credit card application workflows using React and Node.js, converting lengthy forms into multi-stage flows with save-resume capability, improving engagement in UK A/B testing."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <span className="text-gradient">Experience</span>
      </motion.h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            className="glass"
            style={{ padding: '2.5rem', borderRadius: '16px' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: index * 0.2 }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '1.5rem', gap: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>{exp.role}</h3>
                <p style={{ fontSize: '1.1rem', color: 'var(--accent-primary)', fontWeight: 500 }}>{exp.company}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ color: 'var(--text-secondary)' }}>{exp.date}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{exp.location}</p>
              </div>
            </div>
            <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.7, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {exp.points.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
