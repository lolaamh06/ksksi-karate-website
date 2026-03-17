import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import DojoImg from "@/assets/dojo.jpeg";

const AboutPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="aspect-[4/3] rounded-lg neon-border overflow-hidden">
              <img src={DojoImg} alt="Karate training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              About <span className="text-primary">Our Academy</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ken Bu Kai Shito Ryu Karate School of India is a prestigious and fast-growing
              Karate organization founded in 2010 by Shihan Dr. M. Vijayan, a highly respected
              master who has been teaching Karate since 1986 at ITI Karnataka Sangha, Karnataka.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The school was established with the strong mission of promoting the original and
              traditional Shito Ryu Karate across India, while spreading the true discipline,
              values, and spirit of martial arts.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-2.5 bg-primary text-primary-foreground font-heading font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
