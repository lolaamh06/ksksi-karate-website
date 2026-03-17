import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Search, User } from "lucide-react";
import heroImage from "@/assets/hero-karate.jpeg";

const branches = [
  { state: "Karnataka", capital: "Bangalore", phone: "+91 98807 32329", instructors: ["Dr M Vijayan - President"] },
  { state: "Andhra Pradesh", capital: "Amaravati", phone: "+91 63042 34177", instructors: ["B Manohar - State President", "Rathnakar - State Secretary"] },
  { state: "Tamil Nadu", capital: "Chennai", phone: "+91 98807 32329", instructors: ["Dr M Vijayan - President"] },
  { state: "Kerala", capital: "Thiruvananthapuram", phone: "+91 97471 45715", instructors: ["S G J Jayakumar - State President", "J M Jerome - State Secretary"] },
  { state: "Telangana", capital: "Hyderabad", phone: "+91 94408 75282", instructors: ["K Ramesh Kumar - State President", "V Ravi - State Secretary"] },
];

const Branches = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [search, setSearch] = useState("");

  const filtered = branches.filter((b) => b.state.toLowerCase().includes(search.toLowerCase()) || b.capital.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="pt-16">
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-background/25" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Our <span className="text-primary text-glow-red">Branches</span></h1>
          <p className="text-foreground/90 mt-4 text-lg font-semibold">Training warriors across India</p>
        </motion.div>
      </section>

      <section ref={ref} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto mb-12 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by state or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((branch, i) => (
              <motion.div
                key={branch.state}
                initial={{ opacity: 0, y: 40 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-card rounded-lg border border-border overflow-hidden hover:neon-border hover:-translate-y-1 transition-all duration-300"
              >
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-1">{branch.state}</h3>
                  <p className="text-sm text-primary mb-4">{branch.capital}</p>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{branch.phone}</span>
                    </div>
                    {branch.instructors.map((name, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <User className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Map embed */}
                <div className="aspect-[16/9]">
                  <iframe
                    title={`Map of ${branch.capital}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(branch.capital + ", " + branch.state + ", India")}&output=embed`}
                    className="w-full h-full border-t border-border"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-8">No branches found for "{search}"</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Branches;
