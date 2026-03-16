import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '2rem 20px',
      background: 'var(--bg-secondary)',
      marginTop: '4rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem'
      }}>
        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '1.5rem' }}>
          <a href="https://github.com/arijit1" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}><FaGithub /></a>
          <a href="https://www.linkedin.com/in/arijit-sengupta-/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}><FaLinkedin /></a>
          <a href="mailto:sengupta.arijit84@gmail.com" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}><FaEnvelope /></a>
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textAlign: 'center' }}>
          © {new Date().getFullYear()} Arijit Sengupta.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
