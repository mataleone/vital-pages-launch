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
      description: "WhatsApp - Escolha sua atendente",
      details: "Resposta rápida via WhatsApp",
      action: "Escolher Atendente"
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
                {contact.title === "Agendamento Online" ? (
                  <div className="space-y-2 w-full">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-white transition-colors"
                      onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531972052830', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Francielly
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-white transition-colors"
                      onClick={() => window.open('https://api.whatsapp.com/send/?phone=55319974042370', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Julia
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                  >
                    {contact.action}
                  </Button>
                )}
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
            <Card className="border-0 shadow-lg bg-card h-[500px] flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Localização
                  </h3>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="space-y-2 mb-4">
                    <p className="text-sm font-medium text-foreground">Alameda Cruz F Souza, N°500, Alex Müller</p>
                    <p className="text-sm text-muted-foreground">
                      Distrito de Cachoeira Escura
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Belo Oriente - MG, 35195-000
                    </p>
                  </div>
                  
                  {/* Embedded Map */}
                  <div className="w-full h-64 rounded-lg overflow-hidden border flex-1 mb-4">
                    <iframe
                      src="https://maps.google.com/maps?q=Alameda+Cruz+F+Souza,+N°500,+Alex+Müller+-+Distrito+de+Cachoeira+Escura,+Belo+Oriente+-+MG&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Localização do Hospital São Vicente de Paulo"
                    />
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full hover:bg-primary hover:text-white transition-colors"
                      onClick={() => window.open('https://maps.app.goo.gl/AVeuduYcfWFGbXsE9', '_blank')}
                    >
                      <Navigation className="w-5 h-5 mr-3" />
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Emergency & Quick Actions */}
          <div className="space-y-6">{/* Reduced from space-y-8 */}
            {/* Emergency */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-red-500 to-red-600 text-white h-fit">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Emergência 24h
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/20 last:border-0">
                    <span className="font-medium text-white">Pronto Atendimento</span>
                    <span className="text-sm text-white/90">24 horas - Todos os dias</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20 last:border-0">
                    <span className="font-medium text-white">Leitos de Observação</span>
                    <span className="text-sm text-white/90">8 leitos disponíveis</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20 last:border-0">
                    <span className="font-medium text-white">Especialidades</span>
                    <span className="text-sm text-white/90">Urgência e Emergência</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/20 last:border-0">
                    <span className="font-medium text-white">Observação</span>
                    <span className="text-sm text-white/90">Masc/Fem/Pediátrico</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-lg bg-card h-[500px] flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Redes Sociais
                  </h3>
                </div>
                <div className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-4">
                    Acompanhe nossas novidades no Instagram
                  </p>
                  {/* Instagram Feed Embed */}
                  <div className="w-full h-64 rounded-lg overflow-hidden border flex-1 mb-4">
                    <iframe
                      src="https://www.instagram.com/hospital.jaquesgoncalvesp/embed"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                      className="instagram-media"
                      title="Feed Instagram Hospital Jacques Gonçalves"
                    />
                  </div>
                  
                  <div className="mt-auto">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="w-full hover:bg-primary hover:text-white transition-colors"
                      onClick={() => window.open('https://www.instagram.com/hospital.jaquesgoncalvesp/', '_blank')}
                    >
                      <Instagram className="w-5 h-5 mr-3" />
                      Seguir no Instagram
                    </Button>
                  </div>
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