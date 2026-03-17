import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  Calendar,
  ArrowRight,
  ChevronUp,
  Menu,
  ExternalLink,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

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
  5: "/images/event-7.jpg",
  6: "/images/event-talk.jpg",
  7: "/images/vibe-coding.png",
};

const galleryImages = [
  { src: "/images/event-talk.jpg",     label: "Community Talk",   sub: "London, 2025" },
  { src: "/images/event-workshop.jpg", label: "AI Workshop",      sub: "Vibe Coding Series" },
  { src: "/images/event-speaker.png",  label: "On Stage",         sub: "Speaker Series" },
  { src: "/images/event-6.png",        label: "Fouxy Gathering",  sub: "Battersea, 2025" },
  { src: "/images/event-8.jpg",        label: "Community Night",  sub: "London, 2025" },
  { src: "/images/event-new.jpg",      label: "Fouxy Squad",      sub: "Est. 2025" },
  { src: "/images/event-catering.jpg", label: "Halkin Venue",     sub: "Sponsored" },
  { src: "/images/event-4.png",        label: "Meetup",           sub: "London, 2025" },
  { src: "/images/event-crowd.jpg",    label: "The Crowd",        sub: "London, 2025" },
];

function BentoGallery() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const safeIndex = Math.max(0, Math.min(heroIndex, galleryImages.length - 1));
  const hero = galleryImages[safeIndex];
  const thumbnails = galleryImages.filter((_, i) => i !== safeIndex);
  const rightThumbs = thumbnails.slice(0, 2);
  const stripThumbs = thumbnails.slice(2);

  const selectHero = (i: number) => {
    if (i < 0 || i >= galleryImages.length || i === safeIndex) return;
    setFading(true);
    setTimeout(() => {
      setHeroIndex(i);
      setFading(false);
    }, 220);
  };

  return (
    <>
      <div className="flex items-baseline justify-between mb-12 pb-8 border-b border-[#0A0A0A]">
        <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl">Moments.</h2>
        <span className="text-xs uppercase tracking-widest text-gray-400 font-medium hidden sm:block">Click any photo to feature it</span>
      </div>

      {/* Top block: hero + 2 stacked thumbs */}
      <div className="grid grid-cols-12 gap-2 mb-2">
        <div className="col-span-12 md:col-span-8 relative overflow-hidden bg-gray-100" style={{ height: 480 }}>
          {hero && (
            <>
              <img
                key={safeIndex}
                src={hero.src}
                alt={hero.label}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ opacity: fading ? 0 : 1, transition: "opacity 0.22s ease" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-6" style={{ opacity: fading ? 0 : 1, transition: "opacity 0.22s ease" }}>
                <h3 className="font-['Playfair_Display'] text-3xl italic text-white leading-tight">{hero.label}</h3>
                <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{hero.sub}</p>
              </div>
            </>
          )}
        </div>
        <div className="hidden md:flex col-span-4 flex-col gap-2" style={{ height: 480 }}>
          {rightThumbs.map((img) => {
            const origIndex = galleryImages.findIndex((x) => x.src === img.src);
            return (
              <div key={img.src} onClick={() => selectHero(origIndex)} className="flex-1 relative overflow-hidden cursor-pointer group">
                <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white text-xs font-['Playfair_Display'] italic">{img.label}</p>
                </div>
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: ORANGE }} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${stripThumbs.length}, 1fr)` }}>
        {stripThumbs.map((img) => {
          const origIndex = galleryImages.findIndex((x) => x.src === img.src);
          return (
            <div key={img.src} onClick={() => selectHero(origIndex)} className="relative overflow-hidden cursor-pointer group" style={{ height: 140 }}>
              <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: ORANGE }} />
              <div className="absolute bottom-0 left-0 right-0 px-2 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/50">
                <p className="text-white text-[10px] truncate font-['Playfair_Display'] italic">{img.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dot nav */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-6 h-[1px]" style={{ backgroundColor: ORANGE }} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">{galleryImages.length} photographs · click to feature</span>
        </div>
        <div className="flex space-x-1.5">
          {galleryImages.map((_, i) => (
            <button key={i} onClick={() => selectHero(i)} className="w-2 h-2 rounded-full transition-all duration-200" style={{ backgroundColor: i === safeIndex ? ORANGE : "#D1C9BE" }} />
          ))}
        </div>
      </div>
    </>
  );
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const { data: events = [], isLoading } = useQuery<Event[]>({
    queryKey: ["/api/events"],
    select: (data) =>
      [...data].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
  });

  return (
    <div className="min-h-screen bg-[#FDFAF6] text-[#0A0A0A] font-['Inter'] antialiased">
      {/* Navigation */}
      <nav className="border-b border-[#EAE3D8] sticky top-0 bg-[#FDFAF6]/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <div className="flex-1 flex items-center space-x-2">
            <span className="font-['Playfair_Display'] text-2xl tracking-tight font-semibold italic">
              Fouxy Squad
            </span>
            <span className="w-2 h-2 rounded-full inline-block mb-3" style={{ backgroundColor: ORANGE }} />
          </div>
          <div className="hidden md:flex flex-1 justify-center space-x-8 text-xs font-medium tracking-widest uppercase">
            <a href="#community" className="hover:text-gray-500 transition-colors">The Collective</a>
            <a href="#events" className="hover:text-gray-500 transition-colors">Calendar</a>
            <a href="#gallery" className="hover:text-gray-500 transition-colors">Moments</a>
          </div>
          <div className="flex-1 flex items-center justify-end space-x-4">
            <a
              href="#join"
              className="hidden md:flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase px-4 py-2 text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: ORANGE }}
            >
              <span>Join Us</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="border-b border-[#E8DFD0] min-h-[85vh] flex flex-col justify-center relative pt-12">
          <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: ORANGE, opacity: 0.15 }} />
          <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-6 h-[2px]" style={{ backgroundColor: ORANGE }} />
                <span className="text-xs uppercase tracking-widest font-semibold" style={{ color: ORANGE }}>
                  Est. 2025 · Fouxy Squad
                </span>
              </div>
              <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
                London's <br />
                <span className="italic font-light text-gray-800">Product Design</span> <br />
                Society.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl text-gray-800 mb-10">
                A curated community of designers shaping the future of digital experiences. We gather to learn, connect, and elevate our craft.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-16 lg:mb-0">
                <a
                  href="#events"
                  className="text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center space-x-2 transition-opacity hover:opacity-90"
                  style={{ backgroundColor: ORANGE }}
                >
                  <span>Upcoming Events</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={() => document.getElementById("connect")?.scrollIntoView({ behavior: "smooth" })}
                  className="border border-[#0A0A0A] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center space-x-2 hover:bg-[#0A0A0A] hover:text-white transition-colors"
                >
                  <span>Join Community</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col items-center gap-8">
              <img
                src="/images/fox-plushie.png"
                alt="Fouxy Squad Mascot"
                className="w-full max-w-lg object-contain"
                style={{ filter: "drop-shadow(0 20px 40px rgba(232,116,44,0.25)) drop-shadow(0 8px 16px rgba(0,0,0,0.15))" }}
              />
              <div className="w-full flex flex-row lg:flex-col gap-0 border-t border-[#EAE3D8] pt-8 lg:pt-0 lg:border-t-0 lg:border-l lg:pl-8 lg:space-y-4">
                <div className="flex-1 lg:flex-none flex flex-col items-center text-center lg:items-end lg:text-right">
                  <div className="font-['Playfair_Display'] text-3xl font-semibold">400+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Members</div>
                </div>
                <div className="flex-1 lg:flex-none flex flex-col items-center text-center lg:items-end lg:text-right border-x border-[#EAE3D8] lg:border-x-0 lg:border-t lg:pt-4">
                  <div className="font-['Playfair_Display'] text-3xl font-semibold">12+</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Events</div>
                </div>
                <div className="flex-1 lg:flex-none flex flex-col items-center text-center lg:items-end lg:text-right lg:border-t lg:pt-4">
                  <div className="font-['Playfair_Display'] text-3xl italic">London</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 mt-1">Based</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community */}
        <section id="community" className="border-b border-[#EAE3D8] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-16 pb-8 border-b-2" style={{ borderColor: ORANGE }}>
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl">The Collective.</h2>
              <span className="text-xs uppercase tracking-widest font-semibold hidden sm:block text-gray-500">Demographics & Origin</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              <div className="flex flex-col">
                <span className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: ORANGE }}>Members</span>
                <span className="font-['Playfair_Display'] text-6xl mb-2">400+</span>
                <p className="text-sm text-gray-700 leading-relaxed">A growing collective of ambitious product designers across London and beyond.</p>
              </div>
              <div className="flex flex-col md:border-l border-[#E8E5E0] md:pl-12">
                <span className="text-xs uppercase tracking-widest mb-4 font-bold" style={{ color: ORANGE }}>Focus</span>
                <span className="font-['Playfair_Display'] text-6xl mb-2 italic">Product</span>
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
                {["Amazon", "Microsoft", "Figma", "Intercom", "Monzo", "Palantir", "Burberry", "UAL", "RCA", "Imperial", "Cambridge University"].map((company) => (
                  <span
                    key={company}
                    className="px-6 py-3 text-sm font-medium uppercase tracking-wider cursor-default transition-colors"
                    style={{ border: "1px solid #0A0A0A" }}
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Events */}
        <section id="events" className="border-b border-[#EAE3D8] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline justify-between mb-16 pb-8 border-b border-[#0A0A0A]">
              <h2 className="font-['Playfair_Display'] text-5xl md:text-7xl">Calendar.</h2>
              <a
                href="https://lu.ma/user/FouxySquad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-semibold flex items-center space-x-2 pb-1 hover:opacity-70 transition-opacity"
                style={{ color: ORANGE, borderBottom: `1px solid ${ORANGE}` }}
              >
                <span>View Full Archive</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="flex flex-col">
              {isLoading && (
                <div className="py-16 text-center text-xs uppercase tracking-widest text-gray-400">Loading events…</div>
              )}
              {!isLoading && (showAll ? events : events.slice(0, 5)).map((event, i) => {
                const isUpcoming = event.status === "upcoming";
                const bgColors = ["#0A0A0A", "#dcdad5", "#c8c5c0", "#E8E5E0", "#0A0A0A", "#dcdad5"];
                return (
                  <div
                    key={event.id}
                    onClick={() => event.lumaUrl && window.open(event.lumaUrl, "_blank")}
                    className={`grid grid-cols-1 md:grid-cols-12 gap-8 py-8 px-6 border-b border-[#EAE3D8] group hover:bg-[#F5F0E8] transition-colors duration-200 cursor-pointer ${!isUpcoming ? "opacity-70" : ""}`}
                  >
                    <div className="md:col-span-2 flex flex-col justify-center">
                      <span className="text-xs uppercase tracking-widest font-bold mb-1" style={{ color: isUpcoming ? ORANGE : "#9CA3AF" }}>
                        {isUpcoming ? "Upcoming" : "Past"}
                      </span>
                      <span className="font-['Playfair_Display'] text-xl">{formatDate(event.date)}</span>
                      {event.isOnline && (
                        <span className="text-[10px] uppercase tracking-widest text-gray-400 mt-1">Online</span>
                      )}
                    </div>
                    <div className="md:col-span-3">
                      {(event.imageUrl || LOCAL_FALLBACKS[event.id]) ? (
                        <img
                          src={event.imageUrl || LOCAL_FALLBACKS[event.id]}
                          alt={event.title}
                          className="w-full aspect-square object-cover"
                        />
                      ) : (
                        <div className="w-full aspect-square" style={{ backgroundColor: bgColors[i % bgColors.length] }} />
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
                      <div
                        className="w-12 h-12 border flex items-center justify-center transition-colors"
                        style={isUpcoming ? { borderColor: ORANGE, color: ORANGE } : { borderColor: "#D1D5DB", color: "#9CA3AF" }}
                      >
                        {isUpcoming ? <ArrowRight className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {!isLoading && events.length > 5 && (
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setShowAll((v) => !v)}
                  className="flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase px-8 py-4 border border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-colors"
                >
                  <span>{showAll ? "Show Less" : `View All ${events.length} Events`}</span>
                  {showAll ? <ChevronUp className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="border-b border-[#EAE3D8] py-24">
          <div className="max-w-7xl mx-auto px-6">
            <BentoGallery />
          </div>
        </section>

        {/* Sponsors */}
        <section className="border-b border-[#EAE3D8] py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="text-xs uppercase tracking-widest font-bold" style={{ color: ORANGE }}>Supported By</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
              {[
                { src: "/images/logo-halkin.png", alt: "Halkin", h: "h-20", href: "https://www.halkin.com/" },
                { src: "/images/logo-sponsor2.png", alt: "Replit", h: "h-14", href: "https://replit.com" },
              ].map(({ src, alt, h, href }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-5 py-12 px-8 bg-white border border-[#EAE3D8] hover:border-[#0A0A0A] transition-colors group"
                >
                  <img src={src} alt={alt} className={`${h} object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300`} />
                  <span className="text-[9px] uppercase tracking-[0.15em] text-gray-400 group-hover:text-gray-700 transition-colors font-semibold">{alt}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="join" className="py-32 border-b border-[#EAE3D8]">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
            <div className="w-16 h-[2px] mb-12" style={{ backgroundColor: ORANGE }} />
            <h2 className="font-['Playfair_Display'] text-6xl md:text-8xl italic mb-8">Ready to join?</h2>
            <p className="text-xl text-gray-700 font-light mb-12 max-w-lg">
              Become part of London's most engaged design collective. No membership fees, just good design and great people.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="https://chat.whatsapp.com/FouxySquad"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join WhatsApp Group</span>
                <ArrowRight className="w-3 h-3" />
              </a>
              <a
                href="https://lu.ma/user/FouxySquad"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[#0A0A0A] text-[#0A0A0A] text-xs font-semibold tracking-widest uppercase px-8 py-4 flex items-center justify-center space-x-2 hover:bg-[#0A0A0A] hover:text-white transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>View Events on Luma</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
            <div className="w-full max-w-lg">
              <div className="w-full h-[1px] bg-[#0A0A0A]/20 mb-8" />
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
                  <a href="mailto:fouxysquad@gmail.com" className="font-medium border-b border-[#0A0A0A]/30 hover:border-[#0A0A0A] transition-colors">
                    fouxysquad@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12" style={{ backgroundColor: "#0A0A0A" }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="font-['Playfair_Display'] text-2xl tracking-tight italic text-white">Fouxy Squad</span>
            <span className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: ORANGE }} />
          </div>
          <div className="flex space-x-8 text-xs font-semibold uppercase tracking-widest text-white/60">
            <a href="#community" className="hover:text-white transition-colors">The Collective</a>
            <a href="#events" className="hover:text-white transition-colors">Calendar</a>
            <a href="#gallery" className="hover:text-white transition-colors">Moments</a>
          </div>
          <div className="text-white/40 text-xs uppercase tracking-widest">
            © {new Date().getFullYear()} Fouxy Squad
          </div>
        </div>
      </footer>
    </div>
  );
}
