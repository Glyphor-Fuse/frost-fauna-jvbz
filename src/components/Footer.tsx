import { motion } from 'framer-motion';
import { Instagram, Twitter, Facebook, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-24 pb-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-8 tracking-tighter">NORDIC.</h2>
            <p className="text-zinc-500 max-w-md leading-relaxed">
              We are a collective of explorers, photographers, and conservationists dedicated to showing you the raw beauty of Iceland while preserving it for generations to come.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Expeditions</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Glacial Hikes</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Aurora Hunting</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Volcano Tours</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Photography Workshops</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Company</h4>
            <ul className="space-y-4 text-zinc-500 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Sustainability</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Journal</li>
              <li className="hover:text-cyan-400 cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-zinc-900 pt-12 gap-8">
          <div className="flex gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-zinc-600 text-xs">© 2024 NORDIC Inc.</span>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-white text-sm hover:text-cyan-400 transition-colors"
          >
            Back to Top
            <div className="p-2 border border-white/20 rounded-full group-hover:border-cyan-400 transition-colors">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};