import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Users, Stethoscope, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ContentSection {
  type: 'paragraph' | 'heading' | 'list';
  content: string | string[];
}

function parseContent(content: string): ContentSection[] {
  const sections: ContentSection[] = [];
  const lines = content.split('\n');
  
  let currentList: string[] = [];
  
  lines.forEach((line) => {
    const trimmed = line.trim();
    
    if (!trimmed) {
      if (currentList.length > 0) {
        sections.push({ type: 'list', content: currentList });
        currentList = [];
      }
      return;
    }
    
    if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      if (currentList.length > 0) {
        sections.push({ type: 'list', content: currentList });
        currentList = [];
      }
      const heading = trimmed.replace(/\*\*/g, '');
      if (heading.trim()) {
        sections.push({ type: 'heading', content: heading.trim() });
      }
    }
    else if (trimmed.startsWith('•') || /^\d+\./.test(trimmed)) {
      const item = trimmed.replace(/^[•\d+\.\s]+/, '').trim();
      if (item) {
        currentList.push(item);
      }
    }
    else {
      if (currentList.length > 0) {
        sections.push({ type: 'list', content: currentList });
        currentList = [];
      }
      sections.push({ type: 'paragraph', content: trimmed });
    }
  });
  
  if (currentList.length > 0) {
    sections.push({ type: 'list', content: currentList });
  }
  
  return sections;
}

type TipCategory = "patients" | "doctors";

interface Tip {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: TipCategory;
  link?: string;
}

const tips: Tip[] = [
  {
    id: 1,
    category: "patients",
    title: "Exercício após a quimioterapia no câncer de cólon: uma nova recomendação baseada em evidências",
    date: "Novembro 2024",
    excerpt: "Por muito tempo, o exercício foi visto apenas como um hábito saudável. Hoje, sabemos que ele pode ser parte do tratamento oncológico.",
    content: `Por muito tempo, o exercício foi visto apenas como um hábito saudável. Hoje, sabemos que ele pode ser parte do tratamento oncológico.

Um grande estudo internacional, publicado em junho de 2025 no The New England Journal of Medicine (Courneya et al., Structured Exercise after Adjuvant Chemotherapy for Colon Cancer), acompanhou quase 900 pacientes que haviam concluído a quimioterapia adjuvante para câncer de cólon.

Os participantes foram divididos em dois grupos: um seguiu um programa estruturado de exercícios físicos por três anos, com acompanhamento profissional; o outro recebeu apenas orientações gerais de saúde.

**Os resultados foram expressivos:**
• O grupo que praticou exercícios regulares teve menor risco de recidiva do câncer e maior sobrevida global.
• Após cinco anos, 80% dos pacientes do grupo de exercício estavam livres da doença, contra 74% no grupo controle.
• Além disso, houve melhora significativa na disposição, força e qualidade de vida.

**O que isso significa na prática**

Para pacientes que concluíram o tratamento do câncer de cólon, o exercício não é apenas permitido — é recomendado como parte do plano de cuidados.

O ideal é um programa supervisionado, ajustado às condições de cada pessoa, com atividades aeróbicas (como caminhada acelerada, bicicleta ou natação) e exercícios de fortalecimento.
A meta é atingir cerca de 150 minutos de atividade moderada por semana, sob orientação médica e acompanhamento de um profissional de exercício ou fisioterapeuta.

Como toda terapia, o exercício deve ser prescrito com bom senso e segurança, respeitando o ritmo, as limitações e o momento de cada paciente.

**Minha recomendação**

Após o término da quimioterapia adjuvante, oriento que o paciente — se clinicamente estável — inicie um programa estruturado e supervisionado de exercícios, como coadjuvante da reabilitação oncológica.
O movimento, nesse contexto, torna-se parte do tratamento, contribuindo não apenas para o bem-estar, mas também para reduzir o risco de recidiva e prolongar a sobrevida.

Mais do que uma mudança de estilo de vida, é uma forma de continuar cuidando da própria saúde — com disciplina, propósito e esperança.`
  },
  {
    id: 2,
    category: "patients",
    title: "Alimentação durante o tratamento oncológico",
    date: "Novembro 2024",
    excerpt: "Uma nutrição adequada pode fazer toda a diferença no seu tratamento. Entenda como se alimentar melhor durante a quimioterapia.",
    content: `Durante o tratamento oncológico, manter uma alimentação adequada é fundamental para fortalecer o sistema imunológico, manter o peso e melhorar a qualidade de vida.

**Dicas importantes:**
• Faça pequenas refeições ao longo do dia, em vez de grandes refeições
• Mantenha-se hidratado, bebendo água regularmente
• Prefira alimentos de fácil digestão quando sentir náuseas
• Consuma proteínas de qualidade para ajudar na recuperação
• Evite alimentos crus se sua imunidade estiver baixa

**Alimentos recomendados:**
• Frutas e vegetais bem lavados e cozidos
• Carnes magras, peixes e ovos bem cozidos
• Cereais integrais
• Laticínios pasteurizados
• Leguminosas (feijão, lentilha, grão-de-bico)

Converse sempre com seu oncologista e nutricionista para um plano alimentar personalizado às suas necessidades e ao seu tratamento.`
  },
  {
    id: 3,
    category: "patients",
    title: "Cuidados com a pele durante a radioterapia",
    date: "Novembro 2024",
    excerpt: "A radioterapia pode causar alterações na pele. Saiba como proteger e cuidar da área tratada.",
    content: `A radioterapia é um tratamento eficaz contra o câncer, mas pode causar reações na pele da área tratada. Aqui estão cuidados importantes para minimizar o desconforto:

**Durante o tratamento:**
• Use roupas folgadas e de algodão sobre a área tratada
• Lave a área apenas com água morna e sabonete neutro
• Não aplique produtos sem orientação médica (perfumes, desodorantes, cremes)
• Evite exposição solar direta na área tratada
• Não esfregue ou coce a pele

**Sintomas comuns:**
• Vermelhidão (semelhante a queimadura solar)
• Sensibilidade aumentada
• Descamação leve
• Sensação de calor local

**Quando procurar ajuda:**
Se você notar bolhas, feridas abertas, dor intensa ou sinais de infecção, entre em contato com sua equipe médica imediatamente.

Lembre-se: cada pessoa reage de forma diferente ao tratamento. Siga sempre as orientações específicas da sua equipe de radioterapia.`
  },
  {
    id: 4,
    category: "doctors",
    title: "ASCO 2024: Avanços em Imunoterapia para Melanoma Metastático",
    date: "Novembro 2024",
    excerpt: "Resultados promissores de terapia combinada com inibidores de checkpoint mostram aumento de sobrevida global em 5 anos.",
    content: `Estudo apresentado no ASCO 2024 demonstra resultados promissores com terapia combinada de inibidores de checkpoint (anti-PD-1 + anti-CTLA-4) em melanoma metastático.

**Principais achados:**
• Sobrevida global em 5 anos de 52% vs 38% (monoterapia)
• Taxa de resposta objetiva de 58%
• Perfil de toxicidade gerenciável com protocolos estabelecidos

**Referência:** 
CheckMate 067 Update - Long-term Outcomes, ASCO Annual Meeting 2024

**Implicações clínicas:**
A terapia combinada continua sendo o padrão-ouro para pacientes com melanoma metastático não tratados previamente, especialmente aqueles com alta carga tumoral.`,
    link: "https://www.asco.org"
  },
  {
    id: 5,
    category: "doctors",
    title: "Biomarcadores Preditivos em Câncer de Pulmão: Atualização 2024",
    date: "Novembro 2024",
    excerpt: "Novas mutações druggables identificadas ampliam opções terapêuticas para pacientes com NSCLC avançado.",
    content: `Revisão publicada no Journal of Clinical Oncology destaca avanços na identificação de biomarcadores preditivos em câncer de pulmão de células não pequenas (NSCLC).

**Principais biomarcadores:**
• EGFR (exons 18-21) - terapias direcionadas de 1ª a 4ª geração
• ALK - inibidores de tirosina quinase de nova geração
• ROS1, BRAF V600E, MET exon 14 skipping
• KRAS G12C - inibidores específicos aprovados
• Fusões de NTRK e RET

**Testagem recomendada:**
Painel molecular amplo (NGS) é recomendado para todos os pacientes com adenocarcinoma avançado, independentemente de história de tabagismo.

**Referência:**
Lung Cancer Biomarker Testing: Current State and Future Directions, JCO 2024`,
    link: "https://ascopubs.org/journal/jco"
  },
  {
    id: 6,
    category: "doctors",
    title: "Novos Guidelines para Manejo de Toxicidades de Imunoterapia",
    date: "Novembro 2024",
    excerpt: "NCCN e ESMO publicam diretrizes atualizadas para identificação precoce e manejo de eventos adversos imuno-relacionados.",
    content: `As sociedades NCCN e ESMO publicaram diretrizes atualizadas para o manejo de toxicidades relacionadas à imunoterapia (irAEs).

**Destaques das atualizações:**
• Algoritmos para gradação de toxicidades por sistema
• Indicações precisas para corticoterapia
• Uso de imunossupressores alternativos (infliximab, micofenolato)
• Critérios para retomada da imunoterapia após irAE
• Manejo de toxicidades raras (miocardite, encefalite)

**Princípios fundamentais:**
1. Monitorização proativa com biomarcadores
2. Intervenção precoce em toxicidades grau 2+
3. Equipe multidisciplinar para toxicidades graves
4. Documentação detalhada para decisões compartilhadas

**Referência:**
NCCN Guidelines: Management of Immunotherapy-Related Toxicities, Version 2.2024`,
    link: "https://www.nccn.org"
  }
];

export default function WeeklyTips() {
  const [selectedCategory, setSelectedCategory] = useState<TipCategory>("patients");
  const [expandedTip, setExpandedTip] = useState<number | null>(null);

  const filteredTips = tips.filter(tip => tip.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 dark:from-gray-950 to-white dark:to-gray-900">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link href="/">
            <button
              className="mb-8 flex items-center gap-2 text-[#1a3d5c] dark:text-blue-300 hover:text-[#d4a574] dark:hover:text-[#d4a574] transition-all px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
              data-testid="button-back-home"
            >
              <ArrowLeft className="w-5 h-5" />
              Voltar para a página inicial
            </button>
          </Link>

          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1a3d5c] dark:text-blue-300 mb-4">
                Dicas da Semana
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Conteúdos selecionados para manter você informado sobre os avanços 
                em oncologia e cuidados com a saúde
              </p>
            </div>

            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              <button
                onClick={() => setSelectedCategory("patients")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === "patients"
                    ? "bg-[#d4a574] text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                data-testid="button-category-patients"
              >
                <Users className="w-5 h-5" />
                Para Pacientes
              </button>
              <button
                onClick={() => setSelectedCategory("doctors")}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === "doctors"
                    ? "bg-[#1a3d5c] text-white shadow-lg"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                data-testid="button-category-doctors"
              >
                <Stethoscope className="w-5 h-5" />
                Para Médicos
              </button>
            </div>

            <div className="grid gap-6">
              {filteredTips.map((tip) => (
                <div
                  key={tip.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-gray-200 dark:border-gray-700"
                  data-testid={`card-tip-${tip.id}`}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-[#1a3d5c] dark:text-blue-300 flex-1 pr-4">
                        {tip.title}
                      </h3>
                      {tip.link && (
                        <a
                          href={tip.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#d4a574] hover:text-[#b88d5f] transition-colors"
                          data-testid={`link-external-${tip.id}`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{tip.date}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {tip.excerpt}
                    </p>

                    {expandedTip === tip.id ? (
                      <div className="mt-6 pt-6 border-t-2 border-[#d4a574]/20">
                        <article className="prose prose-lg dark:prose-invert max-w-none">
                          {parseContent(tip.content).map((section, idx) => {
                            if (section.type === 'heading') {
                              return (
                                <h3 
                                  key={idx} 
                                  className="text-2xl font-bold text-[#1a3d5c] dark:text-blue-300 mt-8 mb-4 first:mt-0"
                                >
                                  {section.content as string}
                                </h3>
                              );
                            }
                            
                            if (section.type === 'list') {
                              return (
                                <ul key={idx} className="space-y-3 my-6">
                                  {(section.content as string[]).map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex items-start gap-3">
                                      <CheckCircle2 className="w-5 h-5 text-[#d4a574] mt-0.5 flex-shrink-0" />
                                      <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              );
                            }
                            
                            return (
                              <p 
                                key={idx} 
                                className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4 text-base"
                              >
                                {section.content as string}
                              </p>
                            );
                          })}
                        </article>
                        <button
                          onClick={() => setExpandedTip(null)}
                          className="mt-8 px-6 py-2.5 bg-gradient-to-r from-[#d4a574] to-[#b88d5f] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                          data-testid={`button-collapse-${tip.id}`}
                        >
                          Ler menos
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setExpandedTip(tip.id)}
                        className="px-6 py-2.5 bg-gradient-to-r from-[#d4a574] to-[#b88d5f] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                        data-testid={`button-expand-${tip.id}`}
                      >
                        Ler mais
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
