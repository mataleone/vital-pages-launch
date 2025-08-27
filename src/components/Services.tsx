import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Stethoscope, 
  Users,
  Activity,
  Shield
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: "Cardiologia",
      description: "Cuidados completos do coração com equipamentos de última geração",
      color: "text-red-500"
    },
    {
      icon: Brain,
      title: "Neurologia",
      description: "Diagnóstico e tratamento de distúrbios neurológicos",
      color: "text-purple-500"
    },
    {
      icon: Bone,
      title: "Ortopedia",
      description: "Tratamento de lesões e doenças do sistema musculoesquelético",
      color: "text-blue-500"
    },
    {
      icon: Eye,
      title: "Oftalmologia",
      description: "Cuidados especializados para a saúde dos seus olhos",
      color: "text-green-500"
    },
    {
      icon: Stethoscope,
      title: "Clínica Geral",
      description: "Atendimento médico geral para toda a família",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Pediatria",
      description: "Cuidados especializados para crianças e adolescentes",
      color: "text-secondary"
    },
    {
      icon: Activity,
      title: "Emergência",
      description: "Pronto atendimento 24 horas para emergências médicas",
      color: "text-orange-500"
    },
    {
      icon: Shield,
      title: "Medicina Preventiva",
      description: "Check-ups e exames preventivos para manter sua saúde",
      color: "text-accent"
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços médicos especializados 
            com foco no cuidado integral da sua saúde e bem-estar.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
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

        {/* CTA Section */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Precisa de mais informações sobre nossos serviços?
          </p>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-smooth">
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;