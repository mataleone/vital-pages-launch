import { Card, CardContent } from "@/components/ui/card";
import { Award, Users } from "lucide-react";
import medicalTeam from "@/assets/medical-team.jpg";

const Team = () => {
  const values = [
    {
      icon: Award,
      title: "Referência",
      description: "Somos referência em atendimento, pronto socorro, internações e cirurgias na região, unindo tecnologia, equipe médica experiente e um atendimento humanizado para garantir o melhor cuidado com a sua saúde."
    },
    {
      icon: Users,
      title: "Excelência",
      description: "Aqui, cada atendimento é feito com dedicação, respeito e o compromisso de cuidar de você com excelência."
    }
  ];

  const surgeons = [
    {
      name: "Dr. Higor Karlesh",
      specialty: "Cirurgião Geral",
      experience: "Especialista em cirurgias gerais",
      description: "Cirurgião altamente renomado e capacitado, assegurando a qualidade dos procedimentos realizados."
    },
    {
      name: "Dr. Marcos Villela",
      specialty: "Cirurgião Geral", 
      experience: "Especialista em cirurgias gerais",
      description: "Cirurgião experiente com vasta experiência em procedimentos cirúrgicos complexos."
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa Equipe Médica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Equipe formada por cirurgiões altamente renomados e capacitados, 
            que asseguram a qualidade dos procedimentos realizados.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="bg-card shadow-card border-0">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Photo Section */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-xl shadow-card">
            <img 
              src={medicalTeam} 
              alt="Equipe médica do Hospital Jaques Gonçalves Pereira" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Equipe Multiprofissional
                </h3>
                <p className="text-lg md:text-xl">
                  Dedicados ao seu bem-estar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Surgeons Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Nossos Cirurgiões
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {surgeons.map((surgeon, index) => (
              <Card 
                key={index} 
                className="bg-card shadow-card hover:shadow-glow transition-bounce hover:-translate-y-2 border-0"
              >
                <CardContent className="p-6 text-center">
                  {/* Surgeon Avatar */}
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-white font-bold">
                      {surgeon.name.split(' ')[1].charAt(0)}
                    </span>
                  </div>

                  {/* Surgeon Info */}
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {surgeon.name}
                  </h4>
                  <div className="text-primary font-medium mb-2">
                    {surgeon.specialty}
                  </div>
                  <div className="text-sm text-muted-foreground mb-3">
                    {surgeon.experience}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {surgeon.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Commitment Section */}
        <div className="text-center p-8 bg-gradient-card rounded-xl shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Nosso Compromisso
          </h3>
          <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Cada paciente é uma vida que merece respeito e agilidade no cuidado. 
            Com a parceria da Secretaria Municipal de Saúde, facilitamos o acesso aos nossos 
            serviços, reforçando nosso propósito de fazer a diferença, todos os dias.
          </p>
          <a href="https://api.whatsapp.com/send/?phone=5531998678593&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-smooth inline-block">
            Marcar Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team;