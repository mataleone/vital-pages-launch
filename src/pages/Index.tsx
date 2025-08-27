import Header from "@/components/Header";
import ModernHero from "@/components/ModernHero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ModernFooter from "@/components/ModernFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ModernHero />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <ModernFooter />
    </div>
  );
};

export default Index;
