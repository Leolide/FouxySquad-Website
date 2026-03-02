import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import type { Event } from "@shared/schema";

export default function HeroSection() {
  const { data: events } = useQuery<Event[]>({
    queryKey: ['/api/events'],
  });

  // Get the next upcoming event
  const nextEvent = events?.find(event => event.status === 'upcoming');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white min-h-[calc(100vh-5rem)] flex items-center py-20">
      {/* Minimal Next Event Card */}
      {nextEvent && (
        <div className="absolute top-8 right-8 z-40 max-w-xs hidden xl:block">
          <div className="bg-fouxy-neutral rounded-xl p-5">
            <div className="flex items-center space-x-2 mb-3">
              <span className="bg-fouxy-secondary text-white px-2.5 py-1 rounded-full text-xs font-medium">NEXT EVENT</span>
            </div>
            <h3 className="font-medium text-base text-fouxy-text mb-2">
              {nextEvent.title}
            </h3>
            <p className="text-fouxy-text-secondary mb-4 text-xs">
              {new Date(nextEvent.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })} • {nextEvent.isOnline ? 'Online' : 'In-person'}
            </p>
            <button 
              onClick={() => window.open(nextEvent.lumaUrl || "https://lu.ma/user/FouxySquad", "_blank")}
              className="bg-fouxy-secondary text-white px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition-all text-xs w-full"
              data-testid="button-register-event"
            >
              Register on Luma →
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10 px-2 sm:px-0 text-center lg:text-left"
          >
            <div className="space-y-6">
              <h1 className="font-semibold text-4xl sm:text-5xl lg:text-6xl leading-tight text-fouxy-text tracking-tight">
                Fouxy Squad
              </h1>
              <p className="text-lg sm:text-xl text-fouxy-text-secondary leading-relaxed font-light max-w-lg">
                A design community for creatives in UX, UI, and product design. We host events that spark connection and fresh ideas.
              </p>
            </div>

            <div className="inline-flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mx-auto lg:mx-0">
              <button
                onClick={() => scrollToSection("connect")}
                className="bg-fouxy-secondary text-white px-8 py-3.5 rounded-full hover:bg-opacity-90 transition-all font-medium text-base"
                data-testid="button-hero-join"
              >
                Join Our Community
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="border border-gray-300 text-fouxy-text px-8 py-3.5 rounded-full hover:bg-fouxy-neutral transition-all font-medium text-base"
                data-testid="button-hero-events"
              >
                View Events
              </button>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-12 pt-6">
              <div>
                <div className="font-semibold text-3xl text-fouxy-text">
                  200+
                </div>
                <div className="text-sm text-fouxy-text-secondary mt-1">Active Members</div>
              </div>
              <div>
                <div className="font-semibold text-3xl text-fouxy-text">
                  9
                </div>
                <div className="text-sm text-fouxy-text-secondary mt-1">Events Hosted</div>
              </div>
              <div>
                <div className="font-semibold text-3xl text-fouxy-text">
                  London
                </div>
                <div className="text-sm text-fouxy-text-secondary mt-1">Based</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="text-center px-2 sm:px-4">
              <img 
                src="/attached_assets/ChatGPT Image Jul 6, 2025, 05_27_50 PM_1753396225683.png" 
                alt="Fouxy Squad Mascot" 
                className="w-[350px] h-[350px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] mx-auto object-contain"
                data-testid="img-hero-mascot"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
