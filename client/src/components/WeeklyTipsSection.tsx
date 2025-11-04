import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function WeeklyTipsSection() {
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

        <div className="max-w-2xl mx-auto">
          <Link href="/dicas-da-semana">
            <div
              className="group cursor-pointer bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-[#d4a574] dark:hover:border-[#d4a574]"
              data-testid="card-weekly-tips"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-[#1a3d5c] dark:text-blue-300 mb-3 group-hover:text-[#d4a574] dark:group-hover:text-[#d4a574] transition-colors">
                    Acessar Dicas da Semana
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Explore conteúdos para pacientes e profissionais de saúde
                  </p>
                </div>
                <div className="ml-6">
                  <div className="w-14 h-14 bg-[#d4a574] dark:bg-[#d4a574] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-7 h-7 text-white" />
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
