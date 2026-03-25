import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const baskets = [
  {
    num: "01",
    title: "Cesta Amanhecer",
    desc: "Perfeita para começar o dia. Uma combinação suave de itens de café da manhã, frutas frescas e selecionadas que aquecem qualquer manhã.",
    image: "/Cestas_fotos/WhatsApp Image 2026-03-23 at 20.36.05(2).jpeg"
  },
  {
    num: "02",
    title: "Cesta Celebração",
    desc: "A escolha ideal para brindar conquistas e datas especiais. Uma seleção sofisticada de itens gourmet pensada para momentos inesquecíveis.",
    image: "/Cestas_fotos/WhatsApp Image 2026-03-23 at 20.36.05(1).jpeg"
  },
  {
    num: "03",
    title: "Cesta Momentos",
    desc: "Elegante e acolhedora, esta cesta reúne surpresas e sabores únicos. Uma verdadeira experiência sensorial com a curadoria exclusiva da Villa.",
    image: "/Cestas_fotos/WhatsApp Image 2026-03-23 at 20.36.05.jpeg"
  },
  {
    num: "04",
    title: "Cesta Brisa Suave",
    desc: "Uma seleção leve e fresca para tardes de descontração e carinho.",
    image: "/Cestas_fotos/1eff99a6-fe63-4301-b651-b18b4caeaaf4.jpg"
  },
  {
    num: "05",
    title: "Cesta Gran Celebração",
    desc: "A versão premium da nossa cesta de brindes, com itens de puro luxo.",
    image: "/Cestas_fotos/4ea283c6-e525-4b53-adf1-a87b473e6908.jpg"
  },
  {
    num: "06",
    title: "Cesta Mimo Especial",
    desc: "Pequenos gestos, grandes significados em uma montagem muito delicada.",
    image: "/Cestas_fotos/IMG_3544.jpg"
  },
  {
    num: "07",
    title: "Cesta Amor & Aroma",
    desc: "Fragrâncias naturais e itens de autocuidado envoltos em uma apresentação impecável e cheia de afeto.",
    image: "/Cestas_fotos/IMG_4916.jpg"
  },
  {
    num: "08",
    title: "Cesta Brinde à Vida",
    desc: "Perfeita para aniversários e conquistas que merecem ser celebradas.",
    image: "/Cestas_fotos/IMG_5563.jpg"
  },
  {
    num: "09",
    title: "Cesta Luxo Botânico",
    desc: "O auge da sofisticação em cestaria personalizada com curadoria de itens premium.",
    image: "/Cestas_fotos/IMG_8105.jpg"
  },
  {
    num: "10",
    title: "Cesta Villa Classic",
    desc: "O design que nos tornou referência, agora em uma versão ainda mais clássica.",
    image: "/Cestas_fotos/IMG_9836.jpg"
  },
  {
    num: "11",
    title: "Cesta Afeto Sincero",
    desc: "Um abraço em forma de cesta, montada com itens que expressam carinho e atenção em cada detalhe.",
    image: "/Cestas_fotos/ab1e3482-956e-4ce6-9cca-0f5012818534.jpg"
  }
];

export const Protocolo = () => {
  const sectionRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Only pin the first 3 cards that are displayed on the scroll
      const cards = gsap.utils.toArray('.protocol-card').slice(0, 3);

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: sectionRef.current,
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

  const whatsappLink = (title) => {
    return `https://wa.me/556233002097?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre a ' + title + ' da Villa das Flores.')}`;
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

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

      {/* Main Highlights (First 3 Only) */}
      {baskets.slice(0, 3).map((step, idx) => (
        <div key={idx} className="protocol-card sticky top-0 h-screen w-full flex items-center justify-center p-6 bg-background pt-32 md:pt-6">
          <div className="w-full max-w-6xl h-[80vh] md:h-[75vh] rounded-[3rem] border border-primary/20 bg-background shadow-2xl overflow-hidden flex flex-col md:flex-row">

            {/* Graphic Area */}
            <div className="w-full md:w-1/2 bg-dark/5 relative h-64 md:h-full flex-shrink-0 overflow-hidden">
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
              />
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
                href={whatsappLink(step.title)}
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

      {/* Ver Mais Button Area */}
      <div className="flex justify-center mt-20 relative z-10">
        <button
          onClick={() => {
            setIsModalOpen(true);
            setExpandedId(null);
          }}
          className="group relative overflow-hidden bg-primary text-background px-12 py-5 rounded-full font-sans font-bold text-lg transition-all hover:scale-105 hover:shadow-2xl"
        >
          <span className="relative z-10">Ver Todas as Opções</span>
          <div className="absolute inset-0 bg-accent translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
        </button>
      </div>

      {/* Modal - Full Collection */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div
            className="absolute inset-0 bg-dark/90 backdrop-blur-xl transition-opacity"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="relative w-full max-w-7xl h-full bg-background rounded-[3rem] overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 animate-fade-in-up">

            {/* Modal Header */}
            <div className="p-8 md:p-12 flex items-center justify-between border-b border-primary/10 flex-shrink-0">
              <div>
                <h2 className="font-sans font-bold text-3xl md:text-4xl text-primary tracking-tighter">Nossa Coleção Completa</h2>
                <p className="font-serif italic text-lg text-dark/60 mt-2">Escolha a experiência perfeita para presentear.</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center hover:bg-primary hover:text-background transition-all hover:rotate-90"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content - Grid */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 items-start">
                {baskets.map((item, idx) => {
                  const isExpanded = expandedId === item.num;
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleExpand(item.num)}
                      className={`group flex flex-col h-full bg-primary/5 rounded-[2.5rem] overflow-hidden border border-primary/10 transition-all duration-500 cursor-pointer hover:shadow-xl ${isExpanded ? 'lg:col-span-2 ring-2 ring-accent shadow-2xl' : 'hover:-translate-y-2'}`}
                    >
                      <div className={`relative overflow-hidden transition-all duration-500 bg-primary/5 ${isExpanded ? 'h-[28rem] md:h-[32rem]' : 'h-64'}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className={`w-full h-full transition-all duration-700 ${isExpanded ? 'object-contain' : 'object-cover group-hover:scale-105'}`}
                        />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <span className="font-mono text-xs text-primary/40 mb-3 tracking-widest">#{item.num}</span>
                        <h4 className="font-sans font-bold text-2xl text-primary mb-4 tracking-tight">{item.title}</h4>
                        <p className={`text-base text-dark/70 font-sans leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-3'}`}>
                          {item.desc}
                        </p>

                        <div className={`mt-8 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                          <a
                            href={whatsappLink(item.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="w-full flex items-center justify-center gap-2 bg-accent text-background font-bold py-4 rounded-full uppercase tracking-wider text-sm hover:bg-primary hover:-translate-y-1 transition-all shadow-lg"
                          >
                            <MessageCircle size={18} />
                            Pedir Agora
                          </a>
                        </div>

                        {/* Expand/Collapse Hint */}
                        {!isExpanded && (
                          <div className="mt-4 text-[10px] font-mono text-primary/30 uppercase tracking-[0.2em]">
                            Clique para expandir
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
