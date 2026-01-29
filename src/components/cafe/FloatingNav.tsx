import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Coffee, ShoppingBag, MapPin, Image, Instagram } from "lucide-react";

const navLinks = [
  { name: "Menu", href: "#menu", icon: Coffee },
  { name: "Order Online", href: "#order", icon: ShoppingBag },
  { name: "Location", href: "#location", icon: MapPin },
  { name: "Gallery", href: "#gallery", icon: Image },
  { name: "Instagram", href: "#instagram", icon: Instagram },
];

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 20;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Fixed Top-Right Trigger Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-0 cursor-pointer"
            style={{
              background: isOpen ? "hsl(var(--card))" : "var(--gradient-golden)",
              color: isOpen ? "hsl(var(--primary))" : "hsl(var(--primary-foreground))",
              boxShadow: isOpen ? "var(--shadow-card)" : "var(--shadow-glow)",
              border: isOpen ? "2px solid hsl(var(--primary))" : "none",
            }}
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        )}
      </AnimatePresence>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sliding Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-card border-l border-border shadow-elevated"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Menu Header */}
            <div className="p-8 pt-24">
              <h2 className="text-2xl font-semibold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                Navigation
              </h2>
              <p className="text-sm text-muted-foreground">
                Explore our café
              </p>
            </div>

            {/* Menu Links */}
            <div className="px-4 pb-8">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-4 w-full text-left px-6 py-4 text-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all duration-200 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </span>
                    <span className="text-base font-medium">{link.name}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                © 2024 Café. All rights reserved.
              </p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
