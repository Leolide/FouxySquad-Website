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
    <section className="relative overflow-hidden bg-gradient-to-br from-fouxy-bg via-white to-fouxy-neutral min-h-screen flex items-center">
      {/* Floating Next Event Card - Only on Hero Section */}
      <div className="absolute top-4 right-4 z-40 max-w-xs hidden xl:block">
        <div className="relative bg-white rounded-3xl p-5 shadow-2xl border border-orange-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full transform translate-x-6 -translate-y-6 opacity-10"></div>
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-lg">🔮</span>
              </div>
              <div>
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">NEXT EVENT</span>
              </div>
            </div>
            <h3 className="font-comfortaa font-bold text-xl text-black mb-2">
              London UX/UI Designers - Online Mini Social
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              <span className="font-medium">August 2025</span> • Virtual networking event for London-based designers
            </p>
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => window.open("https://lu.ma/user/FouxySquad", "_blank")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-2xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg text-sm"
              >
                Register on Luma →
              </button>
              <div className="text-xs text-gray-500">
                <div className="font-medium">Free Event</div>
                <div>London Based</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="font-comfortaa font-bold text-5xl lg:text-6xl leading-tight text-black">
                Welcome to{" "}
                <span className="fox-mascot">Fouxy Squad</span>
              </h1>
              <p className="text-xl text-gray-800 leading-relaxed">
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
                <div className="font-comfortaa font-bold text-2xl text-orange-600">
                  200+
                </div>
                <div className="text-sm text-gray-700">Active Members</div>
              </div>
              <div className="text-center">
                <div className="font-comfortaa font-bold text-2xl text-orange-600">
                  6
                </div>
                <div className="text-sm text-gray-700">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="font-comfortaa font-bold text-2xl text-orange-600">
                  London
                </div>
                <div className="text-sm text-gray-700">Based</div>
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
              <div className="text-center">
                <img 
                  src="/attached_assets/ChatGPT Image Jul 6, 2025, 05_27_50 PM_1753396225683.png" 
                  alt="Fouxy Squad Mascot - Pixel Art Orange Fox Character" 
                  className="w-[500px] h-[500px] mx-auto drop-shadow-2xl"
                />
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
