// screen-tour.jsx — First-time welcome tour (shown once after login)
// Applies KUN Design System v2: Quicksand titles, Poppins body, Brick CTAs, pill buttons.

const TOUR_KEY = 'kun_tour_v1';

const KTour = {
  isDone:   () => !!localStorage.getItem(TOUR_KEY),
  markDone: () => localStorage.setItem(TOUR_KEY, '1'),
  reset:    () => localStorage.removeItem(TOUR_KEY),
};
window.KTour = KTour;

const T_FT = 'Quicksand, sans-serif';
const T_FB = 'Poppins, sans-serif';

const TOUR_MASCOTS = {
  wave: 'assets/kun/kun-wave.svg',
  guideDown: 'assets/kun/kun-guide-down.svg',
  bondHero: 'assets/kun/kun-bond-hero.svg',
  learning: 'assets/kun/kun-learning.svg',
  support: 'assets/kun/kun-support.svg',
};

// ── Tab IDs matching data-nav-tab attributes in KBottomNav ──
const TAB_IDS = ['home', 'edu', 'bond', 'comm'];
const HIGHLIGHT_PAD = 8;

// Measure a tab's rect relative to the device container at runtime.
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
    cardBottom: Math.round(dr.bottom - tr.top) + 16,
  };
}

const STEPS = [
  {
    type:   'full',
    mascotVariant: 'wave',
    mascotSize: 250,
    bubble: '¡Hola! Soy KUN. Voy a mostrarte todo lo que puedes hacer aquí para acompañar a tu bebé en este proceso. ¿Empezamos?',
    btn:    '¡Vamos!',
  },
  {
    type:     'nav',
    tabIndex: 0,
    mascotVariant: 'guideDown',
    mascotPosition: 'guideHome',
    mascotSize: 238,
    mascotFlipX: true,
    bubble:   'Aquí verás cómo está tu bebé hoy: su peso, sus días en el hospital y la enfermera que lo está cuidando.',
    btn:      'Siguiente',
  },
  {
    type:     'nav',
    tabIndex: 2,
    mascotVariant: 'bondHero',
    mascotPosition: 'heroTop',
    mascotSize: 250,
    bubble:   'Aquí puedes guardar los momentos importantes, compartirlos con tu familia y leerle cuentos o cantarle a tu bebé.',
    btn:      'Siguiente',
  },
  {
    type:     'nav',
    tabIndex: 1,
    mascotVariant: 'learning',
    mascotPosition: 'heroTop',
    mascotSize: 260,
    bubble:   'Te iremos preparando con información especial para cada etapa de tu bebé. A tu ritmo, cuando puedas.',
    btn:      'Siguiente',
  },
  {
    type:     'nav',
    tabIndex: 3,
    mascotVariant: 'support',
    mascotPosition: 'heroTop',
    mascotSize: 300,
    mascotTop: -136,
    mascotContentPaddingTop: 176,
    bubble:   'En Comunidad puedes conectarte con otros papás y mamás que están viviendo algo parecido. Recuerda que sus respuestas no están respaldadas por UC CHRISTUS y pueden contener información errónea; ante dudas médicas, consulta al equipo de salud.',
    btn:      'Siguiente',
  },
  {
    type:   'full',
    bubble: 'Ya estás listo. Recuerda que no estás solo en esto. Aquí estaremos contigo en cada paso. 🧡',
    btn:    'Comenzar',
    isLast: true,
    mascotVariant: null,
    videoAsset: './assets/kun/kun-tutorial-final.mp4?v=8',
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
        boxShadow: `0 0 0 2.5px ${KUN.brick}, 0 0 0 6px rgba(240,116,62,0.22), 0 0 28px rgba(240,116,62,0.30)`,
        pointerEvents: 'none',
      }}/>
    </>
  );
}

// Tab that should be visible in the background for each step
const STEP_TAB = [null, 'home', 'bond', 'edu', 'comm', null];

// Decorative half-moons for full-screen steps
function TourShapes() {
  return (
    <>
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 220, height: 220, borderRadius: '50%',
        background: KUN.rosehip, opacity: 0.18,
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: -100, left: -90,
        width: 240, height: 240, borderRadius: '50%',
        background: KUN.apple, opacity: 0.16,
        pointerEvents: 'none',
      }}/>
    </>
  );
}

// ── Tour component ────────────────────────────────────────────────────────────
function TourMascot({ variant, size = 86, flipX = false }) {
  const src = TOUR_MASCOTS[variant];
  if (!src) return null;
  return (
    <img
      src={src}
      alt="Kun"
      style={{
        width: size,
        height: size,
        objectFit: 'contain',
        display: 'block',
        flexShrink: 0,
        pointerEvents: 'none',
        transform: flipX ? 'scaleX(-1)' : undefined,
      }}
    />
  );
}

function TourFinalVideo({ src }) {
  const videoRef = React.useRef(null);

  const showVideoFrame = React.useCallback((video, time = 0.04) => {
    if (!video || !Number.isFinite(video.duration) || video.duration <= 0) return;
    try {
      video.currentTime = Math.min(time, Math.max(video.duration - 0.04, 0));
    } catch (error) {
      // Some browsers reject seeking before enough metadata is available.
    }
  }, []);

  React.useEffect(() => {
    if (!src) return;
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.loop = false;
      video.load?.();
    }
    const id = setTimeout(() => {
      if (!videoRef.current) return;
      const video = videoRef.current;
      try {
        if (video.readyState > 0) video.currentTime = 0;
      } catch (error) {
        // Keep playing even if the browser cannot seek yet.
      }
      video.play?.().catch?.(() => {});
    }, 600);
    return () => clearTimeout(id);
  }, [src]);
  if (!src) return null;
  return (
    <div style={{
      width: 'min(350px, 86vw)',
      height: 242,
      margin: '0 auto 4px',
      position: 'relative',
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      overflow: 'visible',
      background: 'transparent',
    }}>
      <video
        ref={videoRef}
        key={src}
        src={src}
        autoPlay
        defaultMuted
        muted
        playsInline
        preload="auto"
        aria-label="Kun"
        controls={false}
        onLoadedMetadata={(event) => {
          showVideoFrame(event.currentTarget, 0.18);
        }}
        onCanPlay={(event) => {
          showVideoFrame(event.currentTarget, 0.18);
        }}
        onEnded={(event) => {
          const video = event.currentTarget;
          video.pause?.();
          showVideoFrame(video, 0.18);
        }}
        style={{
          width: 350,
          maxWidth: '86vw',
          height: 242,
          objectFit: 'contain',
          display: 'block',
          pointerEvents: 'none',
          position: 'relative',
          zIndex: 20,
          opacity: 1,
          clipPath: 'inset(2px 0 0 0)',
        }}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

function getTourMascotStyle(step, tabRect) {
  const size = step.mascotSize || 240;
  if (step.mascotPosition === 'guideHome') {
    return {
      position:'absolute',
      left: Math.max(-32, (tabRect?.x || 0) - 18),
      bottom: -82,
      width: size,
      height: size,
      zIndex: 12,
      pointerEvents:'none',
    };
  }
  return {
    position:'absolute',
    left:'50%',
    top: step.mascotTop ?? -150,
    transform:'translateX(-50%)',
    width: size,
    height: size,
    zIndex: 12,
    pointerEvents:'none',
  };
}
function ScreenTour({ onDone, onSkip, onStepChange }) {
  const [step, setStep] = React.useState(0);
  const [tabRect, setTabRect] = React.useState(null);
  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  React.useEffect(() => {
    const tabId = STEP_TAB[step];
    if (tabId && onStepChange) onStepChange(tabId);

    if (current.type === 'nav') {
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
  const back = () => setStep(s => Math.max(0, s - 1));
  const skip = () => { onSkip ? onSkip() : onDone(); };

  // Step progress dots
  const Dots = ({ light }) => (
    <div style={{ display:'flex', gap: 6, justifyContent:'center', alignItems:'center' }}>
      {STEPS.map((_, i) => (
        <div key={i} style={{
          width: i === step ? 22 : 6,
          height: 6, borderRadius: 3,
          background: i === step
            ? KUN.brick
            : (light ? 'rgba(42,35,32,0.18)' : 'rgba(255,255,255,0.38)'),
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
      textAlign:'center', fontFamily: T_FT, fontSize: 13, fontWeight: 600,
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
        overflow: isLast ? 'visible' : 'hidden',
        fontFamily: T_FB,
      }}>
        <TourShapes/>

        {isLast && current.videoAsset ? (
          <TourFinalVideo key={current.videoAsset} src={current.videoAsset} />
        ) : current.mascotVariant ? (
          <div style={{
            position:'relative',
            zIndex: 1,
            width: current.mascotSize || 250,
            height: current.mascotSize || 250,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            pointerEvents:'none',
          }}>
            <TourMascot
              variant={current.mascotVariant}
              size={current.mascotSize || 250}
              flipX={current.mascotFlipX}
            />
          </div>
        ) : (
          <div style={{
            position:'relative', zIndex: 1,
            width: 120, height: 120, borderRadius: 40,
            background: KUN.rosehip,
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            <KunImg size={88} />
          </div>
        )}

        {/* Speech bubble */}
        <div style={{
          position:'relative', zIndex: 1,
          width:'100%', boxSizing:'border-box',
          background: '#fff',
          borderRadius: 24, padding: '20px 22px',
          border: `1px solid ${KUN.hair}`,
          fontFamily: T_FB, fontSize: 15, fontWeight: 400, color: KUN.ink,
          lineHeight: 1.6, textAlign:'center',
        }}>
          {current.bubble}
        </div>

        <div style={{ position:'relative', zIndex: 1 }}><Dots light /></div>

        <div style={{ position:'relative', zIndex: 1, width:'100%', display:'grid', gridTemplateColumns: step > 0 ? '104px 1fr' : '1fr', gap: 10, alignItems:'center' }}>
          {step > 0 && (
            <button onClick={back} style={{
              height: 50,
              border:`1px solid ${KUN.hair}`,
              background:'#fff',
              color: KUN.inkSoft,
              borderRadius: 999,
              fontFamily: T_FT, fontSize: 14, fontWeight: 700,
              cursor:'pointer',
            }}>
              Atrás
            </button>
          )}

          {/* Primary button — DS pill */}
          <button onClick={advance} style={{
            width:'100%', padding: '14px 18px', height: 50, boxSizing:'border-box',
            background: KUN.brick, color: '#fff',
            border:'none', borderRadius: 999,
            fontFamily: T_FT, fontSize: 15, fontWeight: 700, letterSpacing: -0.1,
            cursor:'pointer',
          }}>
            {current.btn}
          </button>
        </div>

        {!isLast && <div style={{ position:'relative', zIndex: 1 }}><SkipLink light /></div>}
      </div>
    );
  }

  // ── Nav highlight steps (steps 1–4) ──────────────────────────────────────
  if (!tabRect) {
    return <div style={{ position:'absolute', inset:0, zIndex: 400, background:'rgba(0,0,0,0.72)' }}/>;
  }

  return (
    <div style={{ position:'absolute', inset:0, zIndex: 400, fontFamily: T_FB }}>
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
        <div style={getTourMascotStyle(current, tabRect)}>
          <TourMascot variant={current.mascotVariant} size={current.mascotSize} flipX={current.mascotFlipX} />
        </div>
        <div style={{
          position:'relative',
          zIndex: 10,
          background: '#fff',
          borderRadius: 28,
          overflow:'visible',
          border: `1px solid ${KUN.hair}`,
          boxShadow: '0 16px 48px rgba(0,0,0,0.28), 0 4px 12px rgba(0,0,0,0.12)',
        }}>
          <div style={{
            padding: current.mascotPosition === 'guideHome'
              ? '18px 20px 82px'
              : `${current.mascotContentPaddingTop || 116}px 20px 22px`,
            display:'flex', flexDirection:'column',
            alignItems:'center', gap: 14,
          }}>
            {/* Message */}
            <div style={{
              fontFamily: T_FB, fontSize: 14, fontWeight: 400, color: KUN.ink,
              lineHeight: 1.55, textAlign:'center',
            }}>
              {current.bubble}
            </div>

            <div style={{ width:'100%', display:'grid', gridTemplateColumns: step > 0 ? '92px 1fr' : '1fr', gap: 10, alignItems:'center' }}>
              {step > 0 && (
                <button onClick={back} style={{
                  height: 42,
                  border:`1px solid ${KUN.hair}`,
                  background:'#fff',
                  color: KUN.inkSoft,
                  borderRadius: 999,
                  fontFamily: T_FT, fontSize: 13.5, fontWeight: 700,
                  cursor:'pointer',
                }}>
                  Atrás
                </button>
              )}

              {/* Next button — DS pill */}
              <button onClick={advance} style={{
                width:'100%', padding: '11px 18px', height: 42, boxSizing:'border-box',
                background: KUN.brick, color: '#fff',
                border:'none', borderRadius: 999,
                fontFamily: T_FT, fontSize: 13.5, fontWeight: 700, letterSpacing: -0.1,
                cursor:'pointer',
              }}>
                {current.btn}
              </button>
            </div>
            <SkipLink />
          </div>
        </div>
      </div>
    </div>
  );
}

window.ScreenTour = ScreenTour;


