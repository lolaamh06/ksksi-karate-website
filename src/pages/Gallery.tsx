import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-karate.jpeg";
import gallery1 from "@/assets/gallery/1.jpeg";
import gallery2 from "@/assets/gallery/2.jpeg";
import gallery3 from "@/assets/gallery/3.jpeg";
import gallery4 from "@/assets/gallery/4.jpeg";
import gallery5 from "@/assets/gallery/5.jpeg";
import gallery6 from "@/assets/gallery/6.jpeg";
import gallery7 from "@/assets/gallery/7.jpeg";
import gallery8 from "@/assets/gallery/8.jpeg";
import gallery9 from "@/assets/gallery/9.jpeg";
import gallery10 from "@/assets/gallery/10.jpeg";
import gallery11 from "@/assets/gallery/11.jpeg";
import gallery12 from "@/assets/gallery/12.jpeg";
import gallery13 from "@/assets/gallery/13.jpeg";
import gallery14 from "@/assets/gallery/14.jpeg";
import gallery15 from "@/assets/gallery/15.jpeg";
import gallery16 from "@/assets/gallery/16.jpeg";
import gallery17 from "@/assets/gallery/17.jpeg";
import gallery18 from "@/assets/gallery/18.jpeg";
import gallery19 from "@/assets/gallery/19.jpeg";
import gallery20 from "@/assets/gallery/20.jpeg";
import gallery21 from "@/assets/gallery/21.jpeg";
import gallery22 from "@/assets/gallery/22.jpeg";
import gallery23 from "@/assets/gallery/23.jpeg";
import gallery24 from "@/assets/gallery/24.jpeg";
import gallery25 from "@/assets/gallery/25.jpeg";
import gallery26 from "@/assets/gallery/26.jpeg";
import gallery27 from "@/assets/gallery/27.jpeg";
import gallery28 from "@/assets/gallery/28.jpeg";
import gallery29 from "@/assets/gallery/29.jpeg";
import gallery30 from "@/assets/gallery/30.jpeg";
import gallery31 from "@/assets/gallery/31.jpeg";
import gallery32 from "@/assets/gallery/32.jpeg";
import gallery33 from "@/assets/gallery/33.jpeg";
import gallery34 from "@/assets/gallery/34.jpeg";
import gallery35 from "@/assets/gallery/35.jpeg";
import gallery36 from "@/assets/gallery/36.jpeg";
import gallery37 from "@/assets/gallery/37.jpeg";
import gallery38 from "@/assets/gallery/38.jpeg";
import gallery39 from "@/assets/gallery/39.jpeg";
import gallery40 from "@/assets/gallery/40.jpeg";
import gallery41 from "@/assets/gallery/41.jpeg";
import gallery42 from "@/assets/gallery/42.jpeg";
import gallery43 from "@/assets/gallery/43.jpeg";
import gallery44 from "@/assets/gallery/44.jpeg";
import gallery45 from "@/assets/gallery/45.jpeg";
import gallery46 from "@/assets/gallery/46.jpeg";
import gallery47 from "@/assets/gallery/47.jpeg";
import gallery48 from "@/assets/gallery/48.jpeg";

const galleryItems = [
  { id: 1, src: gallery1 },
  { id: 2, src: gallery2 },
  { id: 3, src: gallery3 },
  { id: 4, src: gallery4 },
  { id: 5, src: gallery5 },
  { id: 6, src: gallery6 },
  { id: 7, src: gallery7 },
  { id: 8, src: gallery8 },
  { id: 9, src: gallery9 },
  { id: 10, src: gallery10 },
  { id: 11, src: gallery11 },
  { id: 12, src: gallery12 },
  { id: 13, src: gallery13 },
  { id: 14, src: gallery14 },
  { id: 15, src: gallery15 },
  { id: 16, src: gallery16 },
  { id: 17, src: gallery17 },
  { id: 18, src: gallery18 },
  { id: 19, src: gallery19 },
  { id: 20, src: gallery20 },
  { id: 21, src: gallery21 },
  { id: 22, src: gallery22 },
  { id: 23, src: gallery23 },
  { id: 24, src: gallery24 },
  { id: 25, src: gallery25 },
  { id: 26, src: gallery26 },
  { id: 27, src: gallery27 },
  { id: 28, src: gallery28 },
  { id: 29, src: gallery29 },
  { id: 30, src: gallery30 },
  { id: 31, src: gallery31 },
  { id: 32, src: gallery32 },
  { id: 33, src: gallery33 },
  { id: 34, src: gallery34 },
  { id: 35, src: gallery35 },
  { id: 36, src: gallery36 },
  { id: 37, src: gallery37 },
  { id: 38, src: gallery38 },
  { id: 39, src: gallery39 },
  { id: 40, src: gallery40 },
  { id: 41, src: gallery41 },
  { id: 42, src: gallery42 },
  { id: 43, src: gallery43 },
  { id: 44, src: gallery44 },
  { id: 45, src: gallery45 },
  { id: 46, src: gallery46 },
  { id: 47, src: gallery47 },
  { id: 48, src: gallery48 },
];

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<number | null>(null);
  const selectedIndex = selected !== null ? galleryItems.findIndex((g) => g.id === selected) : -1;

  const navLightbox = (dir: number) => {
    if (selectedIndex === -1) return;
    const next = (selectedIndex + dir + galleryItems.length) % galleryItems.length;
    setSelected(galleryItems[next].id);
  };

  return (
    <main className="pt-16">
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-background/25" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold"><span className="text-primary text-glow-red">Gallery</span></h1>
          <p className="text-foreground/90 mt-4 text-lg font-semibold">Moments captured in our journey</p>
        </motion.div>
      </section>

      <section ref={ref} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                onClick={() => setSelected(item.id)}
                className="relative aspect-[4/3] rounded-lg overflow-hidden group"
              >
                <img src={item.src} alt="Gallery" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute top-4 right-4 p-2 text-foreground hover:text-primary z-10" onClick={() => setSelected(null)}>
              <X className="w-6 h-6" />
            </button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-foreground hover:text-primary" onClick={(e) => { e.stopPropagation(); navLightbox(-1); }}>
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-foreground hover:text-primary" onClick={(e) => { e.stopPropagation(); navLightbox(1); }}>
              <ChevronRight className="w-8 h-8" />
            </button>
            <motion.div
              key={selected}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl w-full"
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
    </main>
  );
};

export default Gallery;
