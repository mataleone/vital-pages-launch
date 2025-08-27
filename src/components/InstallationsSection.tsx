import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Building, Stethoscope, Heart, Shield } from "lucide-react";
import hospitalInterior from "@/assets/hospital-interior.jpg";
import hospitalRoom from "@/assets/hospital-room.jpg";
import emergencyRoom from "@/assets/emergency-room.jpg";
import surgeryRoom from "@/assets/surgery-room.jpg";

const InstallationsSection = () => {
  const installations = [
    {
      title: "Quartos de Internação",
      description: "Ambientes confortáveis e seguros para a recuperação dos pacientes",
      image: hospitalRoom,
      icon: Building
    },
    {
      title: "Centro Cirúrgico",
      description: "Salas cirúrgicas equipadas com tecnologia de ponta",
      image: surgeryRoom,
      icon: Stethoscope
    },
    {
      title: "Pronto Atendimento",
      description: "Atendimento de urgência e emergência 24 horas",
      image: emergencyRoom,
      icon: Heart
    }
  ];

  return (
    <section id="installations" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Building className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Estrutura Moderna</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossas Instalações
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça nossa estrutura moderna e equipada, projetada para oferecer o melhor 
            cuidado e conforto aos nossos pacientes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-10">
          {/* Video Section */}
          <div>
            <Card className="border-0 shadow-lg bg-card overflow-hidden">
              <div className="relative aspect-[9/16] bg-muted/50 flex items-center justify-center">
                {/* Placeholder for YouTube video */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Tour Virtual
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Vídeo em formato vertical (9:16) do YouTube será inserido aqui
                    <br />
                    Autoplayer ativo, sem som inicial
                  </p>
                  <div className="mt-4 p-3 bg-muted/50 rounded-lg text-xs text-muted-foreground">
                    <code>iframe src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1"</code>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Installations Grid */}
          <div className="grid gap-6">
            {installations.map((installation, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center">
                    <div className="relative w-32 h-24 flex-shrink-0">
                      <img 
                        src={installation.image} 
                        alt={installation.title}
                        className="w-full h-full object-cover rounded-l-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent rounded-l-lg" />
                      <installation.icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-white" />
                    </div>
                    <div className="p-4 flex-1">
                      <h4 className="font-semibold text-foreground mb-2">
                        {installation.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {installation.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-secondary/5 inline-block">
            <CardContent className="p-6">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Ambiente Seguro e Confortável
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                Todas as nossas instalações seguem rigorosos protocolos de segurança e higiene.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300"
              >
                Agendar Visita
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InstallationsSection;