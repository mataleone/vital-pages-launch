import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Award, Users, Clock, Building, Shield, Heart, Stethoscope, Star } from "lucide-react";
import hospitalInterior from "@/assets/hospital-interior.jpg";

const About = () => {
  const features = [
    "Assistência médica 24 horas",
    "Equipe multiprofissional e interdisciplinar",
    "50 leitos de internação completos",
    "Salas cirúrgicas equipadas para cirurgias de médio porte",
    "Pronto atendimento com 8 leitos de observação",
    "Exames de endoscopia, colonoscopia e raio-x",
    "Exames laboratoriais rápidos",
    "Certificações e protocolos de segurança"
  ];

  const stats = [
    {
      icon: Building,
      number: "50",
      label: "Leitos de Internação",
      color: "text-primary"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Atendimento de Emergência",
      color: "text-secondary"
    },
    {
      icon: Users,
      number: "8",
      label: "Leitos de Observação",
      color: "text-accent"
    }
  ];

  const achievements = [
    {
      icon: Award,
      title: "Certificação ISO",
      description: "Padrões internacionais de qualidade",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop"
    },
    {
      icon: Shield,
      title: "Acreditação Hospitalar",
      description: "Reconhecimento pela excelência em saúde",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=300&h=200&fit=crop"
    },
    {
      icon: Heart,
      title: "Atendimento Humanizado",
      description: "Foco no cuidado integral do paciente",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="animate-fade-in space-y-8">
            <div>
              <Badge variant="outline" className="mb-4 px-4 py-2">
                <Building className="w-4 h-4 mr-2" />
                Sobre Nós
              </Badge>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                RedeHSVP - Hospital Jaques Gonçalves Pereira
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                O RedeHSVP - Hospital Jaques Gonçalves Pereira conta com assistência médica 24 horas,
                equipe multiprofissional e interdisciplinar, 50 leitos de internação, 
                salas cirúrgicas devidamente equipadas para atendimento a cirurgias de médio porte.
              </p>
              
              <p className="text-muted-foreground mb-8">
                Nossa estrutura inclui pronto atendimento com 8 leitos de observação 
                (masculino, feminino e pediátrico), consultórios para atendimentos, 
                sala de triagem, sala de emergência, sala de curativo, sala de gesso, 
                sala de nebulização, entre outros serviços essenciais para seu cuidado.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <Stethoscope className="w-4 h-4 mr-2" />
              Conheça Nossa História
            </Button>
          </div>

          {/* Image and Stats */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={hospitalInterior} 
                  alt="Interior moderno do Hospital Jaques Gonçalves Pereira" 
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Floating achievement badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <Award className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Stats overlay */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-xl p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-opacity-10 ${stat.color} mb-2`} style={{backgroundColor: `hsl(var(--primary) / 0.1)`}}>
                          <stat.icon className={`w-6 h-6 ${stat.color}`} />
                        </div>
                        <div className="font-bold text-2xl text-foreground">{stat.number}</div>
                        <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Nossos <span className="text-primary">Diferenciais</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Reconhecimento e certificações que comprovam nosso compromisso com a excelência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in border-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-full">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;