import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";

const ProfessionalsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
    <section className="py-12 bg-muted/30">{/* Reduced from py-20 */}
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">{/* Reduced from mb-12 */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Profissionais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossa equipe de especialistas altamente qualificados e experientes
          </p>
        </div>

        {/* Professionals Slideshow */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg hover:shadow-glow transition-smooth"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-2 shadow-lg hover:shadow-glow transition-smooth"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Slideshow Container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: Math.ceil(professionals.length / 3) }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {professionals.slice(slideIndex * 3, slideIndex * 3 + 3).map((professional) => (
                      <Card 
                        key={professional.id} 
                        className="bg-card shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2 border-0"
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
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: Math.ceil(professionals.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-smooth ${
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