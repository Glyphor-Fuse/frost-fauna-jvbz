import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const images = [
  "https://images.pexels.com/photos/28842593/pexels-photo-28842593.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/34598716/pexels-photo-34598716.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
  "https://images.pexels.com/photos/32356020/pexels-photo-32356020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/31906851/pexels-photo-31906851.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  "https://images.pexels.com/photos/33930977/pexels-photo-33930977.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
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