import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Zap, ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

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
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48" className={className}>
    <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
      <path d="M22.91 6h-6.834v.464c-.006 2.732-.01 5.365 1.45 7.82c1.016 1.707 2.527 2.906 4.05 4.115q.336.265.67.534c3.02 2.437 1.13 6.294-2.048 7.2c-.983.28-1.911.488-2.783.682c-3.447.768-6.017 1.34-7.728 5.523A9.2 9.2 0 0 0 9 35.822V42h6.827v-6.446c0-1.769 2.001-2.85 3.55-2.087c4.058 1.998 8.918 2.634 13.27.946c2.938-1.139 4.914-3.291 6.515-5.907c2.337-3.82 2.43-8.701.235-12.604c-1.923-3.421-4.598-6.774-8.929-6.774c-.872 0-1.81.34-2.735.673c-1.628.59-3.215 1.163-4.33-.158c-.627-.741-.57-1.866-.52-2.865c.014-.272.027-.535.026-.778m14.248 17.82c1.171.735 1.76 2.203 1.427 3.424c1.147 1.428-5.024 4.782-8.44 6.639c-.82.445-1.482.804-1.845 1.03a9 9 0 0 1-.518-.957c-1.242-.242-2.298-1.42-2.438-2.796s.683-2.474 1.887-2.61a6.3 6.3 0 0 1 .777-1.762c-.586-1.26-.293-2.69.738-3.33s2.442-.27 3.312.813a6.3 6.3 0 0 1 1.924.084c.655-1.019 2.005-1.271 3.176-.536"/>
      <path d="M39.162 28.506c2.337-3.82 2.43-8.701.235-12.604c-1.923-3.421-4.598-6.774-8.929-6.774c-.872 0-1.81.34-2.735.673c-1.628.59-3.215 1.163-4.33-.158c-.377-.446-.507-1.03-.54-1.643c-.02-.406 0-.824.02-1.222A16 16 0 0 0 22.91 6h-6.833v.464q-.002.462 0 .92q0 .309.006.616c.039 2.184.26 4.293 1.445 6.284c1.015 1.707 2.526 2.906 4.05 4.115q.335.265.668.534c3.021 2.437 1.13 6.294-2.047 7.2c-.983.28-1.911.488-2.783.682c-3.447.768-6.017 1.34-7.728 5.523A9.2 9.2 0 0 0 9 35.822V42h6.827v-6.446c0-1.769 2.001-2.85 3.55-2.087c4.058 1.998 8.918 2.634 13.27.946c2.938-1.139 4.914-3.291 6.515-5.907M13.827 40v-4.446c0-3.44 3.73-5.212 6.433-3.881c3.675 1.809 7.945 2.318 11.665.876c2.377-.922 4.057-2.678 5.53-5.087c1.96-3.203 2.038-7.31.199-10.58c-1.898-3.376-4.063-5.754-7.186-5.754c-.275 0-.662.078-1.25.272c-.257.084-.516.178-.807.283l-.097.035c-.317.115-.673.242-1.033.354c-.69.215-1.596.44-2.55.357c-1.055-.093-2.06-.553-2.856-1.495c-.825-.977-.982-2.14-1.013-2.934h-2.776c.04 2.058.233 3.705 1.16 5.261c.888 1.492 2.162 2.5 3.635 3.677l.054.042l.61.488c1.367 1.103 1.638 2.617 1.195 3.85c-.465 1.311-1.63 2.417-3.096 2.851c-.906.258-1.755.447-2.594.632l-.008.002l-.61.137c-.974.222-2.208.503-3.351.955c-2.4.951-4.195 2.602-5.516 5.837A11.2 11.2 0 0 0 11.827 35.822V40z"/>
    </g>
  </svg>
);

const ResearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={className}>
    <g fill="currentColor">
      <path d="m16.414 10.979l-1.436-1.393l-2.88 2.97l-1.062-1.118l-1.45 1.377l2.498 2.63z"/>
      <path fillRule="evenodd" d="M6 4a2 2 0 0 1 2-2h8.107l2.146 2.342L21 7.638V17a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm8.667 0H8v13h11V9h-2.333a2 2 0 0 1-2-2zm2 1.57l.08.088L17.865 7h-1.198z" clipRule="evenodd"/>
      <path d="M5 5.5v1H3v-1zM16.5 22h-9c-1.026 0-2.13-.454-2.975-1.201C3.662 20.035 3 18.9 3 17.5v-11h2v11c0 .731.338 1.347.85 1.8c.53.47 1.176.7 1.65.7h9zm0-2h1v2h-1z"/>
    </g>
  </svg>
);

export default function SpecialtiesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const modalTitleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  const whatsappNumber = '5561999999999';
  const whatsappMessage = 'Olá, gostaria de agendar uma consulta com a Dra. Adriana';

  useEffect(() => {
    if (openModal !== null && modalTitleRefs.current[openModal]) {
      const timer = setTimeout(() => {
        modalTitleRefs.current[openModal]?.focus();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [openModal]);

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
      modalContent: {
        paragraphs: [
          'A Oncologia Torácica é uma área altamente especializada dedicada ao diagnóstico e tratamento de tumores que afetam os pulmões, pleura, mediastino e outras estruturas da cavidade torácica. Com os avanços da medicina personalizada e terapias-alvo, hoje é possível oferecer tratamentos cada vez mais eficazes e menos invasivos.',
          'Nosso foco está em proporcionar um cuidado multidisciplinar, integrando oncologia clínica, cirurgia torácica, radioterapia e medicina de suporte. Cada paciente recebe um plano terapêutico individualizado, baseado nas características específicas do tumor e no perfil molecular da doença.',
          'Além do tratamento, oferecemos suporte contínuo para manejo de sintomas, reabilitação pulmonar e acompanhamento oncológico de longo prazo, sempre priorizando a qualidade de vida e o bem-estar do paciente.'
        ],
        tumorTypes: [
          { name: 'Câncer de Pulmão de Não Pequenas Células (NSCLC)', description: 'Tipo mais comum de câncer de pulmão, inclui adenocarcinoma, carcinoma de células escamosas e carcinoma de grandes células.' },
          { name: 'Câncer de Pulmão de Pequenas Células (SCLC)', description: 'Tumor agressivo que geralmente está associado ao tabagismo e tem rápido crescimento.' },
          { name: 'Mesotelioma Pleural', description: 'Tumor raro da pleura, frequentemente relacionado à exposição ao amianto.' },
          { name: 'Timoma e Carcinoma Tímico', description: 'Tumores originados no timo, localizados no mediastino anterior.' }
        ]
      }
    },
    {
      icon: GynecologicalIcon,
      title: 'Oncologia Ginecológica',
      description: 'Diagnóstico e tratamento personalizado de tumores ginecológicos.',
      gradient: 'from-rose-500/20 via-pink-500/20 to-purple-500/20',
      iconBg: 'from-rose-500/10 to-pink-500/10',
      modalContent: {
        paragraphs: [
          'A Oncologia Ginecológica é uma subespecialidade que cuida de cânceres que afetam o sistema reprodutor feminino, incluindo ovário, útero, colo do útero, vagina e vulva. Nosso trabalho é guiado por evidências científicas atualizadas e por uma abordagem humanizada, respeitando as particularidades de cada mulher.',
          'Utilizamos protocolos baseados em medicina de precisão, incluindo análise genética e molecular dos tumores, para definir as melhores estratégias terapêuticas. O tratamento pode envolver quimioterapia, imunoterapia, terapias-alvo e, quando necessário, coordenação com cirurgiões especializados.',
          'Além do cuidado oncológico, oferecemos apoio psicológico, orientação nutricional e acompanhamento multidisciplinar para garantir conforto, dignidade e qualidade de vida durante todo o processo de tratamento.'
        ],
        tumorTypes: [
          { name: 'Câncer de Ovário', description: 'Tumor que se desenvolve nos ovários, frequentemente diagnosticado em estágios avançados.' },
          { name: 'Câncer de Colo do Útero', description: 'Relacionado ao HPV, pode ser prevenido com vacinação e rastreamento regular.' },
          { name: 'Câncer de Endométrio', description: 'Tumor que afeta o revestimento interno do útero, comum na pós-menopausa.' }
        ]
      }
    },
    {
      icon: GastrointestinalIcon,
      title: 'Oncologia Gastrointestinal',
      description: 'Abordagem integrada para cânceres de estômago, intestino e fígado.',
      gradient: 'from-emerald-500/20 via-green-500/20 to-teal-500/20',
      iconBg: 'from-emerald-500/10 to-green-500/10',
      modalContent: {
        paragraphs: [
          'A Oncologia Gastrointestinal abrange o tratamento de tumores do trato digestivo, incluindo esôfago, estômago, fígado, pâncreas, intestino delgado, cólon e reto. Esses cânceres representam uma parcela significativa dos diagnósticos oncológicos e requerem expertise especializada.',
          'Nosso trabalho integra oncologia clínica, endoscopia terapêutica, cirurgia oncológica e radioterapia, sempre em um modelo de decisão compartilhada com o paciente. Utilizamos biomarcadores tumorais e testes moleculares para personalizar o tratamento e aumentar as chances de resposta.',
          'Oferecemos também suporte nutricional especializado, fundamental para pacientes com tumores gastrointestinais, além de cuidados paliativos integrados desde o diagnóstico, visando o melhor controle de sintomas e qualidade de vida.'
        ],
        tumorTypes: [
          { name: 'Câncer Colorretal', description: 'Tumor que afeta o cólon ou reto, um dos cânceres mais comuns e com alta taxa de cura quando detectado precocemente.' },
          { name: 'Câncer de Estômago (Gástrico)', description: 'Tumor que se desenvolve no revestimento do estômago, frequentemente relacionado à infecção por H. pylori.' },
          { name: 'Câncer de Pâncreas', description: 'Tumor agressivo do pâncreas, muitas vezes diagnosticado em estágios avançados, requer abordagem multidisciplinar.' },
          { name: 'Carcinoma Hepatocelular', description: 'Tipo mais comum de câncer de fígado, geralmente associado a cirrose hepática ou hepatite viral crônica.' }
        ]
      }
    },
    {
      icon: ResearchIcon,
      title: 'Pesquisa Clínica',
      description: 'Coordenação e condução de estudos clínicos voltados à inovação em oncologia.',
      gradient: 'from-violet-500/20 via-purple-500/20 to-fuchsia-500/20',
      iconBg: 'from-violet-500/10 to-purple-500/10',
      modalContent: {
        paragraphs: [
          'A Pesquisa Clínica é fundamental para o avanço da oncologia e o desenvolvimento de novos tratamentos. Participar de um estudo clínico pode oferecer acesso a terapias inovadoras ainda não disponíveis comercialmente, sempre com rigoroso acompanhamento médico e ético.',
          'Trabalhamos com protocolos nacionais e internacionais, em parceria com instituições renomadas, para testar novas drogas, combinações terapêuticas e abordagens de tratamento. A participação é sempre voluntária, informada e protegida por comitês de ética.',
          'Se você tem interesse em participar de pesquisas clínicas ou quer saber mais sobre estudos disponíveis, nossa equipe está pronta para esclarecer dúvidas e avaliar sua elegibilidade para os protocolos em andamento.'
        ],
        studies: [
          {
            title: 'Estudo LUNA-03',
            description: 'Avaliação da eficácia de terapias combinadas em câncer de pulmão metastático.',
            link: 'https://www.exemplo-de-estudo-luna03.com'
          },
          {
            title: 'Estudo HER-GYN',
            description: 'Investigação sobre novas abordagens de imunoterapia em tumores ginecológicos.',
            link: 'https://www.exemplo-de-estudo-hergyn.com'
          },
          {
            title: 'Estudo GASTRO-PRECISION',
            description: 'Análise de terapias direcionadas por biomarcadores em câncer gastrointestinal.',
            link: 'https://www.exemplo-de-estudo-gastroprecision.com'
          }
        ],
        studyLink: 'https://www.exemplo-de-estudo-aberto.com'
      }
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
            <Dialog key={index} open={openModal === index} onOpenChange={(open) => setOpenModal(open ? index : null)}>
              <div
                className={`group relative ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                style={{ animationDelay: `${(index + 3) * 150}ms` }}
                data-testid={`specialty-card-${index}`}
              >
                <div className={`absolute -inset-1 bg-gradient-to-br ${specialty.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-all duration-500`} />
                
                <DialogTrigger asChild>
                  <button 
                    className="relative h-full p-8 backdrop-blur-sm bg-card/90 border-2 border-primary/10 rounded-3xl hover-elevate transition-all duration-500 hover:scale-[1.02] overflow-hidden group cursor-pointer w-full text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
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
                  </button>
                </DialogTrigger>
              </div>

              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-primary/5 to-background border-2 border-primary/20 backdrop-blur-xl">
                <DialogHeader>
                  <DialogTitle 
                    ref={(el) => { modalTitleRefs.current[index] = el; }}
                    tabIndex={-1}
                    className="font-display text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 focus:outline-none"
                  >
                    {specialty.title}
                  </DialogTitle>
                  <DialogDescription className="sr-only">
                    Informações detalhadas sobre {specialty.title}
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {specialty.modalContent.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground/90 leading-relaxed text-base">
                      {paragraph}
                    </p>
                  ))}

                  {specialty.modalContent.tumorTypes && (
                    <div className="mt-8 pt-6 border-t border-primary/20">
                      <h4 className="font-display text-xl font-bold text-primary mb-4">
                        {specialty.title === 'Oncologia Torácica' && 'Tipos de Tumores Torácicos'}
                        {specialty.title === 'Oncologia Ginecológica' && 'Tipos de Tumores Ginecológicos'}
                        {specialty.title === 'Oncologia Gastrointestinal' && 'Tipos de Tumores Gastrointestinais'}
                      </h4>
                      <div className="space-y-4">
                        {specialty.modalContent.tumorTypes.map((tumor, tIndex) => (
                          <div key={tIndex} className="p-4 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                            <h5 className="font-semibold text-foreground mb-2">{tumor.name}</h5>
                            <p className="text-sm text-muted-foreground">{tumor.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {specialty.modalContent.studies && (
                    <div className="mt-8 pt-6 border-t border-primary/20">
                      <h4 className="font-display text-xl font-bold text-foreground mb-6">
                        Estudos abertos no Hospital Sírio-Libanês
                      </h4>
                      
                      <div className="space-y-4 mb-6">
                        {specialty.modalContent.studies.map((study, sIndex) => (
                          <div 
                            key={sIndex}
                            className="p-5 rounded-xl border transition-all duration-300 hover:shadow-md group"
                            style={{ 
                              backgroundColor: '#FAFAF7',
                              borderColor: '#EAEDEA'
                            }}
                            data-testid={`study-card-${sIndex}`}
                          >
                            <h5 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                              {study.title}
                            </h5>
                            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                              {study.description}
                            </p>
                            <button
                              onClick={() => window.open(study.link, '_blank')}
                              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                              data-testid={`link-study-${sIndex}`}
                            >
                              Ver detalhes
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <Button
                          onClick={() => window.open(specialty.modalContent.studyLink, '_blank')}
                          className="gap-2 flex-1"
                          variant="outline"
                          data-testid="button-research-studies"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Ver todos os estudos no Sírio
                        </Button>
                        <Button
                          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                          className="gap-2 flex-1 bg-green-600 hover:bg-green-700"
                          data-testid="button-research-whatsapp"
                        >
                          <FaWhatsapp className="w-5 h-5" />
                          Falar com a equipe
                        </Button>
                      </div>
                    </div>
                  )}

                  {specialty.modalContent.studyLink && !specialty.modalContent.studies && (
                    <div className="mt-8 pt-6 border-t border-primary/20">
                      <h4 className="font-display text-xl font-bold text-primary mb-4">
                        Estudos abertos no Hospital Sírio-Libanês
                      </h4>
                      <div className="flex flex-col sm:flex-row gap-3 mt-4">
                        <Button
                          onClick={() => window.open(specialty.modalContent.studyLink, '_blank')}
                          className="gap-2 flex-1"
                          variant="outline"
                          data-testid="button-research-studies"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Ver estudos no Sírio
                        </Button>
                        <Button
                          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                          className="gap-2 flex-1 bg-green-600 hover:bg-green-700"
                          data-testid="button-research-whatsapp"
                        >
                          <FaWhatsapp className="w-5 h-5" />
                          Falar com a equipe
                        </Button>
                      </div>
                    </div>
                  )}

                  {!specialty.modalContent.studyLink && (
                    <div className="mt-8 pt-6 border-t border-primary/20">
                      <Button
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                        className="w-full gap-2 bg-green-600 hover:bg-green-700 h-12 text-base"
                        data-testid={`button-whatsapp-${index}`}
                      >
                        <FaWhatsapp className="w-5 h-5" />
                        Agendar pelo WhatsApp
                      </Button>
                    </div>
                  )}
                </div>
            </DialogContent>
          </Dialog>
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
