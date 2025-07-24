import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fouxy-bg via-white to-fouxy-neutral py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="font-comfortaa font-bold text-5xl lg:text-6xl leading-tight">
                Welcome to{" "}
                <span className="fox-mascot">Fouxy Squad</span>
              </h1>
              <p className="text-xl text-fouxy-text/80 leading-relaxed">
                A vibrant London-based design community of{" "}
                <strong>200+ creatives</strong>—from students to pros in UX, UI,
                product design. We host playful, bold events that spark
                connection, fresh ideas, and skill-sharing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-fouxy-primary text-white px-8 py-4 rounded-full hover:bg-fouxy-secondary transition-all duration-300 transform hover:scale-105 font-comfortaa font-medium text-lg shadow-lg"
              >
                Join Our Community
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("events")}
                className="border-2 border-fouxy-primary text-fouxy-primary px-8 py-4 rounded-full hover:bg-fouxy-primary hover:text-white transition-all duration-300 font-comfortaa font-medium text-lg"
              >
                View Events
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="font-comfortaa font-bold text-2xl text-fouxy-primary">
                  200+
                </div>
                <div className="text-sm text-fouxy-text/70">Active Members</div>
              </div>
              <div className="text-center">
                <div className="font-comfortaa font-bold text-2xl text-fouxy-primary">
                  6
                </div>
                <div className="text-sm text-fouxy-text/70">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="font-comfortaa font-bold text-2xl text-fouxy-primary">
                  London
                </div>
                <div className="text-sm text-fouxy-text/70">Based</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 animate-float">
              <div className="bg-gradient-to-br from-fouxy-primary via-fouxy-secondary to-fouxy-accent rounded-3xl p-12 shadow-2xl">
                <div className="text-center">
                  <div className="text-8xl mb-4">🦊</div>
                  <div className="font-comfortaa font-bold text-white text-2xl mb-2">
                    Meet Fouxy!
                  </div>
                  <div className="text-white/90">
                    Our adorable community mascot
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-fouxy-accent/20 rounded-full animate-pulse-slow"></div>
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-fouxy-secondary/20 rounded-full animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
