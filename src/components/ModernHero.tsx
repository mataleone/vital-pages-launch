import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, ChevronDown, Scissors } from "lucide-react";
import { useState } from "react";

const ModernHero = () => {
  const [isSurgeryDropdownOpen, setIsSurgeryDropdownOpen] = useState(false);
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/a9e4cc63-eef5-4308-9bce-542fdb14620d.png" 
          alt="Hospital Jaques Gonçalves Pereira - Fachada Real" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-12">
        <div className="flex items-center h-screen">
          {/* Left Content */}
          <div className="text-white space-y-6 max-w-3xl">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2">
                <img 
                  src="/lovable-uploads/00897a29-1dbc-47fd-ad4c-da44171b9c7e.png" 
                  alt="HSVP Logo" 
                  className="h-5 md:h-6 w-auto"
                />
                <span className="text-xs md:text-sm font-medium">Rede HSVP</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                Hospital
                <span className="block text-white/90">Jaques Gonçalves</span>
                <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Pereira
                </span>
              </h1>
            </div>

            <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-lg">
              Excelência médica com atendimento humanizado. Referência regional 
              em cuidados de saúde com tecnologia de ponta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 flex items-center"
                  onClick={() => setIsSurgeryDropdownOpen(!isSurgeryDropdownOpen)}
                >
                  <Scissors className="mr-2 w-5 h-5" />
                  Agendar Cirurgia
                  <ChevronDown className="ml-2 w-5 h-5" />
                </Button>
                
                {isSurgeryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-xl z-50">
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
                        href="https://api.whatsapp.com/send/?phone=55319974042370"
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
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4"
                asChild
              >
                <a href="https://api.whatsapp.com/send/?phone=5531998678593&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 w-5 h-5" />
                  Agendar Consulta
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;