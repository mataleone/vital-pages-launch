import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Heart, Shield } from "lucide-react";
import medicalTeam from "@/assets/medical-team.jpg";

const AboutTeam = () => {
  const values = [
    {
      icon: Award,
      title: "Referência Regional",
      description: "Referência em atendimento, pronto socorro, internações e cirurgias na região"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Cada atendimento é feito com dedicação, respeito e excelência"
    },
    {
      icon: Shield,
      title: "Tecnologia de Ponta",
      description: "Equipamentos modernos e equipe médica altamente experiente"
    },
    {
      icon: Users,
      title: "Parceria SUS",
      description: "Facilitamos o acesso aos serviços através da parceria municipal"
    }
  ];

  const surgeons = [
    {
      name: "Dr. Higor Karlesh",
      specialty: "Cirurgião Geral",
      initial: "H"
    },
    {
      name: "Dr. Marcos Villela", 
      specialty: "Cirurgião Geral",
      initial: "M"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            <strong>Rede HSVP - Hospitais São Vicente de Paulo</strong><br />
            Unindo tecnologia, equipe experiente e atendimento humanizado
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {values.map((value, index) => (
            <Card key={index} className="bg-card shadow-card hover:shadow-glow transition-bounce hover:-translate-y-2 border-0">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Team Photo */}
          <div className="relative overflow-hidden rounded-xl shadow-card">
            <img 
              src={medicalTeam} 
              alt="Equipe médica do Hospital Jaques Gonçalves Pereira" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-xl font-bold mb-1">Equipe Multiprofissional</h3>
                <p className="text-sm">Dedicados ao seu bem-estar</p>
              </div>
            </div>
          </div>

          {/* Surgeons & Commitment */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossos Cirurgiões
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {surgeons.map((surgeon, index) => (
                  <Card key={index} className="bg-card shadow-card border-0">
                    <CardContent className="p-4 flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">{surgeon.initial}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{surgeon.name}</h4>
                        <p className="text-sm text-muted-foreground">{surgeon.specialty}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Nosso Compromisso
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Cada paciente é uma vida que merece respeito e agilidade no cuidado. 
                  Fazemos a diferença todos os dias através da excelência médica.
                </p>
                <a href="https://api.whatsapp.com/send/?phone=5531998678593&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-gradient-primary text-white px-6 py-2 rounded-lg font-semibold text-sm hover:shadow-glow transition-smooth inline-block">
                  Agendar Consulta
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;