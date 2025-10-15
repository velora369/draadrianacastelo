import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';

export default function GoogleReviewsSection() {
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

  //todo: remove mock functionality
  const reviews = [
    {
      author: 'Maria F.',
      date: '2024',
      text: 'A melhor experiência médica que já tive. Profissional, humana e muito atenciosa.',
    },
    {
      author: 'Carlos S.',
      date: '2024',
      text: 'Dra. Adriana é extremamente competente e acolhedora. Recomendo fortemente!',
    },
    {
      author: 'Ana P.',
      date: '2024',
      text: 'Atendimento excepcional, com toda atenção e cuidado que um paciente oncológico precisa.',
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex items-center justify-center gap-3 mb-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <FaGoogle className="w-8 h-8 text-[#4285f4]" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Avaliações no Google
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-elevate rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
              data-testid={`google-review-${index}`}
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 transition-transform duration-200 hover:scale-110" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-foreground">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
