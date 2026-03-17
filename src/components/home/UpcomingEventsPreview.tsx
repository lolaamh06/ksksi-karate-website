import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import InternationalSeminarImg from "@/assets/upcoming events/15th seminar.jpeg";

const upcomingEvents = [
  { title: "15th International Kata Seminar", date: "1st and 2nd August 2026", location: "Bangalore", image: InternationalSeminarImg, desc: "An extraordinary seminar conducted by Damian Quintero, Olympic Silver Medalist at Tokyo 2020, organised by Ken Bu Kai Shito Ryu Karate School of India. A rare opportunity to train under one of the world's finest kata masters.", registerLink: "https://forms.gle/ifesR3Mj3XpETMPy8" },
];

const UpcomingEventsPreview = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-card">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Upcoming <span className="text-accent">Events</span>
        </h2>

        {upcomingEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-background border-2 border-accent rounded-lg p-8 text-center shadow-[0_0_20px_rgba(251,191,36,0.4)]"
          >
            <p className="text-foreground text-xl font-bold">
              The upcoming events schedule is under preparation. Official announcements will appear here shortly.
            </p>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group bg-background border border-border rounded-lg overflow-hidden hover:neon-border hover:-translate-y-1 transition-all duration-300 flex flex-row"
              >
                {event.image && (
                  <div className="w-40 shrink-0 overflow-hidden">
                    <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                )}
                <div className="p-5 relative flex-1">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40 group-hover:bg-primary transition-colors duration-300" />
                  <div className="pl-4">
                    <h3 className="font-heading text-lg font-bold mb-1">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{event.desc}</p>
                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-2 py-1 rounded">
                        <Calendar className="w-3 h-3" /> {event.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-muted-foreground">
                        <MapPin className="w-3 h-3" /> {event.location}
                      </span>
                    </div>
                    {event.registerLink && (
                      <a
                        href={event.registerLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-4 px-4 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded hover:opacity-90 transition-opacity"
                      >
                        Register Now
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link to="/events" className="inline-flex items-center px-6 py-2.5 border border-primary text-primary font-heading font-semibold rounded-md hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105">
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsPreview;
