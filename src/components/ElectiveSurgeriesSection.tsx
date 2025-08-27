import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Heart, 
  Eye, 
  Baby, 
  Bone, 
  Ear, 
  Scissors, 
  Palette, 
  Droplets 
} from "lucide-react";

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
    <section itemScope itemType="https://schema.org/MedicalClinic" className="py-12 bg-background">{/* Reduced from py-20 */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">{/* Reduced from mb-12 */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cirurgias Eletivas
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Oferecemos uma ampla gama de <strong>cirurgias eletivas</strong>, realizadas com excelência e cuidado, 
              atendendo pacientes pelo <strong>SUS - Sistema Único de Saúde</strong>, por meio de credenciamentos 
              com as prefeituras, onde as despesas médicas e materiais (OPME) são custeados pelo município de origem 
              do paciente, além de atendimentos particulares.
            </p>
          </div>
        </div>

        {/* Surgery Categories Tabs */}
        <Tabs defaultValue="cabeca-pescoco" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 mb-6">{/* Reduced from mb-8 */}
            {surgeryCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex flex-col items-center gap-1 p-3 text-xs"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{category.name}</span>
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

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.surgeries.map((surgery, index) => (
                      <div
                        key={index}
                        itemProp="medicalSpecialty"
                        className="group"
                      >
                        <Badge 
                          variant="outline" 
                          className="w-full justify-start p-3 text-sm border-muted hover:border-primary/50 hover:bg-primary/5 transition-smooth cursor-pointer"
                        >
                          <Scissors className="w-4 h-4 mr-2 text-primary" />
                          <span className="text-left">{surgery}</span>
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

        {/* Call to Action */}
        <div className="text-center mt-8">{/* Reduced from mt-12 */}
          <div className="bg-gradient-card p-6 rounded-xl shadow-card">{/* Reduced from p-8 */}
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Precisa de uma Cirurgia Eletiva?
            </h3>
            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">{/* Reduced from mb-6 */}
              Nossa equipe está pronta para atendê-lo com segurança e qualidade. 
              Entre em contato para mais informações sobre procedimentos e agendamentos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-smooth">
                Agendar Consulta
              </button>
              <button className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-smooth">
                Ver Convênios
              </button>
            </div>
          </div>
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