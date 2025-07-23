import React from 'react';

const BlueTheme = () => {
  return (
    <div>
      <nav id="navbar" className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#009acd' }}>
        <div className="container">
          <a className="navbar-brand text-white" href="#">Arijit Sengupta</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon bg-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link text-white" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero text-center" style={{ background: 'linear-gradient(135deg, #d4f0ff, #f0fbff)', padding: '5rem 2rem 4rem', color: '#003b5b' }}>
        {/* <img src="your-photo.jpg" alt="Profile Photo" className="profile-pic" /> */}
        <h1 style={{ fontSize: '3rem', fontWeight: '700', color: '#002f49' }}>Arijit Sengupta</h1>
        <p className="lead text-muted">Full Stack Developer | AI Innovator</p>
        <p className="mx-auto" style={{ maxWidth: '600px', color: '#005f77' }}>
          I am a passionate full-stack developer with an entrepreneurial mindset, driven by innovation and a vision for building scalable solutions. From architecting AI-powered platforms to leading high-performance development teams, I transform complex challenges into real-world impact.
        </p>
      </header>

      <section id="skills" className="container py-5">
        <h2 className="section-title text-center mb-4" style={{ color: '#0077b6' }}>Skills</h2>
        <div className="row text-center">
          {['Full Stack Development', 'MERN Stack', 'Data Science', 'AI & ML', 'Python', 'AI Agent Development'].map(skill => (
            <div className="col-md-4 mb-3" key={skill}>{skill}</div>
          ))}
        </div>
      </section>

      <section id="experience" className="bg-light py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4" style={{ color: '#0077b6' }}>Experience</h2>
          <div id="experienceCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {[
                { title: 'Soft Suave', text: 'Worked as a Full Stack Developer focusing on scalable backend and responsive front-end systems.' },
                { title: 'Cognizant', text: 'Contributed to enterprise solutions, streamlining workflows using MERN technologies and automation tools.' },
                { title: 'American Express', text: 'Engaged in financial tech innovation using AI/ML models and secure, scalable APIs.' },
                { title: 'Oracle', text: 'Worked on cloud-based application development, integrating enterprise-grade solutions across global platforms.' }
              ].map((exp, index) => (
                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                  <div className="card text-center mx-auto" style={{ maxWidth: '600px' }}>
                    <div className="card-body">
                      <h5 className="card-title" style={{ color: '#004d66' }}>{exp.title}</h5>
                      <p className="card-text" style={{ color: '#333333' }}>{exp.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#experienceCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#experienceCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section id="projects" className="container py-5">
        <h2 className="section-title text-center mb-4" style={{ color: '#0077b6' }}>Projects</h2>
        <div id="projectCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {['Project One', 'Project Two', 'Project Three'].map((proj, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <div className="card text-center mx-auto" style={{ maxWidth: '600px' }}>
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: '#004d66' }}>{proj}</h5>
                    <p className="card-text" style={{ color: '#333333' }}>Brief description of your {proj.toLowerCase()}.</p>
                    <a href="#" className="btn btn-outline-primary btn-sm">View Project</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section id="contact" className="bg-light py-5">
        <div className="container text-center">
          <h2 className="section-title" style={{ color: '#0077b6' }}>Contact</h2>
          <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
          <p>Phone: +91-XXXXXXXXXX</p>
          <p>LinkedIn: <a href="#" target="_blank" rel="noreferrer">linkedin.com/in/yourprofile</a></p>
          <p>GitHub: <a href="#" target="_blank" rel="noreferrer">github.com/yourprofile</a></p>
        </div>
      </section>

      <footer style={{ backgroundColor: '#009acd', color: 'white', padding: '1rem', textAlign: 'center', fontSize: '0.95rem' }}>
        © 2025 Arijit Sengupta. All rights reserved.
      </footer>
    </div>
  );
};

export default BlueTheme;