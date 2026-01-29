import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MapPin, Instagram } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactItems = [
    {
      icon: Phone,
      title: "Call Us",
      content: "(Contact number available in-store)",
      isNote: true,
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "B-19 Ground Floor, RDC, Raj Nagar\nGhaziabad, UP 201002",
    },
    {
      icon: Instagram,
      title: "Follow Us",
      content: "@cafe_ellebee",
      link: "https://www.instagram.com/cafe_ellebee",
    },
  ];

  return (
    <section id="contact" className="cafe-section bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 texture-noise" />
      
      <div ref={ref} className="cafe-container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cafe-title">Get In Touch</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          {contactItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-primary">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors link-underline inline-block"
                >
                  {item.content}
                </a>
              ) : (
                <p className={`text-muted-foreground whitespace-pre-line ${item.isNote ? "text-sm italic opacity-70" : ""}`}>
                  {item.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
