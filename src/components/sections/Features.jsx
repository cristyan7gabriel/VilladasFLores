import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const bouquets = [
  {
    id: 1,
    name: "Arranjo Campestre",
    description: "Mix vibrante de flores silvestres que traz a alegria e frescor da natureza para qualquer ambiente.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.46.59(2).jpeg"
  },
  {
    id: 2,
    name: "Elegância Floral",
    description: "Composição sofisticada em tons suaves com flores raras e textura única, ideal para presentear.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.46.59.jpeg"
  },
  {
    id: 3,
    name: "Luz da Manhã",
    description: "Arranjo suave que desperta sentimentos de tranquilidade, renovação e paz interior.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.00(2).jpeg"
  },
  {
    id: 4,
    name: "Paixão Intensa",
    description: "Flores em tons envolventes e quentes, ideais para marcar datas inesquecíveis.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.00(3).jpeg"
  },
  {
    id: 5,
    name: "Jardim Secreto",
    description: "Folhagens texturizadas contrastando lindamente com flores exóticas e misteriosas.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.00(4).jpeg"
  },
  {
    id: 6,
    name: "Doçura em Pétalas",
    description: "Um abraço em forma de buquê, combinando uma paleta delicada e cheia de afeto.",
    image: "/buques_fotos/WhatsApp Image 2026-03-23 at 20.47.00.jpeg"
  },
  {
    id: 7,
    name: "Sinfonia de Cores",
    description: "Uma explosão vibrante de tons que ilumina qualquer dia.",
    image: "/buques_fotos/IMG_0228.jpg"
  },
  {
    id: 8,
    name: "Encanto do Campo",
    description: "A simplicidade rústica combinada com a elegância natural.",
    image: "/buques_fotos/IMG_0251.jpg"
  },
  {
    id: 9,
    name: "Pureza Branca",
    description: "Rosas brancas e lírios em uma composição de paz e sofisticação.",
    image: "/buques_fotos/IMG_0268.jpg"
  },
  {
    id: 10,
    name: "Tesouro Escondido",
    description: "Espécies raras e folhagens esculturais em um design único.",
    image: "/buques_fotos/IMG_0457.jpg"
  },
  {
    id: 11,
    name: "Abraço de Primavera",
    description: "O renascimento em flores, com perfumes suaves e cores pastel.",
    image: "/buques_fotos/IMG_0476.jpg"
  },
  {
    id: 12,
    name: "Coração da Villa",
    description: "Nossa seleção mais querida, feita com as flores do dia.",
    image: "/buques_fotos/IMG_0504.jpg"
  },
  {
    id: 13,
    name: "Lembrança Eterna",
    description: "Um arranjo clássico que permanece na memória de quem recebe.",
    image: "/buques_fotos/IMG_0627.jpg"
  },
  {
    id: 14,
    name: "Sopro de Vida",
    description: "Movimento e textura em uma peça que celebra a vitalidade.",
    image: "/buques_fotos/IMG_0666.jpg"
  },
  {
    id: 15,
    name: "Delicadeza Infinita",
    description: "Mini rosas e gipsófilas em um gesto de carinho puro.",
    image: "/buques_fotos/IMG_0682.jpg"
  },
  {
    id: 16,
    name: "Harmonia Bucólica",
    description: "O equilíbrio perfeito entre o selvagem e o cultivado.",
    image: "/buques_fotos/IMG_0726.jpg"
  },
  {
    id: 17,
    name: "Ouro Botânico",
    description: "Brilho e vivacidade em uma curadoria solar excepcional.",
    image: "/buques_fotos/IMG_0739.jpg"
  },
  {
    id: 18,
    name: "Caminho das Flores",
    description: "Uma trilha de aromas e cores que guiam a emoção.",
    image: "/buques_fotos/IMG_0814.jpg"
  },
  {
    id: 19,
    name: "Essência Silvestre",
    description: "O lado indomável da natureza em um arranjo contemporâneo.",
    image: "/buques_fotos/IMG_9326.jpg"
  },
  {
    id: 20,
    name: "Valsa das Pétalas",
    description: "Ritmo e elegância em cada dobra das flores selecionadas.",
    image: "/buques_fotos/IMG_9725.jpg"
  },
  {
    id: 21,
    name: "Mimo da Villa",
    description: "Compacto e charmoso, perfeito para demonstrar afeto.",
    image: "/buques_fotos/IMG_9859.jpg"
  },
  {
    id: 22,
    name: "Celebrar a Vida",
    description: "Um brinde visual com as cores mais festivas da estação.",
    image: "/buques_fotos/IMG_9864.jpg"
  }
];

export const Features = () => {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [expandedId, setExpandedId] = useState(null);
  
  const toggleExpand = (id, event) => {
    const isExpanding = expandedId !== id;
    setExpandedId(isExpanding ? id : null);
    
    if (isExpanding && event) {
      setTimeout(() => {
        event.currentTarget.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }, 300); // Increased delay for layout shift to complete
    }
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".carousel-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
      
      // Cards Entrance
      gsap.from(".bouquet-card", {
        scrollTrigger: {
          trigger: scrollContainerRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        x: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        clearProps: "all" // Ensures styles are cleared after animation
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

        <div className="relative w-full -mx-4 px-4 overflow-visible">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden min-h-[450px] scroll-px-6 md:scroll-px-20" 
          >
            {bouquets.map((item) => {
              const isExpanded = expandedId === item.id;
              return (
                <div 
                  key={item.id} 
                  onClick={(e) => toggleExpand(item.id, e)}
                  className={`bouquet-card flex flex-col gap-6 transition-all duration-500 cursor-pointer ${isExpanded ? 'snap-center min-w-[100%] lg:min-w-[70%]' : 'snap-start min-w-[100%] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)]'}`}
                >
                  <div className={`bg-primary/5 rounded-[2.5rem] p-4 border transition-all duration-500 flex flex-col h-full ${isExpanded ? 'border-accent shadow-2xl md:flex-row gap-8 md:p-8' : 'border-primary/10 group hover:border-primary/30'}`}>
                    {/* Image container */}
                    <div className={`relative rounded-[2rem] overflow-hidden transition-all duration-500 bg-primary/10 flex-shrink-0 ${isExpanded ? 'w-full md:w-1/2 h-96 md:h-[35rem]' : 'w-full h-80'}`}>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className={`w-full h-full transition-all duration-700 ${isExpanded ? 'object-contain' : 'object-cover group-hover:scale-105'}`}
                        loading="lazy"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className={`flex flex-col flex-grow text-left ${isExpanded ? 'justify-center py-4 md:py-8' : 'px-4'}`}>
                      <h3 className={`font-sans font-bold text-primary tracking-tight transition-all duration-300 ${isExpanded ? 'text-4xl md:text-5xl lg:text-6xl mb-6' : 'text-2xl mb-4'}`}>
                        {item.name}
                      </h3>
                      
                      <p className={`text-dark/70 font-sans leading-relaxed transition-all duration-300 ${isExpanded ? 'text-xl md:text-2xl mb-10 max-w-xl' : 'line-clamp-3 mb-6'}`}>
                        {item.description}
                      </p>
                      
                      {isExpanded ? (
                        <div className="animate-fade-in mt-auto">
                          <a 
                            href={`https://wa.me/556233002097?text=${whatsappMessage(item.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center justify-center gap-3 bg-accent text-background px-10 py-5 rounded-full font-sans font-bold text-lg transition-transform hover:-translate-y-1 hover:shadow-2xl w-full sm:w-fit"
                          >
                            <MessageCircle size={24} />
                            Encomendar via WhatsApp
                          </a>
                        </div>
                      ) : (
                        <div className="mt-4 text-[10px] font-mono text-primary/30 uppercase tracking-[0.2em]">
                          Clique para expandir
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Added spacer to allow centering the last item */}
            <div className="min-w-[10vw] hidden lg:block" aria-hidden="true" />
          </div>
        </div>
        
      </div>
    </section>
  );
};
