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
    scrollToSection("connect");
  };

  return (
    <nav className="bg-white/95 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <img 
              src="/attached_assets/Group 7_1753395217548.png" 
              alt="Fouxy Squad Logo" 
              className="w-8 h-8"
            />
            <span className="font-medium text-lg text-fouxy-text tracking-tight">
              Fouxy Squad
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => scrollToSection("community")}
              className="text-fouxy-text-secondary hover:text-fouxy-text transition-colors duration-150 text-sm font-medium"
              data-testid="button-nav-community"
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-fouxy-text-secondary hover:text-fouxy-text transition-colors duration-150 text-sm font-medium"
              data-testid="button-nav-events"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-fouxy-text-secondary hover:text-fouxy-text transition-colors duration-150 text-sm font-medium"
              data-testid="button-nav-gallery"
            >
              Gallery
            </button>
            <button
              onClick={handleJoinCommunity}
              className="bg-fouxy-secondary text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all duration-150 text-sm font-medium"
              data-testid="button-join-community"
            >
              Join Us
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-fouxy-text"
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white py-6">
            <div className="flex flex-col space-y-5 px-4">
              <button
                onClick={() => scrollToSection("community")}
                className="text-left text-fouxy-text-secondary hover:text-fouxy-text transition-colors duration-150 text-sm font-medium"
                data-testid="button-mobile-community"
              >
                Community
              </button>
              <button
                onClick={() => scrollToSection("events")}
                className="text-left text-fouxy-text-secondary hover:text-fouxy-text transition-colors duration-150 text-sm font-medium"
                data-testid="button-mobile-events"
              >
                Events
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-fouxy-text-secondary hover:text-fouxy-text transition-colors duration-150 text-sm font-medium"
                data-testid="button-mobile-gallery"
              >
                Gallery
              </button>
              <button
                onClick={handleJoinCommunity}
                className="bg-fouxy-secondary text-white rounded-full hover:bg-opacity-90 transition-all duration-150 w-full py-2.5 text-sm font-medium"
                data-testid="button-mobile-join"
              >
                Join Us
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
