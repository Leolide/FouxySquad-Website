import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function CTASection() {
  const handleJoinCommunity = () => {
    // In a real implementation, this would handle community joining
    console.log("Join community clicked");
  };

  const handleViewEvents = () => {
    window.open("https://lu.ma/fouxy-squad", "_blank");
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
    <section id="cta" className="py-20 bg-gradient-to-br from-fouxy-primary via-fouxy-secondary to-fouxy-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="text-6xl mb-4 animate-bounce-slow">🦊</div>
          <h2 className="font-comfortaa font-bold text-4xl text-white mb-4">
            Ready to Join Fouxy Squad?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Become part of London's most vibrant design community. Connect with
            amazing creatives, attend inspiring events, and grow your design
            career with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleJoinCommunity}
              className="bg-white text-fouxy-primary px-8 py-4 rounded-full font-comfortaa font-bold text-lg hover:bg-fouxy-bg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Our Community
            </Button>
            <Button
              onClick={handleViewEvents}
              variant="outline"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-comfortaa font-bold text-lg hover:bg-white hover:text-fouxy-primary transition-all duration-300"
            >
              View Upcoming Events
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSocialClick("instagram")}
              className="text-white hover:text-fouxy-bg hover:bg-white/10 transition-colors duration-200 p-3"
            >
              <Instagram className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSocialClick("linkedin")}
              className="text-white hover:text-fouxy-bg hover:bg-white/10 transition-colors duration-200 p-3"
            >
              <Linkedin className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleSocialClick("chat")}
              className="text-white hover:text-fouxy-bg hover:bg-white/10 transition-colors duration-200 p-3"
            >
              <MessageCircle className="w-6 h-6" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/20"
        >
          <p className="text-white/80 mb-2">Questions? Reach out to us:</p>
          <a
            href="mailto:hello@fouxysquad.com"
            className="text-white font-medium hover:text-fouxy-bg transition-colors duration-200"
          >
            hello@fouxysquad.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
