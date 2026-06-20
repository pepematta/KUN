// Comunidad section — foro de preguntas + experiencias entre familias.
// Exposes: ScreenComunidad()

// ── Avatar icons (personalized shapes) ──────────────────
const AVATAR_ICONS = {
  flower: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="8.5" r="4" fill={c}/>
      <circle cx="8.5" cy="14" r="4" fill={c}/>
      <circle cx="19.5" cy="14" r="4" fill={c}/>
      <circle cx="10.5" cy="20" r="4" fill={c}/>
      <circle cx="17.5" cy="20" r="4" fill={c}/>
      <circle cx="14" cy="15" r="3" fill="rgba(255,255,255,.55)"/>
    </svg>
  ),
  pebble: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="13" cy="14" rx="8" ry="10" transform="rotate(24 13 14)" fill={c}/>
      <circle cx="18.5" cy="9.5" r="3.2" fill="rgba(255,255,255,.42)"/>
    </svg>
  ),
  bubble: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="11" cy="12" r="6" fill={c}/>
      <circle cx="17.5" cy="17" r="5.5" fill={c}/>
      <circle cx="17" cy="10" r="3.5" fill="rgba(255,255,255,.45)"/>
    </svg>
  ),
  moon: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="15" cy="14" r="9" fill={c}/>
      <circle cx="19" cy="10" r="9" fill="rgba(255,255,255,.55)"/>
    </svg>
  ),
  arch: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M6 22V13C6 8.6 9.6 5 14 5C18.4 5 22 8.6 22 13V22H6Z" fill={c}/>
      <circle cx="14" cy="15" r="4" fill="rgba(255,255,255,.5)"/>
    </svg>
  ),
  dots: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="9" cy="10" r="4.2" fill={c}/>
      <circle cx="18" cy="10" r="4.2" fill={c}/>
      <circle cx="9" cy="19" r="4.2" fill={c}/>
      <circle cx="18" cy="19" r="4.2" fill={c}/>
    </svg>
  ),
  leaf: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4C14 4 18 8 18 15C18 19.4 16.1 23 14 24C11.9 23 10 19.4 10 15C10 8 14 4 14 4Z" fill={c}/>
      <path d="M12 12C12.5 13 13 14 14 14.5C15 14 15.5 13 16 12" stroke={c} strokeWidth="0.8" fill="none"/>
    </svg>
  ),
  leafPair: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <ellipse cx="11" cy="14" rx="5" ry="9" transform="rotate(-28 11 14)" fill={c}/>
      <ellipse cx="18" cy="15" rx="4.5" ry="8" transform="rotate(32 18 15)" fill={c}/>
      <circle cx="14" cy="20" r="2" fill="rgba(255,255,255,.48)"/>
    </svg>
  ),
  star: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4L16.6 11.2H24L18.2 15.8L20.6 23L14 18.8L7.4 23L9.8 15.8L4 11.2H11.4L14 4Z" fill={c}/>
    </svg>
  ),
  cloud: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="16" r="5" fill={c}/>
      <circle cx="15" cy="12" r="6" fill={c}/>
      <circle cx="20" cy="16" r="4.8" fill={c}/>
      <rect x="8" y="15" width="14" height="7" rx="3.5" fill={c}/>
      <circle cx="18" cy="10" r="2.2" fill="rgba(255,255,255,.45)"/>
    </svg>
  ),
  drop: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 4C14 4 10 10 10 15C10 18.3 11.8 21 14 21C16.2 21 18 18.3 18 15C18 10 14 4 14 4Z" fill={c}/>
    </svg>
  ),
  heart: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 23C4 17 2 13 2 10C2 7.2 4.2 5 6.5 5C8 5 9.5 6 10.5 7.5C11.5 6 13 5 14.5 5C16.8 5 19 7.2 19 10C19 13 17 17 14 23Z" fill={c}/>
    </svg>
  ),
  sun: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="5" fill={c}/>
      <line x1="14" y1="2" x2="14" y2="6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="22" x2="14" y2="26" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="2" y1="14" x2="6" y2="14" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="22" y1="14" x2="26" y2="14" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="5.5" y1="5.5" x2="8.5" y2="8.5" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="19.5" y1="19.5" x2="22.5" y2="22.5" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="22.5" y1="5.5" x2="19.5" y2="8.5" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="8.5" y1="19.5" x2="5.5" y2="22.5" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  clover: (c) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="10" cy="9" r="3.5" fill={c}/>
      <circle cx="18" cy="9" r="3.5" fill={c}/>
      <circle cx="10" cy="17" r="3.5" fill={c}/>
      <circle cx="14" cy="19" r="1.5" fill={c}/>
    </svg>
  ),
};

const AVATAR_PRESETS = [
  { iconType: 'flower', color: '#F0743E', bgColor: '#FFF5DC' },
  { iconType: 'star', color: '#9C7CB8', bgColor: '#EFE8F5' },
  { iconType: 'cloud', color: '#7AA8B8', bgColor: '#E9EEF7' },
  { iconType: 'leaf', color: '#6FA85F', bgColor: '#EAF2E7' },
  { iconType: 'leafPair', color: '#8CA66E', bgColor: '#FFF5DC' },
  { iconType: 'sun', color: '#FDD848', bgColor: '#FFF5DC' },
];

function avatarPresetFor(name = '') {
  const key = String(name || 'familia');
  const sum = Array.from(key).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return AVATAR_PRESETS[sum % AVATAR_PRESETS.length];
}

const COM_ICONS = {
  back: (c) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 4L6 10L12 16" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  plus: (c) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 4V18M4 11H18" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  send: (c) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M3 17L17 10L3 3L4.5 10L3 17Z" fill={c} stroke={c} strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  ),
  image: (c) => (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <rect x="3" y="4" width="16" height="14" rx="2.5" stroke={c} strokeWidth="1.7"/>
      <circle cx="8" cy="9" r="1.5" stroke={c} strokeWidth="1.5"/>
      <path d="M3 14.5L8 11L13 14L17 11L19 12.5" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  camera: (c) => (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <path d="M3 8C3 7 4 6 5 6H7L8.2 4.4C8.4 4.15 8.7 4 9 4H13C13.3 4 13.6 4.15 13.8 4.4L15 6H17C18 6 19 7 19 8V16C19 17 18 18 17 18H5C4 18 3 17 3 16V8Z"
        stroke={c} strokeWidth="1.7" strokeLinejoin="round"/>
      <circle cx="11" cy="12" r="3.2" stroke={c} strokeWidth="1.7"/>
    </svg>
  ),
  attach: (c) => (
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
      <path d="M14 7L8 13C7 14 7 15.5 8 16.5C9 17.5 10.5 17.5 11.5 16.5L17 11C18.5 9.5 18.5 7 17 5.5C15.5 4 13 4 11.5 5.5L5.5 11.5C3.5 13.5 3.5 16.5 5.5 18.5C7.5 20.5 10.5 20.5 12.5 18.5"
        stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  heart: (c, filled) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill={filled ? c : 'none'}>
      <path d="M10 17S3 12.5 3 7.8C3 5.7 4.5 4 6.5 4C7.9 4 9 4.8 10 6C11 4.8 12.1 4 13.5 4C15.5 4 17 5.7 17 7.8C17 12.5 10 17 10 17Z"
        stroke={c} strokeWidth="1.7" strokeLinejoin="round"/>
    </svg>
  ),
  share: (c) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="6" cy="10" r="2.2" stroke={c} strokeWidth="1.7"/>
      <circle cx="14.5" cy="5" r="2.2" stroke={c} strokeWidth="1.7"/>
      <circle cx="14.5" cy="15" r="2.2" stroke={c} strokeWidth="1.7"/>
      <path d="M8 9L13 6M8 11L13 14" stroke={c} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  ),
  reply: (c) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M3 12C3 8 6 5 10 5H16M16 5L13 2.5M16 5L13 7.5" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12V15C3 16 4 17 5 17H13" stroke={c} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  search: (c = KUN.inkMuted) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="6" stroke={c} strokeWidth="1.8"/>
      <path d="M13.5 13.5L17 17" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  capsule: (c) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 5C5 4.4 5.4 4 6 4H12V21H6C5.4 21 5 20.6 5 20V5Z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M21 5C21 4.4 20.6 4 20 4H14V21H20C20.6 21 21 20.6 21 20V5Z" stroke={c} strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  dots: (c) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="4" r="1.5" fill={c}/>
      <circle cx="10" cy="10" r="1.5" fill={c}/>
      <circle cx="10" cy="16" r="1.5" fill={c}/>
    </svg>
  ),
};

// ── Avatar reutilizable (with personalized icons) ──────
function ComAvatar({ name, color, iconType, bgColor, size = 44 }) {
  const preset = iconType ? {} : avatarPresetFor(name);
  const finalIcon = iconType || preset.iconType;
  const finalColor = color || preset.color;
  const finalBg = bgColor || preset.bgColor || color;
  const iconRenderer = AVATAR_ICONS[finalIcon];
  return (
    <div style={{
      width: size, height: size, borderRadius: 14,
      background: finalBg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexShrink: 0,
      overflow: 'hidden',
      border: `1px solid ${KUN.hair}`,
    }}>
      {iconRenderer && iconRenderer(finalColor)}
    </div>
  );
}

// ── DS scoped fonts ─────────────────────────────────
const COM_FT = 'Quicksand, sans-serif';
const COM_FB = 'Poppins, sans-serif';

const normalizeComSearch = (value = '') => String(value)
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '');

const cleanComTag = (value = '') => String(value)
  .trim()
  .replace(/^#+/, '')
  .replace(/\s+/g, '')
  .toLowerCase()
  .slice(0, 24);

function ComHashtagList({ tags = [] }) {
  if (!tags.length) return null;
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 12 }}>
      {tags.map(tag => (
        <span key={tag} style={{
          padding: '5px 9px', borderRadius: 999,
          background: KUN.sageSoft,
          color: KUN.inkSoft,
          fontFamily: COM_FT,
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 0,
        }}>#{tag}</span>
      ))}
    </div>
  );
}

function CommunitySearchBox({ value, onChange }) {
  return (
    <div style={{ padding: '0 20px 12px' }}>
      <div style={{
        background: '#fff', borderRadius: 18, padding: '0 14px',
        minHeight: 46, display: 'flex', alignItems: 'center', gap: 10,
        border: `1.5px solid ${KUN.hair}`,
      }}>
        {COM_ICONS.search(KUN.inkMuted)}
        <input
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Buscar por tema, palabra o hashtag..."
          style={{
            flex: 1, border: 'none', outline: 'none', background: 'transparent',
            fontFamily: COM_FB, fontSize: 13.5, color: KUN.ink, fontWeight: 400,
            minWidth: 0,
          }}
        />
      </div>
    </div>
  );
}

// ── Subtabs principales (Chat / Foro) ──────────────
function ComTopTabs({ active, onChange }) {
  const tabs = [
    { id: 'chat',      label: 'Chat' },
    { id: 'community', label: 'Foro' },
  ];
  return (
    <div style={{
      margin: '4px 20px 12px',
      display: 'flex', gap: 8,
    }}>
      {tabs.map(t => {
        const isA = t.id === active;
        return (
          <div key={t.id} onClick={() => onChange(t.id)} style={{
            flex: 1, textAlign: 'center', cursor: 'pointer',
            padding: '10px 6px', borderRadius: 999,
            background: isA ? KUN.brick : KUN.cardSoft,
            color: isA ? '#fff' : KUN.inkSoft,
            fontFamily: COM_FT, fontSize: 13, fontWeight: 700, letterSpacing: 0.1,
            border: isA ? 'none' : `1px solid ${KUN.hair}`,
            transition: 'all .2s',
          }}>{t.label}</div>
        );
      })}
    </div>
  );
}

// ── Sub-header (back + título) ──────────────────────────
function ComSubHeader({ title, subtitle, onBack, right }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '4px 20px 14px',
    }}>
      <div onClick={onBack} style={{
        width: 40, height: 40, borderRadius: '50%', background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: `1px solid ${KUN.hair}`, cursor: 'pointer',
        flexShrink: 0,
      }}>{COM_ICONS.back(KUN.ink)}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: COM_FT, fontSize: 20, fontWeight: 700, color: KUN.ink,
          letterSpacing: -0.3, lineHeight: 1.2,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{title}</div>
        {subtitle && (
          <div style={{
            fontFamily: COM_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400,
            marginTop: 2, letterSpacing: 0.1,
          }}>{subtitle}</div>
        )}
      </div>
      {right}
    </div>
  );
}

// ╔══════════════════════════════════════════════════════╗
// ║                       CHAT                            ║
// ╚══════════════════════════════════════════════════════╝

const PROFESSIONALS = [
  {
    id: 'juanita',
    name: 'Juanita',
    role: 'Enfermera / Matrona',
    color: KUN.sage,
    bgColor: '#E4ECE4',
    iconType: 'flower',
    last: 'Te mando un artículo que te podría servir',
    time: '10:32 AM',
    online: true,
  },
  {
    id: 'lucia',
    name: 'Lucía',
    role: 'Psicóloga',
    color: '#B58E5F',
    bgColor: '#F4ECDD',
    iconType: 'heart',
    last: '¿Podríamos hablar hoy día?',
    time: 'Ayer',
    online: false,
  },
];

const AVAILABLE_PROFESSIONALS = [
  { id: 'juanita', name: 'Juanita Pérez',  role: 'Enfermera / Matrona', color: KUN.sage, bgColor: '#E4ECE4', iconType: 'flower', desc: 'Turno mañana · UCIN' },
  { id: 'lucia',   name: 'Lucía Mendoza',  role: 'Psicóloga',            color: '#B58E5F', bgColor: '#F4ECDD', iconType: 'heart', desc: 'Acompañamiento familiar' },
  { id: 'rocio',   name: 'Rocío Salinas',  role: 'Nutricionista',        color: '#FDD848', bgColor: '#FFF5DC', iconType: 'sun', desc: 'Lactancia y alimentación' },
  { id: 'andres',  name: 'Andrés Carmona', role: 'Kinesiólogo',          color: '#AAD59E', bgColor: '#EBF5EE', iconType: 'leaf', desc: 'Estimulación temprana' },
];

function ChatList({ onOpenChat, onNew }) {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div style={{ paddingBottom: 100 }}>
        {/* Search */}
        <div style={{ padding: '0 20px 14px' }}>
          <div style={{
            background: '#fff', borderRadius: 16, padding: '12px 16px',
            display: 'flex', alignItems: 'center', gap: 10,
            border: `1.5px solid ${KUN.hair}`,
          }}>
            {COM_ICONS.search(KUN.inkMuted)}
            <span style={{
              fontFamily: COM_FB, fontSize: 14, color: KUN.inkMuted, fontWeight: 400,
              letterSpacing: 0.1,
            }}>Buscar conversación…</span>
          </div>
        </div>

        <div style={{
          padding: '0 28px 12px',
          fontFamily: COM_FB, fontSize: 11, fontWeight: 500,
          color: KUN.inkMuted, letterSpacing: 1, textTransform: 'uppercase',
        }}>
          Tus conversaciones
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 20px' }}>
          {PROFESSIONALS.map(p => (
            <div key={p.id} onClick={() => onOpenChat(p.id)} style={{
              background: '#fff', borderRadius: 22, padding: '14px 16px',
              display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
              border: `1px solid ${KUN.hair}`,
            }}>
              <div style={{ position: 'relative' }}>
                <ComAvatar name={p.name} color={p.color} size={48} />
                {p.online && (
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 12, height: 12, borderRadius: '50%',
                    background: KUN.apple, border: '2px solid #fff',
                  }} />
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8,
                  marginBottom: 2,
                }}>
                  <div style={{
                    fontFamily: COM_FT, fontSize: 15.5, fontWeight: 700, color: KUN.ink,
                    letterSpacing: -0.2,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>{p.name}</div>
                  <span style={{
                    fontFamily: COM_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted,
                    flexShrink: 0, letterSpacing: 0.2,
                  }}>{p.time}</span>
                </div>
                <div style={{
                  fontFamily: COM_FB, fontSize: 10.5, fontWeight: 500, color: KUN.brick,
                  letterSpacing: 0.8, marginBottom: 4, textTransform: 'uppercase',
                }}>{p.role}</div>
                <div style={{
                  fontFamily: COM_FB, fontSize: 13, color: KUN.inkSoft, fontWeight: 400,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  lineHeight: 1.4,
                }}>{p.last}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAB nueva conversación */}
      <button onClick={onNew} style={{
        position: 'absolute', bottom: 14, right: 20,
        width: 58, height: 58, borderRadius: '50%', border: 'none',
        background: KUN.brick, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 18px rgba(240,116,62,0.40)', cursor: 'pointer',
        zIndex: 5,
      }}>
        {COM_ICONS.plus('#fff')}
      </button>
    </div>
  );
}

function NewConversation({ onBack, onPick }) {
  return (
    <>
      <ComSubHeader title="Nueva conversación" subtitle="Elige con quién hablar" onBack={onBack} />
      <div style={{ padding: '0 20px' }}>
        <div style={{
          padding: '0 8px 12px',
          fontFamily: COM_FB, fontSize: 11, fontWeight: 500,
          color: KUN.inkMuted, letterSpacing: 1, textTransform: 'uppercase',
        }}>
          Profesionales disponibles
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {AVAILABLE_PROFESSIONALS.map(p => (
            <div key={p.id} onClick={() => onPick(p.id)} style={{
              background: '#fff', borderRadius: 22, padding: '14px 16px',
              display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
              border: `1px solid ${KUN.hair}`,
            }}>
              <ComAvatar name={p.name} color={p.color} size={44} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: COM_FT, fontSize: 14.5, fontWeight: 700, color: KUN.ink,
                  letterSpacing: -0.1, marginBottom: 2,
                }}>{p.name}</div>
                <div style={{
                  fontFamily: COM_FB, fontSize: 10.5, fontWeight: 500, color: KUN.brick,
                  letterSpacing: 0.8, marginBottom: 4, textTransform: 'uppercase',
                }}>{p.role}</div>
                <div style={{
                  fontFamily: COM_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400,
                }}>{p.desc}</div>
              </div>
              {KIcon.chevRight(KUN.inkFaint)}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// ── Burbujas del chat ───────────────────────────────────
const JUANITA_THREAD = [
  { from: 'them', kind: 'text', text: 'Holaa 😊 llegué al turno recién. Tu guagüita está tranquilito, durmiendo.', time: '10:18' },
  { from: 'me',   kind: 'text', text: 'Holaaa Juanita 🩵 ay qué bueno… ayer lo vi medio inquieto 😅', time: '10:21' },
  { from: 'them', kind: 'text', text: 'Sí, en la noche estuvo un poco más activo, pero ahora se reguló solito. Saturando bien 👌', time: '10:24' },
  { from: 'me',   kind: 'text', text: 'Yaa! Me quedo más tranquila 🙏🙏🙏', time: '10:27' },
  { from: 'them', kind: 'text', text: 'Te mando un artículo que te podría servir', time: '10:32' },
  { from: 'them', kind: 'capsule',
    capsule: { title: '¿Cómo usar un dispositivo de lactancia?', mins: '5 min · Lectura + audio', tag: 'Lactancia' },
    time: '10:32',
  },
  { from: 'me',   kind: 'text', text: '¡Muchas gracias!! 😊', time: '10:34' },
];

const GENERIC_THREAD = [
  { from: 'them', kind: 'text', text: 'Hola, gracias por escribirme. ¿En qué te puedo acompañar hoy?', time: '09:10' },
];

function ChatCapsuleCard({ capsule }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 18, padding: 12,
      border: `1px solid ${KUN.hair}`,
      display: 'flex', gap: 12, alignItems: 'center',
      maxWidth: 240,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 14,
        background: KUN.rosehip,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>{COM_ICONS.capsule(KUN.ink)}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: COM_FB, fontSize: 10, fontWeight: 500, color: KUN.brick,
          letterSpacing: 0.8, marginBottom: 3, textTransform: 'uppercase',
        }}>Cápsula · {capsule.tag}</div>
        <div style={{
          fontFamily: COM_FT, fontSize: 13.5, fontWeight: 700, color: KUN.ink,
          letterSpacing: -0.1, lineHeight: 1.3, marginBottom: 4,
        }}>{capsule.title}</div>
        <div style={{
          fontFamily: COM_FB, fontSize: 11, color: KUN.inkSoft, fontWeight: 400,
        }}>{capsule.mins}</div>
      </div>
    </div>
  );
}

function ChatBubble({ msg, profColor }) {
  const isMe = msg.from === 'me';
  const bg = isMe ? KUN.brick : '#fff';
  const color = isMe ? '#fff' : KUN.ink;
  return (
    <div style={{
      display: 'flex', justifyContent: isMe ? 'flex-end' : 'flex-start',
      margin: '0 20px 8px',
      gap: 8, alignItems: 'flex-end',
    }}>
      {!isMe && <ComAvatar name="J" color={profColor} size={28} />}
      <div style={{
        maxWidth: '78%',
        background: msg.kind === 'capsule' ? 'transparent' : bg,
        color,
        borderRadius: 20,
        borderTopLeftRadius: isMe ? 20 : 6,
        borderBottomRightRadius: isMe ? 6 : 20,
        padding: msg.kind === 'capsule' ? 0 : '10px 14px',
        border: msg.kind === 'capsule' ? 'none' : (isMe ? 'none' : `1px solid ${KUN.hair}`),
      }}>
        {msg.kind === 'text' && (
          <div style={{
            fontFamily: COM_FB, fontSize: 14, fontWeight: 400, lineHeight: 1.5,
            letterSpacing: 0.1,
          }}>{msg.text}</div>
        )}
        {msg.kind === 'capsule' && <ChatCapsuleCard capsule={msg.capsule} />}
        <div style={{
          fontFamily: COM_FB, fontSize: 10, fontWeight: 500,
          color: isMe ? 'rgba(255,255,255,0.75)' : KUN.inkMuted,
          marginTop: 4,
          textAlign: isMe ? 'right' : 'left',
          letterSpacing: 0.3,
          paddingLeft: msg.kind === 'capsule' ? 4 : 0,
        }}>{msg.time}</div>
      </div>
    </div>
  );
}

function ChatComposer({ onSend }) {
  const [text, setText] = React.useState('');

  const send = () => {
    if (!text.trim()) return;
    onSend && onSend(text.trim());
    setText('');
  };

  return (
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0,
      padding: '8px 16px 14px',
      background: 'linear-gradient(180deg, rgba(250,246,241,0) 0%, #FAF6F1 35%)',
    }}>
      <div style={{
        background: '#fff', borderRadius: 26,
        padding: '8px 8px 8px 16px',
        display: 'flex', alignItems: 'center', gap: 8,
        border: `1px solid ${KUN.hair}`,
      }}>
        <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
          <button style={composerBtn}>{COM_ICONS.camera(KUN.ink)}</button>
        </div>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Escribe un mensaje…"
          style={{
            flex: 1, border: 'none', outline: 'none',
            fontFamily: COM_FB, fontSize: 14, color: KUN.ink, fontWeight: 400,
            background: 'transparent',
            padding: '0 4px',
          }}
        />
        <button onClick={send} style={{
          width: 40, height: 40, borderRadius: '50%', border: 'none',
          background: text.trim() ? KUN.brick : 'rgba(42,35,32,0.08)',
          color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: text.trim() ? 'pointer' : 'default',
          transition: 'background .2s',
        }}>{COM_ICONS.send(text.trim() ? '#fff' : KUN.inkFaint)}</button>
      </div>
    </div>
  );
}

const composerBtn = {
  width: 36, height: 36, borderRadius: '50%', border: `1px solid ${KUN.hair}`,
  background: '#fff',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer',
};

function ChatThread({ profId, onBack }) {
  const prof = PROFESSIONALS.find(p => p.id === profId)
    || AVAILABLE_PROFESSIONALS.find(p => p.id === profId);
  const thread = profId === 'juanita' ? JUANITA_THREAD : GENERIC_THREAD;
  const [extraMessages, setExtraMessages] = React.useState([]);
  const scrollRef = React.useRef(null);

  const handleSend = (text) => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    setExtraMessages(prev => [...prev, { from: 'me', kind: 'text', text, time: `${hh}:${mm}` }]);
  };

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [extraMessages]);

  return (
    <div style={{
      position: 'absolute', top: 0, left: 0, right: 0, bottom: 122,
      background: KUN.bg,
      display: 'flex', flexDirection: 'column',
      zIndex: 10,
    }}>
      <div style={{ padding: '14px 20px 6px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div onClick={onBack} style={{
          width: 40, height: 40, borderRadius: '50%', background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${KUN.hair}`, cursor: 'pointer',
        }}>{COM_ICONS.back(KUN.ink)}</div>
        <ComAvatar name={prof.name} color={prof.color} size={40} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: COM_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{prof.name}</div>
          <div style={{
            fontFamily: COM_FB, fontSize: 10.5, fontWeight: 500, color: KUN.brick,
            letterSpacing: 0.8, textTransform: 'uppercase',
          }}>{prof.role}</div>
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', paddingTop: 14, paddingBottom: 90 }}>
        <div style={{
          textAlign: 'center', marginBottom: 14,
        }}>
          <span style={{
            background: KUN.cardSoft, padding: '5px 12px', borderRadius: 999,
            fontFamily: COM_FT, fontSize: 11, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 0.5,
          }}>HOY</span>
        </div>
        {thread.map((m, i) => <ChatBubble key={i} msg={m} profColor={prof.color} />)}
        {extraMessages.map((m, i) => <ChatBubble key={`new-${i}`} msg={m} profColor={prof.color} />)}
      </div>

      <ChatComposer onSend={handleSend} />
    </div>
  );
}

// ╔══════════════════════════════════════════════════════╗
// ║                    COMUNIDAD                          ║
// ╚══════════════════════════════════════════════════════╝

// ╔══════════════════════════════════════════════════════╗
// ║                    COMUNIDAD                          ║
// ╚══════════════════════════════════════════════════════╝

// ── Menú de acciones (3 puntos) ─────────────────────────
function PostActionsMenu({ isOwn, onReport, onEdit, onDelete, moderationMode }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <div onClick={() => setOpen(!open)} style={{
        cursor: 'pointer', padding: '6px 4px',
      }}>{COM_ICONS.dots(KUN.inkMuted)}</div>

      {open && (
        <div style={{
          position: 'absolute', top: 32, right: 0, zIndex: 100,
          background: '#fff', borderRadius: 12, border: `1px solid ${KUN.hair}`,
          boxShadow: '0 4px 12px rgba(42,35,32,0.12)',
          minWidth: 160,
          overflow: 'hidden',
        }}>
          {moderationMode ? (
            <div onClick={() => { onDelete && onDelete(); setOpen(false); }} style={{
              padding: '12px 16px', cursor: 'pointer',
              fontFamily: COM_FB, fontSize: 14, fontWeight: 500, color: '#D94F3D',
            }} onMouseEnter={e => e.target.style.background = KUN.cardSoft} onMouseLeave={e => e.target.style.background = '#fff'}>
              Dar de baja
            </div>
          ) : isOwn ? (
            <>
              <div onClick={() => { onEdit && onEdit(); setOpen(false); }} style={{
                padding: '12px 16px', cursor: 'pointer',
                fontFamily: COM_FB, fontSize: 14, fontWeight: 500, color: KUN.ink,
                borderBottom: `1px solid ${KUN.hair}`,
                transition: 'background .2s',
              }} onMouseEnter={e => e.target.style.background = KUN.cardSoft} onMouseLeave={e => e.target.style.background = '#fff'}>
                Editar
              </div>
              <div onClick={() => { onDelete && onDelete(); setOpen(false); }} style={{
                padding: '12px 16px', cursor: 'pointer',
                fontFamily: COM_FB, fontSize: 14, fontWeight: 500, color: '#D94F3D',
              }} onMouseEnter={e => e.target.style.background = KUN.cardSoft} onMouseLeave={e => e.target.style.background = '#fff'}>
                Eliminar
              </div>
            </>
          ) : (
            <div onClick={() => { onReport && onReport(); setOpen(false); }} style={{
              padding: '12px 16px', cursor: 'pointer',
              fontFamily: COM_FB, fontSize: 14, fontWeight: 500, color: '#D94F3D',
            }} onMouseEnter={e => e.target.style.background = KUN.cardSoft} onMouseLeave={e => e.target.style.background = '#fff'}>
              Reportar
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ── Modal de reporte ────────────────────────────────────
function ReportPostModal({ onClose, onSubmit }) {
  const [reason, setReason] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const reasons = [
    { value: 'inappropriate', label: 'Contenido inapropiado' },
    { value: 'spam', label: 'Spam' },
    { value: 'harassment', label: 'Acoso' },
    { value: 'misinformation', label: 'Desinformación' },
    { value: 'other', label: 'Otro' },
  ];

  const handleSubmit = () => {
    if (!reason) return;
    onSubmit && onSubmit(reason);
    setSubmitted(true);
    setTimeout(onClose, 1800);
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 200,
      background: 'rgba(42,35,32,0.4)',
      display: 'flex', alignItems: 'flex-end',
    }}>
      <div style={{
        width: '100%', background: KUN.bg,
        borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '14px 20px 110px',
        maxHeight: '88%', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          width: 44, height: 5, borderRadius: 3, background: KUN.inkFaint,
          margin: '0 auto 14px',
        }} />
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 14,
        }}>
          <div style={{ fontFamily: COM_FT, fontSize: 20, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3 }}>
            Reportar publicación
          </div>
          <span onClick={onClose} style={{
            fontFamily: COM_FT, fontSize: 13, fontWeight: 700, color: KUN.brick, cursor: 'pointer',
          }}>Cancelar</span>
        </div>

        {submitted ? (
          <div style={{
            flex: 1, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 12,
          }}>
            <div style={{ fontSize: 48 }}>✓</div>
            <div style={{ fontFamily: COM_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, textAlign: 'center' }}>
              Reporte enviado
            </div>
            <div style={{
              fontFamily: COM_FB, fontSize: 14, color: KUN.inkSoft, fontWeight: 400,
              textAlign: 'center', lineHeight: 1.5, maxWidth: 280,
            }}>
              Gracias por ayudarnos. Tu reporte será revisado por nuestro equipo.
            </div>
          </div>
        ) : (
          <>
            <div style={{
              flex: 1, overflow: 'auto', marginBottom: 16,
            }}>
              <div style={{
                fontFamily: COM_FB, fontSize: 12.5, color: KUN.inkMuted, fontWeight: 500,
                marginBottom: 12, letterSpacing: 0.3, textTransform: 'uppercase',
              }}>
                ¿Por qué reportas?
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {reasons.map(r => (
                  <div key={r.value} onClick={() => setReason(r.value)} style={{
                    background: reason === r.value ? KUN.accentSoft : '#fff',
                    border: `1.5px solid ${reason === r.value ? KUN.brick : KUN.hair}`,
                    borderRadius: 14, padding: '14px 16px',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', gap: 12,
                    transition: 'all .2s',
                  }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 6,
                      border: `1.5px solid ${reason === r.value ? KUN.brick : KUN.hair}`,
                      background: reason === r.value ? KUN.brick : '#fff',
                    }} />
                    <span style={{
                      fontFamily: COM_FB, fontSize: 14, fontWeight: 500,
                      color: reason === r.value ? KUN.ink : KUN.inkSoft,
                    }}>
                      {r.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={handleSubmit} style={{
              width: '100%', padding: '14px 18px', height: 50, borderRadius: 999, border: 'none',
              position: 'sticky', bottom: 82, zIndex: 5,
              background: reason ? KUN.brick : 'rgba(42,35,32,0.08)',
              color: reason ? '#fff' : KUN.inkMuted,
              fontFamily: COM_FT, fontSize: 15, fontWeight: 700, letterSpacing: -0.1,
              cursor: reason ? 'pointer' : 'default',
              transition: 'all .2s',
            }}>Enviar reporte</button>
          </>
        )}
      </div>
    </div>
  );
}

function CommunityInnerTabs({ active, onChange }) {
  const tabs = [
    { id: 'questions',   label: 'Preguntas' },
    { id: 'experiences', label: 'Experiencias' },
  ];
  return (
    <div style={{
      margin: '4px 20px 14px', display: 'flex', gap: 8,
    }}>
      {tabs.map(t => {
        const isA = t.id === active;
        return (
          <div key={t.id} onClick={() => onChange(t.id)} style={{
            cursor: 'pointer',
            padding: '10px 18px', borderRadius: 10,
            background: isA ? KUN.brick : KUN.cardSoft,
            color: isA ? '#fff' : KUN.inkSoft,
            fontFamily: COM_FT, fontSize: 13, fontWeight: 700, letterSpacing: 0.1,
            border: 'none',
            transition: 'all .2s',
          }}>{t.label}</div>
        );
      })}
    </div>
  );
}

// ── Acciones (like / share / reply) ─────────────────────
function PostActions({ likes, replies, onReply }) {
  const [liked, setLiked] = React.useState(false);
  const count = likes + (liked ? 1 : 0);
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 18,
      paddingTop: 12, marginTop: 12,
      borderTop: `1px dashed ${KUN.hair}`,
    }}>
      <div onClick={(e) => { e.stopPropagation(); setLiked(l => !l); }} style={{
        display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
      }}>
        {COM_ICONS.heart(liked ? KUN.brick : KUN.inkSoft, liked)}
        <span style={{
          fontFamily: COM_FT, fontSize: 12.5, fontWeight: 700,
          color: liked ? KUN.brick : KUN.inkSoft,
        }}>{count}</span>
      </div>
      <div onClick={(e) => { e.stopPropagation(); onReply && onReply(); }} style={{
        display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
      }}>
        {COM_ICONS.reply(KUN.inkSoft)}
        <span style={{ fontFamily: COM_FT, fontSize: 12.5, fontWeight: 700, color: KUN.inkSoft }}>
          {replies}
        </span>
      </div>
      <div onClick={(e) => {
        e.stopPropagation();
        if (navigator.share) navigator.share({ title: 'KUN Comunidad', text: 'Mira esta conversación del foro KUN.' }).catch(() => {});
      }} style={{
        display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
        marginLeft: 'auto',
      }}>
        {COM_ICONS.share(KUN.inkSoft)}
      </div>
    </div>
  );
}

// ── Preguntas ───────────────────────────────────────────
function PhotoPreview({ label = 'Foto adjunta' }) {
  return (
    <div style={{
      marginTop: 12,
      height: 140,
      borderRadius: 18,
      background: `linear-gradient(135deg, ${KUN.rosehip}, ${KUN.apple})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${KUN.hair}`,
      overflow: 'hidden',
    }}>
      <div style={{
        background: 'rgba(255,255,255,0.82)',
        borderRadius: 999,
        padding: '7px 12px',
        fontFamily: COM_FT,
        fontSize: 12,
        fontWeight: 700,
        color: KUN.ink,
      }}>
        {label}
      </div>
    </div>
  );
}

function ReplyThreadItem({ answer, depth = 0 }) {
  const [showReply, setShowReply] = React.useState(false);
  const [text, setText] = React.useState('');
  const [children, setChildren] = React.useState(answer.children || []);

  const send = () => {
    if (!text.trim()) return;
    setChildren(prev => [...prev, {
      author: 'Tú',
      ...avatarPresetFor('Tú'),
      text: text.trim(),
      time: 'Ahora',
      likes: 0,
      children: [],
    }]);
    setText('');
    setShowReply(false);
  };

  return (
    <div style={{ marginLeft: depth ? 24 : 0, position: 'relative' }}>
      {depth > 0 && (
        <div style={{ position: 'absolute', left: -14, top: -10, bottom: 10, width: 2, background: KUN.hair }}/>
      )}
      <div style={{
        background: '#fff', borderRadius: 22, padding: '14px 16px',
        border: `1px solid ${KUN.hair}`,
        marginBottom: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          {answer.anonymous ? (
            <div style={{
              width: 32, height: 32, borderRadius: '50%',
              background: KUN.cardSoft,
              border: `1px solid ${KUN.hair}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: COM_FT, fontSize: 14, fontWeight: 700, color: KUN.inkMuted,
            }}>?</div>
          ) : (
            <ComAvatar name={answer.author} color={answer.color} bgColor={answer.bgColor} iconType={answer.iconType} size={32} />
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: COM_FT, fontSize: 13, fontWeight: 700,
              color: answer.anonymous ? KUN.inkMuted : KUN.ink,
              letterSpacing: -0.1, fontStyle: answer.anonymous ? 'italic' : 'normal',
            }}>{answer.author}</div>
            <div style={{ fontFamily: COM_FB, fontSize: 11, color: KUN.inkMuted, fontWeight: 400, letterSpacing: 0.2 }}>
              {answer.staff ? 'Personal médico · ' : ''}{answer.time}
            </div>
          </div>
        </div>
        <div style={{
          fontFamily: COM_FB, fontSize: 13.5, color: KUN.ink, fontWeight: 400,
          lineHeight: 1.6,
        }}>{answer.text}</div>
        {answer.photo && <PhotoPreview label="Foto en respuesta" />}
        <PostActions likes={answer.likes || 0} replies={children.length} onReply={() => setShowReply(v => !v)} />
        {showReply && (
          <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
            <input
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Responder al hilo..."
              style={{
                flex: 1, minWidth: 0,
                border: `1px solid ${KUN.hair}`,
                borderRadius: 999,
                padding: '10px 12px',
                fontFamily: COM_FB,
                fontSize: 12.5,
                outline: 'none',
              }}
            />
            <button onClick={send} style={{
              border: 'none',
              borderRadius: 999,
              padding: '0 14px',
              background: text.trim() ? KUN.brick : KUN.cardSoft,
              color: text.trim() ? '#fff' : KUN.inkMuted,
              fontFamily: COM_FT,
              fontWeight: 700,
              cursor: text.trim() ? 'pointer' : 'default',
            }}>
              Enviar
            </button>
          </div>
        )}
      </div>
      {children.map((child, i) => (
        <ReplyThreadItem key={i} answer={child} depth={depth + 1} />
      ))}
    </div>
  );
}

const QUESTIONS = [
  {
    id: 'q1',
    author: 'Pedro',
    authorColor: '#7AA8B8',
    authorBgColor: '#E9EEF7',
    authorIcon: 'cloud',
    role: 'Papá de Tomás',
    category: 'Prematuridad',
    title: '¿Cuántos años tiene tu bebé prematuro y cuánto pesa?',
    text: 'Mi bebé, que nació a las 24 semanas, ahora tiene 2 años y pesa 24 libras. ¿Cuántos años tiene tu bebé prematuro y cuánto pesa?',
    time: 'Hace 3 h',
    likes: 12, replies: 8,
    tags: ['prematuro', 'peso', 'desarrollo', 'edad', 'ucin'],
    answers: [
      { author: 'Anónimo', anonymous: true, color: KUN.inkMuted, text: 'Mi hijo nació de 25 semanas 🩵 ahora tiene 3 años y pesa como 12 kg.', time: 'Hace 1 h' },
      { author: 'Carla', color: '#9C7CB8', bgColor: '#EFE8F5', iconType: 'star', text: 'La mía nació de 27 semanas, hoy tiene 2 años y está en 10,5 kg aprox.', time: 'Hace 30 min' },
    ],
  },
  {
    id: 'q2',
    author: 'Mariana',
    authorColor: KUN.brick,
    authorBgColor: '#FCE7DE',
    authorIcon: 'flower',
    role: 'Mamá de Sofía',
    category: 'Lactancia materna',
    title: '¿Cómo puedo recuperar mi producción de leche?',
    text: 'Pasé de extraer 240 ml por sesión a solo 60 ml. Estoy preocupada y no sé qué cambió. ¿A alguien más le pasó? ¿Qué hicieron?',
    time: 'Hace 6 h',
    likes: 24, replies: 11,
    tags: ['lactancia', 'leche', 'extraccion', 'produccion', 'apoyo'],
    answers: [],
  },
];

function QuestionCard({ q, onOpen, currentUser, onReport, onEdit, onDelete, moderationMode }) {
  return (
    <div onClick={() => onOpen(q.id)} style={{
      background: '#fff', borderRadius: 24, padding: 18,
      marginBottom: 12, cursor: 'pointer',
      border: q.fresh ? `2px solid ${KUN.brick}` : `1px solid ${KUN.hair}`,
      boxShadow: q.fresh ? '0 8px 18px rgba(240,116,62,0.16)' : 'none',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          <ComAvatar name={q.author} color={q.authorColor} bgColor={q.authorBgColor} iconType={q.authorIcon} size={40} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: COM_FT, fontSize: 14, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1,
            }}>{q.author}</div>
            <div style={{ fontFamily: COM_FB, fontSize: 11.5, color: KUN.inkSoft, fontWeight: 400, marginTop: 2 }}>
              {q.role} · {q.time}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <div onClick={e => e.stopPropagation()}>
            <PostActionsMenu
              isOwn={q.author === currentUser || q.fresh}
              onReport={() => onReport && onReport(q.id)}
              onEdit={() => onEdit && onEdit(q.id)}
              onDelete={() => onDelete && onDelete(q.id)}
              moderationMode={moderationMode}
            />
          </div>
        </div>
      </div>

      <div style={{
        fontFamily: COM_FB, fontSize: 10.5, fontWeight: 500, color: KUN.brick,
        letterSpacing: 1, marginBottom: 6, textTransform: 'uppercase',
      }}>{q.category}</div>

      <div style={{
        fontFamily: COM_FT, fontSize: 17, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3,
        lineHeight: 1.3, marginBottom: 10,
      }}>{q.title}</div>

      <div style={{
        fontFamily: COM_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400,
        lineHeight: 1.6,
      }}>{q.text}</div>

      <ComHashtagList tags={q.tags} />

      {q.photo && <PhotoPreview label="Foto en la pregunta" />}

      {q.staffAnswer && (
        <div style={{
          marginTop: 12, padding: 12, borderRadius: 16,
          background: KUN.sageSoft, border: `1px solid ${KUN.hair}`,
        }}>
          <span style={{
            display: 'inline-flex', padding: '5px 10px', borderRadius: 999,
            background: KUN.apple, color: KUN.ink,
            fontFamily: COM_FT, fontSize: 10.5, fontWeight: 700,
          }}>PERSONAL MÉDICO</span>
          <div style={{
            fontFamily: COM_FB, fontSize: 13, color: KUN.ink, fontWeight: 400,
            lineHeight: 1.55, marginTop: 8,
          }}>{q.staffAnswer}</div>
        </div>
      )}

      <PostActions likes={q.likes} replies={q.replies} onReply={() => onOpen(q.id)} />
    </div>
  );
}

function QuestionThread({ qId, onBack, questions, currentUser, onReply }) {
  const q = (questions || QUESTIONS).find(x => x.id === qId) || QUESTIONS.find(x => x.id === qId);
  const [replyAnon, setReplyAnon] = React.useState(false);
  const [replyText, setReplyText] = React.useState('');
  const [replyPosted, setReplyPosted] = React.useState(false);

  if (!q) {
    return <CommunityView questions={questions} onNew={() => {}} />;
  }

  const handleReply = () => {
    if (!replyText.trim()) return;
    const author = replyAnon ? 'Anónimo' : (currentUser || 'Tú');
    const avatar = replyAnon ? { iconType: 'cloud', color: KUN.inkMuted, bgColor: KUN.cardSoft } : avatarPresetFor(author);
    onReply && onReply(q.id, {
      author,
      anonymous: replyAnon,
      color: avatar.color,
      bgColor: avatar.bgColor,
      iconType: avatar.iconType,
      text: replyText.trim(),
      time: 'Ahora',
      likes: 0,
      children: [],
    });
    setReplyPosted(true);
    setTimeout(() => setReplyPosted(false), 2000);
    setReplyText('');
    setReplyAnon(false);
  };

  return (
    <>
      <ComSubHeader title="Pregunta" onBack={onBack} />
      <div style={{ padding: '0 20px', paddingBottom: 100 }}>
        {/* La pregunta original */}
        <div style={{
          background: '#fff', borderRadius: 24, padding: 18, marginBottom: 16,
          border: `1px solid ${KUN.hair}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <ComAvatar name={q.author} color={q.authorColor} bgColor={q.authorBgColor} iconType={q.authorIcon} size={40} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: COM_FT, fontSize: 14, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>
                {q.author}
              </div>
              <div style={{ fontFamily: COM_FB, fontSize: 11.5, color: KUN.inkSoft, fontWeight: 400, marginTop: 2 }}>
                {q.role} · {q.time}
              </div>
            </div>
          </div>
          <div style={{
            fontFamily: COM_FB, fontSize: 10.5, fontWeight: 500, color: KUN.brick,
            letterSpacing: 1, marginBottom: 6, textTransform: 'uppercase',
          }}>{q.category}</div>
          <div style={{
            fontFamily: COM_FT, fontSize: 18, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3,
            lineHeight: 1.3, marginBottom: 10,
          }}>{q.title}</div>
          <div style={{
            fontFamily: COM_FB, fontSize: 14, color: KUN.inkSoft, fontWeight: 400,
            lineHeight: 1.6,
          }}>{q.text}</div>
          <ComHashtagList tags={q.tags} />
          {q.photo && <PhotoPreview label="Foto en la pregunta" />}

          {q.staffAnswer && (
            <div style={{
              marginTop: 12, padding: 12, borderRadius: 16,
              background: KUN.sageSoft, border: `1px solid ${KUN.hair}`,
            }}>
              <span style={{
                display: 'inline-flex', padding: '5px 10px', borderRadius: 999,
                background: KUN.apple, color: KUN.ink,
                fontFamily: COM_FT, fontSize: 10.5, fontWeight: 700,
              }}>PERSONAL MÉDICO</span>
              <div style={{
                fontFamily: COM_FB, fontSize: 13, color: KUN.ink, fontWeight: 400,
                lineHeight: 1.55, marginTop: 8,
              }}>{q.staffAnswer}</div>
            </div>
          )}
          <PostActions likes={q.likes} replies={q.replies} />
        </div>

        {/* Respuestas */}
        <div style={{
          padding: '0 8px 12px',
          fontFamily: COM_FB, fontSize: 11, fontWeight: 500,
          color: KUN.inkMuted, letterSpacing: 1, textTransform: 'uppercase',
        }}>
          {(q.answers || []).length} {(q.answers || []).length === 1 ? 'respuesta' : 'respuestas'}
        </div>

        {(q.answers || []).length === 0 ? (
          <div style={{
            background: '#fff', borderRadius: 22,
            padding: '24px 20px', textAlign: 'center',
            border: `1.5px dashed ${KUN.inkFaint}`,
            marginBottom: 16,
          }}>
            <div style={{ fontSize: 28, marginBottom: 8 }}>💬</div>
            <div style={{ fontFamily: COM_FT, fontSize: 14.5, fontWeight: 700, color: KUN.ink, marginBottom: 4 }}>
              Aún no hay respuestas
            </div>
            <div style={{ fontFamily: COM_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
              Sé la primera en responder y acompañar a {q.author}.
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
            {(q.answers || []).map((a, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 22, padding: '14px 16px',
                border: `1px solid ${KUN.hair}`,
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  {a.anonymous ? (
                    <div style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: KUN.cardSoft,
                      border: `1px solid ${KUN.hair}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: COM_FT, fontSize: 14, fontWeight: 700, color: KUN.inkMuted,
                    }}>?</div>
                  ) : (
                    <ComAvatar name={a.author} color={a.color} bgColor={a.bgColor} iconType={a.iconType} size={32} />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: COM_FT, fontSize: 13, fontWeight: 700,
                      color: a.anonymous ? KUN.inkMuted : KUN.ink,
                      letterSpacing: -0.1, fontStyle: a.anonymous ? 'italic' : 'normal',
                    }}>{a.author}</div>
                    <div style={{ fontFamily: COM_FB, fontSize: 11, color: KUN.inkMuted, fontWeight: 400, letterSpacing: 0.2 }}>
                      {a.staff ? 'Personal médico · ' : ''}{a.time}
                    </div>
                  </div>
                </div>
                <div style={{
                  fontFamily: COM_FB, fontSize: 13.5, color: KUN.ink, fontWeight: 400,
                  lineHeight: 1.6,
                }}>{a.text}</div>
                {a.photo && <PhotoPreview label="Foto en respuesta" />}
                <PostActions likes={a.likes || 0} replies={(a.children || []).length} />
                {(a.children || []).map((child, childIdx) => (
                  <div key={childIdx} style={{
                    marginTop: 10,
                    marginLeft: 22,
                    paddingLeft: 12,
                    borderLeft: `2px solid ${KUN.hair}`,
                  }}>
                    <ReplyThreadItem answer={child} depth={1} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Composer de respuesta */}
        <div style={{
          background: '#fff', borderRadius: 22, padding: 16,
          border: `1px solid ${KUN.hair}`,
        }}>
          {replyPosted ? (
            <div style={{
              padding: '14px 4px', textAlign: 'center',
              fontFamily: COM_FT, fontSize: 14.5, fontWeight: 700, color: KUN.brick, lineHeight: 1.5,
            }}>
              ¡Respuesta publicada! 🧡
            </div>
          ) : (
            <>
              <textarea
                value={replyText}
                onChange={e => setReplyText(e.target.value)}
                placeholder="Escribe tu respuesta…"
                style={{
                  width: '100%', minHeight: 72, border: `1.5px solid ${KUN.hair}`, outline: 'none',
                  resize: 'none', fontFamily: COM_FB,
                  fontSize: 14, color: KUN.ink, fontWeight: 400,
                  background: '#fff', borderRadius: 14,
                  padding: '12px 14px', boxSizing: 'border-box',
                  lineHeight: 1.5, marginBottom: 12,
                }}
              />
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingTop: 12, borderTop: `1px dashed ${KUN.hair}`,
              }}>
                <div onClick={() => setReplyAnon(a => !a)} style={{
                  display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6,
                    border: `1.5px solid ${replyAnon ? KUN.brick : KUN.inkFaint}`,
                    background: replyAnon ? KUN.brick : '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all .2s',
                  }}>
                    {replyAnon && KIcon.check('#fff')}
                  </div>
                  <span style={{ fontFamily: COM_FT, fontSize: 13, fontWeight: 700, color: KUN.inkSoft }}>
                    Responder anónimamente
                  </span>
                </div>
                <button onClick={handleReply} style={{
                  padding: '9px 18px', height: 36, borderRadius: 999, border: 'none',
                  background: replyText.trim() ? KUN.brick : 'rgba(42,35,32,0.08)',
                  color: replyText.trim() ? '#fff' : KUN.inkMuted,
                  fontFamily: COM_FT, fontSize: 13, fontWeight: 700, letterSpacing: -0.1,
                  cursor: replyText.trim() ? 'pointer' : 'default',
                  transition: 'all .2s',
                }}>Publicar</button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

// ── Experiencias ───────────────────────────────────────
const EXPERIENCES = [
  {
    id: 'e1',
    author: 'Mariana', color: KUN.brick, bgColor: '#FFF5DC', iconType: 'flower', role: 'Mamá de Sofía',
    short: 'El proceso más largo de mi vida empezó un día 17 de enero del 2025 🩵 Aún no termina pero ya casi lo logramos 🥹 Ya casi se acaban las vueltas de chequeos.',
    long: ' Sin imaginarlo, antes de tiempo, estás ahí con el miedo inundándote y con la casi nula posibilidad de escuchar llorar a tu bebé, de abrazarlo, darle un beso y llevarlo contigo…',
    time: 'Hace 2 h',
    likes: 47, replies: 9, photo: true,
    tags: ['alta', 'chequeos', 'ucin', 'familia', 'esperanza'],
  },
];

function ExperienceCard({ e, currentUser, onReport, onEdit, onDelete, moderationMode }) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div style={{
      background: '#fff', borderRadius: 24, padding: 18, marginBottom: 12,
      border: `1px solid ${KUN.hair}`,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flex: 1 }}>
          <ComAvatar name={e.author} color={e.color} bgColor={e.bgColor} iconType={e.iconType} size={40} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: COM_FT, fontSize: 14, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>
              {e.author}
            </div>
            <div style={{ fontFamily: COM_FB, fontSize: 11.5, color: KUN.inkSoft, fontWeight: 400, marginTop: 2 }}>
              {e.role} · {e.time}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <div onClick={e => e.stopPropagation()}>
            <PostActionsMenu
              isOwn={e.author === currentUser || e.fresh}
              onReport={() => onReport && onReport(e.id)}
              onEdit={() => onEdit && onEdit(e.id)}
              onDelete={() => onDelete && onDelete(e.id)}
              moderationMode={moderationMode}
            />
          </div>
        </div>
      </div>

      <div style={{
        fontFamily: COM_FB, fontSize: 14, color: KUN.ink, fontWeight: 400,
        lineHeight: 1.6,
      }}>
        {e.short}
        {expanded && <span>{e.long}</span>}
      </div>
      {e.photo && <PhotoPreview label="Foto de la experiencia" />}
      <ComHashtagList tags={e.tags} />
      {!expanded && e.long && (
        <span onClick={() => setExpanded(true)} style={{
          display: 'inline-block', marginTop: 10,
          fontFamily: COM_FT, fontSize: 13, fontWeight: 700, color: KUN.brick,
          cursor: 'pointer', letterSpacing: -0.1,
        }}>Mostrar más →</span>
      )}

      <PostActions likes={e.likes} replies={e.replies} />
    </div>
  );
}

function EmptyCommunitySearch({ query }) {
  return (
    <div style={{
      margin: '0 20px', padding: '26px 18px', borderRadius: 22,
      background: '#fff', border: `1.5px dashed ${KUN.inkFaint}`, textAlign: 'center',
    }}>
      <div style={{ fontFamily: COM_FT, fontSize: 15, fontWeight: 700, color: KUN.ink }}>
        No encontramos entradas
      </div>
      <div style={{ fontFamily: COM_FB, fontSize: 12.5, color: KUN.inkSoft, lineHeight: 1.5, marginTop: 6 }}>
        Prueba con otra palabra o con un hashtag relacionado con "{query}".
      </div>
    </div>
  );
}

function QuestionsFeed({ onOpen, questions, currentUser, onReport, onEdit, onDelete, moderationMode, searchQuery = '' }) {
  const list = questions || QUESTIONS;
  return (
    <div style={{ padding: '0 20px' }}>
      {list.map(q => (
        <QuestionCard
          key={q.id}
          q={q}
          onOpen={onOpen}
          currentUser={currentUser}
          onReport={onReport}
          onEdit={onEdit}
          onDelete={onDelete}
          moderationMode={moderationMode}
        />
      ))}
      {!list.length && <EmptyCommunitySearch query={searchQuery} />}
    </div>
  );
}

function ExperiencesFeed({ experiences = EXPERIENCES, currentUser, onReport, onEdit, onDelete, moderationMode, searchQuery = '' }) {
  return (
    <div style={{ padding: '0 20px' }}>
      {experiences.map(e => (
        <ExperienceCard
          key={e.id}
          e={e}
          currentUser={currentUser}
          onReport={onReport}
          onEdit={onEdit}
          onDelete={onDelete}
          moderationMode={moderationMode}
        />
      ))}
      {!experiences.length && <EmptyCommunitySearch query={searchQuery} />}
    </div>
  );
}

// ── New post sheet (bottom sheet simulado en pantalla) ──
function NewPostSheet({ onClose, defaultKind = 'question', onPublish }) {
  const [kind, setKind] = React.useState(defaultKind);
  const [anon, setAnon] = React.useState(false);
  const [posted, setPosted] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [hasPhoto, setHasPhoto] = React.useState(false);
  const [tagInput, setTagInput] = React.useState('');
  const [tags, setTags] = React.useState([]);

  const canPublish = (kind === 'question' ? (title.trim() && body.trim()) : body.trim()) && tags.length === 5;

  const addTag = () => {
    const tag = cleanComTag(tagInput);
    if (!tag || tags.includes(tag) || tags.length >= 5) return;
    setTags(prev => [...prev, tag]);
    setTagInput('');
  };

  const removeTag = (tag) => setTags(prev => prev.filter(item => item !== tag));

  const handlePublish = () => {
    if (!canPublish) return;
    onPublish && onPublish({ kind, title: title.trim(), body: body.trim(), tags, anon, hasPhoto });
    setPosted(true);
    setTimeout(onClose, 1600);
  };

  const sharedInputStyle = {
    width: '100%', border: 'none', outline: 'none', resize: 'none',
    fontFamily: COM_FB, fontSize: 14, fontWeight: 400,
    color: KUN.ink, background: 'transparent', lineHeight: 1.5,
    boxSizing: 'border-box', padding: 0,
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 200,
      background: 'rgba(42,35,32,0.4)',
      display: 'flex', alignItems: 'flex-end',
    }}>
      <div style={{
        width: '100%', background: KUN.bg,
        borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '14px 20px 112px',
        maxHeight: 'calc(100% - 8px)', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          width: 44, height: 5, borderRadius: 3, background: KUN.inkFaint,
          margin: '0 auto 14px',
        }} />
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          marginBottom: 14,
        }}>
          <div style={{ fontFamily: COM_FT, fontSize: 20, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3 }}>
            Nueva publicación
          </div>
          <span onClick={onClose} style={{
            fontFamily: COM_FT, fontSize: 13, fontWeight: 700, color: KUN.brick, cursor: 'pointer',
          }}>Cancelar</span>
        </div>

        {/* Kind picker — DS subtabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          {[
            { id: 'question',   label: 'Pregunta' },
            { id: 'experience', label: 'Experiencia' },
          ].map(t => {
            const isA = t.id === kind;
            return (
              <div key={t.id} onClick={() => { setKind(t.id); setTitle(''); setBody(''); setTags([]); setTagInput(''); }} style={{
                flex: 1, textAlign: 'center', cursor: 'pointer',
                padding: '10px 6px', borderRadius: 999,
                background: isA ? KUN.brick : KUN.cardSoft,
                color: isA ? '#fff' : KUN.inkSoft,
                fontFamily: COM_FT, fontSize: 13, fontWeight: 700, letterSpacing: 0.1,
                border: isA ? 'none' : `1px solid ${KUN.hair}`,
                transition: 'all .2s',
              }}>{t.label}</div>
            );
          })}
        </div>

        {/* Form */}
        <div style={{
          background: '#fff', borderRadius: 22, padding: 16, marginBottom: 14,
          border: `1px solid ${KUN.hair}`,
          flex: 1, overflowY: 'auto',
        }}>
          {kind === 'question' && (
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Título de tu pregunta…"
              style={{
                ...sharedInputStyle,
                fontFamily: COM_FT,
                fontSize: 15.5, fontWeight: 700, letterSpacing: -0.1,
                paddingBottom: 14, marginBottom: 14,
                borderBottom: `1px dashed ${KUN.hair}`,
              }}
            />
          )}
          <textarea
            value={body}
            onChange={e => setBody(e.target.value)}
            placeholder={kind === 'question'
              ? 'Cuenta más sobre tu situación, qué te gustaría saber…'
              : 'Comparte tu experiencia. Lo que escribas puede acompañar a otra mamá o papá.'}
            rows={5}
            style={{ ...sharedInputStyle }}
          />
          {hasPhoto && <PhotoPreview label="Foto lista para publicar" />}
        </div>

        <div style={{
          background: '#fff', borderRadius: 22, padding: 14, marginBottom: 12,
          border: `1px solid ${KUN.hair}`,
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            marginBottom: 10, gap: 8,
          }}>
            <div style={{ fontFamily: COM_FT, fontSize: 13.5, fontWeight: 700, color: KUN.ink }}>
              Hashtags de busqueda
            </div>
            <div style={{
              fontFamily: COM_FT, fontSize: 12, fontWeight: 700,
              color: tags.length === 5 ? KUN.brick : KUN.inkMuted,
            }}>{tags.length}/5</div>
          </div>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            border: `1.5px solid ${KUN.hair}`, borderRadius: 999,
            padding: '6px 6px 6px 12px', marginBottom: 10,
            background: KUN.bg,
          }}>
            <span style={{ fontFamily: COM_FT, fontSize: 14, fontWeight: 700, color: KUN.brick }}>#</span>
            <input
              value={tagInput}
              onChange={e => setTagInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  addTag();
                }
              }}
              placeholder={tags.length >= 5 ? 'Ya agregaste 5 etiquetas' : 'ej: lactancia'}
              disabled={tags.length >= 5}
              style={{
                flex: 1, border: 'none', outline: 'none', background: 'transparent',
                fontFamily: COM_FB, fontSize: 13.5, color: KUN.ink, minWidth: 0,
              }}
            />
            <button onClick={addTag} disabled={tags.length >= 5 || !cleanComTag(tagInput)} style={{
              border: 'none', borderRadius: 999, padding: '8px 12px',
              background: tags.length < 5 && cleanComTag(tagInput) ? KUN.brick : 'rgba(42,35,32,0.08)',
              color: tags.length < 5 && cleanComTag(tagInput) ? '#fff' : KUN.inkMuted,
              fontFamily: COM_FT, fontSize: 12.5, fontWeight: 700,
              cursor: tags.length < 5 && cleanComTag(tagInput) ? 'pointer' : 'default',
            }}>Agregar</button>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
            {tags.map(tag => (
              <button key={tag} onClick={() => removeTag(tag)} style={{
                border: 'none', borderRadius: 999, padding: '7px 10px',
                background: KUN.sageSoft, color: KUN.inkSoft,
                fontFamily: COM_FT, fontSize: 12, fontWeight: 700,
                cursor: 'pointer',
              }}>#{tag} x</button>
            ))}
            {!tags.length && (
              <span style={{ fontFamily: COM_FB, fontSize: 12, color: KUN.inkMuted }}>
                Agrega exactamente 5 hashtags para publicar.
              </span>
            )}
          </div>
        </div>

        <button onClick={() => setHasPhoto(p => !p)} style={{
          width: '100%',
          padding: '11px 14px',
          borderRadius: 999,
          border: `1px solid ${KUN.hair}`,
          background: hasPhoto ? KUN.sageSoft : '#fff',
          color: KUN.ink,
          fontFamily: COM_FT,
          fontSize: 13,
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          marginBottom: 12,
          cursor: 'pointer',
        }}>
          {COM_ICONS.image(KUN.ink)} {hasPhoto ? 'Quitar foto' : 'Agregar foto'}
        </button>

        <div onClick={() => setAnon(a => !a)} style={{
          display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
          padding: '0 4px 14px',
        }}>
          <div style={{
            width: 22, height: 22, borderRadius: 6,
            border: `1.5px solid ${anon ? KUN.brick : KUN.inkFaint}`,
            background: anon ? KUN.brick : '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all .2s',
          }}>
            {anon && KIcon.check('#fff')}
          </div>
          <span style={{ fontFamily: COM_FT, fontSize: 13, fontWeight: 700, color: KUN.inkSoft }}>
            Publicar de forma anónima
          </span>
        </div>

        {posted ? (
          <div style={{
            width: '100%', padding: '16px 18px', borderRadius: 999,
            background: KUN.apple,
            textAlign: 'center',
            fontFamily: COM_FT, fontSize: 15, fontWeight: 700, color: KUN.ink,
            letterSpacing: -0.1,
          }}>¡Publicado con éxito! 🎉</div>
        ) : (
          <button onClick={handlePublish} style={{
            width: '100%', padding: '14px 18px', height: 50, borderRadius: 999, border: 'none',
            background: canPublish ? KUN.brick : 'rgba(42,35,32,0.08)',
            color: canPublish ? '#fff' : KUN.inkMuted,
            fontFamily: COM_FT, fontSize: 15, fontWeight: 700, letterSpacing: -0.1,
            cursor: canPublish ? 'pointer' : 'default',
            transition: 'all .2s',
          }}>Publicar</button>
        )}
      </div>
    </div>
  );
}

function postMatchesSearch(post, query) {
  const cleanQuery = normalizeComSearch(query).replace(/^#/, '').trim();
  if (!cleanQuery) return true;
  const terms = cleanQuery.split(/\s+/).filter(Boolean);
  const haystack = normalizeComSearch([
    post.author,
    post.role,
    post.category,
    post.title,
    post.text,
    post.short,
    post.long,
    ...(post.tags || []),
  ].filter(Boolean).join(' '));
  return terms.every(term => haystack.includes(term));
}

function CommunityView({ onNew, questions, experiences, focusQuestionId, currentUser, onReply, onReport, onEdit, onDelete, moderationMode, allowNew = true }) {
  const [sub, setSub] = React.useState('questions');
  const [openQ, setOpenQ] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState('');
  const filteredQuestions = (questions || QUESTIONS).filter(q => postMatchesSearch(q, searchQuery));
  const filteredExperiences = (experiences || EXPERIENCES).filter(e => postMatchesSearch(e, searchQuery));

  React.useEffect(() => {
    setSub('questions');
    setOpenQ(focusQuestionId || null);
  }, [focusQuestionId]);

  if (openQ) {
    return <QuestionThread qId={openQ} questions={questions} currentUser={currentUser} onReply={onReply} onBack={() => setOpenQ(null)} />;
  }

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div style={{ paddingBottom: 100 }}>
        <CommunitySearchBox value={searchQuery} onChange={setSearchQuery} />
        <CommunityInnerTabs active={sub} onChange={setSub} />
        {sub === 'questions'
          ? <QuestionsFeed onOpen={setOpenQ} questions={filteredQuestions} currentUser={currentUser} onReport={onReport} onEdit={onEdit} onDelete={onDelete} moderationMode={moderationMode} searchQuery={searchQuery} />
          : <ExperiencesFeed experiences={filteredExperiences} currentUser={currentUser} onReport={onReport} onEdit={onEdit} onDelete={onDelete} moderationMode={moderationMode} searchQuery={searchQuery} />}
      </div>

      {/* FAB nueva publicación */}
      {allowNew && <button onClick={() => onNew(sub)} style={{
        position: 'absolute', bottom: 14, right: 20,
        width: 58, height: 58, borderRadius: '50%', border: 'none',
        background: KUN.brick, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 18px rgba(240,116,62,0.40)', cursor: 'pointer',
        zIndex: 5,
      }}>
        {COM_ICONS.plus('#fff')}
      </button>}
    </div>
  );
}

// ╔══════════════════════════════════════════════════════╗
// ║                  PUBLIC ENTRY                         ║
// ╚══════════════════════════════════════════════════════╝

function ScreenComunidad({ focusQuestionId = null, questions = [], currentUser = '', onReportSubmit, moderationMode = false, onModerateRemove, allowNew = true, hiddenIds = [] }) {
  const [userPosts, setUserPosts] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kun_community_posts_v1') || '{"questions":[],"experiences":[]}');
    } catch {
      return { questions: [], experiences: [] };
    }
  });
  const [savedReplies, setSavedReplies] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('kun_community_replies_v1') || '{}');
    } catch {
      return {};
    }
  });
  const saveUserPosts = (next) => {
    setUserPosts(next);
    try { localStorage.setItem('kun_community_posts_v1', JSON.stringify(next)); } catch {}
  };
  const saveReplies = (next) => {
    setSavedReplies(next);
    try { localStorage.setItem('kun_community_replies_v1', JSON.stringify(next)); } catch {}
  };
  const userQuestions = userPosts.questions || [];
  const userExperiences = userPosts.experiences || [];
  const withSavedReplies = (question) => {
    const extraAnswers = savedReplies[question.id] || [];
    const answers = [...(question.answers || []), ...extraAnswers];
    return { ...question, answers, replies: Math.max(question.replies || 0, answers.length) };
  };
  const mergedQuestions = [...userQuestions, ...questions, ...QUESTIONS.filter(q => !questions.some(userQ => userQ.id === q.id) && !userQuestions.some(userQ => userQ.id === q.id))]
    .filter(q => !hiddenIds.includes(q.id))
    .map(withSavedReplies);
  const mergedExperiences = [...userExperiences, ...EXPERIENCES]
    .filter(e => !hiddenIds.includes(e.id));
  const [newPost, setNewPost] = React.useState(null);
  const [reportingPostId, setReportingPostId] = React.useState(null);
  const [reportingPostTitle, setReportingPostTitle] = React.useState('');

  const handleReport = (postId) => {
    const post = mergedQuestions.find(q => q.id === postId) || mergedExperiences.find(e => e.id === postId);
    setReportingPostId(postId);
    setReportingPostTitle(post?.title || post?.short || 'Entrada del foro');
  };

  const handleReportSubmit = (reason) => {
    onReportSubmit && onReportSubmit({ postId: reportingPostId, postTitle: reportingPostTitle, reason });
    console.log(`Post ${reportingPostId} reportado por: ${reason}`);
    setReportingPostId(null);
  };
  const handlePublishPost = ({ kind, title, body, tags, anon, hasPhoto }) => {
    window.KUNAnalytics?.track('foro_publicacion_creada', {
      tipo: kind === 'question' ? 'pregunta' : 'experiencia',
      anonima: !!anon,
      con_foto: !!hasPhoto,
      hashtags_count: Array.isArray(tags) ? tags.length : 0,
    });
    const id = `${kind}-${Date.now()}`;
    const author = anon ? 'Anonimo' : (currentUser || 'Tu');
    const avatar = anon ? { iconType: 'cloud', color: KUN.inkMuted, bgColor: KUN.cardSoft } : avatarPresetFor(author);
    const base = {
      id,
      author,
      authorColor: avatar.color,
      authorBgColor: avatar.bgColor,
      authorIcon: avatar.iconType,
      color: avatar.color,
      bgColor: avatar.bgColor,
      iconType: avatar.iconType,
      role: anon ? 'Publicacion anonima' : 'Familia KUN',
      time: 'Ahora',
      likes: 0,
      replies: 0,
      tags,
      photo: hasPhoto,
      fresh: true,
    };
    if (kind === 'question') {
      saveUserPosts({
        ...userPosts,
        questions: [{
          ...base,
          category: 'Comunidad',
          title,
          text: body,
          answers: [],
        }, ...userQuestions],
      });
    } else {
      saveUserPosts({
        ...userPosts,
        experiences: [{
          ...base,
          short: body,
          long: '',
        }, ...userExperiences],
      });
    }
  };
  const handleReplySubmit = (questionId, reply) => {
    const current = savedReplies[questionId] || [];
    saveReplies({
      ...savedReplies,
      [questionId]: [...current, { ...reply, id: `reply-${Date.now()}` }],
    });
  };
  const handleDelete = (postId) => {
    saveUserPosts({
      questions: userQuestions.filter(q => q.id !== postId),
      experiences: userExperiences.filter(e => e.id !== postId),
    });
    if (onModerateRemove) onModerateRemove(postId);
  };

  return (
    <>
      <CommunityView
        questions={mergedQuestions}
        experiences={mergedExperiences}
        focusQuestionId={focusQuestionId}
        currentUser={currentUser}
        onReply={handleReplySubmit}
        onReport={handleReport}
        onEdit={() => {}}
        onDelete={handleDelete}
        onNew={(kind) => setNewPost(kind === 'experiences' ? 'experience' : 'question')}
        moderationMode={moderationMode}
        allowNew={allowNew}
      />

      {newPost && (
        <NewPostSheet
          defaultKind={newPost}
          onPublish={handlePublishPost}
          onClose={() => setNewPost(null)}
        />
      )}

      {reportingPostId && (
        <ReportPostModal
          onClose={() => setReportingPostId(null)}
          onSubmit={handleReportSubmit}
        />
      )}
    </>
  );
}

window.ScreenComunidad = ScreenComunidad;
