import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Heart, Target, Star, CheckCircle, Shield } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "50", label: "Leitos de Internação", icon: Users },
    { number: "24h", label: "Atendimento Contínuo", icon: Heart },
    { number: "100%", label: "Satisfação dos Pacientes", icon: Star },
    { number: "15+", label: "Anos de Experiência", icon: Award }
  ];

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
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <img 
              src="/lovable-uploads/00897a29-1dbc-47fd-ad4c-da44171b9c7e.png" 
              alt="HSVP Logo" 
              className="h-6 w-auto"
            />
            <span className="text-sm font-medium text-primary">Rede HSVP</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre Nós
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <strong className="text-foreground">Hospital Jaques Gonçalves Pereira</strong> - 
            Parte da Rede Hospitais São Vicente de Paulo, unindo tradição, 
            tecnologia e excelência no cuidado à saúde.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Values */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Nossos Valores
            </h3>
            
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Right Column - Achievements & CTA */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary via-secondary to-accent text-white overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Nossos Diferenciais
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-white/90 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90 leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Nosso Compromisso
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Cada paciente é uma vida que merece respeito, agilidade e excelência no cuidado. 
                  Trabalhamos todos os dias para ser a referência em saúde da nossa região.
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
      </div>
    </section>
  );
};

export default AboutSection;