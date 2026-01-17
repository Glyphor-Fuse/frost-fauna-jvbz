import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const images = [
  "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/28842593/pexels-photo-28842593.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A stunning aerial shot of ocean waves crashing on Vik's black sand beach in Iceland."
    width="4000"
    height="3000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/aerial-view-of-waves-on-black-sand-beach-in-iceland-28842593/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Hub JACQU on Pexels
    </a>
  </div>
</div>",
  "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/34598716/pexels-photo-34598716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" 
    alt="Close-up of a beautiful Icelandic horse in a serene, rugged landscape."
    width="4160"
    height="6240"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/majestic-icelandic-horse-in-rugged-landscape-34598716/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Andreas Ebner on Pexels
    </a>
  </div>
</div>",
  "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/32356020/pexels-photo-32356020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Dramatic view of Skogafoss waterfall with person in red coat in Iceland."
    width="6000"
    height="4000"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/majestic-skogafoss-waterfall-in-iceland-32356020/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Patrick Bate on Pexels
    </a>
  </div>
</div>",
  "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/31906851/pexels-photo-31906851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Cozy wooden cabin set against the dramatic Icelandic mountains and glaciers."
    width="6000"
    height="3376"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/scenic-wooden-cabin-in-icelandic-landscape-31906851/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by X1ntao ZHOU (kuzma) on Pexels
    </a>
  </div>
</div>",
  "<div className="relative">
  <img 
    src="https://images.pexels.com/photos/33930977/pexels-photo-33930977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Black sand beach with scattered icebergs along Iceland's dramatic coast."
    width="7952"
    height="5304"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/scenic-icelandic-coast-with-ice-on-black-sand-33930977/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Susanne Jutzeler, suju-foto on Pexels
    </a>
  </div>
</div>"
];

export const Gallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={containerRef} className="py-32 bg-zinc-900 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-16 relative z-10">
         <h2 className="font-serif text-4xl md:text-5xl text-white text-center">
            Visual Manifesto
         </h2>
      </div>

      <motion.div 
        style={{ x }}
        className="flex gap-8 px-6 w-max"
      >
        {images.map((src, i) => (
          <div 
            key={i} 
            className="relative w-[300px] md:w-[500px] aspect-[4/5] md:aspect-[16/9] flex-shrink-0 overflow-hidden rounded-lg grayscale hover:grayscale-0 transition-all duration-700 ease-in-out hover:scale-[1.02]"
          >
            <img 
              src={src} 
              alt={`Gallery image ${i}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </motion.div>

      <div className="absolute bottom-0 left-0 w-32 h-full bg-gradient-to-r from-zinc-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-full bg-gradient-to-l from-zinc-900 to-transparent z-10 pointer-events-none" />
    </section>
  );
};