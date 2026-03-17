import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import affiliation logos
import japanShitoLogo from "@/assets/affiliation-japan-shito.png";
import kioLogo from "@/assets/affiliation-kio.png";
import wkfLogo from "@/assets/affiliation-wkf.png";
import akfLogo from "@/assets/affiliation-akf.png";
import ckfLogo from "@/assets/affiliation-ckf.png";
import sakfLogo from "@/assets/affiliation-sakf.png";
import iocLogo from "@/assets/affiliation-ioc.png";
import wskfLogo from "@/assets/affiliation-wskf.png";
import aksakLogo from "@/assets/affiliation-akhila.png";
import yoshukanLogo from "@/assets/affiliation-yoshukan.png";

const affiliations = [
  { name: "Japan Shito Ryu Karate Do", logo: japanShitoLogo },
  { name: "Yoshukan Shito-Ryu", logo: yoshukanLogo },
  { name: "World Karate Federation", logo: wkfLogo },
  { name: "Asian Karate Federation", logo: akfLogo },
  { name: "Commonwealth Karate Federation", logo: ckfLogo },
  { name: "Karate India Organization (KIO)", logo: kioLogo },
  { name: "South Asian Karate Federation", logo: sakfLogo },
  { name: "International Olympic Committee recognition", logo: iocLogo },
  { name: "World Shitoryu Karate-Do Federation", logo: wskfLogo },
  { name: "Akhila Karnataka Sports Karate Association", logo: aksakLogo },
];

const AffiliationsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">
          Our <span className="text-primary">Affiliations</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {affiliations.map((affiliation, i) => (
            <motion.div
              key={affiliation.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="group bg-background border border-border rounded-lg p-6 text-center hover:neon-border hover:-translate-y-1 transition-all duration-300 cursor-default flex flex-col items-center"
            >
              <div className="w-28 h-28 mx-auto mb-4 flex items-center justify-center">
                <img src={affiliation.logo} alt={affiliation.name} className="w-full h-full object-contain" />
              </div>
              <p className="text-[11px] text-muted-foreground leading-tight font-medium">{affiliation.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AffiliationsSection;
