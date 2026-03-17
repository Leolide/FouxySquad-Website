export default function SponsorA() {
  return (
    <div style={{ backgroundColor: '#0A0A0A', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 48px', fontFamily: 'sans-serif' }}>
      <div style={{ width: '100%', maxWidth: 960 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 56 }}>
          <div style={{ width: 24, height: 2, backgroundColor: '#E8742C' }} />
          <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', fontWeight: 600 }}>Supported By</span>
          <div style={{ flex: 1, height: 1, backgroundColor: 'rgba(255,255,255,0.1)' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 80, flexWrap: 'wrap' }}>
          <img src="/__mockup/images/logo-halkin.png?v=2" alt="Halkin" style={{ height: 80, objectFit: 'contain', filter: 'invert(1) brightness(0.6)' }} />
          <div style={{ width: 1, height: 60, backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <img src="/__mockup/images/logo-sponsor2.png?v=2" alt="Replit" style={{ height: 56, objectFit: 'contain', filter: 'invert(1) brightness(0.6)' }} />
          <div style={{ width: 1, height: 60, backgroundColor: 'rgba(255,255,255,0.1)' }} />
          <img src="/__mockup/images/logo-fotor.png" alt="Fotor AI" style={{ height: 56, objectFit: 'contain', filter: 'invert(1) brightness(0.6)' }} />
        </div>
      </div>
    </div>
  );
}
