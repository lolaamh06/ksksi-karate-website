import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTABanner = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Glowing background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/20 blur-[100px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="container mx-auto px-4 relative z-10 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
          Start Your <span className="text-primary text-glow-red">Karate Journey</span> Today
        </h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
          Join thousands of students who have transformed their lives through the art of Shito Ryu Karate.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/join"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105 shadow-glow-red"
          >
            Book Trial Class
          </Link>
          <Link
            to="/join"
            className="inline-flex items-center justify-center px-8 py-3 border border-border text-foreground font-heading font-semibold rounded-md hover:bg-secondary transition-all hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
