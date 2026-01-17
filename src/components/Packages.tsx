import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const PackageCard = ({ 
  name, 
  price, 
  features, 
  isPopular = false,
  index 
}: { 
  name: string; 
  price: string; 
  features: string[]; 
  isPopular?: boolean;
  index: number;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className={`relative p-8 rounded-2xl border ${isPopular ? 'border-cyan-500/50 bg-zinc-900' : 'border-zinc-800 bg-zinc-950'} flex flex-col`}
  >
    {isPopular && (
      <span className="absolute -top-4 left-8 bg-cyan-500 text-zinc-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">
        Most Coveted
      </span>
    )}
    
    <div className="mb-8">
      <h3 className="font-serif text-2xl text-white mb-2">{name}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-zinc-400 text-sm">from</span>
        <span className="text-4xl font-light text-white">{price}</span>
      </div>
    </div>

    <ul className="space-y-4 mb-12 flex-1">
      {features.map((feat, i) => (
        <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
          <Check className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
          {feat}
        </li>
      ))}
    </ul>

    <button className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${isPopular ? 'bg-white text-zinc-950 hover:bg-cyan-50' : 'bg-zinc-900 text-white hover:bg-zinc-800 border border-zinc-800'}`}>
      Reserve Spot <ArrowRight className="w-4 h-4" />
    </button>
  </motion.div>
);

export const Packages = () => {
  return (
    <section className="py-32 px-6 bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Begin Your Expedition</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Choose the depth of your immersion. All packages include expert guides, sustainable gear, and carbon-offset travel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PackageCard 
            index={0}
            name="The Weekender"
            price="$1,200"
            features={[
              "3 Days / 2 Nights",
              "Reykjavík City Tour",
              "Golden Circle Express",
              "Blue Lagoon Entry",
              "Boutique Hotel Stay"
            ]}
          />
          <PackageCard 
            index={1}
            name="Glacial Explorer"
            price="$2,800"
            isPopular
            features={[
              "7 Days / 6 Nights",
              "South Coast Discovery",
              "Ice Cave Exploration",
              "Glacier Hiking Gear Included",
              "Northern Lights Hunt",
              "Premium Lodge Accommodation"
            ]}
          />
          <PackageCard 
            index={2}
            name="Full Circumnavigation"
            price="$4,500"
            features={[
              "12 Days / 11 Nights",
              "Complete Ring Road Tour",
              "Whale Watching in Húsavík",
              "Highlands Super Jeep Tour",
              "Private Geothermal Baths",
              "Luxury Eco-Cabins"
            ]}
          />
        </div>
      </div>
    </section>
  );
};