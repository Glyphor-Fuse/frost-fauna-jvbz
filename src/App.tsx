import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import { GlyphorBadge } from './components/GlyphorBadge';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen w-full overflow-x-hidden bg-zinc-950">
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <GlyphorBadge />
      </div>
    </Router>
  );
}

export default App;