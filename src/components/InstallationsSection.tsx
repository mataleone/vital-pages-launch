import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, Eye, Award } from "lucide-react";

const InstallationsSection = () => {
  const qualityContent = [
    {
      title: "Política da Qualidade",
      description: "A Política de Qualidade do Hospital Jaques Gonçalves Pereira tem como objetivo promover a melhoria contínua nos processos Médico Hospitalar, buscando sempre a satisfação de seus clientes e usuários.",
      icon: Shield
    },
    {
      title: "Missão",
      description: "Proporcionar aos clientes e usuários atendimentos de qualidade, prestando serviços assistenciais com eficiência e humanização.",
      icon: Target
    },
    {
      title: "Visão",
      description: "Ser referência local em atendimentos hospitalares com excelência na prestação de serviços em saúde.",
      icon: Eye
    },
    {
      title: "Valores",
      description: "Honestidade, Humanização, Competência, Profissionalismo e Compromisso Social.",
      icon: Award
    }
  ];

  return (
    <section id="installations" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Qualidade e Compromisso</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Política da Qualidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça nossa política de qualidade, missão, visão e valores que norteiam 
            nossos cuidados e compromisso com a excelência.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* Video Section */}
          <div className="lg:col-span-1 flex">
            <div className="relative w-full h-[520px] rounded-lg overflow-hidden shadow-lg bg-black">
              <iframe 
                src="https://www.youtube.com/embed/bX5x1sPxsII?autoplay=1&mute=1&loop=1&playlist=bX5x1sPxsII&controls=0&showinfo=0&rel=0&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3"
                className="absolute inset-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Tour Virtual - Hospital Jaques Gonçalves Pereira"
              />
            </div>
          </div>

          {/* Quality Content Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 h-[520px]">
            {qualityContent.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mr-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InstallationsSection;