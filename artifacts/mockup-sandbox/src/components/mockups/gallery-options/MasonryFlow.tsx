const ORANGE = "#E8742C";

const images = [
  { src: "/__mockup/images/event-new.jpg", alt: "Community moment", span: false },
  { src: "/__mockup/images/event-talk.jpg", alt: "Community talk", span: false },
  { src: "/__mockup/images/event-6.png", alt: "Fouxy gathering", span: false },
  { src: "/__mockup/images/event-8.jpg", alt: "Community event", span: false },
  { src: "/__mockup/images/event-3.png", alt: "Community moment", span: false },
  { src: "/__mockup/images/event-9.jpg", alt: "Community event", span: false },
  { src: "/__mockup/images/event-4.png", alt: "Community moment", span: false },
  { src: "/__mockup/images/event-5.png", alt: "Community moment", span: false },
  { src: "/__mockup/images/event-1.png", alt: "Community moment", span: false },
];

export default function MasonryFlow() {
  return (
    <div className="min-h-screen bg-[#FDFAF6] font-['Inter'] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-14 pb-6 border-b border-[#0A0A0A]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-3" style={{ color: ORANGE }}>
              Option A
            </span>
            <h2 className="font-['Playfair_Display'] text-6xl">Moments.</h2>
          </div>
          <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">Masonry Flow</span>
        </div>

        <div style={{ columnCount: 3, columnGap: "12px" }}>
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative overflow-hidden mb-3"
              style={{ breakInside: "avoid", display: "block" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full block object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-center space-x-4">
          <div className="w-8 h-[1px]" style={{ backgroundColor: ORANGE }} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">10 photographs from our gatherings</span>
        </div>
      </div>
    </div>
  );
}
