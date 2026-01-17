import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Wind, Thermometer } from 'lucide-react';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/17947573/pexels-photo-17947573.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="A stunning view of a basalt cave with rugged textures in Iceland. Perfect for adventure enthusiasts."
    width="5772"
    height="3838"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/a-person-standing-in-front-of-a-cave-17947573/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Gabriele Niek on Pexels
    </a>
  </div>
</div>" 
          alt="Icelandic Glacier" 
          className="w-full h-[120%] object-cover object-center brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/30 via-transparent to-zinc-950" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-cyan-300 text-sm tracking-[0.2em] uppercase font-medium mb-4 ml-1"
          >
            Reykjavík, Iceland • 64.1466° N
          </motion.h2>
          
          <div className="overflow-hidden">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="font-serif text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight"
            >
              The Edge <br />
              <span className="italic text-white/80 font-light ml-12">of the</span> World
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 max-w-lg text-zinc-300 text-lg font-light leading-relaxed border-l border-white/20 pl-6"
          >
            We curate journeys to the untamed corners of the North. 
            Where fire meets ice, and silence speaks louder than words.
          </motion.p>
        </div>
      </div>

      {/* Floating Widget */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-12 right-6 md:right-12 z-20 hidden md:block"
      >
        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-6 rounded-2xl w-64">
          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
            <span className="text-xs uppercase tracking-widest text-zinc-400">Conditions</span>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col gap-1">
              <Thermometer className="w-4 h-4 text-cyan-300" />
              <span className="text-2xl font-serif text-white">-4°C</span>
              <span className="text-xs text-zinc-500">Vík í Mýrdal</span>
            </div>
            <div className="flex flex-col gap-1">
              <Wind className="w-4 h-4 text-cyan-300" />
              <span className="text-2xl font-serif text-white">12<span className="text-sm">km/h</span></span>
              <span className="text-xs text-zinc-500">NW Wind</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Explore</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
};