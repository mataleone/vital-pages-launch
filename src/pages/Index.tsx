import Header from "@/components/Header";
import ModernHero from "@/components/ModernHero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ValuesSection from "@/components/ValuesSection";
import InstallationsSection from "@/components/InstallationsSection";
import ProfessionalsSection from "@/components/ProfessionalsSection";
import ElectiveSurgeriesSection from "@/components/ElectiveSurgeriesSection";
import ContactSection from "@/components/ContactSection";
import ModernFooter from "@/components/ModernFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ModernHero />
      <AboutSection />
      <ServicesSection />
      <ValuesSection />
      <InstallationsSection />
      <ProfessionalsSection />
      <ElectiveSurgeriesSection />
      <ContactSection />
      <ModernFooter />
    </div>
  );
};

export default Index;
