import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Filosofia } from './components/sections/Filosofia';
import { Protocolo } from './components/sections/Protocolo';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="relative w-full bg-background min-h-screen font-sans selection:bg-accent selection:text-background">
      <Navbar />
      <Hero />
      <Features />
      <Filosofia />
      <Protocolo />
      <CTA />
      <Footer />
      
      <a 
        href="https://wa.me/556233002097" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#1EBE5A] hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}

export default App;
