import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick,
  href
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const btn = buttonRef.current;
      
      btn.addEventListener('mouseenter', () => {
        gsap.to(btn, {
          scale: 1.03,
          duration: 0.4,
          ease: "customEase", // defined as cubic-bezier(0.25, 0.46, 0.45, 0.94) in css
        });
        gsap.to(btn, { y: -1, duration: 0.3 });
      });
      
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { scale: 1, y: 0, duration: 0.4, ease: "power2.out" });
      });
    }, buttonRef);
    
    return () => ctx.revert();
  }, []);

  const baseClasses = "relative overflow-hidden inline-flex items-center justify-center font-sans font-bold tracking-tight rounded-[2rem] px-8 py-4 transition-colors duration-300 z-10 group";
  
  const variants = {
    primary: "bg-accent text-background",
    outline: "border-2 border-primary text-primary hover:text-background",
    ghost: "text-primary hover:bg-primary/5"
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={buttonRef}
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' }}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      
      {/* Hover Sliding Background */}
      <span 
        className={`absolute inset-0 z-0 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
          ${variant === 'primary' ? 'bg-primary' : variant === 'outline' ? 'bg-primary' : 'bg-primary/10'}`} 
      />
    </Component>
  );
};
