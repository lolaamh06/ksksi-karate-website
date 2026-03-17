import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import founderImage from "@/assets/founder.jpeg";
import secretaryImage from "@/assets/secretary.jpeg";

const leaders = [
  {
    name: "Shihan Dr M Vijayan",
    title: "Founder & President",
    belt: "8th Dan Black Belt",
    image: founderImage,
  },
  {
    name: "Renshi J M Jerome",
    title: "Secretary",
    belt: "6th Dan Black Belt",
    image: secretaryImage,
  },
];

const LeadershipSpotlight = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Our <span className="text-primary">Leadership</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-card rounded-lg neon-border p-6 text-center hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-2 border-primary/40 group-hover:shadow-glow-red transition-shadow duration-300">
                {leader.image ? (
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center">
                    <span className="text-primary font-heading font-bold text-3xl">{leader.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <h3 className="font-heading text-xl font-bold text-accent">{leader.name}</h3>
              <p className="text-primary text-sm font-medium mt-1">{leader.title}</p>
              <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">{leader.belt}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSpotlight;
