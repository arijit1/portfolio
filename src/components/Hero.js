import React from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 20px',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glow effects */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'var(--accent-primary)',
        filter: 'blur(150px)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '10%',
        width: '300px',
        height: '300px',
        background: 'var(--accent-secondary)',
        filter: 'blur(150px)',
        opacity: 0.15,
        borderRadius: '50%',
        zIndex: 0
      }}></div>

      <div style={{
        maxWidth: '800px',
        textAlign: 'center',
        zIndex: 10,
        marginTop: '60px'
      }}>
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p style={{ 
            color: 'var(--accent-primary)', 
            fontWeight: 600, 
            letterSpacing: '2px', 
            textTransform: 'uppercase',
            marginBottom: '1rem',
            fontFamily: 'var(--font-display)'
          }}>
            Senior Technical Solutions Consultant
          </p>
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: '1.5rem'
          }}
        >
          Hi, I'm <span className="text-gradient">Arijit Sengupta</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            marginBottom: '2.5rem',
            lineHeight: 1.6,
            maxWidth: '600px',
            margin: '0 auto 2.5rem auto'
          }}
        >
          Bridging the gap between complex engineering capabilities and strategic business value.
          Expert in designing AI/LLM-integrated web applications, optimizing cross-functional technical workflows,
          and delivering scalable solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="https://drive.google.com/file/d/1hqjeLVfi0BNoDYo5dQMomPTzNxpp4r9Y/view?usp=sharing" target="_blank" rel="noopener noreferrer"
            style={{
              padding: '12px 28px',
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              borderRadius: '30px',
              fontWeight: 600,
              transition: 'transform 0.2s',
              display: 'inline-block'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}>
            View Resume
          </a>
          <a href="#experience"
            style={{
              padding: '12px 28px',
              background: 'var(--glass-bg)',
              border: '1px solid var(--glass-border)',
              color: 'var(--text-primary)',
              borderRadius: '30px',
              fontWeight: 600,
              transition: 'all 0.2s',
              display: 'inline-block'
            }}
            onMouseOver={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; e.target.style.transform = 'scale(1.05)' }}
            onMouseOut={(e) => { e.target.style.background = 'var(--glass-bg)'; e.target.style.transform = 'scale(1)' }}>
            Explore Work
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--text-secondary)',
          fontSize: '1.5rem',
          zIndex: 10
        }}
      >
        <FaChevronDown />
      </motion.div>
    </section>
  );
};

export default Hero;
