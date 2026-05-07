// Comunidad section — Chat (privado con profesionales) y Comunidad (preguntas + experiencias entre padres).
// Exposes: ScreenComunidad()

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
};

// ── Avatar reutilizable ─────────────────────────────────
function ComAvatar({ name, color, size = 44 }) {
  const initial = (name || '?').charAt(0).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: size / 2,
      background: color, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: size * 0.38, fontWeight: 800, flexShrink: 0,
      letterSpacing: -0.2,
    }}>{initial}</div>
  );
}

// ── Subtabs principales (Chat / Comunidad) ──────────────
function ComTopTabs({ active, onChange }) {
  const tabs = [
    { id: 'chat', label: 'Chat' },
    { id: 'community', label: 'Comunidad' },
  ];
  return (
    <div style={{
      margin: '4px 20px 12px',
      background: '#fff', borderRadius: 999, padding: 4, display: 'flex',
      boxShadow: '0 1px 2px rgba(46,42,38,0.04)',
    }}>
      {tabs.map(t => {
        const isA = t.id === active;
        return (
          <div key={t.id} onClick={() => onChange(t.id)} style={{
            flex: 1, textAlign: 'center', cursor: 'pointer',
            padding: '10px 6px', borderRadius: 999,
            background: isA ? KUN.accent : 'transparent',
            color: isA ? '#fff' : KUN.inkSoft,
            fontSize: 13, fontWeight: 700, letterSpacing: -0.1,
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
        width: 40, height: 40, borderRadius: 20, background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 1px 2px rgba(46,42,38,0.04)', cursor: 'pointer',
        flexShrink: 0,
      }}>{COM_ICONS.back(KUN.ink)}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 18, fontWeight: 800, color: KUN.ink,
          letterSpacing: -0.3, lineHeight: 1.2,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{title}</div>
        {subtitle && (
          <div style={{
            fontSize: 12, color: KUN.inkMuted, fontWeight: 600,
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
    last: 'Te mando un artículo que te podría servir',
    time: '10:32 AM',
    online: true,
  },
  {
    id: 'lucia',
    name: 'Lucía',
    role: 'Psicóloga',
    color: '#B58E5F',
    last: '¿Podríamos hablar hoy día?',
    time: 'Ayer',
    online: false,
  },
];

const AVAILABLE_PROFESSIONALS = [
  { id: 'juanita', name: 'Juanita Pérez',  role: 'Enfermera / Matrona', color: KUN.sage,    desc: 'Turno mañana · UCIN' },
  { id: 'lucia',   name: 'Lucía Mendoza',  role: 'Psicóloga',            color: '#B58E5F',  desc: 'Acompañamiento familiar' },
  { id: 'rocio',   name: 'Rocío Salinas',  role: 'Nutricionista',        color: '#9C7CB8',  desc: 'Lactancia y alimentación' },
  { id: 'andres',  name: 'Andrés Carmona', role: 'Kinesiólogo',          color: '#7AA8B8',  desc: 'Estimulación temprana' },
];

function ChatList({ onOpenChat, onNew }) {
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div style={{ paddingBottom: 100 }}>
        {/* Search */}
        <div style={{ padding: '0 20px 14px' }}>
          <div style={{
            background: '#fff', borderRadius: 18, padding: '13px 16px',
            display: 'flex', alignItems: 'center', gap: 10,
            boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
          }}>
            {COM_ICONS.search(KUN.inkMuted)}
            <span style={{
              fontSize: 14.5, color: KUN.inkMuted, fontWeight: 500,
              letterSpacing: -0.1,
            }}>Buscar conversación…</span>
          </div>
        </div>

        <div style={{
          padding: '0 28px 10px',
          fontSize: 12, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 0.6,
        }}>
          TUS CONVERSACIONES
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 20px' }}>
          {PROFESSIONALS.map(p => (
            <div key={p.id} onClick={() => onOpenChat(p.id)} style={{
              background: '#fff', borderRadius: 22, padding: '14px 16px',
              display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
              boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
            }}>
              <div style={{ position: 'relative' }}>
                <ComAvatar name={p.name} color={p.color} size={48} />
                {p.online && (
                  <div style={{
                    position: 'absolute', bottom: 0, right: 0,
                    width: 12, height: 12, borderRadius: 6,
                    background: KUN.sage, border: '2px solid #fff',
                  }} />
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8,
                  marginBottom: 2,
                }}>
                  <div style={{
                    fontSize: 15.5, fontWeight: 800, color: KUN.ink,
                    letterSpacing: -0.2,
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>{p.name}</div>
                  <span style={{
                    fontSize: 11, fontWeight: 700, color: KUN.inkMuted,
                    flexShrink: 0,
                  }}>{p.time}</span>
                </div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: KUN.accentDeep,
                  letterSpacing: 0.3, marginBottom: 4,
                }}>{p.role.toUpperCase()}</div>
                <div style={{
                  fontSize: 13, color: KUN.inkSoft, fontWeight: 500,
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  lineHeight: 1.3,
                }}>{p.last}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAB nueva conversación */}
      <button onClick={onNew} style={{
        position: 'absolute', bottom: 14, right: 20,
        width: 58, height: 58, borderRadius: 29, border: 'none',
        background: KUN.accent, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 18px rgba(201,123,90,0.4)', cursor: 'pointer',
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
          padding: '0 8px 10px',
          fontSize: 12, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 0.6,
        }}>
          PROFESIONALES DISPONIBLES
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {AVAILABLE_PROFESSIONALS.map(p => (
            <div key={p.id} onClick={() => onPick(p.id)} style={{
              background: '#fff', borderRadius: 20, padding: '14px 16px',
              display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
              boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
            }}>
              <ComAvatar name={p.name} color={p.color} size={44} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 14.5, fontWeight: 800, color: KUN.ink,
                  letterSpacing: -0.2, marginBottom: 2,
                }}>{p.name}</div>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: KUN.accentDeep,
                  letterSpacing: 0.3, marginBottom: 3,
                }}>{p.role.toUpperCase()}</div>
                <div style={{
                  fontSize: 12, color: KUN.inkMuted, fontWeight: 600,
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
      background: KUN.cardSoft, borderRadius: 16, padding: 12,
      display: 'flex', gap: 12, alignItems: 'center',
      maxWidth: 240,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 14,
        background: KUN.accentSoft,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>{COM_ICONS.capsule(KUN.accentDeep)}</div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 10, fontWeight: 800, color: KUN.accentDeep,
          letterSpacing: 0.5, marginBottom: 3,
        }}>CÁPSULA · {capsule.tag.toUpperCase()}</div>
        <div style={{
          fontSize: 13, fontWeight: 700, color: KUN.ink,
          letterSpacing: -0.2, lineHeight: 1.3, marginBottom: 4, textWrap: 'pretty',
        }}>{capsule.title}</div>
        <div style={{
          fontSize: 11, color: KUN.inkMuted, fontWeight: 600,
        }}>{capsule.mins}</div>
      </div>
    </div>
  );
}

function ChatBubble({ msg, profColor }) {
  const isMe = msg.from === 'me';
  const bg = isMe ? KUN.accent : '#fff';
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
        boxShadow: msg.kind === 'capsule' ? 'none' : (isMe ? '0 4px 10px rgba(201,123,90,0.18)' : '0 1px 2px rgba(46,42,38,0.04)'),
      }}>
        {msg.kind === 'text' && (
          <div style={{
            fontSize: 14, fontWeight: 500, lineHeight: 1.45,
            letterSpacing: -0.1, textWrap: 'pretty',
          }}>{msg.text}</div>
        )}
        {msg.kind === 'capsule' && <ChatCapsuleCard capsule={msg.capsule} />}
        <div style={{
          fontSize: 10, fontWeight: 700,
          color: isMe ? 'rgba(255,255,255,0.75)' : KUN.inkMuted,
          marginTop: 4,
          textAlign: isMe ? 'right' : 'left',
          letterSpacing: 0.2,
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
        boxShadow: '0 4px 14px rgba(46,42,38,0.06), 0 1px 3px rgba(46,42,38,0.04)',
      }}>
        <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
          <button style={composerBtn}>{COM_ICONS.image(KUN.inkSoft)}</button>
          <button style={composerBtn}>{COM_ICONS.capsule(KUN.inkSoft)}</button>
        </div>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Escribe un mensaje…"
          style={{
            flex: 1, border: 'none', outline: 'none',
            fontSize: 14, color: KUN.ink, fontWeight: 500,
            background: 'transparent', fontFamily: 'inherit',
            padding: '0 4px',
          }}
        />
        <button onClick={send} style={{
          width: 40, height: 40, borderRadius: 20, border: 'none',
          background: text.trim() ? KUN.accent : KUN.cardSoft,
          color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: text.trim() ? 'pointer' : 'default',
          boxShadow: text.trim() ? '0 4px 10px rgba(201,123,90,0.35)' : 'none',
          transition: 'background .2s, box-shadow .2s',
        }}>{COM_ICONS.send(text.trim() ? '#fff' : KUN.inkFaint)}</button>
      </div>
    </div>
  );
}

const composerBtn = {
  width: 36, height: 36, borderRadius: 18, border: 'none',
  background: KUN.cardSoft,
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
          width: 40, height: 40, borderRadius: 20, background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 2px rgba(46,42,38,0.04)', cursor: 'pointer',
        }}>{COM_ICONS.back(KUN.ink)}</div>
        <ComAvatar name={prof.name} color={prof.color} size={40} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 16, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>{prof.name}</div>
          <div style={{
            fontSize: 11, fontWeight: 700, color: KUN.accentDeep, letterSpacing: 0.3,
          }}>{prof.role.toUpperCase()}</div>
        </div>
      </div>

      <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', paddingTop: 14, paddingBottom: 90 }}>
        <div style={{
          textAlign: 'center', fontSize: 11, fontWeight: 700,
          color: KUN.inkMuted, letterSpacing: 0.6, marginBottom: 14,
        }}>
          <span style={{
            background: KUN.cardSoft, padding: '4px 12px', borderRadius: 999,
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

function CommunityInnerTabs({ active, onChange }) {
  const tabs = [
    { id: 'questions',   label: 'Preguntas' },
    { id: 'experiences', label: 'Experiencias' },
  ];
  return (
    <div style={{
      margin: '0 20px 14px', display: 'flex', gap: 8,
    }}>
      {tabs.map(t => {
        const isA = t.id === active;
        return (
          <div key={t.id} onClick={() => onChange(t.id)} style={{
            cursor: 'pointer',
            padding: '9px 16px', borderRadius: 999,
            background: isA ? KUN.ink : '#fff',
            color: isA ? '#fff' : KUN.inkSoft,
            fontSize: 13, fontWeight: 700, letterSpacing: -0.1,
            boxShadow: isA ? 'none' : '0 1px 2px rgba(46,42,38,0.03)',
            border: isA ? 'none' : '1px solid rgba(46,42,38,0.05)',
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
      borderTop: `1px dashed ${KUN.divider}`,
    }}>
      <div onClick={(e) => { e.stopPropagation(); setLiked(l => !l); }} style={{
        display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
      }}>
        {COM_ICONS.heart(liked ? KUN.accent : KUN.inkSoft, liked)}
        <span style={{
          fontSize: 12, fontWeight: 700,
          color: liked ? KUN.accent : KUN.inkSoft,
        }}>{count}</span>
      </div>
      <div onClick={(e) => { e.stopPropagation(); onReply && onReply(); }} style={{
        display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
      }}>
        {COM_ICONS.reply(KUN.inkSoft)}
        <span style={{ fontSize: 12, fontWeight: 700, color: KUN.inkSoft }}>
          {replies}
        </span>
      </div>
      <div onClick={(e) => e.stopPropagation()} style={{
        display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
        marginLeft: 'auto',
      }}>
        {COM_ICONS.share(KUN.inkSoft)}
      </div>
    </div>
  );
}

// ── Preguntas ───────────────────────────────────────────
const QUESTIONS = [
  {
    id: 'q1',
    author: 'Pedro', authorColor: '#7AA8B8',
    role: 'Papá de Tomás',
    category: 'Prematuridad',
    title: '¿Cuántos años tiene tu bebé prematuro y cuánto pesa?',
    text: 'Mi bebé, que nació a las 24 semanas, ahora tiene 2 años y pesa 24 libras. ¿Cuántos años tiene tu bebé prematuro y cuánto pesa?',
    time: 'Hace 3 h',
    likes: 12, replies: 8,
    answers: [
      { author: 'Anónimo', anonymous: true, color: KUN.inkMuted, text: 'Mi hijo nació de 25 semanas 🩵 ahora tiene 3 años y pesa como 12 kg.', time: 'Hace 1 h' },
      { author: 'Carla',   color: '#B58E5F', text: 'La mía nació de 27 semanas, hoy tiene 2 años y está en 10,5 kg aprox.', time: 'Hace 30 min' },
    ],
  },
  {
    id: 'q2',
    author: 'Mariana', authorColor: KUN.accent,
    role: 'Mamá de Sofía',
    category: 'Lactancia materna',
    title: '¿Cómo puedo recuperar mi producción de leche?',
    text: 'Pasé de extraer 240 ml por sesión a solo 60 ml. Estoy preocupada y no sé qué cambió. ¿A alguien más le pasó? ¿Qué hicieron?',
    time: 'Hace 6 h',
    likes: 24, replies: 11,
    answers: [],
  },
];

function QuestionCard({ q, onOpen }) {
  return (
    <div onClick={() => onOpen(q.id)} style={{
      background: '#fff', borderRadius: 24, padding: 18,
      marginBottom: 10, cursor: 'pointer',
      boxShadow: '0 1px 2px rgba(46,42,38,0.03), 0 6px 16px rgba(46,42,38,0.04)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <ComAvatar name={q.author} color={q.authorColor} size={40} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 14, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2,
          }}>{q.author}</div>
          <div style={{ fontSize: 11.5, color: KUN.inkMuted, fontWeight: 600, marginTop: 1 }}>
            {q.role} · {q.time}
          </div>
        </div>
        <span style={{
          padding: '4px 10px', borderRadius: 999,
          background: KUN.accentSoft, color: KUN.accentDeep,
          fontSize: 10.5, fontWeight: 800, letterSpacing: 0.4,
          flexShrink: 0,
        }}>PREGUNTA</span>
      </div>

      <div style={{
        fontSize: 11, fontWeight: 700, color: KUN.sage,
        letterSpacing: 0.5, marginBottom: 6,
      }}>{q.category.toUpperCase()}</div>

      <div style={{
        fontSize: 16, fontWeight: 800, color: KUN.ink, letterSpacing: -0.3,
        lineHeight: 1.25, marginBottom: 8, textWrap: 'pretty',
      }}>{q.title}</div>

      <div style={{
        fontSize: 13.5, color: KUN.inkSoft, fontWeight: 500,
        lineHeight: 1.5, textWrap: 'pretty',
      }}>{q.text}</div>

      <PostActions likes={q.likes} replies={q.replies} />
    </div>
  );
}

function QuestionThread({ qId, onBack }) {
  const q = QUESTIONS.find(x => x.id === qId);
  const [replyAnon, setReplyAnon] = React.useState(false);
  const [replyText, setReplyText] = React.useState('');
  const [replyPosted, setReplyPosted] = React.useState(false);

  const handleReply = () => {
    if (!replyText.trim()) return;
    setReplyPosted(true);
    setTimeout(() => setReplyPosted(false), 2000);
    setReplyText('');
  };

  return (
    <>
      <ComSubHeader title="Pregunta" onBack={onBack} />
      <div style={{ padding: '0 20px', paddingBottom: 100 }}>
        {/* La pregunta original */}
        <div style={{
          background: '#fff', borderRadius: 24, padding: 18, marginBottom: 16,
          boxShadow: '0 1px 2px rgba(46,42,38,0.03), 0 6px 16px rgba(46,42,38,0.04)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <ComAvatar name={q.author} color={q.authorColor} size={40} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2 }}>
                {q.author}
              </div>
              <div style={{ fontSize: 11.5, color: KUN.inkMuted, fontWeight: 600, marginTop: 1 }}>
                {q.role} · {q.time}
              </div>
            </div>
          </div>
          <div style={{
            fontSize: 11, fontWeight: 700, color: KUN.sage,
            letterSpacing: 0.5, marginBottom: 6,
          }}>{q.category.toUpperCase()}</div>
          <div style={{
            fontSize: 17, fontWeight: 800, color: KUN.ink, letterSpacing: -0.3,
            lineHeight: 1.25, marginBottom: 8, textWrap: 'pretty',
          }}>{q.title}</div>
          <div style={{
            fontSize: 14, color: KUN.inkSoft, fontWeight: 500,
            lineHeight: 1.5, textWrap: 'pretty',
          }}>{q.text}</div>
          <PostActions likes={q.likes} replies={q.replies} />
        </div>

        {/* Respuestas */}
        <div style={{
          padding: '0 8px 10px', fontSize: 12, fontWeight: 700,
          color: KUN.inkMuted, letterSpacing: 0.6,
        }}>
          {q.answers.length} {q.answers.length === 1 ? 'RESPUESTA' : 'RESPUESTAS'}
        </div>

        {q.answers.length === 0 ? (
          <div style={{
            background: '#fff', borderRadius: 22,
            padding: '22px 18px', textAlign: 'center',
            border: `1.5px dashed ${KUN.inkFaint}`,
            marginBottom: 16,
          }}>
            <div style={{ fontSize: 28, marginBottom: 6 }}>💬</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: KUN.ink, marginBottom: 4 }}>
              Aún no hay respuestas
            </div>
            <div style={{ fontSize: 12, color: KUN.inkMuted, fontWeight: 500, lineHeight: 1.4, textWrap: 'pretty' }}>
              Sé la primera en responder y acompañar a {q.author}.
            </div>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
            {q.answers.map((a, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 20, padding: '14px 16px',
                boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  {a.anonymous ? (
                    <div style={{
                      width: 32, height: 32, borderRadius: 16,
                      background: KUN.cardSoft,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 14, color: KUN.inkMuted,
                    }}>?</div>
                  ) : (
                    <ComAvatar name={a.author} color={a.color} size={32} />
                  )}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 13, fontWeight: 800, color: a.anonymous ? KUN.inkMuted : KUN.ink,
                      letterSpacing: -0.1, fontStyle: a.anonymous ? 'italic' : 'normal',
                    }}>{a.author}</div>
                    <div style={{ fontSize: 11, color: KUN.inkMuted, fontWeight: 600 }}>{a.time}</div>
                  </div>
                </div>
                <div style={{
                  fontSize: 13.5, color: KUN.ink, fontWeight: 500,
                  lineHeight: 1.5, textWrap: 'pretty',
                }}>{a.text}</div>
              </div>
            ))}
          </div>
        )}

        {/* Composer de respuesta */}
        <div style={{
          background: '#fff', borderRadius: 22, padding: 14,
          boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
        }}>
          {replyPosted ? (
            <div style={{
              padding: '14px 4px', textAlign: 'center',
              fontSize: 14, fontWeight: 800, color: KUN.sage, lineHeight: 1.5,
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
                  width: '100%', minHeight: 72, border: 'none', outline: 'none',
                  resize: 'none', fontFamily: 'inherit',
                  fontSize: 14, color: KUN.ink, fontWeight: 500,
                  background: KUN.cardSoft, borderRadius: 12,
                  padding: '10px 12px', boxSizing: 'border-box',
                  lineHeight: 1.5, marginBottom: 12,
                }}
              />
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                paddingTop: 12, borderTop: `1px dashed ${KUN.divider}`,
              }}>
                <div onClick={() => setReplyAnon(a => !a)} style={{
                  display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer',
                }}>
                  <div style={{
                    width: 22, height: 22, borderRadius: 6,
                    border: `1.5px solid ${replyAnon ? KUN.accent : KUN.inkFaint}`,
                    background: replyAnon ? KUN.accent : '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'all .2s',
                  }}>
                    {replyAnon && KIcon.check('#fff')}
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 700, color: KUN.inkSoft }}>
                    Responder anónimamente
                  </span>
                </div>
                <button onClick={handleReply} style={{
                  padding: '9px 18px', borderRadius: 999, border: 'none',
                  background: replyText.trim() ? KUN.accent : KUN.cardSoft,
                  color: replyText.trim() ? '#fff' : KUN.inkMuted,
                  fontFamily: 'inherit', fontSize: 13, fontWeight: 800,
                  cursor: replyText.trim() ? 'pointer' : 'default',
                  boxShadow: replyText.trim() ? '0 4px 10px rgba(201,123,90,0.3)' : 'none',
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
    author: 'Mariana', color: KUN.accent, role: 'Mamá de Sofía',
    short: 'El proceso más largo de mi vida empezó un día 17 de enero del 2025 🩵 Aún no termina pero ya casi lo logramos 🥹 Ya casi se acaban las vueltas de chequeos.',
    long: ' Sin imaginarlo, antes de tiempo, estás ahí con el miedo inundándote y con la casi nula posibilidad de escuchar llorar a tu bebé, de abrazarlo, darle un beso y llevarlo contigo…',
    time: 'Hace 2 h',
    likes: 47, replies: 9,
  },
];

function ExperienceCard({ e }) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div style={{
      background: '#fff', borderRadius: 24, padding: 18, marginBottom: 10,
      boxShadow: '0 1px 2px rgba(46,42,38,0.03), 0 6px 16px rgba(46,42,38,0.04)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
        <ComAvatar name={e.author} color={e.color} size={40} />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2 }}>
            {e.author}
          </div>
          <div style={{ fontSize: 11.5, color: KUN.inkMuted, fontWeight: 600, marginTop: 1 }}>
            {e.role} · {e.time}
          </div>
        </div>
        <span style={{
          padding: '4px 10px', borderRadius: 999,
          background: KUN.sageSoft, color: KUN.sage,
          fontSize: 10.5, fontWeight: 800, letterSpacing: 0.4,
          flexShrink: 0,
        }}>EXPERIENCIA</span>
      </div>

      <div style={{
        fontSize: 14, color: KUN.ink, fontWeight: 500,
        lineHeight: 1.55, textWrap: 'pretty',
      }}>
        {e.short}
        {expanded && <span>{e.long}</span>}
      </div>
      {!expanded && e.long && (
        <span onClick={() => setExpanded(true)} style={{
          display: 'inline-block', marginTop: 8,
          fontSize: 13, fontWeight: 800, color: KUN.accent,
          cursor: 'pointer', letterSpacing: -0.1,
        }}>Mostrar más</span>
      )}

      <PostActions likes={e.likes} replies={e.replies} />
    </div>
  );
}

function QuestionsFeed({ onOpen }) {
  return (
    <div style={{ padding: '0 20px' }}>
      {QUESTIONS.map(q => <QuestionCard key={q.id} q={q} onOpen={onOpen} />)}
    </div>
  );
}

function ExperiencesFeed() {
  return (
    <div style={{ padding: '0 20px' }}>
      {EXPERIENCES.map(e => <ExperienceCard key={e.id} e={e} />)}
    </div>
  );
}

// ── New post sheet (bottom sheet simulado en pantalla) ──
function NewPostSheet({ onClose, defaultKind = 'question' }) {
  const [kind, setKind] = React.useState(defaultKind);
  const [anon, setAnon] = React.useState(false);
  const [posted, setPosted] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const canPublish = kind === 'question' ? (title.trim() && body.trim()) : body.trim();

  const handlePublish = () => {
    if (!canPublish) return;
    setPosted(true);
    setTimeout(onClose, 1600);
  };

  const sharedInputStyle = {
    width: '100%', border: 'none', outline: 'none', resize: 'none',
    fontFamily: 'inherit', fontSize: 14, fontWeight: 500,
    color: KUN.ink, background: 'transparent', lineHeight: 1.5,
    boxSizing: 'border-box', padding: 0,
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 200,
      background: 'rgba(46,42,38,0.4)',
      display: 'flex', alignItems: 'flex-end',
    }}>
      <div style={{
        width: '100%', background: KUN.bg,
        borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding: '14px 20px 28px',
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
          <div style={{ fontSize: 18, fontWeight: 800, color: KUN.ink, letterSpacing: -0.3 }}>
            Nueva publicación
          </div>
          <span onClick={onClose} style={{
            fontSize: 13, fontWeight: 700, color: KUN.inkSoft, cursor: 'pointer',
          }}>Cancelar</span>
        </div>

        {/* Kind picker */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
          {[
            { id: 'question',   label: 'Pregunta' },
            { id: 'experience', label: 'Experiencia' },
          ].map(t => {
            const isA = t.id === kind;
            return (
              <div key={t.id} onClick={() => { setKind(t.id); setTitle(''); setBody(''); }} style={{
                flex: 1, textAlign: 'center', cursor: 'pointer',
                padding: '11px 6px', borderRadius: 999,
                background: isA ? KUN.accent : '#fff',
                color: isA ? '#fff' : KUN.inkSoft,
                fontSize: 13, fontWeight: 800, letterSpacing: -0.1,
                boxShadow: isA ? '0 4px 10px rgba(201,123,90,0.3)' : '0 1px 2px rgba(46,42,38,0.03)',
                transition: 'all .2s',
              }}>{t.label}</div>
            );
          })}
        </div>

        {/* Form */}
        <div style={{
          background: '#fff', borderRadius: 20, padding: 16, marginBottom: 14,
          boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
          flex: 1, overflowY: 'auto',
        }}>
          {kind === 'question' && (
            <input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Título de tu pregunta…"
              style={{
                ...sharedInputStyle,
                fontSize: 15, fontWeight: 700,
                paddingBottom: 14, marginBottom: 14,
                borderBottom: `1px dashed ${KUN.divider}`,
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
        </div>

        <div onClick={() => setAnon(a => !a)} style={{
          display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
          padding: '0 4px 14px',
        }}>
          <div style={{
            width: 22, height: 22, borderRadius: 6,
            border: `1.5px solid ${anon ? KUN.accent : KUN.inkFaint}`,
            background: anon ? KUN.accent : '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all .2s',
          }}>
            {anon && KIcon.check('#fff')}
          </div>
          <span style={{ fontSize: 13, fontWeight: 700, color: KUN.inkSoft }}>
            Publicar de forma anónima
          </span>
        </div>

        {posted ? (
          <div style={{
            width: '100%', padding: '16px 18px', borderRadius: 18,
            background: KUN.sageSoft,
            textAlign: 'center',
            fontSize: 15, fontWeight: 800, color: KUN.sage,
            letterSpacing: -0.2,
          }}>¡Publicado con éxito! 🎉</div>
        ) : (
          <button onClick={handlePublish} style={{
            width: '100%', padding: '14px 18px', borderRadius: 18, border: 'none',
            background: canPublish ? KUN.accent : KUN.cardSoft,
            color: canPublish ? '#fff' : KUN.inkMuted,
            fontFamily: 'inherit', fontSize: 14.5, fontWeight: 800, letterSpacing: 0.1,
            cursor: canPublish ? 'pointer' : 'default',
            boxShadow: canPublish ? '0 8px 18px rgba(201,123,90,0.35)' : 'none',
            transition: 'all .2s',
          }}>Publicar</button>
        )}
      </div>
    </div>
  );
}

function CommunityView({ onNew }) {
  const [sub, setSub] = React.useState('questions');
  const [openQ, setOpenQ] = React.useState(null);

  if (openQ) {
    return <QuestionThread qId={openQ} onBack={() => setOpenQ(null)} />;
  }

  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <div style={{ paddingBottom: 100 }}>
        <CommunityInnerTabs active={sub} onChange={setSub} />
        {sub === 'questions'
          ? <QuestionsFeed onOpen={setOpenQ} />
          : <ExperiencesFeed />}
      </div>

      {/* FAB nueva publicación */}
      <button onClick={() => onNew(sub)} style={{
        position: 'absolute', bottom: 14, right: 20,
        width: 58, height: 58, borderRadius: 29, border: 'none',
        background: KUN.accent, color: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 18px rgba(201,123,90,0.4)', cursor: 'pointer',
        zIndex: 5,
      }}>
        {COM_ICONS.plus('#fff')}
      </button>
    </div>
  );
}

// ╔══════════════════════════════════════════════════════╗
// ║                  PUBLIC ENTRY                         ║
// ╚══════════════════════════════════════════════════════╝

function ScreenComunidad() {
  const [tab, setTab] = React.useState('chat'); // chat | community
  const [chatView, setChatView] = React.useState('list'); // list | new | thread
  const [activeChat, setActiveChat] = React.useState(null);
  const [newPost, setNewPost] = React.useState(null); // null | 'question' | 'experience'

  return (
    <>
      <ComTopTabs active={tab} onChange={(t) => {
        setTab(t);
        setChatView('list');
        setActiveChat(null);
      }} />

      {tab === 'chat' && (
        <>
          {chatView === 'list' && (
            <ChatList
              onOpenChat={(id) => { setActiveChat(id); setChatView('thread'); }}
              onNew={() => setChatView('new')}
            />
          )}
          {chatView === 'new' && (
            <NewConversation
              onBack={() => setChatView('list')}
              onPick={(id) => { setActiveChat(id); setChatView('thread'); }}
            />
          )}
          {chatView === 'thread' && activeChat && (
            <ChatThread
              profId={activeChat}
              onBack={() => { setChatView('list'); setActiveChat(null); }}
            />
          )}
        </>
      )}

      {tab === 'community' && (
        <CommunityView onNew={(kind) => setNewPost(kind === 'experiences' ? 'experience' : 'question')} />
      )}

      {newPost && (
        <NewPostSheet
          defaultKind={newPost}
          onClose={() => setNewPost(null)}
        />
      )}
    </>
  );
}

window.ScreenComunidad = ScreenComunidad;
