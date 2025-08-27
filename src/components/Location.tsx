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
                      Avenida da Saúde, 1234<br />
                      Centro Médico - São Paulo, SP<br />
                      CEP: 01234-567
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
                      Recepção: (11) 3456-7890<br />
                      Emergência: (11) 3456-7891<br />
                      WhatsApp: (11) 99999-8888
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
                      contato@hospitalsantasaude.com.br<br />
                      agendamento@hospitalsantasaude.com.br
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

            {/* Map Placeholder */}
            <Card className="shadow-card border-0 mb-6">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm">Mapa Interativo</p>
                    <p className="text-xs">Av. da Saúde, 1234 - Centro Médico</p>
                  </div>
                </div>
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
                        Estação Metro Centro a 200m
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
                    Em caso de emergência, dirija-se ao Pronto Socorro 
                    (entrada pela Rua das Urgências, 567) ou ligue para (11) 3456-7891
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