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
              <p className="text-xl text-fouxy-text-secondary leading-relaxed">
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
                <div className="text-sm text-fouxy-text-secondary">Active Members</div>
              </div>
              <div className="text-center">
                <div className="font-comfortaa font-bold text-2xl text-fouxy-primary">
                  6
                </div>
                <div className="text-sm text-fouxy-text-secondary">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="font-comfortaa font-bold text-2xl text-fouxy-primary">
                  London
                </div>
                <div className="text-sm text-fouxy-text-secondary">Based</div>
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
                  <svg 
                    className="w-24 h-24 mx-auto mb-4" 
                    viewBox="0 0 100 100" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Fouxy Squad Mascot - Orange Fox Character"
                  >
                    <path 
                      d="M20 80C20 70 25 60 35 55C45 50 55 52 60 45C65 38 70 30 75 25C80 20 85 18 90 20C85 25 80 30 75 35C70 40 65 45 60 50C65 55 70 60 75 65C80 70 75 75 70 75C65 75 60 70 55 70C50 70 45 75 40 75C35 75 30 80 25 80C22 80 20 80 20 80Z" 
                      fill="white"
                    />
                    <path 
                      d="M35 55C40 50 45 48 50 50C55 52 60 55 60 60C60 65 55 68 50 68C45 68 40 65 38 60C36 57 35 55 35 55Z" 
                      fill="rgba(255,255,255,0.9)"
                    />
                    <circle cx="45" cy="58" r="2" fill="#2D1810"/>
                    <path 
                      d="M65 70C70 65 75 62 80 65C82 66 83 68 82 70C81 72 79 73 77 73C75 73 73 72 71 71C69 70 67 70 65 70Z" 
                      fill="rgba(255,255,255,0.8)"
                    />
                  </svg>
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
