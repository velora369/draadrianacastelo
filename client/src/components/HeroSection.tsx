import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';
import { Award, Users } from 'lucide-react';

export default function HeroSection() {
  const whatsappNumber = '5561999999999';
  const whatsappMessage = 'Olá, gostaria de agendar uma consulta com a Dra. Adriana';

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[150px]" />
      </div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            <div className="flex justify-center lg:justify-start animate-fade-in-up">
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/logo.webp"
                alt="Logo Dra. Adriana Castelo"
                className="h-16 md:h-20 lg:h-24 w-auto object-contain"
                data-testid="img-logo"
              />
            </div>
            
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-fade-in-up">
              Cuidado,{' '}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent">
                Ciência
              </span>
              {' '}e Humanidade
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
              Atendimento especializado em oncologia com um olhar humano, científico e personalizado para cada paciente.
            </p>

            <div className="flex flex-wrap gap-8 justify-center lg:justify-start animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 backdrop-blur-sm flex items-center justify-center border border-primary/20">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">15+</p>
                  <p className="text-sm text-muted-foreground">Anos de Experiência</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-accent/10 backdrop-blur-sm flex items-center justify-center border border-accent/20">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1000+</p>
                  <p className="text-sm text-muted-foreground">Pacientes Atendidos</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400 justify-center lg:justify-start">
              <Button 
                size="lg"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                className="gap-2 px-8 h-14 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 group relative overflow-hidden"
                data-testid="button-hero-whatsapp"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <FaWhatsapp className="w-6 h-6 relative z-10" />
                <span className="relative z-10">Agendar Consulta</span>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 h-14 text-lg backdrop-blur-sm border-2 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                data-testid="button-hero-about"
              >
                Conheça a Doutora
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-scale-in animation-delay-300">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-[2rem] blur-2xl opacity-60 animate-pulse" />
              
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-accent/40 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative overflow-hidden rounded-[2rem] border-2 border-primary/20 backdrop-blur-sm bg-card/50">
                  <img 
                    src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/img2.webp"
                    alt="Dra. Adriana Castelo C. de Moura - Oncologista"
                    className="relative w-full max-w-md lg:max-w-lg object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/95 via-background/70 to-transparent backdrop-blur-md border-t border-primary/20">
                    <p className="text-lg font-semibold text-foreground mb-1">Dra. Adriana Castelo</p>
                    <p className="text-sm text-muted-foreground">Oncologista | CRM 15661 DF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
