import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rakesh Kumar",
    role: "Parent",
    quote: "My son has transformed completely since joining Ken-Bu-Kai. His discipline and confidence have grown tremendously. The instructors are world-class.",
  },
  {
    name: "Aashish Prasad",
    role: "Student",
    quote: "I joined at 35 thinking it was too late. Shihan Vijayan proved me wrong. Karate has become my passion and stress relief. Best decision ever!",
  },
  {
    name: "Kirti Patel",
    role: "Student",
    quote: "Won multiple medals thanks to the rigorous training at Ken-Bu-Kai. The coaching here is on par with international standards.",
  },
  {
    name: "Meena Iyer",
    role: "Parent",
    quote: "Both my daughters train here. The self-defense skills and values they've learned are invaluable. Highly recommend for every family.",
  },
];

const TestimonialsSlider = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % testimonials.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (!isVisible) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isVisible, next]);

  return (
    <section ref={ref} className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          What <span className="text-accent">Students Say</span>
        </h2>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center px-8"
            >
              <Quote className="w-8 h-8 text-accent mx-auto mb-4 opacity-50" />
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                "{testimonials[current].quote}"
              </p>
              <p className="font-heading font-bold text-accent">
                {testimonials[current].name}
              </p>
              <p className="text-sm text-muted-foreground">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-accent" : "bg-muted-foreground/30"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
