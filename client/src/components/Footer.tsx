import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [showQR, setShowQR] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSocialClick = (platform: string) => {
    const urls = {
      instagram: "https://instagram.com/fouxy_squad",
      linkedin: "https://linkedin.com/company/fouxy-squad"
    };
    
    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], "_blank");
    }
  };

  return (
    <footer className="bg-fouxy-text text-white py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/attached_assets/Group 7_1753395217548.png" 
                alt="Fouxy Squad Logo" 
                className="w-7 h-7"
              />
              <span className="font-medium text-lg">
                Fouxy Squad
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              London's design community fostering connection and creativity among passionate designers.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Links</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("community")}
                  className="hover:text-white transition-colors"
                >
                  Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("events")}
                  className="hover:text-white transition-colors"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-sm mb-4">Connect</h4>
            <div className="space-y-2 text-sm">
              <button
                onClick={() => handleSocialClick("instagram")}
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </button>
              <button
                onClick={() => handleSocialClick("linkedin")}
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>
              <a
                href="mailto:fouxysquad@gmail.com"
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-xs">
          <p>© 2025 Fouxy Squad</p>
        </div>
      </div>
    </footer>
  );
}
