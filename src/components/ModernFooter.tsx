import { Instagram } from "lucide-react";

const ModernFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hospital Info */}
          <div>
            <div className="mb-6">
              <img 
                src="/lovable-uploads/00897a29-1dbc-47fd-ad4c-da44171b9c7e.png" 
                alt="RedeHSVP - Hospital Jaques Gonçalves Pereira" 
                className="h-12 w-auto mb-3"
              />
              <div className="text-base font-bold">RedeHSVP - Hospital Jaques Gonçalves Pereira</div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Como parte da Rede Hospitais São Vicente de Paulo, garantimos excelência em saúde, 
              combinando atendimento humanizado, tecnologia de ponta e equipe altamente especializada.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/hospital.jaquesgoncalvesp/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 hover:scale-110 rounded-xl flex items-center justify-center transition-all duration-300"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contatos</h4>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium text-white mb-1">Telefone</div>
                <div className="text-xs text-gray-300">(31) 2942-0524</div>
                <div className="text-xs text-gray-300">(31) 99867-8593</div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-white mb-1">Agendamento</div>
                <div className="text-xs text-gray-300">Francielly: (31) 97205-2830</div>
                <div className="text-xs text-gray-300">Julia: (31) 99740-4237</div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-white mb-1">E-mail</div>
                <div className="text-xs text-gray-300">recepcao.bo@redehsvp.com.br</div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div>
            <h4 className="text-lg font-bold mb-6">Localização</h4>
            <div className="space-y-2">
              <div className="text-sm font-medium text-white mb-1">Endereço</div>
              <div className="text-xs text-gray-300">Alameda Cruz Souza, N°500, Alex Müller</div>
              <div className="text-xs text-gray-300">Distrito de Cachoeira Escura</div>
              <div className="text-xs text-gray-300">Belo Oriente - MG, 35195-000</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 lg:mb-0">
              © {new Date().getFullYear()} RedeHSVP - Hospital Jaques Gonçalves Pereira. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-sm">
              Feito com ♥ por <a href="https://www.dataeast.com.br" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-primary transition-colors">Dataeast® Tecnologia</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;