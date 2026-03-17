import { Award, Users, Shield, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { icon: Award, value: 45, suffix: "+", label: "Years Training", color: "text-primary" },
  { icon: Users, value: 5000, suffix: "+", label: "Students", color: "text-accent" },
  { icon: Shield, value: 250, suffix: "+", label: "Black Belts", color: "text-primary" },
  { icon: MapPin, value: 5, suffix: "", label: "Nationwide Branches", color: "text-accent" },
];

const StatCard = ({ stat, isVisible }: { stat: typeof stats[0]; isVisible: boolean }) => {
  const count = useCounter(stat.value, isVisible);
  const Icon = stat.icon;

  return (
    <div className="text-center p-6">
      <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
      <div className={`text-4xl md:text-5xl font-heading font-bold ${stat.color}`}>
        {count}{stat.suffix}
      </div>
      <p className="text-sm text-muted-foreground mt-2 uppercase tracking-wider">
        {stat.label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-16 bg-card border-y border-border relative overflow-hidden">
      {/* Red glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-3xl rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
