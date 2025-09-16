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
      description: "(31) 2942-0524",
      details: "(31) 99867-8593",
      action: "Entrar em Contato"
    },
    {
      icon: Mail,
      title: "E-mail", 
      description: "recepcao.bo@redehsvp.com.br",
      details: "",
      action: "Enviar E-mail"
    },
    {
      icon: Calendar,
      title: "Agendamento Online",
      description: "WhatsApp - Escolha sua atendente",
      details: "",
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
    <section id="contact" className="py-6 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-3 sm:px-4 py-2 mb-4">
            <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Contato e Localização</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Entre em Contato
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Estamos aqui para cuidar da sua saúde. Entre em contato conosco 
            para agendamentos, informações ou emergências.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
          {/* Contact Methods */}
          {contactInfo.map((contact, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 border-0 shadow-lg hover:shadow-xl bg-card">
              <CardContent className="p-4 sm:p-6 text-center">
                <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-primary to-secondary rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <contact.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 sm:mb-2">
                  {contact.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2">
                  {contact.description}
                </p>
                {contact.title === "Telefone" && (
                  <div className="space-y-2 w-full">
                    <p className="text-xs text-muted-foreground mb-3">
                      {contact.details}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-white transition-colors mb-2"
                      onClick={() => window.location.href = 'tel:31294205024'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Entrar em Contato
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full hover:bg-primary hover:text-white transition-colors"
                      onClick={() => window.open('https://api.whatsapp.com/send/?phone=553100000000', '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </div>
                )}
                {contact.title === "E-mail" && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full hover:bg-primary hover:text-white transition-colors"
                    onClick={() => window.location.href = 'mailto:recepcao.bo@redehsvp.com.br'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar E-mail
                  </Button>
                )}
                {contact.title === "Agendamento Online" && (
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
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Hours & Location */}
          <div className="space-y-4 sm:space-y-6">
            {/* Hours */}
            <Card className="border-0 shadow-lg bg-card h-fit">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    Horários de Funcionamento
                  </h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {hours.map((hour, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-border last:border-0 space-y-1 sm:space-y-0">
                      <span className="font-medium text-foreground text-sm sm:text-base">{hour.service}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{hour.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-0 shadow-lg bg-card h-[400px] sm:h-[500px] flex flex-col">
              <CardContent className="p-4 sm:p-6 flex-1 flex flex-col">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    Localização
                  </h3>
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="space-y-1 sm:space-y-2 mb-3 sm:mb-4">
                    <p className="text-xs sm:text-sm font-medium text-foreground">Alameda Cruz F Souza, N°500, Alex Müller</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Distrito de Cachoeira Escura
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Belo Oriente - MG, 35195-000
                    </p>
                  </div>
                  
                  {/* Embedded Map */}
                  <div className="w-full h-48 sm:h-64 rounded-lg overflow-hidden border flex-1 mb-3 sm:mb-4">
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
                      className="w-full hover:bg-primary hover:text-white transition-colors text-sm sm:text-base"
                      onClick={() => window.open('https://maps.app.goo.gl/AVeuduYcfWFGbXsE9', '_blank')}
                    >
                      <Navigation className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" />
                      Ver no Google Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Emergency & Quick Actions */}
          <div className="space-y-4 sm:space-y-6">
            {/* Trabalhe Conosco */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-primary to-secondary text-white h-fit">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">
                    Trabalhe Conosco
                  </h3>
                </div>
                <div className="space-y-4 mb-6">
                  <p className="text-white/90 text-sm leading-relaxed">
                    Faça parte da nossa equipe! Estamos sempre em busca de profissionais qualificados e comprometidos com a excelência no atendimento.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-white/70 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-white/90">Oportunidades em diversas áreas da saúde</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-white/70 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-white/90">Ambiente de trabalho colaborativo</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full bg-white/10 text-white border-white/30 hover:bg-white hover:text-primary transition-colors"
                  onClick={() => window.open('https://forms.google.com/xxyyzz', '_blank')}
                >
                  <Calendar className="w-5 h-5 mr-3" />
                  Cadastrar Currículo
                </Button>
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