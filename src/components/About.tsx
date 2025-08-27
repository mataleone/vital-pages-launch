import { Button } from "@/components/ui/button";
import { Check, Award, Users, Clock } from "lucide-react";
import hospitalInterior from "@/assets/hospital-interior.jpg";

const About = () => {
  const features = [
    "Tecnologia de ponta em equipamentos médicos",
    "Equipe médica altamente qualificada",
    "Atendimento humanizado e personalizado",
    "Infraestrutura moderna e confortável",
    "Certificações nacionais e internacionais",
    "Protocolos rigorosos de segurança"
  ];

  const stats = [
    {
      icon: Users,
      number: "50+",
      label: "Médicos Especialistas"
    },
    {
      icon: Award,
      number: "25+",
      label: "Anos de Experiência"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Atendimento de Emergência"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Sobre o Hospital Santa Saúde
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Há mais de 25 anos, o Hospital Santa Saúde tem sido referência em 
              excelência médica, oferecendo cuidados de saúde de alta qualidade 
              com tecnologia de ponta e atendimento humanizado.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Nossa missão é proporcionar o melhor atendimento médico, combinando 
              expertise profissional, infraestrutura moderna e um ambiente acolhedor 
              para pacientes e familiares.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-gradient-primary hover:shadow-glow transition-smooth">
              Conheça Nossa História
            </Button>
          </div>

          {/* Image and Stats */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img 
                src={hospitalInterior} 
                alt="Interior moderno do Hospital Santa Saúde" 
                className="rounded-lg shadow-card w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-card p-4 rounded-lg shadow-card text-center"
                >
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;