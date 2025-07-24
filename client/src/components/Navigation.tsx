import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const handleJoinCommunity = () => {
    scrollToSection("cta");
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-fouxy-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <svg 
              className="w-10 h-10 animate-bounce-slow" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Fouxy Squad Logo - Orange Fox"
            >
              <path 
                d="M20 80C20 70 25 60 35 55C45 50 55 52 60 45C65 38 70 30 75 25C80 20 85 18 90 20C85 25 80 30 75 35C70 40 65 45 60 50C65 55 70 60 75 65C80 70 75 75 70 75C65 75 60 70 55 70C50 70 45 75 40 75C35 75 30 80 25 80C22 80 20 80 20 80Z" 
                fill="#DF4106"
              />
              <path 
                d="M35 55C40 50 45 48 50 50C55 52 60 55 60 60C60 65 55 68 50 68C45 68 40 65 38 60C36 57 35 55 35 55Z" 
                fill="#F16C01"
              />
              <circle cx="45" cy="58" r="2" fill="#2D1810"/>
              <path 
                d="M65 70C70 65 75 62 80 65C82 66 83 68 82 70C81 72 79 73 77 73C75 73 73 72 71 71C69 70 67 70 65 70Z" 
                fill="#FD6E1D"
              />
            </svg>
            <span className="font-comfortaa font-bold text-xl text-fouxy-primary">
              Fouxy Squad
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("community")}
              className="text-fouxy-text hover:text-fouxy-primary transition-colors duration-200 focus-visible:outline-fouxy-primary rounded-md px-2 py-1"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-fouxy-text hover:text-fouxy-primary transition-colors duration-200 focus-visible:outline-fouxy-primary rounded-md px-2 py-1"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-fouxy-text hover:text-fouxy-primary transition-colors duration-200 focus-visible:outline-fouxy-primary rounded-md px-2 py-1"
            >
              Gallery
            </button>
            <Button
              onClick={handleJoinCommunity}
              className="bg-fouxy-primary text-white px-6 py-2 rounded-full hover:bg-fouxy-secondary transition-colors duration-200 font-medium"
            >
              Join Us
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-fouxy-primary"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-fouxy-accent/20 py-4">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection("community")}
                className="text-left text-fouxy-text hover:text-fouxy-primary transition-colors duration-200"
              >
                Community
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-left text-fouxy-text hover:text-fouxy-primary transition-colors duration-200"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-fouxy-text hover:text-fouxy-primary transition-colors duration-200"
              >
                Gallery
              </button>
              <Button
                onClick={handleJoinCommunity}
                className="bg-fouxy-primary text-white rounded-full hover:bg-fouxy-secondary transition-colors duration-200 w-full"
              >
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
