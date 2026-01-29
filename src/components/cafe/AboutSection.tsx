import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="cafe-section bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 texture-noise" />
      
      <div ref={ref} className="cafe-container relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="cafe-title">About Us</h2>
          <div className="section-divider" />
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed">
              Welcome to <span className="text-primary font-medium">Cafe ElleBee</span>, where every cup tells a story and every moment is crafted with care. Nestled in the heart of Raj Nagar, we're more than just a café – we're your cozy sanctuary for exceptional coffee, delightful conversations, and unforgettable experiences.
            </p>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              From our carefully sourced beans to our warm, inviting ambience, everything at ElleBee is designed to make you feel at home. Whether you're catching up with friends, working on your next big idea, or simply savoring a quiet moment, we've created the perfect space for you.
            </p>
            
            <p className="text-primary text-xl font-display font-medium mt-8">
              Quality coffee. Premium ambience. Endless vibes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
