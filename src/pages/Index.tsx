import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { Features } from '../components/Features';
import { Gallery } from '../components/Gallery';
import { Packages } from '../components/Packages';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';

const SectionDivider = () => (
  <div className="w-full flex justify-center py-12 bg-zinc-950">
    <div className="h-24 w-px bg-gradient-to-b from-transparent via-zinc-800 to-transparent" />
  </div>
);

const Index = () => {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Editorial Text Block */}
        <section className="py-24 px-6 bg-zinc-950 flex justify-center">
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="text-2xl md:text-4xl font-serif text-center max-w-4xl text-zinc-300 leading-relaxed"
           >
             "Iceland is not a destination. It is an <span className="text-cyan-200 italic">interruption</span> of the mundane. A place where the earth breathes, shifts, and commands your absolute attention."
           </motion.p>
        </section>

        <Features />
        <Gallery />
        <SectionDivider />
        <Packages />
        
        {/* Newsletter / Final CTA */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img src="<div className="relative">
  <img 
    src="https://images.pexels.com/photos/34611635/pexels-photo-34611635.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200" 
    alt="Dramatic coastal landscape with misty mountains and black sands at Stokksnes, Iceland."
    width="7000"
    height="4666"
    className="w-full h-full object-cover"
  />
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-2">
    <a href="https://www.pexels.com/photo/misty-mountain-view-at-stokksnes-iceland-34611635/" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 hover:text-slate-300 transition-colors">
      Photo by Rino Adamo on Pexels
    </a>
  </div>
</div>" className="w-full h-full object-cover opacity-20" />
             <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent" />
          </div>
          
          <div className="relative z-10 container mx-auto text-center">
            <h2 className="font-serif text-5xl md:text-7xl text-white mb-8">Join the Expedition</h2>
            <p className="text-zinc-400 mb-12 max-w-lg mx-auto">
              Receive seasonal journals, weather reports, and exclusive offers for early booking windows.
            </p>
            
            <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button className="bg-white text-zinc-950 px-8 py-4 rounded-full font-medium hover:bg-cyan-100 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;