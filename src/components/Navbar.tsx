import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, Search } from 'lucide-react';

export const Navbar = () => {
  const { scrollY } = useScroll();
  
  // Transform values for a dynamic navbar interaction
  const height = useTransform(scrollY, [0, 100], [96, 72]);
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(9, 9, 11, 0)", "rgba(9, 9, 11, 0.8)"]);
  const backdropFilter = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);

  return (
    <motion.nav
      style={{ 
        height, 
        backgroundColor,
        backdropFilter
      }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 border-b border-white/0 transition-colors duration-500"
    >
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-2 cursor-pointer group"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-white flex items-center justify-center">
          <div className="w-3 h-3 bg-zinc-950 rounded-full group-hover:scale-125 transition-transform duration-300" />
        </div>
        <span className="font-serif text-2xl font-medium tracking-tight text-white">
          NORDIC
        </span>
      </motion.div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-12">
        {['Expeditions', 'The Journal', 'Philosophy', 'Search'].map((item, i) => (
          <motion.a
            key={item}
            href="#"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i, duration: 0.8 }}
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
          >
            {item === 'Search' ? <Search className="w-4 h-4" /> : item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </motion.a>
        ))}
      </div>

      {/* Mobile / CTA */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4"
      >
        <button className="hidden md:block px-6 py-2 rounded-full border border-white/20 text-sm text-white hover:bg-white hover:text-zinc-950 transition-all duration-300">
          Book Experience
        </button>
        <button className="md:hidden text-white">
          <Menu className="w-6 h-6" />
        </button>
      </motion.div>
    </motion.nav>
  );
};