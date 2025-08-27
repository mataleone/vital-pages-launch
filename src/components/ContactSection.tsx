import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Car, 
  Bus, 
  AlertCircle,
  MessageCircle,
  Calendar,
  Navigation
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      description: "Atendimento e agendamentos",
      details: "Entre em contato conosco",
      action: "Ligar Agora"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Informações e dúvidas",
      details: "Resposta em até 24 horas",
      action: "Enviar E-mail"
    },
    {
      icon: Calendar,
      title: "Agendamento Online",
      description: "Agende sua consulta",
      details: "Disponível 24 horas por dia",
      action: "Agendar"
    }
  ];

  const hours = [
    { service: "Consultas Médicas", time: "Segunda a Sexta: 6h às 22h" },
    { service: "Pronto Atendimento", time: "24 horas - Todos os dias" },
    { service: "Exames", time: "Segunda a Sábado: 7h às 17h" },
    { service: "Cirurgias", time: "Segunda a Sexta: 7h às 19h" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos aqui para cuidar da sua saúde. Entre em contato conosco 
            para agendamentos, informações ou emergências.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Methods */}
          {contactInfo.map((contact, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {contact.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {contact.description}
                </p>
                <p className="text-xs text-muted-foreground mb-4">
                  {contact.details}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full hover:bg-primary hover:text-white transition-colors"
                >
                  {contact.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Hours & Location */}
          <div className="space-y-8">
            {/* Hours */}
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Horários de Funcionamento
                  </h3>
                </div>
                <div className="space-y-4">
                  {hours.map((hour, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{hour.service}</span>
                      <span className="text-sm text-muted-foreground">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-0 shadow-lg bg-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Localização
                  </h3>
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Entre em contato conosco para informações detalhadas sobre nossa localização 
                    e como chegar ao hospital.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Car className="w-4 h-4 text-primary" />
                      <span>Estacionamento gratuito</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Bus className="w-4 h-4 text-primary" />
                      <span>Acesso por transporte público</span>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Ver Localização
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Emergency & Quick Actions */}
          <div className="space-y-8">
            {/* Emergency */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-red-600 text-white">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Emergência 24h
                  </h3>
                </div>
                <p className="text-white/90 mb-4">
                  Em caso de emergência, procure nosso Pronto Atendimento. 
                  Contamos com 8 leitos de observação e equipe especializada disponível 24 horas.
                </p>
                <div className="space-y-2">
                  <div className="text-sm">• Atendimento imediato</div>
                  <div className="text-sm">• Leitos masculino, feminino e pediátrico</div>
                  <div className="text-sm">• Equipe médica de plantão</div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary via-secondary to-accent text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">
                  Ações Rápidas
                </h3>
                <div className="space-y-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white justify-start"
                    variant="outline"
                  >
                    <Calendar className="w-5 h-5 mr-3" />
                    Agendar Consulta
                  </Button>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white justify-start"
                    variant="outline"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Fale Conosco
                  </Button>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white justify-start"
                    variant="outline"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Ligar Agora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;