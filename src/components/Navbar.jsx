import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sprout, Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  const navLinks = [
    { name: t('navbar.home'), path: "/" },
    { name: t('navbar.story'), path: "/our-story" },
    { name: t('navbar.harvest'), path: "/our-harvest" },
    { name: t('navbar.consultancy'), path: "/consultancy" }, 
    { name: t('navbar.legacy'), path: "/our-legacy" },
    { name: t('navbar.contact'), path: "/contact" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-farm-darkGreen shadow-2xl py-3' 
          : 'bg-transparent py-6' 
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo - Dynamically changes color based on scroll */}
        <Link 
          to="/" 
          className={`flex items-center gap-3 text-2xl md:text-3xl font-serif font-black transition-colors duration-300 ${
            isScrolled ? 'text-farm-gold' : 'text-farm-darkGreen'
          }`}
        >
          <Sprout size={35} />
          <span className="tracking-tighter uppercase">Hapse Legacy</span>
        </Link>

        {/* Desktop Nav - Bolder, slightly larger, and more space */}
        <div className="hidden xl:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`transition-all duration-300 text-[13px] font-bold uppercase tracking-widest hover:text-farm-gold relative group ${
                isScrolled ? 'text-farm-sand' : 'text-farm-darkGreen'
              }`}
            >
              {link.name}
              {/* Decorative underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-farm-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          {/* Language Selector - Styled as a pill button */}
          <div className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
            isScrolled 
              ? 'border-farm-gold/30 bg-white/5 text-farm-gold' 
              : 'border-farm-darkGreen/30 bg-farm-darkGreen/5 text-farm-darkGreen'
          }`}>
            <Globe size={16} />
            <select 
              onChange={changeLanguage} 
              value={i18n.language}
              className="bg-transparent outline-none cursor-pointer font-black text-xs appearance-none uppercase"
            >
              <option value="en" className="text-black">EN</option>
              <option value="mr" className="text-black">मराठी</option>
            </select>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden p-2 transition-colors" 
          style={{ color: isScrolled ? '#D4AF37' : '#1B3022' }} // Farm Gold vs Dark Green
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-farm-darkGreen border-t border-farm-gold/20 shadow-inner"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="text-farm-sand hover:text-farm-gold py-2 text-xl font-serif border-b border-white/5 tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;