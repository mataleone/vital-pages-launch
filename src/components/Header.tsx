
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Calendar, Scissors, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSurgeryDropdownOpen, setIsSurgeryDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-card/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/00897a29-1dbc-47fd-ad4c-da44171b9c7e.png" 
              alt="RedeHSVP - Hospital Jaques Gonçalves Pereira" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`transition-all duration-500 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}>
              Início
            </a>
            <a href="#services" className={`transition-all duration-500 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}>
              Serviços
            </a>
            <a href="#about" className={`transition-all duration-500 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}>
              Sobre Nós
            </a>
            <a href="#contact" className={`transition-all duration-500 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}>
              Contato
            </a>
          </nav>

          {/* Contact Info & Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex flex-col space-y-1 text-xs mr-4 transition-colors duration-500 ${
              isScrolled ? 'text-muted-foreground' : 'text-white/80'
            }`}>
              <div className="flex items-center space-x-1">
                <Phone className="w-3 h-3" />
                <span>(31) 2942-0534</span>
              </div>
              <div className={`flex items-center space-x-1 ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                <Phone className="w-3 h-3" />
                <span>(31) 99867-8593</span>
              </div>
            </div>
            <Button 
              size="sm" 
              className={`transition-all duration-500 ${
                isScrolled
                  ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg'
                  : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
              }`}
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=5531998678593&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                <Calendar className="w-4 h-4 mr-1" />
                Consulta
              </a>
            </Button>
            <div className="relative">
              <Button 
                size="sm" 
                className={`transition-all duration-500 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg'
                    : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
                }`}
                onClick={() => setIsSurgeryDropdownOpen(!isSurgeryDropdownOpen)}
              >
                <Scissors className="w-4 h-4 mr-1" />
                Cirurgia
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
              
              {isSurgeryDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl z-50">
                  <div className="p-2">
                    <a
                      href="https://api.whatsapp.com/send/?phone=5531972052830"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      onClick={() => setIsSurgeryDropdownOpen(false)}
                    >
                      <Phone className="w-4 h-4 mr-3" />
                      Agendamento - Francielly
                    </a>
                    <a
                      href="https://api.whatsapp.com/send/?phone=5531997404237"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center w-full px-4 py-3 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                      onClick={() => setIsSurgeryDropdownOpen(false)}
                    >
                      <Phone className="w-4 h-4 mr-3" />
                      Agendamento - Julia
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden transition-colors duration-500 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden py-4 border-t transition-colors duration-300 ${
            isScrolled ? 'border-border bg-card/95' : 'border-white/20 bg-black/20 backdrop-blur-md'
          }`}>
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className={`transition-colors duration-300 px-2 ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}
              onClick={toggleMenu}
            >
              Início
            </a>
            <a 
              href="#services" 
              className={`transition-colors duration-300 px-2 ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a 
              href="#about" 
              className={`transition-colors duration-300 px-2 ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}
              onClick={toggleMenu}
            >
              Sobre Nós
            </a>
            <a 
              href="#contact" 
              className={`transition-colors duration-300 px-2 ${
                isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
              }`}
              onClick={toggleMenu}
            >
              Contato
            </a>
              <div className="px-2 pt-4 space-y-3">
                <div className={`flex flex-col space-y-2 text-sm transition-colors duration-300 ${
                  isScrolled ? 'text-muted-foreground' : 'text-white/80'
                }`}>
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>(31) 2942-0534</span>
                  </div>
                  <div className={`flex items-center space-x-1 ${
                    isScrolled ? 'text-primary' : 'text-white'
                  }`}>
                    <Phone className="w-4 h-4" />
                    <span>(31) 99867-8593 (WhatsApp)</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      isScrolled
                        ? 'bg-gradient-to-r from-primary to-secondary'
                        : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                    }`}
                    asChild
                  >
                    <a href="https://api.whatsapp.com/send/?phone=5531998678593&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Consulta
                    </a>
                  </Button>
                  <Button className={`w-full transition-all duration-300 ${
                    isScrolled
                      ? 'bg-gradient-to-r from-primary to-secondary'
                      : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                  }`}>
                    <Scissors className="w-4 h-4 mr-2" />
                    Agendar Cirurgia
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
