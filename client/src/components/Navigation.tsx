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
              src="/attached_assets/Group 7_1753394618394.png" 
              alt="Fouxy Squad Logo - Orange Fox" 
              className="w-10 h-10 animate-bounce-slow"
            />
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
