import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const ProfessionalsSection = () => {
  const professionals = [
    {
      id: 1,
      name: "Dr. Carlos Silva",
      specialty: "Cardiologista",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      social: "facebook"
    },
    {
      id: 2,
      name: "Dra. Ana Santos",
      specialty: "Pediatra",
      image: "https://images.unsplash.com/photo-1594824720330-67b799c6dc1e?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 3,
      name: "Dr. Roberto Lima",
      specialty: "Ortopedista",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      social: "linkedin"
    },
    {
      id: 4,
      name: "Dra. Mariana Costa",
      specialty: "Neurologista",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      social: "facebook"
    },
    {
      id: 5,
      name: "Dr. José Oliveira",
      specialty: "Gastroenterologista",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 6,
      name: "Dra. Patricia Mendes",
      specialty: "Ginecologista",
      image: "https://images.unsplash.com/photo-1584467735871-8b5d0542c84f?w=300&h=300&fit=crop&crop=face",
      social: "linkedin"
    },
    {
      id: 7,
      name: "Dr. Eduardo Rocha",
      specialty: "Dermatologista",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      social: "facebook"
    },
    {
      id: 8,
      name: "Dra. Fernanda Alves",
      specialty: "Psiquiatra",
      image: "https://images.unsplash.com/photo-1627499736738-7bb0ba2a4eea?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 9,
      name: "Dr. Marcos Ferreira",
      specialty: "Urologista",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=300&h=300&fit=crop&crop=face",
      social: "linkedin"
    }
  ];

  const getSocialIcon = (social: string) => {
    switch (social) {
      case "facebook":
        return <Facebook className="w-4 h-4" />;
      case "instagram":
        return <Instagram className="w-4 h-4" />;
      case "linkedin":
        return <Linkedin className="w-4 h-4" />;
      default:
        return <Facebook className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Profissionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa equipe de especialistas altamente qualificados e experientes
          </p>
        </div>

        {/* Professionals Grid with Scroll */}
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-6 pb-4">
            {professionals.map((professional) => (
              <Card 
                key={professional.id} 
                className="flex-none w-64 bg-card shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 border-0"
              >
                <CardContent className="p-6 text-center">
                  {/* Professional Photo */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <img
                      src={professional.image}
                      alt={`Foto do ${professional.name}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Professional Name */}
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {professional.name}
                  </h3>
                  
                  {/* Specialty */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {professional.specialty}
                  </p>
                  
                  {/* Social Media Link */}
                  <button className="inline-flex items-center justify-center w-10 h-10 bg-gradient-primary text-white rounded-full hover:shadow-glow transition-smooth hover:scale-105">
                    {getSocialIcon(professional.social)}
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Agende uma consulta com nossos especialistas
          </p>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-smooth">
            Ver Todos os Profissionais
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;