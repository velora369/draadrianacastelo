import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { getFeaturedTip } from "@shared/tips-data";

export default function WeeklyTipsSection() {
  const featuredTip = getFeaturedTip();
  
  return (
    <section id="dicas" className="py-20 bg-gradient-to-b from-white dark:from-gray-950 to-gray-50 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3d5c] dark:text-blue-300 mb-6">
            Dicas da Semana
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
            Conteúdos cuidadosamente selecionados para mantê-lo informado e atualizado. 
            Aqui você encontrará dicas práticas para pacientes e suas famílias, além de 
            artigos científicos e atualizações relevantes para profissionais da área médica.
          </p>
          <p className="text-md text-gray-600 dark:text-gray-400 mb-10">
            Uma fonte confiável de conhecimento, trazendo ciência e humanidade para o cuidado oncológico.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Link href="/dicas-da-semana">
            <div
              className="group cursor-pointer relative"
              style={{
                transform: 'rotate(-1.5deg)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotate(0deg) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotate(-1.5deg) scale(1)';
              }}
              data-testid="card-weekly-tips"
            >
              <div className="absolute -top-3 -right-3 z-10">
                <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1 animate-pulse">
                  <Sparkles className="w-3 h-3" />
                  NOVA DICA!
                </div>
              </div>
              
              <div
                className="bg-gradient-to-br from-yellow-100 via-yellow-50 to-amber-50 dark:from-yellow-900/40 dark:via-yellow-800/30 dark:to-amber-900/40 rounded-sm p-8 relative overflow-hidden"
                style={{
                  boxShadow: '8px 8px 20px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.1)',
                  borderTop: '1px solid rgba(255, 255, 255, 0.8)'
                }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-yellow-200/60 dark:bg-yellow-700/40 rounded-b-lg" 
                     style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                </div>

                <div className="relative">
                  <div className="mb-4">
                    <div className="inline-block bg-[#d4a574] text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
                      Dica da Semana
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a3d5c] dark:text-yellow-200 mb-3 leading-tight font-handwriting">
                      {featuredTip ? featuredTip.title : "Acessar Dicas da Semana"}
                    </h3>
                  </div>

                  {featuredTip && (
                    <p className="text-gray-800 dark:text-yellow-100/90 text-sm md:text-base mb-4 line-clamp-2 italic">
                      "{featuredTip.excerpt}"
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-yellow-300/50 dark:border-yellow-700/50">
                    <span className="text-[#1a3d5c] dark:text-yellow-200 font-semibold text-sm flex items-center gap-2">
                      <span>Clique para ler mais</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
