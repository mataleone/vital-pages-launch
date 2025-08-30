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

        {/* Quality Policy Section - Compact Design */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-6">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Política da Qualidade
          </h3>
          
          {/* Main Policy Statement - Compact */}
          <div className="text-center mb-6">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A Política de Qualidade do Hospital Jaques Gonçalves Pereira tem como objetivo promover a melhoria contínua nos processos Médico Hospitalar, buscando sempre a satisfação de seus clientes e usuários.
            </p>
          </div>

          {/* Inline Cards - Horizontal Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Mission */}
            <div className="group bg-card rounded-xl p-4 border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm font-bold text-foreground">Missão</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-tight">
                Atendimentos de qualidade com eficiência e humanização.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-card rounded-xl p-4 border hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                  <Activity className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm font-bold text-foreground">Visão</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-tight">
                Ser referência local em excelência nos serviços de saúde.
              </p>
            </div>

            {/* Values */}
            <div className="group bg-card rounded-xl p-4 border hover:shadow-lg transition-all duration-300 hover:scale-105 sm:col-span-2">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-secondary rounded-lg flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform duration-300">
                  <UserCheck className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm font-bold text-foreground">Valores</h4>
              </div>
              <div className="flex flex-wrap gap-1">
                {['Honestidade', 'Humanização', 'Competência', 'Profissionalismo', 'Compromisso Social'].map((value, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 bg-primary/10 text-foreground rounded-md text-xs font-medium hover:bg-primary/20 transition-colors duration-300"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;