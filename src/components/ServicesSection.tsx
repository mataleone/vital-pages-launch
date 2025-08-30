import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  Scissors, 
  TestTube, 
  Heart,
  Shield,
  Activity,
  Building2,
  UserCheck
} from "lucide-react";
import hospitalRoom from "@/assets/hospital-room.jpg";
import emergencyRoom from "@/assets/emergency-room.jpg";
import surgeryRoom from "@/assets/surgery-room.jpg";

const ServicesSection = () => {
  const mainServices = [
    {
      icon: Stethoscope,
      title: "Consultas Especializadas",
      description: "Equipe médica especializada em diversas áreas",
      color: "from-primary to-primary-glow"
    },
    {
      icon: Scissors,
      title: "Cirurgias",
      description: "Bloco cirúrgico equipado com tecnologia de ponta",
      color: "from-secondary to-accent"
    },
    {
      icon: TestTube,
      title: "Exames Diagnósticos",
      description: "Endoscopia, colonoscopia e exames laboratoriais",
      color: "from-accent to-secondary"
    },
    {
      icon: Activity,
      title: "Pronto Atendimento",
      description: "Atendimento de emergência 24 horas por dia",
      color: "from-primary to-secondary"
    }
  ];

  const facilities = [
    {
      icon: Building2,
      title: "Apartamentos Premium",
      description: "Conforto e privacidade para pacientes e acompanhantes",
      features: ["Banheiro privativo", "TV a cabo", "Ar condicionado", "WiFi gratuito"]
    },
    {
      icon: UserCheck,
      title: "Enfermarias Confortáveis",
      description: "Ambiente acolhedor com cuidados especializados",
      features: ["Enfermagem 24h", "Monitoramento", "Ambiente climatizado", "Visitas flexíveis"]
    },
    {
      icon: Shield,
      title: "Centro Cirúrgico",
      description: "Tecnologia avançada para procedimentos seguros",
      features: ["Equipamentos modernos", "Equipe especializada", "Protocolos rígidos", "Recuperação assistida"]
    }
  ];

  return (
    <section id="services" className="py-12 bg-background">{/* Reduced from py-20 */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">{/* Reduced from mb-16 */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma gama completa de serviços médicos com qualidade excepcional 
            e atendimento humanizado para cuidar da sua saúde.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">{/* Reduced gaps and margin */}
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-card"
            >
              <CardContent className="p-6 text-center">{/* Reduced from p-8 */}
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Policy Section */}
        <div>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Política da Qualidade
          </h3>
          
          {/* Policy Statement */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-8 text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-lg text-foreground leading-relaxed">
                  A Política de Qualidade do Hospital Jaques Gonçalves Pereira tem como objetivo promover a melhoria contínua nos processos Médico Hospitalar, buscando sempre a satisfação de seus clientes e usuários.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Mission, Vision, Values Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Mission */}
            <Card className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-card">
              <CardContent className="p-6 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Missão
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Proporcionar aos clientes e usuários atendimentos de qualidade, prestando serviços assistenciais com eficiência e humanização.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-card">
              <CardContent className="p-6 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Visão
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência local em atendimentos hospitalares com excelência na prestação de serviços em saúde.
                </p>
              </CardContent>
            </Card>

            {/* Values */}
            <Card className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-card">
              <CardContent className="p-6 text-center h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Valores
                </h4>
                <ul className="text-muted-foreground leading-relaxed space-y-2 text-left">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Honestidade
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Humanização
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Competência
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Profissionalismo
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Compromisso Social
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;