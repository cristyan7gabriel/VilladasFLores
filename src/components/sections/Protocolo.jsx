import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const baskets = [
  {
    num: "01",
    title: "Cesta Amanhecer",
    desc: "Perfeita para começar o dia. Uma combinação suave de itens de café da manhã, frutas frescas e acompanhada por flores delicadas que aquecem qualquer manhã.",
    Graphic: () => (
      <div className="w-full h-full relative overflow-hidden">
        <img 
          src="/Cestas_fotos/WhatsApp Image 2026-03-23 at 20.36.05(1).jpeg" 
          alt="Cesta Amanhecer" 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
      </div>
    )
  },
  {
    num: "02",
    title: "Cesta Celebração",
    desc: "A escolha ideal para brindar conquistas e datas especiais. Uma seleção sofisticada pensada para momentos inesquecíveis, realçada pelas nossas flores.",
    Graphic: () => (
      <div className="w-full h-full relative overflow-hidden">
        <img 
          src="/Cestas_fotos/WhatsApp Image 2026-03-23 at 20.36.05(2).jpeg" 
          alt="Cesta Celebração" 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
      </div>
    )
  },
  {
    num: "03",
    title: "Cesta Momentos",
    desc: "Elegante e acolhedora, esta cesta reúne surpresas e sabores únicos. Uma verdadeira experiência sensorial harmonizada com o design floral da Villa.",
    Graphic: () => (
      <div className="w-full h-full relative overflow-hidden">
        <img 
          src="/Cestas_fotos/WhatsApp Image 2026-03-23 at 20.36.05.jpeg" 
          alt="Cesta Momentos" 
          className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
        />
      </div>
    )
  }
];

export const Protocolo = () => {
  const sectionRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, index) => {
        if (index === cards.length - 1) return; // skip last
        
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: sectionRef.current, // Use the ref instead of class name string
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
          scrub: true,
          animation: gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(20px)",
            ease: "none"
          })
        });
      });
      
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cestas" ref={sectionRef} className="protocol-section relative bg-background pt-32 pb-48">
      
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-16 text-center">
        <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 text-primary tracking-tighter">
          Cestas Personalizadas
        </h2>
        <p className="font-serif italic text-xl md:text-2xl text-dark/70 max-w-2xl mx-auto">
          Sabores e detalhes que emocionam. Montamos cada cesta com a mesma dedicação com que cultivamos nossas flores.
        </p>
      </div>

      {baskets.map((step, idx) => (
        <div key={idx} className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-6 bg-background pt-32 md:pt-6">
          <div className="w-full max-w-6xl h-[80vh] md:h-[75vh] rounded-[3rem] border border-primary/20 bg-background shadow-2xl overflow-hidden flex flex-col md:flex-row">
            
            {/* Graphic Area */}
            <div className="w-full md:w-1/2 bg-dark/5 relative h-64 md:h-full flex-shrink-0">
              <step.Graphic />
            </div>
            
            {/* Content Area */}
            <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
              <div className="text-xl font-mono text-primary/50 mb-6">/ OPÇÃO {step.num}</div>
              <h3 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl mb-6 text-primary tracking-tighter">
                {step.title}
              </h3>
              <p className="text-lg md:text-xl font-sans text-dark/80 max-w-md leading-relaxed">
                {step.desc}
              </p>
              
              <a 
                href={`https://wa.me/556233002097?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a ' + step.title + ' da Villa das Flores.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2 bg-accent text-background px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm transition-transform hover:-translate-y-1 hover:shadow-lg w-fit"
              >
                Pedir via WhatsApp
              </a>
            </div>
            
          </div>
        </div>
      ))}
    </section>
  );
};
