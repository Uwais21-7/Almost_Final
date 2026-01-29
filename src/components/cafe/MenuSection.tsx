import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface MenuItem {
  name: string;
  price: string;
  description: string;
  isBestseller?: boolean;
}

interface MenuCategory {
  icon: string;
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    icon: "☕",
    title: "Coffee",
    items: [
      { name: "Cappuccino", price: "₹120", description: "Classic Italian espresso with steamed milk foam", isBestseller: true },
      { name: "Café Latte", price: "₹130", description: "Smooth espresso with velvety steamed milk" },
      { name: "Americano", price: "₹100", description: "Bold espresso with hot water for a rich flavor" },
      { name: "Cold Coffee", price: "₹140", description: "Chilled coffee blend with ice cream" },
    ],
  },
  {
    icon: "🍵",
    title: "Hot Beverages",
    items: [
      { name: "Masala Chai", price: "₹60", description: "Traditional Indian spiced tea" },
      { name: "Hot Chocolate", price: "₹110", description: "Rich cocoa with steamed milk and whipped cream" },
      { name: "Green Tea", price: "₹80", description: "Refreshing herbal green tea" },
    ],
  },
  {
    icon: "🥤",
    title: "Shakes & Cold Beverages",
    items: [
      { name: "Oreo Shake", price: "₹160", description: "Creamy Oreo cookie milkshake topped with cream", isBestseller: true },
      { name: "Chocolate Shake", price: "₹150", description: "Rich chocolate blended with ice cream" },
      { name: "Mango Smoothie", price: "₹140", description: "Fresh mango smoothie with yogurt" },
      { name: "Fresh Lime Soda", price: "₹80", description: "Refreshing lime with sparkling soda" },
    ],
  },
  {
    icon: "🍔",
    title: "Snacks & Fast Food",
    items: [
      { name: "Paneer Tikka Wrap", price: "₹180", description: "Grilled paneer tikka with veggies in soft wrap", isBestseller: true },
      { name: "Double Decker Burger", price: "₹160", description: "Double patty veg burger with cheese and sauces" },
      { name: "Grilled Cottage Sandwich", price: "₹140", description: "Grilled sandwich with cottage cheese filling" },
      { name: "French Fries", price: "₹90", description: "Crispy golden fries with seasoning" },
      { name: "Veg Pizza (Regular)", price: "₹220", description: "Loaded with fresh veggies and mozzarella cheese" },
    ],
  },
  {
    icon: "🍰",
    title: "Desserts",
    items: [
      { name: "Chocolate Brownie", price: "₹120", description: "Warm brownie with vanilla ice cream", isBestseller: true },
      { name: "Red Velvet Cake", price: "₹130", description: "Classic red velvet with cream cheese frosting" },
      { name: "Ice Cream Sundae", price: "₹110", description: "Vanilla ice cream with toppings and chocolate sauce" },
      { name: "Chocolate Truffle Pastry", price: "₹140", description: "Layered chocolate pastry with truffle filling" },
    ],
  },
];

const MenuItemCard = ({ item, index }: { item: MenuItem; index: number }) => (
  <motion.div
    className="menu-card"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <div className="flex justify-between items-start gap-4 mb-2">
      <h4 className="font-display text-lg text-foreground font-semibold flex items-center gap-2 flex-wrap">
        {item.name}
        {item.isBestseller && (
          <span className="badge-bestseller">★ Bestseller</span>
        )}
      </h4>
      <span className="text-primary font-semibold text-lg whitespace-nowrap">{item.price}</span>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
  </motion.div>
);

const MenuCategory = ({ category, categoryIndex }: { category: MenuCategory; categoryIndex: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className="mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
    >
      <h3 className="font-display text-2xl md:text-3xl text-primary mb-6 pb-4 border-b border-primary/20 flex items-center gap-3">
        <span className="text-3xl">{category.icon}</span>
        {category.title}
      </h3>
      <div className="grid gap-4 md:grid-cols-2">
        {category.items.map((item, index) => (
          <MenuItemCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const MenuSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="cafe-section relative" style={{ background: "hsl(25 20% 6%)" }}>
      <div className="absolute inset-0 texture-noise" />
      
      <div ref={ref} className="cafe-container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cafe-title">Our Menu</h2>
          <div className="section-divider" />
        </motion.div>

        {menuData.map((category, index) => (
          <MenuCategory key={category.title} category={category} categoryIndex={index} />
        ))}

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 mt-8 border-t border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://www.swiggy.com/menu/923328"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary"
          >
            View Full Menu on Swiggy
          </a>
          <a
            href="https://www.zomato.com/ncr/cafe-ellebee-raj-nagar-ghaziabad/order"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-primary"
          >
            View Full Menu on Zomato
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
