
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import ThemeToggle from "@/components/ThemeToggle";
import BackgroundEffect from "@/components/BackgroundEffect";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechStackSection from "@/components/sections/TechStackSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Set the dark mode as default
  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <div className="antialiased selection:bg-primary selection:bg-opacity-30 selection:text-primary-foreground">
      {/* Background Effects */}
      <BackgroundEffect />
      
      {/* Theme Toggle Button */}
      <ThemeToggle />
      
      {/* Navigation */}
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <HeroSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Tech Stack Section */}
        <TechStackSection />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Education Section */}
        <EducationSection />
        
        {/* Experience Section */}
        <ExperienceSection />

        {/* Achievements Section */}
        <AchievementsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
