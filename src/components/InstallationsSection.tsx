import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Building, Stethoscope, Heart, Shield } from "lucide-react";
import hospitalInterior from "@/assets/hospital-interior.jpg";
import hospitalRoom from "@/assets/hospital-room.jpg";
import emergencyRoom from "@/assets/emergency-room.jpg";
import surgeryRoom from "@/assets/surgery-room.jpg";

const InstallationsSection = () => {
  const qualityItems = [
    {
      title: "Missão",
      description: "Proporcionar aos clientes e usuários atendimentos de qualidade, prestando serviços assistenciais com eficiência e humanização",
      icon: Heart
    },
    {
      title: "Visão",
      description: "Ser referência local em atendimentos hospitalares com excelência na prestação de serviços em saúde",
      icon: Building
    },
    {
      title: "Valores",
      description: "Honestidade, Humanização, Competência, Profissionalismo e Compromisso Social",
      icon: Shield
    }
  ];

  return (
    <section id="installations" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Stethoscope className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Qualidade e Excelência</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Política da Qualidade
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A Política de Qualidade do Hospital Jaques Gonçalves Pereira tem como objetivo promover a melhoria contínua nos processos Médico Hospitalar, buscando sempre a satisfação de seus clientes e usuários.
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

          {/* Quality Policy Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-6 h-[520px]">
            {qualityItems.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 h-full">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">
                        {item.title}
                      </h4>
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                      {item.title === "Valores" ? (
                        <div className="space-y-2">
                          {["Honestidade", "Humanização", "Competência", "Profissionalismo", "Compromisso Social"].map((value, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-base text-muted-foreground">{value}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
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