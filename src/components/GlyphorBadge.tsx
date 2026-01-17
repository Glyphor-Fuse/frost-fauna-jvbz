import { motion } from 'framer-motion';

export const GlyphorBadge = () => {
  return (
    <motion.a
      href="https://glyphor.com"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 hover:bg-black/80 hover:border-white/20 transition-all group"
    >
      <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] transition-shadow" />
      <span className="text-[10px] font-medium text-zinc-400 group-hover:text-white tracking-wide uppercase">
        Made with Glyphor
      </span>
    </motion.a>
  );
};