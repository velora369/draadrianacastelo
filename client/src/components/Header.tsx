import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappNumber = '5561999999999'; //todo: remove mock functionality
  const whatsappMessage = 'Olá, gostaria de agendar uma consulta com a Dra. Adriana';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-transform duration-300 hover:scale-105"
            data-testid="logo-button"
          >
            <img 
              src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/10/logo.webp" 
              alt="Dra. Adriana Castelo C. de Moura - Oncologista"
              className="h-12 md:h-14 w-auto"
            />
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="nav-inicio"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="nav-sobre"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('especialidades')} 
              className="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="nav-especialidades"
            >
              Especialidades
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')} 
              className="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="nav-depoimentos"
            >
              Depoimentos
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
              data-testid="nav-contato"
            >
              Contato
            </button>
          </nav>

          <div className="hidden lg:block">
            <Button 
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              className="gap-2"
              data-testid="button-agendar-header"
            >
              <FaWhatsapp className="w-5 h-5" />
              Agendar Consulta
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className="text-left text-foreground hover-elevate active-elevate-2 px-4 py-3 rounded-md"
                data-testid="nav-mobile-inicio"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')} 
                className="text-left text-foreground hover-elevate active-elevate-2 px-4 py-3 rounded-md"
                data-testid="nav-mobile-sobre"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('especialidades')} 
                className="text-left text-foreground hover-elevate active-elevate-2 px-4 py-3 rounded-md"
                data-testid="nav-mobile-especialidades"
              >
                Especialidades
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')} 
                className="text-left text-foreground hover-elevate active-elevate-2 px-4 py-3 rounded-md"
                data-testid="nav-mobile-depoimentos"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('contato')} 
                className="text-left text-foreground hover-elevate active-elevate-2 px-4 py-3 rounded-md"
                data-testid="nav-mobile-contato"
              >
                Contato
              </button>
              <Button 
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                className="gap-2 mt-2"
                data-testid="button-agendar-mobile"
              >
                <FaWhatsapp className="w-5 h-5" />
                Agendar Consulta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
