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
        <div className="relative bg-white rounded-2xl p-4 shadow-xl border border-orange-100 overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded-full text-xs font-bold">NEXT EVENT</span>
            </div>
            <h3 className="font-comfortaa font-bold text-lg text-black mb-1">
              London UX/UI Designers - Online Mini Social
            </h3>
            <p className="text-gray-600 mb-3 text-xs">
              <span className="font-medium">Mar 29, 2025</span> • Virtual networking
            </p>
            <button 
              onClick={() => window.open("https://lu.ma/user/FouxySquad", "_blank")}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-xl font-medium hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg text-xs w-full"
            >
              Register on Luma →
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 px-4 sm:px-0"
          >
            <div className="space-y-6">
              <h1 className="font-comfortaa font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-black">
                Welcome to{" "}
                <span className="fox-mascot">Fouxy Squad</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                A vibrant design community of creatives in UX, UI, product design. We host playful, bold events that spark connection, fresh ideas, and skill-sharing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 px-2 sm:px-0">
              <Button
                onClick={() => scrollToSection("cta")}
                className="bg-fouxy-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-fouxy-secondary transition-all duration-300 transform hover:scale-105 font-comfortaa font-medium text-base sm:text-lg shadow-lg"
              >
                Join Our Community
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("events")}
                className="border-2 border-fouxy-primary text-fouxy-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-fouxy-primary hover:text-white transition-all duration-300 font-comfortaa font-medium text-base sm:text-lg"
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
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative z-10 animate-float">
              <div className="text-center px-4">
                <img 
                  src="/attached_assets/ChatGPT Image Jul 6, 2025, 05_27_50 PM_1753396225683.png" 
                  alt="Fouxy Squad Mascot - Pixel Art Orange Fox Character" 
                  className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] mx-auto drop-shadow-2xl object-contain"
                />
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-16 h-16 sm:w-24 sm:h-24 bg-fouxy-accent/20 rounded-full animate-pulse-slow"></div>
            <div
              className="absolute -bottom-8 -left-8 w-20 h-20 sm:w-32 sm:h-32 bg-fouxy-secondary/20 rounded-full animate-pulse-slow"
              style={{ animationDelay: "1s" }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
