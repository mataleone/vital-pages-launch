import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Heart, 
  Eye, 
  Baby, 
  Bone, 
  Ear, 
  Scissors, 
  Palette, 
  Droplets,
  Stethoscope,
  CheckCircle
} from "lucide-react";
import surgeryRoom from "@/assets/surgery-room.jpg";

const ElectiveSurgeriesSection = () => {
  const surgeryCategories = [
    {
      id: "cabeca-pescoco",
      name: "Cabeça e Pescoço",
      icon: Brain,
      surgeries: [
        "Tireoidectomia Parcial",
        "Tireoidectomia Total", 
        "Exérese de Cisto Tireoglosso",
        "Exérese de Cisto Branquial",
        "Parotidectomia Parcial ou Subtotal"
      ]
    },
    {
      id: "cirurgia-geral",
      name: "Cirurgia Geral",
      icon: Heart,
      surgeries: [
        "Colecistectomia Videolaparoscópica",
        "Fistulectomia / Fistulotomia Anal",
        "Hemorroidectomia",
        "Hernioplastia Epigástrica",
        "Hernioplastia Incisional",
        "Hernioplastia Inguinal Bilateral",
        "Hernioplastia Inguinal Unilateral",
        "Hernioplastia Umbilical",
        "Laparotomia Exploradora",
        "Ressecção Simples de Tumor de Partes Moles"
      ]
    },
    {
      id: "oftalmologica",
      name: "Oftalmológica",
      icon: Eye,
      surgeries: [
        "Catarata – Facectomia",
        "Tratamento Cirúrgico de Pterígio"
      ]
    },
    {
      id: "ginecologica",
      name: "Ginecológica",
      icon: Heart,
      surgeries: [
        "Colpoperineoplastia Anterior e Posterior",
        "Exérese de Cisto Vaginal",
        "Exérese de Glândula de Bartholin / Skene",
        "Histerectomia Subtotal",
        "Histerectomia Total",
        "Histerectomia Total com Anexectomia (Uni/Bilateral)",
        "Histeroscopia Cirúrgica c/ Ressectoscópio c/ OPME",
        "Laqueadura Tubária",
        "Marsupialização de Glândula de Bartholin",
        "Miomectomia",
        "Ooforectomia/Ooforoplastia",
        "Salpingectomia Uni/Bilateral",
        "Tratamento Cirúrgico de Hipertrofia dos Pequenos Lábios"
      ]
    },
    {
      id: "ortopedica",
      name: "Ortopédica",
      icon: Bone,
      surgeries: [
        "Reconstrução Ligamentar Intra-articular do Joelho c/ OPME",
        "Ressecção de Cisto Sinovial",
        "Ressecção Simples de Tumor Ósseo/de Partes Moles",
        "Tenoplastia ou Enxerto de Tendão Único",
        "Tenosinovectomia em Membro Superior",
        "Tratamento Cirúrgico de Dedo em Gatilho",
        "Tratamento das Lesões Osteocondrais por Fixação ou Mosaicoplastia Joelho/Tornozelo",
        "Tratamento Cirúrgico de Rotura do Menisco com Meniscectomia c/ OPME",
        "Tratamento Cirúrgico de Síndrome Compressiva em Túnel Osteofibroso ao Nível do Carpo"
      ]
    },
    {
      id: "otorrinolaringologica",
      name: "Otorrinolaringológica",
      icon: Ear,
      surgeries: [
        "Adenoidectomia",
        "Amigdalectomia",
        "Septoplastia",
        "Turbinectomia"
      ]
    },
    {
      id: "pediatrica",
      name: "Pediátrica",
      icon: Baby,
      surgeries: [
        "Frenectomia",
        "Hernioplastia Epigástrica",
        "Hernioplastia Incisional",
        "Hernioplastia Inguinal Bilateral",
        "Hernioplastia Inguinal Unilateral",
        "Hernioplastia Umbilical",
        "Orquidopexia Bilateral",
        "Orquidopexia Unilateral",
        "Postectomia Hospitalar",
        "Ressecção de Sinéquias",
        "Ressecção Simples de Tumor de Partes Moles",
        "Tratamento Cirúrgico de Polidactilia Articulada",
        "Tratamento Cirúrgico de Sindactilia Simples (Dois Dedos)"
      ]
    },
    {
      id: "plastica",
      name: "Plástica",
      icon: Palette,
      surgeries: [
        "Abdominoplastia",
        "Mamoplastia"
      ]
    },
    {
      id: "urologica",
      name: "Urológica",
      icon: Droplets,
      surgeries: [
        "Postectomia Hospitalar",
        "Tratamento Cirúrgico de Hidrocele",
        "Tratamento Cirúrgico de Varicocele",
        "Tratamento Cirúrgico de Incontinência Urinária Via Abdominal c/ OPME (Sling)",
        "Ureterolitotripsia Transureteroscópica c/ OPME (Retirada de Cálculo Renal) com Retirada Endoscópica de Duplo J",
        "Ressecção Endoscópica da Próstata",
        "Vasectomia"
      ]
    }
  ];

  return (
    <section itemScope itemType="https://schema.org/MedicalClinic" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Scissors className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Procedimentos Especializados</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cirurgias Eletivas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Oferecemos uma ampla gama de cirurgias eletivas, realizadas com excelência e cuidado, 
            atendendo pacientes pelo SUS e particulares.
          </p>
        </div>

        {/* Surgery Categories Tabs */}
        <Tabs defaultValue="cabeca-pescoco" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 mb-6 h-auto p-1">{/* Improved mobile grid */}
            {surgeryCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-1 p-2 sm:p-3 text-xs min-h-[60px] sm:min-h-[70px] data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <IconComponent className="w-4 h-4 flex-shrink-0" />
                  <span className="text-center leading-tight text-[10px] sm:text-xs">{category.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {surgeryCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-4">{/* Reduced from mt-6 */}
              <Card className="bg-card shadow-card border-0">
                <CardContent className="p-6">{/* Reduced from p-8 */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        Cirurgia {category.name}
                      </h3>
                      <p className="text-muted-foreground">
                        {category.surgeries.length} procedimentos disponíveis
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                    {category.surgeries.map((surgery, index) => (
                      <div
                        key={index}
                        itemProp="medicalSpecialty"
                        className="group"
                      >
                        <Badge 
                          variant="outline" 
                          className="w-full justify-start p-3 sm:p-4 text-xs sm:text-sm border-muted hover:border-primary/50 hover:bg-primary/5 transition-smooth cursor-pointer min-h-[48px] items-start"
                        >
                          <Scissors className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-left leading-tight break-words">{surgery}</span>
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Importante:</strong> Todas as cirurgias são realizadas por equipe médica especializada 
                      com equipamentos modernos. Para mais informações sobre procedimentos e agendamentos, 
                      entre em contato conosco.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        {/* Call to Action with Image */}
        <div className="mt-8 sm:mt-10">
          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                  Precisa de uma Cirurgia Eletiva?
                </h3>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                  Nossa equipe está pronta para atendê-lo com segurança e qualidade. 
                  Atendemos pelo SUS, com credenciamentos municipais, e também oferecemos 
                  atendimentos particulares.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                  Entre em contato para mais informações sobre procedimentos e agendamentos. 
                  Todas as cirurgias são realizadas por equipe médica especializada com equipamentos modernos.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 font-semibold px-6 sm:px-12 py-3 sm:py-4 h-12 sm:h-14 text-base sm:text-lg w-full sm:w-fit"
                >
                  Agendamento
                </Button>
              </div>
              <div className="relative h-64 sm:h-80 lg:h-auto order-1 lg:order-2">
                <img 
                  src={surgeryRoom} 
                  alt="Centro cirúrgico preparado para cirurgia eletiva" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/50 to-primary/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-4 sm:px-6">
                    <Scissors className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 text-white" />
                    <h4 className="text-lg sm:text-xl font-bold mb-2">
                      Cirurgias com Excelência
                    </h4>
                    <p className="text-white/90 text-xs sm:text-sm max-w-xs mx-auto">
                      Tecnologia de ponta e equipe especializada para os melhores resultados
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalClinic",
              "name": "Hospital São Vicente de Paulo",
              "medicalSpecialty": surgeryCategories.map(cat => ({
                "@type": "MedicalSpecialty",
                "name": `Cirurgia ${cat.name}`,
                "availableService": cat.surgeries.map(surgery => ({
                  "@type": "MedicalProcedure",
                  "name": surgery
                }))
              }))
            })
          }}
        />
      </div>
    </section>
  );
};

export default ElectiveSurgeriesSection;