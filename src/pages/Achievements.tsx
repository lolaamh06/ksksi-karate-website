import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Trophy, Medal, Award, Star, Target, Users } from "lucide-react";
import { useCounter } from "@/hooks/useCounter";
import heroImage from "@/assets/hero-karate.jpeg";

const stats = [
  { icon: Trophy, value: 120, suffix: "+", label: "Tournament Wins", color: "text-accent" },
  { icon: Medal, value: 350, suffix: "+", label: "Total Medals", color: "text-primary" },
  { icon: Award, value: 50, suffix: "+", label: "Black Belts Produced", color: "text-accent" },
  { icon: Users, value: 2500, suffix: "+", label: "Students Trained", color: "text-primary" },
];

const highlights = [
  { icon: Trophy, title: "NATIONAL & STATE TOURNAMENT WINS", desc: "Our karate team has actively participated and secured victories in multiple National and State-level tournaments." },
  { icon: Target, title: "8TH DAN BLACK BELT HONOUR", desc: "Shihan Dr. M. Vijayan was awarded the prestigious 8th Dan Black Belt by Soke Kenyu Mabuni, the 3rd successor of the Mabuni family, Japan." },
  { icon: Users, title: "WKF COACH ACCREDITATION - 2025", desc: "Sensei Jai Sai Vijayan successfully received and completed his WKF Coach Accreditation at the Fujairah Youth League 2025." },
  { icon: Medal, title: "BRONZE MEDAL — APSKF INTERNATIONAL CHAMPIONSHIP 2018 — LOLAA M H", desc: "Secured 3rd place in the Under-14 Female Individual Kata category at the international championship conducted by the Asian Pacific Shito Ryu Karate Do Federation held in Indonesia." },
  { icon: Award, title: "WORLD RANKING - ROHIT SUNDAR", desc: "Rohit Sundar ranked 174 in the Under-21 Male Individual Kata category at the WKF Youth League held in Fujairah 2025." },
  { icon: Medal, title: "BRONZE MEDAL — APSKF INTERNATIONAL CHAMPIONSHIP 2018 — NISCHAL ANTHONY", desc: "Secured 3rd place in the Under-14 Male Individual Kata category at the international championship conducted by the Asian Pacific Shito Ryu Karate Do Federation held in Indonesia." },
  { icon: Award, title: "WORLD RANKING - SHASHIKIRAN", desc: "Shashikiran ranked 128 in the Under-21 Male Individual Kata category at the WKF Youth League held in Fujairah 2025." },
  
];

const StatCard = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCounter(stat.value, isVisible);
  const Icon = stat.icon;
  return (
    <div className="text-center p-6">
      <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
      <div className={`text-4xl md:text-5xl font-heading font-bold ${stat.color}`}>{count}{stat.suffix}</div>
      <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">{stat.label}</p>
    </div>
  );
};

const Achievements = () => {
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation(0.3);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <main className="pt-16">
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-background/25" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Our <span className="text-primary text-glow-red">Achievements</span></h1>
          <p className="text-foreground/90 mt-4 text-lg font-semibold">A legacy of excellence in martial arts</p>
        </motion.div>
      </section>

      <section ref={statsRef} className="py-16 bg-card border-y border-border relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-accent/10 blur-3xl rounded-full" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => <StatCard key={s.label} stat={s} isVisible={statsVisible} />)}
          </div>
        </div>
      </section>

      <section ref={gridRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Achievement <span className="text-accent">Highlights</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 40 }}
                animate={gridVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg border border-border p-6 hover:neon-border hover:-translate-y-1 transition-all duration-300"
              >
                <h.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2">{h.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Achievements;
