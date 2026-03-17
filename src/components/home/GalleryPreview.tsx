import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery/1.jpeg";
import gallery2 from "@/assets/gallery/2.jpeg";
import gallery3 from "@/assets/gallery/3.jpeg";
import gallery4 from "@/assets/gallery/4.jpeg";
import gallery5 from "@/assets/gallery/5.jpeg";
import gallery6 from "@/assets/gallery/6.jpeg";

const galleryItems = [
  { id: 1, src: gallery1 },
  { id: 2, src: gallery2 },
  { id: 3, src: gallery3 },
  { id: 4, src: gallery4 },
  { id: 5, src: gallery5 },
  { id: 6, src: gallery6 },
];

const GalleryPreview = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          <span className="text-primary">Gallery</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              onClick={() => setSelected(item.id)}
              className="aspect-[4/3] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative group"
            >
              <img src={item.src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center px-6 py-2.5 border border-primary text-primary font-heading font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View Full Gallery
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 p-2 text-foreground hover:text-primary" onClick={() => setSelected(null)}>
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="w-full max-w-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryItems.find((g) => g.id === selected)?.src}
                alt="Gallery"
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GalleryPreview;
