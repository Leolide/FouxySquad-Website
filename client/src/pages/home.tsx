import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CommunitySection from "@/components/CommunitySection";
import EventsTimeline from "@/components/EventsTimeline";
import Gallery from "@/components/Gallery";
import SocialSection from "@/components/SocialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-fouxy-bg text-fouxy-text">
      <Navigation />
      <HeroSection />
      <CommunitySection />
      <EventsTimeline />
      <Gallery />
      <SocialSection />
      <CTASection />
      <Footer />
    </div>
  );
}
