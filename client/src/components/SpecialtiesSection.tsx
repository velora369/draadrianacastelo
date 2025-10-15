import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Activity, Stethoscope, FlaskConical } from 'lucide-react';

export default function SpecialtiesSection() {
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
    {
      icon: Heart,
      title: 'Oncologia Ginecológica',
      description: 'Diagnóstico e tratamento personalizado de tumores ginecológicos.',
    },
    {
      icon: Activity,
      title: 'Oncologia Gastrointestinal',
      description: 'Abordagem integrada para cânceres de estômago, intestino e fígado.',
    },
    {
      icon: Stethoscope,
      title: 'Oncologia Torácica',
      description: 'Tratamento especializado para câncer de pulmão e demais tumores torácicos.',
    },
    {
      icon: FlaskConical,
      title: 'Pesquisa Clínica',
      description: 'Coordenação e condução de estudos clínicos voltados à inovação em oncologia.',
    },
  ];

  return (
    <section ref={sectionRef} id="especialidades" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className={`font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-4 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Áreas de Atuação
        </h2>
        
        <p className={`text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12 ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
          A Dra. Adriana oferece atendimento oncológico completo, conduzindo cada paciente com 
          empatia, segurança e acesso às melhores opções de tratamento.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-elevate rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
              data-testid={`specialty-card-${index}`}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:rotate-6">
                <specialty.icon className="w-7 h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {specialty.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
