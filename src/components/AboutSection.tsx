import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Shield } from "lucide-react";
import medicalTeam from "@/assets/medical-team.jpg";
import hospitalInterior from "@/assets/hospital-interior.jpg";

const AboutSection = () => {

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
    <section id="about" className="py-10 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
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
        </div>

        {/* About Content with Images */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  O <strong className="text-foreground">Hospital Jaques Gonçalves Pereira</strong> é uma 
                  instituição de referência na região, comprometida em oferecer atendimento médico de 
                  excelência com humanização e tecnologia de ponta. Fazemos parte da prestigiosa 
                  <strong className="text-foreground"> Rede Hospitais São Vicente de Paulo</strong>, 
                  unindo tradição e inovação no cuidado à saúde.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa missão é proporcionar cuidado integral e de qualidade, atendendo pacientes 
                  pelo SUS e particulares, sempre com foco na recuperação e bem-estar de cada pessoa 
                  que confia em nossos serviços.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-lg overflow-hidden h-full">
              <div className="relative h-80">
                <img 
                  src="/lovable-uploads/e9093921-7fd2-4005-bab8-90e2789a9fb2.png" 
                  alt="Fachada do Hospital Jaques Gonçalves Pereira" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-xl font-bold mb-2">Hospital Jaques Gonçalves Pereira</h3>
                  <p className="text-white/90 text-sm">Estrutura moderna e acolhedora para o melhor cuidado</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;