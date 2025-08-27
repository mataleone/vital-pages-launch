import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, MapPin } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-card shadow-soft sticky top-0 z-50">
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
              <span className="text-sm font-semibold text-muted-foreground">Rede HSVP</span>
              <span className="text-lg font-bold text-foreground">Hospital Jaques Gonçalves Pereira</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">
              Início
            </a>
            <a href="#services" className="text-foreground hover:text-primary transition-smooth">
              Serviços
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              Sobre Nós
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contato
            </a>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>(11) 3456-7890</span>
            </div>
            <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground hover:text-primary"
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
              <div className="px-2 pt-4 space-y-2">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>(11) 3456-7890</span>
                </div>
                <Button className="w-full bg-gradient-primary">
                  Agendar Consulta
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;