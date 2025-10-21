import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";
import drHigorCarlech from "@/assets/dr-higor-carlech-new.jpg";
import drLucasFerreira from "@/assets/dr-lucas-ferreira.png";
import drWaldeckDuarte from "@/assets/dr-waldeck-duarte.png";
import drMarcosVillela from "@/assets/dr-marcos-villela.jpg";

const ProfessionalsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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


  return (
    <section className="py-6 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8">
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

        {/* Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {professionals.map((professional) => (
            <Card 
              key={professional.id} 
              className="bg-card shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 border-0"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                {/* Professional Photo */}
                <div className="w-32 sm:w-40 h-32 sm:h-40 mx-auto mb-4 sm:mb-6 rounded-full overflow-hidden bg-muted">
                  <img
                    src={professional.image}
                    alt={`Foto do ${professional.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Professional Name */}
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3">
                  {professional.name}
                </h3>
                
                {/* Specialty */}
                <p className="text-base sm:text-lg text-muted-foreground mb-2 sm:mb-3">
                  {professional.specialty}
                </p>
                
                {/* CRM */}
                <p className="text-sm sm:text-base text-primary font-medium">
                  {professional.crm}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;