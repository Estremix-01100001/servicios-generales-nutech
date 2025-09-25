import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Detectar si estamos en la hero section
  useEffect(() => {
    const checkHeroSection = () => {
      const heroSection = document.getElementById('inicio');
      const scrollPosition = window.scrollY;
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      
      setIsInHeroSection(scrollPosition < heroHeight - 100);
    };

    checkHeroSection();
    window.addEventListener('scroll', checkHeroSection);
    window.addEventListener('resize', checkHeroSection);

    return () => {
      window.removeEventListener('scroll', checkHeroSection);
      window.removeEventListener('resize', checkHeroSection);
    };
  }, []);

  const navLinks = [
    { href: "#inicio", text: "Inicio" },
    { href: "#crecimiento", text: "Crecimiento" },
    { href: "#servicios-detallados", text: "Servicios" },
    { href: "#partners", text: "Partners" },
    { href: "#academia", text: "Academia" },
    { href: "#perspectiva", text: "Perspectiva" },
    { href: "#contacto", text: "Contacto" }
  ];

  return (
    <div className="lg:hidden relative">
      {/* Mobile Menu Button */}
      <motion.button 
        className="p-2 rounded-lg hover:bg-white/10 transition-colors fixed top-4 right-4 z-50 bg-transparent backdrop-blur-md"
        onClick={toggleMenu}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        aria-label="Toggle mobile menu"
      >
        <motion.svg 
          className="w-6 h-6 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M4 6h16M4 12h16M4 18h16"
            animate={{ 
              d: isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.svg>
      </motion.button>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-[128px] left-0 right-0 bg-black/80 backdrop-blur-md z-40"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="container mx-auto px-12 sm:px-16 py-4 bg-transparent">
              <motion.div 
                className="flex flex-col space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    className="text-white font-semibold text-base py-3 px-4 rounded-lg hover:bg-white/15 transition-all duration-300 relative overflow-hidden"
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.text}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

