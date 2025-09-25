import { motion } from 'motion/react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  index?: number;
}

const NavLink = ({ href, children, index = 0 }: NavLinkProps) => {
  return (
    <motion.a
      href={href}
      className="text-white font-medium relative px-3 py-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.05,
        textShadow: "0 0 8px rgba(255, 255, 255, 0.5)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.div
        className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
        initial={{ width: 0, x: "-50%" }}
        whileHover={{ 
          width: "100%",
          boxShadow: "0 0 8px rgba(59, 130, 246, 0.6)"
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.a>
  );
};

export default function MotionNav() {
  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#crecimiento", label: "Crecimiento" },
    { href: "#servicios-detallados", label: "Servicios" },
    { href: "#partners", label: "Partners" },
    { href: "#academia", label: "Academia" },
    { href: "#perspectiva", label: "Perspectiva" },
    { href: "#contacto", label: "Contacto" }
  ];

  return (
    <motion.nav 
      className="hidden lg:flex items-center space-x-6 xl:space-x-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {navItems.map((item, index) => (
        <NavLink key={item.href} href={item.href} index={index}>
          {item.label}
        </NavLink>
      ))}
    </motion.nav>
  );
}
