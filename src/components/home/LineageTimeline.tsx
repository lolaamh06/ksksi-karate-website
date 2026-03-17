import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

// Import lineage images
import kenwaMabuniImage from "@/assets/kenwa.webp";
import keneiMabuniImage from "@/assets/kenei.webp";
import kenyuMabuniImage from "@/assets/kenyu.jpeg";
import kassisImage from "@/assets/kassis.jpeg"; // You need to add this image
import mVijayanImage from "@/assets/master.jpeg";

const lineage = [
  { name: "Soke Kenwa Mabuni", title: "Founder of Shito-ryu Karate-do", year: "1889–1952", bio: "Founded Shito Ryu in 1931, combining Shuri-te and Naha-te traditions into one comprehensive style.", image: kenwaMabuniImage },
  { name: "Soke Ken-Ei Mabuni", title: "2nd Successor of Shito-ryu Karate-do", year: "1918–2015", bio: "Son of Kenwa Mabuni, preserved and spread Shito Ryu worldwide as the second-generation grandmaster.", image: keneiMabuniImage },
  { name: "Soke Kenyu Mabuni", title: "3rd Successor of Shito-ryu Karate-do", year: "Born 1955", bio: "Current Soke of Shito Ryu, continuing the family legacy and leading the World Shitoryu Karate-Do Federation.", image: kenyuMabuniImage },
  { name: "Shihan Con Kassis", title: "Chairman - Technical Committee of the WKF", year: "1959–2022", bio: "Student of Ken-Ei Mabuni who became the World Karate Federation’s youngest Kata Judge.", image: kassisImage },
  { name: "Shihan M Vijayan", title: "Founder - Ken-Bu-Kai Karate School of India", year: "Born 1968", bio: "Brought authentic Shito Ryu to India, establishing Ken-Bu-Kai as a premier national karate institution.", image: mVijayanImage },
];

const LineageTimeline = ({ preview = false }: { preview?: boolean }) => {
  const { ref, isVisible } = useScrollAnimation();
  const items = preview ? lineage : lineage;

  return (
    <section ref={ref} className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Shito Ryu <span className="text-primary">Lineage</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">The martial arts legacy that guides us</p>

        {/* Desktop horizontal / Mobile vertical */}
        <div className="hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40" />
          {items.map((master, i) => (
            <motion.div
              key={master.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="flex flex-col items-center text-center w-1/5 max-w-[250px] relative group"
            >
              {/* Glowing node */}
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-primary/50 flex items-center justify-center mb-4 shadow-glow-red group-hover:scale-110 group-hover:shadow-glow-gold transition-all duration-300 z-10">
                <span className="text-primary-foreground font-heading font-bold text-sm">{i + 1}</span>
              </div>
              {/* Vertical connector line */}
              <div className="w-0.5 h-8 bg-gradient-to-b from-primary/60 to-primary/20 mb-4" />
              <div className="bg-background rounded-lg border border-border p-6 py-8 group-hover:neon-border group-hover:-translate-y-1 transition-all duration-300">
                {/* Image above name */}
                <div className="w-32 h-32 rounded-full mx-auto mb-5 overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-colors">
                  <img src={master.image} alt={master.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-base font-bold mb-3">{master.name}</h3>
                <p className="text-xs text-primary font-medium mb-3">{master.title}</p>
                <p className="text-xs text-accent mb-4">{master.year}</p>
                {!preview && <p className="text-xs text-muted-foreground leading-relaxed">{master.bio}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical timeline */}
        <div className="md:hidden relative pl-8">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-accent/40 to-primary/40" />
          {items.map((master, i) => (
            <motion.div
              key={master.name}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative mb-8 last:mb-0"
            >
              <div className="absolute -left-8 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 border-2 border-primary/50 flex items-center justify-center shadow-glow-red z-10">
                <span className="text-primary-foreground font-heading font-bold text-xs">{i + 1}</span>
              </div>
              <div className="bg-background rounded-lg border border-border p-6 ml-4">
                {/* Image above name */}
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-2 border-primary/30">
                  <img src={master.image} alt={master.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-base font-bold text-center mb-2">{master.name}</h3>
                <p className="text-sm text-primary font-medium text-center mb-2">{master.title}</p>
                <p className="text-sm text-accent text-center mb-3">{master.year}</p>
                {!preview && <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{master.bio}</p>}
              </div>
            </motion.div>
          ))}
        </div>

        {preview && (
          <div className="text-center mt-10">
            <Link to="/about" className="inline-flex items-center px-6 py-2.5 border border-primary text-primary font-heading font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
              Full Lineage Story
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default LineageTimeline;
