export default function SponsorC() {
  const ORANGE = '#E8742C';
  return (
    <div style={{ backgroundColor: '#FDFAF6', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 48px', fontFamily: 'sans-serif' }}>
      <div style={{ width: '100%', maxWidth: 960 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 64, alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: ORANGE, fontWeight: 700, marginBottom: 16 }}>Supported By</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 64, lineHeight: 0.9, margin: 0, color: '#0A0A0A' }}>
              Our<br /><em>Partners.</em>
            </h2>
            <p style={{ fontSize: 13, color: '#6B7280', marginTop: 20, lineHeight: 1.6, maxWidth: 240 }}>Organisations who believe in the power of design community.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, borderLeft: '1px solid #EAE3D8', paddingLeft: 64 }}>
            {[
              { src: '/__mockup/images/logo-halkin.png?v=2', alt: 'Halkin', h: 64 },
              { src: '/__mockup/images/logo-sponsor2.png?v=2', alt: 'Replit', h: 48 },
              { src: '/__mockup/images/logo-fotor.png', alt: 'Fotor AI', h: 48 },
            ].map(({ src, alt, h }, i) => (
              <div key={alt} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '28px 0', borderBottom: '1px solid #EAE3D8', borderTop: i === 0 ? '1px solid #EAE3D8' : undefined }}>
                <img src={src} alt={alt} style={{ height: h, objectFit: 'contain', filter: 'grayscale(1)', opacity: 0.65 }} />
                <span style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#D1D5DB' }}>{alt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
