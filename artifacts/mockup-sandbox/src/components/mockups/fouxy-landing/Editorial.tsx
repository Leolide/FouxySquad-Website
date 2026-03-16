import React, { useState, useEffect } from "react";
import { 
  Calendar, 
  Users, 
  MapPin, 
  ArrowRight, 
  ChevronUp,
  Menu, 
  ExternalLink, 
  Mail,
  MessageCircle,
  Phone
} from "lucide-react";

const API_BASE = "https://9ab228c5-a1fc-41e0-93a0-af710ac7bd5d-00-ykys8izdpz87.picard.replit.dev";
const ORANGE = "#E8742C";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  participants: number;
  isOnline: boolean;
  status: string;
  lumaUrl?: string;
  imageUrl?: string;
}

const LOCAL_FALLBACKS: Record<number, string> = {
  5: "/__mockup/images/event-7.jpg",
  6: "/__mockup/images/event-talk.jpg",
  7: "/__mockup/images/vibe-coding.png",
};

export default function Editorial() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/api/events`)
      .then(r => r.json())
      .then((data: Event[]) => {
        setEvents(data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-[#FDFAF6] text-[#0A0A0A] font-['Inter'] antialiased">

      {/* 1. Navigation */}
      <nav className="border-b border-[#EAE3D8] sticky top-0 bg-[#FDFAF6]/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-['Playfair_Display'] text-2xl tracking-tight font-semibold italic">
              Fouxy Squad
            </span>
            {/* Orange fox dot */}
            <span className="w-2 h-2 rounded-full inline-block mb-3" style={{ backgroundColor: ORANGE }}></span>
          </div>
          
          <div className="hidden md:flex space-x-8 text-xs font-medium tracking-widest uppercase">
            <a href="#community" className="hover:text-gray-500 transition-colors">Community</a>
            <a href="#events" className="hover:text-gray-500 transition-colors">Events</a>
            <a href="#gallery" className="hover:text-gray-500 transition-colors">Gallery</a>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Orange CTA in nav */}
            <button className="hidden md:flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 text-white transition-colors" style={{ backgroundColor: ORANGE }}>
              <span>Join Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* 2. Hero */}
        <section className="border-b border-[#E8DFD0] min-h-[85vh] flex flex-col justify-center relative pt-12">
          {/* Orange accent bar top-left */}
          <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: ORANGE, opacity: 0.15 }}></div>

          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Orange label */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-6 h-[2px]" style={{ backgroundColor: ORANGE }}></div>
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: ORANGE }}>London's Design Community</span>
              </div>

              <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
                London's <br />
                <span className="italic font-light text-gray-800">UX/UI</span> <br />
                Society.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl text-gray-800 mb-10">
                A curated community of designers shaping the future of digital experiences. We gather to learn, connect, and elevate our craft.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-0">
                {/* Primary CTA — orange */}
                <button className="text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center space-x-2 transition-opacity hover:opacity-90" style={{ backgroundColor: ORANGE }}>
                  <span>Upcoming Events</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a href="https://lu.ma/user/FouxySquad" target="_blank" rel="noopener noreferrer" className="border border-[#0A0A0A] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center space-x-2 hover:bg-[#0A0A0A] hover:text-white transition-colors">
                  <span>Join Community</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 flex flex-col items-center gap-8">
              {/* Fox mascot — large and proud */}
              <img 
                src="/__mockup/images/fox-mascot.png" 
                alt="Fouxy Squad Mascot" 
                className="w-full max-w-sm object-contain drop-shadow-lg"
              />

              {/* Stats as a compact horizontal row */}
              <div className="w-full grid grid-cols-3 gap-4 border-t border-[#EAE3D8] pt-8">
                <div className="flex flex-col items-center text-center">
                  <div className="font-['Playfair_Display'] text-4xl font-semibold">400+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Members</div>
                </div>
                <div className="flex flex-col items-center text-center border-x border-[#EAE3D8]">
                  <div className="font-['Playfair_Display'] text-4xl font-semibold">12+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Events</div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="font-['Playfair_Display'] text-4xl italic">London</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Based</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Community */}
        <section id="community" className="border-b border-[#EAE3D8] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-16 pb-8 border-b-2" style={{ borderColor: ORANGE }}>
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl">The Collective.</h2>
              <span className="text-xs uppercase tracking-widest font-semibold hidden sm:block text-gray-500">Demographics & Origin</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: ORANGE }}>Core Age</span>
                <span className="font-['Playfair_Display'] text-6xl mb-2">20—35</span>
                <p className="text-sm text-gray-700 leading-relaxed">A vibrant generation of ambitious designers in the early to mid stages of their careers.</p>
              </div>
              <div className="flex flex-col md:border-l border-[#E8E5E0] md:pl-12">
                <span className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: ORANGE }}>Focus</span>
                <span className="font-['Playfair_Display'] text-6xl mb-2 italic">UX/UI</span>
                <p className="text-sm text-gray-700 leading-relaxed">Product designers, researchers, and interaction specialists dedicated to digital craft.</p>
              </div>
              <div className="flex flex-col md:border-l border-[#E8E5E0] md:pl-12">
                <span className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: ORANGE }}>Vibe</span>
                <span className="font-['Playfair_Display'] text-6xl mb-2">Curious</span>
                <p className="text-sm text-gray-700 leading-relaxed">Driven by continuous learning, peer feedback, and genuine connection.</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-8 font-semibold">Representing Industry Leaders</h3>
              <div className="flex flex-wrap gap-4">
                {["Amazon", "Figma", "Palantir", "Burberry", "UAL", "RCA", "Cambridge"].map((company, i) => (
                  <span key={company} className="px-6 py-3 text-sm font-medium uppercase tracking-wider cursor-default transition-colors"
                    style={i === 0 ? { backgroundColor: ORANGE, color: 'white' } : { border: '1px solid #0A0A0A' }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Events */}
        <section id="events" className="border-b border-[#EAE3D8] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-16 pb-8 border-b border-[#0A0A0A]">
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl">Calendar.</h2>
              <button className="text-xs uppercase tracking-widest font-semibold flex items-center space-x-2 pb-1 hover:opacity-70 transition-opacity" style={{ color: ORANGE, borderBottom: `1px solid ${ORANGE}` }}>
                <span>View Full Archive</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            
            <div className="flex flex-col">
              {loading && (
                <div className="py-16 text-center text-xs uppercase tracking-widest text-gray-400">Loading events...</div>
              )}
              {!loading && (showAll ? events : events.slice(0, 5)).map((event, i) => {
                const isUpcoming = event.status === 'upcoming';
                const bgColors = ["#0A0A0A", "#dcdad5", "#c8c5c0", "#E8E5E0", "#0A0A0A", "#dcdad5"];
                return (
                  <div
                    key={event.id}
                    onClick={() => event.lumaUrl && window.open(event.lumaUrl, '_blank')}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-8 px-6 border-b border-[#EAE3D8] group hover:bg-[#F5F0E8] transition-colors duration-200 cursor-pointer ${!isUpcoming ? 'opacity-70' : ''}`}
                  >
                    <div className="md:col-span-2 flex flex-col justify-center">
                      {/* Orange "Upcoming" badge */}
                      <span className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: isUpcoming ? ORANGE : '#9CA3AF' }}>
                        {isUpcoming ? 'Upcoming' : 'Past'}
                      </span>
                      <span className="font-['Playfair_Display'] text-xl">{formatDate(event.date)}</span>
                      {event.isOnline && (
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Online</span>
                      )}
                    </div>
                    {/* 1:1 square image */}
                    <div className="md:col-span-3">
                      {(event.imageUrl || LOCAL_FALLBACKS[event.id]) ? (
                        <img src={event.imageUrl || LOCAL_FALLBACKS[event.id]} alt={event.title} className="w-full aspect-square object-cover" />
                      ) : (
                        <div className="w-full aspect-square" style={{ backgroundColor: bgColors[i % bgColors.length] }}></div>
                      )}
                    </div>
                    <div className="md:col-span-6 flex flex-col justify-center">
                      <h3 className="font-['Playfair_Display'] text-2xl mb-3 italic">{event.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">{event.description}</p>
                      {event.participants > 0 && (
                        <span className="text-xs text-gray-400 mt-3 uppercase tracking-wider">{event.participants} participants</span>
                      )}
                    </div>
                    <div className="md:col-span-1 flex items-center justify-end">
                      {/* Orange arrow for upcoming */}
                      <div className="w-12 h-12 border flex items-center justify-center transition-colors"
                        style={isUpcoming ? { borderColor: ORANGE, color: ORANGE } : { borderColor: '#D1D5DB', color: '#9CA3AF' }}
                      >
                        {isUpcoming ? <ArrowRight className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View more / less */}
            {!loading && events.length > 5 && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAll(v => !v)}
                  className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase px-8 py-4 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
                >
                  <span>{showAll ? 'Show Less' : `View All ${events.length} Events`}</span>
                  {showAll ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* 5. Gallery */}
        <section id="gallery" className="border-b border-[#EAE3D8] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-16 pb-8 border-b border-[#0A0A0A]">
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl">Moments.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Row 1: big left + smaller right */}
              <div className="md:col-span-7 relative group overflow-hidden h-[380px]">
                <img src="/__mockup/images/event-1.png" alt="Fouxy event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-xs uppercase tracking-widest font-semibold block mb-1 opacity-80">Community</span>
                  <h4 className="font-['Playfair_Display'] text-2xl italic">Fouxy Gathering</h4>
                </div>
              </div>
              <div className="md:col-span-5 relative group overflow-hidden h-[380px]">
                <img src="/__mockup/images/event-2.png" alt="Fouxy event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Row 2: three equal */}
              <div className="md:col-span-4 relative group overflow-hidden h-[280px]">
                <img src="/__mockup/images/event-3.png" alt="Fouxy event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="md:col-span-4 relative group overflow-hidden h-[280px]">
                <img src="/__mockup/images/event-4.png" alt="Fouxy event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
              <div className="md:col-span-4 relative group overflow-hidden h-[280px]">
                <img src="/__mockup/images/event-5.png" alt="Fouxy event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>

              {/* Row 3: wide banner with real photo */}
              <div className="md:col-span-8 relative group overflow-hidden h-[320px]">
                <img src="/__mockup/images/event-6.png" alt="Fouxy event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="md:col-span-4 relative group overflow-hidden h-[320px]">
                <img src="/__mockup/images/event-talk.jpg" alt="Fouxy event" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Testimonials */}
        <section className="border-b border-[#E8E5E0] py-24 bg-[#0A0A0A] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl mb-16 pb-8 border-b border-white/20">Voices.</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {[
                "Amazing event! Many thanks for organising it!",
                "The London design community needs more events like these.",
                "Great event - nice to meet everyone.",
                "Big thanks for organising the event! I had a lot of fun meeting new designers."
              ].map((quote, i) => (
                <div key={i} className="flex flex-col">
                  {/* Orange quote mark */}
                  <div className="font-['Playfair_Display'] text-6xl leading-none mb-4" style={{ color: ORANGE }}>"</div>
                  <p className="font-['Playfair_Display'] text-3xl leading-snug italic mb-8 flex-grow">{quote}</p>
                  <div className="flex items-center space-x-4">
                    {/* Orange avatar */}
                    <div className="w-10 h-10" style={{ backgroundColor: ORANGE, opacity: 0.7 }}></div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wider">Member</div>
                      <div className="text-xs opacity-60">London</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA */}
        <section className="py-32 border-b border-[#EAE3D8]">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
            {/* Orange divider */}
            <div className="w-16 h-[2px] mb-12" style={{ backgroundColor: ORANGE }}></div>
            <h2 className="font-['Playfair_Display'] text-6xl md:text-8xl italic mb-8">Ready to join?</h2>
            <p className="text-xl text-gray-700 font-light mb-12 max-w-lg">
              Become part of London's most engaged design collective. No membership fees, just good design and great people.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a href="https://chat.whatsapp.com/FouxySquad" target="_blank" rel="noopener noreferrer"
                className="text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join WhatsApp Group</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <a href="https://lu.ma/user/FouxySquad" target="_blank" rel="noopener noreferrer"
                className="border border-[#0A0A0A] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center space-x-2 hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>View Events on Luma</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="w-full max-w-lg">
              <div className="w-full h-[1px] bg-[#0A0A0A]/20 mb-8"></div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">Or contact the host directly</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-left">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4" style={{ color: ORANGE }} />
                  <span className="font-medium">+44 7596449024</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-4 h-4" style={{ color: ORANGE }} />
                  <span className="font-medium">WeChat: ExcalibuR-</span>
                </div>
                <div className="flex items-center space-x-3 sm:col-span-2">
                  <Mail className="w-4 h-4" style={{ color: ORANGE }} />
                  <a href="mailto:fouxysquad@gmail.com" className="font-medium border-b border-[#0A0A0A]/30 hover:border-[#0A0A0A] transition-colors">fouxysquad@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer className="py-12" style={{ backgroundColor: '#0A0A0A' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="font-['Playfair_Display'] text-2xl tracking-tight italic text-white">Fouxy Squad</span>
            <span className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: ORANGE }}></span>
          </div>
          
          <div className="flex space-x-8 text-xs font-semibold uppercase tracking-widest text-white/60">
            <a href="#community" className="hover:text-white transition-colors">Community</a>
            <a href="#events" className="hover:text-white transition-colors">Events</a>
            <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
          </div>
          
          <div className="text-white/40 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Fouxy Squad
          </div>
        </div>
      </footer>
    </div>
  );
}
