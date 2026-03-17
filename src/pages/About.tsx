import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import DojoImg from "@/assets/dojo.jpeg";
import founderImage from "@/assets/founder.jpeg";
import secretaryImage from "@/assets/secretary.jpeg";
import heroImage from "@/assets/hero-karate.jpeg";
import { Shield, Heart, Target, Users, Award, Star } from "lucide-react";
import LineageTimeline from "@/components/home/LineageTimeline";
import AffiliationsSection from "@/components/home/AffiliationsSection";

const values = [
  { icon: Shield, title: "Discipline", desc: "Building mental and physical strength through structured training." },
  { icon: Heart, title: "Respect", desc: "Honoring traditions, instructors, and fellow practitioners." },
  { icon: Target, title: "Excellence", desc: "Striving for continuous improvement in every aspect." },
  { icon: Users, title: "Community", desc: "Fostering bonds that extend beyond the dojo." },
];

const About = () => {
  const { ref: historyRef, isVisible: historyVisible } = useScrollAnimation();
  const { ref: founderRef, isVisible: founderVisible } = useScrollAnimation();
  const { ref: secretaryRef, isVisible: secretaryVisible } = useScrollAnimation();
  const { ref: styleRef, isVisible: styleVisible } = useScrollAnimation();
  const { ref: valuesRef, isVisible: valuesVisible } = useScrollAnimation();

  return (
    <main className="pt-16">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[320px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-background/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-bold">
            About <span className="text-primary text-glow-red">Ken-Bu-Kai</span>
          </h1>
          <p className="text-foreground/90 mt-4 text-lg font-semibold">Our Story, Our Legacy</p>
        </motion.div>
      </section>

      {/* History */}
      <section ref={historyRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={historyVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <img src={DojoImg} alt="Karate training" className="rounded-lg neon-border w-full object-cover aspect-[4/3]" loading="lazy" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={historyVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ken Bu Kai Shito Ryu Karate School of India is a prestigious and fast-growing Karate organization founded in 2010 by Shihan Dr. M. Vijayan, a highly respected master who has been teaching Karate since 1986.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The school follows the lineage of Kenwa Mabuni, the founder of Shito Ryu - one of the four major styles of Japanese karate. It was established with the strong mission of promoting the original and traditional Shito Ryu Karate across India, while spreading the true discipline, values, and spirit of martial arts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ken Bu Kai Shito Ryu has expanded its presence across India, producing skilled karatekas and continuously encouraging students to participate in competitions, represent the country, and excel in national and international tournaments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Adding to its legacy, the organization has successfully conducted 15 International Kata Seminars, strengthening technical excellence and maintaining global standards in traditional Shito Ryu training.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With dedication, discipline, and authenticity, Ken Bu Kai Shito Ryu Karate School of India continues to build champions and preserve the true art of Karate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder & President */}
      <section ref={founderRef} className="py-20 bg-card">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={founderVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              <span className="text-primary">Founder & President</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-background rounded-lg neon-border p-8">
              <div className="w-64 h-64 rounded-full bg-secondary flex-shrink-0 overflow-hidden border-2 border-primary/50">
                <img src={founderImage} alt="Shihan Dr M Vijayan" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold">Shihan Dr M Vijayan</h3>
                <p className="text-primary font-medium text-sm mt-1 mb-4">8th Dan Black Belt — Shito Ryu Karate</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Shihan Dr. M. Vijayan, has been teaching Karate since 1986 at ITI Karnataka Sangha. In 2010, he founded Ken Bu Kai Shito Ryu Karate School of India to promote authentic Shito Ryu Karate across India and preserve the true discipline, technique, and spirit of the art.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  He is the only Indian to have received the 8th Degree Black Belt directly under the Shito Ryu Governor Family and was officially honored with the Shihan Delegation by Soke Kenyu Mabuni, Governor of the World Shito Ryu Karate Federation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  He remains deeply committed to developing high-quality karate practitioners, preparing students for national and international competitions, and maintaining traditional standards of Shito Ryu training.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secretary */}
      <section ref={secretaryRef} className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={secretaryVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              <span className="text-primary">Secretary</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center bg-card rounded-lg neon-border p-8">
              <div className="w-64 h-64 rounded-full bg-secondary flex-shrink-0 overflow-hidden border-2 border-primary/50">
                <img src={secretaryImage} alt="J M Jerome" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold">Renshi J M Jerome</h3>
                <p className="text-primary font-medium text-sm mt-1 mb-4">6th Dan Black Belt — Shito Ryu Karate</p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Renshi J M Jerome plays a key leadership role in Ken-Bu-Kai Shito Ryu Karate School of India, contributing to the organization’s structure, coordination, and steady expansion across its branches. He works closely with the core leadership team to ensure that institutional activities are organized and executed with clarity and discipline.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  He is deeply involved in coordinating seminars, grading examinations, championships, and official programs, helping manage planning and communication across different state units. His efforts support smooth execution of events and maintain consistency in administrative and operational processes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With strong organizational skills and a dedicated approach toward martial arts development, Jerome contributes significantly to maintaining standards and continuity within the academy. His ongoing involvement strengthens the academy’s network and supports its long-term growth and vision.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shito Ryu Style */}
      <section ref={styleRef} className="py-20 bg-card relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={styleVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
              The <span className="text-primary">Shito Ryu</span> Style
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Shito Ryu (糸東流) is one of the four major styles of karate, founded by Kenwa Mabuni in 1934. It combines the powerful linear techniques of Shuri-te with the circular, flowing movements of Naha-te, making it one of the most comprehensive and versatile karate styles in the world.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over 60 katas - the most of any major style - Shito Ryu offers practitioners a vast repertoire of techniques, including strikes, blocks, throws, and joint locks. It emphasizes both speed and power, making it effective for self-defense, competition, and personal development.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { icon: Star, label: "60+ Katas" },
                { icon: Award, label: "WKF Recognized" },
                { icon: Shield, label: "Since 1931" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={styleVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                  className="bg-background rounded-lg border border-border p-4 text-center"
                >
                  <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-heading font-semibold">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Lineage Timeline */}
      <LineageTimeline />

      {/* Values */}
      <section ref={valuesRef} className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            Our <span className="text-primary">Values</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background rounded-lg border border-border p-6 text-center hover:neon-border hover:-translate-y-1 transition-all duration-300"
              >
                <v.icon className="w-10 h-10 text-accent mx-auto mb-4" />
                <h3 className="font-heading text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <AffiliationsSection />

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-2xl md:text-4xl font-heading font-bold mb-4">
            Ready to <span className="text-primary">Begin</span>?
          </h2>
          <Link
            to="/join"
            className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-105 shadow-glow-red"
          >
            Join Ken-Bu-Kai
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
