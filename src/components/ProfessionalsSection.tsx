import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, ChevronLeft, ChevronRight, Users } from "lucide-react";

const ProfessionalsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const professionals = [
    {
      id: 1,
      name: "Dr. Carlos Silva",
      specialty: "Cardiologista",
      crm: "CRM MG 12345-6",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 2,
      name: "Dra. Ana Santos",
      specialty: "Pediatra",
      crm: "CRM MG 23456-7",
      image: "https://images.unsplash.com/photo-1594824720330-67b799c6dc1e?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 3,
      name: "Dr. Roberto Lima",
      specialty: "Ortopedista",
      crm: "CRM MG 34567-8",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 4,
      name: "Dra. Mariana Costa",
      specialty: "Neurologista",
      crm: "CRM MG 45678-9",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 5,
      name: "Dr. José Oliveira",
      specialty: "Gastroenterologista",
      crm: "CRM MG 56789-0",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 6,
      name: "Dra. Patricia Mendes",
      specialty: "Ginecologista",
      crm: "CRM MG 67890-1",
      image: "https://images.unsplash.com/photo-1584467735871-8b5d0542c84f?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 7,
      name: "Dr. Eduardo Rocha",
      specialty: "Dermatologista",
      crm: "CRM MG 78901-2",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 8,
      name: "Dra. Fernanda Alves",
      specialty: "Psiquiatra",
      crm: "CRM MG 89012-3",
      image: "https://images.unsplash.com/photo-1627499736738-7bb0ba2a4eea?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    },
    {
      id: 9,
      name: "Dr. Marcos Ferreira",
      specialty: "Urologista",
      crm: "CRM MG 90123-4",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=300&h=300&fit=crop&crop=face",
      social: "instagram"
    }
  ];

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(professionals.length / 3));
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [professionals.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(professionals.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(professionals.length / 3)) % Math.ceil(professionals.length / 3));
  };

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

        {/* Professionals Slideshow */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg hover:shadow-glow transition-smooth"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg hover:shadow-glow transition-smooth"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Slideshow Container */}
          <div className="overflow-hidden mx-2 sm:mx-4 md:mx-8 lg:mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(professionals.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                    {professionals.slice(slideIndex * 3, slideIndex * 3 + 3).map((professional) => (
                      <Card 
                        key={professional.id} 
                        className="bg-card shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 border-0"
                      >
                        <CardContent className="p-4 sm:p-6 text-center">
                          {/* Professional Photo */}
                          <div className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden bg-muted">
                            <img
                              src={professional.image}
                              alt={`Foto do ${professional.name}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          {/* Professional Name */}
                          <h3 className="text-base sm:text-lg font-semibold text-foreground mb-1 sm:mb-2">
                            {professional.name}
                          </h3>
                          
                          {/* Specialty */}
                          <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">
                            {professional.specialty}
                          </p>
                          
                          {/* CRM */}
                          <p className="text-xs text-primary font-medium mb-3 sm:mb-4">
                            {professional.crm}
                          </p>
                          
                          {/* Social Media Link */}
                          <button className="inline-flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <Instagram className="w-3 sm:w-4 h-3 sm:h-4" />
                          </button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
            {Array.from({ length: Math.ceil(professionals.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-smooth ${
                  currentSlide === index 
                    ? 'bg-primary shadow-glow' 
                    : 'bg-muted hover:bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsSection;