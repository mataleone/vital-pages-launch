import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Heart } from "lucide-react";
import heroImage from "@/assets/hospital-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hospital Jaques Gonçalves Pereira - Fachada moderna" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl text-center mx-auto text-white">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Cuidado Médico de
            <span className="block bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
              Excelência
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl mb-8 text-white/90 animate-fade-in delay-200">
            Hospital Jaques Gonçalves Pereira - Assistência médica 24 horas com equipe multiprofissional,
            50 leitos de internação e tecnologia de ponta para seu cuidado completo.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in delay-400">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow transition-bounce"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary transition-smooth"
            >
              Conhecer Serviços
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in delay-600">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Segurança</h3>
              <p className="text-sm text-white/80">Protocolos rigorosos de segurança</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">24/7</h3>
              <p className="text-sm text-white/80">Atendimento de emergência</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Cuidado</h3>
              <p className="text-sm text-white/80">Atendimento humanizado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;