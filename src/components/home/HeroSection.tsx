import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-karate.jpeg";
import LogoEmblem from "@/components/LogoEmblem";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/25" />

      {/* Red glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="-mb-20"
        >
          <LogoEmblem size={480} className="mx-auto" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold text-foreground mb-4 leading-tight"
        >
          <span className="text-primary text-glow-red">KEN-BU-KAI</span>
          <br />
          <span className="text-2xl sm:text-3xl md:text-4xl">
            SHITO RYU KARATE SCHOOL OF INDIA (KSKSI)
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl md:text-2xl text-accent font-heading text-glow-gold mb-8"
        >
          Karate For All
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/join"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105 shadow-glow-red"
          >
            Join Now
          </Link>
          <Link
            to="/join"
            className="inline-flex items-center justify-center px-8 py-3 border border-accent text-accent font-heading font-semibold rounded-md hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105"
          >
            Book Trial Class
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
