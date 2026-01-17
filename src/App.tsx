import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-zinc-950">
      <Index />
      <GlyphorBadge />
    </div>
  );
}

export default App;