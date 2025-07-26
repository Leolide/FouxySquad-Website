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
    <footer className="bg-gray-900 text-white py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/attached_assets/Group 7_1753395217548.png" 
                alt="Fouxy Squad Logo" 
                className="w-8 h-8"
              />
              <span className="font-comfortaa font-bold text-xl">
                Fouxy Squad
              </span>
            </div>
            <p className="text-white/90 max-w-md">
              London's vibrant design community fostering connection,
              creativity, and growth among 200+ passionate designers and
              creatives.
            </p>
          </div>

          <div>
            <h4 className="font-comfortaa font-bold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/90">
              <li>
                <button
                  onClick={() => scrollToSection("community")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Community
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("events")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Events
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("cta")}
                  className="hover:text-white transition-colors duration-200"
                >
                  Join Us
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-comfortaa font-bold text-lg mb-4">Connect</h4>
            <div className="space-y-3">
              <button
                onClick={() => handleSocialClick("instagram")}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
                <span>@fouxy_squad</span>
              </button>
              <button
                onClick={() => handleSocialClick("linkedin")}
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span>Fouxy Squad</span>
              </button>
              <a
                href="mailto:hello@fouxysquad.com"
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>hello@fouxysquad.com</span>
              </a>
              <div className="relative">
                <button
                  onClick={() => setShowQR(!showQR)}
                  className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors duration-200"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Group</span>
                </button>
                
                {showQR && (
                  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowQR(false)}>
                    <div className="bg-white p-6 rounded-2xl max-w-sm mx-4" onClick={(e) => e.stopPropagation()}>
                      <div className="text-center mb-4">
                        <h3 className="font-comfortaa font-bold text-xl text-black mb-2">Join Our WhatsApp</h3>
                        <p className="text-gray-600 text-sm">Scan the QR code to join our community chat</p>
                      </div>
                      <div className="flex justify-center mb-4">
                        <img 
                          src="/attached_assets/Screenshot 2025-07-26 at 23.38.27_1753569602945.png" 
                          alt="WhatsApp Group QR Code" 
                          className="w-64 h-64 object-contain"
                        />
                      </div>
                      <button
                        onClick={() => setShowQR(false)}
                        className="w-full bg-fouxy-primary text-white py-2 px-4 rounded-full hover:bg-fouxy-secondary transition-colors duration-200 font-medium"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/80">
          <p>
            &copy; 2025 Fouxy Squad. Bringing London's design community together
            with love and creativity. 🦊
          </p>
        </div>
      </div>
    </footer>
  );
}
