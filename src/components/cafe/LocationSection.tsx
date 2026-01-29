import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock } from "lucide-react";

const LocationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="location" className="cafe-section relative" style={{ background: "hsl(25 20% 6%)" }}>
      <div className="absolute inset-0 texture-noise" />
      
      <div ref={ref} className="cafe-container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cafe-title">Visit Us</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Map */}
          <motion.div
            className="lg:col-span-3 rounded-3xl overflow-hidden border-2 border-border/40 h-[350px] md:h-[450px]"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5588443!2d77.4348876!3d28.6685607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bd6b9d6b9d%3A0x1234567890abcdef!2sB-19%2C%20RDC%2C%20Raj%20Nagar%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201002!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(90%)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cafe ElleBee Location"
            />
          </motion.div>

          {/* Address Card */}
          <motion.div
            className="lg:col-span-2 cafe-card"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-xl text-primary mb-2">Find Us Here</h3>
                <p className="text-muted-foreground leading-relaxed">
                  B-19 Ground Floor, RDC<br />
                  Raj Nagar<br />
                  Ghaziabad, Uttar Pradesh<br />
                  201002
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/place/Cafe+ElleBee/@28.6685607,77.4348876,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hero-primary w-full mb-8"
            >
              Get Directions
            </a>

            <div className="pt-6 border-t border-primary/20">
              <div className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display text-xl text-primary mb-2">Opening Hours</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Monday – Sunday<br />
                    <span className="text-foreground font-medium">10:00 AM – 11:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
