import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Medal, Calendar, Award, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-karate.jpeg";
import Seminar12Img from "@/assets/12th seminar.jpeg";
import Seminar13Img from "@/assets/13th seminar.jpeg";
import Seminar14Img from "@/assets/14th seminar.jpeg";
import KioRefereeImg from "@/assets/kio referee.jpeg";
import KskssiStateImg from "@/assets/ksksi cmp1.jpeg";
import InternationalSeminarImg from "@/assets/upcoming events/15th seminar.jpeg";
import { useCounter } from "@/hooks/useCounter";

const achievements = [
  { icon: Trophy, value: 120, suffix: "+", label: "Tournament Wins", color: "text-accent" },
  { icon: Medal, value: 350, suffix: "+", label: "Total Medals", color: "text-primary" },
  { icon: Calendar, value: 40, suffix: "+", label: "Events Hosted", color: "text-accent" },
  { icon: Award, value: 50, suffix: "+", label: "Black Belts Produced", color: "text-primary" },
];

const completedEvents = [
  { title: "12th International Kata Seminar 2024", date: "April 2024", location: "Trivandrum", image: Seminar12Img, desc: "Successfully hosted the 12th International Kata Seminar at Kerala conducted by our Grand Master Soke Kenyu Mabuni, Governor of WSKF, strengthening international training and traditional karate values." },
  { title: "13th International Kata Seminar 2025", date: "November 2025", location: "Bangalore", image: Seminar13Img, desc: "Successfully hosted the 13th International Kata Seminar conducted by Sandra Sánchez Sensei (Olympic Gold Medalist) and Jesús Del Moral Sensei (Former Spain National Team Coach)." },
  { title: "KIO Referee Seminar 2025", date: "December 2025", location: "Bangalore", image: KioRefereeImg, desc: "Successfully completed the KIO Referee Seminar to enhance officiating knowledge and tournament standards." },
  { title: "KSKSI State Karate Championship – 2025", date: "December 2025", location: "Bangalore", image: KskssiStateImg, desc: "Successfully completed the KSKSI State Karate Championship, showcasing strong performances across kata and kumite categories." },
  { title: "14th International Kata Seminar 2026", date: "February 2026", location: "Bangalore", image: Seminar14Img, desc: "Successfully hosted the 14th International Kata Seminar conducted by our Grand Master Soke Kenyu Mabuni, Governor of WSKF, strengthening international training and traditional karate values." },
];

const upcomingEvents = [
  { title: "15th International Kata Seminar", date: "1st and 2nd August 2026", location: "Bangalore", image: InternationalSeminarImg, desc: "An extraordinary seminar conducted by Damian Quintero, Olympic Silver Medalist at Tokyo 2020, organised by Ken Bu Kai Shito Ryu Karate School of India. A rare opportunity to train under one of the world's finest kata masters.", registerLink: "https://forms.gle/ifesR3Mj3XpETMPy8" },
];

const AchievementCard = ({ item, isVisible }: { item: typeof achievements[0]; isVisible: boolean }) => {
  const count = useCounter(item.value, isVisible);
  const Icon = item.icon;
  return (
    <div className="text-center p-6">
      <Icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
      <div className={`text-4xl md:text-5xl font-heading font-bold ${item.color}`}>{count}{item.suffix}</div>
      <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{item.label}</p>
    </div>
  );
};

const Events = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);
  const { ref: completedRef, isVisible: completedVisible } = useScrollAnimation();
  const { ref: upcomingRef, isVisible: upcomingVisible } = useScrollAnimation();

  return (
    <main className="pt-16">
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-background/25" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Events & <span className="text-primary text-glow-red">Achievements</span></h1>
          <p className="text-foreground/90 mt-4 text-lg font-semibold">Our competitive spirit and accomplishments</p>
        </motion.div>
      </section>

      {/* Achievement Counters */}
      <section ref={statsRef} className="py-16 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/10 blur-3xl rounded-full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((a) => (
              <AchievementCard key={a.label} item={a} isVisible={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      {/* Completed Events */}
      <section ref={completedRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Completed <span className="text-primary">Events</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {completedEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                animate={completedVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg border border-border overflow-hidden hover:neon-border hover:-translate-y-1 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold mb-2">{event.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{event.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="text-accent font-medium">{event.date}</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section ref={upcomingRef} className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Upcoming <span className="text-accent">Events</span>
          </h2>
          {upcomingEvents.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={upcomingVisible ? { opacity: 1, y: 0 } : {}}
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
                  animate={upcomingVisible ? { opacity: 1, x: 0 } : {}}
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
        </div>
      </section>
    </main>
  );
};

export default Events;
