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
            <img 
              src="/attached_assets/Frame 5_1753394404905.png" 
              alt="Fouxy Squad Logo" 
              className="w-10 h-10 animate-kawaii-wiggle" 
            />
            <span className="font-comfortaa font-bold text-xl text-fouxy-text sparkle-decoration">
              Fouxy Squad
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("community")}
              className="text-fouxy-text hover:text-fouxy-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Community 💫
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-fouxy-text hover:text-fouxy-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Events 🎉
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-fouxy-text hover:text-fouxy-primary transition-all duration-300 font-medium hover:scale-105"
            >
              Gallery 📸
            </button>
            <Button
              onClick={handleJoinCommunity}
              className="kawaii-button bg-fouxy-primary text-white px-6 py-2 font-comfortaa font-bold"
            >
              Join Us! 🌟
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
                className="text-left text-fouxy-text hover:text-fouxy-primary transition-all duration-300 font-medium hover:scale-105"
              >
                Community 💫
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-left text-fouxy-text hover:text-fouxy-primary transition-all duration-300 font-medium hover:scale-105"
              >
                Events 🎉
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-fouxy-text hover:text-fouxy-primary transition-all duration-300 font-medium hover:scale-105"
              >
                Gallery 📸
              </button>
              <Button
                onClick={handleJoinCommunity}
                className="kawaii-button bg-fouxy-primary text-white w-full font-comfortaa font-bold"
              >
                Join Us! 🌟
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
