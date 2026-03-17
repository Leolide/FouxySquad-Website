const ORANGE = "#E8742C";

export default function CinematicHero() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] font-['Inter'] py-20">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex items-baseline justify-between mb-14 pb-6 border-b border-white/10">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-3" style={{ color: ORANGE }}>
              Option B
            </span>
            <h2 className="font-['Playfair_Display'] text-6xl text-white">Moments.</h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-white/30 font-medium">Cinematic Hero</span>
        </div>
      </div>

      {/* Full-bleed hero */}
      <div className="relative w-full h-[55vh] overflow-hidden mb-3">
        <img
          src="/__mockup/images/event-talk.jpg"
          alt="Featured moment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-widest text-white/60 font-semibold block mb-2">Featured</span>
            <h3 className="font-['Playfair_Display'] text-3xl italic text-white">Community Talk</h3>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-widest text-white/40">London, 2025</span>
          </div>
        </div>
      </div>

      {/* Contact strip */}
      <div className="grid grid-cols-5 gap-[3px] mb-3">
        {[
          "/__mockup/images/event-6.png",
          "/__mockup/images/event-new.jpg",
          "/__mockup/images/event-8.jpg",
          "/__mockup/images/event-3.png",
          "/__mockup/images/event-9.jpg",
        ].map((src, i) => (
          <div key={i} className="relative group overflow-hidden h-[160px]">
            <img src={src} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0" />
            <div className="absolute inset-0 border border-white/5" />
          </div>
        ))}
      </div>

      {/* Bottom two */}
      <div className="grid grid-cols-2 gap-[3px] max-w-6xl mx-auto px-8 mt-4">
        <div className="relative group overflow-hidden h-[200px]">
          <img src="/__mockup/images/event-4.png" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </div>
        <div className="relative group overflow-hidden h-[200px]">
          <img src="/__mockup/images/event-5.png" alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 mt-8 flex items-center space-x-4">
        <div className="w-8 h-[1px]" style={{ backgroundColor: ORANGE }} />
        <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-medium">10 photographs from our gatherings</span>
      </div>
    </div>
  );
}
