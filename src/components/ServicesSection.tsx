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

        {/* Quality Policy Section - Infographic Style */}
        <div className="relative py-8">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            Política da Qualidade
          </h3>
          
          {/* Central Hub Design */}
          <div className="relative max-w-5xl mx-auto">
            {/* Main Policy - Central Circle */}
            <div className="relative z-10 mx-auto w-80 h-80 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full flex items-center justify-center border-2 border-primary/30 hover:scale-105 transition-all duration-500 group">
              <div className="w-72 h-72 bg-card rounded-full shadow-xl flex items-center justify-center border border-primary/20 group-hover:shadow-2xl transition-all duration-500">
                <div className="text-center p-6">
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500" />
                  <h4 className="text-lg font-bold text-foreground mb-3">Política da Qualidade</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Promover a melhoria contínua nos processos médico hospitalares, buscando sempre a satisfação de clientes e usuários.
                  </p>
                </div>
              </div>
            </div>

            {/* Connected Elements - Orbital Layout */}
            {/* Mission - Top Left */}
            <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 group animate-fade-in" style={{animationDelay: '0.2s'}}>
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-16 left-16 w-32 h-px bg-gradient-to-r from-primary/60 to-transparent"></div>
                <div className="absolute top-16 left-16 w-px h-32 bg-gradient-to-b from-primary/60 to-transparent"></div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-white">
                    <Heart className="w-6 h-6 mx-auto mb-1" />
                    <div className="text-xs font-bold">MISSÃO</div>
                  </div>
                </div>
                <div className="mt-2 w-32 text-center">
                  <p className="text-xs text-muted-foreground leading-tight">
                    Atendimentos de qualidade com eficiência e humanização
                  </p>
                </div>
              </div>
            </div>

            {/* Vision - Top Right */}
            <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 group animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute top-16 right-16 w-32 h-px bg-gradient-to-l from-secondary/60 to-transparent"></div>
                <div className="absolute top-16 right-0 w-px h-32 bg-gradient-to-b from-secondary/60 to-transparent"></div>
                
                <div className="w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-white">
                    <Activity className="w-6 h-6 mx-auto mb-1" />
                    <div className="text-xs font-bold">VISÃO</div>
                  </div>
                </div>
                <div className="mt-2 w-32 text-center">
                  <p className="text-xs text-muted-foreground leading-tight">
                    Ser referência local em excelência nos serviços de saúde
                  </p>
                </div>
              </div>
            </div>

            {/* Values - Bottom Center */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 group animate-fade-in" style={{animationDelay: '0.6s'}}>
              <div className="relative">
                {/* Connection Line */}
                <div className="absolute -top-8 left-1/2 w-px h-16 bg-gradient-to-t from-accent/60 to-transparent"></div>
                
                <div className="w-40 h-20 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="text-center text-white">
                    <UserCheck className="w-6 h-6 mx-auto mb-1" />
                    <div className="text-xs font-bold">VALORES</div>
                  </div>
                </div>
                <div className="mt-3 w-40">
                  <div className="flex flex-wrap justify-center gap-1">
                    {['Honestidade', 'Humanização', 'Competência', 'Profissionalismo', 'Compromisso Social'].map((value, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 bg-accent/20 text-accent rounded-md text-xs font-medium hover:bg-accent/30 transition-colors duration-300 cursor-pointer hover:scale-105"
                        style={{animationDelay: `${0.8 + index * 0.1}s`}}
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-secondary/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-0 w-1 h-1 bg-accent/30 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/3 right-0 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;