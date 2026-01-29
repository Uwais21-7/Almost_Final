import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const platforms = [
  {
    name: "Swiggy",
    icon: "🛵",
    description: "Fast delivery to your doorstep",
    url: "https://www.swiggy.com/menu/923328",
  },
  {
    name: "Zomato",
    icon: "🍽️",
    description: "Order your favorites now",
    url: "https://www.zomato.com/ncr/cafe-ellebee-raj-nagar-ghaziabad/order",
  },
];

const OrderSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="order" className="cafe-section bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 texture-noise" />
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
      
      <div ref={ref} className="cafe-container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cafe-title">Order Online</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Can't visit us? No worries! Get your favorite ElleBee treats delivered right to your doorstep.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="order-platform-card group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {platform.icon}
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">
                {platform.name}
              </h3>
              <p className="text-muted-foreground">{platform.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
