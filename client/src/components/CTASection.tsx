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
    <section id="cta" className="py-20 bg-gradient-to-br from-fouxy-primary via-fouxy-secondary to-fouxy-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <svg 
            className="w-16 h-16 mx-auto mb-4 animate-bounce-slow" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Fouxy Squad Logo - Join Our Community"
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
