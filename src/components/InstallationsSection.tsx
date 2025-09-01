import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building, Bed, Heart, Stethoscope, ChevronLeft, ChevronRight } from "lucide-react";
import hospitalInterior from "@/assets/hospital-interior.jpg";
import hospitalRoom from "@/assets/hospital-room.jpg";
import emergencyRoom from "@/assets/emergency-room.jpg";
import surgeryRoom from "@/assets/surgery-room.jpg";
import { useState } from "react";

const InstallationsSection = () => {
  const [selectedInstallation, setSelectedInstallation] = useState<number | null>(null);
  
  const installations = [
    {
      title: "Apartamento",
      description: "Nossos apartamentos proporcionam conforto e privacidade, com uma infraestrutura completa pensada para atender, com qualidade e comodidade, às necessidades de pacientes e acompanhantes.",
      images: [hospitalRoom, hospitalInterior, emergencyRoom], // múltiplas imagens
      icon: Bed
    },
    {
      title: "Enfermaria",
      description: "Nossas enfermarias oferecem um ambiente acolhedor e funcional, cuidadosamente projetado para garantir conforto e segurança aos pacientes durante a recuperação.",
      images: [emergencyRoom, hospitalRoom, hospitalInterior], // múltiplas imagens
      icon: Heart
    },
    {
      title: "Bloco Cirúrgico",
      description: "Equipado com tecnologia de ponta e respaldado por uma equipe altamente especializada, asseguramos excelência e segurança em cada procedimento.",
      images: [surgeryRoom, hospitalInterior, hospitalRoom], // múltiplas imagens
      icon: Stethoscope
    }
  ];

  return (
    <section id="installations" className="py-12 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Building className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Instalações</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossas Instalações
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Conheça nossas modernas instalações equipadas com tecnologia de ponta para oferecer o melhor atendimento médico hospitalar.
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

          {/* Installations Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {installations.map((installation, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    {/* Image Carousel */}
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                          {installation.images.map((image, imgIndex) => (
                            <CarouselItem key={imgIndex}>
                              <div className="relative h-48 rounded-lg overflow-hidden">
                                <img 
                                  src={image} 
                                  alt={`${installation.title} - Imagem ${imgIndex + 1}`}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                <installation.icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2" />
                        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                      </Carousel>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2">
                          {installation.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {installation.description}
                        </p>
                      </div>
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