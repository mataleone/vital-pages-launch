import { Instagram } from "lucide-react";

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
                alt="RedeHSVP - Hospital Jaques Gonçalves Pereira" 
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold">RedeHSVP - Hospital Jaques Gonçalves Pereira</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Sua saúde em boas mãos. Referência em atendimento médico com excelência, 
              tecnologia e humanização. 50 leitos, pronto atendimento 24h e equipe multiprofissional.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/hospital.jaquesgoncalvesp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
              >
                <Instagram className="w-4 h-4 text-white" />
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
            <h4 className="text-lg font-semibold mb-4">Contatos</h4>
            <div className="space-y-3">
              <div className="text-gray-300 text-sm">
                <strong>Telefone:</strong><br />
                Recepção: (31) 2942-0524<br />
                (31) 99867-8593
              </div>
              <div className="text-gray-300 text-sm">
                <strong>Agendamento:</strong><br />
                (31) 99867-8593<br />
                (31) 8888-9999<br />
                (31) 8555-5555
              </div>
              <div className="text-gray-300 text-sm">
                <strong>E-mail:</strong><br />
                recepcao.bo@redehsvp.com.br
              </div>
              <div className="text-gray-300 text-sm">
                <strong>Endereço:</strong><br />
                Alameda Cruz F Souza, N°500<br />
                Distrito de Cachoeira Escura<br />
                Belo Oriente - MG, 35195-000
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Rede HSVP - Hospital Jaques Gonçalves Pereira. Todos os direitos reservados.
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
              <div className="text-gray-400">
                Feito com ♥ por <span className="text-primary-glow font-semibold">Dataeast® Tecnologia</span>
              </div>
              <div className="flex space-x-6">
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
      </div>
    </footer>
  );
};

export default Footer;