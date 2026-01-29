import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Swiggy", url: "https://www.swiggy.com/menu/923328" },
    { name: "Zomato", url: "https://www.zomato.com/ncr/cafe-ellebee-raj-nagar-ghaziabad/order" },
    { name: "Instagram", url: "https://www.instagram.com/cafe_ellebee" },
    { name: "Directions", url: "https://www.google.com/maps/place/Cafe+ElleBee/@28.6685607,77.4348876,17z" },
  ];

  return (
    <footer className="py-12 px-4 relative bg-secondary">
      <div className="absolute inset-0 texture-noise" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <motion.div 
        className="cafe-container relative z-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Brand */}
        <h2 className="font-display text-3xl text-primary mb-6">Cafe ElleBee</h2>
        
        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors text-sm link-underline"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        {/* Copyright */}
        <p className="text-muted-foreground text-sm opacity-70">
          © {currentYear} Cafe ElleBee. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
