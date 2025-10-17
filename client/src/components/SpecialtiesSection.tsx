import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Microscope, Zap } from 'lucide-react';

const LungsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22.0013 17C22 21 22 21 18.0012 21C14.0012 21 13.0013 18 13.0013 15C13.0013 14.6216 12.9834 14.0822 12.9746 13.4495L14.9976 14.6186L15.0013 15C15.0013 17.7759 15.8173 19 18.0012 19C19.1415 19 19.6118 18.993 19.9637 18.9625C19.9943 18.6106 20.0012 18.1403 20.0012 17C20.0012 13.7947 19.298 10.9675 18.1657 9.09922C17.3283 7.71769 16.5533 7.2575 16.1337 7.39737C15.8411 7.49489 15.5286 8.04672 15.3027 9.02034L13.5124 7.98683C13.882 6.79047 14.4945 5.83557 15.5013 5.5C18.5007 4.50018 22.0036 9.5 22.0013 17ZM8.5 5.5C9.50665 5.83555 10.1192 6.79037 10.4888 7.98665L8.69853 9.02034C8.47269 8.04672 8.16013 7.49489 7.86754 7.39737C7.44794 7.2575 6.67292 7.71769 5.83557 9.09922C4.70322 10.9675 4 13.7947 4 17C4 18.1403 4.00698 18.6106 4.0375 18.9625C4.3894 18.993 4.85973 19 6 19C8.18395 19 9 17.7759 9 15L9.00367 14.6176L11.0266 13.4502C11.0179 14.0826 11 14.6218 11 15C11 18 10 21 6 21C2 21 2 21 2 17C2 9.5 5.50055 4.50018 8.5 5.5ZM13 2L12.9998 9.422L17.6962 12.134L16.6962 13.866L11.9998 11.155L7.30385 13.866L6.30385 12.134L10.9998 9.422L11 2H13Z"/>
  </svg>
);

const GynecologicalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <g>
      <path fillRule="evenodd" d="M19.964 7.205a2.1 2.1 0 0 0 .196-.623c.04-.32-.06-.442-.166-.518c-.16-.114-.528-.24-1.174-.151c-.584.08-1.32.33-2.148.818c.11.607.048 1.224-.07 1.765c-.214.984-.667 1.991-1.02 2.767l-.04.087a21 21 0 0 0-.41.94a2.6 2.6 0 0 0-.13.4q-.002.01-.002.005v.007c0 .766 0 2.192-.064 3.495c-.031.65-.08 1.296-.158 1.823c-.038.261-.087.52-.153.746c-.053.182-.162.513-.41.767c-.338.345-.794.511-1.278.418c-.375-.071-.66-.284-.796-.388L12 19.451l-.141.112c-.135.104-.421.317-.796.389c-.484.092-.94-.074-1.278-.42c-.248-.253-.357-.584-.41-.766a6 6 0 0 1-.153-.746a20 20 0 0 1-.158-1.823C9 14.894 9 13.467 9 12.702v-.007q0 .006-.002-.005a2.5 2.5 0 0 0-.13-.4c-.103-.263-.243-.571-.41-.94l-.04-.087c-.353-.776-.806-1.783-1.02-2.767c-.116-.533-.179-1.14-.075-1.738c-.847-.507-1.599-.764-2.193-.845c-.646-.089-1.014.037-1.174.15c-.106.077-.206.2-.167.52c.02.163.08.372.197.622c-.403.08-.81.264-1.163.618a2.2 2.2 0 0 0-.442.626c-.315-.552-.512-1.097-.577-1.625c-.117-.96.22-1.838.99-2.388c.715-.51 1.66-.635 2.608-.505c.9.124 1.894.486 2.912 1.09c.828-.698 2.08-.998 3.686-.998c1.593 0 2.837.295 3.665.98c1.008-.593 1.99-.95 2.883-1.072c.949-.13 1.893-.006 2.608.505c.77.55 1.107 1.427.99 2.388c-.065.528-.262 1.073-.577 1.625a2.2 2.2 0 0 0-.442-.626a2.23 2.23 0 0 0-1.163-.618M9.492 6.658c.227-.263.85-.635 2.508-.635s2.281.372 2.508.635c.206.24.304.657.14 1.414c-.161.742-.52 1.557-.887 2.364l-.045.1c-.16.352-.323.71-.446 1.025c-.122.313-.27.735-.27 1.134c0 .77 0 2.154-.061 3.404a20 20 0 0 1-.118 1.472a1.6 1.6 0 0 0-.821-.249c-.352 0-.637.136-.821.249c-.052-.41-.09-.918-.118-1.472A73 73 0 0 1 11 12.695c0-.4-.148-.821-.27-1.134a22 22 0 0 0-.446-1.025l-.045-.1c-.367-.807-.726-1.622-.887-2.364c-.164-.757-.066-1.173.14-1.414m3.192 11.613l-.005.01l.002-.005z" clipRule="evenodd"/>
      <path d="M20.272 9.276c.12.561-.223 1.393-.913 2.083c-.879.878-1.987 1.195-2.475.707s-.172-1.597.707-2.475c.642-.642 1.406-.984 1.962-.931q.038.003.075.01a.8.8 0 0 1 .438.214a.77.77 0 0 1 .206.392M4.397 8.66q-.038.003-.075.01a.8.8 0 0 0-.438.214a.77.77 0 0 0-.206.392c-.12.562.223 1.393.913 2.083c.879.878 1.987 1.195 2.475.707s.171-1.597-.707-2.475c-.642-.642-1.406-.984-1.962-.931"/>
    </g>
  </svg>
);

const GastrointestinalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="currentColor">
    <path d="M6 12.194a6.194 6.194 0 0 1 9.972-4.909A6.17 6.17 0 0 1 19.75 6c1.646 0 3.142.642 4.25 1.688A6.17 6.17 0 0 1 28.25 6a6.17 6.17 0 0 1 3.778 1.285a6.194 6.194 0 0 1 8.693 8.68A6.97 6.97 0 0 1 42 20a6.97 6.97 0 0 1-1.45 4.267a6.194 6.194 0 0 1-8.522 8.893a6 6 0 0 1-.815.531l-.026.063a4.4 4.4 0 0 0-.187.722V42h-2v-7.615q0-.09.016-.177c.074-.412.17-.823.304-1.17c.067-.175.154-.362.27-.534a1.54 1.54 0 0 1 .566-.516c.43-.22.816-.511 1.145-.86a1 1 0 0 1 1.454 0a4.194 4.194 0 1 0 5.777-6.067a1 1 0 0 1-.047-1.476A4.98 4.98 0 0 0 40 20a4.98 4.98 0 0 0-1.324-3.389a1 1 0 0 1 .041-1.397a4.195 4.195 0 0 0-2.689-7.208v.03c-.95 0-1.93.47-2.565 1.242c-.615.747-.897 1.758-.514 2.906a1 1 0 1 1-1.898.632c-.438-1.314-.33-2.562.134-3.618A4.18 4.18 0 0 0 28.25 8a4.19 4.19 0 0 0-3.432 1.783a1 1 0 0 1-1.636 0A4.19 4.19 0 0 0 19.75 8a4.18 4.18 0 0 0-3.05 1.316a1 1 0 0 1-1.455 0a4.194 4.194 0 1 0-5.93 5.93a1 1 0 0 1 0 1.453A4.18 4.18 0 0 0 8 19.75c0 1.418.702 2.672 1.783 3.432a1 1 0 0 1 0 1.636a4.196 4.196 0 0 0 1.446 7.515a1 1 0 0 1 .771.974v2.026a.889.889 0 0 0 1.778 0v-2.575a1 1 0 0 1 .502-.868a4.19 4.19 0 0 0 2.109-3.64a4.19 4.19 0 0 0-1.783-3.432a1 1 0 0 1-.154-.135C13.766 24.233 12.947 24 12 24a1 1 0 1 1 0-2c1.13 0 2.188.249 3.121.755a4.18 4.18 0 0 0 1.268-3.005a4.18 4.18 0 0 0-1.316-3.05a1 1 0 0 1 0-1.455q.089-.084.172-.172a1 1 0 0 1 1.454 0a4.18 4.18 0 0 0 3.051 1.316a4.19 4.19 0 0 0 3.432-1.783a1 1 0 0 1 1.636 0a4.19 4.19 0 0 0 3.432 1.783q.614-.002 1.172-.166a1 1 0 0 1 1.161 1.43A5 5 0 0 0 30 20c0 .904.24 1.75.658 2.481c1.139.64 1.885 1.272 2.325 2.004c.519.866.518 1.738.517 2.439V27a1 1 0 1 1-2 0c0-.787-.02-1.133-.233-1.486c-.173-.288-.531-.662-1.35-1.15a1 1 0 0 1-.225-.054a4.194 4.194 0 0 0-3.348 7.678q.158.082.285.186a1 1 0 0 1 .371.777V42h-2v-8.476a6.195 6.195 0 0 1 3.25-11.469h.057a7 7 0 0 1-.12-3.667A6.17 6.17 0 0 1 24 16.702a6.17 6.17 0 0 1-4.25 1.688a6.2 6.2 0 0 1-1.56-.204a1 1 0 0 1-.663-1.342a6.195 6.195 0 1 1 11.838-3.632a1 1 0 0 1-1.87.706a4.195 4.195 0 1 0-8.02 2.464c.382.161.783.276 1.195.343q.31.05.63.067a4.18 4.18 0 0 0 3.05-1.316a1 1 0 0 1 1.455 0a4.18 4.18 0 0 0 3.05 1.316c.53 0 1.037-.123 1.492-.343a1 1 0 0 1 1.302.514q.068.16.115.328a4.194 4.194 0 1 0 7.914 2.903a1 1 0 0 1 1.454 0a6.194 6.194 0 1 1-8.76 8.76a1 1 0 0 1 0-1.454a4.98 4.98 0 0 0 0-7.046a1 1 0 0 1 0-1.414a4.18 4.18 0 0 0 0-5.91a1 1 0 0 1 0-1.455a6.194 6.194 0 0 1 8.76-8.76"/>
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
      icon: GynecologicalIcon,
      title: 'Oncologia Ginecológica',
      description: 'Diagnóstico e tratamento personalizado de tumores ginecológicos.',
      gradient: 'from-rose-500/20 via-pink-500/20 to-purple-500/20',
      iconBg: 'from-rose-500/10 to-pink-500/10',
    },
    {
      icon: GastrointestinalIcon,
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
