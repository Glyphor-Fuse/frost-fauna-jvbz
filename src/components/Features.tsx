import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const HighlightCard = ({ 
  title, 
  subtitle, 
  image, 
  className,
  delay 
}: { 
  title: string; 
  subtitle: string; 
  image: string; 
  className: string;
  delay: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
    className={`group relative overflow-hidden rounded-3xl ${className}`}
  >
    <div className="absolute inset-0 bg-zinc-900">
      <img 
        src={image} 
        alt={title} 
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <p className="text-cyan-300 text-xs font-bold tracking-widest uppercase mb-2">{subtitle}</p>
        <h3 className="font-serif text-3xl text-white mb-4">{title}</h3>
        <button className="flex items-center gap-2 text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          View Expedition <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </motion.div>
);

export const Features = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-zinc-950">
      <div className="container mx-auto">
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="text-cyan-500 text-sm tracking-widest uppercase block mb-4">Curated Highlights</span>
            <h2 className="font-serif text-4xl md:text-6xl text-white leading-tight">
              Beyond the <br />
              <span className="text-zinc-500">Ordinary Path</span>
            </h2>
          </div>
          <p className="max-w-sm text-zinc-400 leading-relaxed text-sm">
            Our expeditions are designed for those who seek the profound silence of nature. From the dancing auroras to the depths of ancient ice caves.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[800px]">
          {/* Main Large Card */}
          <HighlightCard 
            title="The Aurora Borealis"
            subtitle="Natural Phenomenon"
            image="https://images.pexels.com/photos/31661630/pexels-photo-31661630.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            className="md:col-span-2 md:row-span-2 min-h-[400px]"
            delay={0}
          />
          
          {/* Secondary Card Top */}
          <HighlightCard 
            title="Glacial Lagoons"
            subtitle="Jökulsárlón"
            image="https://images.pexels.com/photos/6168279/pexels-photo-6168279.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            className="md:col-span-1 md:row-span-1 min-h-[300px]"
            delay={0.2}
          />
          
          {/* Secondary Card Bottom */}
          <HighlightCard 
            title="Geothermal Waters"
            subtitle="The Blue Lagoon"
            image="https://images.pexels.com/photos/20955080/pexels-photo-20955080.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
            className="md:col-span-1 md:row-span-1 min-h-[300px]"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};