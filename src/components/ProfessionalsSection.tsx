import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Users, Stethoscope } from "lucide-react";
import drHigorCarlech from "@/assets/dr-higor-carlech-new.jpg";
import drLucasFerreira from "@/assets/dr-lucas-ferreira-new.jpg";
import drWaldeckDuarte from "@/assets/dr-waldeck-duarte-new.jpg";
import drMarcosVillela from "@/assets/dr-marcos-villela-new.jpg";
import drLipeAlvim from "@/assets/dr-lipe-alvim.jpg";

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
    },
    {
      id: 5,
      name: "Dr. Lipe de Mello Alvim",
      specialty: "Urologista",
      crm: "CRM MG 52545",
      image: drLipeAlvim
    }
  ];

  // Get unique specialties
  const specialties = Array.from(new Set(professionals.map(p => p.specialty)));

  const renderProfessionalCard = (professional: typeof professionals[0]) => (
    <Card 
      key={professional.id} 
      className="group bg-gradient-to-br from-card to-card/50 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-3 border-0 animate-fade-in overflow-hidden relative"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
      
      <CardContent className="p-6 sm:p-8 text-center relative z-10">
        {/* Professional Photo with enhanced styling */}
        <div className="relative w-36 sm:w-44 h-36 sm:h-44 mx-auto mb-6">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/20 to-primary/10 rounded-full blur-xl group-hover:blur-2xl transition-smooth" />
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-transparent ring-4 ring-primary/20 group-hover:ring-primary/40 transition-smooth">
            <img
              src={professional.image}
              alt={`Foto do ${professional.name}`}
              className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
            />
          </div>
        </div>
        
        {/* Specialty Badge with icon */}
        <Badge className="mb-4 px-4 py-1.5 text-xs sm:text-sm font-medium shadow-sm" variant="secondary">
          <Stethoscope className="w-3.5 h-3.5 mr-1.5" />
          {professional.specialty}
        </Badge>
        
        {/* Professional Name with gradient text */}
        <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent mb-3 leading-tight">
          {professional.name}
        </h3>
        
        {/* CRM with enhanced styling */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <p className="text-sm sm:text-base text-primary font-semibold tracking-wide">
            {professional.crm}
          </p>
        </div>
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

        {/* Enhanced Tabs for filtering by specialty */}
        <Tabs defaultValue="todos" className="w-full max-w-7xl mx-auto">
          <TabsList className="w-full sm:w-auto grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 h-auto bg-muted/50 backdrop-blur-sm rounded-full p-2 mb-10 sm:mb-14 shadow-sm">
            <TabsTrigger 
              value="todos" 
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-smooth hover:bg-muted"
            >
              <Users className="w-4 h-4 mr-2" />
              Todos
            </TabsTrigger>
            {specialties.map((specialty) => (
              <TabsTrigger 
                key={specialty}
                value={specialty}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-smooth hover:bg-muted"
              >
                {specialty}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="todos" className="mt-0 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
              {professionals.map(renderProfessionalCard)}
            </div>
          </TabsContent>

          {specialties.map((specialty) => (
            <TabsContent key={specialty} value={specialty} className="mt-0 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
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
