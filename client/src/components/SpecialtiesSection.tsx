import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Activity, Microscope, Zap } from 'lucide-react';

const LungsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22.0013 17C22 21 22 21 18.0012 21C14.0012 21 13.0013 18 13.0013 15C13.0013 14.6216 12.9834 14.0822 12.9746 13.4495L14.9976 14.6186L15.0013 15C15.0013 17.7759 15.8173 19 18.0012 19C19.1415 19 19.6118 18.993 19.9637 18.9625C19.9943 18.6106 20.0012 18.1403 20.0012 17C20.0012 13.7947 19.298 10.9675 18.1657 9.09922C17.3283 7.71769 16.5533 7.2575 16.1337 7.39737C15.8411 7.49489 15.5286 8.04672 15.3027 9.02034L13.5124 7.98683C13.882 6.79047 14.4945 5.83557 15.5013 5.5C18.5007 4.50018 22.0036 9.5 22.0013 17ZM8.5 5.5C9.50665 5.83555 10.1192 6.79037 10.4888 7.98665L8.69853 9.02034C8.47269 8.04672 8.16013 7.49489 7.86754 7.39737C7.44794 7.2575 6.67292 7.71769 5.83557 9.09922C4.70322 10.9675 4 13.7947 4 17C4 18.1403 4.00698 18.6106 4.0375 18.9625C4.3894 18.993 4.85973 19 6 19C8.18395 19 9 17.7759 9 15L9.00367 14.6176L11.0266 13.4502C11.0179 14.0826 11 14.6218 11 15C11 18 10 21 6 21C2 21 2 21 2 17C2 9.5 5.50055 4.50018 8.5 5.5ZM13 2L12.9998 9.422L17.6962 12.134L16.6962 13.866L11.9998 11.155L7.30385 13.866L6.30385 12.134L10.9998 9.422L11 2H13Z"/>
  </svg>
);

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
      icon: LungsIcon,
      title: 'Oncologia Torácica',
      description: 'Tratamento especializado para câncer de pulmão e demais tumores torácicos.',
      gradient: 'from-blue-500/20 via-cyan-500/20 to-sky-500/20',
      iconBg: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Heart,
      title: 'Oncologia Ginecológica',
      description: 'Diagnóstico e tratamento personalizado de tumores ginecológicos.',
      gradient: 'from-rose-500/20 via-pink-500/20 to-purple-500/20',
      iconBg: 'from-rose-500/10 to-pink-500/10',
    },
    {
      icon: Activity,
      title: 'Oncologia Gastrointestinal',
      description: 'Abordagem integrada para cânceres de estômago, intestino e fígado.',
      gradient: 'from-emerald-500/20 via-green-500/20 to-teal-500/20',
      iconBg: 'from-emerald-500/10 to-green-500/10',
    },
    {
      icon: Microscope,
      title: 'Pesquisa Clínica',
      description: 'Coordenação e condução de estudos clínicos voltados à inovação em oncologia.',
      gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
      iconBg: 'from-violet-500/10 to-purple-500/10',
    },
  ];

  return (
    <section ref={sectionRef} id="especialidades" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-primary/5 to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 mb-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Expertise Multidisciplinar</span>
          </div>
          
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 ${isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Especialidades
          </h2>
          
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            Atendimento oncológico completo, conduzindo cada paciente com empatia, segurança e acesso às melhores opções de tratamento
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`group relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
              data-testid={`specialty-card-${index}`}
            >
              <div className={`absolute -inset-1 bg-gradient-to-br ${specialty.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`} />
              
              <Card className="relative h-full p-8 backdrop-blur-sm bg-card/90 border-2 border-primary/10 rounded-3xl hover-elevate transition-all duration-500 hover:scale-[1.02] overflow-hidden group">
                <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${specialty.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -translate-y-24 translate-x-24`} />
                
                <div className="relative">
                  <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${specialty.iconBg} items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                    <specialty.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {specialty.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {specialty.description}
                  </p>

                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-primary/5 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up animation-delay-700' : 'opacity-0'}`}>
          <Card className="inline-block p-8 backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10 rounded-3xl">
            <p className="text-lg md:text-xl text-foreground max-w-4xl">
              <span className="font-semibold text-primary">Tratamento individualizado</span> baseado nas mais recentes evidências científicas, sempre respeitando a singularidade de cada paciente.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
