import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './BlueTheme.css';

const experiences = [
  { title: 'Soft Suave Pvt. Ltd.', text: 'During my internship, I worked with an e-commerce client who was launching targeted advertisements on their platform. To measure ad effectiveness, they needed a solution to track real-time user engagement. I developed a browser-based activity tracking tool that recorded keystrokes, mouse movements, and clicks. The system flagged users as idle during inactivity, helping the client determine whether ads were viewed by actively engaged users. This insight was used to refine ad placements, improve campaign ROI, and enhance customer targeting strategies.' },
  { title: 'Cognizant', text: 'Contributed to enterprise fintech solutions, streamlining workflows using MERN technologies.' },
  { title: 'American Express', text: 'Engaged in financial tech implementation with Nodejs as boilerplate. Integrated and built secure, scalable APIs with vendor.' },
  { title: 'Oracle', text: 'Worked on cloud-based banking application developments, integrating oracle banking products across different banks.' }
];

const projects = [
  { title: 'Gyaan AI', text: 'A platform where students can ask subject specific questions , upload there textbooks, notes and ask relevant questions.' },
  { title: 'Fraud Detection Model', text: 'A model trained on various spam news and authentic news. Using which we can analyse if a news is fake or authentic.' },
  { title: 'Doc Se Help', text: 'A platform which can do live monitoring of patient vitals.' },
  { title: 'Bluetooth Car', text: 'Developed a Prototype which Achieves Bluetooth control communication between the mobile and the vehicle Using Arduino controller.' }
];

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Carousel = ({ items }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + items.length) % items.length);
  const next = () => setIndex((index + 1) % items.length);

  return (
    <div className="simple-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
          className="glass-card text-center mx-auto mb-4"
          style={{ maxWidth: '700px' }}
        >
          <div className="card-body">
            <h5 className="card-title text-gradient fs-3 mb-3">{items[index].title}</h5>
            <p className="card-text text-secondary lh-lg">{items[index].text}</p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="carousel-buttons mt-4 text-center">
        <button className="btn-glass me-3" onClick={prev}>Previous</button>
        <button className="btn-glow" onClick={next}>Next</button>
      </div>
    </div>
  );
};

const BlueTheme = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top glass-nav">
        <div className="container">
          <a className="navbar-brand text-gradient" href="#">Arijit Sengupta</a>
          <button className="navbar-toggler border-0 px-3 py-2 btn-glass" onClick={() => setMenuOpen(!menuOpen)}>
            <span style={{ color: 'var(--text-primary)' }}>☰</span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navMenu">
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link btn-glow px-4 py-2 ms-lg-3" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <motion.header
        className="hero text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="glass-panel p-4 mb-4" variants={fadeIn} style={{ borderRadius: '50px', background: 'rgba(59, 130, 246, 0.1)' }}>
          <span className="text-secondary fw-semibold px-3">Available for opportunities</span>
        </motion.div>

        <motion.h1 variants={fadeIn}>
          <span className="text-gradient">Arijit Sengupta</span>
        </motion.h1>

        <motion.p className="lead" variants={fadeIn}>
          Full Stack Developer <span style={{ color: 'var(--accent-secondary)' }}>|</span> AI Innovator
        </motion.p>

        <motion.p className="mx-auto text-secondary lh-lg" style={{ maxWidth: '700px', fontSize: '1.1rem' }} variants={fadeIn}>
          I am a passionate full-stack developer with an entrepreneurial mindset, driven by innovation and a vision for building scalable solutions. From architecting AI-powered platforms to leading high-performance development teams, I transform complex challenges into real-world impact.
        </motion.p>

        <motion.div className="mt-5 d-flex gap-3 justify-content-center flex-wrap" variants={fadeIn}>
          <a href="#projects" className="btn-glow text-decoration-none">View My Work</a>
          <a href="#contact" className="btn-glass text-decoration-none">Contact Me</a>
        </motion.div>
      </motion.header>

      <section id="skills" className="container py-5 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="section-title text-gradient">Skills & Expertise</h2>
        </motion.div>

        <motion.div
          className="row g-4 justify-content-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {/* Core Development */}
          <motion.div className="col-12 col-md-6 col-lg-4" variants={fadeIn}>
            <div className="glass-card h-100 p-4">
              <h4 className="mb-3 text-primary">Core Development</h4>
              <p className="text-secondary mb-2"><strong>Languages:</strong><br /> JavaScript, Java, Python, SQL</p>
              <p className="text-secondary mb-2"><strong>Frontend:</strong><br /> React.js, HTML, CSS, Bootstrap, OJET, React Native</p>
              <p className="text-secondary mb-0"><strong>Backend:</strong><br /> Node.js, Express.js, Flask, REST APIs, Spring</p>
            </div>
          </motion.div>

          {/* Databases & Cloud */}
          <motion.div className="col-12 col-md-6 col-lg-4" variants={fadeIn}>
            <div className="glass-card h-100 p-4">
              <h4 className="mb-3" style={{ color: 'var(--accent-secondary)' }}>Infra & DB</h4>
              <p className="text-secondary mb-2"><strong>Databases:</strong><br /> MongoDB, PostgreSQL, MySQL, Firebase, VectorDB</p>
              <p className="text-secondary mb-2"><strong>Cloud & Deployment:</strong><br /> Google Cloud, Render, Oracle Cloud, Jenkins</p>
              <p className="text-secondary mb-0"><strong>Tools:</strong><br /> GitHub, Docker, Linux, Postman</p>
            </div>
          </motion.div>

          {/* AI / Data & Other */}
          <motion.div className="col-12 col-md-6 col-lg-4" variants={fadeIn}>
            <div className="glass-card h-100 p-4">
              <h4 className="mb-3" style={{ color: 'var(--accent-tertiary)' }}>AI & Skills</h4>
              <p className="text-secondary mb-2"><strong>Data Science/AI:</strong><br /> Pandas, NumPy, Matplotlib, Seaborn, sklearn, TensorFlow, Keras</p>
              <p className="text-secondary mb-2"><strong>Other Tech:</strong><br /> JWT, Git, GitHub, SVN</p>
              <p className="text-secondary mb-0"><strong>Soft Skills:</strong><br /> Agile, Problem Solving, Communication</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section id="experience" className="py-5 mt-5 position-relative">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="section-title text-gradient">Experience</h2>
          </motion.div>
          <Carousel items={experiences} />
        </div>
      </section>

      <section id="projects" className="container py-5 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center"
        >
          <h2 className="section-title text-gradient">Featured Projects</h2>
        </motion.div>
        <Carousel items={projects} />
      </section>

      <section id="contact" className="py-5 mt-5 mb-5">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="glass-card text-center mx-auto" style={{ maxWidth: '800px' }}>
            <h2 className="section-title text-gradient mb-4">Let's Connect</h2>
            <p className="text-secondary mb-4 fs-5">Interested in collaborating or have an opportunity in mind?</p>

            <div className="d-flex flex-column gap-3 justify-content-center align-items-center mb-4">
              <a href="mailto:sengupta.arijit84@gmail.com" className="btn-glow text-decoration-none" style={{ width: '350px' }}>
                <i className="fas fa-envelope me-2"></i> sengupta.arijit84@gmail.com
              </a>
              <div className="d-flex gap-3 flex-wrap justify-content-center mt-3">
                <a href="https://www.linkedin.com/in/arijit-sengupta-/" target="_blank" rel="noreferrer" className="btn-glass text-decoration-none">
                  LinkedIn Profile
                </a>
                <a href="https://arijit1.github.io/portfolio/" target="_blank" rel="noreferrer" className="btn-glass text-decoration-none">
                  GitHub Profile
                </a>
              </div>
              <p className="text-secondary mt-3"><i className="fas fa-phone me-2"></i> +91-9669164190</p>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <div className="container">
          <p className="mb-0">© 2025 Arijit Sengupta. All rights reserved.</p>
          <p className="text-muted mt-2" style={{ fontSize: '0.85rem' }}>Designed & Built with React & Modern Web Technologies</p>
        </div>
      </footer>
    </div>
  );
};

export default BlueTheme;
