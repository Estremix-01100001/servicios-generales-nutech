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
    <div className="lg:hidden relative ml-auto">
      {/* Mobile Menu Button */}
      <motion.button 
        className="p-2 rounded-lg hover:bg-orange-500/20 transition-all duration-300 bg-black/30 backdrop-blur-md border border-white/20"
        onClick={toggleMenu}
        whileHover={{ 
          scale: 1.05,
          backgroundColor: "rgba(249, 115, 22, 0.2)",
          borderColor: "rgba(249, 115, 22, 0.5)"
        }}
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
            className="fixed top-20 left-0 right-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90 backdrop-blur-md z-40 border-t border-orange-500/30"
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
                    className="text-white font-semibold text-base py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-orange-600/20 transition-all duration-300 relative overflow-hidden border border-transparent hover:border-orange-500/30"
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.05) }}
                    whileHover={{ 
                      x: 8,
                      color: "#f97316",
                      textShadow: "0 0 8px rgba(249, 115, 22, 0.6)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.text}
                    <motion.div
                      className="absolute left-0 top-1/2 w-1 h-0 bg-gradient-to-b from-orange-400 to-orange-600 rounded-r-full"
                      initial={{ height: 0, y: "-50%" }}
                      whileHover={{ height: "60%", y: "-50%" }}
                      transition={{ duration: 0.3 }}
                    />
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

