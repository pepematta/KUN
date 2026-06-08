// Shared palette, icons, frame chrome and bottom nav for all KUN screens.
// Loaded by index.html with <script type="text/babel" src="edu-shared.jsx">.
//
// Updated to KUN Design System v2:
// - Brick (#F0743E) as primary accent
// - Rosehip (#F6C3AE), Sun (#FDD848), Apple (#AAD59E), Clear (#9AB2D4), Viola (#CDBCDB) as supporting palette
// - Quicksand for titles, Poppins for body
// - Pill-shaped subtabs with individual rounded backgrounds (active Brick, inactive cream with soft border)

const FONT_T = 'Quicksand, sans-serif';
const FONT_B = 'Poppins, sans-serif';

const KUN = {
  // ── Surfaces ─────────────────────────────────────────
  bg:        '#FAF6F1', // cream — main surface
  card:      '#FFFFFF', // paper
  cardSoft:  '#F2EBE0', // soft cream for nested surfaces
  cream:     '#FAF6F1',
  paper:     '#FFFFFF',

  // ── Ink (text) ───────────────────────────────────────
  ink:       '#2A2320',
  inkSoft:   '#5E544E',
  inkMuted:  '#8B827C',
  inkFaint:  '#C5BCB1',
  ink2:      '#5E544E',
  ink3:      '#8B827C',

  // ── DS palette ───────────────────────────────────────
  brick:     '#F0743E',
  rosehip:   '#F6C3AE',
  sun:       '#FDD848',
  sunSoft:   '#FFF5DC',
  apple:     '#AAD59E',
  clear:     '#9AB2D4',
  viola:     '#CDBCDB',

  // ── Legacy aliases (kept for back-compat across screens) ─
  accent:     '#F0743E', // → brick
  accentSoft: '#F6C3AE', // → rosehip
  accentDeep: '#C95A22', // deeper brick for shadows / hover
  sage:       '#AAD59E', // → apple
  sageSoft:   '#E4ECE4',

  // ── Lines ────────────────────────────────────────────
  divider:   'rgba(42,35,32,0.06)',
  hair:      'rgba(42,35,32,0.10)',
  hairSoft:  'rgba(42,35,32,0.06)',
  trackSoft: '#E8DFD2',

  // ── Fonts (exposed for screens) ──────────────────────
  fontT: FONT_T,
  fontB: FONT_B,
};

// brand mark — kangaroo mother + joey
function KunMark({ size = 28, color = KUN.accent }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <path
        d="M10 30 C10 22, 13 17, 17 15 C16 13, 16.5 10.5, 18.5 9.5 C20.5 8.5, 23 9.5, 23.5 11.5 C24 13, 23.5 14.5, 22.5 15.5 C25.5 16.5, 28 19, 29 22.5 C29.5 24, 29.5 26, 29 27.5 C28.5 29, 27.5 30.5, 26 31"
        stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"
      />
      <path d="M10 30 C 8 30.5, 7 31.5, 7.5 33" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M21 10.5 C 21.3 9, 21.8 8, 22.5 7.5" stroke={color} strokeWidth="1.7" strokeLinecap="round"/>
      <path
        d="M14 24 C 14 22, 16 21, 18 21 C 20 21, 22 22, 22 24 C 22 26.5, 20 28, 18 28 C 16 28, 14 26.5, 14 24 Z"
        fill={KUN.accentSoft} stroke={color} strokeWidth="1.5"
      />
      <circle cx="17.2" cy="23.2" r="0.9" fill={color} />
    </svg>
  );
}

// icon set
const KIcon = {
  gear: (c = KUN.ink) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke={c} strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
        stroke={c} strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bell: (c = KUN.ink) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M6 9.5C6 6.5 8.5 4 12 4C15.5 4 18 6.5 18 9.5V13.5L19.5 16.5H4.5L6 13.5V9.5Z"
        stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 19C10.4 20 11.1 20.5 12 20.5C12.9 20.5 13.6 20 14 19" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  home: (c, filled) => (
    <svg width="24" height="24" viewBox="0 0 26 26" fill={filled ? c : 'none'}>
      <path d="M4 11.5L13 4.5L22 11.5V20.5C22 21.3 21.3 22 20.5 22H5.5C4.7 22 4 21.3 4 20.5V11.5Z"
        stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M10.5 22V15H15.5V22" stroke={filled ? '#fff' : c} strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  book: (c, filled) => (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      {/* mortarboard / graduation cap */}
      <path d="M13 5L3 10L13 15L23 10L13 5Z" stroke={c} strokeWidth="1.8" strokeLinejoin="round" fill={filled ? c : 'none'}/>
      <path d="M7 12.5V18C7 18 9.5 20.5 13 20.5C16.5 20.5 19 18 19 18V12.5" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M23 10V15.5" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="23" cy="16.5" r="1" fill={c}/>
    </svg>
  ),
  heart: (c) => (
    <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
      <path d="M13 21S4 15.5 4 9.8C4 7.1 6 5 8.7 5C10.5 5 12 6 13 7.5C14 6 15.5 5 17.3 5C20 5 22 7.1 22 9.8C22 15.5 13 21 13 21Z"
        stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  people: (c) => (
    <svg width="26" height="24" viewBox="0 0 28 26" fill="none">
      <circle cx="9" cy="9" r="3.2" stroke={c} strokeWidth="1.8"/>
      <circle cx="19" cy="9.5" r="2.8" stroke={c} strokeWidth="1.8"/>
      <path d="M3 20C3 17 5.7 14.8 9 14.8C12.3 14.8 15 17 15 20" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M16 20C16 17.5 18 15.5 21 15.5C23.5 15.5 25 17 25 19" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  check: (c = '#fff') => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8.2L6.5 11L12.5 4.8" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  play: (c = '#fff') => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill={c}>
      <path d="M4 2.5L11 7L4 11.5V2.5Z"/>
    </svg>
  ),
  search: (c = KUN.inkMuted) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6" stroke={c} strokeWidth="1.8"/>
      <path d="M13.5 13.5L17 17" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  chevDown: (c = KUN.inkSoft) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5L7 9L11 5" stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chevRight: (c = KUN.inkSoft) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M5 3L9 7L5 11" stroke={c} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  spark: (c = '#fff') => (
    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
      <path d="M7 1.5L8 5.5L12 6.5L8 7.5L7 11.5L6 7.5L2 6.5L6 5.5L7 1.5Z" fill={c}/>
    </svg>
  ),
  arrow: (c = KUN.accent) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  // category icons — soft glyphs
  cat: {
    breast: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M6 10C6 7 9 5 12 5C15 5 18 7 18 10C18 12 16.5 13 15 13.5C15.5 16 14 19 12 19C10 19 8.5 16 9 13.5C7.5 13 6 12 6 10Z" stroke={c} strokeWidth="1.7" strokeLinejoin="round"/>
        <circle cx="12" cy="10" r="1.2" fill={c}/>
      </svg>
    ),
    ecmo: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 12C5 8 8 5 12 5C16 5 19 8 19 12" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M19 12C19 14 17 15.5 15 15.5C13 15.5 12 14 12 12.5C12 11.2 13 10 14.5 10C15.7 10 16.5 10.8 16.5 11.8" stroke={c} strokeWidth="1.7" strokeLinecap="round" fill="none"/>
        <circle cx="5" cy="12" r="1.6" fill={c}/>
      </svg>
    ),
    prem: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M8 7C8 5 10 4 12 4C14 4 16 5 16 7" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
        <ellipse cx="12" cy="14" rx="6" ry="6.5" stroke={c} strokeWidth="1.7"/>
        <path d="M9 14C9.5 15.5 10.5 16 12 16C13.5 16 14.5 15.5 15 14" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    kang: (c) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M7 18 C 7 13, 9 10, 12 9 C 11.3 7.5, 12 6, 13.5 5.7 C 15 5.5, 16 7, 15.5 8.3 C 17 9, 18 11, 18 13" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <ellipse cx="12" cy="14.5" rx="3" ry="2.4" fill={c} opacity="0.25" stroke={c} strokeWidth="1.5"/>
      </svg>
    ),
  },
};

// ─── DS Button helper ───────────────────────────────────────────
// Exported so other screens can use the same pill style as the DS spec.
function KBtn({ kind = 'primary', children, disabled = false, icon, full = false, onClick, style = {} }) {
  const palettes = {
    primary:   { background: KUN.brick, color: '#fff', border: 'none' },
    secondary: { background: 'transparent', color: KUN.ink, border: `1.5px solid ${KUN.ink}` },
    ghost:     { background: 'transparent', color: KUN.brick, border: 'none' },
    disabled:  { background: 'rgba(42,35,32,0.08)', color: KUN.inkMuted, border: 'none' },
  };
  const palette = disabled ? palettes.disabled : palettes[kind];
  return (
    <button onClick={disabled ? undefined : onClick} disabled={disabled} style={{
      ...palette, padding: '14px 22px', borderRadius: 999, height: 50,
      fontFamily: FONT_T, fontWeight: 700, fontSize: 15,
      display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: full ? '100%' : 'auto', justifyContent: 'center',
      ...style,
    }}>
      {children}
      {icon}
    </button>
  );
}

// ─── DS Badge helper ─────────────────────────────────────────────
function KBadge({ children, bg = KUN.sun, fg = KUN.ink, dot, outline }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 11px', borderRadius: 999,
      background: bg, color: fg,
      border: outline ? `1px solid ${outline}` : 'none',
      fontFamily: FONT_T, fontWeight: 700, fontSize: 11.5,
      letterSpacing: '0.3px',
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: '50%', background: dot }}/>}
      {children}
    </span>
  );
}

// status bar (light)
function KStatusBar() {
  return (
    <div className="kun-status-bar" style={{
      display:'flex', justifyContent:'space-between', alignItems:'center',
      padding:'18px 32px 8px', position:'relative', zIndex: 10,
      fontFamily: FONT_T,
    }}>
      <span style={{ fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>9:41</span>
      <div style={{ display:'flex', gap: 6, alignItems:'center' }}>
        <svg width="18" height="11" viewBox="0 0 18 11"><rect x="0" y="6.5" width="3" height="4" rx=".7" fill={KUN.ink}/><rect x="4.5" y="4.5" width="3" height="6" rx=".7" fill={KUN.ink}/><rect x="9" y="2.5" width="3" height="8" rx=".7" fill={KUN.ink}/><rect x="13.5" y="0" width="3" height="10.5" rx=".7" fill={KUN.ink}/></svg>
        <svg width="16" height="11" viewBox="0 0 16 11"><path d="M8 3C9.8 3 11.5 3.7 12.7 4.9L13.6 4C12.1 2.6 10.1 1.7 8 1.7C5.9 1.7 3.9 2.6 2.4 4L3.3 4.9C4.5 3.7 6.2 3 8 3Z" fill={KUN.ink}/><circle cx="8" cy="9" r="1.3" fill={KUN.ink}/></svg>
        <svg width="26" height="12" viewBox="0 0 26 12"><rect x="0.5" y="0.5" width="22" height="11" rx="3" stroke={KUN.ink} strokeOpacity=".4" fill="none"/><rect x="2" y="2" width="18" height="8" rx="1.5" fill={KUN.ink}/></svg>
      </div>
    </div>
  );
}

// generic top bar with title, bell, and settings
function KTopBar({ title, onBell, hasNotif, onSettings }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'space-between',
      padding:'8px 24px 6px',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
        <img src="logo.png" alt="KUN" style={{
          width: 36, height: 36,
          objectFit: 'contain',
        }} />
        <span style={{
          fontFamily: FONT_T, fontSize: 22, fontWeight: 700,
          color: KUN.ink, letterSpacing: 1.2,
        }}>KUN</span>
      </div>
      <div style={{ display:'flex', gap: 8, alignItems:'center' }}>
        {onSettings && (
          <button onClick={onSettings} style={{
            width: 40, height: 40, borderRadius: 20, border: `1px solid ${KUN.hair}`,
            background: '#fff',
            display:'flex', alignItems:'center', justifyContent:'center',
            cursor:'pointer',
          }}>
            {KIcon.gear(KUN.ink)}
          </button>
        )}
        <button onClick={onBell} style={{
          width: 40, height: 40, borderRadius: 20, border: `1px solid ${KUN.hair}`,
          background: '#fff',
          display:'flex', alignItems:'center', justifyContent:'center',
          cursor:'pointer', position:'relative',
        }}>
          {KIcon.bell(KUN.ink)}
          {hasNotif && (
            <span style={{
              position:'absolute', top: 8, right: 9,
              width: 8, height: 8, borderRadius: 4,
              background: KUN.brick, border:'1.5px solid #fff',
            }}/>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Subtabs ──────────────────────────────────────────────────
// DS spec: cada pestaña con fondo redondeado individual, activa en Brick (#F0743E) con texto blanco,
// inactivas con fondo crema y borde suave.
function KSubTabs({ active, onChange }) {
  const childLabel = (() => {
    try {
      const auth = JSON.parse(localStorage.getItem('kun_auth_v1') || 'null');
      const babies = JSON.parse(localStorage.getItem('kun_staff_babies_v1') || '[]');
      const linked = babies.find(b => b.occupied && b.rut === auth?.rut);
      return linked?.sex === 'f' ? 'hija' : 'hijo';
    } catch {
      return 'hijo';
    }
  })();
  const tabs = [
    { id:'camino', label:'Cuidados básicos' },
    { id:'perso',  label:`Especial para mi ${childLabel}` },
    { id:'biblio', label:'Aprender más' },
  ];
  return (
    <div style={{
      margin: '4px 20px 8px',
      display:'flex', gap: 8,
    }}>
      {tabs.map(t => {
        const isA = t.id === active;
        return (
          <div key={t.id}
            onClick={() => onChange && onChange(t.id)}
            style={{
              flex: 1, textAlign:'center', cursor:'pointer',
              padding: '10px 6px', borderRadius: 10,
              background: isA ? KUN.brick : KUN.cardSoft,
              color: isA ? '#fff' : KUN.inkSoft,
              fontFamily: FONT_T, fontSize: 12.5, fontWeight: 700, letterSpacing: 0.1,
              lineHeight: 1.15, minHeight: 30,
              display:'flex', alignItems:'center', justifyContent:'center',
              border: 'none',
              transition: 'all .2s',
            }}>{t.label}</div>
        );
      })}
    </div>
  );
}

// Generic version of subtabs (used by other screens like Vínculo)
function KSubTabsGeneric({ tabs, active, onChange }) {
  return (
    <div style={{
      margin: '4px 20px 8px',
      display:'flex', gap: 8,
    }}>
      {tabs.map(t => {
        const isA = t.id === active;
        return (
          <div key={t.id}
            onClick={() => onChange && onChange(t.id)}
            style={{
              flex: 1, textAlign:'center', cursor:'pointer',
              padding: '10px 6px', borderRadius: 10,
              background: isA ? KUN.brick : KUN.cardSoft,
              color: isA ? '#fff' : KUN.inkSoft,
              fontFamily: FONT_T, fontSize: 12.5, fontWeight: 700, letterSpacing: 0.1,
              border: 'none',
              transition: 'all .2s',
            }}>{t.label}</div>
        );
      })}
    </div>
  );
}

// bottom nav
function KBottomNav({ active = 'edu', onChange }) {
  const tabs = [
    { id: 'home',  label: 'Inicio',    icon: KIcon.home },
    { id: 'bond',  label: 'Vínculo', icon: KIcon.heart },
    { id: 'edu',   label: 'Educación', icon: KIcon.book },
    { id: 'comm',  label: 'Comunidad', icon: KIcon.people },
  ];
  return (
    <div style={{
      position:'absolute', bottom: 0, left: 0, right: 0,
      paddingBottom: 28, paddingTop: 14,
      background: 'linear-gradient(180deg, rgba(250,246,241,0) 0%, #FAF6F1 35%)',
    }}>
      <div style={{
        margin: '0 16px',
        background: '#fff',
        borderRadius: 28,
        padding: '10px 8px',
        display:'flex', justifyContent:'space-around', alignItems:'center',
        border: `1px solid ${KUN.hair}`,
        boxShadow: '0 16px 32px rgba(42,35,32,0.06)',
      }}>
        {tabs.map(t => {
          const isActive = t.id === active;
          const color = isActive ? KUN.brick : KUN.inkSoft;
          return (
            <div key={t.id}
              data-nav-tab={t.id}
              onClick={() => onChange && onChange(t.id)}
              style={{
                display:'flex', flexDirection:'column', alignItems:'center', gap: 4,
                padding: '6px 12px', borderRadius: 18,
                minWidth: 60, position:'relative',
                cursor:'pointer',
                background: isActive ? KUN.cream : 'transparent',
              }}>
              <div style={{ position:'relative', zIndex: 1 }}>
                {t.icon(color, false)}
              </div>
              <div style={{
                position:'relative', zIndex: 1,
                fontFamily: FONT_T,
                fontSize: 11, fontWeight: isActive ? 700 : 500,
                color, letterSpacing: 0.1,
              }}>{t.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function KHomeIndicator() {
  return (
    <div style={{
      position:'absolute', bottom: 8, left: 0, right: 0,
      display:'flex', justifyContent:'center', pointerEvents:'none', zIndex: 100,
    }}>
      <div style={{ width: 134, height: 5, borderRadius: 3, background:'rgba(42,35,32,0.28)' }}/>
    </div>
  );
}

// device frame wrapper — 390x844 with island, status, content area, nav, indicator
function KDevice({ children, label }) {
  return (
    <div data-screen-label={label} style={{
      width: 390, height: 844,
      background: KUN.bg,
      borderRadius: 54,
      position:'relative', overflow:'hidden',
      boxShadow: '0 40px 80px rgba(42,35,32,0.18), 0 0 0 1px rgba(42,35,32,0.08)',
      fontFamily: FONT_B,
      color: KUN.ink,
    }}>
      <div style={{
        position:'absolute', top: 11, left:'50%', transform:'translateX(-50%)',
        width: 120, height: 34, borderRadius: 22, background:'#000', zIndex: 50,
      }}/>
      <KStatusBar />
      <div style={{
        height:'calc(100% - 50px)', overflow:'hidden',
        display:'flex', flexDirection:'column',
      }}>
        {children}
      </div>
      <KBottomNav active="edu" />
      <KHomeIndicator />
    </div>
  );
}

Object.assign(window, {
  KUN, KIcon, KunMark, KStatusBar, KTopBar, KSubTabs, KSubTabsGeneric,
  KBottomNav, KHomeIndicator, KDevice, KBtn, KBadge,
  KFONT_T: FONT_T, KFONT_B: FONT_B,
});
