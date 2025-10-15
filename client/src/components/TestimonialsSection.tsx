import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Quote, Star } from 'lucide-react';

export default function TestimonialsSection() {
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

  const testimonials = [
    {
      text: 'A Dra. Adriana me acolheu em um momento muito difícil. Seu carinho e clareza me deram força para seguir o tratamento.',
      author: 'Paciente verificado no Doctoralia',
      initials: 'MC',
      gradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      text: 'Excelente médica, explica tudo com paciência e empatia. Senti confiança desde a primeira consulta.',
      author: 'Paciente verificado',
      initials: 'RS',
      gradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      text: 'Profissional incrível, une ciência e fé de um jeito inspirador.',
      author: 'Paciente verificado',
      initials: 'AL',
      gradient: 'from-emerald-500/10 to-teal-500/10',
    },
  ];

  return (
    <section ref={sectionRef} id="depoimentos" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-accent/5 to-background overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/4 w-3 h-3 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-[150px]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 backdrop-blur-sm border border-accent/20 mb-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-semibold text-accent">Depoimentos Reais</span>
          </div>
          
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 ${isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            O que dizem os pacientes
          </h2>
          
          <div className={`flex items-center justify-center gap-1 ${isVisible ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-accent fill-accent" />
            ))}
            <span className="ml-2 text-lg font-semibold text-foreground">5.0 / 5.0</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 3) * 150}ms` }}
              data-testid={`testimonial-${index}`}
            >
              <div className="relative h-full">
                <div className={`absolute -inset-1 bg-gradient-to-br ${testimonial.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`} />
                
                <Card className="relative h-full p-8 backdrop-blur-sm bg-card/90 border-2 border-primary/10 rounded-3xl hover-elevate transition-all duration-500 hover:scale-105 flex flex-col">
                  <div className="relative mb-6">
                    <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-50" />
                    <Quote className="relative w-12 h-12 text-primary/40 group-hover:text-primary/60 transition-colors group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  
                  <p className="text-foreground text-lg leading-relaxed mb-6 flex-grow italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <span className="text-lg font-bold text-primary">{testimonial.initials}</span>
                    </div>
                    <div>
                      <div className="flex gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 text-accent fill-accent" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground font-medium">{testimonial.author}</p>
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Star className="w-4 h-4 text-accent fill-accent" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
          <p className="text-xl text-muted-foreground mb-4">
            Mais de <span className="font-bold text-foreground">1.000 pacientes</span> confiaram seu tratamento à Dra. Adriana
          </p>
          <div className="flex items-center justify-center gap-2 text-accent">
            <Star className="w-5 h-5 fill-accent" />
            <span className="text-lg font-semibold">Avaliação média: 5.0 em todas as plataformas</span>
          </div>
        </div>
      </div>
    </section>
  );
}
