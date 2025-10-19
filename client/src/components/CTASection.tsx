import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function CTASection() {
  const handleJoinCommunity = () => {
    // In a real implementation, this would handle community joining
    console.log("Join community clicked");
  };

  const handleViewEvents = () => {
    window.open("https://lu.ma/user/FouxySquad", "_blank");
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: "https://instagram.com/fouxy_squad",
      linkedin: "https://linkedin.com/company/fouxy-squad",
      chat: "#" // This would be the group chat link
    };
    
    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], "_blank");
    }
  };

  return (
    <section id="cta" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-semibold text-4xl sm:text-5xl text-fouxy-text mb-8 tracking-tight">
            Join Fouxy Squad
          </h2>
          <p className="text-xl text-fouxy-text-secondary max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Become part of London's vibrant design community. Connect with creatives and attend inspiring events.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleViewEvents}
              className="bg-fouxy-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all duration-200"
              data-testid="button-events"
            >
              View Events
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
