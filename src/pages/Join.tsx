import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-karate.jpeg";

const states = ["Karnataka", "Andhra Pradesh", "Tamil Nadu", "Kerala", "Telangana"];

const Join = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    studentName: "", age: "", parentName: "", phone: "", email: "", branch: "", message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "cded6091-05bb-4aed-a36e-3ddd46695245",
          subject: `New Registration: ${form.studentName}`,
          from_name: "KSKSI Website Registration",
          // Individual fields for clean formatting
          "Student Name": form.studentName,
          "Age": form.age,
          "Parent/Guardian Name": form.parentName,
          "Phone Number": form.phone,
          "Email Address": form.email,
          "State Branch": form.branch,
          "Additional Message": form.message || "No additional message",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or call us at +91 9880732329");
      }
    } catch (err) {
      setError("Unable to submit. Please call us at +91 9880732329 to register.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-16">
      <section className="relative h-[40vh] min-h-[280px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-background/25" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-heading font-bold">Join <span className="text-primary text-glow-red">Ken-Bu-Kai</span></h1>
          <p className="text-foreground/90 mt-4 text-lg font-semibold">Register for a trial class or enroll today</p>
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-heading font-bold mb-4">Registration <span className="text-accent">Successful!</span></h2>
                <p className="text-foreground mb-2">Thank you, <span className="font-semibold">{form.studentName}</span>!</p>
                <p className="text-muted-foreground mb-4">Your registration has been submitted successfully.</p>

                <div className="bg-card border border-primary/20 rounded-lg p-6 mb-6 max-w-md mx-auto">
                  <p className="text-foreground mb-3">Please call us to confirm your trial class and discuss the schedule:</p>
                  <a href="tel:+919880732329" className="inline-flex items-center gap-2 text-primary font-heading font-bold text-xl hover:text-primary/80 transition-colors">
                    <Phone className="w-5 h-5" />
                    +91 9880732329
                  </a>
                  <p className="text-sm text-muted-foreground mt-3">We look forward to training with you!</p>
                </div>

                <button onClick={() => { setSubmitted(false); setForm({ studentName: "", age: "", parentName: "", phone: "", email: "", branch: "", message: "" }); }} className="px-6 py-2.5 bg-primary text-primary-foreground font-heading font-semibold rounded-md hover:bg-primary/90 transition-all">
                  Register Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                onSubmit={handleSubmit}
                className="bg-card rounded-lg border border-border p-8 space-y-6"
              >
                <h2 className="text-2xl font-heading font-bold text-center mb-2">Registration <span className="text-primary">Form</span></h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Student Name *</label>
                    <input name="studentName" value={form.studentName} onChange={handleChange} required className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Age *</label>
                    <input name="age" type="number" value={form.age} onChange={handleChange} required className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Parent/Guardian Name *</label>
                  <input name="parentName" value={form.parentName} onChange={handleChange} required className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Phone *</label>
                    <input name="phone" type="tel" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground block mb-1">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">State Branch *</label>
                  <select name="branch" value={form.branch} onChange={handleChange} required className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all">
                    <option value="">Select State</option>
                    {states.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground block mb-1">Message (optional)</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full px-4 py-2.5 bg-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" />
                </div>

                {error && (
                  <div className="bg-destructive/10 border border-destructive/30 rounded-md p-4 text-destructive text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-md hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-glow-red disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? "Submitting..." : "Submit Registration"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-card border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-10">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-background rounded-lg border border-border p-6 text-center hover:neon-border transition-all duration-300">
              <Phone className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold mb-1">Phone</h3>
              <p className="text-sm text-muted-foreground">+91 9880732329</p>
            </div>
            <div className="bg-background rounded-lg border border-border p-6 text-center hover:neon-border transition-all duration-300">
              <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold mb-1">Email</h3>
              <p className="text-sm text-muted-foreground">ksksikarate1@gmail.com</p>
            </div>
            <div className="bg-background rounded-lg border border-border p-6 text-center hover:neon-border transition-all duration-300">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold mb-1">Address</h3>
              <p className="text-sm text-muted-foreground">#15 Sri Sai Krupa, old Manjunatha layout,
                Tc Palya 3rd A cross, Kuvempu road ,
                near LVS apartments , Srinivasa water supply ,
                Anandapura Krishnarajapuram
                Bangalore-560036</p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-border">
            <iframe
              title="Ken-Bu-Kai Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5842!2d77.6932224!3d13.0200274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f757d4bd87%3A0xe7f71d7fbdf27750!2sSrinivasa%20water%20supply!5e0!3m2!1sen!2sin!4v1644000000000!5m2!1sen!2sin"
              className="w-full h-64 md:h-80"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Join;
