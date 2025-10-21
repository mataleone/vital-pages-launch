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
        { name: "Tireoidectomia Parcial", description: "Remoção cirúrgica de parte da glândula tireoide" },
        { name: "Tireoidectomia Total", description: "Remoção completa da glândula tireoide" },
        { name: "Exérese de Cisto Tireoglosso", description: "Retirada de cisto congênito no pescoço" },
        { name: "Parotidectomia Parcial ou Subtotal", description: "Remoção de parte da glândula parótida" }
      ]
    },
    {
      id: "cirurgia-geral",
      name: "Cirurgia Geral",
      icon: Heart,
      surgeries: [
        { name: "Colecistectomia Videolaparoscópica", description: "Retirada da vesícula biliar por via minimamente invasiva" },
        { name: "Hemorroidectomia", description: "Remoção cirúrgica de hemorroidas" },
        { name: "Hernioplastia Epigástrica", description: "Correção de hérnia na região superior do abdome" },
        { name: "Hernioplastia Incisional", description: "Reparo de hérnia em cicatriz cirúrgica anterior" },
        { name: "Hernioplastia Inguinal Bilateral", description: "Correção de hérnias inguinais em ambos os lados" },
        { name: "Hernioplastia Inguinal Unilateral", description: "Correção de hérnia inguinal em um lado" },
        { name: "Hernioplastia Umbilical", description: "Reparo de hérnia umbilical" },
        { name: "Laparotomia Exploradora", description: "Abertura cirúrgica do abdome para diagnóstico" },
        { name: "Ressecção Simples de Tumor de Partes Moles", description: "Remoção de tumores benignos em tecidos moles" }
      ]
    },
    {
      id: "oftalmologica",
      name: "Oftalmológica",
      icon: Eye,
      surgeries: [
        { name: "Catarata – Facectomia", description: "Cirurgia para remoção de catarata e melhora da visão" },
        { name: "Tratamento Cirúrgico de Pterígio", description: "Remoção de crescimento anormal na córnea" }
      ]
    },
    {
      id: "ginecologica",
      name: "Ginecológica",
      icon: Heart,
      surgeries: [
        { name: "Colpoperineoplastia Anterior e Posterior", description: "Correção do prolapso vaginal" },
        { name: "Exérese de Cisto Vaginal", description: "Remoção de cisto na região vaginal" },
        { name: "Exérese de Glândula de Bartholin / Skene", description: "Retirada de glândulas inflamadas ou com cistos" },
        { name: "Histerectomia Subtotal", description: "Remoção parcial do útero" },
        { name: "Histerectomia Total", description: "Remoção completa do útero" },
        { name: "Histerectomia Total com Anexectomia (Uni/Bilateral)", description: "Remoção do útero e ovários/trompas" },
        { name: "Histeroscopia Cirúrgica c/ Ressectoscópio c/ OPME", description: "Cirurgia por dentro do útero via histeroscopia" },
        { name: "Laqueadura Tubária", description: "Esterilização feminina definitiva" },
        { name: "Marsupialização de Glândula de Bartholin", description: "Tratamento de cisto da glândula de Bartholin" },
        { name: "Miomectomia", description: "Remoção de miomas uterinos" },
        { name: "Ooforectomia/Ooforoplastia", description: "Cirurgia nos ovários" },
        { name: "Salpingectomia Uni/Bilateral", description: "Remoção das trompas de Falópio" },
        { name: "Tratamento Cirúrgico de Hipertrofia dos Pequenos Lábios", description: "Correção estética dos pequenos lábios" }
      ]
    },
    {
      id: "ortopedica",
      name: "Ortopédica",
      icon: Bone,
      surgeries: [
        { name: "Reconstrução Ligamentar Intra-articular do Joelho c/ OPME", description: "Reconstrução de ligamentos rompidos no joelho" },
        { name: "Ressecção de Cisto Sinovial", description: "Remoção de cisto nas articulações" },
        { name: "Ressecção Simples de Tumor Ósseo/de Partes Moles", description: "Retirada de tumores em ossos ou músculos" },
        { name: "Tenoplastia ou Enxerto de Tendão Único", description: "Reparo ou substituição de tendão lesionado" },
        { name: "Tenosinovectomia em Membro Superior", description: "Remoção de tecido inflamado ao redor de tendões" },
        { name: "Tratamento Cirúrgico de Dedo em Gatilho", description: "Correção do travamento do dedo" },
        { name: "Tratamento das Lesões Osteocondrais por Fixação ou Mosaicoplastia Joelho/Tornozelo", description: "Reparo de cartilagem articular" },
        { name: "Tratamento Cirúrgico de Rotura do Menisco com Meniscectomia c/ OPME", description: "Reparo ou remoção de menisco lesionado" },
        { name: "Tratamento Cirúrgico de Síndrome Compressiva em Túnel Osteofibroso ao Nível do Carpo", description: "Descompressão do túnel do carpo" }
      ]
    },
    {
      id: "otorrinolaringologica",
      name: "Otorrinolaringológica",
      icon: Ear,
      surgeries: [
        { name: "Adenoidectomia", description: "Remoção das adenoides (carne esponjosa)" },
        { name: "Amigdalectomia", description: "Retirada cirúrgica das amígdalas" },
        { name: "Septoplastia", description: "Correção do desvio do septo nasal" },
        { name: "Turbinectomia", description: "Redução das conchas nasais para melhorar respiração" }
      ]
    },
    {
      id: "pediatrica",
      name: "Pediátrica",
      icon: Baby,
      surgeries: [
        { name: "Frenectomia", description: "Correção do freio lingual ou labial em crianças" },
        { name: "Hernioplastia Epigástrica", description: "Correção de hérnia abdominal superior em crianças" },
        { name: "Hernioplastia Incisional", description: "Reparo de hérnia em cicatriz anterior pediátrica" },
        { name: "Hernioplastia Inguinal Bilateral", description: "Correção de hérnias inguinais nos dois lados" },
        { name: "Hernioplastia Inguinal Unilateral", description: "Reparo de hérnia inguinal em um lado" },
        { name: "Hernioplastia Umbilical", description: "Correção da hérnia umbilical infantil" },
        { name: "Orquidopexia Bilateral", description: "Descida cirúrgica de testículos não descidos (bilateral)" },
        { name: "Orquidopexia Unilateral", description: "Descida cirúrgica de testículo não descido (unilateral)" },
        { name: "Postectomia Hospitalar", description: "Circuncisão em ambiente hospitalar" },
        { name: "Ressecção de Sinéquias", description: "Correção de aderências na genitália feminina" },
        { name: "Ressecção Simples de Tumor de Partes Moles", description: "Remoção de tumores benignos em crianças" },
        { name: "Tratamento Cirúrgico de Polidactilia Articulada", description: "Correção de dedos extras nas mãos ou pés" },
        { name: "Tratamento Cirúrgico de Sindactilia Simples (Dois Dedos)", description: "Separação de dedos unidos" }
      ]
    },
    {
      id: "plastica",
      name: "Plástica",
      icon: Palette,
      surgeries: [
        { name: "Abdominoplastia", description: "Cirurgia plástica do abdome para remoção de excesso de pele" },
        { name: "Mamoplastia", description: "Cirurgia plástica das mamas (aumento, redução ou reconstrução)" }
      ]
    },
    {
      id: "urologica",
      name: "Urológica",
      icon: Droplets,
      surgeries: [
        { name: "Postectomia Hospitalar", description: "Circuncisão masculina em ambiente hospitalar" },
        { name: "Tratamento Cirúrgico de Hidrocele", description: "Correção do acúmulo de líquido no escroto" },
        { name: "Tratamento Cirúrgico de Varicocele", description: "Correção das varizes nos testículos" },
        { name: "Tratamento Cirúrgico de Incontinência Urinária Via Abdominal c/ OPME (Sling)", description: "Colocação de suporte para incontinência urinária" },
        { name: "Ureterolitotripsia Transureteroscópica c/ OPME (Retirada de Cálculo Renal) com Retirada Endoscópica de Duplo J", description: "Remoção de pedras nos rins via endoscopia" },
        { name: "Ressecção Endoscópica da Próstata", description: "Cirurgia da próstata via endoscópica" },
        { name: "Vasectomia", description: "Esterilização masculina definitiva" }
      ]
    }
  ];

  return (
    <section itemScope itemType="https://schema.org/MedicalClinic" className="py-6 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 sm:px-4 py-2 mb-4">
            <Scissors className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Procedimentos Especializados</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Cirurgias Eletivas
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Oferecemos uma ampla gama de cirurgias eletivas, realizadas com excelência e cuidado, 
            atendendo pacientes pelo SUS e particulares.
          </p>
        </div>

        {/* Surgery Categories Tabs */}
        <Tabs defaultValue="cabeca-pescoco" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 mb-4 sm:mb-6 h-auto p-1">{/* Improved mobile grid */}
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
                        {category.name}
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
                        <Card className="border-muted hover:border-primary/50 hover:bg-primary/5 transition-smooth cursor-pointer">
                          <CardContent className="p-3 sm:p-4">
                            <div className="flex items-start space-x-2">
                              <Scissors className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0 mt-1" />
                              <div className="flex-1 min-w-0">
                                <h4 className="text-xs sm:text-sm font-semibold text-foreground leading-tight break-words mb-1">
                                  {surgery.name}
                                </h4>
                                <p className="text-xs text-muted-foreground leading-tight">
                                  {surgery.description}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
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
        <div className="mt-6 sm:mt-8">
          <Card className="border-0 shadow-lg bg-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-4 sm:p-6 lg:p-8 xl:p-12 flex flex-col justify-center order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  Precisa de uma Cirurgia Eletiva?
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-3 sm:mb-4 lg:mb-6 leading-relaxed">
                  Nossa equipe está pronta para atendê-lo com segurança e qualidade. 
                  Atendemos pelo SUS, com credenciamentos municipais, e também oferecemos 
                  atendimentos particulares.
                </p>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                  Entre em contato para mais informações sobre procedimentos e agendamentos. 
                  Todas as cirurgias são realizadas por equipe médica especializada com equipamentos modernos.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg transition-all duration-300 font-semibold px-4 sm:px-6 lg:px-12 py-3 sm:py-4 h-10 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg w-full sm:w-fit"
                  asChild
                >
                  <a href="https://api.whatsapp.com/send/?phone=5531998678593&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    Agendamento
                  </a>
                </Button>
              </div>
              <div className="relative h-64 sm:h-80 lg:h-full order-1 lg:order-2">
                <img 
                  src={surgeryRoom} 
                  alt="Centro cirúrgico preparado para cirurgia eletiva" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-primary/50 to-primary/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white px-3 sm:px-4 lg:px-6">
                    <Scissors className="w-10 sm:w-12 lg:w-16 h-10 sm:h-12 lg:h-16 mx-auto mb-2 sm:mb-3 lg:mb-4 text-white" />
                    <h4 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">
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
                   "name": surgery.name,
                   "description": surgery.description
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