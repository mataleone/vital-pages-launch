import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Shield, CheckCircle } from "lucide-react";
import medicalTeam from "@/assets/medical-team.jpg";
import hospitalInterior from "@/assets/hospital-interior.jpg";

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
    <section id="values" className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Nossos Princípios e Compromissos</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O Que Nos Define
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça os valores, diferenciais e compromissos que guiam nossa atuação 
            em cada atendimento e decisão.
          </p>
        </div>

        {/* Nossos Valores */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Nossos Valores
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os pilares fundamentais que orientam nossa missão no cuidado à saúde.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nosso Compromisso */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Nosso Compromisso
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A dedicação que nos move todos os dias em busca da excelência.
            </p>
          </div>

          <Card className="border-0 shadow-lg bg-card overflow-hidden max-w-5xl mx-auto">
            <div className="relative h-80">
              <img 
                src={hospitalInterior} 
                alt="Interior do hospital" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/60 to-secondary/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-6">
                  <h4 className="text-2xl font-bold mb-4">
                    Cada Vida Importa
                  </h4>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Cada paciente é uma vida que merece respeito, agilidade e excelência no cuidado. 
                    Trabalhamos todos os dias para ser a referência em saúde da nossa região, 
                    unindo tradição, tecnologia e humanização no atendimento.
                  </p>
                  <Button 
                    size="lg" 
                    className="bg-white text-secondary hover:bg-white/90 transition-all duration-300 font-semibold px-8"
                  >
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Nossos Diferenciais */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Nossos Diferenciais
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              O que nos torna únicos e referência no cuidado à saúde.
            </p>
          </div>

          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={medicalTeam} 
                  alt="Equipe médica especializada" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-6">
                    <h4 className="text-2xl font-bold mb-3">
                      Nossa Excelência
                    </h4>
                    <p className="text-white/90 leading-relaxed max-w-sm">
                      Comprometidos com a qualidade e inovação no cuidado à saúde, 
                      oferecendo o que há de mais moderno e eficaz.
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-10 flex flex-col justify-center">
                <div className="space-y-5">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed text-lg">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;