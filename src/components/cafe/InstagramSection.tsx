import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="instagram" className="cafe-section relative bg-card">
      <div className="absolute inset-0 texture-noise" />
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div ref={ref} className="cafe-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cafe-title">Follow Our Journey</h2>
          <div className="section-divider" />
          
          <p className="font-display text-xl md:text-2xl text-muted-foreground mb-8">
            Follow us <span className="text-primary font-semibold">@cafe_ellebee</span>
          </p>

          <motion.a
            href="https://www.instagram.com/cafe_ellebee"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-instagram"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
