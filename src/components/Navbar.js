import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'var(--glass-bg)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        padding: scrolled ? '1rem 2rem' : '1.5rem 2rem'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-display)' }}>
          Arijit<span className="text-gradient">.</span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', gap: '2rem' }} className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{ fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s ease' }} 
               onMouseOver={(e) => e.target.style.color = 'var(--text-primary)'}
               onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="nav-mobile-btn" style={{ display: 'block', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          <div style={{ width: '24px', height: '2px', background: 'var(--text-primary)', marginBottom: '6px', transition: 'all 0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></div>
          <div style={{ width: '24px', height: '2px', background: 'var(--text-primary)', marginBottom: '6px', opacity: isOpen ? 0 : 1 }}></div>
          <div style={{ width: '24px', height: '2px', background: 'var(--text-primary)', transition: 'all 0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none' }}></div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--glass-border)',
              padding: '1rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media(min-width: 768px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile-btn { display: none !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
