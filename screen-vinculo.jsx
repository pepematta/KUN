// Vínculo section — entry, Diario de vida, Actividades con mi hijo.
// Applies KUN Design System v2: Quicksand titles, Poppins body, Brick CTAs,
// hairline cards, DS palette per category, decorative half-moon shapes.

const V_FT = 'Quicksand, sans-serif';
const V_FB = 'Poppins, sans-serif';

const VINK_ICONS = {
  journey: (c) => (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
      <path d="M5 22 C 8 16, 12 14, 16 16 C 20 18, 24 16, 27 10"
        stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="5" cy="22" r="2" fill={c}/>
      <path d="M27 10 L 25 8 M27 10 L 25 12" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="1.5" fill={c}/>
    </svg>
  ),
  music: (c) => (
    <svg width="34" height="34" viewBox="0 0 32 32" fill="none">
      <path d="M12 22V8L24 6V20" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse cx="9.5" cy="22" rx="3.5" ry="2.6" stroke={c} strokeWidth="2"/>
      <ellipse cx="21.5" cy="20" rx="3.5" ry="2.6" stroke={c} strokeWidth="2"/>
    </svg>
  ),
  camera: (c) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 8C4 7 5 6 6 6H8L9.5 4H14.5L16 6H18C19 6 20 7 20 8V17C20 18 19 19 18 19H6C5 19 4 18 4 17V8Z"
        stroke={c} strokeWidth="1.7" strokeLinejoin="round"/>
      <circle cx="12" cy="12.5" r="3.5" stroke={c} strokeWidth="1.7"/>
    </svg>
  ),
  mic: (c, fill) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill={fill || 'none'}>
      <rect x="7" y="3" width="6" height="10" rx="3" fill={fill || c} stroke={fill ? 'none' : c} strokeWidth="1.7"/>
      <path d="M4 10C4 13.3 6.7 16 10 16C13.3 16 16 13.3 16 10" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M10 16V18M7 18H13" stroke={c} strokeWidth="1.7" strokeLinecap="round"/>
    </svg>
  ),
  text: (c) => (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M4 5H16M4 10H16M4 15H12" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  back: (c) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 4L6 10L12 16" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  play: (c, size = 14) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill={c}>
      <path d="M4 2.5L11 7L4 11.5V2.5Z"/>
    </svg>
  ),
  pause: (c, size = 14) => (
    <svg width={size} height={size} viewBox="0 0 14 14" fill={c}>
      <rect x="3.5" y="2.5" width="2.5" height="9" rx="1"/>
      <rect x="8" y="2.5" width="2.5" height="9" rx="1"/>
    </svg>
  ),
  plus: (c) => (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <path d="M11 4V18M4 11H18" stroke={c} strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
};

// ── Decorative shapes (DS pattern) ────────────────────
function VinkShapes() {
  return (
    <>
      <div style={{
        position:'absolute', top: -60, right: -80,
        width: 200, height: 200, borderRadius:'50%',
        background: KUN.rosehip, opacity: 0.18,
        pointerEvents:'none', zIndex: 0,
      }}/>
      <div style={{
        position:'absolute', bottom: 60, left: -100,
        width: 220, height: 220, borderRadius:'50%',
        background: KUN.viola, opacity: 0.16,
        pointerEvents:'none', zIndex: 0,
      }}/>
    </>
  );
}

// ── Entry ───────────────────────────────────────────────
function VinkEntry({ onPick, babyName = 'Sofía' }) {
  const childName = babyName || 'tu bebé';
  return (
    <div style={{ position:'relative', padding: '6px 20px 0', overflowX: 'hidden', maxWidth: '100%', boxSizing: 'border-box' }}>
      <VinkShapes/>

      <div style={{ position:'relative', zIndex: 1 }}>
        <div style={{ padding: '10px 4px 18px' }}>
          <div style={{
            fontFamily: V_FT, fontSize: 24, fontWeight: 700, color: KUN.ink,
            letterSpacing: -0.4, lineHeight: 1.2,
          }}>
            Acércate a {childName}
          </div>
          <div style={{
            fontFamily: V_FB, fontSize: 14, color: KUN.inkSoft, fontWeight: 400, marginTop: 8,
            lineHeight: 1.5,
          }}>
            Construyan juntos una memoria de estos días.
          </div>
        </div>

        {/* Featured card — Diario de vida */}
        <div onClick={() => onPick('journey')} style={{
          background: KUN.brick, borderRadius: 30, padding: '24px 22px',
          color:'#fff', cursor:'pointer', position:'relative', overflow:'hidden',
          marginBottom: 14,
        }}>
          <div style={{ position:'absolute', top:-40, right:-40, width: 180, height: 180, borderRadius:'50%', background:'rgba(255,255,255,0.10)' }}/>
          <div style={{ position:'absolute', bottom:-60, left:-30, width: 140, height: 140, borderRadius:'50%', background:'rgba(255,255,255,0.08)' }}/>
          <div style={{
            width: 60, height: 60, borderRadius: 20,
            background:'rgba(255,255,255,0.20)',
            display:'flex', alignItems:'center', justifyContent:'center',
            marginBottom: 16, position:'relative',
          }}>{VINK_ICONS.journey('#fff')}</div>
          <div style={{
            fontFamily: V_FT, fontSize: 24, fontWeight: 700,
            letterSpacing: -0.4, marginBottom: 4, position:'relative',
          }}>
            Diario de vida
          </div>
          <div style={{
            fontFamily: V_FB, fontSize: 13.5, fontWeight: 400, opacity: 0.92, position:'relative',
          }}>
            Registra tus momentos
          </div>
        </div>

        {/* Standard card — Actividades con mi hijo */}
        <div onClick={() => onPick('activities')} style={{
          background:'#fff', borderRadius: 30, padding: '24px 22px',
          cursor:'pointer', position:'relative', overflow:'hidden',
          border: `1px solid ${KUN.hair}`,
        }}>
          <div style={{ position:'absolute', top:-30, right:-30, width: 130, height: 130, borderRadius:'50%', background: KUN.apple, opacity: 0.40 }}/>
          <div style={{
            width: 60, height: 60, borderRadius: 20,
            background: KUN.apple,
            display:'flex', alignItems:'center', justifyContent:'center',
            marginBottom: 16, position:'relative',
          }}>{VINK_ICONS.music(KUN.ink)}</div>
          <div style={{
            fontFamily: V_FT, fontSize: 22, fontWeight: 700,
            letterSpacing: -0.4, marginBottom: 4, position:'relative', color: KUN.ink,
          }}>
            Actividades con mi hijo
          </div>
          <div style={{
            fontFamily: V_FB, fontSize: 13.5, fontWeight: 400, color: KUN.inkSoft, position:'relative',
          }}>
            Tu voz y la música que la calma
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Sub-section header (back + title) ───────────────────
function SubHeader({ title, onBack }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap: 12, padding: '4px 20px 14px' }}>
      <div onClick={onBack} style={{
        width: 40, height: 40, borderRadius: '50%', background: '#fff',
        display:'flex', alignItems:'center', justifyContent:'center',
        border: `1px solid ${KUN.hair}`, cursor:'pointer',
      }}>{VINK_ICONS.back(KUN.ink)}</div>
      <div style={{ fontFamily: V_FT, fontSize: 22, fontWeight: 700, color: KUN.ink, letterSpacing: -0.4 }}>
        {title}
      </div>
    </div>
  );
}

// ── Diario de vida ───────────────────────────────────────
function ShareMemoryBar() {
  const networks = ['WhatsApp', 'Facebook', 'Instagram', 'Gmail'];
  return (
    <div style={{
      margin: '0 20px 14px',
      background: '#fff',
      borderRadius: 22,
      padding: '14px 16px',
      border: `1px solid ${KUN.hair}`,
    }}>
      <div style={{
        fontFamily: V_FT, fontSize: 14, fontWeight: 700, color: KUN.ink,
        letterSpacing: -0.1, marginBottom: 10,
      }}>
        Compartir recuerdos
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 8 }}>
        {networks.map(n => (
          <button key={n} onClick={() => {
            const msg = encodeURIComponent('Quiero compartir un recuerdo de estos dias en KUN.');
            if (n === 'WhatsApp') window.open(`https://wa.me/?text=${msg}`, '_blank');
            if (n === 'Facebook') window.open('https://www.facebook.com/sharer/sharer.php', '_blank');
            if (n === 'Instagram') alert('Instagram se abre desde la app del telefono para compartir el recuerdo.');
            if (n === 'Gmail') window.open(`mailto:?subject=Recuerdo KUN&body=${msg}`, '_blank');
          }} style={{
            padding: '10px 8px',
            borderRadius: 999,
            border: `1px solid ${KUN.hair}`,
            background: KUN.cardSoft,
            fontFamily: V_FT,
            fontSize: 12.5,
            fontWeight: 700,
            color: KUN.ink,
            cursor: 'pointer',
          }}>
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}

function ReadOnlyDiaryNotice() {
  return (
    <div style={{
      margin: '0 20px 14px',
      background: KUN.cardSoft,
      borderRadius: 22,
      padding: '14px 16px',
      border: `1px solid ${KUN.hair}`,
      fontFamily: V_FB,
      fontSize: 12.5,
      lineHeight: 1.5,
      color: KUN.inkSoft,
    }}>
      Solo mama y papa pueden editar el diario de vida. Abuelos, familiares e invitados externos pueden mirar los momentos compartidos.
    </div>
  );
}

function ActivityCard({ onOpenSheet, onOpenRecorder, onOpenSiblingRecorder, canEdit }) {
  return (
    <div style={{
      margin: '0 20px 14px',
      background: '#fff', borderRadius: 26,
      padding: '18px 18px 16px',
      border: `1px solid ${KUN.hair}`,
      position:'relative', overflow:'hidden',
    }}>
      <div style={{
        display:'inline-flex', alignItems:'center', gap: 6,
        padding: '5px 11px', borderRadius: 999,
        background: KUN.sun, color: KUN.ink,
        fontFamily: V_FT, fontSize: 11, fontWeight: 700, letterSpacing: 0.4, marginBottom: 12,
      }}>
        ACTIVIDAD DEL DÍA
      </div>
      <div style={{
        fontFamily: V_FT, fontSize: 19, fontWeight: 700, color: KUN.ink,
        letterSpacing: -0.3, lineHeight: 1.25, marginBottom: 6,
      }}>
        La mano de tu bebé junto a la tuya
      </div>
      <div style={{
        fontFamily: V_FB, fontSize: 13, color: KUN.inkSoft, fontWeight: 400,
        lineHeight: 1.55, marginBottom: 14,
      }}>
        Toma una foto donde se vean sus deditos sobre tu mano, o cuéntale en voz qué sentiste al mirarlos.
      </div>
      <div style={{ display:'flex', gap: 8 }}>
        <button disabled={!canEdit} onClick={onOpenSheet} style={{ ...btnPrimary, opacity: canEdit ? 1 : 0.55, cursor: canEdit ? 'pointer' : 'not-allowed' }}>{VINK_ICONS.camera('#fff')}<span style={{ marginLeft: 6 }}>Subir foto</span></button>
        <button disabled={!canEdit} onClick={onOpenSheet} style={{ ...btnGhost, opacity: canEdit ? 1 : 0.55, cursor: canEdit ? 'pointer' : 'not-allowed' }}>{VINK_ICONS.text(KUN.ink)}</button>
        <button disabled={!canEdit} onClick={onOpenRecorder} style={{ ...btnGhost, opacity: canEdit ? 1 : 0.55, cursor: canEdit ? 'pointer' : 'not-allowed' }}>{VINK_ICONS.mic(KUN.ink)}</button>
      </div>
      {canEdit && (
        <button onClick={onOpenSiblingRecorder} style={{
          width: '100%', marginTop: 10,
          padding: '11px 14px', borderRadius: 999,
          border: `1px solid ${KUN.hair}`,
          background: KUN.viola,
          fontFamily: V_FT, fontSize: 13, fontWeight: 700,
          color: KUN.ink, cursor: 'pointer',
        }}>
          Que un hermanito grabe algo
        </button>
      )}
      </div>
  );
}

const btnPrimary = {
  flex: 1, padding: '11px 14px', height: 42, borderRadius: 999, border:'none',
  background: KUN.brick, color:'#fff',
  fontFamily: V_FT, fontSize: 13.5, fontWeight: 700, letterSpacing: -0.1,
  display:'flex', alignItems:'center', justifyContent:'center',
  cursor:'pointer',
};
const btnGhost = {
  width: 42, height: 42, borderRadius: '50%', border: `1px solid ${KUN.hair}`,
  background: '#fff', color: KUN.ink,
  display:'flex', alignItems:'center', justifyContent:'center',
  cursor:'pointer',
};

function FeedSeparator({ label }) {
  return (
    <div style={{
      display:'flex', alignItems:'center', justifyContent:'center',
      padding: '6px 20px 14px',
    }}>
      <span style={{
        padding: '5px 12px', borderRadius: 999,
        background: KUN.cardSoft, color: KUN.inkMuted,
        fontFamily: V_FT, fontSize: 11, fontWeight: 700, letterSpacing: 0.5,
      }}>{label}</span>
    </div>
  );
}

function Avatar({ name, color }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div style={{
      width: 36, height: 36, borderRadius: '50%',
      background: color, color: KUN.ink,
      display:'flex', alignItems:'center', justifyContent:'center',
      fontFamily: V_FT, fontSize: 14, fontWeight: 700, flexShrink: 0,
    }}>{initial}</div>
  );
}

function FeedEntry({ author, role, color, time, kind, content, imageSrc, isVoice, duration }) {
  return (
    <div style={{
      margin: '0 20px 12px',
      display:'flex', gap: 10, alignItems:'flex-end',
    }}>
      <Avatar name={author} color={color} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display:'flex', alignItems:'baseline', gap: 8, marginBottom: 4, paddingLeft: 4 }}>
          <span style={{ fontFamily: V_FT, fontSize: 13, fontWeight: 700, color: KUN.ink }}>{author}</span>
          <span style={{ fontFamily: V_FB, fontSize: 11, color: KUN.inkMuted, fontWeight: 400 }}>{role} · {time}</span>
        </div>
        <div style={{
          background:'#fff', borderRadius: 20, borderTopLeftRadius: 6,
          padding: kind === 'photo' ? 6 : '12px 14px',
          border: `1px solid ${KUN.hair}`,
        }}>
          {kind === 'photo' && (
            <>
              {imageSrc ? (
                <img src={imageSrc} alt="" style={{
                  width: '100%', height: 150, borderRadius: 16,
                  objectFit: 'cover', display: 'block', marginBottom: content ? 8 : 0,
                }} />
              ) : (
                <div style={{
                  height: 150, borderRadius: 16,
                  background: `repeating-linear-gradient(135deg, ${KUN.rosehip} 0 8px, #F8E9DD 8px 16px)`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily: V_FB, fontSize: 11, color: KUN.ink,
                  fontWeight: 500, marginBottom: 8,
                }}>foto · abuela y Sofía</div>
              )}
              {content && (
                <div style={{
                  fontFamily: V_FB, fontSize: 13.5, color: KUN.ink, fontWeight: 400,
                  padding: '0 8px 8px', lineHeight: 1.5,
                }}>
                  {content}
                </div>
              )}
            </>
          )}
          {kind === 'text' && (
            <div style={{
              fontFamily: V_FB, fontSize: 13.5, color: KUN.ink, fontWeight: 400, lineHeight: 1.5,
            }}>
              {content}
            </div>
          )}
          {kind === 'voice' && (
            <div style={{ display:'flex', alignItems:'center', gap: 10, minWidth: 180 }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', background: KUN.brick,
                display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
              }}>{VINK_ICONS.play('#fff', 12)}</div>
              <svg width="120" height="22" viewBox="0 0 120 22" style={{ flex: 1 }}>
                {Array.from({length: 28}).map((_, i) => {
                  const h = 4 + Math.abs(Math.sin(i * 0.7 + (isVoice ? 1 : 0))) * 14;
                  return <rect key={i} x={i * 4.2} y={(22 - h) / 2} width="2.4" height={h} rx="1.2" fill={KUN.brick} opacity={i < 10 ? 1 : 0.4}/>;
                })}
              </svg>
              <span style={{ fontFamily: V_FT, fontSize: 11, fontWeight: 700, color: KUN.inkMuted, flexShrink: 0 }}>
                {duration || '0:34'}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function AddEntrySheet({ onClose, onPickPhoto, onPickText, onPickVoice }) {
  const opts = [
    { id:'photo', label:'Subir foto',  desc:'Captura un momento del día',     icon: VINK_ICONS.camera, color: KUN.rosehip },
    { id:'text',  label:'Escribir nota', desc:'Una palabra, una frase, lo que sientas', icon: VINK_ICONS.text,  color: KUN.apple },
    { id:'voice', label:'Grabar voz', desc:'Háblale, léele o cántale a Sofía', icon: VINK_ICONS.mic,   color: KUN.viola },
  ];
  return (
    <div onClick={onClose} style={{
      position:'absolute', inset: 0, zIndex: 200,
      background:'rgba(42,35,32,0.4)',
      display:'flex', alignItems:'flex-end',
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width:'100%', background: KUN.bg,
        borderTopLeftRadius: 28, borderTopRightRadius: 28,
        padding:'14px 20px 28px',
      }}>
        <div style={{
          width: 44, height: 5, borderRadius: 3, background: KUN.inkFaint,
          margin:'0 auto 14px',
        }}/>
        <div style={{
          display:'flex', alignItems:'center', justifyContent:'space-between',
          marginBottom: 14,
        }}>
          <div style={{ fontFamily: V_FT, fontSize: 19, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3 }}>
            Agregar al diario
          </div>
          <span onClick={onClose} style={{
            fontFamily: V_FT, fontSize: 13, fontWeight: 700, color: KUN.brick, cursor:'pointer',
          }}>Cancelar</span>
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
          {opts.map(o => (
            <div key={o.id}
              onClick={() => {
                if (o.id === 'voice') onPickVoice();
                else if (o.id === 'text') onPickText();
                else if (o.id === 'photo') onPickPhoto();
                else onClose();
              }}
              style={{
                background:'#fff', borderRadius: 22, padding:'14px 16px',
                display:'flex', alignItems:'center', gap: 14, cursor:'pointer',
                border: `1px solid ${KUN.hair}`,
              }}>
              <div style={{
                width: 46, height: 46, borderRadius: 14, background: o.color,
                display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
              }}>{o.icon(KUN.ink)}</div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontFamily: V_FT, fontSize: 15, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1,
                }}>{o.label}</div>
                <div style={{
                  fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400, marginTop: 3,
                }}>{o.desc}</div>
              </div>
              {KIcon.chevRight(KUN.inkFaint)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const DIARY_PHOTOS = [
  { src: 'premature.jpg', title: 'Hoy', date: '20 Junio 2026' },
  { src: 'tens2.webp', title: 'Hace 1 mes', date: '20 Mayo 2026' },
  { src: 'tens.avif', title: 'Primer dibujo', date: '17 Junio 2026' },
];

const DIARY_TEXT = 'Hoy fuimos orem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut pulvinar ante, nec cursus lorem. Donec tellus nisl, tincidunt ut risus nec, dignissim sollicitudin mauris.';
const DIARY = {
  bg: KUN.bg,
  panel: '#fff',
  panelDark: KUN.sun,
  audio: KUN.brick,
  icon: KUN.inkMuted,
  nav: KUN.cardSoft,
  ink: KUN.ink,
  muted: KUN.inkMuted,
  overlay: KUN.inkSoft,
};
const DIARY_ENTRIES_KEY = 'kun_diary_entries_v1';

function DiaryIconButton({ children, onClick, muted = false }) {
  return (
    <button onClick={onClick} style={{
      width: 40, height: 40, borderRadius: '50%', border: `1px solid ${KUN.hair}`,
      background: muted ? '#fff' : DIARY.audio,
      display:'flex', alignItems:'center', justifyContent:'center',
      cursor:'pointer', color: muted ? DIARY.muted : '#fff', flexShrink: 0,
      boxShadow: muted ? 'none' : '0 8px 18px rgba(240,116,62,0.24)',
    }}>
      {children}
    </button>
  );
}

function DiaryAudioBar({ duration = '01:09', compact = false }) {
  return (
    <div style={{
      height: compact ? 38 : 42, borderRadius: 18, background: KUN.inkSoft,
      display:'flex', alignItems:'center', gap: compact ? 5 : 6,
      padding: compact ? '0 7px' : '0 8px', boxSizing:'border-box',
      color: '#fff', minWidth: 0,
      border: 'none',
    }}>
      <div style={{
        width: compact ? 26 : 28, height: compact ? 26 : 28, borderRadius:'50%',
        background: KUN.cardSoft, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
      }}>
        <svg width={compact ? 15 : 17} height={compact ? 15 : 17} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="4" fill={KUN.inkMuted}/>
          <path d="M4.5 21C5.5 16.5 8.5 14.5 12 14.5C15.5 14.5 18.5 16.5 19.5 21" fill={KUN.inkMuted}/>
        </svg>
      </div>
      <div style={{
        width: compact ? 26 : 28, height: compact ? 26 : 28, borderRadius:'50%',
        background: '#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0,
      }}>
        {VINK_ICONS.play(KUN.brick, compact ? 10 : 11)}
      </div>
      <svg viewBox="0 0 112 28" style={{ flex: 1, height: compact ? 18 : 20, minWidth: 0 }}>
        {Array.from({length: 28}).map((_, i) => {
          const h = 5 + Math.abs(Math.sin(i * 0.76)) * 20;
          return <rect key={i} x={i * 4} y={(28 - h) / 2} width="2.3" height={h} rx="1.15" fill="#fff" opacity={i < 23 ? 0.95 : 0.45}/>;
        })}
      </svg>
      <span style={{ fontFamily: V_FT, fontSize: compact ? 12 : 13, fontWeight: 700, color: '#fff', flexShrink:0 }}>
        {duration}
      </span>
    </div>
  );
}

function DiaryMetricPill({ type = 'photo', count }) {
  const isAudio = type === 'audio';
  return (
    <div style={{
      height: 34, minWidth: 72, borderRadius: 999, background: KUN.inkSoft,
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      gap: 7, padding:'0 10px', boxSizing:'border-box',
      fontFamily: V_FT, fontSize: 16, fontWeight: 700, color: '#fff',
      border: 'none',
    }}>
      {isAudio ? (
        <svg width="28" height="17" viewBox="0 0 54 20">
          {Array.from({length: 12}).map((_, i) => (
            <rect key={i} x={i * 4.4} y={3 + (i % 3)} width="2.4" height={14 - (i % 3) * 2} rx="1" fill="#fff"/>
          ))}
        </svg>
      ) : (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="5" width="16" height="14" rx="2" stroke="#fff" strokeWidth="1.8"/>
          <path d="M6.5 16L10 12.5L12.5 15L15 12L18 16" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16.5" cy="8.5" r="1.3" fill="#fff"/>
        </svg>
      )}
      {count}
    </div>
  );
}

function DiaryListEntry({ title, text, photos = [], photoCount = 5, audioCount = 2, imageLayout = 'default', onOpen }) {
  const visiblePhotos = photos.slice(0, 3);
  const referenceLayout = imageLayout === 'reference';
  return (
    <div onClick={onOpen} style={{
      margin: '0 16px 14px', background: KUN.cardSoft, borderRadius: 14,
      minHeight: 116, padding: '14px 14px 12px',
      display:'grid', gridTemplateColumns:'1fr 132px', gap: 12,
      cursor:'pointer', boxSizing:'border-box',
      border: `1px solid ${KUN.hair}`,
    }}>
      <div style={{ minWidth: 0 }}>
        <div style={{ fontFamily: V_FT, fontSize: 19, fontWeight: 700, color: DIARY.ink, marginBottom: 4, letterSpacing: 0, lineHeight: 1.05 }}>
          {title}
        </div>
        <div style={{ fontFamily: V_FB, fontSize: 15.5, color: KUN.ink, lineHeight: 1.24, maxHeight: 58, overflow:'hidden' }}>
          {text}
        </div>
        <div style={{ display:'flex', gap: 7, marginTop: 10 }}>
          <DiaryMetricPill type="photo" count={photoCount}/>
          <DiaryMetricPill type="audio" count={audioCount}/>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gridTemplateRows:'1fr 1fr', gap: 5, height: 92, alignSelf:'center' }}>
        {visiblePhotos.map((p, i) => (
          <div key={i} style={{
            position:'relative', overflow:'hidden',
            borderRadius: 10, background: KUN.cardSoft,
            gridColumn: i === 0 ? '1 / 3' : 'auto',
            gridRow: referenceLayout && i === 0 ? '1 / 2' : 'auto',
          }}>
            <img src={p} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
          </div>
        ))}
        {photoCount > 3 && (
          <div style={{ position:'relative', overflow:'hidden', borderRadius: 10, background: KUN.inkSoft }}>
            <img src={photos[3] || photos[0]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', opacity: 0.42 }}/>
            <div style={{ position:'absolute', inset:0, color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontFamily: V_FT, fontSize: 22, fontWeight: 700 }}>
              +{photoCount - 2}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NoteEditorSheet({ onClose, onSave }) {
  const [text, setText] = React.useState('');
  const [tone, setTone] = React.useState(KUN.rosehip);
  const [category, setCategory] = React.useState('Momento');
  const colors = [KUN.rosehip, KUN.sun, KUN.apple, KUN.clear, KUN.viola];
  const categories = ['Momento', 'Avance', 'Emocion', 'Cuidado'];
  const save = () => {
    const clean = text.trim();
    if (!clean) return;
    onSave({
      id: Date.now(),
      kind: 'text',
      author: 'Mamá',
      role: category,
      color: tone,
      time: 'Ahora',
      content: clean,
    });
    onClose();
  };
  return (
    <div style={{ position:'absolute', inset: 0, zIndex: 220, background: 'rgba(42,35,32,0.34)', display:'flex', alignItems:'flex-end' }}>
      <div style={{ width:'100%', background: KUN.bg, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding:'14px 20px 30px', boxSizing:'border-box' }}>
        <div style={{ width: 44, height: 5, borderRadius: 3, background: KUN.inkFaint, margin:'0 auto 16px' }} />
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom: 14 }}>
          <div>
            <div style={{ fontFamily: V_FT, fontSize: 20, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3 }}>Nueva nota</div>
            <div style={{ fontFamily: V_FB, fontSize: 12, color: KUN.inkMuted, marginTop: 2 }}>Se guardará en el diario de hoy</div>
          </div>
          <button onClick={onClose} style={{ border:'none', background:'transparent', fontFamily: V_FT, fontSize: 13, fontWeight: 700, color: KUN.brick, cursor:'pointer' }}>Cancelar</button>
        </div>
        <textarea
          autoFocus
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Escribe lo que quieres recordar..."
          style={{
            width:'100%', minHeight: 154, resize:'none', boxSizing:'border-box',
            border: `1.5px solid ${KUN.hair}`, borderRadius: 22, background:'#fff',
            padding: '16px 16px', outline:'none',
            fontFamily: V_FB, fontSize: 15, color: KUN.ink, lineHeight: 1.55,
          }}
        />
        <div style={{ marginTop: 16, background:'#fff', borderRadius: 22, border: `1px solid ${KUN.hair}`, padding: 14 }}>
          <div style={diarySectionLabel}>Color de la nota</div>
          <div style={{ display:'flex', gap: 9, marginBottom: 16 }}>
            {colors.map(c => (
              <button key={c} onClick={() => setTone(c)} style={{
                width: 28, height: 28, borderRadius:'50%', background: c,
                border: tone === c ? `2px solid ${KUN.ink}` : '2px solid #fff',
                boxShadow: `0 0 0 1px ${KUN.hair}`, cursor:'pointer',
              }} />
            ))}
          </div>
          <div style={diarySectionLabel}>Categoría</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap: 8 }}>
            {categories.map(c => {
              const active = category === c;
              return (
                <button key={c} onClick={() => setCategory(c)} style={{
                  border: active ? 'none' : `1px solid ${KUN.hair}`,
                  background: active ? KUN.brick : KUN.cardSoft,
                  color: active ? '#fff' : KUN.inkSoft,
                  borderRadius: 999, padding: '8px 12px',
                  fontFamily: V_FT, fontSize: 12.5, fontWeight: 700, cursor:'pointer',
                }}>{c}</button>
              );
            })}
          </div>
        </div>
        <button onClick={save} disabled={!text.trim()} style={{
          width:'100%', marginTop: 14, height: 48, borderRadius: 999, border:'none',
          background: text.trim() ? KUN.brick : 'rgba(42,35,32,0.10)',
          color: text.trim() ? '#fff' : KUN.inkMuted,
          fontFamily: V_FT, fontSize: 15, fontWeight: 700,
          cursor: text.trim() ? 'pointer' : 'not-allowed',
        }}>Guardar nota</button>
      </div>
    </div>
  );
}

const diarySectionLabel = {
  fontFamily: V_FB,
  fontSize: 11,
  fontWeight: 600,
  color: KUN.inkMuted,
  letterSpacing: 0.7,
  textTransform: 'uppercase',
  marginBottom: 8,
};

function DiaryListView({ onBack, onOpenDay, onOpenAdd, canEditDiary, diaryEntries = [] }) {
  const entries = [
    { id:'today', title:'dfghj', date:'HOY - 20 Junio 2026', detailTitle:'Hoy', photoCount:3, audioCount:0, photos:['tens.avif','tens2.webp','premature.jpg'], text: DIARY_TEXT },
    { id:'yesterday', title:'akgsdli', date:'AYER - 19 Junio 2026', detailTitle:'Ayer', photoCount:4, audioCount:2, photos:['tens.avif','tens2.webp','premature.jpg','tens2.webp'], text: 'Ayer fue un dia de avances pequenos. Guardamos fotos, audios y recuerdos de quienes vinieron a acompanar.' },
    { id:'monday', title:'dfghj', date:'LUN - 17 Junio 2026', detailTitle:'Lun 17', photoCount:3, audioCount:0, photos:['tens.avif','tens2.webp','premature.jpg','tens2.webp'], text: 'Este dia dejamos registro de nuevas fotos y de como fue cambiando su rutina de cuidados.' },
    { id:'saturday', title:'rtgha', date:'SAB - 15 Junio 2026', detailTitle:'Sab 15', photoCount:2, audioCount:1, photos:['tens.avif','premature.jpg','tens2.webp','premature.jpg'], text: 'Un recuerdo de fin de semana para mirar despues con calma.' },
  ];
  const photoMemories = diaryEntries
    .filter(e => e.kind === 'photo' && e.imageSrc)
    .map((e, i) => ({
      src: e.imageSrc,
      title: e.role || 'Foto',
      date: e.time || 'Ahora',
      id: e.id || `photo-${i}`,
      detailTitle: 'Hoy',
      photos: [e.imageSrc, 'premature.jpg', 'tens2.webp', 'tens.avif'],
      text: e.content || 'Nuevo recuerdo guardado en el diario.',
      photoCount: 1,
      audioCount: 0,
    }));
  const memories = [
    ...photoMemories,
    ...DIARY_PHOTOS.map((item, i) => ({
      ...item,
      id: `seed-${i}`,
      detailTitle: item.title,
      photos: [item.src, i === 0 ? 'tens2.webp' : 'premature.jpg', i === 1 ? 'tens.avif' : 'tens2.webp'],
      text: i === 0 ? DIARY_TEXT : `Recuerdo guardado de ${item.date}.`,
      photoCount: i === 0 ? 5 : 3,
      audioCount: i === 0 ? 2 : 1,
    })),
  ];

  return (
    <div style={{ minHeight:'100%', background: DIARY.bg, paddingBottom: 96 }}>
      <div style={{ display:'grid', gridTemplateColumns:'42px 1fr auto', alignItems:'center', gap: 10, padding:'8px 20px 18px' }}>
        <DiaryIconButton onClick={onBack} muted>{VINK_ICONS.back(KUN.ink)}</DiaryIconButton>
        <h1 style={{ margin:0, fontFamily: V_FT, fontSize: 24, fontWeight: 700, color: KUN.ink, letterSpacing: -0.4, lineHeight:1 }}>
          Diario de vida
        </h1>
        <div style={{ height: 42, borderRadius:999, background: '#fff', border: `1px solid ${KUN.hair}`, display:'flex', alignItems:'center', gap: 16, padding:'0 14px' }}>
          <button disabled={!canEditDiary} onClick={onOpenAdd} style={{ border:'none', background:'transparent', padding:0, cursor: canEditDiary ? 'pointer' : 'not-allowed', opacity: canEditDiary ? 1 : 0.45, height: 34, display:'flex', alignItems:'center' }}>
            {VINK_ICONS.plus(KUN.brick)}
          </button>
          {KIcon.search(KUN.inkMuted)}
        </div>
      </div>

      {!canEditDiary && <ReadOnlyDiaryNotice />}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 24px 10px' }}>
        <div style={{ fontFamily: V_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted, letterSpacing: 1, textTransform:'uppercase' }}>
          Recuerdos
        </div>
        <div style={{ fontFamily: V_FT, fontSize: 12, fontWeight: 700, color: KUN.brick }}>
          {memories.length} momentos
        </div>
      </div>
      <div style={{ display:'flex', gap: 12, overflowX:'auto', padding:'0 20px 28px', scrollSnapType:'x mandatory', scrollbarWidth:'none' }}>
        {memories.map((item) => (
          <div key={item.id} onClick={() => onOpenDay(item)} style={{
            width: 166, height: 112, borderRadius: 18, overflow:'hidden',
            position:'relative', flexShrink:0, cursor:'pointer', scrollSnapAlign:'start',
            background: KUN.cardSoft, border: `1px solid ${KUN.hair}`,
          }}>
            <img src={item.src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, rgba(0,0,0,0) 28%, rgba(0,0,0,0.42) 100%)' }}/>
            <div style={{ position:'absolute', left:16, right: 14, bottom:13, color:'#fff' }}>
              <div style={{ fontFamily: V_FT, fontSize: 16, fontWeight: 700, lineHeight:1.05 }}>{item.title}</div>
              <div style={{ fontFamily: V_FB, fontSize: 12, fontWeight: 400, marginTop: 6 }}>{item.date}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontFamily: V_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted, letterSpacing: 1, textTransform:'uppercase', padding:'0 24px 10px' }}>
        Entradas
      </div>
      {diaryEntries.map((entry) => (
        <FeedEntry key={entry.id} {...entry} />
      ))}
      {entries.map((entry) => (
        <React.Fragment key={entry.date}>
          <div style={{ textAlign:'center', fontFamily: V_FB, fontSize: 16, fontWeight: 400, color:'#777', margin:'0 0 8px' }}>
            {entry.date}
          </div>
          <DiaryListEntry {...entry} text={entry.text} imageLayout={entry.id === 'today' ? 'reference' : 'default'} onOpen={() => onOpenDay(entry)} />
        </React.Fragment>
      ))}
    </div>
  );
}

function DiaryNoteLegacy({ title = 'Nota', time = '10:32 AM', content, strong, tall = false }) {
  return (
    <div style={{
      background: strong ? KUN.sun : '#fff',
      borderRadius: 20,
      padding: strong ? '14px 14px' : '14px 15px',
      boxSizing:'border-box',
      minHeight: tall ? 155 : 'auto',
      height: tall ? 155 : (strong ? 'auto' : 150),
      overflow:'hidden',
      border: `1px solid ${KUN.hair}`,
    }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap: 10, marginBottom: strong ? 0 : 2 }}>
        <div style={{ fontFamily: V_FT, fontSize: strong ? 16 : 15, fontWeight: 700, lineHeight: 1.15, color: DIARY.ink }}>
          {title}
        </div>
        <div style={{ fontFamily: V_FT, fontSize: 11.5, fontWeight: 700, color: DIARY.muted, flexShrink:0 }}>{time}</div>
      </div>
      {!strong && (
        <div style={{ fontFamily: V_FB, fontSize: 12.5, lineHeight: 1.45, color: DIARY.ink, marginTop: 8 }}>
          {content || 'Hoy te vi tranquilo y sentí que este día también merece quedar guardado.'}
        </div>
      )}
    </div>
  );
}

function DiaryNote({ title = 'Nota', time = '10:32 AM', content, strong, tall = false, onOpen }) {
  return (
    <div onClick={onOpen} style={{
      background: strong ? KUN.sun : '#fff',
      borderRadius: 20,
      padding: strong ? '14px 14px' : '14px 15px',
      boxSizing:'border-box',
      minHeight: tall ? 155 : 'auto',
      height: tall ? 155 : (strong ? 'auto' : 150),
      overflow:'hidden',
      border: `1px solid ${KUN.hair}`,
      cursor: onOpen ? 'pointer' : 'default',
    }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap: 10, marginBottom: strong ? 0 : 2 }}>
        <div style={{ fontFamily: V_FT, fontSize: strong ? 16 : 15, fontWeight: 700, lineHeight: 1.15, color: DIARY.ink }}>
          {title}
        </div>
        <div style={{ fontFamily: V_FT, fontSize: 11.5, fontWeight: 700, color: DIARY.muted, flexShrink:0 }}>{time}</div>
      </div>
      {!strong && (
        <div style={{ fontFamily: V_FB, fontSize: 12.5, lineHeight: 1.45, color: DIARY.ink, marginTop: 8 }}>
          {content || 'Hoy te vi tranquilo y sentí que este día también merece quedar guardado.'}
        </div>
      )}
    </div>
  );
}

function DiaryPhotoTile({ entry, fallbackSrc, height = 128, onOpen }) {
  const src = typeof entry === 'string' ? entry : entry?.imageSrc;
  return (
    <button onClick={onOpen} style={{
      width:'100%', maxWidth:'100%', height, border:'none', padding:0, background:'transparent',
      borderRadius: 18, overflow:'hidden', display:'block', cursor: onOpen ? 'pointer' : 'default',
      boxSizing:'border-box',
    }}>
      <img src={src || fallbackSrc} alt="" style={{
        width:'100%', height:'100%', objectFit:'cover', borderRadius: 18, display:'block',
        border: `1px solid ${KUN.hair}`,
        boxSizing:'border-box',
      }}/>
    </button>
  );
}

function DiaryExpandedItem({ item, onClose }) {
  if (!item) return null;
  const isPhoto = item.type === 'photo';
  return (
    <div onClick={onClose} style={{
      position:'fixed', inset:0, zIndex: 300, background:'rgba(42,35,32,0.58)',
      display:'flex', alignItems:'center', justifyContent:'center', padding: 22, boxSizing:'border-box',
    }}>
      <div onClick={e => e.stopPropagation()} style={{
        width:'100%', maxWidth: 420, maxHeight:'86vh', overflow:'auto',
        background: isPhoto ? 'transparent' : '#fff', borderRadius: isPhoto ? 22 : 24,
        boxSizing:'border-box',
      }}>
        {isPhoto ? (
          <img src={item.src} alt="" style={{
            width:'100%', maxHeight:'78vh', objectFit:'contain', display:'block',
            borderRadius: 22, background:'#fff',
          }}/>
        ) : (
          <div style={{ padding: 20, border: `1px solid ${KUN.hair}`, borderRadius: 24 }}>
            <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', gap: 12 }}>
              <div style={{ fontFamily: V_FT, fontSize: 22, fontWeight: 700, color: KUN.ink, lineHeight: 1.1 }}>{item.title}</div>
              <div style={{ fontFamily: V_FT, fontSize: 12, fontWeight: 700, color: KUN.inkMuted, flexShrink:0 }}>{item.time}</div>
            </div>
            <div style={{ fontFamily: V_FB, fontSize: 15, lineHeight: 1.55, color: KUN.ink, marginTop: 14 }}>
              {item.content}
            </div>
          </div>
        )}
      </div>
      <button onClick={onClose} style={{
        position:'fixed', top: 18, right: 18, width: 42, height: 42, borderRadius:'50%',
        border:'none', background:'#fff', display:'flex', alignItems:'center', justifyContent:'center',
        cursor:'pointer', boxShadow:'0 8px 18px rgba(42,35,32,0.18)',
      }}>
        <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
          <path d="M5 5L17 17M17 5L5 17" stroke={KUN.ink} strokeWidth="2.4" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}

function DiaryDetailView({ onBack, onOpenAdd, onOpenPhoto, onOpenText, onOpenVoice, addOpen, setAddOpen, canEditDiary, diaryEntries = [], selectedDay }) {
  const [expandedItem, setExpandedItem] = React.useState(null);
  const photoEntries = diaryEntries.filter(e => e.kind === 'photo');
  const textEntries = diaryEntries.filter(e => e.kind === 'text');
  const day = selectedDay || {};
  const dayPhotos = day.photos || [];
  const title = day.detailTitle || day.title || 'Hoy';
  const primaryText = day.text || textEntries[0]?.content;
  const noteFallback = 'Hoy te vi tranquilo y senti que este dia tambien merece quedar guardado.';
  const getPhotoSrc = (entry, fallbackSrc) => typeof entry === 'string' ? entry : (entry?.imageSrc || fallbackSrc);
  const openExpandedPhoto = (entry, fallbackSrc) => {
    setExpandedItem({ type: 'photo', src: getPhotoSrc(entry, fallbackSrc) });
  };
  const openExpandedNote = (note) => {
    setExpandedItem({
      type: 'note',
      title: note.title || 'Nota',
      time: note.time || '10:32 AM',
      content: note.content || noteFallback,
    });
  };
  const primaryNote = {
    title: day.title || textEntries[0]?.role || 'Nota',
    time: day.date || textEntries[0]?.time || 'Ahora',
    content: primaryText || noteFallback,
  };
  const secondaryNote = {
    title: textEntries[1]?.role || 'Nota',
    time: textEntries[1]?.time || '10:32 AM',
    content: textEntries[1]?.content || noteFallback,
  };
  const milestoneNote = {
    title: 'Hoy te desconectaron del ECMO!',
    time: '10:32 AM',
    content: 'Hoy te desconectaron del ECMO!',
  };
  return (
    <div style={{ minHeight:'100%', background: DIARY.bg, paddingBottom: 96, position:'relative', overflowX:'hidden', maxWidth:'100%', boxSizing:'border-box' }}>
      <div style={{ display:'grid', gridTemplateColumns:'48px 1fr 48px', alignItems:'center', padding:'8px 20px 18px' }}>
        <DiaryIconButton onClick={onBack} muted>{VINK_ICONS.back(KUN.ink)}</DiaryIconButton>
        <div style={{ textAlign:'center', fontFamily: V_FT, fontSize: 22, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3 }}>{title}</div>
        <div />
      </div>
      {!canEditDiary && <ReadOnlyDiaryNotice />}
      <div style={{ display:'grid', gridTemplateColumns:'minmax(0, 1fr) minmax(0, 1fr)', gap: 8, padding:'0 16px', alignItems:'start', boxSizing:'border-box', maxWidth:'100%' }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 6, minWidth: 0 }}>
          {primaryText
            ? <DiaryNote tall {...primaryNote} onOpen={() => openExpandedNote(primaryNote)} />
            : <DiaryNote tall onOpen={() => openExpandedNote(primaryNote)} />}
          <DiaryAudioBar duration="01:09" />
          <DiaryPhotoTile entry={dayPhotos[1] || photoEntries[1]} fallbackSrc="tens2.webp" height={128} onOpen={() => openExpandedPhoto(dayPhotos[1] || photoEntries[1], 'tens2.webp')} />
          <DiaryPhotoTile entry={dayPhotos[2] || photoEntries[2]} fallbackSrc="tens.avif" height={141} onOpen={() => openExpandedPhoto(dayPhotos[2] || photoEntries[2], 'tens.avif')} />
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap: 6, minWidth: 0 }}>
          <DiaryPhotoTile entry={dayPhotos[0] || photoEntries[0]} fallbackSrc="premature.jpg" height={249} onOpen={() => openExpandedPhoto(dayPhotos[0] || photoEntries[0], 'premature.jpg')} />
          <DiaryAudioBar duration={addOpen ? '01:09' : '00:29'} compact />
          <DiaryNote {...secondaryNote} onOpen={() => openExpandedNote(secondaryNote)} />
          {!addOpen && <DiaryNote title={milestoneNote.title} time={milestoneNote.time} strong onOpen={() => openExpandedNote(milestoneNote)} />}
        </div>
      </div>
      {canEditDiary && !addOpen && (
        <button onClick={onOpenAdd} style={{ position:'absolute', right: 24, bottom: 104, width: 54, height: 54, borderRadius:'50%', border:'none', background: KUN.brick, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', boxShadow:'0 8px 18px rgba(240,116,62,0.34)' }}>
          {VINK_ICONS.plus('#fff')}
        </button>
      )}
      {canEditDiary && addOpen && (
        <div style={{ position:'absolute', right: 26, bottom: 84, display:'flex', flexDirection:'column', alignItems:'center', gap: 7, zIndex: 20 }}>
          <DiaryIconButton onClick={onOpenPhoto} muted>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <rect x="4" y="5" width="16" height="14" rx="1.5" stroke={KUN.ink} strokeWidth="1.7"/>
              <path d="M6.5 16L10 12.5L12.5 15L15 12L18 16" stroke={KUN.ink} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </DiaryIconButton>
          <DiaryIconButton onClick={onOpenText} muted>{VINK_ICONS.text(KUN.ink)}</DiaryIconButton>
          <DiaryIconButton onClick={onOpenVoice} muted>{VINK_ICONS.mic(KUN.ink, KUN.ink)}</DiaryIconButton>
          <button onClick={() => setAddOpen(false)} style={{
            width: 44, height: 44, border: 'none', borderRadius: '50%',
            background: KUN.brick,
            display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
            boxShadow:'0 8px 18px rgba(240,116,62,0.28)',
          }}>
            <span style={{ display:'flex' }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M5 5L17 17M17 5L5 17" stroke="#fff" strokeWidth="2.6" strokeLinecap="round"/>
            </svg>
            </span>
          </button>
        </div>
      )}
      <DiaryExpandedItem item={expandedItem} onClose={() => setExpandedItem(null)} />
    </div>
  );
}

function NuestroViaje({ onBack, recordings, addRecording, canEditDiary }) {
  const [mode, setMode] = React.useState('list');
  const [addOpen, setAddOpen] = React.useState(false);
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [sheet, setSheet] = React.useState(false);
  const [textEditorOpen, setTextEditorOpen] = React.useState(false);
  const photoInputRef = React.useRef(null);
  const [diaryEntries, setDiaryEntriesState] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem(DIARY_ENTRIES_KEY) || '[]');
    } catch {
      return [];
    }
  });
  const [recording, setRecording] = React.useState(false);
  const [recordingContext, setRecordingContext] = React.useState({
    author: 'Mamá', role: 'Mamá · Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía',
  });
  const startRecorder = (context) => {
    setRecordingContext(context);
    setRecording(true);
  };
  const openTextEditor = () => {
    setSheet(false);
    setAddOpen(false);
    setTextEditorOpen(true);
  };
  const openPhotoPicker = () => {
    setSheet(false);
    setAddOpen(false);
    if (photoInputRef.current) photoInputRef.current.click();
  };
  const openVoiceRecorder = () => {
    setSheet(false);
    setAddOpen(false);
    startRecorder({ author: 'Mamá', role: 'Mamá · Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía' });
  };
  const setDiaryEntries = (updater) => {
    setDiaryEntriesState(prev => {
      const next = typeof updater === 'function' ? updater(prev) : updater;
      try { localStorage.setItem(DIARY_ENTRIES_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  };
  const savePhotoFile = (file) => {
    if (!file || !file.type || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      setDiaryEntries(prev => [{
        id: Date.now(),
        kind: 'photo',
        author: 'Mamá',
        role: 'Foto',
        color: KUN.rosehip,
        time: 'Ahora',
        imageSrc: reader.result,
        content: 'Nuevo recuerdo guardado en el diario.',
      }, ...prev]);
    };
    reader.readAsDataURL(file);
  };
  const openDay = (day) => {
    setSelectedDay(day || null);
    setMode('detail');
    setAddOpen(false);
  };

  return (
    <>
      <div style={{ position:'relative', minHeight:'100%', overflowX:'hidden', maxWidth:'100%' }}>
        <input
          ref={photoInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => {
            savePhotoFile(e.target.files && e.target.files[0]);
            e.target.value = '';
          }}
          style={{ display:'none' }}
        />
        {mode === 'list'
          ? <DiaryListView
              canEditDiary={canEditDiary}
              diaryEntries={diaryEntries}
              onBack={onBack}
              onOpenDay={openDay}
              onOpenAdd={() => { setMode('detail'); setAddOpen(true); }}
            />
          : <DiaryDetailView
              canEditDiary={canEditDiary}
              diaryEntries={diaryEntries}
              selectedDay={selectedDay}
              addOpen={addOpen}
              setAddOpen={setAddOpen}
              onOpenAdd={() => setAddOpen(true)}
              onOpenPhoto={openPhotoPicker}
              onOpenText={openTextEditor}
              onOpenVoice={openVoiceRecorder}
              onBack={() => { setMode('list'); setAddOpen(false); }}
            />
        }
        {sheet && canEditDiary && (
          <AddEntrySheet
            onClose={() => setSheet(false)}
            onPickPhoto={openPhotoPicker}
            onPickText={openTextEditor}
            onPickVoice={openVoiceRecorder}
          />
        )}
        {textEditorOpen && canEditDiary && (
          <NoteEditorSheet
            onClose={() => setTextEditorOpen(false)}
            onSave={(entry) => setDiaryEntries(prev => [entry, ...prev])}
          />
        )}
        {recording && addRecording && (
          <Recorder
            onClose={() => setRecording(false)}
            onSave={addRecording}
            context={recordingContext}
          />
        )}
      </div>
    </>
  );

  return (
    <>
      <SubHeader title="Diario de vida" onBack={onBack} />
      <div style={{ position:'relative', height:'100%', overflowX:'hidden', maxWidth:'100%' }}>
        <div style={{ paddingBottom: 100 }}>
          {!canEditDiary && <ReadOnlyDiaryNotice />}
          {canEditDiary && <ShareMemoryBar />}
          <ActivityCard
            canEdit={canEditDiary}
            onOpenSheet={() => canEditDiary && setSheet(true)}
            onOpenRecorder={() => canEditDiary && startRecorder({ author: 'Mamá', role: 'Mamá · Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía' })}
            onOpenSiblingRecorder={() => canEditDiary && startRecorder({ author: 'Hermanito', role: 'Hermanito · Voz para Sofía', color: KUN.viola, name: 'Mensaje del hermanito' })}
          />
          <FeedSeparator label="HOY · DÍA 32" />

          <FeedEntry
            author="Mamá" role="Mamá" color={KUN.rosehip} time="14:20"
            kind="text"
            content="Hoy te vi abrir los ojos por primera vez. No lo voy a olvidar nunca."
          />
          <FeedEntry
            author="Papá" role="Papá" color={KUN.apple} time="11:45"
            kind="voice" duration="0:42"
          />

          {recordings && recordings.length > 0 && recordings.map((r, i) => (
            <FeedEntry key={i}
              author={r.author || "Mamá"} role={r.role || "Mamá · Voz para Sofía"} color={r.color || KUN.rosehip}
              time={r.time} kind="voice" duration={r.duration} isVoice
            />
          ))}

          <FeedSeparator label="AYER · DÍA 31" />

          <FeedEntry
            author="Abuela Rosa" role="Abuela" color={KUN.sun} time="Ayer 19:30"
            kind="photo"
            content="Te esperamos con mucho amor 🧡"
          />
        </div>

        {/* FAB */}
        {canEditDiary && <button onClick={() => setSheet(true)} style={{
          position:'absolute', bottom: 14, right: 20,
          width: 58, height: 58, borderRadius: '50%', border:'none',
          background: KUN.brick, color:'#fff',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow: '0 8px 18px rgba(240,116,62,0.40)', cursor:'pointer',
          zIndex: 5,
        }}>
          {VINK_ICONS.plus('#fff')}
        </button>}

        {sheet && canEditDiary && (
          <AddEntrySheet
            onClose={() => setSheet(false)}
            onPickVoice={() => { setSheet(false); startRecorder({ author: 'Mamá', role: 'Mamá · Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía' }); }}
          />
        )}
        {recording && addRecording && (
          <Recorder
            onClose={() => setRecording(false)}
            onSave={addRecording}
            context={recordingContext}
          />
        )}
      </div>
    </>
  );
}

// ── Actividades con mi hijo ─────────────────────────────────
function SiblingRecordCard({ onRecord }) {
  return (
    <div style={{
      margin: '0 20px 14px',
      background: KUN.viola,
      borderRadius: 22,
      padding: '16px 18px',
      border: `1px solid ${KUN.hair}`,
    }}>
      <div style={{ fontFamily: V_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>
        Grabacion del hermanito
      </div>
      <div style={{ fontFamily: V_FB, fontSize: 12.5, color: KUN.inkSoft, lineHeight: 1.45, marginTop: 4 }}>
        Un hermano puede dejarle una voz o saludo especial a la guaguita.
      </div>
      <button onClick={onRecord} style={{
        width: '100%', marginTop: 12,
        padding: '11px 14px',
        borderRadius: 999,
        border: 'none',
        background: KUN.brick,
        color: '#fff',
        fontFamily: V_FT,
        fontSize: 13.5,
        fontWeight: 700,
        cursor: 'pointer',
      }}>
        Grabar como hermanito
      </button>
    </div>
  );
}

function KaraokeSection({ onRecord }) {
  const karaokeOptions = [
    { title: 'Nana de la luna', hint: 'Suave para dormir' },
    { title: 'Estrellita cercana', hint: 'Melodia corta' },
    { title: 'Bienvenida musical', hint: 'Para cantarla en familia' },
  ];
  return (
    <div style={{ padding: '18px 20px 0' }}>
      <div style={{
        fontFamily: V_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted,
        letterSpacing: 1, padding: '0 8px 10px', textTransform: 'uppercase',
      }}>
        Karaoke
      </div>
      {karaokeOptions.map((option, i) => (
        <div key={option.title} style={{
          background:'#fff', borderRadius: 22, padding: '14px 16px', marginBottom: 10,
          border: `1px solid ${KUN.hair}`,
        }}>
          <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
            <div style={{
              width: 42, height: 42, borderRadius: 14, background: i === 0 ? KUN.sun : i === 1 ? KUN.apple : KUN.rosehip,
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
            }}>
              {VINK_ICONS.music(KUN.ink)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: V_FT, fontSize: 15, fontWeight: 700, color: KUN.ink }}>{option.title}</div>
              <div style={{ fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, marginTop: 2 }}>{option.hint}</div>
            </div>
          </div>
          <div style={{ display:'flex', gap: 8, marginTop: 12 }}>
            <button onClick={() => alert(`Karaoke: ${option.title}`)} style={{ ...btnGhost, width: 'auto', flex: 1, borderRadius: 999, fontFamily: V_FT, fontWeight: 700 }}>
              Cantar ahora
            </button>
            <button onClick={() => onRecord(option)} style={{ ...btnPrimary, flex: 1 }}>
              Grabar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function MusicaTab({ onOpenRecorder, onOpenSiblingRecorder }) {
  const [playing, setPlaying] = React.useState(null);
  const tracks = [
    { icon:'🌙', name:'Para dormir',    desc:'Sonidos suaves y latidos',  dur:'12:30', color: KUN.viola },
    { icon:'☀️', name:'Para despertar', desc:'Tonos cálidos y delicados', dur:'8:15',  color: KUN.sun   },
    { icon:'✨', name:'Para interactuar', desc:'Melodías estimulantes',   dur:'10:00', color: KUN.rosehip },
  ];
  return (
    <>
      <div style={{
        fontFamily: V_FT, fontSize: 19, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3,
        padding: '4px 24px 14px',
      }}>
        ¿Qué necesita tu bebé ahora?
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap: 10, padding: '0 20px' }}>
        {tracks.map((t, i) => {
          const isOpen = playing === i;
          return (
            <div key={i} style={{
              background:'#fff', borderRadius: 22,
              padding: '14px 16px',
              border: isOpen ? `1.5px solid ${KUN.brick}` : `1px solid ${KUN.hair}`,
              transition:'border .2s',
            }}>
              <div onClick={() => setPlaying(isOpen ? null : i)} style={{
                display:'flex', alignItems:'center', gap: 14, cursor:'pointer',
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: t.color,
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontSize: 24, flexShrink: 0,
                }}>{t.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: V_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>{t.name}</div>
                  <div style={{ fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400, marginTop: 3 }}>
                    {t.desc} · {t.dur}
                  </div>
                </div>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: isOpen ? KUN.brick : KUN.cream,
                  border: isOpen ? 'none' : `1px solid ${KUN.hair}`,
                  display:'flex', alignItems:'center', justifyContent:'center',
                }}>
                  {isOpen
                    ? VINK_ICONS.pause('#fff', 14)
                    : VINK_ICONS.play(KUN.brick, 14)}
                </div>
              </div>

              {isOpen && (
                <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px dashed ${KUN.hair}` }}>
                  <div style={{ height: 6, borderRadius: 999, background: 'rgba(42,35,32,0.08)', position:'relative', overflow:'hidden' }}>
                    <div style={{ position:'absolute', top:0, left:0, height:'100%', width:'34%', background: KUN.brick, borderRadius: 999 }}/>
                    <div style={{
                      position:'absolute', top:'50%', left:'34%', transform:'translate(-50%, -50%)',
                      width: 14, height: 14, borderRadius: '50%', background:'#fff',
                      boxShadow:'0 1px 3px rgba(42,35,32,0.25)',
                    }}/>
                  </div>
                  <div style={{
                    display:'flex', justifyContent:'space-between',
                    fontFamily: V_FT, fontSize: 11, fontWeight: 700, color: KUN.inkMuted, marginTop: 8,
                  }}>
                    <span>4:14</span>
                    <span>{t.dur}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <KaraokeSection onRecord={onOpenRecorder} />
      <SiblingRecordCard onRecord={onOpenSiblingRecorder} />
    </>
  );
}

const STORIES = [
  {
    title: 'La nube viajera',
    text: 'Una nube pequeña viajaba despacio por el cielo azul. No tenía prisa. Pasaba sobre los árboles y los saludaba con suavidad. Pasaba sobre el río y se miraba en el agua tranquila. A veces se detenía y dejaba caer una lluvia muy suave, casi un susurro. Las flores levantaban sus pétalos para recibirla. Los pájaros cantaban bajito. La nube seguía su camino sin apurarse, flotando, flotando. Sabía que no importaba llegar rápido. Lo importante era el viaje. Irse despacio. Sentir el viento. Mirar el mundo desde arriba, con calma. Como tú, que estás llegando al mundo poco a poco.',
    open: false,
  },
  {
    title: 'El pez pequeño',
    text: 'En el fondo del mar vivía un pez muy pequeñito. Era tan chiquito que a veces se asustaba de su propia sombra. Un día se animó a salir y nadó entre corales rojos y amarillos. Conoció estrellas que brillaban en la arena y a una tortuga muy paciente que le dijo: "No tengas miedo de ser pequeño. Lo importante es seguir nadando, despacio, a tu ritmo." El pez aprendió que aunque era chiquito, tenía un corazón grande. Y con cada aleteo se hacía un poquito más fuerte. Como tú, mi amor, que cada día creces un poquito más.',
    open: false,
  },
  {
    title: 'La semilla',
    text: 'Había una vez una semilla que dormía bajo la tierra. Estaba abrigada y tranquila, escuchando los sonidos del mundo. Un día sintió calor en su piel y unas gotitas de agua que la acariciaban. Muy despacio, comenzó a estirarse. Sacó una raíz hacia abajo y un brote suave hacia arriba. No tenía prisa. Sabía que crecer toma tiempo. Día tras día miró el sol asomarse y la luna pasar. Hasta que una mañana se convirtió en una flor. Tú también estás creciendo así, mi amor. Despacito, con tu propio tiempo, hasta florecer.',
    open: false,
  },
];

function StoryRow({ story, onRecord }) {
  const [open, setOpen] = React.useState(!!story.open);
  return (
    <div style={{
      background:'#fff', borderRadius: 22, padding: '14px 16px', marginBottom: 10,
      border: `1px solid ${KUN.hair}`,
    }}>
      <div onClick={() => setOpen(o => !o)} style={{
        display:'flex', alignItems:'center', gap: 14, cursor:'pointer',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 14,
          background: KUN.viola,
          display:'flex', alignItems:'center', justifyContent:'center',
          flexShrink: 0, fontSize: 18,
        }}>📖</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: V_FT, fontSize: 15, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>{story.title}</div>
          <div style={{ fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400, marginTop: 3 }}>
            {open ? 'Toca el texto y léelo en voz alta' : 'Cuento corto · 2 min'}
          </div>
        </div>
        <div style={{
          width: 32, height: 32, borderRadius:'50%',
          background: open ? KUN.brick : KUN.cream,
          border: open ? 'none' : `1px solid ${KUN.hair}`,
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>
          {open ? KIcon.chevDown('#fff') : KIcon.chevRight(KUN.brick)}
        </div>
      </div>

      {open && story.text && story.text !== '...' && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px dashed ${KUN.hair}` }}>
          <div style={{
            fontFamily: V_FB, fontSize: 14, color: KUN.ink, fontWeight: 400,
            lineHeight: 1.65, letterSpacing: 0.1,
            background: KUN.cardSoft, borderRadius: 16, padding: 16,
          }}>
            {story.text}
          </div>
          <button onClick={onRecord} style={{
            width:'100%', marginTop: 12,
            padding: '12px 16px', height: 46, borderRadius: 999, border:'none',
            background: KUN.brick, color:'#fff',
            fontFamily: V_FT, fontSize: 14, fontWeight: 700, letterSpacing: -0.1,
            display:'flex', alignItems:'center', justifyContent:'center', gap: 8,
            cursor:'pointer',
          }}>
            {VINK_ICONS.mic('#fff')} Grabar mientras leo
          </button>
        </div>
      )}
    </div>
  );
}

const MUSIC_LYRICS = `Duérmete mi niño, duérmete sonriendo, que la luna llena te está protegiendo. Cierra tus ojitos, descansa tu alma, que aquí estoy contigo, llenándote de calma. Eres tan pequeño, tan lleno de vida, eres todo nuestro, nuestra maravilla.`;

function CuentosTab({ recordings, onOpenRecorder, onOpenSiblingRecorder }) {
  return (
    <>
      <div style={{
        fontFamily: V_FT, fontSize: 19, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3,
        padding: '4px 24px 14px',
      }}>
        Cuentos para tu bebé
      </div>

      {/* Cuentos */}
      <div style={{ padding: '0 20px 6px' }}>
        <div style={{
          fontFamily: V_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted,
          letterSpacing: 1, padding: '0 8px 10px', textTransform: 'uppercase',
        }}>
          Cuentos
        </div>
        {STORIES.map((s, i) => <StoryRow key={i} story={s} onRecord={onOpenRecorder}/>)}
      </div>

      <SiblingRecordCard onRecord={onOpenSiblingRecorder} />

      {/* Lectura musical */}
      <div style={{ padding: '14px 20px 6px' }}>
        <div style={{
          fontFamily: V_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted,
          letterSpacing: 1, padding: '0 8px 10px', textTransform: 'uppercase',
        }}>
          Lectura musical
        </div>
        <div style={{
          background: KUN.apple, borderRadius: 22, padding: '18px 20px',
        }}>
          <div style={{
            fontFamily: V_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2, marginBottom: 4,
          }}>
            Nana de la luna llena
          </div>
          <div style={{
            fontFamily: V_FB, fontSize: 12, fontWeight: 400, color: KUN.inkSoft, marginBottom: 12,
          }}>
            Texto para leer o cantar a tu ritmo
          </div>
          <div style={{
            background:'#fff', borderRadius: 16, padding: 16,
            fontFamily: V_FB, fontSize: 13.5, color: KUN.ink, fontWeight: 400, fontStyle:'italic',
            lineHeight: 1.7, marginBottom: 14,
          }}>
            {MUSIC_LYRICS}
          </div>
          <button onClick={onOpenRecorder} style={{
            width:'100%', padding: '12px 16px', height: 46, borderRadius: 999, border:'none',
            background: KUN.brick, color:'#fff',
            fontFamily: V_FT, fontSize: 14, fontWeight: 700, letterSpacing: -0.1,
            display:'flex', alignItems:'center', justifyContent:'center', gap: 8,
            cursor:'pointer',
          }}>
            {VINK_ICONS.mic('#fff')} Grabar lectura libre
          </button>
        </div>
      </div>

      {/* Grabaciones guardadas */}
      <div style={{ padding: '18px 20px 0' }}>
        <div style={{
          fontFamily: V_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted,
          letterSpacing: 1, padding: '0 8px 10px', textTransform: 'uppercase',
        }}>
          Grabaciones guardadas
        </div>
        {(!recordings || recordings.length === 0) ? (
          <div style={{
            background:'#fff', borderRadius: 22,
            padding: '24px 20px', textAlign:'center',
            border: `1.5px dashed ${KUN.inkFaint}`,
          }}>
            <div style={{ fontSize: 30, marginBottom: 8 }}>🎙️</div>
            <div style={{ fontFamily: V_FT, fontSize: 14, fontWeight: 700, color: KUN.ink, marginBottom: 4 }}>
              Aún no tienes grabaciones
            </div>
            <div style={{
              fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5,
            }}>
              Cuando grabes algo, aparecerá aquí y en tu feed familiar.
            </div>
          </div>
        ) : (
          <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
            {recordings.map((r, i) => (
              <div key={i} style={{
                background:'#fff', borderRadius: 18,
                padding: '12px 14px',
                display:'flex', alignItems:'center', gap: 12,
                border: `1px solid ${KUN.hair}`,
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: '50%',
                  background: KUN.brick,
                  display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
                }}>{VINK_ICONS.play('#fff', 12)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: V_FT, fontSize: 14, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>{r.name}</div>
                  <div style={{ fontFamily: V_FB, fontSize: 11, color: KUN.inkMuted, fontWeight: 400, marginTop: 2, letterSpacing: 0.2 }}>
                    {r.author ? `${r.author} · ` : ''}{r.duration} · {r.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function Recorder({ onClose, onSave, context }) {
  const [recording, setRecording] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const ctx = context || { author: 'Mamá', role: 'Mamá · Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía' };
  React.useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [recording]);

  const fmt = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

  const save = () => {
    if (seconds === 0) { onClose(); return; }
    onSave({
      name: ctx.name || 'Para Sofía',
      duration: fmt(seconds),
      time: 'Hace un momento',
      author: ctx.author || 'Mamá',
      role: ctx.role || 'Mamá · Voz para Sofía',
      color: ctx.color || KUN.rosehip,
    });
    onClose();
  };

  return (
    <div style={{
      position:'absolute', inset: 0, zIndex: 200,
      background: KUN.bg,
      display:'flex', flexDirection:'column',
    }}>
      <div style={{ padding: '60px 20px 14px', display:'flex', alignItems:'center', gap: 12 }}>
        <div onClick={onClose} style={{
          width: 40, height: 40, borderRadius: '50%', background: '#fff',
          display:'flex', alignItems:'center', justifyContent:'center',
          border: `1px solid ${KUN.hair}`, cursor:'pointer',
        }}>{VINK_ICONS.back(KUN.ink)}</div>
        <div style={{ fontFamily: V_FT, fontSize: 20, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3 }}>
          Grabación
        </div>
      </div>

      <div style={{ flex: 1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding: 20 }}>
        <div style={{
          fontFamily: V_FB, fontSize: 14, color: KUN.inkSoft, fontWeight: 400, marginBottom: 16, textAlign:'center',
        }}>
          {recording ? 'Estoy escuchando...' : `Cuando estes lista, presiona el circulo (${ctx.author})`}
        </div>
        <div style={{
          fontFamily: V_FT, fontSize: 56, fontWeight: 700, color: KUN.ink,
          fontVariantNumeric:'tabular-nums', marginBottom: 32,
          letterSpacing: -1,
        }}>
          {fmt(seconds)}
        </div>

        <svg width="240" height="44" viewBox="0 0 240 44" style={{ marginBottom: 40 }}>
          {Array.from({length: 40}).map((_, i) => {
            const h = recording ? 6 + Math.abs(Math.sin(i * 0.6 + seconds * 0.3)) * 30 : 6;
            return <rect key={i} x={i * 6} y={(44 - h) / 2} width="3" height={h} rx="1.5" fill={recording ? KUN.brick : KUN.inkFaint}/>;
          })}
        </svg>

        <button onClick={() => setRecording(r => !r)} style={{
          width: 86, height: 86, borderRadius: '50%', border:'none',
          background: recording ? '#fff' : KUN.brick,
          boxShadow: recording
            ? `0 0 0 6px ${KUN.rosehip}, 0 8px 18px rgba(240,116,62,0.30)`
            : '0 8px 18px rgba(240,116,62,0.40)',
          display:'flex', alignItems:'center', justifyContent:'center',
          cursor:'pointer',
        }}>
          {recording
            ? <div style={{ width: 26, height: 26, borderRadius: 6, background: KUN.brick }}/>
            : <div style={{ width: 30, height: 30, borderRadius: '50%', background:'#fff' }}/>}
        </button>

        {seconds > 0 && !recording && (
          <button onClick={save} style={{
            marginTop: 28, padding: '12px 24px', height: 46, borderRadius: 999, border:'none',
            background: KUN.ink, color:'#fff',
            fontFamily: V_FT, fontSize: 14, fontWeight: 700, letterSpacing: -0.1, cursor:'pointer',
          }}>
            Guardar para Sofía
          </button>
        )}
      </div>
    </div>
  );
}

function ActividadesGuagua({ onBack, recordings, addRecording }) {
  const [sub, setSub] = React.useState('musica');
  const [recording, setRecording] = React.useState(false);
  const [recordingContext, setRecordingContext] = React.useState({
    author: 'Mamá', role: 'Mamá · Actividades para Sofía', color: KUN.rosehip, name: 'Actividad para Sofía',
  });
  const startRecorder = (context) => {
    setRecordingContext(context);
    setRecording(true);
  };

  return (
    <div style={{ overflowX:'hidden', maxWidth:'100%' }}>
      <SubHeader title="Actividades con mi hijo" onBack={onBack} />

      {/* sub-subtabs — DS pattern: pill shape, individual rounded, Brick activa, cream inactive con borde */}
      <div style={{
        margin: '0 20px 14px',
        display:'flex', gap: 8,
      }}>
        {[
          { id:'musica', label:'Música' },
          { id:'cuentos', label:'Cuentos' },
        ].map(t => {
          const isA = t.id === sub;
          return (
            <div key={t.id} onClick={() => setSub(t.id)} style={{
              flex: 1, textAlign:'center', cursor:'pointer',
              padding: '10px 6px', borderRadius: 999,
              background: isA ? KUN.brick : KUN.cardSoft,
              color: isA ? '#fff' : KUN.inkSoft,
              fontFamily: V_FT, fontSize: 13, fontWeight: 700, letterSpacing: 0.1,
              border: isA ? 'none' : `1px solid ${KUN.hair}`,
              transition:'all .2s',
            }}>{t.label}</div>
          );
        })}
      </div>

      {sub === 'musica'
        ? <MusicaTab
            onOpenRecorder={(option) => startRecorder({
              author: 'Mamá',
              role: 'Mamá · Karaoke para Sofía',
              color: KUN.rosehip,
              name: option?.title ? `Karaoke · ${option.title}` : 'Musica para Sofía',
            })}
            onOpenSiblingRecorder={() => startRecorder({ author: 'Hermanito', role: 'Hermanito · Voz para Sofía', color: KUN.viola, name: 'Mensaje del hermanito' })}
          />
        : <CuentosTab
            recordings={recordings}
            onOpenRecorder={() => startRecorder({ author: 'Mamá', role: 'Mamá · Cuento para Sofía', color: KUN.rosehip, name: 'Cuento para Sofía' })}
            onOpenSiblingRecorder={() => startRecorder({ author: 'Hermanito', role: 'Hermanito · Cuento para Sofía', color: KUN.viola, name: 'Cuento del hermanito' })}
          />}

      {recording && <Recorder
        onClose={() => setRecording(false)}
        onSave={addRecording}
        context={recordingContext}
      />}
    </div>
  );
}

// ── Public entry ────────────────────────────────────────
function ScreenVinculo({ view, setView, recordings, addRecording, canEditDiary = true, babyName = 'Sofía' }) {
  if (view === 'journey') return <NuestroViaje onBack={() => setView('entry')} recordings={recordings} addRecording={addRecording} canEditDiary={canEditDiary} />;
  if (view === 'activities') return <ActividadesGuagua onBack={() => setView('entry')} recordings={recordings} addRecording={addRecording} />;
  return <VinkEntry onPick={setView} babyName={babyName} />;
}

window.ScreenVinculo = ScreenVinculo;
