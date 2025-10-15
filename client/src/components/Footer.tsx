import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const whatsappNumber = '5561999999999'; //todo: remove mock functionality
  const instagramHandle = 'draadrianaoncologista'; //todo: remove mock functionality

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="animate-fade-in">
            <h3 className="font-display text-xl font-semibold mb-2">
              Dra. Adriana Castelo C. de Moura
            </h3>
            <p className="text-background/80">Oncologista</p>
          </div>

          <div className="animate-fade-in animation-delay-200">
            <h4 className="font-semibold mb-2">Horário de Atendimento</h4>
            <p className="text-background/80">
              Segunda a sexta<br />
              Das 8h às 19h
            </p>
          </div>

          <div className="animate-fade-in animation-delay-300">
            <h4 className="font-semibold mb-3">Redes Sociais</h4>
            <div className="flex gap-4">
              <button
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                className="w-10 h-10 rounded-full bg-background/10 hover-elevate active-elevate-2 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-background/20"
                data-testid="footer-whatsapp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open(`https://instagram.com/${instagramHandle}`, '_blank')}
                className="w-10 h-10 rounded-full bg-background/10 hover-elevate active-elevate-2 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-background/20"
                data-testid="footer-instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-background/60 text-sm">
            © 2025 Dra. Adriana Castelo C. de Moura | Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
