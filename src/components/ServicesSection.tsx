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
      description: "Endoscopia, colonoscopia, ultrassonografia, raio X e exames laboratoriais",
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
    <section id="services" className="py-6 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 sm:px-4 py-2 mb-4">
            <Stethoscope className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Cuidado Especializado</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Nossos Serviços
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Oferecemos uma gama completa de serviços médicos com qualidade excepcional 
            e atendimento humanizado para cuidar da sua saúde.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {mainServices.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-card"
            >
              <CardContent className="p-4 sm:p-6 text-center">
                <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${service.color} rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Policy Section - Organized Layout */}
        <div className="py-4 sm:py-6">
          
          {/* Modern Grid Layout */}
          <div className="max-w-6xl mx-auto">
            {/* Main Policy Banner */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-primary/20">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                </div>
                <div className="text-center">
                  <h4 className="text-base sm:text-lg font-bold text-foreground mb-2">Política da Qualidade</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl">
                    Promover a melhoria contínua nos processos médico hospitalares, buscando sempre a satisfação de clientes e usuários.
                  </p>
                </div>
              </div>
            </div>

            {/* Three Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Mission */}
              <div className="group bg-card rounded-xl p-4 sm:p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-primary to-primary-glow rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Missão</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Atendimentos de qualidade com eficiência e humanização, priorizando o bem-estar e a satisfação dos nossos pacientes.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="group bg-card rounded-xl p-4 sm:p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Activity className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Visão</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Ser referência local em excelência nos serviços de saúde, reconhecida pela qualidade e inovação no atendimento.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="group bg-card rounded-xl p-4 sm:p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-accent to-secondary rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <UserCheck className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">Valores</h4>
                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
                    {['Honestidade', 'Humanização', 'Competência', 'Profissionalismo', 'Compromisso Social'].map((value, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 sm:px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium hover:bg-accent/20 transition-colors duration-200 cursor-default border border-accent/20"
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;