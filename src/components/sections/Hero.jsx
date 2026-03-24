import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Button } from '../ui/Button';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.hero-anim');
      
      gsap.fromTo(elements, 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.2
        }
      );

      gsap.to(".scroll-arrow", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-[100dvh] flex items-center justify-start px-6 md:px-16 overflow-hidden bg-primary">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center md:bg-right"
        style={{
          backgroundImage: 'url("/background.jpg")',
        }}
      />
      
      {/* Heavy gradient overlay (Primary -> Transparent to the right) */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent opacity-100" />
      
      {/* Subtle bottom transition fade to next section (Background color) */}
      <div className="absolute bottom-0 left-0 w-full h-20 z-0 bg-gradient-to-t from-background to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start gap-8" ref={textRef}>
        <div className="max-w-2xl xl:max-w-3xl text-background">
          <h1 className="hero-anim font-sans font-medium tracking-[0.2em] md:tracking-[0.3em] text-xl md:text-2xl mb-4 uppercase opacity-90">
            Villa das Flores é a
          </h1>
          <h2 className="hero-anim font-serif italic text-7xl md:text-9xl lg:text-[12rem] leading-none tracking-tight">
            Natureza.
          </h2>
          <p className="hero-anim mt-8 max-w-xl text-lg md:text-xl font-sans text-background/80 text-balance">
            Nova floricultura bem localizada e charmosa de Goiânia. Arranjos botânicos criados com precisão e alma.
          </p>
        </div>
        
        <div className="hero-anim flex flex-col sm:flex-row items-center gap-4 mt-4">
          <Button variant="primary" href="#buques" className="text-lg px-10 py-5">
            Ver Nossos Produtos
          </Button>
          <a href="#features" className="scroll-arrow p-4 rounded-full border border-background/20 text-background hover:bg-background hover:text-primary transition-all duration-300">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};
