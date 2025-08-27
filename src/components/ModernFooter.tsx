import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Heart } from "lucide-react";

const ModernFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hospital Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/00897a29-1dbc-47fd-ad4c-da44171b9c7e.png" 
                alt="Hospital Jaques Gonçalves Pereira" 
                className="h-10 w-auto"
              />
              <div>
                <div className="text-sm text-gray-400">Rede HSVP</div>
                <div className="text-lg font-bold">Hospital Jaques Gonçalves Pereira</div>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Parte da Rede Hospitais São Vicente de Paulo, oferecemos excelência em 
              saúde com atendimento humanizado, tecnologia de ponta e equipe especializada.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary/20 hover:bg-primary rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {[
                { label: "Início", href: "#home" },
                { label: "Serviços", href: "#services" },
                { label: "Sobre Nós", href: "#about" },
                { label: "Contato", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Cirurgia Geral",
                "Pronto Atendimento",
                "Internação",
                "Exames Diagnósticos",
                "Endoscopia",
                "Colonoscopia"
              ].map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 flex items-center group cursor-pointer hover:text-white transition-colors">
                    <div className="w-1 h-1 bg-secondary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">Localização</div>
              <div className="text-xs text-gray-400">Consulte-nos para endereço</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
              <Phone className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <div className="text-sm font-medium">Telefone</div>
              <div className="text-xs text-gray-400">Entre em contato</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <div className="text-sm font-medium">Emergência 24h</div>
              <div className="text-xs text-gray-400">Atendimento contínuo</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-medium">E-mail</div>
              <div className="text-xs text-gray-400">Informações gerais</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0 flex items-center">
              <span>© 2024 Rede HSVP - Hospital Jaques Gonçalves Pereira. Feito com</span>
              <Heart className="w-4 h-4 text-red-500 mx-2" />
              <span>para cuidar da sua saúde.</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Código de Ética
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;