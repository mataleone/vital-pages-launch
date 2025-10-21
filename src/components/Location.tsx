import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Mail, Car, Bus } from "lucide-react";

const Location = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Localização e Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos localizados no coração da cidade, com fácil acesso e 
            estacionamento disponível para sua comodidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Informações de Contato
            </h3>

            {/* Contact Cards */}
            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Alameda Cruz Souza, N°500, Alex Müller<br />
                      Distrito de Cachoeira Escura<br />
                      Belo Oriente - MG, 35195-000
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Telefones</h4>
                    <p className="text-muted-foreground">
                      Entre em contato conosco<br />
                      para agendar consultas<br />
                      ou emergências 24 horas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">Horários</h4>
                    <p className="text-muted-foreground">
                      Consultas: 6h às 22h<br />
                      Emergência: 24 horas<br />
                      Seg a Dom (incluindo feriados)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-1">E-mail</h4>
                    <p className="text-muted-foreground">
                      Entre em contato para<br />
                      informações e agendamentos
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Transport */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Como Chegar
            </h3>

            {/* Interactive Map */}
            <Card className="shadow-card border-0 mb-6 overflow-hidden">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5!2d-42.36342732982128!3d-19.308670810631384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzMxLjIiUyA0MsKwMjEnNDguMyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Hospital"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>

            {/* Transport Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="shadow-card border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Car className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">De Carro</h5>
                      <p className="text-sm text-muted-foreground">
                        Estacionamento gratuito disponível
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card border-0">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                      <Bus className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">Transporte Público</h5>
                      <p className="text-sm text-muted-foreground">
                        Fácil acesso pela rodovia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Info */}
            <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">!</span>
                </div>
                <div>
                  <h5 className="font-semibold text-red-800 mb-1">Emergência</h5>
                  <p className="text-sm text-red-700">
                    Em caso de emergência, procure nosso Pronto Atendimento. 
                    Atendimento 24 horas com 8 leitos de observação disponíveis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;