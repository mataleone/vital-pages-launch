import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Shield, CheckCircle } from "lucide-react";
import teamValues from "@/assets/team-values.jpg";
import hospitalCommitment from "@/assets/hospital-commitment.jpg";

const ValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cuidamos de cada paciente com dedicação, respeito e carinho, priorizando o bem-estar e a dignidade humana."
    },
    {
      icon: Target,
      title: "Excelência Médica",
      description: "Equipe altamente qualificada e tecnologia de ponta para garantir os melhores resultados em todos os tratamentos."
    },
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Protocolos rigorosos de segurança e qualidade para garantir a proteção e confiança dos nossos pacientes."
    }
  ];

  const achievements = [
    "Referência regional em atendimento hospitalar",
    "Credenciamento SUS para amplo acesso à população", 
    "Equipe médica especializada e multidisciplinar",
    "Tecnologia de ponta em equipamentos médicos",
    "Parceria com a Secretaria Municipal de Saúde",
    "Protocolos de qualidade e segurança certificados"
  ];

  return (
    <section id="values" className="py-6 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 sm:px-4 py-2 mb-4">
            <Heart className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Nossos Princípios e Compromissos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            O Que Nos Define
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Conheça os valores, diferenciais e compromissos que guiam nossa atuação 
            em cada atendimento e decisão.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {/* Nossos Valores */}
          <div>
            <Card className="border-0 shadow-lg bg-card overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-60 sm:h-72 lg:h-auto">
                  <img 
                    src={teamValues} 
                    alt="Nossos valores em ação" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-4 sm:px-6">
                      <Heart className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-3 sm:mb-4 text-white" />
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
                        Nossos Valores
                      </h3>
                      <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                        Os pilares fundamentais que orientam nossa missão no cuidado à saúde
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-6 lg:p-8 xl:p-12">
                  <div className="space-y-4 sm:space-y-6">
                    {values.map((value, index) => (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                          <value.icon className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                            {value.title}
                          </h4>
                          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Nosso Compromisso */}
          <div>
            <Card className="border-0 shadow-lg bg-card overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground">
                      Nosso Compromisso
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Cada paciente é uma vida que merece respeito, agilidade e excelência no cuidado. 
                    Trabalhamos todos os dias para ser a referência em saúde da nossa região, 
                    unindo tradição, tecnologia e humanização no atendimento.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Nossa dedicação vai além do tratamento médico: cuidamos de pessoas, 
                    oferecendo suporte emocional e garantindo que cada paciente se sinta acolhido 
                    e seguro durante todo o processo de cuidado.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-secondary to-primary hover:shadow-lg transition-all duration-300 font-semibold px-8 w-fit"
                    asChild
                  >
                    <a href="https://api.whatsapp.com/send/?phone=5531998678593&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                      Agendar Consulta
                    </a>
                  </Button>
                </div>
                <div className="relative h-80 lg:h-auto order-1 lg:order-2">
                  <img 
                    src={hospitalCommitment} 
                    alt="Nosso compromisso com o cuidado" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-secondary/90 via-secondary/60 to-secondary/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <Shield className="w-16 h-16 mx-auto mb-4 text-white" />
                      <h4 className="text-xl font-bold mb-2">
                        Cada Vida Importa
                      </h4>
                      <p className="text-white/90 text-sm">
                        Dedicação total ao cuidado humanizado
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Nossos Diferenciais */}
          <div>
            <Card className="border-0 shadow-lg bg-card overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img 
                    src="/lovable-uploads/e9093921-7fd2-4005-bab8-90e2789a9fb2.png" 
                    alt="Nossos diferenciais e estrutura" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white px-6">
                      <Target className="w-16 h-16 mx-auto mb-4 text-white" />
                      <h3 className="text-3xl font-bold mb-3">
                        Nossos Diferenciais
                      </h3>
                      <p className="text-white/90 leading-relaxed">
                        O que nos torna únicos e referência no cuidado à saúde
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="space-y-5">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground leading-relaxed text-lg">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;