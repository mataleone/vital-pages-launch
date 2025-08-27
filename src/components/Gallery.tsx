import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Star, Users } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const categories = [
    { id: "todos", label: "Todos", count: 12 },
    { id: "instalacoes", label: "Instalações", count: 6 },
    { id: "equipamentos", label: "Equipamentos", count: 4 },
    { id: "equipe", label: "Equipe Médica", count: 2 }
  ];

  const galleryItems = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop",
      alt: "Centro cirúrgico moderno",
      category: "instalacoes",
      title: "Centro Cirúrgico",
      description: "Salas cirúrgicas com tecnologia de ponta"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&h=300&fit=crop",
      alt: "Quarto de internação confortável",
      category: "instalacoes",
      title: "Quartos de Internação",
      description: "Ambiente acolhedor para recuperação"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=300&fit=crop",
      alt: "Equipamentos médicos avançados",
      category: "equipamentos",
      title: "Equipamentos Avançados",
      description: "Tecnologia médica de última geração"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=300&fit=crop",
      alt: "UTI moderna",
      category: "instalacoes",
      title: "UTI Moderna",
      description: "Cuidados intensivos especializados"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=face",
      alt: "Equipe médica especializada",
      category: "equipe",
      title: "Equipe Médica",
      description: "Profissionais altamente qualificados"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=300&fit=crop",
      alt: "Sala de diagnóstico",
      category: "equipamentos",
      title: "Diagnóstico Avançado",
      description: "Exames precisos e rápidos"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      alt: "Recepção moderna",
      category: "instalacoes",
      title: "Recepção",
      description: "Ambiente acolhedor e moderno"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      alt: "Laboratório de análises",
      category: "equipamentos",
      title: "Laboratório",
      description: "Análises clínicas precisas"
    }
  ];

  const filteredItems = selectedCategory === "todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Eye className="w-4 h-4 mr-2" />
            Nossa Galeria
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Conheça Nossas <span className="text-primary">Instalações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossos espaços modernos, equipamentos de última geração e equipe especializada
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-500 animate-fade-in border-0 bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, value: "150+", label: "Profissionais" },
            { icon: Heart, value: "25K+", label: "Pacientes Atendidos" },
            { icon: Star, value: "4.9", label: "Avaliação Média" },
            { icon: Eye, value: "50+", label: "Leitos Disponíveis" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;