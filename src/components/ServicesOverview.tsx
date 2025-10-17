import { Card, CardContent } from "@/components/ui/card";
import { 
  Bed, 
  Activity, 
  Scissors,
  TestTube,
  Clock,
  Heart,
  Building2,
  Users
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Bed,
      title: "50 Leitos",
      description: "Internação completa 24h"
    },
    {
      icon: Activity,
      title: "Pronto Atendimento",
      description: "Emergência com 8 leitos"
    },
    {
      icon: Scissors,
      title: "Bloco Cirúrgico",
      description: "Cirurgias de médio porte"
    },
    {
      icon: TestTube,
      title: "Exames",
      description: "Endoscopia, colonoscopia, raio-x"
    },
    {
      icon: Clock,
      title: "24 Horas",
      description: "Atendimento contínuo"
    },
    {
      icon: Heart,
      title: "SUS + Particular",
      description: "Múltiplas formas de atendimento"
    }
  ];

  const facilities = [
    {
      icon: Building2,
      title: "Apartamentos Confortáveis",
      description: "Privacidade e infraestrutura completa para pacientes e acompanhantes"
    },
    {
      icon: Users,
      title: "Enfermarias Acolhedoras", 
      description: "Ambiente funcional projetado para conforto e segurança na recuperação"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Assistência completa com diagnósticos rápidos e tratamentos ágeis
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-card hover:shadow-glow transition-bounce hover:-translate-y-2 border-0"
            >
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {service.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facilities.map((facility, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-card hover:shadow-glow transition-bounce hover:-translate-y-2 border-0"
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <facility.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">
                    {facility.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {facility.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;