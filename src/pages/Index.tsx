import HeroSection from "@/components/cafe/HeroSection";
import AboutSection from "@/components/cafe/AboutSection";
import MenuSection from "@/components/cafe/MenuSection";
import OrderSection from "@/components/cafe/OrderSection";
import LocationSection from "@/components/cafe/LocationSection";
import GallerySection from "@/components/cafe/GallerySection";
import InstagramSection from "@/components/cafe/InstagramSection";
import ContactSection from "@/components/cafe/ContactSection";
import Footer from "@/components/cafe/Footer";
import FloatingNav from "@/components/cafe/FloatingNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Floating Navigation */}
      <FloatingNav />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Menu Section */}
      <MenuSection />
      
      {/* Order Online Section */}
      <OrderSection />
      
      {/* Location Section */}
      <LocationSection />
      
      {/* Gallery Section */}
      <GallerySection />
      
      {/* Instagram Section */}
      <InstagramSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
