import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.products, href: '/products' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/' && location.hash === '';
    return location.pathname.startsWith(path);
  };

  const isHome = location.pathname === '/' && location.hash === '';
  const navTextColor = (!isScrolled && isHome) ? 'text-white' : 'text-brand-deep';
  const navBorderColor = (!isScrolled && isHome) ? 'border-white/10' : 'border-brand-deep/5';
  const logoSrc = (!isScrolled && isHome) ? "/images/logowhite.png" : "/images/logo.png";

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white md:bg-white/95 md:backdrop-blur-sm py-4 border-b border-brand-deep/5 shadow-sm' 
          : `bg-white md:bg-transparent py-6 md:py-8 border-b ${navBorderColor} md:border-b-0 shadow-sm md:shadow-none`
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src={logoSrc} 
            alt="R-FASHION Logo" 
            className="h-12 w-auto object-contain transition-all duration-500"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 lg:space-x-16">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              className={`group relative text-[10px] lg:text-[11px] font-medium uppercase tracking-[0.2em] lg:tracking-[0.3em] transition-colors whitespace-nowrap ${
                isActive(link.href) 
                  ? (isHome && !isScrolled ? 'text-white' : 'text-brand-deep') 
                  : (isHome && !isScrolled ? 'text-white/70 hover:text-white' : 'text-brand-deep/60 hover:text-brand-deep')
              }`}
            >
              <span className="relative z-10">{link.name}</span>
              <div className={`absolute bottom-[-8px] left-0 w-full h-[1px] ${isHome && !isScrolled ? 'bg-white' : 'bg-brand-secondary'} transition-transform duration-500 origin-left ${
                isActive(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
            </Link>
          ))}
          
          <div className={`flex items-center space-x-4 lg:space-x-6 border-l ${(!isScrolled && isHome) ? 'border-white/20' : 'border-brand-deep/10'} pl-6 lg:pl-12 ml-2 lg:ml-4`}>
            <button 
              onClick={() => setLang('zh')}
              className={`text-[10px] font-medium tracking-[0.2em] transition-colors ${lang === 'zh' ? navTextColor : `${navTextColor}/70 hover:${navTextColor}`}`}
            >
              ZH
            </button>
            <button 
              onClick={() => setLang('en')}
              className={`text-[10px] font-medium tracking-[0.2em] transition-colors ${lang === 'en' ? navTextColor : `${navTextColor}/70 hover:${navTextColor}`}`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="flex items-center md:hidden">
          <button 
            className={`${navTextColor} p-2 -mr-2`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-50 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center px-6 py-6 border-b border-brand-deep/5">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                <img 
                  src="/images/logo.png" 
                  alt="R-FASHION Logo" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <button 
                className="text-brand-deep p-2 -mr-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex-1 flex flex-col justify-center items-center px-6 py-12">
              <div className="flex flex-col items-center space-y-8 w-full">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="w-full text-center"
                  >
                    <Link 
                      to={link.href} 
                      className={`text-3xl font-display font-medium uppercase tracking-tight transition-colors block py-2 ${
                        isActive(link.href) ? 'text-brand-deep' : 'text-brand-deep/60'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center space-x-8 pt-12 border-t border-brand-deep/5 w-full justify-center"
                >
                  <button 
                    onClick={() => { setLang('zh'); setMobileMenuOpen(false); }} 
                    className={`text-sm font-medium tracking-[0.2em] ${lang === 'zh' ? 'text-brand-deep' : 'text-brand-deep/70'}`}
                  >
                    ZH
                  </button>
                  <div className="w-[1px] h-4 bg-brand-deep/10" />
                  <button 
                    onClick={() => { setLang('en'); setMobileMenuOpen(false); }} 
                    className={`text-sm font-medium tracking-[0.2em] ${lang === 'en' ? 'text-brand-deep' : 'text-brand-deep/70'}`}
                  >
                    EN
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
