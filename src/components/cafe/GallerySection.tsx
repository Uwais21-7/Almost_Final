import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const galleryImages = [
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerwr00OZ8Vn10SuDeDOX_COlmXwxHCSvLenqfQKVUiaXLsV9APXKyMLiVVFx4Skt1SF1ltwJ2fnSXhMtfhxLshwodGKv7NqGmDUiwZ6Bcg4qlaImBbnja9lknDrmDmcZdVsG7LC=s1450-w768-h1450-rw",
    alt: "Cafe ElleBee interior and seating area",
    caption: "Cozy Interiors",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipN6Drc9MJklUUWV51DQzGD1xrYjpLJ3eSmnyTja=s519-w519-h390-n-k-no",
    alt: "Signature coffee and beverages at Cafe ElleBee",
    caption: "Signature Coffee",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipNHEK7gmO0PQWIccIWJUnAAh0DU224pEzeQS55e=s519-w519-h390-n-k-no",
    alt: "Delicious food and snacks at Cafe ElleBee",
    caption: "Delicious Bites",
  },
  {
    src: "https://lh3.googleusercontent.com/p/AF1QipMCjHR6E8t9f27B3PmQd9FTd4TbDmAoooJ6P77e=s1450-w768-h1450-rw",
    alt: "Desserts and sweet treats at Cafe ElleBee",
    caption: "Sweet Treats",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwernfkbeho3yQVjxKeNmgAB7qwf61Du_VzzdTmyutt74ceZDyhSfLbRP9y2bz6e1Jth6mjNkeNbpTNMfpcD7j3Wtz2qzc0fTKKKBAuBW_fE-PVfxxKMQ8_JimLnZ-dQYk8Hd-cenf0QBJPhz=s1450-w768-h1450-rw",
    alt: "Shakes and cold beverages at Cafe ElleBee",
    caption: "Refreshing Shakes",
  },
  {
    src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepPv0ywVwDK-CILZhALIQtIEADCbakCFidy_9CsDo4Mi6kUY6HPh86loFr_D68iCbkO_aXfl7PtaEc9uwr-e-Dckt0zzMnLOEazCXjak0V86bdhl1_DQUljC5AfzNDnmACxr20U0ucc5_I1=s1450-w768-h1450-rw",
    alt: "Warm ambience and decor at Cafe ElleBee",
    caption: "Warm Ambience",
  },
];

const GalleryItem = ({ image, index }: { image: typeof galleryImages[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="gallery-item"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={image.src}
        alt={image.alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-primary font-display text-lg font-semibold">{image.caption}</p>
      </motion.div>
    </motion.div>
  );
};

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="cafe-section bg-gradient-section relative overflow-hidden">
      <div className="absolute inset-0 texture-noise" />
      
      <div ref={ref} className="cafe-container relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="cafe-title">Gallery</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground text-lg italic">Experience the ElleBee Vibe</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center pt-8 border-t border-primary/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-muted-foreground text-lg mb-6">
            See more delicious moments on Instagram
          </p>
          <a
            href="https://www.instagram.com/cafe_ellebee"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero-secondary inline-flex items-center gap-2"
          >
            <span>📷</span>
            Follow @cafe_ellebee
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
