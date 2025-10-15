import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function HumanizedSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/5" />
      <div className="absolute top-20 right-20 opacity-5 transition-opacity duration-700">
        <Sparkles className="w-64 h-64 text-primary" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 text-center">
        <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Cuidar do corpo, da mente e do espírito
        </h2>
        
        <p className={`text-lg text-foreground leading-relaxed ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          A fé é um pilar importante na jornada de muitos pacientes. No consultório da Dra. Adriana, 
          o cuidado vai além da medicina — é também um espaço de acolhimento espiritual, onde cada 
          pessoa é ouvida e tratada com amor e respeito.
        </p>
      </div>
    </section>
  );
}
