import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Heart, Award, Users, MapPin } from "lucide-react";
import heroImage from "@/assets/hospital-hero.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Hospital Jaques Gonçalves Pereira - Fachada moderna" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Floating images for visual appeal */}
      <div className="absolute top-20 right-10 w-24 h-24 rounded-full overflow-hidden shadow-lg animate-float hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop&crop=face" 
          alt="Doctor placeholder" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="absolute bottom-32 left-10 w-20 h-20 rounded-lg overflow-hidden shadow-lg animate-float delay-300 hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=200&h=200&fit=crop" 
          alt="Medical equipment placeholder" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="absolute top-1/2 left-8 w-16 h-16 rounded-full overflow-hidden shadow-lg animate-float delay-500 hidden xl:block">
        <img 
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=200&h=200&fit=crop" 
          alt="Hospital room placeholder" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
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

          {/* Trust Indicators with enhanced visuals */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in delay-600">
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Segurança</h3>
              <p className="text-sm text-white/80 text-center">Protocolos rigorosos de segurança</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-1">24/7</h3>
              <p className="text-sm text-white/80 text-center">Atendimento de emergência</p>
            </div>
            
            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Cuidado</h3>
              <p className="text-sm text-white/80 text-center">Atendimento humanizado</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-3 group-hover:bg-white/20 transition-all duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-1">Excelência</h3>
              <p className="text-sm text-white/80 text-center">Reconhecimento nacional</p>
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