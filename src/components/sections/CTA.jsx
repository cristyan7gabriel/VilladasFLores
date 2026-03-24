import React from 'react';
import { Button } from '../ui/Button';

export const CTA = () => {
  return (
    <section id="contato" className="py-32 px-6 bg-primary text-background flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80")' }} />
      <div className="relative z-10 max-w-3xl border border-background/20 bg-dark/20 backdrop-blur-xl p-16 rounded-[3rem]">
        <h2 className="font-sans font-bold text-4xl md:text-6xl mb-6 tracking-tighter">
          Comece Agora sua Experiência Botânica
        </h2>
        <p className="text-lg font-serif italic mb-10 opacity-90 max-w-xl mx-auto">
          Entre em contato conosco pelo WhatsApp para organizar o seu pedido, conhecer nosso catálogo e entender as opções para presentes inesquecíveis.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center mt-8">
          <Button variant="primary" href="https://wa.me/556233002097" className="px-12 py-5 text-lg">
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};
