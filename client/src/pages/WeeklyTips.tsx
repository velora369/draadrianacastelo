import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, Users, Stethoscope, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { tips, type TipCategory } from "@shared/tips-data";

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

export default function WeeklyTips() {
  const [selectedCategory, setSelectedCategory] = useState<TipCategory>("patients");
  const [expandedTip, setExpandedTip] = useState<number | null>(null);
  const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const filteredTips = tips.filter(tip => tip.category === selectedCategory);

  const handleCollapse = (tipId: number) => {
    const cardElement = cardRefs.current[tipId];
    if (cardElement) {
      const cardTop = cardElement.getBoundingClientRect().top + window.scrollY;
      const offset = 100;
      
      setExpandedTip(null);
      
      setTimeout(() => {
        window.scrollTo({
          top: cardTop - offset,
          behavior: 'smooth'
        });
      }, 50);
    } else {
      setExpandedTip(null);
    }
  };

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
                  ref={(el) => (cardRefs.current[tip.id] = el)}
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
                        <div className="mt-8 flex flex-wrap gap-3 items-center">
                          <button
                            onClick={() => handleCollapse(tip.id)}
                            className="px-6 py-2.5 bg-gradient-to-r from-[#d4a574] to-[#b88d5f] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                            data-testid={`button-collapse-${tip.id}`}
                          >
                            Ler menos
                          </button>
                          {tip.link && (
                            <a
                              href={tip.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-6 py-2.5 bg-gradient-to-r from-[#1a3d5c] to-[#0f2a42] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2"
                              data-testid={`button-article-${tip.id}`}
                            >
                              Leia o Artigo Completo
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
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
