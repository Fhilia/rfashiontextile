import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const ContactCTA = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the mouse movement
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  const background = useMotionTemplate`radial-gradient(450px circle at ${smoothX}px ${smoothY}px, rgba(255,255,255,0.15), transparent 70%)`;

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="py-24 md:py-32 bg-brand-deep text-white overflow-hidden relative animate-gradient-flow bg-[linear-gradient(135deg,#1f3a5f_0%,#162a4d_50%,#1f3a5f_100%)]"
    >
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />

      {/* Interactive Spotlight Layer - Desktop Only */}
      <motion.div 
        className="absolute inset-0 pointer-events-none hidden md:block z-0"
        style={{ background }}
      />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium mb-10 uppercase leading-[1.1] tracking-tight max-w-5xl mx-auto text-white">
            {t.cta.title}
          </h2>
          <p className="text-white/70 mb-16 max-w-2xl mx-auto text-sm md:text-base font-normal leading-relaxed">
            {t.cta.subtitle}
          </p>
          <Link to="/contact" className="inline-block group relative px-12 py-5 overflow-hidden border-2 border-white transition-all duration-300">
            <div className="absolute inset-0 bg-white translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 font-medium text-xs md:text-sm uppercase tracking-[0.4em] text-white group-hover:text-brand-deep transition-colors duration-500">
              {t.cta.button}
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
