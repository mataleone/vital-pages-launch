import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/00897a29-1dbc-47fd-ad4c-da44171b9c7e.png" 
                alt="Hospital Jaques Gonçalves Pereira" 
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Rede HSVP</span>
                <span className="text-lg font-bold">Hospital Jaques Gonçalves Pereira</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Referência em atendimento médico com excelência, tecnologia e humanização. 
              50 leitos, pronto atendimento 24h e equipe multiprofissional.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-smooth"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-smooth"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary rounded-full flex items-center justify-center hover:bg-primary-glow transition-smooth"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-smooth">
                  Início
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-smooth">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-smooth">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-smooth">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-smooth">
                  Cirurgia Geral
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-smooth">
                  Cirurgia Ortopédica
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-smooth">
                  Cirurgia Ginecológica
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-smooth">
                  Endoscopia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-smooth">
                  Pronto Atendimento 24h
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-glow mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Consulte nosso atendimento<br />
                  para informações de localização
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-glow flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Entre em contato conosco
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-glow flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Informações e agendamentos
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary-glow mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Emergência 24h<br />
                  Consultas: 6h às 22h
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Rede HSVP - Hospital Jaques Gonçalves Pereira. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-smooth">
                Código de Ética
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;