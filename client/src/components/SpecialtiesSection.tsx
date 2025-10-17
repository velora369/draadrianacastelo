import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Activity, Microscope, Zap } from 'lucide-react';

const LungsIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M22.0013 17C22 21 22 21 18.0012 21C14.0012 21 13.0013 18 13.0013 15C13.0013 14.6216 12.9834 14.0822 12.9746 13.4495L14.9976 14.6186L15.0013 15C15.0013 17.7759 15.8173 19 18.0012 19C19.1415 19 19.6118 18.993 19.9637 18.9625C19.9943 18.6106 20.0012 18.1403 20.0012 17C20.0012 13.7947 19.298 10.9675 18.1657 9.09922C17.3283 7.71769 16.5533 7.2575 16.1337 7.39737C15.8411 7.49489 15.5286 8.04672 15.3027 9.02034L13.5124 7.98683C13.882 6.79047 14.4945 5.83557 15.5013 5.5C18.5007 4.50018 22.0036 9.5 22.0013 17ZM8.5 5.5C9.50665 5.83555 10.1192 6.79037 10.4888 7.98665L8.69853 9.02034C8.47269 8.04672 8.16013 7.49489 7.86754 7.39737C7.44794 7.2575 6.67292 7.71769 5.83557 9.09922C4.70322 10.9675 4 13.7947 4 17C4 18.1403 4.00698 18.6106 4.0375 18.9625C4.3894 18.993 4.85973 19 6 19C8.18395 19 9 17.7759 9 15L9.00367 14.6176L11.0266 13.4502C11.0179 14.0826 11 14.6218 11 15C11 18 10 21 6 21C2 21 2 21 2 17C2 9.5 5.50055 4.50018 8.5 5.5ZM13 2L12.9998 9.422L17.6962 12.134L16.6962 13.866L11.9998 11.155L7.30385 13.866L6.30385 12.134L10.9998 9.422L11 2H13Z"/>
  </svg>
);

const GynecologicalIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className={className} fill="currentColor">
    <path fillRule="evenodd" d="M6.256 15.129c-.491-.788-.24-1.676.56-2.405c.39-.355.843-.592 1.233-.683c.4-.093.601-.01.683.055c1.806 1.448 2.976 1.823 3.995 1.912c.29.025.508.032.687.038c.445.014.638.02 1.047.282l1.08-1.683c-.914-.586-1.734-.604-2.298-.616q-.193-.002-.342-.014c-.533-.046-1.339-.214-2.918-1.48c-.725-.58-1.63-.618-2.387-.442c-.766.178-1.518.599-2.126 1.152c-1.195 1.087-2.113 3.016-.911 4.942c.62.995 1.31 1.85 1.945 2.541q.137-.256.353-.466c.363-.35.85-.542 1.403-.587a15.6 15.6 0 0 1-2.004-2.546m6.191 7.959c-.095-.43-.403-1.015-.992-1.557c-.589-.543-1.215-.82-1.674-.9c-.254-.045-.389-.024-.446-.007c-.018.055-.037.182.016.42c.096.431.403 1.015.992 1.558c.59.543 1.215.82 1.674.9c.255.045.389.024.447.007c.017-.056.036-.182-.017-.421m.002.455l.005-.009zm.042-.044q.007-.007.009-.006zM9.35 20.59l-.005.009zm-.042.044l-.01.005zm4.634 4.237c1.102-1.063.633-3.18-1.047-4.728c-1.68-1.55-3.936-1.944-5.038-.881s-.634 3.18 1.046 4.728c1.68 1.549 3.936 1.943 5.039.88m27.802-9.741c.491-.788.24-1.676-.56-2.405c-.39-.355-.842-.592-1.233-.683c-.4-.093-.602-.01-.683.055c-1.806 1.448-2.976 1.823-3.995 1.912c-.29.025-.508.032-.687.038c-.445.014-.637.02-1.047.282l-1.08-1.683c.914-.586 1.734-.604 2.298-.616q.193-.002.342-.014c.533-.046 1.339-.214 2.918-1.48c.724-.58 1.63-.618 2.387-.442c.766.178 1.518.599 2.126 1.152c1.194 1.087 2.113 3.016.911 4.942a17.4 17.4 0 0 1-1.985 2.585a1.9 1.9 0 0 0-.375-.51c-.35-.338-.818-.528-1.346-.581a15.7 15.7 0 0 0 2.01-2.552m-6.255 7.959c.096-.43.404-1.015.992-1.557c.59-.543 1.215-.82 1.674-.9c.255-.045.389-.024.447-.007c.017.055.036.182-.017.42c-.095.431-.403 1.015-.992 1.558s-1.215.82-1.674.9c-.254.045-.388.024-.446.007c-.017-.056-.036-.182.017-.421m-.001.455l-.005-.009zm-.042-.044q-.009-.007-.01-.006zm3.14-2.909l.006.009zm.043.044l.009.005zm-4.634 4.237c-1.102-1.063-.634-3.18 1.046-4.728c1.68-1.55 3.937-1.944 5.039-.881s.633 3.18-1.047 4.728c-1.68 1.549-3.936 1.943-5.038.88m-15.335-5.658c.433.953.983 1.73 1.39 2.14c.745.749 1.09 1.952 1.293 3.122c.213 1.224.308 2.675.386 4.128l.044.86c.06 1.189.12 2.369.228 3.48c.096.984.226 1.87.411 2.614c.13-.112.27-.231.39-.324c.132-.1.292-.214.47-.305c.167-.086.426-.192.736-.192c.317 0 .577.11.751.205c.179.098.335.22.459.325l.122.11c.121-.67.189-1.438.224-2.286c.036-.892.036-1.815.036-2.763q-.001-.708.004-1.435c.013-1.423.066-2.87.3-4.15c.232-1.266.664-2.506 1.543-3.39c.597-.6 1.264-1.481 1.768-2.459c.51-.988.808-1.986.781-2.841c-.025-.8-.33-1.494-1.124-2.029C28.024 13.45 26.525 13 24.01 13c-2.5 0-3.982.485-4.827 1.095c-.802.58-1.132 1.345-1.178 2.221c-.047.915.223 1.943.657 2.896m-.65-6.738C19.335 11.518 21.298 11 24.01 11c2.698 0 4.66.472 5.982 1.364c1.38.93 1.962 2.247 2.005 3.624c.042 1.323-.41 2.67-1.003 3.82a12.3 12.3 0 0 1-2.127 2.954c-.46.462-.79 1.228-.994 2.339c-.2 1.098-.254 2.398-.267 3.808c-.004.443-.004.9-.004 1.36c0 .974 0 1.97-.038 2.902c-.057 1.378-.2 2.75-.594 3.899c-.074.216-.23.543-.575.754a1.23 1.23 0 0 1-1.044.106a1.9 1.9 0 0 1-.543-.307a5 5 0 0 1-.354-.317l-.216-.216a7 7 0 0 0-.25-.244a7 7 0 0 0-.305.259c-.084.073-.177.155-.292.252c-.197.165-.56.468-.973.587c-.243.07-.61.107-.981-.09a1.4 1.4 0 0 1-.64-.758c-.425-1.133-.646-2.534-.785-3.961c-.112-1.162-.175-2.4-.236-3.592l-.043-.835c-.077-1.46-.169-2.8-.358-3.891c-.2-1.146-.472-1.785-.74-2.055c-.607-.61-1.283-1.598-1.794-2.722s-.903-2.482-.833-3.827c.072-1.384.637-2.751 2.004-3.739m5.789 24.22h-.002z" clipRule="evenodd"/>
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
      icon: Activity,
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
