import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import heroImage from "@/assets/hero-karate.jpeg";

const trainers = [
  { name: "Renshi Vinay TM", dan: "5th Dan", state: "Karnataka" },
  { name: "Renshi Puneeth R S", dan: "5th Dan", state: "Karnataka", role: "KIO COACH" },
  { name: "Renshi Ravishankar", dan: "5th Dan", state: "Karnataka" },
  { name: "Renshi Jagdish", dan: "5th Dan", state: "Karnataka" },
  { name: "Sensei Kishore G", dan: "4th Dan", state: "Karnataka", role: "KIO COACH" },
  { name: "Sensei Sunil Kumar", dan: "4th Dan", state: "Karnataka", role: "KIO COACH" },
  { name: "Sensei Chethan M", dan: "4th Dan", state: "Karnataka", role: "KIO COACH" },
  { name: "Sensei Gopal", dan: "4th Dan", state: "Karnataka" },
  { name: "Sensei Aakash", dan: "2nd Dan", state: "Karnataka", role: "KIO COACH" },
  { name: "Sensei Jai Sai", dan: "3rd Dan", state: "Karnataka", role: "WKF COACH" },
  { name: "Sensei Thejas M", dan: "3rd Dan", state: "Karnataka", role: "KIO COACH" },
  { name: "Senpai Kapil Dev", dan: "2nd Dan", state: "Karnataka" },
  { name: "Senpai Goodson", dan: "1st Dan", state: "Karnataka" },
  { name: "Senpai Asif", dan: "1st Dan", state: "Karnataka" },
  { name: "Senpai Saravana", dan: "1st Dan", state: "Karnataka" },
  { name: "Senpai Bhavya", dan: "1st Dan", state: "Karnataka" },
  { name: "Renshi Anjaneyamurthy", dan: "5th Dan", state: "Karnataka", role: "District Secretary" },
  { name: "Renshi Govindraju Chikballapur", dan: "5th Dan", state: "Karnataka", role: "District Secretary" },
];

const danColor = (dan: string) => {
  if (dan.startsWith("5")) return "bg-accent text-accent-foreground";
  if (dan.startsWith("4")) return "bg-primary text-primary-foreground";
  if (dan.startsWith("3")) return "bg-primary/80 text-primary-foreground";
  if (dan.startsWith("2")) return "bg-primary/60 text-primary-foreground";
  return "bg-primary/40 text-primary-foreground";
};

const Trainers = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <main className="pt-16">
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-background/25" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Our <span className="text-primary text-glow-red">Trainers</span></h1>
          <p className="text-foreground/90 mt-4 text-lg font-semibold">Expert instructors across India</p>
        </motion.div>
      </section>

      <section ref={ref} className="py-20 bg-background relative overflow-hidden">
        {/* Background geometric pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-40 h-40 border border-primary rotate-45" />
          <div className="absolute top-60 right-20 w-32 h-32 border border-accent rotate-12" />
          <div className="absolute bottom-20 left-1/3 w-48 h-48 border border-primary -rotate-12" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {trainers.map((trainer, i) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="group bg-card rounded-lg border border-border p-5 hover:neon-border hover:-translate-y-1 transition-all duration-300 relative"
              >
                {/* Connecting accent line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/40 via-accent/20 to-transparent rounded-l group-hover:from-primary group-hover:via-accent/60 transition-colors duration-300" />

                <h3 className="font-heading text-base font-bold pl-3 mb-3">{trainer.name}</h3>

                <div className="flex flex-wrap gap-2 pl-3">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${danColor(trainer.dan)}`}>
                    {trainer.dan}
                  </span>
                </div>

                <div className="mt-3 pl-3 flex items-center gap-1 text-xs text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                  {trainer.state}
                </div>

                {(trainer as any).role && (
                  <div className="mt-2 pl-3">
                    <span className="text-sm text-accent font-medium">{(trainer as any).role}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Trainers;
