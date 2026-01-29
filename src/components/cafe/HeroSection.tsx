import { motion } from "framer-motion";
import { Coffee, MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Heading */}
            <motion.h1 
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Brewed To Perfection,
              <br />
              Served With Love
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              className="text-muted-foreground text-base md:text-lg mb-10 max-w-md leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere designed to inspire and unwind.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a 
                href="#order" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:-translate-y-1 shadow-glow"
              >
                <Coffee className="w-5 h-5" />
                Order Online
              </a>
              <a 
                href="https://www.google.com/maps/place/Cafe+ElleBee/@28.6685607,77.4348876,17z" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-base border-2 border-primary text-primary bg-transparent hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <MapPin className="w-5 h-5" />
                Find a Location
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80" 
                alt="Artisan coffee in ceramic mug"
                className="w-full h-full object-cover rounded-full shadow-2xl"
              />
              {/* Decorative shadow */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-foreground/20 blur-xl rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
