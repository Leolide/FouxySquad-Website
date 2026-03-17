import { useState } from "react";

const ORANGE = "#E8742C";

const images = [
  { src: "/__mockup/images/event-talk.jpg",     label: "Community Talk",   sub: "London, 2025" },
  { src: "/__mockup/images/event-workshop.jpg", label: "AI Workshop",      sub: "Vibe Coding Series" },
  { src: "/__mockup/images/event-speaker.png",  label: "On Stage",         sub: "Speaker Series" },
  { src: "/__mockup/images/event-6.png",        label: "Fouxy Gathering",  sub: "Battersea, 2025" },
  { src: "/__mockup/images/event-8.jpg",        label: "Community Night",  sub: "London, 2025" },
  { src: "/__mockup/images/event-new.jpg",      label: "Fouxy Squad",      sub: "Est. 2025" },
  { src: "/__mockup/images/event-catering.jpg", label: "Halkin Venue",     sub: "Sponsored" },
  { src: "/__mockup/images/event-3.png",        label: "Workshop",         sub: "London, 2025" },
  { src: "/__mockup/images/event-4.png",        label: "Meetup",           sub: "London, 2025" },
  { src: "/__mockup/images/event-crowd.jpg",    label: "The Crowd",        sub: "London, 2025" },
];

export default function EditorialCollage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const thumbnails = images.filter((_, i) => i !== heroIndex);
  const hero = images[heroIndex];

  const selectHero = (src: string) => {
    const newIndex = images.findIndex((img) => img.src === src);
    if (newIndex === heroIndex) return;
    setFading(true);
    setTimeout(() => {
      setHeroIndex(newIndex);
      setFading(false);
    }, 220);
  };

  return (
    <div className="min-h-screen bg-[#FDFAF6] font-['Inter'] py-14 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-baseline justify-between mb-10 pb-5 border-b-2" style={{ borderColor: ORANGE }}>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-2" style={{ color: ORANGE }}>
              Option C
            </span>
            <h2 className="font-['Playfair_Display'] text-5xl">Moments.</h2>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
            Click any photo to feature it
          </span>
        </div>

        {/* Bento layout: fixed grid, hero swaps content */}
        <div className="grid grid-cols-12 grid-rows-[320px_160px_160px] gap-2">

          {/* Hero slot — always top-left, col-span-8, row-span-2 */}
          <div className="col-span-8 row-span-2 relative overflow-hidden bg-gray-100">
            <img
              key={heroIndex}
              src={hero.src}
              alt={hero.label}
              className="w-full h-full object-cover"
              style={{
                opacity: fading ? 0 : 1,
                transition: "opacity 0.22s ease",
              }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
            {/* Label */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{ opacity: fading ? 0 : 1, transition: "opacity 0.22s ease" }}
            >
              <h3 className="font-['Playfair_Display'] text-3xl italic text-white leading-tight">
                {hero.label}
              </h3>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{hero.sub}</p>
            </div>
          </div>

          {/* Right column: top two thumbnails stacked */}
          {thumbnails.slice(0, 2).map((img) => (
            <div
              key={img.src}
              onClick={() => selectHero(img.src)}
              className="col-span-4 row-span-1 relative overflow-hidden cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
              {/* Hover label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-xs font-medium font-['Playfair_Display'] italic">{img.label}</p>
              </div>
              {/* Orange dot indicator */}
              <div
                className="absolute top-2 right-2 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              />
            </div>
          ))}

          {/* Bottom row: 5 small thumbnails (col-span-2 each = 10 cols) + 2 cols from hero overflow */}
          {thumbnails.slice(2, 7).map((img) => (
            <div
              key={img.src}
              onClick={() => selectHero(img.src)}
              className="col-span-2 row-span-1 relative overflow-hidden cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              <div
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              />
              {/* Slide-up label */}
              <div className="absolute bottom-0 left-0 right-0 px-2 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/50">
                <p className="text-white text-[10px] font-medium truncate font-['Playfair_Display'] italic">{img.label}</p>
              </div>
            </div>
          ))}

          {/* Last 2 thumbnails fill the remaining row-span-1 from bottom-right */}
          {thumbnails.slice(7, 9).map((img) => (
            <div
              key={img.src}
              onClick={() => selectHero(img.src)}
              className="col-span-2 row-span-1 relative overflow-hidden cursor-pointer group"
            >
              <img
                src={img.src}
                alt={img.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              <div
                className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: ORANGE }}
              />
              <div className="absolute bottom-0 left-0 right-0 px-2 py-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/50">
                <p className="text-white text-[10px] font-medium truncate font-['Playfair_Display'] italic">{img.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-[1px]" style={{ backgroundColor: ORANGE }} />
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
              {images.length} photographs · click to feature
            </span>
          </div>
          {/* Dot indicators */}
          <div className="flex space-x-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => selectHero(images[i].src)}
                className="w-1.5 h-1.5 rounded-full transition-all duration-200"
                style={{ backgroundColor: i === heroIndex ? ORANGE : "#D1C9BE" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
