import { Button } from '@/components/ui/button';
import { FaWhatsapp } from 'react-icons/fa';

export default function HeroSection() {
  const whatsappNumber = '5561999999999'; //todo: remove mock functionality
  const whatsappMessage = 'Olá, gostaria de agendar uma consulta com a Dra. Adriana';

  return (
    <section id="inicio" className="relative min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 py-24 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
          Cuidado, Ciência e Humanidade<br />no Tratamento Oncológico
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
          Atendimento especializado em oncologia torácica, ginecológica e gastrointestinal, com um olhar humano e científico.
        </p>

        <Button 
          size="lg"
          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
          className="gap-2 px-8 text-lg h-12"
          data-testid="button-hero-whatsapp"
        >
          <FaWhatsapp className="w-6 h-6" />
          Fale com a Dra. Adriana
        </Button>
      </div>
    </section>
  );
}
