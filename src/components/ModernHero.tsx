import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, MapPin, Clock, Users } from "lucide-react";

const ModernHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/a9e4cc63-eef5-4308-9bce-542fdb14620d.png" 
          alt="Hospital Jaques Gonçalves Pereira - Fachada Real" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/50 to-accent/40" />
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-20 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <img 
                  src="/lovable-uploads/00897a29-1dbc-47fd-ad4c-da44171b9c7e.png" 
                  alt="HSVP Logo" 
                  className="h-6 w-auto"
                />
                <span className="text-sm font-medium">Rede HSVP</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hospital
                <span className="block text-white/90">Jaques Gonçalves</span>
                <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Pereira
                </span>
              </h1>
            </div>

            <p className="text-xl text-white/90 leading-relaxed max-w-lg">
              Excelência médica com atendimento humanizado. Referência regional 
              em cuidados de saúde com tecnologia de ponta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4"
              >
                Agendar Cirurgia
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold px-8 py-4"
              >
                <Phone className="mr-2 w-5 h-5" />
                Agendar Consulta
              </Button>
            </div>
          </div>

          {/* Right Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            {/* Stats Cards with better transparency */}
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">50</div>
              <div className="text-sm opacity-95">Leitos Disponíveis</div>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300 mt-8 border border-white/10">
              <div className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-95">Pronto Atendimento</div>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300 border border-white/10">
              <div className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold mb-2">SUS</div>
              <div className="text-sm opacity-95">Credenciado</div>
            </div>

            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 text-center text-white hover:bg-white/20 transition-all duration-300 mt-8 border border-white/10">
              <div className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold">+</div>
              </div>
              <div className="text-3xl font-bold mb-2">8</div>
              <div className="text-sm opacity-95">Leitos Emergência</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;