export default function SponsorB() {
  const ORANGE = '#E8742C';
  return (
    <div style={{ backgroundColor: '#FDFAF6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 48px', fontFamily: 'sans-serif' }}>
      <div style={{ width: '100%', maxWidth: 960 }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: ORANGE, fontWeight: 700 }}>Supported By</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {[
            { src: '/__mockup/images/logo-halkin.png?v=2', alt: 'Halkin', h: 80 },
            { src: '/__mockup/images/logo-sponsor2.png?v=2', alt: 'Replit', h: 60 },
            { src: '/__mockup/images/logo-fotor.png', alt: 'Fotor AI', h: 60 },
          ].map(({ src, alt, h }) => (
            <div key={alt} style={{ border: '1px solid #EAE3D8', padding: '48px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, backgroundColor: 'white' }}>
              <img src={src} alt={alt} style={{ height: h, objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.7 }} />
              <span style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#9CA3AF', fontWeight: 600 }}>{alt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
