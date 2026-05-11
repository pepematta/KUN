// screen-tour.jsx — First-time welcome tour (shown once after login)

const TOUR_KEY = 'kun_tour_v1';

const KTour = {
  isDone:   () => !!localStorage.getItem(TOUR_KEY),
  markDone: () => localStorage.setItem(TOUR_KEY, '1'),
  reset:    () => localStorage.removeItem(TOUR_KEY),
};
window.KTour = KTour;

// ── Tab IDs matching data-nav-tab attributes in KBottomNav ──
const TAB_IDS = ['home', 'edu', 'bond', 'comm'];
const HIGHLIGHT_PAD = 8;

// Measure a tab's rect relative to the device container at runtime.
// Works on any screen size (desktop frame or full-bleed mobile).
function measureTabRect(tabId) {
  const device = document.querySelector('.kun-device') || document.documentElement;
  const tab    = document.querySelector(`[data-nav-tab="${tabId}"]`);
  if (!tab) return null;
  const dr = device.getBoundingClientRect();
  const tr = tab.getBoundingClientRect();
  const p  = HIGHLIGHT_PAD;
  return {
    x: Math.round(tr.left - dr.left) - p,
    y: Math.round(tr.top  - dr.top)  - p,
    w: Math.round(tr.width)  + p * 2,
    h: Math.round(tr.height) + p * 2,
    // bottom offset of card above the tab (for positioning the floating card)
    cardBottom: Math.round(dr.bottom - tr.top) + 16,
  };
}

const STEPS = [
  {
    type:   'full',
    bubble: '¡Hola! Soy KUN. Voy a mostrarte todo lo que puedes hacer aquí para acompañar a tu bebé en este proceso. ¿Empezamos?',
    btn:    '¡Vamos!',
  },
  {
    type:     'nav',
    tabIndex: 0,
    bubble:   'Aquí verás cómo está tu bebé hoy: su peso, sus días en el hospital y la enfermera que lo está cuidando.',
    btn:      'Siguiente',
  },
  {
    type:     'nav',
    tabIndex: 1,
    bubble:   'Te iremos preparando con información especial para cada etapa de tu bebé. A tu ritmo, cuando puedas.',
    btn:      'Siguiente',
  },
  {
    type:     'nav',
    tabIndex: 2,
    bubble:   'Aquí puedes guardar los momentos importantes, compartirlos con tu familia y leerle cuentos o cantarle a tu bebé.',
    btn:      'Siguiente',
  },
  {
    type:     'nav',
    tabIndex: 3,
    bubble:   'Puedes hablar con las enfermeras y psicólogas, y conectarte con otros papás y mamás que están viviendo lo mismo que tú.',
    btn:      'Siguiente',
  },
  {
    type:   'full',
    bubble: 'Ya estás listo. Recuerda que no estás solo en esto. Aquí estaremos contigo en cada paso. 🧡',
    btn:    'Comenzar',
    isLast: true,
  },
];

// ── Dark overlay with rectangular cutout ─────────────────────────────────────
function CutoutOverlay({ rect }) {
  const { x, y, w, h } = rect;
  const bg = 'rgba(0,0,0,0.72)';
  return (
    <>
      <div style={{ position:'absolute', top:0, left:0, right:0, height: y, background: bg, pointerEvents:'all' }}/>
      <div style={{ position:'absolute', top: y+h, left:0, right:0, bottom:0, background: bg, pointerEvents:'all' }}/>
      <div style={{ position:'absolute', top: y, left:0, width: x, height: h, background: bg, pointerEvents:'all' }}/>
      <div style={{ position:'absolute', top: y, left: x+w, right:0, height: h, background: bg, pointerEvents:'all' }}/>
      {/* glowing highlight ring around the exposed tab */}
      <div style={{
        position:'absolute',
        top: y, left: x, width: w, height: h,
        borderRadius: 18,
        boxShadow: `0 0 0 2.5px ${KUN.accent}, 0 0 0 6px rgba(201,123,90,0.22), 0 0 28px rgba(201,123,90,0.25)`,
        pointerEvents: 'none',
      }}/>
    </>
  );
}

// Tab that should be visible in the background for each step
const STEP_TAB = [null, 'home', 'edu', 'bond', 'comm', null];

// ── Tour component ────────────────────────────────────────────────────────────
function ScreenTour({ onDone, onStepChange }) {
  const [step, setStep] = React.useState(0);
  const [tabRect, setTabRect] = React.useState(null);
  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  // Notify parent of tab and measure real DOM position on each step change
  React.useEffect(() => {
    const tabId = STEP_TAB[step];
    if (tabId && onStepChange) onStepChange(tabId);

    if (current.type === 'nav') {
      // Small delay so the background tab has rendered before we measure
      const id = setTimeout(() => {
        const r = measureTabRect(TAB_IDS[current.tabIndex]);
        setTabRect(r);
      }, 60);
      return () => clearTimeout(id);
    } else {
      setTabRect(null);
    }
  }, [step]);

  const advance = () => {
    if (isLast) { onDone(); }
    else setStep(s => s + 1);
  };
  const skip = () => { onDone(); };

  // Step progress dots
  const Dots = ({ light }) => (
    <div style={{ display:'flex', gap: 6, justifyContent:'center', alignItems:'center' }}>
      {STEPS.map((_, i) => (
        <div key={i} style={{
          width: i === step ? 20 : 6,
          height: 6, borderRadius: 3,
          background: i === step
            ? KUN.accent
            : (light ? 'rgba(46,42,38,0.18)' : 'rgba(255,255,255,0.38)'),
          transition: 'width 0.3s ease',
        }}/>
      ))}
    </div>
  );

  const KunImg = ({ size }) => (
    <img
      src="logo.png" alt="KUN"
      style={{ width: size, height: size, objectFit:'contain', display:'block' }}
    />
  );

  const SkipLink = ({ light }) => (
    <div onClick={skip} style={{
      textAlign:'center', fontSize: 13, fontWeight: 600,
      color: light ? KUN.inkMuted : 'rgba(255,255,255,0.6)',
      cursor:'pointer', textDecoration:'underline',
      letterSpacing: 0.1,
    }}>
      Saltar recorrido
    </div>
  );

  // ── Full-screen steps (step 0 & step 5) ──────────────────────────────────
  if (current.type === 'full') {
    return (
      <div style={{
        position:'absolute', inset:0, zIndex: 400,
        background: KUN.bg,
        display:'flex', flexDirection:'column',
        alignItems:'center', justifyContent:'center',
        padding: '48px 32px',
        gap: 22,
      }}>
        {/* KUN mascot */}
        <div style={{
          width: 120, height: 120, borderRadius: 40,
          background: KUN.accentSoft,
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow: `0 0 0 10px rgba(201,123,90,0.08), 0 8px 32px rgba(201,123,90,0.18)`,
        }}>
          <KunImg size={90} />
        </div>

        {/* Speech bubble */}
        <div style={{
          width:'100%', boxSizing:'border-box',
          background: '#fff',
          borderRadius: 24, padding: '18px 20px',
          border: `1.5px solid ${KUN.trackSoft}`,
          boxShadow: '0 2px 8px rgba(46,42,38,0.06)',
          fontSize: 16, fontWeight: 600, color: KUN.ink,
          lineHeight: 1.55, textAlign:'center',
        }}>
          {current.bubble}
        </div>

        <Dots light />

        {/* Primary button */}
        <button onClick={advance} style={{
          width:'100%', padding: '17px', boxSizing:'border-box',
          background: KUN.accent, color: '#fff',
          border:'none', borderRadius: 22,
          fontSize: 17, fontWeight: 800, letterSpacing: -0.2,
          cursor:'pointer',
          boxShadow: `0 4px 18px rgba(201,123,90,0.42)`,
          fontFamily: "'Nunito', system-ui, sans-serif",
        }}>
          {current.btn}
        </button>

        {!isLast && <SkipLink light />}
      </div>
    );
  }

  // ── Nav highlight steps (steps 1–4) ──────────────────────────────────────
  // tabRect is measured from the live DOM — works on any screen size
  if (!tabRect) {
    // Still measuring — render full dark overlay while we wait the 60ms
    return <div style={{ position:'absolute', inset:0, zIndex: 400, background:'rgba(0,0,0,0.72)' }}/>;
  }

  return (
    <div style={{ position:'absolute', inset:0, zIndex: 400 }}>
      {/* Full-screen click blocker (prevents interaction with app behind) */}
      <div style={{ position:'absolute', inset:0, zIndex: 0 }}/>

      {/* Overlay with cutout */}
      <CutoutOverlay rect={tabRect} />

      {/* Step dots — top of dark area */}
      <div style={{ position:'absolute', top: 68, left:0, right:0, zIndex: 10 }}>
        <Dots />
      </div>

      {/* KUN + bubble card — floats above the highlighted tab */}
      <div style={{
        position:'absolute', left: 20, right: 20,
        bottom: tabRect.cardBottom,
        zIndex: 10,
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 28,
          overflow:'hidden',
          boxShadow: '0 16px 48px rgba(0,0,0,0.28), 0 4px 12px rgba(0,0,0,0.12)',
        }}>
          {/* accent top stripe */}
          <div style={{ height: 4, background: `linear-gradient(90deg, ${KUN.accent}, ${KUN.accentDeep})` }}/>

          <div style={{
            padding: '18px 20px 22px',
            display:'flex', flexDirection:'column',
            alignItems:'center', gap: 14,
          }}>
            {/* KUN small */}
            <div style={{
              width: 58, height: 58, borderRadius: 20,
              background: KUN.accentSoft,
              display:'flex', alignItems:'center', justifyContent:'center',
              boxShadow: `0 0 0 4px rgba(201,123,90,0.12)`,
            }}>
              <KunImg size={44} />
            </div>

            {/* Message */}
            <div style={{
              fontSize: 14.5, fontWeight: 600, color: KUN.ink,
              lineHeight: 1.5, textAlign:'center',
            }}>
              {current.bubble}
            </div>

            {/* Arrow hint pointing down to the highlighted tab */}
            <div style={{
              display:'flex', alignItems:'center', gap: 6,
              fontSize: 12, fontWeight: 700, color: KUN.accent,
              letterSpacing: 0.2,
            }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2V12M7 12L3 8M7 12L11 8"
                  stroke={KUN.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Ver abajo
            </div>

            {/* Next button */}
            <button onClick={advance} style={{
              width:'100%', padding: '13px', boxSizing:'border-box',
              background: KUN.accent, color: '#fff',
              border:'none', borderRadius: 16,
              fontSize: 15, fontWeight: 800, letterSpacing: -0.1,
              cursor:'pointer',
              boxShadow: `0 4px 14px rgba(201,123,90,0.38)`,
              fontFamily: "'Nunito', system-ui, sans-serif",
            }}>
              {current.btn}
            </button>

            <SkipLink />
          </div>
        </div>
      </div>
    </div>
  );
}

window.ScreenTour = ScreenTour;
