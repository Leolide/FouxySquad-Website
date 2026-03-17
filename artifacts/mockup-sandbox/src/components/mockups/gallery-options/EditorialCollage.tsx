import { useState } from "react";

const ORANGE = "#E8742C";

const images = [
  { src: "/__mockup/images/event-new.jpg",      label: "Fouxy Squad",       col: "col-span-2", row: "row-span-2" },
  { src: "/__mockup/images/event-talk.jpg",     label: "Community Talk",    col: "col-span-2", row: "row-span-1" },
  { src: "/__mockup/images/event-8.jpg",        label: "Gathering",         col: "col-span-1", row: "row-span-1" },
  { src: "/__mockup/images/event-9.jpg",        label: "Community",         col: "col-span-1", row: "row-span-1" },
  { src: "/__mockup/images/event-speaker.png",  label: "On Stage",          col: "col-span-2", row: "row-span-1" },
  { src: "/__mockup/images/event-6.png",        label: "Fouxy Night",       col: "col-span-2", row: "row-span-1" },
  { src: "/__mockup/images/event-3.png",        label: "Workshop",          col: "col-span-1", row: "row-span-1" },
  { src: "/__mockup/images/event-4.png",        label: "Meetup",            col: "col-span-1", row: "row-span-1" },
  { src: "/__mockup/images/event-5.png",        label: "Design Week",       col: "col-span-1", row: "row-span-1" },
  { src: "/__mockup/images/event-1.png",        label: "The Squad",         col: "col-span-1", row: "row-span-1" },
  { src: "/__mockup/images/event-2.png",        label: "London",            col: "col-span-2", row: "row-span-1" },
];

export default function EditorialCollage() {
  const [featured, setFeatured] = useState<number | null>(null);

  const toggle = (i: number) => setFeatured(featured === i ? null : i);

  return (
    <div className="min-h-screen bg-[#FDFAF6] font-['Inter'] py-16 px-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex items-baseline justify-between mb-10 pb-6 border-b-2" style={{ borderColor: ORANGE }}>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold block mb-2" style={{ color: ORANGE }}>
              Option C
            </span>
            <h2 className="font-['Playfair_Display'] text-6xl">Moments.</h2>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
            {featured !== null ? "Click to collapse" : "Click any photo to expand"}
          </span>
        </div>

        {/* Bento grid */}
        <div
          className="grid gap-2"
          style={{
            gridTemplateColumns: "repeat(6, 1fr)",
            gridAutoRows: "140px",
            transition: "all 0.4s ease",
          }}
        >
          {images.map((img, i) => {
            const isFeatured = featured === i;
            const isSmall = featured !== null && !isFeatured;

            let colSpan = img.col;
            let rowSpan = img.row;

            if (isFeatured) {
              colSpan = "col-span-4";
              rowSpan = "row-span-3";
            } else if (isSmall) {
              colSpan = "col-span-1";
              rowSpan = "row-span-1";
            }

            return (
              <div
                key={i}
                onClick={() => toggle(i)}
                className={`${colSpan} ${rowSpan} relative group overflow-hidden cursor-pointer`}
                style={{ transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* Overlay */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: isFeatured
                      ? "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)"
                      : "rgba(0,0,0,0.05)",
                  }}
                />

                {/* Orange expand indicator */}
                {!isFeatured && (
                  <div
                    className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ backgroundColor: ORANGE }}
                  >
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1 7L7 1M7 1H3M7 1V5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}

                {/* Label — always visible on featured, hover on others */}
                {(isFeatured || !isSmall) && (
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                      isFeatured ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                    style={{
                      background: isFeatured
                        ? "transparent"
                        : "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                    }}
                  >
                    {isFeatured && (
                      <span
                        className="text-[9px] uppercase tracking-widest font-bold block mb-1 px-2 py-1 w-fit"
                        style={{ backgroundColor: ORANGE, color: "white" }}
                      >
                        Featured
                      </span>
                    )}
                    <h4 className="font-['Playfair_Display'] text-white italic leading-tight"
                      style={{ fontSize: isFeatured ? "1.5rem" : "0.85rem" }}
                    >
                      {img.label}
                    </h4>
                  </div>
                )}

                {/* Collapse X on featured */}
                {isFeatured && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/40 transition-colors">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 1L9 9M9 1L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center space-x-4">
          <div className="w-8 h-[1px]" style={{ backgroundColor: ORANGE }} />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">
            10 photographs · click to feature
          </span>
        </div>
      </div>
    </div>
  );
}
