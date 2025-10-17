import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Clock, Award } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0">
        <div className="w-full h-full bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            RedeHSVP - Hospital Jaques Gonçalves Pereira
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-white/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Excelência em saúde com atendimento humanizado
          </p>
          
          <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            50 leitos, pronto atendimento 24h, bloco cirúrgico e exames especializados. 
            Referência regional em cuidados médicos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-glow"
              asChild
            >
              <a href="https://api.whatsapp.com/send/?phone=5531998678593&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                Agendar Consulta
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
            >
              Emergência 24h
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <div className="text-lg font-bold">50 Leitos</div>
                <div className="text-xs text-white/80">Internação completa</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <div className="text-lg font-bold">24 Horas</div>
                <div className="text-xs text-white/80">Emergência</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <div className="text-lg font-bold">SUS</div>
                <div className="text-xs text-white/80">Credenciado</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="text-white">
                <div className="text-lg font-bold">Referência</div>
                <div className="text-xs text-white/80">Regional</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;