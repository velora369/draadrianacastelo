import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Heart, Stethoscope, Activity, GraduationCap, Building2, Microscope } from 'lucide-react';

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
    { icon: Stethoscope, label: 'Oncologia Torácica', color: 'from-blue-500/20 to-blue-600/20' },
    { icon: Heart, label: 'Oncologia Ginecológica', color: 'from-pink-500/20 to-rose-600/20' },
    { icon: Activity, label: 'Oncologia Gastrointestinal', color: 'from-green-500/20 to-emerald-600/20' },
  ];

  const credentials = [
    { icon: Building2, text: 'Hospital Sírio-Libanês' },
    { icon: Building2, text: 'Hospital Universitário de Brasília' },
    { icon: GraduationCap, text: 'Doutoranda pela UnB' },
    { icon: Microscope, text: 'Oncologia de Precisão' },
  ];

  return (
    <section ref={sectionRef} id="sobre" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className={`inline-block mb-4 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <div className="px-6 py-2 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20">
              <span className="text-sm font-semibold text-primary">Sobre a Doutora</span>
            </div>
          </div>
          
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 ${isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Dra. Adriana Castelo C. de Moura
          </h2>
          
          <div className={`w-24 h-1 mx-auto bg-gradient-to-r from-primary via-accent to-primary rounded-full ${isVisible ? 'animate-scale-in animation-delay-200' : 'opacity-0 scale-x-0'}`} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className={`${isVisible ? 'animate-slide-in-left animation-delay-300' : 'opacity-0'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity" />
              
              <Card className="relative p-8 backdrop-blur-sm bg-card/80 border-2 border-primary/10 rounded-3xl shadow-2xl">
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  Médica oncologista do Hospital Sírio-Libanês e do Hospital Universitário de Brasília. 
                  Doutoranda pela UnB, atua em <span className="font-semibold text-primary">oncologia de precisão</span> e <span className="font-semibold text-accent">pesquisa clínica</span>.
                </p>
                
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Integra prática clínica, pesquisa e ensino — unindo <span className="font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ciência e sensibilidade</span> para oferecer o melhor cuidado aos pacientes.
                </p>
              </Card>
            </div>
          </div>

          <div className={`grid grid-cols-2 gap-4 ${isVisible ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            {credentials.map((cred, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${(index + 5) * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity" />
                
                <Card className="relative p-6 backdrop-blur-sm bg-card/90 border border-primary/10 rounded-2xl hover-elevate transition-all duration-300 hover:scale-105 h-full flex flex-col items-center justify-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <cred.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground leading-tight">{cred.text}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className={`${isVisible ? 'animate-fade-in-up animation-delay-500' : 'opacity-0'}`}>
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-center text-foreground mb-8">
            Áreas de Especialização
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${(index + 8) * 100}ms` }}
                data-testid={`specialty-badge-${index}`}
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${specialty.color} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`} />
                
                <Card className="relative p-8 backdrop-blur-sm bg-card/90 border-2 border-primary/10 rounded-3xl hover-elevate transition-all duration-500 hover:scale-105 hover:rotate-1 h-full flex flex-col items-center text-center group overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500">
                    <specialty.icon className="w-10 h-10 text-primary" />
                  </div>
                  
                  <p className="relative text-lg font-semibold text-foreground">{specialty.label}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
