import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="bg-dark text-background rounded-t-[4rem] px-8 pt-20 pb-10 mt-[-4rem] relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-16">
        <div className="max-w-xs flex items-center justify-start">
          <img src="/Logomarca.png" alt="Villa das Flores" className="w-56 md:w-64 h-auto object-contain" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-mono text-sm uppercase tracking-widest text-background/60">
          <div className="flex flex-col gap-4">
            <h5 className="text-background font-bold mb-2 tracking-tighter">Nossos serviços</h5>
            <a href="#buques" className="hover:text-accent transition-colors">Buquês</a>
            <a href="#sobre" className="hover:text-accent transition-colors">Filosofia</a>
            <a href="#cestas" className="hover:text-accent transition-colors">Cestas</a>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-background font-bold mb-2 tracking-tighter">Horário</h5>
            <span className="opacity-80">Seg - Sex: 08h às 18h</span>
            <span className="opacity-80">Sábado: 08h às 14h</span>
            <span className="opacity-80">Dom e Feriados: 08h às 12h</span>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="text-background font-bold mb-2 tracking-tighter">Contato</h5>
            <a href="https://wa.me/556233002097" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors tracking-widest flex items-center gap-2 w-fit">
              <MessageCircle size={16} />
              <span>(62) 3300-2097</span>
            </a>
            <a href="https://instagram.com/floriculturavilladasflores" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors lowercase tracking-widest flex items-center gap-2 w-fit">
              <Instagram size={16} />
              <span>@floriculturavilladasflores</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-background/10 flex flex-col items-center justify-center gap-4">
        <div className="text-sm font-sans opacity-50 text-center">
          © {new Date().getFullYear()} Villa das Flores. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};
