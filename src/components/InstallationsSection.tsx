import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Building, Bed, Heart, Activity, ChevronLeft, ChevronRight, X } from "lucide-react";
import hospitalInterior from "@/assets/hospital-interior.jpg";
import hospitalRoom from "@/assets/hospital-room.jpg";
import emergencyRoom from "@/assets/emergency-room.jpg";
import surgeryRoom from "@/assets/surgery-room.jpg";
import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import ward1 from "@/assets/ward-1.jpg";
import ward2 from "@/assets/ward-2.jpg";
import ward3 from "@/assets/ward-3.jpg";
import { useState } from "react";

const InstallationsSection = () => {
  const [selectedInstallation, setSelectedInstallation] = useState<number | null>(null);
  
  const installations = [
    {
      title: "Apartamento",
      description: "Nossos apartamentos proporcionam conforto e privacidade, com uma infraestrutura completa pensada para atender, com qualidade e comodidade, às necessidades de pacientes e acompanhantes.",
      images: [apartment1, apartment2, apartment3],
      icon: Bed
    },
    {
      title: "Enfermaria",
      description: "Nossas enfermarias oferecem um ambiente acolhedor e funcional, cuidadosamente projetado para garantir conforto e segurança aos pacientes durante a recuperação.",
      images: [ward1, ward2, ward3],
      icon: Heart
    },
    {
      title: "Centro Cirúrgico",
      description: "Equipado com tecnologia de ponta e respaldado por uma equipe altamente especializada, asseguramos excelência e segurança em cada procedimento.",
      images: [surgeryRoom, hospitalInterior, hospitalRoom], // múltiplas imagens
      icon: Activity
    }
  ];

  return (
    <section id="installations" className="py-6 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 sm:px-4 py-2 mb-4">
            <Building className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Instalações</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Nossas Instalações
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Conheça nossas modernas instalações equipadas com tecnologia de ponta para oferecer o melhor atendimento médico hospitalar.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
          {/* Installations Grid */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {installations.map((installation, index) => (
              <Card key={index} className="border-0 shadow-lg bg-card hover:shadow-xl transition-all duration-300 h-auto md:h-[180px]">
                <CardContent className="p-4 sm:p-6 h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 items-center h-full">
                    {/* Image Carousel */}
                    <div className="relative">
                      <Carousel className="w-full">
                        <CarouselContent>
                           {installation.images.map((image, imgIndex) => (
                             <CarouselItem key={imgIndex}>
                               <Dialog>
                                 <DialogTrigger asChild>
                                   <div className="relative h-32 sm:h-36 md:h-32 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200">
                                     <img 
                                       src={image} 
                                       alt={`${installation.title} - Imagem ${imgIndex + 1}`}
                                       className="w-full h-full object-cover"
                                     />
                                     <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                                     <installation.icon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 sm:w-8 h-6 sm:h-8 text-white" />
                                   </div>
                                 </DialogTrigger>
                                 <DialogContent className="max-w-4xl w-full p-0">
                                   <div className="relative">
                                     <img 
                                       src={image} 
                                       alt={`${installation.title} - Imagem ${imgIndex + 1}`}
                                       className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                                     />
                                     <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 rounded-b-lg">
                                       <h4 className="text-white font-semibold text-lg">{installation.title}</h4>
                                       <p className="text-white/80 text-sm">{installation.description}</p>
                                     </div>
                                   </div>
                                 </DialogContent>
                               </Dialog>
                             </CarouselItem>
                           ))}
                        </CarouselContent>
                        <CarouselPrevious className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2" />
                        <CarouselNext className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2" />
                      </Carousel>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1 sm:mb-2">
                          {installation.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm line-clamp-3 md:line-clamp-none">
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