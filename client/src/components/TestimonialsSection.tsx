import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  //todo: remove mock functionality
  const testimonials = [
    {
      text: 'A Dra. Adriana me acolheu em um momento muito difícil. Seu carinho e clareza me deram força para seguir o tratamento.',
      author: 'Paciente verificado no Doctoralia',
      initials: 'MC',
    },
    {
      text: 'Excelente médica, explica tudo com paciência e empatia. Senti confiança desde a primeira consulta.',
      author: 'Paciente verificado',
      initials: 'RS',
    },
    {
      text: 'Profissional incrível, une ciência e fé de um jeito inspirador.',
      author: 'Paciente verificado',
      initials: 'AL',
    },
  ];

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground text-center mb-12">
          O que dizem os pacientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="p-6 relative hover-elevate rounded-lg"
              data-testid={`testimonial-${index}`}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">{testimonial.initials}</span>
                </div>
                <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
