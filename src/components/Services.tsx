import { Card, CardContent } from "@/components/ui/card";
import { 
  Bed, 
  Building2, 
  Stethoscope, 
  Scissors,
  Activity,
  Shield,
  UserCheck,
  TestTube
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Bed,
      title: "50 Leitos de Internação",
      description: "Com capacidade para 50 leitos de internação, incluindo leitos pediátricos, o hospital atende 24 horas.",
      color: "text-primary"
    },
    {
      icon: Activity,
      title: "Pronto Atendimento",
      description: "8 leitos de observação (masculino, feminino e pediátrico) para atendimento emergencial.",
      color: "text-secondary"
    },
    {
      icon: Scissors,
      title: "Bloco Cirúrgico",
      description: "Salas cirúrgicas equipadas com tecnologia de ponta para cirurgias de médio porte.",
      color: "text-accent"
    },
    {
      icon: TestTube,
      title: "Exames Especializados",
      description: "Endoscopia, colonoscopia, exames laboratoriais e raio-x para diagnósticos rápidos.",
      color: "text-primary"
    }
  ];

  const facilities = [
    {
      icon: Building2,
      title: "Apartamento",
      description: "Nossos apartamentos proporcionam conforto e privacidade, com uma infraestrutura completa pensada para atender, com qualidade e comodidade, às necessidades de pacientes e acompanhantes."
    },
    {
      icon: UserCheck,
      title: "Enfermaria",
      description: "Nossas enfermarias oferecem um ambiente acolhedor e funcional, cuidadosamente projetado para garantir conforto e segurança aos pacientes durante a recuperação."
    },
    {
      icon: Shield,
      title: "Bloco Cirúrgico",
      description: "Equipado com tecnologia de ponta e respaldado por uma equipe altamente especializada, asseguramos excelência e segurança em cada procedimento."
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Oferecemos assistência completa aos pacientes com uma ampla gama de serviços médicos 
            especializados, permitindo diagnósticos rápidos e tratamentos ágeis.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card shadow-card hover:shadow-glow transition-bounce hover:-translate-y-2 border-0"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                    <service.icon className={`w-8 h-8 text-white`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Facilities Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Nossas Instalações
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <Card 
                key={index} 
                className="bg-card shadow-card hover:shadow-glow transition-bounce hover:-translate-y-2 border-0"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                    <facility.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">
                    {facility.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {facility.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-8 bg-gradient-card rounded-xl shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Cirurgias Eletivas
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
            Oferecemos uma ampla gama de cirurgias eletivas, realizadas com excelência e cuidado, 
            atendendo pacientes pelo SUS através de credenciamentos com as prefeituras, 
            além de atendimentos particulares.
          </p>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-smooth">
            Conheça Nossas Cirurgias
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;