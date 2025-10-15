import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { FaWhatsapp } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { toast } = useToast();

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

  const whatsappNumber = '5561999999999';
  const whatsappMessage = 'Olá, gostaria de agendar uma consulta com a Dra. Adriana';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: 'Mensagem enviada!',
      description: 'Entraremos em contato em breve.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contato" className="relative py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 mb-6 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}>
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Entre em Contato</span>
          </div>
          
          <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 ${isVisible ? 'animate-fade-in-up animation-delay-100' : 'opacity-0'}`}>
            Agende sua consulta
          </h2>
          
          <p className={`text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isVisible ? 'animate-fade-in-up animation-delay-200' : 'opacity-0'}`}>
            Dê o primeiro passo rumo a um cuidado oncológico com acolhimento e excelência
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className={`group relative ${isVisible ? 'animate-slide-in-left animation-delay-300' : 'opacity-0'}`}>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <Card className="relative p-8 md:p-10 backdrop-blur-sm bg-card/90 border-2 border-primary/10 rounded-3xl">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Send className="w-6 h-6 text-primary" />
                  </div>
                  Envie uma mensagem
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base font-medium">Nome</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="h-12 transition-all duration-300 focus:scale-[1.02] rounded-xl border-2 focus:border-primary/50"
                        data-testid="input-name"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base font-medium">Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="h-12 transition-all duration-300 focus:scale-[1.02] rounded-xl border-2 focus:border-primary/50"
                        data-testid="input-phone"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base font-medium">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 transition-all duration-300 focus:scale-[1.02] rounded-xl border-2 focus:border-primary/50"
                      data-testid="input-email"
                      placeholder="seu@email.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-base font-medium">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                      className="transition-all duration-300 focus:scale-[1.02] rounded-xl border-2 focus:border-primary/50 resize-none"
                      data-testid="input-message"
                      placeholder="Conte-nos sobre sua necessidade..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full h-14 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 group relative overflow-hidden"
                    data-testid="button-submit-form"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Send className="w-5 h-5 mr-2 relative z-10" />
                    <span className="relative z-10">Enviar Mensagem</span>
                  </Button>
                </form>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className={`group relative ${isVisible ? 'animate-scale-in animation-delay-400' : 'opacity-0'}`}>
              <div className="absolute -inset-1 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <Card className="relative p-8 backdrop-blur-sm bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-2 border-green-500/20 rounded-3xl hover-elevate transition-all duration-300 hover:scale-105 h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FaWhatsapp className="w-8 h-8 text-green-600" />
                </div>
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  WhatsApp
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Prefere conversar diretamente? Entre em contato pelo WhatsApp e tire suas dúvidas.
                </p>
                
                <Button 
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                  className="w-full gap-2 h-12 bg-green-600 hover:bg-green-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/25"
                  data-testid="button-whatsapp-contact"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Falar no WhatsApp
                </Button>
              </Card>
            </div>

            <div className={`group relative ${isVisible ? 'animate-scale-in animation-delay-500' : 'opacity-0'}`}>
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <Card className="relative p-8 backdrop-blur-sm bg-card/90 border-2 border-primary/10 rounded-3xl h-full">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Horário de Atendimento
                </h3>
                
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Segunda a sexta</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-lg font-semibold text-foreground">8h às 19h</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in-up animation-delay-600' : 'opacity-0'}`}>
          <div className="inline-block p-8 backdrop-blur-sm bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/10 rounded-3xl">
            <p className="text-lg md:text-xl text-foreground">
              <span className="font-semibold text-primary">Resposta rápida:</span> Retornamos todos os contatos em até 24 horas úteis
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
