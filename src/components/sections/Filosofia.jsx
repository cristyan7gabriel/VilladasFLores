import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Filosofia = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax effect on background
      gsap.to(".parallax-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

      // Split text reveal approximation (since we don't have Club GSAP SplitText, we manual span it or use simple stagger)
      const lines = gsap.utils.toArray('.reveal-text');
      lines.forEach(line => {
        gsap.from(line, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          }
        });
      });
      
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre" ref={containerRef} className="relative w-full py-40 overflow-hidden bg-dark text-background px-6 md:px-16 flex items-center justify-center min-h-screen">
      {/* Texture Background */}
      <div 
        className="parallax-bg absolute inset-0 z-0 bg-cover bg-center opacity-20 filter grayscale mix-blend-overlay"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80")', // moss/forest texture
          transform: 'scale(1.2)' // extra scale to prevent edge showing during parallax
        }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16">
        <div className="reveal-text">
          <p className="font-sans font-bold text-2xl md:text-3xl tracking-tight text-background/60">
            A maioria das floriculturas foca em: arranjos genéricos.
          </p>
        </div>
        
        <div className="reveal-text">
          <h2 className="font-serif italic text-5xl md:text-7xl lg:text-8xl leading-none">
            Nós focamos em: <span className="text-accent underline decoration-1 text-outline">experiência</span> e charme goiano.
          </h2>
        </div>
        
        <div className="reveal-text max-w-xl text-lg opacity-80 mt-8 font-sans">
          Cada haste, cada folha e cada composição na Villa das Flores é tratada como um instrumento vivo de design. Acreditamos na intersecção entre a natureza indomável e a precisão estética moderna.
        </div>
      </div>
    </section>
  );
};
