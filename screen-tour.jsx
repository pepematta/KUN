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
const TAB_IDS = ['home', 'edu', 'bond', 'comm', 'ucin'];
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
    type: 'full',
    mascotVariant: 'wave',
    mascotSize: 250,
    bubble: '¡Hola! Soy KUN. Voy a mostrarte todo lo que puedes hacer aquí para acompañar a tu bebé en este proceso. ¿Empezamos?',
    btn: '¡Vamos!',
  },
  {
    type: 'coachmark',
    tabIndex: 0,
    highlightElement: '[data-tour-id="bottom-nav-inicio"]',
    bubblePosition: 'top',
    highlightPadding: 12,
    bubble: 'Aquí comienza todo. En esta sección ves el estado de tu bebé, información importante y accesos rápidos.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 0,
    highlightElement: '[data-tour-id="baby-hero-card"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Aquí ves a tu enfermera de turno, la edad cronológica y corregida de tu bebé, y su foto. Toca la edad para entender la diferencia.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 0,
    highlightElement: '[data-tour-id="baby-status-summary"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Este es el resumen diario. Las palabras destacadas explican términos médicos. Tócalas para entender. Este resumen lo actualiza el equipo médico.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 0,
    highlightElement: '[data-tour-id="weight-section"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Aquí se registra el peso diario de tu bebé. Podrás ver cómo ha evolucionado en el tiempo.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 0,
    highlightElement: '[data-tour-id="lactario-card"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'En el Lactario puedes reservar horas para estar con tu bebé. Máximo 4 turnos por día. También ves cuánta leche hay y si necesitas rellenar.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 0,
    highlightElement: '[data-tour-id="recommended-capsules"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Aquí aparecen cápsulas educativas recomendadas para ti según el estado de tu bebé.',
    btn: 'Siguiente',
  },
  {
    type: 'nav',
    tabIndex: 2,
    highlightElement: '[data-tour-id="bottom-nav-vinculo"]',
    bubblePosition: 'top',
    highlightPadding: 12,
    mascotVariant: 'bondHero',
    mascotPosition: 'heroTop',
    mascotSize: 250,
    bubble: 'Aquí es donde creas memoria de estos días. Puedes guardar fotos, videos, notas, grabaciones de voz. También leerle cuentos y cantarle canciones a tu bebé.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 2,
    highlightElement: '[data-tour-id="diario-main-card"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'En el Diario ves todos tus recuerdos organizados por día. Puedes agregar fotos, videos, notas o grabar tu voz.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 2,
    highlightElement: '[data-tour-id="diary-add-button"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Toca aquí para crear un nuevo recuerdo. Elige si quieres agregar una foto, escribir una nota, grabar audio, o todo a la vez.',
    btn: 'Siguiente',
    isInsideDiary: true,
  },
  {
    type: 'coachmark',
    tabIndex: 2,
    highlightElement: '[data-tour-id="color-selector"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Estos colores personalizan el fondo de tu recuerdo. Elige el que más te guste.',
    btn: 'Siguiente',
    isInsideDiary: true,
  },
  {
    type: 'coachmark',
    tabIndex: 2,
    highlightElement: '[data-tour-id="diary-memory-card"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Cada recuerdo que guardas puedes compartirlo con tu familia. Tócalo y elige cómo quieres compartirlo.',
    btn: 'Siguiente',
    isInsideDiary: true,
  },
  {
    type: 'coachmark',
    tabIndex: 2,
    highlightElement: '[data-tour-id="vinculo-activities-section"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Aquí hay cuentos para leerle y canciones para cantarle. Cada una tiene instrucciones especiales. Puedes guardar tus favoritas.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 2,
    highlightElement: '[data-tour-id="vinculo-stories-tab"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Usa estas pestañas para cambiar entre cuentos, canciones y música.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 2,
    highlightElement: '[data-tour-id="story-card"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Toca cualquier cuento o canción para abrirlo. Sigue las instrucciones y cántale o cuéntale a tu bebé. Es un momento especial para ustedes.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 2,
    highlightElement: '[data-tour-id="recordings-section"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: '¡Y aquí pueden grabar! Tú, tu pareja, hermanos... todos pueden dejar mensajes y canciones para tu bebé. Es muy especial.',
    btn: 'Siguiente',
  },
  {
    type: 'nav',
    tabIndex: 1,
    highlightElement: '[data-tour-id="bottom-nav-educacion"]',
    bubblePosition: 'top',
    highlightPadding: 12,
    mascotVariant: 'learning',
    mascotPosition: 'heroTop',
    mascotSize: 260,
    bubble: 'En Educación te preparamos paso a paso. Hay tres tipos de contenido para ti.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 1,
    highlightElement: '[data-tour-id="edu-cuidados-basicos-tab"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'CUIDADOS BÁSICOS: Aquí están las cosas que todo papá o mamá en una UCIN debe saber. Ve completando una a una. Cuando termines una, se libera la siguiente.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 1,
    highlightElement: '[data-tour-id="edu-especial-tab"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'ESPECIAL PARA MI HIJO: Aquí ves cápsulas específicas según el estado de tu bebé. Conforme actualices su información, aparecerán nuevas cápsulas que necesita.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 1,
    highlightElement: '[data-tour-id="edu-biblioteca-tab"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'APRENDER MÁS: Aquí están TODAS las cápsulas disponibles. Puedes explorar por tu cuenta sin estar limitado al camino recomendado.',
    btn: 'Siguiente',
  },
  {
    type: 'nav',
    tabIndex: 3,
    highlightElement: '[data-tour-id="bottom-nav-comunidad"]',
    bubblePosition: 'top',
    highlightPadding: 12,
    mascotVariant: 'support',
    mascotPosition: 'heroTop',
    mascotSize: 300,
    mascotTop: -136,
    mascotContentPaddingTop: 176,
    bubble: 'COMUNIDAD: Es un espacio para conectar con otros papás en la misma situación. Aquí comparten preguntas, experiencias y se apoyan mutuamente.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 3,
    highlightElement: '[data-tour-id="community-preguntas-button"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Aquí haces preguntas cuando necesitas consejo o ayuda de otros papás.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 3,
    highlightElement: '[data-tour-id="community-experiencias-button"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Aquí compartes tus experiencias. Contar lo que vives ayuda a otros papás que están en la misma situación.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    tabIndex: 3,
    highlightElement: '[data-tour-id="community-new-post-button"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Toca aquí para escribir una nueva pregunta o experiencia. Escribe, agrégale etiquetas si quieres, y publica.',
    btn: 'Siguiente',
    isInsideCompose: true,
  },
  {
    type: 'coachmark',
    tabIndex: 3,
    highlightElement: '[data-tour-id="community-reply-section"]',
    bubblePosition: 'bottom',
    highlightPadding: 12,
    bubble: 'Cada publicación crea su propio hilo. Otros papás responden, tú respondes a ellos. Es una conversación entre padres.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    highlightElement: '[data-tour-id="bottom-nav-ucin"]',
    bubblePosition: 'top',
    highlightPadding: 12,
    bubble: 'UCIN: Aquí encuentras toda la información médica de tu bebé, reservas del lactario, y preguntas frecuentes útiles sobre cuidados en la UCIN.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    highlightElement: '[data-tour-id="settings-icon"]',
    bubblePosition: 'bottom',
    highlightPadding: 10,
    bubble: 'En Configuración puedes cambiar tus datos, ver tu perfil, y volver a ver este tutorial cuando quieras.',
    btn: 'Siguiente',
  },
  {
    type: 'coachmark',
    highlightElement: '[data-tour-id="notifications-icon"]',
    bubblePosition: 'bottom',
    highlightPadding: 10,
    bubble: 'Aquí recibirás notificaciones importantes: cuando se liberen nuevas cápsulas, respuestas en la comunidad, recordatorios del equipo.',
    btn: 'Siguiente',
  },
  {
    type: 'full',
    bubble: 'Ya estás listo. Recuerda: no estás solo en esto. Aquí estaremos contigo en cada paso. 🧡',
    btn: 'Comenzar',
    isLast: true,
    videoAsset: './assets/kun/kun-tutorial-final.mp4?v=8',
  },
];

// ── Dark overlay with rectangular cutout ─────────────────────────────────────
function CutoutOverlay({ rect, opacity = 0.6, borderRadius = 18 }) {
  const { x, y, w, h } = rect;
  const bg = `rgba(0,0,0,${opacity})`;
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
        borderRadius,
        boxShadow: `0 0 0 2.5px ${KUN.brick}, 0 0 0 6px rgba(240,116,62,0.22), 0 0 28px rgba(240,116,62,0.30)`,
        pointerEvents: 'none',
      }}/>
    </>
  );
}

function FullTourOverlay() {
  return (
    <div style={{
      position:'absolute',
      inset:0,
      background:'rgba(0,0,0,0.6)',
      pointerEvents:'all',
    }}/>
  );
}

function measureHighlightRect(selector, padding = 12) {
  if (!selector) return null;
  const device = document.querySelector('.kun-device') || document.documentElement;
  const element = document.querySelector(selector);
  if (!element) return null;

  const deviceRect = device.getBoundingClientRect();
  const elementRect = element.getBoundingClientRect();
  const maxWidth = deviceRect.width;
  const maxHeight = deviceRect.height;
  const left = Math.max(0, elementRect.left - deviceRect.left - padding);
  const top = Math.max(0, elementRect.top - deviceRect.top - padding);
  const right = Math.min(maxWidth, elementRect.right - deviceRect.left + padding);
  const bottom = Math.min(maxHeight, elementRect.bottom - deviceRect.top + padding);
  if (right <= left || bottom <= top) return null;
  return {
    x: Math.round(left),
    y: Math.round(top),
    w: Math.round(right - left),
    h: Math.round(bottom - top),
    borderRadius: 12,
  };
}

// Tab that should be visible in the background for each step.
// Top-bar steps without a tabIndex use Inicio as a stable background for now.
const STEP_TAB = STEPS.map(step => (
  step.type !== 'full'
    ? (
        step.highlightElement?.includes('bottom-nav-ucin')
          ? 'ucin'
          : (step.isInsideUCIN ? 'ucin' : (TAB_IDS[step.tabIndex] || 'home'))
      )
    : null
));

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

function CoachmarkBubble({
  rect,
  bubblePosition = 'bottom',
  text,
  buttonLabel = 'Siguiente',
  onBack,
  onNext,
  showBack = true,
}) {
  const bubbleRef = React.useRef(null);
  const [bubbleHeight, setBubbleHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    if (!bubbleRef.current) return;
    const nextHeight = Math.ceil(bubbleRef.current.getBoundingClientRect().height);
    if (nextHeight !== bubbleHeight) setBubbleHeight(nextHeight);
  }, [text, buttonLabel, showBack, bubbleHeight]);

  if (!rect) return null;

  const device = document.querySelector('.kun-device');
  const deviceWidth = device?.clientWidth || 390;
  const deviceHeight = device?.clientHeight || 844;
  const margin = 14;
  const gap = 12;
  const width = Math.min(318, deviceWidth - margin * 2);
  const measuredHeight = bubbleHeight || 130;
  const spaceAbove = rect.y - margin;
  const spaceBelow = deviceHeight - (rect.y + rect.h) - margin;
  const preferredBelow = bubblePosition !== 'top';
  const canFitBelow = spaceBelow >= measuredHeight + gap;
  const canFitAbove = spaceAbove >= measuredHeight + gap;
  const showBelow = preferredBelow
    ? (canFitBelow || !canFitAbove)
    : (!canFitAbove && canFitBelow);
  const idealLeft = rect.x + rect.w / 2 - width / 2;
  const left = Math.max(margin, Math.min(deviceWidth - width - margin, idealLeft));
  const top = showBelow
    ? Math.min(deviceHeight - measuredHeight - margin, rect.y + rect.h + gap)
    : Math.max(margin, rect.y - measuredHeight - gap);
  const arrowCenter = Math.max(18, Math.min(width - 18, rect.x + rect.w / 2 - left));

  return (
    <div
      ref={bubbleRef}
      style={{
        position: 'absolute',
        left,
        top,
        width,
        boxSizing: 'border-box',
        background: '#fff',
        border: `1px solid ${KUN.hair}`,
        borderRadius: 16,
        padding: '14px 15px 12px',
        boxShadow: '0 12px 30px rgba(42,35,32,0.18)',
        zIndex: 30,
      }}
    >
      <div style={{
        position: 'absolute',
        left: arrowCenter - 7,
        [showBelow ? 'top' : 'bottom']: -7,
        width: 14,
        height: 14,
        background: '#fff',
        borderLeft: showBelow ? `1px solid ${KUN.hair}` : 'none',
        borderTop: showBelow ? `1px solid ${KUN.hair}` : 'none',
        borderRight: showBelow ? 'none' : `1px solid ${KUN.hair}`,
        borderBottom: showBelow ? 'none' : `1px solid ${KUN.hair}`,
        transform: 'rotate(45deg)',
      }}/>

      <div style={{
        position: 'relative',
        fontFamily: T_FB,
        fontSize: 13,
        fontWeight: 400,
        color: KUN.ink,
        lineHeight: 1.5,
      }}>
        {text}
      </div>

      <div style={{
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: showBack ? '82px 1fr' : '1fr',
        gap: 8,
        marginTop: 12,
      }}>
        {showBack && (
          <button onClick={onBack} style={{
            height: 36,
            border: `1px solid ${KUN.hair}`,
            borderRadius: 999,
            background: '#fff',
            color: KUN.inkSoft,
            fontFamily: T_FT,
            fontSize: 12,
            fontWeight: 700,
            cursor: 'pointer',
          }}>
            Atrás
          </button>
        )}
        <button onClick={onNext} style={{
          height: 36,
          border: 'none',
          borderRadius: 999,
          background: KUN.brick,
          color: '#fff',
          fontFamily: T_FT,
          fontSize: 12,
          fontWeight: 700,
          cursor: 'pointer',
        }}>
          {buttonLabel}
        </button>
      </div>
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
  const [spotlightRect, setSpotlightRect] = React.useState(null);
  const current = STEPS[step];
  const isLast = step === STEPS.length - 1;

  React.useEffect(() => {
    const tabId = STEP_TAB[step];
    if (onStepChange) onStepChange(tabId, current, step);

    if (current.type !== 'full') {
      const id = setTimeout(() => {
        const r = measureTabRect(tabId || 'home');
        setTabRect(r);
      }, 60);
      return () => clearTimeout(id);
    } else {
      setTabRect(null);
    }
  }, [step]);

  React.useEffect(() => {
    if (current.type === 'full' || !current.highlightElement) {
      setSpotlightRect(null);
      return undefined;
    }

    let cancelled = false;
    let frameId = null;
    const timers = [];

    const recalculate = () => {
      if (cancelled) return;
      if (frameId) cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        if (cancelled) return;
        setSpotlightRect(measureHighlightRect(
          current.highlightElement,
          current.highlightPadding ?? 12
        ));
      });
    };

    const revealAndMeasure = () => {
      const element = document.querySelector(current.highlightElement);
      if (!element) {
        setSpotlightRect(null);
        return;
      }
      element.scrollIntoView({ behavior:'smooth', block:'center', inline:'nearest' });
      recalculate();
      timers.push(setTimeout(recalculate, 180));
      timers.push(setTimeout(recalculate, 420));
    };

    timers.push(setTimeout(revealAndMeasure, 100));
    window.addEventListener('resize', recalculate);
    window.addEventListener('scroll', recalculate, true);

    return () => {
      cancelled = true;
      if (frameId) cancelAnimationFrame(frameId);
      timers.forEach(clearTimeout);
      window.removeEventListener('resize', recalculate);
      window.removeEventListener('scroll', recalculate, true);
    };
  }, [step, current.highlightElement, current.highlightPadding]);

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
      <div
        data-tour-step={step + 1}
        data-tour-type={current.type}
        data-tour-target=""
        style={{
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

  return (
    <div
      data-tour-step={step + 1}
      data-tour-type={current.type}
      data-tour-target={current.highlightElement || ''}
      style={{ position:'absolute', inset:0, zIndex: 400, fontFamily: T_FB }}
    >
      {/* Full-screen click blocker (prevents interaction with app behind) */}
      <div style={{ position:'absolute', inset:0, zIndex: 0 }}/>

      {/* Spotlight: a four-panel overlay around the selected feature. */}
      {current.highlightElement && spotlightRect
        ? <CutoutOverlay
            rect={spotlightRect}
            opacity={0.6}
            borderRadius={12}
          />
        : <FullTourOverlay />}

      <div style={{ position:'absolute', top: 68, left:0, right:0, zIndex: 24, pointerEvents:'none' }}>
        <Dots />
      </div>

      {current.type === 'nav' && current.mascotVariant && (
        <div style={{
          position:'absolute',
          left:'50%',
          top: current.mascotPosition === 'heroTop' ? 104 : 112,
          transform:'translateX(-50%)',
          width: current.mascotSize || 250,
          height: current.mascotSize || 250,
          zIndex: 18,
          pointerEvents:'none',
        }}>
          <TourMascot
            variant={current.mascotVariant}
            size={current.mascotSize || 250}
            flipX={current.mascotFlipX}
          />
        </div>
      )}

      {spotlightRect && (
        <CoachmarkBubble
          rect={spotlightRect}
          bubblePosition={current.bubblePosition}
          text={current.bubble}
          buttonLabel={current.btn}
          showBack={step > 0}
          onBack={back}
          onNext={advance}
        />
      )}
    </div>
  );
}

window.ScreenTour = ScreenTour;


