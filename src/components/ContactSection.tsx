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
  Navigation,
  Instagram
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      description: "Recepção: (31) 2942-0524",
      details: "(31) 0000-0000",
      action: "Entrar em Contato"
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "recepcao.bo@redehsvp.com.br",
      details: "Resposta em até 24 horas",
      action: "Enviar E-mail"
    },
    {
      icon: Calendar,
      title: "Agendamento Online",
      description: "(31) 9999-8888, (31) 8888-9999",
      details: "(31) 8555-5555",
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
    <section id="contact" className="py-12 bg-background">{/* Reduced from py-20 */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">{/* Reduced from mb-16 */}
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Estamos aqui para cuidar da sua saúde. Entre em contato conosco 
            para agendamentos, informações ou emergências.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-10">{/* Reduced gaps and margin */}
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

        <div className="grid lg:grid-cols-2 gap-8">{/* Reduced from gap-12 */}
          {/* Left Column - Hours & Location */}
          <div className="space-y-6">{/* Reduced from space-y-8 */}
            {/* Hours */}
            <Card className="border-0 shadow-lg bg-card h-fit">
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
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">Alameda Cruz F Souza, N°500</p>
                    <p className="text-sm text-muted-foreground">
                      Distrito de Cachoeira Escura (Perpétuo Socorro)
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Belo Oriente - MG, 35195-000
                    </p>
                  </div>
                  
                  {/* Embedded Map */}
                  <div className="aspect-video w-full rounded-lg overflow-hidden border">
                    <iframe
                      src="https://maps.google.com/maps?q=Alameda+Cruz+F+Souza,+N°500+-+Distrito+de+Cachoeira+Escura+(Perpétuo+Socorro),+Belo+Oriente+-+MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização do Hospital São Vicente de Paulo"
                    />
                  </div>
                  
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
                    onClick={() => window.open('https://maps.app.goo.gl/AVeuduYcfWFGbXsE9', '_blank')}
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Ver no Google Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Emergency & Quick Actions */}
          <div className="space-y-6">{/* Reduced from space-y-8 */}
            {/* Emergency */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-red-600 text-white h-fit">
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
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm font-medium">Atendimento</span>
                    <span className="text-sm text-white/90">24 horas</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm font-medium">Leitos Disponíveis</span>
                    <span className="text-sm text-white/90">8 leitos</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20">
                    <span className="text-sm font-medium">Especialidades</span>
                    <span className="text-sm text-white/90">Urgência</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm font-medium">Observação</span>
                    <span className="text-sm text-white/90">Masc/Fem/Ped</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-4">
              {/* Quick Actions */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary via-secondary to-accent text-white">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold mb-4">
                    Ações Rápidas
                  </h3>
                  <div className="space-y-3">
                    <Button 
                      size="sm" 
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white justify-start text-sm"
                      variant="outline"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar Consulta
                    </Button>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white justify-start text-sm"
                      variant="outline"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Fale Conosco
                    </Button>
                    
                    <Button 
                      size="sm" 
                      className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white justify-start text-sm"
                      variant="outline"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Entrar em Contato
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-bold">
                      Redes Sociais
                    </h3>
                  </div>
                  <p className="text-white/90 mb-3 text-sm">
                    Acompanhe novidades e dicas de saúde.
                  </p>
                  <Button 
                    size="sm" 
                    className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white justify-start text-sm"
                    variant="outline"
                    onClick={() => window.open('https://www.instagram.com/hospital.jaquesgoncalvesp/', '_blank')}
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Seguir no Instagram
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;