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
        {/* Nossos Valores */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Nossos Princípios</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Os valores que nos guiam em cada atendimento e decisão, sempre priorizando 
              o cuidado e bem-estar dos nossos pacientes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nossos Diferenciais */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Nossa Excelência</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nossos Diferenciais
            </h2>
          </div>

          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-80 lg:h-auto">
                <img 
                  src={medicalTeam} 
                  alt="Equipe médica especializada" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-primary/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Nossa Excelência
                    </h3>
                    <p className="text-white/90 text-sm max-w-xs">
                      Comprometidos com a qualidade e inovação no cuidado à saúde
                    </p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Nosso Compromisso */}
        <div>
          <div className="text-center mb-10">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">Nosso Compromisso</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Nosso Compromisso
            </h2>
          </div>

          <Card className="border-0 shadow-lg bg-card overflow-hidden max-w-4xl mx-auto">
            <div className="relative h-64">
              <img 
                src={hospitalInterior} 
                alt="Interior do hospital" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/50 to-transparent" />
            </div>
            <CardContent className="p-8 text-center">
              <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                Cada paciente é uma vida que merece respeito, agilidade e excelência no cuidado. 
                Trabalhamos todos os dias para ser a referência em saúde da nossa região, 
                unindo tradição, tecnologia e humanização no atendimento.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 font-semibold px-8"
              >
                Agendar Consulta
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;