import { Card, CardContent } from "@/components/ui/card";
import medicalTeam from "@/assets/medical-team.jpg";

const Team = () => {
  const doctors = [
    {
      name: "Dra. Maria Silva",
      specialty: "Cardiologista",
      experience: "15 anos de experiência",
      description: "Especialista em cirurgias cardíacas complexas e tratamento de arritmias."
    },
    {
      name: "Dr. João Santos",
      specialty: "Neurologista",
      experience: "20 anos de experiência",
      description: "Referência em tratamento de AVC e doenças neurodegenerativas."
    },
    {
      name: "Dr. Ana Costa",
      specialty: "Pediatra",
      experience: "12 anos de experiência",
      description: "Especialista em medicina infantil e cuidados neonatais."
    },
    {
      name: "Dr. Carlos Lima",
      specialty: "Ortopedista",
      experience: "18 anos de experiência",
      description: "Expert em cirurgias de coluna e artroscopia."
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
            Contamos com uma equipe de médicos altamente qualificados e experientes, 
            comprometidos em oferecer o melhor cuidado para você e sua família.
          </p>
        </div>

        {/* Team Photo Section */}
        <div className="mb-16">
          <div className="relative overflow-hidden rounded-xl shadow-card">
            <img 
              src={medicalTeam} 
              alt="Equipe médica do Hospital Santa Saúde" 
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  Mais de 50 Especialistas
                </h3>
                <p className="text-lg md:text-xl">
                  Dedicados ao seu bem-estar
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-card hover:shadow-glow transition-bounce hover:-translate-y-2 border-0"
            >
              <CardContent className="p-6 text-center">
                {/* Doctor Avatar */}
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-white font-bold">
                    {doctor.name.charAt(3)}
                  </span>
                </div>

                {/* Doctor Info */}
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <div className="text-primary font-medium mb-2">
                  {doctor.specialty}
                </div>
                <div className="text-sm text-muted-foreground mb-3">
                  {doctor.experience}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doctor.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 p-8 bg-gradient-card rounded-xl shadow-card">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Agende sua Consulta
          </h3>
          <p className="text-muted-foreground mb-6">
            Nossa equipe está pronta para cuidar da sua saúde com excelência e dedicação.
          </p>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:shadow-glow transition-smooth">
            Marcar Consulta
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;