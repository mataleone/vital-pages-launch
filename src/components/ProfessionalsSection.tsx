import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, Stethoscope } from "lucide-react";
import drHigorCarlech from "@/assets/dr-higor-carlech-new.jpg";
import drLucasFerreira from "@/assets/dr-lucas-ferreira-new.jpg";
import drWaldeckDuarte from "@/assets/dr-waldeck-duarte-new.jpg";
import drMarcosVillela from "@/assets/dr-marcos-villela-new.jpg";

const ProfessionalsSection = () => {
  const professionals = [
    {
      id: 1,
      name: "Dr. Higor Souza Carlech",
      specialty: "Cirurgia Geral",
      crm: "CRM MG 43345",
      image: drHigorCarlech
    },
    {
      id: 2,
      name: "Dr. Marcos Roberto de Paiva Villela",
      specialty: "Cirurgia Geral",
      crm: "CRM MG 28765",
      image: drMarcosVillela
    },
    {
      id: 3,
      name: "Dr. Lucas de Souza Ferreira",
      specialty: "Ginecologista",
      crm: "CRM MG 45434",
      image: drLucasFerreira
    },
    {
      id: 4,
      name: "Dr. Waldeck Caroso Duarte Junior",
      specialty: "Ortopedista",
      crm: "CRM MG 65923",
      image: drWaldeckDuarte
    }
  ];

  // Get unique specialties
  const specialties = Array.from(new Set(professionals.map(p => p.specialty)));

  const renderProfessionalCard = (professional: typeof professionals[0]) => (
    <Card 
      key={professional.id} 
      className="bg-card shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 border-0 animate-fade-in"
    >
      <CardContent className="p-6 sm:p-8 text-center">
        {/* Professional Photo */}
        <div className="w-32 sm:w-40 h-32 sm:h-40 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 ring-4 ring-primary/10">
          <img
            src={professional.image}
            alt={`Foto do ${professional.name}`}
            className="w-full h-full object-cover hover:scale-110 transition-smooth"
          />
        </div>
        
        {/* Specialty Badge */}
        <Badge className="mb-3" variant="secondary">
          <Stethoscope className="w-3 h-3 mr-1" />
          {professional.specialty}
        </Badge>
        
        {/* Professional Name */}
        <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">
          {professional.name}
        </h3>
        
        {/* CRM */}
        <p className="text-sm sm:text-base text-primary font-medium">
          {professional.crm}
        </p>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-12 sm:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 sm:px-4 py-2 mb-4">
            <Users className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Equipe Especializada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 px-4">
            Nossos Profissionais
          </h2>
          <p className="text-sm sm:text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Conheça nossa equipe de especialistas altamente qualificados e experientes, 
            comprometidos em oferecer o melhor cuidado à sua saúde.
          </p>
        </div>

        {/* Tabs for filtering by specialty */}
        <Tabs defaultValue="todos" className="w-full max-w-7xl mx-auto">
          <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 h-auto bg-transparent mb-8 sm:mb-12">
            <TabsTrigger 
              value="todos" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6 py-2.5 text-sm sm:text-base font-medium transition-smooth"
            >
              Todos
            </TabsTrigger>
            {specialties.map((specialty) => (
              <TabsTrigger 
                key={specialty}
                value={specialty}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-6 py-2.5 text-sm sm:text-base font-medium transition-smooth"
              >
                {specialty}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="todos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {professionals.map(renderProfessionalCard)}
            </div>
          </TabsContent>

          {specialties.map((specialty) => (
            <TabsContent key={specialty} value={specialty} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                {professionals
                  .filter(p => p.specialty === specialty)
                  .map(renderProfessionalCard)}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ProfessionalsSection;
