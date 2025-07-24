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
              <svg 
                className="w-8 h-8" 
                viewBox="0 0 100 100" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Fouxy Squad Logo"
              >
                <path 
                  d="M20 80C20 70 25 60 35 55C45 50 55 52 60 45C65 38 70 30 75 25C80 20 85 18 90 20C85 25 80 30 75 35C70 40 65 45 60 50C65 55 70 60 75 65C80 70 75 75 70 75C65 75 60 70 55 70C50 70 45 75 40 75C35 75 30 80 25 80C22 80 20 80 20 80Z" 
                  fill="#DF4106"
                />
                <path 
                  d="M35 55C40 50 45 48 50 50C55 52 60 55 60 60C60 65 55 68 50 68C45 68 40 65 38 60C36 57 35 55 35 55Z" 
                  fill="#F16C01"
                />
                <circle cx="45" cy="58" r="2" fill="white"/>
                <path 
                  d="M65 70C70 65 75 62 80 65C82 66 83 68 82 70C81 72 79 73 77 73C75 73 73 72 71 71C69 70 67 70 65 70Z" 
                  fill="#FD6E1D"
                />
              </svg>
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
