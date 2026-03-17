import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin } from "lucide-react";

const branches = [
  { state: "Karnataka", capital: "Bangalore" },
  { state: "Andhra Pradesh", capital: "Amaravati" },
  { state: "Tamil Nadu", capital: "Chennai" },
  { state: "Kerala", capital: "Thiruvananthapuram" },
  { state: "Telangana", capital: "Hyderabad" },
];

const BranchesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
          Our <span className="text-primary">Branches</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Training warriors across India
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {branches.map((branch, i) => (
            <motion.div
              key={branch.state}
              initial={{ opacity: 0, x: -30 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to="/branches"
                className="block bg-background rounded-lg border border-border p-6 text-center hover:neon-border hover:-translate-y-1 transition-all duration-300"
              >
                <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="font-heading font-bold text-lg">{branch.state}</h3>
                <p className="text-xs text-muted-foreground mt-1">{branch.capital}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;
