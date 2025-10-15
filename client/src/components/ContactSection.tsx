import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { FaWhatsapp } from 'react-icons/fa';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { toast } = useToast();

  const whatsappNumber = '5561999999999'; //todo: remove mock functionality
  const whatsappMessage = 'Olá, gostaria de agendar uma consulta com a Dra. Adriana';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData); //todo: remove mock functionality
    toast({
      title: 'Mensagem enviada!',
      description: 'Entraremos em contato em breve.',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-4">
          Agende sua consulta
        </h2>
        
        <p className="text-lg text-muted-foreground text-center mb-12">
          Entre em contato e dê o primeiro passo rumo a um cuidado oncológico com acolhimento e excelência.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-8 rounded-lg">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
              Envie uma mensagem
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  data-testid="input-phone"
                />
              </div>
              <div>
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  required
                  data-testid="input-message"
                />
              </div>
              <Button type="submit" className="w-full" data-testid="button-submit-form">
                Enviar Mensagem
              </Button>
            </form>
          </Card>

          <div className="flex flex-col justify-center gap-6">
            <Card className="p-8 hover-elevate rounded-lg">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Atendimento via WhatsApp
              </h3>
              <p className="text-muted-foreground mb-6">
                Prefere conversar diretamente? Entre em contato pelo WhatsApp e tire suas dúvidas.
              </p>
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                className="w-full gap-2"
                data-testid="button-whatsapp-contact"
              >
                <FaWhatsapp className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </Card>

            <Card className="p-8 rounded-lg">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Horário de Atendimento
              </h3>
              <p className="text-muted-foreground">
                Segunda a sexta<br />
                Das 8h às 19h
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
