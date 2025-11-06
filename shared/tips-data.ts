export type TipCategory = "patients" | "doctors";

export interface Tip {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: TipCategory;
  link?: string;
  featured?: boolean;
}

export const tips: Tip[] = [
  {
    id: 1,
    category: "patients",
    title: "Exercício após a quimioterapia no câncer de cólon: uma nova recomendação baseada em evidências",
    date: "Novembro 2025",
    excerpt: "Por muito tempo, o exercício foi visto apenas como um hábito saudável. Hoje, sabemos que ele pode ser parte do tratamento oncológico.",
    link: "https://www.nejm.org/doi/full/10.1056/NEJMoa2502760",
    featured: true,
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
    date: "Novembro 2025",
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
    date: "Novembro 2025",
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
    date: "Novembro 2025",
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
    date: "Novembro 2025",
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
    date: "Novembro 2025",
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

export const getFeaturedTip = (): Tip | undefined => {
  return tips.find(tip => tip.featured);
};
