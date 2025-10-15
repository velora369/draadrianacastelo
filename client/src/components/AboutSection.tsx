import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Stethoscope, Activity } from 'lucide-react';

export default function AboutSection() {
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

  const specialties = [
    { icon: Stethoscope, label: 'Oncologia Torácica' },
    { icon: Heart, label: 'Oncologia Ginecológica' },
    { icon: Activity, label: 'Oncologia Gastrointestinal' },
  ];

  return (
    <section ref={sectionRef} id="sobre" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Sobre a Dra. Adriana Castelo C. de Moura
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className={`text-lg text-foreground leading-relaxed text-center mb-12 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            Médica oncologista do Hospital Sírio-Libanês e do Hospital Universitário de Brasília. 
            Doutoranda pela UnB, atua em oncologia de precisão e pesquisa clínica. Integra prática 
            clínica, pesquisa e ensino — unindo ciência e sensibilidade para oferecer o melhor 
            cuidado aos pacientes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <Card 
                key={index} 
                className={`p-6 flex flex-col items-center text-center hover-elevate rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
                data-testid={`specialty-badge-${index}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20">
                  <specialty.icon className="w-8 h-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                </div>
                <p className="font-semibold text-foreground">{specialty.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
