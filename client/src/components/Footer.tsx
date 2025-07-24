import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
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
    <footer className="bg-fouxy-text text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/attached_assets/Frame 5_1753394404905.png" 
                alt="Fouxy Squad Logo" 
                className="w-8 h-8 animate-kawaii-wiggle" 
              />
              <span className="font-comfortaa font-bold text-xl sparkle-decoration">
                Fouxy Squad
              </span>
            </div>
            <p className="text-white/70 max-w-md">
              London's vibrant design community fostering connection,
              creativity, and growth among 200+ passionate designers and
              creatives.
            </p>
          </div>

          <div>
            <h4 className="font-comfortaa font-bold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-white/70">
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
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
                <span>@fouxy_squad</span>
              </button>
              <button
                onClick={() => handleSocialClick("linkedin")}
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
                <span>Fouxy Squad</span>
              </button>
              <a
                href="mailto:hello@fouxysquad.com"
                className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span>hello@fouxysquad.com</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>
            &copy; 2025 Fouxy Squad. Bringing London's design community together
            with love and creativity. 🦊
          </p>
        </div>
      </div>
    </footer>
  );
}
