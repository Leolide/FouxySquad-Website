const ORANGE = "#E8742C";

export default function EditorialCollage() {
  return (
    <div className="min-h-screen bg-[#FDFAF6] font-['Inter'] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-14 pb-6 border-b-2" style={{ borderColor: ORANGE }}>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-3" style={{ color: ORANGE }}>
              Option C
            </span>
            <h2 className="font-['Playfair_Display'] text-6xl">Moments.</h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Editorial Collage</span>
        </div>

        {/* Row 1: Portrait feature + two stacked */}
        <div className="grid grid-cols-12 gap-3 mb-3">
          <div className="col-span-4 relative group overflow-hidden">
            <img
              src="/__mockup/images/event-new.jpg"
              alt="Community"
              className="w-full h-[520px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="text-[9px] uppercase tracking-widest text-white/70 font-semibold block mb-1">Community</span>
              <h4 className="font-['Playfair_Display'] text-xl italic text-white leading-tight">Fouxy&nbsp;Squad</h4>
            </div>
          </div>
          <div className="col-span-8 grid grid-rows-2 gap-3">
            <div className="relative group overflow-hidden">
              <img
                src="/__mockup/images/event-talk.jpg"
                alt="Talk"
                className="w-full h-[253px] object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative group overflow-hidden">
                <img src="/__mockup/images/event-8.jpg" alt="" className="w-full h-[253px] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
              <div className="relative group overflow-hidden">
                <img src="/__mockup/images/event-9.jpg" alt="" className="w-full h-[253px] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: wide + narrow + narrow */}
        <div className="grid grid-cols-12 gap-3 mb-3">
          <div className="col-span-6 relative group overflow-hidden">
            <img src="/__mockup/images/event-6.png" alt="" className="w-full h-[220px] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[9px] uppercase tracking-widest font-semibold px-2 py-1 text-white" style={{ backgroundColor: ORANGE }}>Gathering</span>
            </div>
          </div>
          <div className="col-span-3 relative group overflow-hidden">
            <img src="/__mockup/images/event-3.png" alt="" className="w-full h-[220px] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
          <div className="col-span-3 relative group overflow-hidden">
            <img src="/__mockup/images/event-4.png" alt="" className="w-full h-[220px] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
        </div>

        {/* Row 3: three equal */}
        <div className="grid grid-cols-3 gap-3">
          <div className="relative group overflow-hidden">
            <img src="/__mockup/images/event-5.png" alt="" className="w-full h-[180px] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
          <div className="relative group overflow-hidden">
            <img src="/__mockup/images/event-1.png" alt="" className="w-full h-[180px] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
          <div className="relative group overflow-hidden">
            <img src="/__mockup/images/event-2.png" alt="" className="w-full h-[180px] object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>
        </div>

        <div className="mt-8 flex items-center space-x-4">
          <div className="w-8 h-[1px]" style={{ backgroundColor: ORANGE }} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">10 photographs from our gatherings</span>
        </div>
      </div>
    </div>
  );
}
