import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin, Calendar, Scissors } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-card/95 backdrop-blur-md shadow-soft' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/00897a29-1dbc-47fd-ad4c-da44171b9c7e.png" 
              alt="Hospital Jaques Gonçalves Pereira" 
              className="h-10 w-auto"
            />
            <div className="flex flex-col">
              <span className={`text-lg font-bold transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>Hospital Jaques Gonçalves Pereira</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`transition-smooth ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}>
              Início
            </a>
            <a href="#services" className={`transition-smooth ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}>
              Serviços
            </a>
            <a href="#about" className={`transition-smooth ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}>
              Sobre Nós
            </a>
            <a href="#contact" className={`transition-smooth ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}>
              Contato
            </a>
          </nav>

          {/* Contact Info & Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex flex-col space-y-1 text-xs mr-4 transition-colors duration-300 ${
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
                <span>(31) 9999-8888</span>
              </div>
            </div>
            <Button 
              size="sm" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Calendar className="w-4 h-4 mr-1" />
              Consulta
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg"
            >
              <Scissors className="w-4 h-4 mr-1" />
              Cirurgia
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className={`md:hidden transition-colors duration-300 ${
              isScrolled ? 'text-foreground hover:text-primary' : 'text-white hover:text-white/80'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-smooth px-2"
              onClick={toggleMenu}
            >
              Início
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-smooth px-2"
              onClick={toggleMenu}
            >
              Serviços
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-primary transition-smooth px-2"
              onClick={toggleMenu}
            >
              Sobre Nós
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-smooth px-2"
              onClick={toggleMenu}
            >
              Contato
            </a>
              <div className="px-2 pt-4 space-y-3">
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Phone className="w-4 h-4" />
                    <span>(31) 2942-0534</span>
                  </div>
                  <div className="flex items-center space-x-1 text-primary">
                    <Phone className="w-4 h-4" />
                    <span>(31) 9999-8888 (WhatsApp)</span>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Consulta
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
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