import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

export default function EventsSection() {
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

  const events = [
    {
      image: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/img1-1.webp',
      title: 'ASCO Annual Meeting',
      location: 'Estados Unidos',
      description: 'O maior congresso mundial de oncologia clínica, reunindo os principais especialistas para discutir os avanços mais recentes no tratamento do câncer e apresentar estudos inovadores que moldam o futuro da oncologia.',
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      image: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/img-2.webp',
      title: 'IASLC World Conference on Lung Cancer',
      location: 'Espanha, 2025',
      description: 'Principal conferência mundial dedicada ao câncer de pulmão, promovida pela Associação Internacional para o Estudo do Câncer de Pulmão, apresentando pesquisas de ponta e novas abordagens terapêuticas.',
      gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      image: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/img3-.webp',
      title: 'ELCC - European Lung Cancer Congress',
      location: 'Europa, 2025',
      description: 'Congresso europeu de referência em câncer de pulmão, reunindo especialistas para compartilhar as últimas descobertas em diagnóstico, tratamento e cuidados multidisciplinares de pacientes com câncer torácico.',
      gradient: 'from-emerald-500/10 to-teal-500/10',
    },
    {
      image: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/img4-1.webp',
      title: 'Annual Meeting on Women\'s Cancer',
      location: 'Seattle, WA, 2025',
      description: 'Encontro anual dedicado aos cânceres que afetam mulheres, focando em avanços no tratamento de cânceres ginecológicos e de mama, com ênfase em abordagens personalizadas e cuidados integrados.',
      gradient: 'from-rose-500/10 to-pink-500/10',
    },
    {
      image: 'https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/11/imggg5.webp',
      title: 'Simpósio Nacional GBOT 2025',
      location: 'Brasil, 2025',
      description: 'Encontro multidisciplinar de especialistas em oncologia torácica, com foco em prevenção, diagnóstico e tratamento de tumores do tórax, especialmente câncer de pulmão, reunindo profissionais de diversas áreas para debate sobre novas terapias e práticas clínicas.',
      gradient: 'from-amber-500/10 to-orange-500/10',
    },
  ];

  return (
    <section ref={sectionRef} id="eventos" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Eventos e Congressos
          </h2>
          
          <div className={`w-24 h-1 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full ${isVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0 scale-x-0'}`} />
          
          <p className={`mt-6 text-lg text-muted-foreground max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up animation-delay-300' : 'opacity-0'}`}>
            Participação ativa nos principais congressos médicos internacionais, garantindo acesso às mais recentes inovações em oncologia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:[&>*:nth-child(4)]:col-start-2 lg:[&>*:nth-child(5)]:col-start-3">
          {events.map((event, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden border-muted/40 bg-gradient-to-br ${event.gradient} backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
              data-testid={`card-event-${index}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
              
              <div className="relative p-0">
                <div className="relative overflow-hidden rounded-t-lg h-64 bg-muted">
                  <img 
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`img-event-${index}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span data-testid={`text-location-${index}`}>{event.location}</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors" data-testid={`text-title-${index}`}>
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed" data-testid={`text-description-${index}`}>
                    {event.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in-up animation-delay-800' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
            <Calendar className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">
              Educação médica contínua para oferecer o melhor tratamento aos pacientes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
