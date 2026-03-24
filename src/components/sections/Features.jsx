import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/Button';

gsap.registerPlugin(ScrollTrigger);

const bouquets = [
  {
    id: 1,
    name: "Buquê Romântico",
    description: "Um clássico atemporal com flores selecionadas e folhagens delicadas, perfeito para surpreender.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.46.59(1).jpeg"
  },
  {
    id: 2,
    name: "Arranjo Campestre",
    description: "Mix vibrante de flores silvestres que traz a alegria e frescor da natureza para qualquer ambiente.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.46.59(2).jpeg"
  },
  {
    id: 3,
    name: "Elegância Floral",
    description: "Composição sofisticada em tons suaves com flores raras e textura única, ideal para presentear.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.46.59.jpeg"
  },
  {
    id: 4,
    name: "Mix Primavera",
    description: "Alegre e colorido, este buquê mistura as melhores flores da estação com muito charme.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.00(1).jpeg"
  },
  {
    id: 5,
    name: "Luz da Manhã",
    description: "Arranjo suave que desperta sentimentos de tranquilidade, renovação e paz interior.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.00(2).jpeg"
  },
  {
    id: 6,
    name: "Paixão Intensa",
    description: "Flores em tons envolventes e quentes, ideais para marcar datas inesquecíveis.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.00(3).jpeg"
  },
  {
    id: 7,
    name: "Jardim Secreto",
    description: "Folhagens texturizadas contrastando lindamente com flores exóticas e misteriosas.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.00(4).jpeg"
  },
  {
    id: 8,
    name: "Doçura em Pétalas",
    description: "Um abraço em forma de buquê, combinando uma paleta delicada e cheia de afeto.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.00.jpeg"
  },
  {
    id: 9,
    name: "Poesia Botânica",
    description: "Design moderno e de contornos artísticos, para quem enxerga a floricultura como arte.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.01(1).jpeg"
  },
  {
    id: 10,
    name: "Frescor Tropical",
    description: "Espécies marcantes que trazem a vitalidade e a energia das florestas para sua casa.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.01(2).jpeg"
  },
  {
    id: 11,
    name: "Aurélia Premium",
    description: "A mais fina curadoria das flores nobres da estação, em uma montagem simetricamente impecável.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.01(3).jpeg"
  },
  {
    id: 12,
    name: "Essência da Villa",
    description: "A assinatura autêntica do nosso ateliê, unindo frescor duradouro e aromas inconfundíveis.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.01.jpeg"
  }
];

export const Features = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".carousel-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      
      gsap.from(".bouquet-card", {
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top 85%",
        },
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const nextSlide = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const whatsappMessage = (itemName) => {
    return encodeURIComponent(`Olá! Gostaria de encomendar o ${itemName} da Villa das Flores.`);
  };

  return (
    <section id="buques" ref={sectionRef} className="py-32 px-6 md:px-16 bg-background text-primary overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="carousel-header mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="font-sans font-bold text-4xl mb-4 tracking-tighter">Buquês de Presente</h2>
            <p className="font-serif italic text-xl opacity-80">Arranjos exclusivos montados com precisão para emocionar.</p>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center hover:bg-primary hover:text-background transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="relative w-full -mx-4 px-4">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" 
          >
            {bouquets.map((item) => (
              <div key={item.id} className="bouquet-card snap-start min-w-[100%] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] flex flex-col gap-6 scroll-ml-4">
                <div className="bg-primary/5 rounded-[2.5rem] p-4 border border-primary/10 group cursor-pointer h-full flex flex-col">
                  {/* Image container */}
                  <div className="relative w-full h-80 rounded-[2rem] overflow-hidden mb-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="px-2 flex-grow flex flex-col">
                    <h3 className="font-sans font-bold text-2xl text-primary">{item.name}</h3>
                    <p className="text-dark/70 mt-3 font-sans line-clamp-3 mb-6 flex-grow">
                      {item.description}
                    </p>
                    
                    <a 
                      href={`https://wa.me/556233002097?text=${whatsappMessage(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto w-full group relative overflow-hidden rounded-full bg-accent px-6 py-4 flex items-center justify-center gap-2 text-background font-sans font-bold text-sm transition-transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <MessageCircle size={18} />
                        Pedir via WhatsApp
                      </span>
                      <div className="absolute inset-0 bg-primary/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
