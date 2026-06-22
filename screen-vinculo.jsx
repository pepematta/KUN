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
    <div style={{
      position:'relative', padding: '6px 20px 0', overflowX: 'hidden',
      maxWidth: '100%', boxSizing: 'border-box',
      display: 'flex', flexDirection: 'column', minHeight: 690,
    }}>
      <VinkShapes/>

      <div style={{ position:'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column' }}>
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

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, paddingBottom: 12 }}>

          {/* Featured card — Diario de vida */}
          <div onClick={() => onPick('journey')} style={{
            background: KUN.brick, borderRadius: 30, padding: '18px 22px',
            color:'#fff', cursor:'pointer', position:'relative', overflow:'hidden',
          }}>
            <div style={{ position:'absolute', top:-40, right:-40, width: 180, height: 180, borderRadius:'50%', background:'rgba(255,255,255,0.10)' }}/>
            <div style={{ position:'absolute', bottom:-60, left:-30, width: 140, height: 140, borderRadius:'50%', background:'rgba(255,255,255,0.08)' }}/>
            <div style={{
              width: 56, height: 56, borderRadius: 18,
              background:'rgba(255,255,255,0.20)',
              display:'flex', alignItems:'center', justifyContent:'center',
              marginBottom: 14, position:'relative',
            }}>{VINK_ICONS.journey('#fff')}</div>
            <div style={{
              fontFamily: V_FT, fontSize: 20, fontWeight: 700,
              letterSpacing: -0.4, marginBottom: 3, position:'relative',
            }}>
              Diario de vida
            </div>
            <div style={{
              fontFamily: V_FB, fontSize: 13, fontWeight: 400, opacity: 0.92, position:'relative',
            }}>
              Registra tus momentos
            </div>
          </div>

          {/* 3 activity blocks */}
          <div style={{ display: 'flex', gap: 10 }}>
            {[
              {
                id: 'cuentos', label: 'Cuentos', color: KUN.viola,
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19.5C4 18.1 5.1 17 6.5 17H20" stroke={KUN.ink} strokeWidth="1.8" strokeLinecap="round"/>
                    <path d="M6.5 2H20V22H6.5C5.1 22 4 20.9 4 19.5V4.5C4 3.1 5.1 2 6.5 2Z" stroke={KUN.ink} strokeWidth="1.8" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                id: 'canciones', label: 'Canciones', color: KUN.rosehip,
                icon: (
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18V6l12-2v12" stroke={KUN.ink} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="6" cy="18" r="3" stroke={KUN.ink} strokeWidth="1.8"/>
                    <circle cx="18" cy="16" r="3" stroke={KUN.ink} strokeWidth="1.8"/>
                  </svg>
                ),
              },
              {
                id: 'musica', label: 'Música', color: KUN.apple,
                icon: (
                  <svg width="26" height="26" viewBox="0 0 22 22" fill="none">
                    <rect x="1"  y="9"  width="3" height="4"  rx="1.5" fill={KUN.ink}/>
                    <rect x="6"  y="5"  width="3" height="12" rx="1.5" fill={KUN.ink}/>
                    <rect x="11" y="7"  width="3" height="8"  rx="1.5" fill={KUN.ink}/>
                    <rect x="16" y="10" width="3" height="3"  rx="1.5" fill={KUN.ink}/>
                  </svg>
                ),
              },
            ].map(item => (
              <div key={item.id} onClick={() => onPick(`activities-${item.id}`)} style={{
                flex: 1, background: item.color, borderRadius: 22, padding: '18px 10px 16px',
                cursor: 'pointer', display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: 12,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 16,
                  background: 'rgba(255,255,255,0.45)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {item.icon}
                </div>
                <div style={{
                  fontFamily: V_FT, fontSize: 13, fontWeight: 700,
                  color: KUN.ink, textAlign: 'center', letterSpacing: -0.1,
                }}>
                  {item.label}
                </div>
              </div>
            ))}
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
          <span style={{ fontFamily: V_FB, fontSize: 11, color: KUN.inkMuted, fontWeight: 400 }}>{role} - {time}</span>
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
                }}>foto - abuela y Sofía</div>
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
                  fontFamily: V_FT, fontSize: 14, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1,
                }}>{o.label}</div>
                <div style={{
                  fontFamily: V_FB, fontSize: 13, color: KUN.inkSoft, fontWeight: 400, marginTop: 3,
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
  { src: 'guaguas/guagua1.jpg', title: 'Hoy', date: '20 Junio 2026' },
  { src: 'guaguas/guagua2.jpg', title: 'Hace 1 mes', date: '20 Mayo 2026' },
  { src: 'guaguas/guagua3.jpg', title: 'Primer dibujo', date: '17 Junio 2026' },
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
            <div style={{ fontFamily: V_FT, fontSize: 19, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3 }}>Nueva nota</div>
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
                  fontFamily: V_FT, fontSize: 13, fontWeight: 700, cursor:'pointer',
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
    { id:'today', title:'dfghj', date:'HOY - 20 Junio 2026', detailTitle:'Hoy', photoCount:3, audioCount:0, photos:['guaguas/guagua4.jpg','guaguas/guagua5.jpeg','guaguas/guagua6.webp'], text: DIARY_TEXT },
    { id:'yesterday', title:'akgsdli', date:'AYER - 19 Junio 2026', detailTitle:'Ayer', photoCount:4, audioCount:2, photos:['guaguas/guagua7.jpg','guaguas/guagua8.jpeg','guaguas/guagua9.jpg','guaguas/guagua10.jpg'], text: 'Ayer fue un dia de avances pequenos. Guardamos fotos, audios y recuerdos de quienes vinieron a acompanar.' },
    { id:'monday', title:'dfghj', date:'LUN - 17 Junio 2026', detailTitle:'Lun 17', photoCount:3, audioCount:0, photos:['guaguas/guagua1.jpg','guaguas/guagua2.jpg','guaguas/guagua3.jpg'], text: 'Este dia dejamos registro de nuevas fotos y de como fue cambiando su rutina de cuidados.' },
    { id:'saturday', title:'rtgha', date:'SAB - 15 Junio 2026', detailTitle:'Sab 15', photoCount:2, audioCount:1, photos:['guaguas/guagua4.jpg','guaguas/guagua5.jpeg','guaguas/guagua6.webp'], text: 'Un recuerdo de fin de semana para mirar despues con calma.' },
  ];
  const photoMemories = diaryEntries
    .filter(e => e.kind === 'photo' && e.imageSrc)
    .map((e, i) => ({
      src: e.imageSrc,
      title: e.role || 'Foto',
      date: e.time || 'Ahora',
      id: e.id || `photo-${i}`,
      detailTitle: 'Hoy',
      photos: [e.imageSrc, 'guaguas/guagua2.jpg', 'guaguas/guagua3.jpg', 'guaguas/guagua4.jpg'],
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
      photos: [item.src, i === 0 ? 'guaguas/guagua5.jpeg' : 'guaguas/guagua6.webp', i === 1 ? 'guaguas/guagua7.jpg' : 'guaguas/guagua8.jpeg'],
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
          <DiaryPhotoTile entry={dayPhotos[1] || photoEntries[1]} fallbackSrc="guaguas/guagua2.jpg" height={128} onOpen={() => openExpandedPhoto(dayPhotos[1] || photoEntries[1], 'guaguas/guagua2.jpg')} />
          <DiaryPhotoTile entry={dayPhotos[2] || photoEntries[2]} fallbackSrc="guaguas/guagua3.jpg" height={141} onOpen={() => openExpandedPhoto(dayPhotos[2] || photoEntries[2], 'guaguas/guagua3.jpg')} />
        </div>
        <div style={{ display:'flex', flexDirection:'column', gap: 6, minWidth: 0 }}>
          <DiaryPhotoTile entry={dayPhotos[0] || photoEntries[0]} fallbackSrc="guaguas/guagua1.jpg" height={249} onOpen={() => openExpandedPhoto(dayPhotos[0] || photoEntries[0], 'guaguas/guagua1.jpg')} />
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
    author: 'Mamá', role: 'Mamá - Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía',
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
    startRecorder({ author: 'Mamá', role: 'Mamá - Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía' });
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
            onOpenRecorder={() => canEditDiary && startRecorder({ author: 'Mamá', role: 'Mamá - Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía' })}
            onOpenSiblingRecorder={() => canEditDiary && startRecorder({ author: 'Hermanito', role: 'Hermanito - Voz para Sofía', color: KUN.viola, name: 'Mensaje del hermanito' })}
          />
          <FeedSeparator label="HOY - DÍA 32" />

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
              author={r.author || "Mamá"} role={r.role || "Mamá - Voz para Sofía"} color={r.color || KUN.rosehip}
              time={r.time} kind="voice" duration={r.duration} isVoice
            />
          ))}

          <FeedSeparator label="AYER - DÍA 31" />

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
            onPickVoice={() => { setSheet(false); startRecorder({ author: 'Mamá', role: 'Mamá - Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía' }); }}
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
const activityCardStyle = {
  background: '#fff',
  borderRadius: 22,
  padding: '16px 18px',
  border: `1px solid ${KUN.hair}`,
  boxShadow: '0 8px 18px rgba(42,35,32,0.045)',
};

const activityTintCardStyle = (color, selected = false) => ({
  ...activityCardStyle,
  background: tint(color, 0.26),
  border: selected ? `1.5px solid ${KUN.brick}` : `1px solid ${KUN.hair}`,
});

const activityPrimaryButtonStyle = {
  width: '100%',
  height: 50,
  padding: '14px 22px',
  borderRadius: 999,
  border: 'none',
  background: KUN.brick,
  color: '#fff',
  fontFamily: V_FT,
  fontSize: 15,
  fontWeight: 700,
  letterSpacing: -0.1,
  cursor: 'pointer',
  boxSizing: 'border-box',
};

const activitySecondaryButtonStyle = {
  width: '100%',
  height: 50,
  padding: '14px 18px',
  borderRadius: 999,
  border: `1px solid ${KUN.hair}`,
  background: '#fff',
  color: KUN.brick,
  fontFamily: V_FT,
  fontSize: 15,
  fontWeight: 700,
  letterSpacing: -0.1,
  cursor: 'pointer',
  boxSizing: 'border-box',
};

const activityMetaStyle = {
  fontFamily: V_FT,
  fontSize: 11,
  fontWeight: 700,
  color: KUN.brick,
  letterSpacing: 0.6,
  textTransform: 'uppercase',
};

function SiblingRecordCard({ onRecord }) {
  return (
    <div style={{
      ...activityTintCardStyle(KUN.viola),
      margin: '0 20px 14px',
    }}>
      <div style={{ fontFamily: V_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>
        Grabacion del hermanito
      </div>
      <div style={{ fontFamily: V_FB, fontSize: 12.5, color: KUN.inkSoft, lineHeight: 1.45, marginTop: 4 }}>
        Un hermano puede dejarle una voz o saludo especial a la guaguita.
      </div>
      <button onClick={onRecord} style={{ ...activityPrimaryButtonStyle, marginTop: 12 }}>
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
          ...activityCardStyle,
          marginBottom: 10,
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
            <button onClick={() => alert(`Karaoke: ${option.title}`)} style={{ ...activitySecondaryButtonStyle, flex: 1 }}>
              Cantar ahora
            </button>
            <button onClick={() => {
              window.KUNAnalytics?.track('actividad_respondida', {
                tipo: 'karaoke',
                categoria: option.title,
              });
              onRecord(option);
            }} style={{ ...activityPrimaryButtonStyle, flex: 1 }}>
              Grabar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// Low-opacity background helper — blends hex color with white to produce a solid tint
function tint(hex, alpha) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  const mix = (c) => Math.round(c * alpha + 255 * (1 - alpha)).toString(16).padStart(2,'0');
  return `#${mix(r)}${mix(g)}${mix(b)}`;
}

// Waveform icon (right side of music tracks)
function WaveIcon({ color, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22" fill="none">
      <rect x="1"  y="9"  width="3" height="4"  rx="1.5" fill={color || KUN.rosehip}/>
      <rect x="6"  y="5"  width="3" height="12" rx="1.5" fill={color || KUN.rosehip}/>
      <rect x="11" y="7"  width="3" height="8"  rx="1.5" fill={color || KUN.rosehip}/>
      <rect x="16" y="10" width="3" height="3"  rx="1.5" fill={color || KUN.rosehip}/>
    </svg>
  );
}

function MusicaTab() {
  const [playing, setPlaying] = React.useState(null);
  const tracks = [
    { title: 'Para dormir',      dur: '12 min', color: KUN.viola   },
    { title: 'Para despertar',   dur: '8 min',  color: KUN.sun     },
    { title: 'Para interactuar', dur: '10 min', color: KUN.apple   },
    { title: 'Brisa de tarde',   dur: '15 min', color: KUN.clear   },
  ];
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 10, padding: '0 20px 24px' }}>
      {tracks.map((t, i) => {
        const isOpen = playing === i;
        return (
          <div key={i} style={{
            ...activityTintCardStyle(t.color, isOpen),
            transition:'border .2s',
          }}>
            <div onClick={() => {
              const next = isOpen ? null : i;
              if (next !== null) {
                window.KUNAnalytics?.track('musica_reproducida', {
                  categoria: t.title,
                  duracion_label: t.dur,
                });
              }
              setPlaying(next);
            }} style={{
              display:'flex', alignItems:'center', gap: 14, cursor:'pointer',
            }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontFamily: V_FT, fontSize: 16, fontWeight: 700,
                  color: KUN.ink, letterSpacing: -0.2, marginBottom: 4,
                }}>{t.title}</div>
                <div style={{
                  ...activityMetaStyle,
                }}>{t.dur}</div>
              </div>
              <WaveIcon color={KUN.brick}/>
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
  );
}

const STORIES = [
  {
    title: 'La nube viajera',
    description: 'Una nube aprende a viajar sin apuro, disfrutando el camino.',
    duration: '2 min', color: KUN.clear,
    text: 'Una nube pequeña viajaba despacio por el cielo azul. No tenía prisa. Pasaba sobre los árboles y los saludaba con suavidad. Pasaba sobre el río y se miraba en el agua tranquila. A veces se detenía y dejaba caer una lluvia muy suave, casi un susurro. Las flores levantaban sus pétalos para recibirla. Los pájaros cantaban bajito. La nube seguía su camino sin apurarse, flotando, flotando. Sabía que no importaba llegar rápido. Lo importante era el viaje. Irse despacio. Sentir el viento. Mirar el mundo desde arriba, con calma. Como tú, que estás llegando al mundo poco a poco.',
  },
  {
    title: 'El pez pequeño',
    description: 'Un pez chiquito descubre que su tamaño no define su valentía.',
    duration: '2 min', color: KUN.apple,
    text: 'En el fondo del mar vivía un pez muy pequeñito. Era tan chiquito que a veces se asustaba de su propia sombra. Un día se animó a salir y nadó entre corales rojos y amarillos. Conoció estrellas que brillaban en la arena y a una tortuga muy paciente que le dijo: "No tengas miedo de ser pequeño. Lo importante es seguir nadando, despacio, a tu ritmo." El pez aprendió que aunque era chiquito, tenía un corazón grande. Y con cada aleteo se hacía un poquito más fuerte. Como tú, mi amor, que cada día creces un poquito más.',
  },
  {
    title: 'La semilla',
    description: 'Una semilla que duerme bajo la tierra y florece con su propio tiempo.',
    duration: '2 min', color: KUN.sun,
    text: 'Había una vez una semilla que dormía bajo la tierra. Estaba abrigada y tranquila, escuchando los sonidos del mundo. Un día sintió calor en su piel y unas gotitas de agua que la acariciaban. Muy despacio, comenzó a estirarse. Sacó una raíz hacia abajo y un brote suave hacia arriba. No tenía prisa. Sabía que crecer toma tiempo. Día tras día miró el sol asomarse y la luna pasar. Hasta que una mañana se convirtió en una flor. Tú también estás creciendo así, mi amor. Despacito, con tu propio tiempo, hasta florecer.',
  },
];

function ActivityRecordingList({ recordings = [] }) {
  if (!recordings.length) return null;
  return (
    <div style={{ margin: '-2px 0 12px 14px', display: 'flex', flexDirection: 'column', gap: 7 }}>
      {recordings.map((r, i) => (
        <div key={`${r.name}-${r.duration}-${i}`} style={{
          background: '#fff',
          border: `1px solid ${KUN.hair}`,
          borderRadius: 16,
          padding: '9px 11px',
          display: 'flex',
          alignItems: 'center',
          gap: 9,
        }}>
          <div style={{ width: 28, height: 28, borderRadius: 14, background: r.color || KUN.rosehip, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            {VINK_ICONS.mic(KUN.ink)}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: V_FT, fontSize: 13, fontWeight: 700, color: KUN.ink, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {r.author || 'Mamá'} · {r.duration}
            </div>
            <div style={{ fontFamily: V_FB, fontSize: 11, color: KUN.inkMuted, marginTop: 1 }}>
              {r.time || 'Hace un momento'}{r.readingSpeed ? ` · ${r.readingSpeed}` : ''}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function StoryRow({ story, onOpen, recordings = [] }) {
  return (
    <>
      <div onClick={onOpen} style={{
        ...activityTintCardStyle(story.color),
        marginBottom: recordings.length ? 8 : 10,
        cursor:'pointer',
        display:'flex', alignItems:'center', gap: 14,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: V_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2, marginBottom: 4 }}>{story.title}</div>
          <div style={{ fontFamily: V_FB, fontSize: 12.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.4, marginBottom: 6 }}>{story.description}</div>
          <div style={activityMetaStyle}>{story.duration}{recordings.length ? ` · ${recordings.length} grabacion${recordings.length === 1 ? '' : 'es'}` : ''}</div>
        </div>
      </div>
      <ActivityRecordingList recordings={recordings} />
    </>
  );
}

function CuentosTab({ onOpenStory, recordings = [] }) {
  return (
    <div style={{ padding: '0 20px 24px' }}>
      {STORIES.map((s, i) => (
        <StoryRow
          key={i}
          story={s}
          onOpen={() => onOpenStory(s)}
          recordings={recordings.filter(r => r.contentType === 'story' && r.contentTitle === s.title)}
        />
      ))}
    </div>
  );
}

// ── Canciones ────────────────────────────────────────────
const CANCIONES_DATA = [
  {
    title: 'Arrorró mi niño',
    duration: '2 min', color: KUN.viola,
    lyrics: `Arrorró mi niño, arrorrón.\n\nDuérmete, mi niño,\nque tengo que hacer,\nlavar los pañales,\nsentarme a coser.\n\nArrorrón, mi niño, arrorrén.\nEl niño se duerme,\n¿qué le cantaré?`,
  },
  {
    title: 'Duérmete, mi amor',
    duration: '2 min', color: KUN.rosehip,
    lyrics: `Duérmete mi niño,\nduérmete sonriendo,\nque la luna llena\nte está protegiendo.\n\nCierra tus ojitos,\ndescansa tu alma,\nque aquí estoy contigo,\nllenándote de calma.\n\nEres tan pequeño,\ntan lleno de vida,\neres todo nuestro,\nnuestra maravilla.`,
  },
  {
    title: 'Estrellita dónde estás',
    duration: '1 min', color: KUN.sun,
    lyrics: `Estrellita, ¿dónde estás?\nMe pregunto qué serás.\nEn el cielo o en el mar,\nun diamante singular.\n\nEstrellita, ¿dónde estás?\nMe pregunto qué serás.`,
  },
  {
    title: 'Buenos días, corazón',
    duration: '1 min', color: KUN.apple,
    lyrics: `Buenos días, corazón,\nnueva luz, nuevo calor.\nHoy te llamo suavecito,\nhoy te quiero un poquito más.\n\nBuenos días a tus ojos,\na tus manos, a tu voz.\nBuenos días, mi pequeño,\nhoy estamos aquí los dos.`,
  },
];

function CancionRow({ cancion, onOpen, recordings = [] }) {
  return (
    <>
      <div onClick={onOpen} style={{
        ...activityTintCardStyle(cancion.color),
        marginBottom: recordings.length ? 8 : 10,
        cursor:'pointer',
        display:'flex', alignItems:'center', gap: 14,
      }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: V_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2, marginBottom: 4 }}>{cancion.title}</div>
          <div style={activityMetaStyle}>{cancion.duration}{recordings.length ? ` · ${recordings.length} grabacion${recordings.length === 1 ? '' : 'es'}` : ''}</div>
        </div>
        <WaveIcon color={KUN.brick}/>
      </div>
      <ActivityRecordingList recordings={recordings} />
    </>
  );
}

function CancionesTab({ onOpenCancion, recordings = [] }) {
  return (
    <div style={{ padding: '0 20px 24px' }}>
      {CANCIONES_DATA.map((c, i) => (
        <CancionRow
          key={i}
          cancion={c}
          onOpen={() => onOpenCancion(c)}
          recordings={recordings.filter(r => r.contentType === 'cancion' && r.contentTitle === c.title)}
        />
      ))}
    </div>
  );
}

// ── Detail view for story or cancion ──────────────────────
function ContentDetailView({ item, type, onBack, onRecord }) {
  const isStory = type === 'story';
  return (
    <div style={{
      position:'absolute', inset: 0, zIndex: 100,
      background: KUN.bg, overflowY:'auto',
      paddingBottom: 48,
    }}>
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', gap: 12, padding:'4px 20px 18px' }}>
        <div onClick={onBack} style={{
          width: 40, height: 40, borderRadius:'50%', background:'#fff',
          display:'flex', alignItems:'center', justifyContent:'center',
          border: `1px solid ${KUN.hair}`, cursor:'pointer', flexShrink: 0,
        }}>{VINK_ICONS.back(KUN.ink)}</div>
        <div style={{ fontFamily: V_FT, fontSize: 20, fontWeight: 700, color: KUN.ink, letterSpacing: -0.4, lineHeight: 1.2 }}>
          {item.title}
        </div>
      </div>

      {/* Tag pill */}
      <div style={{ padding: '0 24px 16px' }}>
        <span style={{
          fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400,
        }}>
          {isStory
            ? `Cuento corto · ${item.duration} · Léelo en voz alta`
            : `Canción · ${item.duration} · Cántala en voz alta`}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '0 20px 22px' }}>
        <div style={{
          ...activityCardStyle,
          padding: '22px 20px',
          fontFamily: V_FB, fontSize: 15, color: KUN.ink, fontWeight: 400,
          lineHeight: 1.85, whiteSpace: 'pre-line', letterSpacing: 0.1,
        }}>
          {isStory ? item.text : item.lyrics}
        </div>
      </div>

      {/* Record CTA */}
      <div style={{ padding: '0 20px' }}>
        <button onClick={onRecord} style={{
          ...activityPrimaryButtonStyle,
          display:'flex', alignItems:'center', justifyContent:'center', gap: 8,
        }}>
          {VINK_ICONS.mic('#fff')}
          {isStory ? 'Grabar mientras leo' : 'Grabar cantando'}
        </button>
      </div>
    </div>
  );
}

function Recorder({ onClose, onSave, context }) {
  const [recording, setRecording] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  const [readingSpeed, setReadingSpeed] = React.useState('normal');
  const scriptRef = React.useRef(null);
  const ctx = context || { author: 'Mamá', role: 'Mamá - Voz para Sofía', color: KUN.rosehip, name: 'Para Sofía' };
  const hasScript = !!ctx.scriptText;
  const speedOptions = [
    { id: 'lenta', label: 'Lenta', px: 10 },
    { id: 'normal', label: 'Normal', px: 17 },
    { id: 'rapida', label: 'Rapida', px: 25 },
  ];
  const activeSpeed = speedOptions.find(opt => opt.id === readingSpeed) || speedOptions[1];

  React.useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [recording]);

  React.useEffect(() => {
    if (!hasScript || !scriptRef.current) return;
    const el = scriptRef.current;
    const target = recording ? seconds * activeSpeed.px : 0;
    el.scrollTo({ top: Math.min(target, el.scrollHeight), behavior: 'smooth' });
  }, [hasScript, recording, seconds, activeSpeed.px]);

  const fmt = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

  const save = () => {
    if (seconds === 0) { onClose(); return; }
    window.KUNAnalytics?.track('vinculo_grabacion_guardada', {
      recording_role: ctx.author || 'Mamá',
      duration_seconds: seconds,
      reading_speed: hasScript ? readingSpeed : undefined,
    });
    onSave({
      name: ctx.name || 'Para Sofía',
      duration: fmt(seconds),
      time: 'Hace un momento',
      author: ctx.author || 'Mamá',
      role: ctx.role || 'Mamá - Voz para Sofía',
      color: ctx.color || KUN.rosehip,
      readingSpeed: hasScript ? readingSpeed : undefined,
      contentType: ctx.contentType,
      contentTitle: ctx.contentTitle || ctx.name,
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

      <div style={{ flex: 1, display:'flex', flexDirection:'column', alignItems:'center', justifyContent: hasScript ? 'flex-start' : 'center', padding: hasScript ? '0 20px 20px' : 20 }}>
        {hasScript && (
          <div style={{
            width: '100%',
            background: '#fff',
            border: `1px solid ${KUN.hair}`,
            borderRadius: 24,
            padding: '15px 16px',
            marginBottom: 16,
            boxSizing: 'border-box',
            boxShadow: '0 8px 18px rgba(42,35,32,0.05)',
          }}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 10, marginBottom: 10 }}>
              <div>
                <div style={{ fontFamily: V_FB, fontSize: 11, fontWeight: 700, color: KUN.inkMuted, letterSpacing: .8, textTransform:'uppercase', marginBottom: 2 }}>
                  Lectura guiada
                </div>
                <div style={{ fontFamily: V_FT, fontSize: 17, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>
                  {ctx.name || 'Cuento'}
                </div>
              </div>
            </div>

            <div
              ref={scriptRef}
              style={{
                maxHeight: 178,
                overflowY: 'auto',
                padding: '14px 14px',
                borderRadius: 18,
                background: KUN.cardSoft,
                fontFamily: V_FB,
                fontSize: 15,
                lineHeight: 1.85,
                color: KUN.ink,
                whiteSpace: 'pre-line',
                scrollBehavior: 'smooth',
              }}
            >
              {ctx.scriptText}
            </div>

            <div style={{ marginTop: 12 }}>
              <div style={{ fontFamily: V_FB, fontSize: 11, fontWeight: 700, color: KUN.inkMuted, letterSpacing: .7, textTransform:'uppercase', marginBottom: 8 }}>
                Velocidad del texto
              </div>
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap: 8 }}>
                {speedOptions.map(opt => {
                  const selected = opt.id === readingSpeed;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setReadingSpeed(opt.id)}
                      style={{
                        height: 38,
                        borderRadius: 999,
                        border: `1.5px solid ${selected ? KUN.brick : KUN.hair}`,
                        background: selected ? KUN.rosehip : '#fff',
                        color: KUN.ink,
                        fontFamily: V_FT,
                        fontSize: 12.5,
                        fontWeight: 700,
                        cursor: 'pointer',
                      }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
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
            ...activityPrimaryButtonStyle,
            width: 'auto',
            marginTop: 28,
            padding: '14px 24px',
            background: KUN.brick,
          }}>
            Guardar para Sofía
          </button>
        )}
      </div>
    </div>
  );
}

function ActividadesGuagua({ onBack, recordings, addRecording, initialTab }) {
  const [sub, setSub] = React.useState(initialTab || 'cuentos');
  const [detailItem, setDetailItem] = React.useState(null); // { item, type }
  const [recording, setRecording] = React.useState(false);
  const [recordingContext, setRecordingContext] = React.useState({
    author: 'Mamá', role: 'Mamá - Actividades para Sofía', color: KUN.rosehip, name: 'Actividad para Sofía',
  });
  const startRecorder = (context) => {
    setRecordingContext(context);
    setRecording(true);
  };
  const openDetail = (item, type) => setDetailItem({ item, type });
  const closeDetail = () => setDetailItem(null);

  const TABS = [
    { id:'cuentos',   label:'Cuentos',   color: KUN.viola   },
    { id:'canciones', label:'Canciones', color: KUN.rosehip },
    { id:'musica',    label:'Música',    color: KUN.apple   },
  ];
  const tabIcon = (id, c) => {
    if (id === 'cuentos') return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M4 19.5C4 18.1 5.1 17 6.5 17H20" stroke={c} strokeWidth="2.2" strokeLinecap="round"/>
        <path d="M6.5 2H20V22H6.5C5.1 22 4 20.9 4 19.5V4.5C4 3.1 5.1 2 6.5 2Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round"/>
      </svg>
    );
    if (id === 'canciones') return (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M9 18V6l12-2v12" stroke={c} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="18" r="3" stroke={c} strokeWidth="2.2"/>
        <circle cx="18" cy="16" r="3" stroke={c} strokeWidth="2.2"/>
      </svg>
    );
    return <WaveIcon color={c} size={14}/>;
  };

  return (
    <div style={{ overflowX:'hidden', maxWidth:'100%', position:'relative', minHeight:'100%' }}>
      <SubHeader title="Actividades con mi hijo" onBack={onBack} />

      {/* Tab pills */}
      <div style={{ margin: '0 20px 18px', display:'flex', gap: 8 }}>
        {TABS.map(t => {
          const isA = t.id === sub;
          const iconColor = isA ? '#fff' : KUN.inkSoft;
          return (
            <div key={t.id} onClick={() => setSub(t.id)} style={{
              cursor: 'pointer',
              padding: '10px 13px',
              borderRadius: 999,
              background: isA ? KUN.brick : KUN.cardSoft,
              color: isA ? '#fff' : KUN.inkSoft,
              fontFamily: V_FT, fontSize: 13, fontWeight: 700, letterSpacing: 0.1,
              border: isA ? 'none' : `1px solid ${KUN.hair}`,
              transition: 'all .2s',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              {tabIcon(t.id, iconColor)}
              {t.label}
            </div>
          );
        })}
      </div>

      {sub === 'cuentos' && (
        <CuentosTab onOpenStory={(s) => openDetail(s, 'story')} recordings={recordings || []} />
      )}
      {sub === 'canciones' && (
        <CancionesTab onOpenCancion={(c) => openDetail(c, 'cancion')} recordings={recordings || []} />
      )}
      {sub === 'musica' && <MusicaTab />}

      {/* Detail view overlay */}
      {detailItem && (
        <ContentDetailView
          item={detailItem.item}
          type={detailItem.type}
          onBack={closeDetail}
          onRecord={() => {
            const isStory = detailItem.type === 'story';
            window.KUNAnalytics?.track('actividad_respondida', {
              tipo: isStory ? 'cuento' : 'cancion',
            });
            closeDetail();
            startRecorder({
              author: 'Mamá',
              role: `Mamá - ${isStory ? 'Cuento' : 'Canción'} para Sofía`,
              color: KUN.rosehip,
              name: detailItem.item.title,
              contentTitle: detailItem.item.title,
              contentType: isStory ? 'story' : 'cancion',
              scriptText: isStory ? detailItem.item.text : '',
              scriptType: isStory ? 'cuento' : 'cancion',
            });
          }}
        />
      )}

      {recording && <Recorder
        onClose={() => setRecording(false)}
        onSave={addRecording}
        context={recordingContext}
      />}
    </div>
  );
}

// ── Diario de vida — feed mosaico (rediseño) ─────────────

const DIARY_FEED_KEY = 'kun_diary_entries_v1';

function diaryDateLabel(dateStr) {
  const d = new Date(dateStr + 'T12:00:00');
  const days   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
  const months = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  return `${days[d.getDay()]}, ${d.getDate()} de ${months[d.getMonth()]}`;
}

function groupFeedByDate(entries) {
  const map = {};
  entries.forEach(e => { if (!map[e.date]) map[e.date] = []; map[e.date].push(e); });
  return Object.keys(map).sort((a,b) => a.localeCompare(b)).map(d => ({
    date: d, entries: map[d].sort((a,b) => a.ts - b.ts),
  }));
}

const DIARY_FEED_SEED = [
  // ── 2026-06-08 · 4 entradas (foto + texto + audio + foto) ──────────────
  { id:'df1',  type:'photo', ts:new Date('2026-06-08T10:00').getTime(), date:'2026-06-08',
    imageSrc:'guaguas/guagua1.jpg', text:'Hoy abriste los ojos cuando te hablé.',
    color:null, category:null, audioDuration:null },
  { id:'df2',  type:'text',  ts:new Date('2026-06-08T12:30').getTime(), date:'2026-06-08',
    text:'Me quedé quieta mirándote un buen rato. Fue un momento chiquitito y enorme al mismo tiempo.',
    color:KUN.rosehip, category:'Momento', imageSrc:null, audioDuration:null },
  { id:'df3',  type:'audio', ts:new Date('2026-06-08T15:00').getTime(), date:'2026-06-08',
    audioDuration:'0:34', text:null, imageSrc:null, color:null, category:null },
  { id:'df4',  type:'photo', ts:new Date('2026-06-08T17:00').getTime(), date:'2026-06-08',
    imageSrc:'guaguas/guagua2.jpg', text:null,
    color:null, category:null, audioDuration:null },

  // ── 2026-06-07 · 3 entradas (foto + texto + foto) ──────────────────────
  { id:'df5',  type:'photo', ts:new Date('2026-06-07T11:00').getTime(), date:'2026-06-07',
    imageSrc:'guaguas/guagua3.jpg', text:'Piel con piel por primera vez.',
    color:null, category:null, audioDuration:null },
  { id:'df6',  type:'text',  ts:new Date('2026-06-07T14:00').getTime(), date:'2026-06-07',
    text:'Tu calor es real. Por un rato el mundo bajó el volumen.',
    color:KUN.viola, category:'Momento', imageSrc:null, audioDuration:null },
  { id:'df7',  type:'photo', ts:new Date('2026-06-07T17:30').getTime(), date:'2026-06-07',
    imageSrc:'guaguas/guagua4.jpg', text:null,
    color:null, category:null, audioDuration:null },

  // ── 2026-06-05 · 2 entradas (texto + audio) ────────────────────────────
  { id:'df8',  type:'text',  ts:new Date('2026-06-05T10:00').getTime(), date:'2026-06-05',
    text:'Hoy te desconectaron de la ECMO. El equipo celebró contigo.',
    color:KUN.sun, category:'Hito', imageSrc:null, audioDuration:null },
  { id:'df9',  type:'audio', ts:new Date('2026-06-05T18:00').getTime(), date:'2026-06-05',
    audioDuration:'1:09', text:null, imageSrc:null, color:null, category:null },

  // ── 2026-06-03 · 1 entrada (foto) ──────────────────────────────────────
  { id:'df10', type:'photo', ts:new Date('2026-06-03T13:00').getTime(), date:'2026-06-03',
    imageSrc:'guaguas/guagua5.jpeg', text:null,
    color:null, category:null, audioDuration:null },

  // ── 2026-06-01 · 3 entradas (audio + foto + texto) ─────────────────────
  { id:'df11', type:'audio', ts:new Date('2026-06-01T09:00').getTime(), date:'2026-06-01',
    audioDuration:'0:58', text:null, imageSrc:null, color:null, category:null },
  { id:'df12', type:'photo', ts:new Date('2026-06-01T12:00').getTime(), date:'2026-06-01',
    imageSrc:'guaguas/guagua6.webp', text:'Tu primera semana.',
    color:null, category:null, audioDuration:null },
  { id:'df13', type:'text',  ts:new Date('2026-06-01T19:00').getTime(), date:'2026-06-01',
    text:'La enfermera nos enseñó a cambiarte el pañal. Aprendimos una forma más de cuidarte.',
    color:KUN.apple, category:'Avance', imageSrc:null, audioDuration:null },

  // ── 2026-05-29 · 2 entradas (foto + foto) ──────────────────────────────
  { id:'df14', type:'photo', ts:new Date('2026-05-29T11:00').getTime(), date:'2026-05-29',
    imageSrc:'guaguas/guagua7.jpg', text:null,
    color:null, category:null, audioDuration:null },
  { id:'df15', type:'photo', ts:new Date('2026-05-29T16:00').getTime(), date:'2026-05-29',
    imageSrc:'guaguas/guagua8.jpeg', text:'Papá te tomó la mano.',
    color:null, category:null, audioDuration:null },

  // ── 2026-05-27 · 1 entrada (texto) ─────────────────────────────────────
  { id:'df16', type:'text',  ts:new Date('2026-05-27T20:00').getTime(), date:'2026-05-27',
    text:'Hoy fue difícil. No hubo grandes cambios. Pero estuvimos aquí de todas formas.',
    color:KUN.clear, category:'Momento', imageSrc:null, audioDuration:null },

  // ── 2026-05-25 · 4 entradas (foto + texto + audio + foto) ──────────────
  { id:'df17', type:'photo', ts:new Date('2026-05-25T10:00').getTime(), date:'2026-05-25',
    imageSrc:'guaguas/guagua9.jpg', text:'Primera foto juntos.',
    color:null, category:null, audioDuration:null },
  { id:'df18', type:'text',  ts:new Date('2026-05-25T11:30').getTime(), date:'2026-05-25',
    text:'Querida Sofía, hoy quiero que sepas que desde el primer día estuvimos aquí. Y seguiremos estando.',
    color:KUN.sun, category:'Carta', imageSrc:null, audioDuration:null },
  { id:'df19', type:'audio', ts:new Date('2026-05-25T14:00').getTime(), date:'2026-05-25',
    audioDuration:'1:42', text:null, imageSrc:null, color:null, category:null },
  { id:'df20', type:'photo', ts:new Date('2026-05-25T16:30').getTime(), date:'2026-05-25',
    imageSrc:'guaguas/guagua10.jpg', text:null,
    color:null, category:null, audioDuration:null },
];

function diaryInitials(name = '') {
  const clean = name.trim();
  if (!clean) return '+';
  return clean.split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase();
}

function FamilyTreePerson({ person = {}, role, size = 58 }) {
  const hasPhoto = !!person.photo;
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:5, minWidth:size + 2 }}>
      <div style={{
        maxWidth: size + 28,
        background:'#FFFDF9',
        border:`1px solid ${KUN.hair}`,
        borderRadius:999,
        padding:'3px 8px',
        fontFamily:V_FB,
        fontSize:size < 44 ? 8.5 : 9.5,
        fontWeight:600,
        color:KUN.inkSoft,
        lineHeight:1.1,
        textAlign:'center',
        transform:'rotate(-8deg)',
        whiteSpace:'normal',
      }}>{role}</div>
      <div style={{
        width:size,
        height:size,
        borderRadius:'50%',
        background:hasPhoto ? '#fff' : '#EFEDE8',
        border:'3px solid #fff',
        boxShadow:'0 7px 16px rgba(42,35,32,0.12)',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        overflow:'hidden',
        fontFamily:V_FT,
        fontSize:hasPhoto ? 0 : 21,
        fontWeight:700,
        color:KUN.ink,
      }}>
        {hasPhoto
          ? <img src={person.photo} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          : diaryInitials(person.name)}
      </div>
      {person.name && (
        <div style={{
          maxWidth:72,
          fontFamily:V_FB,
          fontSize:9.5,
          color:KUN.ink,
          lineHeight:1.15,
          textAlign:'center',
          overflow:'hidden',
          display:'-webkit-box',
          WebkitLineClamp:2,
          WebkitBoxOrient:'vertical',
        }}>{person.name}</div>
      )}
    </div>
  );
}

function FamilyTreePreview({ data = {}, compact = false }) {
  const people = data.people || {};
  const bg = data.color || '#FFF7E8';
  return (
    <div style={{
      background:bg,
      borderRadius:18,
      padding:compact ? '12px 10px 14px' : '16px 12px 18px',
      border:`1px solid ${KUN.hairSoft}`,
      overflow:'hidden',
      position:'relative',
    }}>
      <div style={{
        position:'absolute',
        left:'50%',
        top:compact ? 68 : 82,
        width:compact ? 110 : 150,
        height:compact ? 110 : 145,
        transform:'translateX(-50%)',
        borderRadius:'48% 52% 46% 54%',
        background:'radial-gradient(circle at 38% 28%, rgba(141,166,110,0.52) 0 16%, transparent 17%), radial-gradient(circle at 62% 26%, rgba(111,168,95,0.45) 0 15%, transparent 16%), radial-gradient(circle at 48% 48%, rgba(141,166,110,0.52) 0 22%, transparent 23%), radial-gradient(circle at 28% 58%, rgba(111,168,95,0.38) 0 16%, transparent 17%), radial-gradient(circle at 70% 58%, rgba(141,166,110,0.42) 0 18%, transparent 19%)',
        opacity:.72,
      }} />
      <div style={{
        position:'absolute',
        left:'50%',
        top:compact ? 146 : 174,
        width:compact ? 26 : 34,
        height:compact ? 82 : 102,
        transform:'translateX(-50%)',
        borderRadius:'50% 50% 12px 12px',
        background:'linear-gradient(90deg, #A9825D, #7F6045)',
        opacity:.42,
      }} />
      <div style={{ position:'relative', zIndex:1 }}>
        <div style={{
          display:'flex',
          alignItems:'flex-start',
          justifyContent:'space-between',
          gap:3,
          marginBottom:compact ? 12 : 18,
        }}>
          <FamilyTreePerson role="Abuelo paterno" person={people.paternalGrandfather} size={compact ? 34 : 52} />
          <FamilyTreePerson role="Abuela paterna" person={people.paternalGrandmother} size={compact ? 34 : 52} />
          <FamilyTreePerson role="Abuela materna" person={people.maternalGrandmother} size={compact ? 34 : 52} />
          <FamilyTreePerson role="Abuelo materno" person={people.maternalGrandfather} size={compact ? 34 : 52} />
        </div>
        <div style={{
          display:'flex',
          alignItems:'flex-start',
          justifyContent:'center',
          gap:compact ? 46 : 64,
          marginBottom:compact ? 12 : 18,
        }}>
          <FamilyTreePerson role="Papá" person={people.father} size={compact ? 42 : 58} />
          <FamilyTreePerson role="Mamá" person={people.mother} size={compact ? 42 : 58} />
        </div>
        <div style={{ display:'flex', justifyContent:'center' }}>
          <FamilyTreePerson role="Yo" person={people.me} size={compact ? 50 : 68} />
        </div>
      </div>
    </div>
  );
}

// Registro central: para sumar otra plantilla, agrega una entrada aqui con fields y Preview.
const DIARY_ENTRY_TEMPLATES = [
  {
    id:'family-tree',
    name:'Arbol genealogico',
    icon:'tree',
    color:'#FFF5DC',
    shortDescription:'Guarda nombres y fotos de la familia cercana.',
    fields:[
      { id:'me', label:'Yo', type:'person' },
      { id:'father', label:'Papa', type:'person' },
      { id:'mother', label:'Mama', type:'person' },
      { id:'paternalGrandfather', label:'Abuelo paterno', type:'person' },
      { id:'paternalGrandmother', label:'Abuela paterna', type:'person' },
      { id:'maternalGrandfather', label:'Abuelo materno', type:'person' },
      { id:'maternalGrandmother', label:'Abuela materna', type:'person' },
    ],
    Preview: FamilyTreePreview,
  },
];

function getDiaryEntryTemplate(templateId) {
  return DIARY_ENTRY_TEMPLATES.find(t => t.id === templateId) || null;
}

function DiaryFeedPhotoCard({ entry, onOpen }) {
  return (
    <button onClick={onOpen} style={{ border:'none', padding:0, width:'100%', display:'block', borderRadius:16, overflow:'hidden', position:'relative', background:'transparent', cursor:'pointer', textAlign:'left' }}>
      <img src={entry.imageSrc} alt="" style={{ width:'100%', display:'block', objectFit:'cover' }}/>
      {entry.text && (
        <div style={{
          position:'absolute', bottom:0, left:0, right:0,
          padding:'22px 10px 10px',
          background:'linear-gradient(transparent, rgba(42,35,32,0.55))',
        }}>
          <div style={{ fontFamily:V_FB, fontSize:12, color:'#fff', lineHeight:1.35 }}>{entry.text}</div>
        </div>
      )}
    </button>
  );
}

function DiaryFeedTemplateCard({ entry, onOpen }) {
  const template = getDiaryEntryTemplate(entry.templateId);
  if (!template?.Preview) return null;
  const Preview = template.Preview;
  return (
    <button onClick={onOpen} style={{
      width:'100%',
      textAlign:'left',
      background:'#fff',
      borderRadius:18,
      padding:10,
      border:`1px solid ${KUN.hair}`,
      boxShadow:'0 8px 18px rgba(42,35,32,0.045)',
      cursor:'pointer',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:8, margin:'2px 2px 9px' }}>
        <div style={{ width:28, height:28, borderRadius:10, background:template.color, display:'flex', alignItems:'center', justifyContent:'center' }}>
          <TemplateIcon icon={template.icon} color={KUN.ink} />
        </div>
        <div>
          <div style={{ fontFamily:V_FT, fontSize:13.5, fontWeight:700, color:KUN.ink, lineHeight:1.1 }}>{entry.title || template.name}</div>
          <div style={{ fontFamily:V_FB, fontSize:10.5, fontWeight:600, color:KUN.inkMuted, letterSpacing:.5, textTransform:'uppercase', marginTop:2 }}>Plantilla</div>
        </div>
      </div>
      <Preview data={entry.templateData || {}} compact />
    </button>
  );
}

function DiaryFeedNoteCard({ entry, onOpen }) {
  const bg = entry.color ? tint(entry.color, 0.32) : KUN.cardSoft;
  return (
    <button onClick={onOpen} style={{ width:'100%', border:'none', background:bg, borderRadius:16, padding:'13px 13px', textAlign:'left', cursor:'pointer' }}>
      {entry.category && (
        <div style={{
          fontFamily:V_FT, fontSize:10, fontWeight:700, color:KUN.inkSoft,
          letterSpacing:0.7, textTransform:'uppercase', marginBottom:5,
        }}>{entry.category}</div>
      )}
      <div style={{ fontFamily:V_FB, fontSize:13.5, color:KUN.ink, lineHeight:1.55 }}>
        {entry.text}
      </div>
    </button>
  );
}

function DiaryFeedAudioCard({ entry, onOpen }) {
  const [playing, setPlaying] = React.useState(false);
  return (
    <button onClick={onOpen} style={{
      width:'100%',
      textAlign:'left',
      background:'#fff', borderRadius:16, padding:'12px 11px',
      border:`1px solid ${KUN.hair}`,
      cursor:'pointer',
    }}>
      <div style={{ display:'flex', alignItems:'center', gap:8 }}>
        <span onClick={(e) => { e.stopPropagation(); setPlaying(p => !p); }} style={{
          width:34, height:34, borderRadius:'50%', border:'none',
          background:KUN.brick,
          display:'flex', alignItems:'center', justifyContent:'center',
          cursor:'pointer', flexShrink:0,
        }}>
          {playing ? VINK_ICONS.pause('#fff', 11) : VINK_ICONS.play('#fff', 11)}
        </span>
        <svg viewBox="0 0 80 22" style={{ flex:1, height:18, minWidth:0 }}>
          {Array.from({length:18}).map((_,i) => {
            const h = 4 + Math.abs(Math.sin(i * 0.8)) * 13;
            return <rect key={i} x={i*4.4} y={(22-h)/2} width="2.4" height={h} rx="1.2"
              fill={KUN.brick} opacity={i < 10 ? 0.88 : 0.28}/>;
          })}
        </svg>
        <span style={{ fontFamily:V_FT, fontSize:10.5, fontWeight:700, color:KUN.inkMuted, flexShrink:0 }}>
          {entry.audioDuration || '0:42'}
        </span>
      </div>
    </button>
  );
}

const EXPORT_FORMATS = [
  { id:'story', label:'Historia', size:'9:16', width:1080, height:1920 },
  { id:'feed', label:'Feed', size:'1:1', width:1080, height:1080 },
  { id:'whatsapp', label:'WhatsApp', size:'4:5', width:1080, height:1350 },
];

function getExportEntryTitle(entry = {}) {
  if (entry.title) return entry.title;
  if (entry.type === 'photo') return entry.text || 'Foto de hoy';
  if (entry.type === 'audio') return 'Audio guardado';
  return entry.category || 'Recuerdo KUN';
}

function getExportEntryKind(entry = {}) {
  if (entry.type === 'photo' || entry.imageSrc) return 'photo';
  if (entry.type === 'audio') return 'audio';
  if (entry.templateId) return 'template';
  return 'text';
}

function loadExportImage(src) {
  return new Promise((resolve) => {
    if (!src) return resolve(null);
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function drawRoundedRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight, maxLines = 4) {
  const words = String(text || '').replace(/\s+/g, ' ').trim().split(' ').filter(Boolean);
  const lines = [];
  let line = '';
  words.forEach(word => {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if (line) lines.push(line);
  lines.slice(0, maxLines).forEach((ln, i) => {
    const finalLine = i === maxLines - 1 && lines.length > maxLines ? `${ln.replace(/[.,;:!?]*$/, '')}...` : ln;
    ctx.fillText(finalLine, x, y + i * lineHeight);
  });
  return Math.min(lines.length, maxLines) * lineHeight;
}

function drawKangarooMark(ctx, x, y, size, color) {
  const s = size / 40;
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.strokeStyle = color;
  ctx.fillStyle = '#F6C3AE';
  ctx.lineWidth = 2.1;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(10, 30);
  ctx.bezierCurveTo(10, 22, 13, 17, 17, 15);
  ctx.bezierCurveTo(16, 13, 16.5, 10.5, 18.5, 9.5);
  ctx.bezierCurveTo(20.5, 8.5, 23, 9.5, 23.5, 11.5);
  ctx.bezierCurveTo(24, 13, 23.5, 14.5, 22.5, 15.5);
  ctx.bezierCurveTo(25.5, 16.5, 28, 19, 29, 22.5);
  ctx.bezierCurveTo(29.5, 24, 29.5, 26, 29, 27.5);
  ctx.bezierCurveTo(28.5, 29, 27.5, 30.5, 26, 31);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(10, 30);
  ctx.bezierCurveTo(8, 30.5, 7, 31.5, 7.5, 33);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(21, 10.5);
  ctx.bezierCurveTo(21.3, 9, 21.8, 8, 22.5, 7.5);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(18, 24, 4.6, 3.9, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(17.2, 23.2, 0.9, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

function drawExportWave(ctx, x, y, w, h, color) {
  const count = 36;
  const gap = w / count;
  ctx.fillStyle = color;
  for (let i = 0; i < count; i += 1) {
    const barH = h * (0.18 + Math.abs(Math.sin(i * 0.72)) * 0.78);
    const bx = x + i * gap + gap * 0.28;
    const by = y + (h - barH) / 2;
    drawRoundedRect(ctx, bx, by, gap * 0.42, barH, gap * 0.2);
    ctx.globalAlpha = i < 24 ? 0.95 : 0.34;
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

async function buildDiaryExportImage(entry, format) {
  const canvas = document.createElement('canvas');
  canvas.width = format.width;
  canvas.height = format.height;
  const ctx = canvas.getContext('2d');
  const W = canvas.width;
  const H = canvas.height;
  const kind = getExportEntryKind(entry);
  const photo = await loadExportImage(entry.imageSrc || getEntryPhotos(entry)[0]);
  const bg = entry.color || (kind === 'photo' ? KUN.ink : KUN.bg);
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  if (photo) {
    const coverScale = Math.max(W / photo.width, H / photo.height);
    const iw = photo.width * coverScale;
    const ih = photo.height * coverScale;
    ctx.drawImage(photo, (W - iw) / 2, (H - ih) / 2, iw, ih);
    const gradient = ctx.createLinearGradient(0, 0, 0, H);
    gradient.addColorStop(0, 'rgba(42,35,32,0.18)');
    gradient.addColorStop(0.45, 'rgba(42,35,32,0.05)');
    gradient.addColorStop(1, 'rgba(42,35,32,0.68)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, W, H);
  } else {
    const soft = ctx.createLinearGradient(0, 0, W, H);
    soft.addColorStop(0, '#FAF6F1');
    soft.addColorStop(0.52, entry.color || '#F6C3AE');
    soft.addColorStop(1, '#F2EBE0');
    ctx.fillStyle = soft;
    ctx.fillRect(0, 0, W, H);
    ctx.globalAlpha = 0.42;
    ctx.fillStyle = KUN.rosehip;
    ctx.beginPath();
    ctx.arc(W * 0.15, H * 0.14, W * 0.34, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = KUN.viola;
    ctx.beginPath();
    ctx.arc(W * 0.92, H * 0.28, W * 0.28, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  const pad = Math.round(W * 0.065);
  const logoColor = photo ? '#fff' : KUN.ink;
  drawKangarooMark(ctx, pad, pad, Math.round(W * 0.082), logoColor);
  ctx.fillStyle = logoColor;
  ctx.font = `800 ${Math.round(W * 0.052)}px Quicksand, sans-serif`;
  ctx.fillText('KUN', pad + Math.round(W * 0.095), pad + Math.round(W * 0.057));

  const footerH = kind === 'audio' ? Math.round(H * 0.33) : Math.round(H * 0.26);
  const boxY = H - footerH - pad;
  const boxX = pad;
  const boxW = W - pad * 2;
  drawRoundedRect(ctx, boxX, boxY, boxW, footerH, Math.round(W * 0.04));
  ctx.fillStyle = photo ? 'rgba(250,246,241,0.92)' : 'rgba(255,255,255,0.82)';
  ctx.fill();

  ctx.fillStyle = KUN.inkMuted;
  ctx.font = `700 ${Math.round(W * 0.026)}px Poppins, sans-serif`;
  ctx.fillText((entry.category || 'Album de vinculo').toUpperCase(), boxX + pad * 0.55, boxY + Math.round(W * 0.072));

  ctx.fillStyle = KUN.ink;
  ctx.font = `800 ${Math.round(W * 0.053)}px Quicksand, sans-serif`;
  const titleY = boxY + Math.round(W * 0.125);
  const titleHeight = wrapCanvasText(ctx, getExportEntryTitle(entry), boxX + pad * 0.55, titleY, boxW - pad * 1.1, Math.round(W * 0.06), 2);

  if (kind === 'audio') {
    const waveY = titleY + titleHeight + Math.round(W * 0.03);
    drawExportWave(ctx, boxX + pad * 0.55, waveY, boxW - pad * 1.1, Math.round(W * 0.11), KUN.brick);
    ctx.font = `700 ${Math.round(W * 0.032)}px Quicksand, sans-serif`;
    ctx.fillStyle = KUN.inkSoft;
    ctx.fillText(entry.audioDuration || '0:42', boxX + pad * 0.55, waveY + Math.round(W * 0.16));
  } else {
    ctx.fillStyle = KUN.inkSoft;
    ctx.font = `500 ${Math.round(W * 0.035)}px Poppins, sans-serif`;
    wrapCanvasText(ctx, entry.text || 'Un recuerdo guardado en el album de vinculo.', boxX + pad * 0.55, titleY + titleHeight + Math.round(W * 0.025), boxW - pad * 1.1, Math.round(W * 0.047), 4);
  }

  return new Promise(resolve => {
    canvas.toBlob(blob => resolve({ blob, dataUrl: canvas.toDataURL('image/png') }), 'image/png', 0.95);
  });
}

function DiaryExportSheet({ entry, onClose }) {
  const [formatId, setFormatId] = React.useState('story');
  const [image, setImage] = React.useState(null);
  const [busy, setBusy] = React.useState(true);
  const format = EXPORT_FORMATS.find(f => f.id === formatId) || EXPORT_FORMATS[0];

  React.useEffect(() => {
    let alive = true;
    setBusy(true);
    buildDiaryExportImage(entry, format).then(next => {
      if (!alive) return;
      setImage(next);
      setBusy(false);
    });
    return () => { alive = false; };
  }, [entry?.id, formatId]);

  const fileName = `kun-recuerdo-${format.id}.png`;
  const downloadImage = () => {
    if (!image?.dataUrl) return;
    const link = document.createElement('a');
    link.href = image.dataUrl;
    link.download = fileName;
    link.click();
    window.KUNAnalytics?.track('diario_recuerdo_exportado', { formato: format.id, destino: 'descarga', tipo: getExportEntryKind(entry) });
  };
  const shareImage = async (destino) => {
    if (!image?.blob) return;
    const file = new File([image.blob], fileName, { type:'image/png' });
    try {
      if (navigator.canShare?.({ files:[file] }) && navigator.share) {
        await navigator.share({ title:'Recuerdo KUN', text:'Un recuerdo de nuestro album KUN', files:[file] });
        window.KUNAnalytics?.track('diario_recuerdo_exportado', { formato: format.id, destino, tipo: getExportEntryKind(entry) });
      } else {
        downloadImage();
      }
    } catch (err) {
      if (err?.name !== 'AbortError') downloadImage();
    }
  };

  return (
    <div onClick={onClose} style={{ position:'absolute', inset:0, zIndex:240, background:'rgba(42,35,32,0.42)', display:'flex', alignItems:'flex-end' }}>
      <div onClick={e => e.stopPropagation()} style={{ width:'100%', maxHeight:'92%', overflowY:'auto', background:KUN.bg, borderTopLeftRadius:28, borderTopRightRadius:28, padding:'14px 18px 28px', boxSizing:'border-box' }}>
        <div style={{ width:44, height:5, borderRadius:3, background:KUN.inkFaint, margin:'0 auto 16px' }}/>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap:12, marginBottom:14 }}>
          <div>
            <div style={{ fontFamily:V_FT, fontSize:20, fontWeight:700, color:KUN.ink }}>Compartir recuerdo</div>
            <div style={{ fontFamily:V_FB, fontSize:12.5, color:KUN.inkSoft, marginTop:3 }}>Exporta una imagen lista para redes.</div>
          </div>
          <button onClick={onClose} style={{ border:'none', background:'transparent', color:KUN.brick, fontFamily:V_FT, fontSize:13, fontWeight:700, cursor:'pointer' }}>Cerrar</button>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:8, marginBottom:14 }}>
          {EXPORT_FORMATS.map(opt => {
            const active = opt.id === formatId;
            return (
              <button key={opt.id} onClick={() => setFormatId(opt.id)} style={{ border:active ? 'none' : `1px solid ${KUN.hair}`, background:active ? KUN.brick : '#fff', color:active ? '#fff' : KUN.ink, borderRadius:16, padding:'10px 6px', fontFamily:V_FT, fontSize:12.5, fontWeight:700, cursor:'pointer' }}>
                <span style={{ display:'block' }}>{opt.label}</span>
                <span style={{ display:'block', marginTop:2, fontFamily:V_FB, fontSize:10.5, fontWeight:500, opacity:.78 }}>{opt.size}</span>
              </button>
            );
          })}
        </div>

        <div style={{ background:'#fff', border:`1px solid ${KUN.hair}`, borderRadius:22, padding:12, display:'flex', justifyContent:'center', marginBottom:14 }}>
          {busy && <div style={{ height:320, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:V_FB, fontSize:13, color:KUN.inkMuted }}>Preparando imagen...</div>}
          {!busy && image?.dataUrl && (
            <img src={image.dataUrl} alt="Vista previa de exportacion" style={{ width: format.id === 'feed' ? '82%' : '58%', maxHeight:420, objectFit:'contain', borderRadius:18, boxShadow:'0 10px 28px rgba(42,35,32,0.14)' }} />
          )}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:9 }}>
          <button onClick={() => shareImage('instagram')} disabled={busy} style={{ height:46, borderRadius:999, border:'none', background:KUN.viola, color:KUN.ink, fontFamily:V_FT, fontSize:13.5, fontWeight:700, cursor:busy?'wait':'pointer' }}>Instagram</button>
          <button onClick={() => shareImage('whatsapp')} disabled={busy} style={{ height:46, borderRadius:999, border:'none', background:KUN.apple, color:KUN.ink, fontFamily:V_FT, fontSize:13.5, fontWeight:700, cursor:busy?'wait':'pointer' }}>WhatsApp</button>
          <button onClick={() => shareImage('otros')} disabled={busy} style={{ height:46, borderRadius:999, border:`1px solid ${KUN.hair}`, background:'#fff', color:KUN.ink, fontFamily:V_FT, fontSize:13.5, fontWeight:700, cursor:busy?'wait':'pointer' }}>Otros</button>
          <button onClick={downloadImage} disabled={busy} style={{ height:46, borderRadius:999, border:'none', background:KUN.brick, color:'#fff', fontFamily:V_FT, fontSize:13.5, fontWeight:700, cursor:busy?'wait':'pointer' }}>Descargar</button>
        </div>
      </div>
    </div>
  );
}

function DiaryNoteSheet({ onClose, onSave }) {
  const [text, setText] = React.useState('');
  const [color, setColor] = React.useState(KUN.rosehip);
  const [categoria, setCategoria] = React.useState('Momento');
  const colors = [KUN.rosehip, KUN.sun, KUN.apple, KUN.clear, KUN.viola];
  const cats   = ['Momento', 'Avance', 'Emoción', 'Cuidado'];
  return (
    <div style={{ position:'absolute', inset:0, zIndex:220, background:'rgba(42,35,32,0.35)', display:'flex', alignItems:'flex-end' }}>
      <div style={{ width:'100%', background:KUN.bg, borderTopLeftRadius:28, borderTopRightRadius:28, padding:'14px 20px 30px', boxSizing:'border-box' }}>
        <div style={{ width:44, height:5, borderRadius:3, background:KUN.inkFaint, margin:'0 auto 16px' }}/>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
          <div style={{ fontFamily:V_FT, fontSize:19, fontWeight:700, color:KUN.ink }}>Nueva nota</div>
          <button onClick={onClose} style={{ border:'none', background:'transparent', fontFamily:V_FT, fontSize:13, fontWeight:700, color:KUN.brick, cursor:'pointer' }}>Cancelar</button>
        </div>
        <textarea autoFocus value={text} onChange={e => setText(e.target.value)}
          placeholder="Escribe lo que quieras recordar..."
          style={{ width:'100%', minHeight:140, resize:'none', boxSizing:'border-box', border:`1.5px solid ${KUN.hair}`, borderRadius:20, background:'#fff', padding:'14px 16px', outline:'none', fontFamily:V_FB, fontSize:15, color:KUN.ink, lineHeight:1.55 }}/>
        <div style={{ background:'#fff', borderRadius:20, border:`1px solid ${KUN.hair}`, padding:14, marginTop:10 }}>
          <div style={{ fontFamily:V_FB, fontSize:11, fontWeight:600, color:KUN.inkMuted, letterSpacing:0.7, textTransform:'uppercase', marginBottom:8 }}>Color</div>
          <div style={{ display:'flex', gap:9, marginBottom:14 }}>
            {colors.map(c => <button key={c} onClick={() => setColor(c)} style={{ width:28, height:28, borderRadius:'50%', background:c, border:color===c?`2px solid ${KUN.ink}`:'2px solid #fff', boxShadow:`0 0 0 1.5px ${KUN.hair}`, cursor:'pointer' }}/>)}
          </div>
          <div style={{ fontFamily:V_FB, fontSize:11, fontWeight:600, color:KUN.inkMuted, letterSpacing:0.7, textTransform:'uppercase', marginBottom:8 }}>Categoría</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:8 }}>
            {cats.map(c => (
              <button key={c} onClick={() => setCategoria(c)} style={{ border:categoria===c?'none':`1px solid ${KUN.hair}`, background:categoria===c?KUN.brick:KUN.cardSoft, color:categoria===c?'#fff':KUN.inkSoft, borderRadius:999, padding:'8px 12px', fontFamily:V_FT, fontSize:13, fontWeight:700, cursor:'pointer' }}>{c}</button>
            ))}
          </div>
        </div>
        <button onClick={() => { if (!text.trim()) return; onSave({ type:'text', text:text.trim(), color, category:categoria }); onClose(); }}
          disabled={!text.trim()} style={{ width:'100%', marginTop:14, height:48, borderRadius:999, border:'none', background:text.trim()?KUN.brick:'rgba(42,35,32,0.10)', color:text.trim()?'#fff':KUN.inkMuted, fontFamily:V_FT, fontSize:15, fontWeight:700, cursor:text.trim()?'pointer':'not-allowed' }}>
          Guardar nota
        </button>
      </div>
    </div>
  );
}

function DiaryPhotoCaptionSheet({ imageSrc, onClose, onSave }) {
  const [text, setText] = React.useState('');
  return (
    <div style={{ position:'absolute', inset:0, zIndex:220, background:'rgba(42,35,32,0.35)', display:'flex', alignItems:'flex-end' }}>
      <div style={{ width:'100%', maxHeight:'88%', overflowY:'auto', background:KUN.bg, borderTopLeftRadius:28, borderTopRightRadius:28, padding:'14px 20px 30px', boxSizing:'border-box' }}>
        <div style={{ width:44, height:5, borderRadius:3, background:KUN.inkFaint, margin:'0 auto 16px' }}/>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
          <div>
            <div style={{ fontFamily:V_FT, fontSize:19, fontWeight:700, color:KUN.ink }}>Foto del dia</div>
            <div style={{ fontFamily:V_FB, fontSize:12, color:KUN.inkMuted, marginTop:2 }}>Puedes sumar una frase breve.</div>
          </div>
          <button onClick={onClose} style={{ border:'none', background:'transparent', fontFamily:V_FT, fontSize:13, fontWeight:700, color:KUN.brick, cursor:'pointer' }}>Cancelar</button>
        </div>
        <img src={imageSrc} alt="" style={{ width:'100%', maxHeight:260, objectFit:'cover', borderRadius:22, display:'block', marginBottom:12 }} />
        <textarea autoFocus value={text} onChange={e => setText(e.target.value)}
          placeholder="Escribe algo que quieras recordar de esta foto..."
          style={{ width:'100%', minHeight:112, resize:'none', boxSizing:'border-box', border:`1.5px solid ${KUN.hair}`, borderRadius:20, background:'#fff', padding:'14px 16px', outline:'none', fontFamily:V_FB, fontSize:15, color:KUN.ink, lineHeight:1.55 }}/>
        <button onClick={() => onSave({ type:'photo', imageSrc, text:text.trim() || null })}
          style={{ width:'100%', marginTop:14, height:48, borderRadius:999, border:'none', background:KUN.brick, color:'#fff', fontFamily:V_FT, fontSize:15, fontWeight:700, cursor:'pointer' }}>
          Guardar foto
        </button>
      </div>
    </div>
  );
}

function DiaryGuideSheet({ onClose, onSave }) {
  const [category, setCategory] = React.useState(null);
  const [color,    setColor]    = React.useState(null);
  const [text,     setText]     = React.useState('');

  const swatches = ['#EAF2E7','#E9EEF7','#F6C3AE','#CDBCDB','#FFF5DC','#F2EBE0'];
  const activeColor = color || (category ? category.color : null);
  const canSave     = !!(category && text.trim());

  const insertPrompt = (p) => setText(prev => prev ? prev + ' ' + p : p);

  return (
    <div style={{ position:'absolute', inset:0, zIndex:220, background:'rgba(42,35,32,0.38)',
      display:'flex', alignItems:'flex-end' }}>
      <div style={{
        width:'100%', maxHeight:'88%', overflowY:'auto',
        background:KUN.bg, borderTopLeftRadius:28, borderTopRightRadius:28,
        padding:'14px 20px 32px', boxSizing:'border-box',
      }}>
        {/* Handle */}
        <div style={{ width:44, height:5, borderRadius:3, background:KUN.inkFaint, margin:'0 auto 16px' }}/>

        {/* Header */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:18 }}>
          <div style={{ fontFamily:V_FT, fontSize:19, fontWeight:700, color:KUN.ink }}>Usar una guía</div>
          <button onClick={onClose} style={{ border:'none', background:'transparent',
            fontFamily:V_FT, fontSize:13, fontWeight:700, color:KUN.brick, cursor:'pointer' }}>
            Cancelar
          </button>
        </div>

        {/* 1 — CATEGORÍA */}
        <div style={{ marginBottom:18 }}>
          <div style={{ fontFamily:V_FB, fontSize:11, fontWeight:600, color:KUN.inkMuted,
            letterSpacing:0.7, textTransform:'uppercase', marginBottom:10 }}>Categoría</div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:7 }}>
            {guidedTemplates.map(t => {
              const sel = category?.id === t.id;
              return (
                <button key={t.id}
                  onClick={() => { setCategory(t); if (!color) setColor(t.color); }}
                  style={{
                    border: sel ? 'none' : `1px solid ${KUN.hair}`,
                    background: sel ? KUN.brick : KUN.cardSoft,
                    color: sel ? '#fff' : KUN.inkSoft,
                    borderRadius:999, padding:'8px 14px',
                    fontFamily:V_FT, fontSize:12.5, fontWeight:700, cursor:'pointer',
                  }}>
                  {t.category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2 — COLOR SUAVE */}
        <div style={{ background:'#fff', borderRadius:20, border:`1px solid ${KUN.hair}`,
          padding:'12px 14px', marginBottom:14 }}>
          <div style={{ fontFamily:V_FB, fontSize:11, fontWeight:600, color:KUN.inkMuted,
            letterSpacing:0.7, textTransform:'uppercase', marginBottom:9 }}>Color suave</div>
          <div style={{ display:'flex', gap:9 }}>
            {swatches.map(c => (
              <button key={c} onClick={() => setColor(c)} style={{
                width:32, height:32, borderRadius:'50%', background:c,
                border: activeColor === c ? `2.5px solid ${KUN.ink}` : '2px solid #fff',
                boxShadow:`0 0 0 1.5px ${KUN.hair}`, cursor:'pointer', flexShrink:0,
              }}/>
            ))}
          </div>
        </div>

        {/* 3 — TEXTO + prompts dinámicos */}
        <div style={{ marginBottom:16 }}>
          {category && (
            <div style={{
              background: activeColor || KUN.cardSoft,
              borderRadius:16, padding:'12px 14px', marginBottom:10,
              fontFamily:V_FT, fontSize:15, fontWeight:700, color:KUN.ink, lineHeight:1.4,
            }}>
              {category.mainPrompt}
            </div>
          )}

          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder={category
              ? (category.writingIdeas?.[0] || '¿Qué quieres contar?')
              : 'Primero elige una categoría arriba...'}
            style={{
              width:'100%', minHeight:110, resize:'none', boxSizing:'border-box',
              border:`1.5px solid ${KUN.hair}`, borderRadius:20, background:'#fff',
              padding:'14px 16px', outline:'none',
              fontFamily:V_FB, fontSize:14.5, color:KUN.ink, lineHeight:1.55,
            }}
          />

          {category && (
            <div style={{ marginTop:10 }}>
              <div style={{ fontFamily:V_FB, fontSize:11, fontWeight:600, color:KUN.inkMuted,
                letterSpacing:0.7, textTransform:'uppercase', marginBottom:8 }}>Ideas para escribir</div>
              <div style={{ display:'flex', flexDirection:'column', gap:6 }}>
                {[...(category.writingIdeas || []), ...(category.examples || [])].map((p, i) => (
                  <button key={i} onClick={() => insertPrompt(p)} style={{
                    textAlign:'left', border:`1px solid ${KUN.hair}`, background:'#fff',
                    borderRadius:12, padding:'9px 13px',
                    fontFamily:V_FB, fontSize:13, color:KUN.inkSoft,
                    cursor:'pointer', lineHeight:1.45,
                  }}>
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Guardar */}
        <button
          onClick={() => {
            if (!canSave) return;
            onSave({ type:'text', text:text.trim(), color:activeColor || KUN.cardSoft, category:category.category });
            onClose();
          }}
          disabled={!canSave}
          style={{
            width:'100%', height:50, borderRadius:999, border:'none',
            background: canSave ? KUN.brick : 'rgba(42,35,32,0.10)',
            color: canSave ? '#fff' : KUN.inkMuted,
            fontFamily:V_FT, fontSize:15, fontWeight:700,
            cursor: canSave ? 'pointer' : 'not-allowed',
          }}>
          Guardar en el diario
        </button>
      </div>
    </div>
  );
}

function DiaryTemplateGalleryCard({ template, onSelect }) {
  return (
    <button onClick={() => onSelect(template)} style={{
      border:`1px solid ${KUN.hair}`,
      background:'#fff',
      borderRadius:20,
      padding:14,
      display:'flex',
      gap:12,
      alignItems:'flex-start',
      textAlign:'left',
      cursor:'pointer',
      width:'100%',
    }}>
      <div style={{ width:42, height:42, borderRadius:15, background:template.color, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
        <TemplateIcon icon={template.icon} color={KUN.ink} />
      </div>
      <div style={{ flex:1, minWidth:0 }}>
        <div style={{ fontFamily:V_FT, fontSize:15.5, fontWeight:700, color:KUN.ink, lineHeight:1.15 }}>{template.name}</div>
        <div style={{ fontFamily:V_FB, fontSize:12, color:KUN.inkSoft, lineHeight:1.45, marginTop:4 }}>{template.shortDescription}</div>
      </div>
    </button>
  );
}

function DiaryTemplatePersonField({ field, value = {}, onChange }) {
  const update = (patch) => onChange({ ...value, ...patch });
  const handlePhoto = (file) => {
    if (!file?.type?.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => update({ photo: reader.result });
    reader.readAsDataURL(file);
  };
  return (
    <div style={{ background:'#fff', border:`1px solid ${KUN.hair}`, borderRadius:18, padding:12 }}>
      <div style={{ display:'flex', gap:10, alignItems:'center' }}>
        <div style={{
          width:48,
          height:48,
          borderRadius:'50%',
          background: value.photo ? '#fff' : KUN.cardSoft,
          overflow:'hidden',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          flexShrink:0,
          fontFamily:V_FT,
          fontSize:18,
          fontWeight:700,
          color:KUN.ink,
          border:`1px solid ${KUN.hair}`,
        }}>
          {value.photo ? <img src={value.photo} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} /> : diaryInitials(value.name)}
        </div>
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{ fontFamily:V_FB, fontSize:11, fontWeight:600, color:KUN.inkMuted, letterSpacing:.7, textTransform:'uppercase', marginBottom:6 }}>{field.label}</div>
          <input value={value.name || ''} onChange={e => update({ name:e.target.value })} placeholder="Nombre"
            style={{ width:'100%', boxSizing:'border-box', border:'none', borderBottom:`1px solid ${KUN.hair}`, outline:'none', padding:'4px 0 7px', fontFamily:V_FB, fontSize:14, color:KUN.ink, background:'transparent' }} />
        </div>
      </div>
      <label style={{
        display:'inline-flex',
        alignItems:'center',
        gap:6,
        marginTop:10,
        border:`1px solid ${KUN.hair}`,
        background:KUN.cardSoft,
        borderRadius:999,
        padding:'7px 10px',
        fontFamily:V_FT,
        fontSize:12,
        fontWeight:700,
        color:KUN.inkSoft,
        cursor:'pointer',
      }}>
        {VINK_ICONS.camera(KUN.inkMuted)} {value.photo ? 'Cambiar foto' : 'Agregar foto'}
        <input type="file" accept="image/*" style={{ display:'none' }} onChange={e => { handlePhoto(e.target.files?.[0]); e.target.value = ''; }} />
      </label>
    </div>
  );
}

function DiaryTemplateDynamicField({ field, value, onChange }) {
  if (field.type === 'person') return <DiaryTemplatePersonField field={field} value={value} onChange={onChange} />;
  return (
    <div style={{ background:'#fff', border:`1px solid ${KUN.hair}`, borderRadius:18, padding:12 }}>
      <div style={{ fontFamily:V_FB, fontSize:11, fontWeight:600, color:KUN.inkMuted, letterSpacing:.7, textTransform:'uppercase', marginBottom:7 }}>{field.label}</div>
      <input value={value || ''} onChange={e => onChange(e.target.value)} placeholder="Escribe aquí"
        style={{ width:'100%', boxSizing:'border-box', border:'none', borderBottom:`1px solid ${KUN.hair}`, outline:'none', padding:'4px 0 7px', fontFamily:V_FB, fontSize:14, color:KUN.ink, background:'transparent' }} />
    </div>
  );
}

function DiaryTemplateForm({ template, onBackToGallery, onClose, onSave }) {
  const [values, setValues] = React.useState({});
  const Preview = template.Preview;
  const setField = (field, value) => setValues(prev => ({ ...prev, [field.id]: value }));
  const templateData = { people: values, color: template.color };
  const hasContent = Object.values(values).some(value => {
    if (!value) return false;
    if (typeof value === 'string') return value.trim();
    return value.name?.trim() || value.photo;
  });

  return (
    <>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:14 }}>
        <button onClick={onBackToGallery} style={{ border:'none', background:'transparent', color:KUN.brick, fontFamily:V_FT, fontSize:13, fontWeight:700, cursor:'pointer', padding:0 }}>Volver</button>
        <button onClick={onClose} style={{ border:'none', background:'transparent', color:KUN.brick, fontFamily:V_FT, fontSize:13, fontWeight:700, cursor:'pointer', padding:0 }}>Cancelar</button>
      </div>
      <div style={{ background:'#fff', border:`1px solid ${KUN.hair}`, borderRadius:22, padding:14, marginBottom:12 }}>
        <div style={{ display:'flex', gap:12, alignItems:'center' }}>
          <div style={{ width:42, height:42, borderRadius:15, background:template.color, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <TemplateIcon icon={template.icon} color={KUN.ink} />
          </div>
          <div>
            <div style={{ fontFamily:V_FT, fontSize:19, fontWeight:700, color:KUN.ink, lineHeight:1.1 }}>{template.name}</div>
            <div style={{ fontFamily:V_FB, fontSize:12, color:KUN.inkMuted, lineHeight:1.4, marginTop:3 }}>{template.shortDescription}</div>
          </div>
        </div>
      </div>
      {Preview && (
        <div style={{ marginBottom:12 }}>
          <Preview data={templateData} />
        </div>
      )}
      <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:9, marginBottom:14 }}>
        {template.fields.map(field => (
          <DiaryTemplateDynamicField
            key={field.id}
            field={field}
            value={values[field.id]}
            onChange={(value) => setField(field, value)}
          />
        ))}
      </div>
      <button
        onClick={() => {
          if (!hasContent) return;
          onSave({
            type:'template',
            templateId:template.id,
            templateData,
            title:template.name,
            text:template.shortDescription,
            color:template.color,
            category:'Plantilla',
          });
          onClose();
        }}
        disabled={!hasContent}
        style={{
          width:'100%',
          height:50,
          borderRadius:999,
          border:'none',
          background:hasContent ? KUN.brick : 'rgba(42,35,32,0.10)',
          color:hasContent ? '#fff' : KUN.inkMuted,
          fontFamily:V_FT,
          fontSize:15,
          fontWeight:700,
          cursor:hasContent ? 'pointer' : 'not-allowed',
        }}>
        Guardar plantilla
      </button>
    </>
  );
}

function DiaryTemplateSheet({ onClose, onSave }) {
  const [selectedTemplate, setSelectedTemplate] = React.useState(null);
  return (
    <div style={{ position:'absolute', inset:0, zIndex:220, background:'rgba(42,35,32,0.38)', display:'flex', alignItems:'flex-end' }}>
      <div style={{ width:'100%', maxHeight:'90%', overflowY:'auto', background:KUN.bg, borderTopLeftRadius:28, borderTopRightRadius:28, padding:'14px 20px 32px', boxSizing:'border-box' }}>
        <div style={{ width:44, height:5, borderRadius:3, background:KUN.inkFaint, margin:'0 auto 16px' }}/>
        {!selectedTemplate ? (
          <>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:16 }}>
              <div>
                <div style={{ fontFamily:V_FT, fontSize:19, fontWeight:700, color:KUN.ink }}>Plantillas</div>
                <div style={{ fontFamily:V_FB, fontSize:12, color:KUN.inkSoft, lineHeight:1.45, marginTop:3 }}>Elige una forma visual para guardar un recuerdo.</div>
              </div>
              <button onClick={onClose} style={{ border:'none', background:'transparent', fontFamily:V_FT, fontSize:13, fontWeight:700, color:KUN.brick, cursor:'pointer' }}>Cancelar</button>
            </div>
            <div style={{ display:'grid', gridTemplateColumns:'1fr', gap:10 }}>
              {DIARY_ENTRY_TEMPLATES.map(template => (
                <DiaryTemplateGalleryCard key={template.id} template={template} onSelect={setSelectedTemplate} />
              ))}
            </div>
          </>
        ) : (
          <DiaryTemplateForm
            template={selectedTemplate}
            onBackToGallery={() => setSelectedTemplate(null)}
            onClose={onClose}
            onSave={onSave}
          />
        )}
      </div>
    </div>
  );
}

// ── Public entry ────────────────────────────────────────

// -- Diario de vida guiado - prototipo UCIN -------------------------------
const DIARY_GUIDED_KEY = 'kun_diary_guided_entries_v2';

const guidedTemplates = [
  { id:'hoy-celebramos', name:'Hoy celebramos', category:'Hoy celebramos', icon:'spark', color:'#F6C3AE', shortDescription:'Avances pequenos que merecen quedar guardados.', mainPrompt:'Hoy celebramos que...', writingIdeas:['Que paso hoy?', 'Por que fue importante para ustedes?', 'Como se sintieron al verlo?'], examples:['Hoy celebramos que subiste de peso.', 'Hoy celebramos que respiraste mejor.', 'Hoy celebramos que abriste los ojos.', 'Hoy celebramos una noticia pequena pero enorme.'] },
  { id:'hito-ucin', name:'Hito UCIN', category:'Hito UCIN', icon:'monitor', color:'#E9EEF7', shortDescription:'Cambios medicos o avances en los cuidados.', mainPrompt:'Hoy hubo un cambio importante en tus cuidados...', writingIdeas:['Que cambio hoy?', 'Como nos lo explico el equipo?', 'Como nos sentimos al saberlo?'], examples:['Primer dia sin ventilador.', 'Primer dia sin CPAP.', 'Primer dia sin oxigeno.', 'Primer dia sin sonda.', 'Primer dia sin via.', 'Primer dia sin fototerapia.', 'Primer dia fuera de incubadora.', 'Primer dia en cuna.', 'Primer dia con menos monitores.', 'Primer examen importante.', 'Primer resultado alentador.', 'Primer dia regulando mejor tu temperatura.'] },
  { id:'respiracion', name:'Respiracion', category:'Respiracion', icon:'breath', color:'#E9EEF7', shortDescription:'Apoyos, cambios y senales al respirar.', mainPrompt:'Hoy tu respiracion estuvo...', writingIdeas:['Necesitaste mas o menos apoyo?', 'Que notamos al verte respirar?', 'Que sentimos nosotros?'], examples:['Hoy te vimos respirar mas tranquilo/a.', 'Hoy celebramos que necesitaste menos oxigeno.', 'Hoy dimos un pasito mas hacia respirar solito/a.', 'Hoy el equipo ajusto tu apoyo respiratorio.'] },
  { id:'alimentacion', name:'Alimentacion', category:'Alimentacion', icon:'milk', color:'#EAF2E7', shortDescription:'Leche, sonda, pecho, mamadera o tolerancia.', mainPrompt:'Hoy tu alimentacion fue...', writingIdeas:['Como recibiste tu leche hoy?', 'Hubo algun avance?', 'Que aprendimos sobre tus senales?'], examples:['Hoy recibiste leche por sonda.', 'Hoy toleraste mejor la leche.', 'Hoy tomaste poquitos ml, pero para nosotros fue enorme.', 'Hoy mama logro extraerse leche para ti.', 'Hoy fue tu primera vez tomando por boca.', 'Hoy fue tu primera mamadera.', 'Hoy fue tu primera vez al pecho.', 'Hoy celebramos cada gotita.'] },
  { id:'piel-con-piel', name:'Piel con piel', category:'Piel con piel', icon:'heart', color:'#F6C3AE', shortDescription:'Cercania, contacto y momentos de apego.', mainPrompt:'Hoy te tuve cerca y senti...', writingIdeas:['Cuanto tiempo estuvieron juntos?', 'Que recuerdas de ese momento?', 'Que te gustaria contarle cuando sea grande?'], examples:['Hoy pudimos hacer piel con piel por primera vez.', 'Hoy senti tu calor.', 'Hoy escuchaste mi voz muy cerquita.', 'Hoy te tome la mano.', 'Hoy no pude tomarte, pero pude estar contigo de otra forma.', 'Hoy papa hizo piel con piel.', 'Hoy mama hizo piel con piel.'] },
  { id:'aprendimos-cuidarte', name:'Aprendimos a cuidarte', category:'Aprendizaje', icon:'hands', color:'#F6C3AE', shortDescription:'Tareas y cuidados que van aprendiendo.', mainPrompt:'Hoy aprendimos a cuidarte cuando...', writingIdeas:['Que aprendimos hoy?', 'Quien nos enseno?', 'Que sentimos al hacerlo por primera vez?'], examples:['Hoy aprendimos a cambiarte el panal.', 'Hoy aprendimos a tomarte la temperatura.', 'Hoy aprendimos como tocarte con cuidado.', 'Hoy aprendimos como contenerte.', 'Hoy ayudamos en tu aseo.', 'Hoy participamos en tus cuidados por primera vez.'] },
  { id:'dia-dificil', name:'Hoy fue dificil', category:'Dia dificil', icon:'cloud', color:'#F6C3AE', shortDescription:'Para dias complejos, sin forzar optimismo.', mainPrompt:'Hoy fue un dia dificil porque...', writingIdeas:['Que fue lo que mas costo?', 'Que ayudo un poquito?', 'Que quieres dejar registrado de este dia?'], examples:['Hoy nos costo esperar.', 'Hoy tuvimos miedo.', 'Hoy no sabemos bien que escribir.', 'Hoy solo queremos dejar registrado que estuvimos aqui.', 'Hoy no hubo grandes cambios, pero seguimos contigo.', 'Hoy aprendimos que avanzar tambien puede ser lento.'] },
  { id:'hoy-me-senti', name:'Hoy me senti', category:'Emocion', icon:'heart', color:'#F6C3AE', shortDescription:'Emociones de mama, papa o cuidador.', mainPrompt:'Hoy me senti...', writingIdeas:['Que emocion estuvo mas presente?', 'Que la provoco?', 'Que necesitabas en ese momento?'], examples:['Hoy me dio esperanza...', 'Hoy me dio miedo...', 'Hoy llore cuando...', 'Hoy sonrei cuando...', 'Hoy agradeci...', 'Hoy no tengo muchas palabras, pero quiero guardar este momento.'] },
  { id:'personalidad', name:'Tu personalidad', category:'Personalidad', icon:'star', color:'#F6C3AE', shortDescription:'Gestos, rasgos y pequenas senales.', mainPrompt:'Hoy nos mostraste que eres...', writingIdeas:['Que gesto hiciste?', 'Que nos llamo la atencion?', 'A quien nos recordaste?'], examples:['Hoy abriste los ojos cuando te hablamos.', 'Hoy moviste tus manos como si quisieras saludar.', 'Hoy hiciste una cara que parecia enojo.', 'Hoy te vimos tranquilo/a cuando escuchaste nuestra voz.', 'Hoy nos hiciste reir porque...', 'Cada dia te vemos mas tu.'] },
  { id:'cosas-calman', name:'Cosas que te calman', category:'Calma', icon:'music', color:'#F6C3AE', shortDescription:'Voces, sonidos y formas de contencion.', mainPrompt:'Hoy te calmo...', writingIdeas:['Que parecio ayudarte?', 'Que sonido, voz o gesto te tranquilizo?', 'Que descubrimos sobre ti?'], examples:['Hoy te calmo escuchar la voz de mama.', 'Hoy te gusto que te cantaramos.', 'Hoy te tranquilizaste con nuestras manos.', 'Hoy te leimos un cuento.', 'Hoy descubrimos algo que te gusta.', 'Hoy descubrimos algo que no te gusta tanto.'] },
  { id:'familia-visitas', name:'Familia y visitas', category:'Familia', icon:'people', color:'#F2EBE0', shortDescription:'Visitas, mensajes y apoyo cercano o a distancia.', mainPrompt:'Hoy recibiste carino de...', writingIdeas:['Quien vino o pregunto por ti?', 'Que mensaje te enviaron?', 'Como se sintio ese apoyo?'], examples:['Hoy vino a verte...', 'Hoy tus abuelos preguntaron por ti.', 'Hoy recibiste carino desde lejos.', 'Hoy alguien rezo o penso en ti.', 'Hoy una persona importante para nosotros te conocio.', 'Hoy alguien dejo un mensaje para ti.'] },
  { id:'equipo-salud', name:'Equipo de salud', category:'Equipo de salud', icon:'plus', color:'#E9EEF7', shortDescription:'Explicaciones, frases y acompanamiento del equipo.', mainPrompt:'Hoy alguien del equipo nos ayudo a...', writingIdeas:['Quien nos acompano hoy?', 'Que nos explico?', 'Que frase queremos recordar?'], examples:['Hoy una enfermera nos explico...', 'Hoy una persona del equipo nos dio tranquilidad.', 'Hoy aprendimos del equipo que...', 'Hoy queremos recordar el nombre de...', 'Hoy el equipo celebro contigo.', 'Hoy agradecemos especialmente a...'] },
  { id:'foto-hoy', name:'Foto de hoy', category:'Foto del dia', icon:'camera', color:'#F6C3AE', shortDescription:'Una imagen que habla por este dia.', mainPrompt:'Hoy guardamos esta foto porque...', writingIdeas:['Que muestra esta foto?', 'Por que es importante?', 'Que emocion tiene este recuerdo?'], examples:['Foto de tu incubadora.', 'Foto de tus manitos.', 'Foto de tus piecitos.', 'Foto de piel con piel.', 'Foto de tu primera mantita.', 'Foto de una visita especial.', 'Foto de un hito medico.'] },
  { id:'carta', name:'Carta para ti', category:'Carta', icon:'letter', color:'#F6C3AE', shortDescription:'Un mensaje directo para tu bebe.', mainPrompt:'Querido/a bebe, hoy quiero contarte que...', writingIdeas:['Que quieres que sepa?', 'Que le contarias cuando sea grande?', 'Que promesa o deseo quieres guardar?'], examples:['Hoy quiero que sepas que...', 'Tal vez no recuerdes estos dias, pero nosotros...', 'Hoy estuviste muy valiente.', 'Hoy nosotros tambien intentamos ser valientes.', 'Lo que sueno para ti es...', 'Gracias por ensenarme...'] },
  { id:'preparando-casa', name:'Preparandonos para casa', category:'Camino a casa', icon:'home', color:'#FFF5DC', shortDescription:'Pasos, aprendizajes y emociones hacia el alta.', mainPrompt:'Hoy dimos un paso mas hacia casa cuando...', writingIdeas:['Que aprendimos para cuidarte en casa?', 'Que nos emociona?', 'Que nos da miedo?'], examples:['Hoy nos hablaron del alta.', 'Hoy empezamos a prepararnos para llevarte a casa.', 'Hoy aprendimos un cuidado que necesitaremos en casa.', 'Hoy imaginamos como sera tu llegada.', 'Hoy fue tu ultimo dia con...', 'Hoy saliste de la UCIN.'] },
  { id:'llegada-casa', name:'Llegada a casa', category:'Llegada a casa', icon:'home', color:'#FFF5DC', shortDescription:'Para guardar el dia en que salieron de UCIN.', mainPrompt:'Llegaste a casa el dia...', writingIdeas:['Como fue ese momento?', 'Quienes estaban?', 'Que fue lo primero que hicieron?'], examples:['Te recibimos con...', 'Tu pieza estaba preparada con...', 'La primera noche en casa fue...', 'Despues de tantos dias en UCIN, llegar a casa se sintio...', 'Queremos recordar este dia porque...'] },
];

const DIARY_TEMPLATES = guidedTemplates;
const DIARY_COLORS = ['#EAF2E7', '#E9EEF7', '#F6C3AE', '#CDBCDB', '#FFF5DC', '#F2EBE0'];
const DIARY_CATEGORIES = ['Hoy celebramos', 'Hito UCIN', 'Respiracion', 'Alimentacion', 'Piel con piel', 'Aprendizaje', 'Dia dificil', 'Emocion', 'Personalidad', 'Calma', 'Familia', 'Equipo de salud', 'Foto del dia', 'Carta', 'Camino a casa', 'Llegada a casa'];

const CLASSIC_MEMORY_PROMPTS = [
  'Antes de que nacieras, te imaginabamos...',
  'Cuando supimos que venias en camino, sentimos...',
  'Tu llegada fue distinta a lo que imaginabamos, pero...',
  'El dia que naciste...',
  'La primera vez que te vimos fue...',
  'Cuando entraste a la UCIN sentimos...',
  'Naciste con semanas de gestacion...',
  'Tu espacio en la UCIN se veia asi...',
  'Tu incubadora o cunita hoy tenia...',
  'Despues de tantos dias en UCIN, llegar a casa se sintio...',
];

const emptyDiaryMedia = () => ({ photos: [], audios: [], videos: [] });
function diaryMediaFromTypes(types = []) {
  return {
    photos: types.includes('photo') ? ['guaguas/guagua1.jpg'] : [],
    audios: types.includes('audio') ? ['audio-placeholder'] : [],
    videos: types.includes('video') ? ['video-placeholder'] : [],
  };
}
function getEntryMedia(entry = {}) {
  if (entry.media && !Array.isArray(entry.media)) return {
    photos: entry.media.photos || [],
    audios: entry.media.audios || [],
    videos: entry.media.videos || [],
  };
  return {
    photos: entry.photos || (entry.media?.includes?.('photo') ? ['guaguas/guagua1.jpg'] : []),
    audios: entry.media?.includes?.('audio') ? ['audio-placeholder'] : [],
    videos: entry.media?.includes?.('video') ? ['video-placeholder'] : [],
  };
}
function getEntryMediaTypes(entry = {}) {
  const media = getEntryMedia(entry);
  return [
    media.photos.length ? 'photo' : null,
    media.audios.length ? 'audio' : null,
    media.videos.length ? 'video' : null,
  ].filter(Boolean);
}
function getEntryPhotos(entry = {}) {
  return getEntryMedia(entry).photos || [];
}

function getTemplateByCategory(category, fallback) {
  return guidedTemplates.find(t => t.category === category) || fallback || guidedTemplates[0];
}

const DIARY_SEED_ENTRIES = [
  { id:'seed-ecmo', date:'2026-06-20', type:'guided', templateId:'hito-ucin', title:'Hoy te desconectaron de la ECMO', text:'El equipo nos aviso temprano. Fue un dia inmenso, lleno de cuidado y de silencio compartido.', category:'Hito UCIN', color:'#E9EEF7', media:{ photos:['guaguas/guagua4.jpg'], audios:['audio-placeholder'], videos:[] }, createdAt:'2026-06-20T15:40:00', dateLabel:'Hoy', fullDate:'20 junio 2026', time:'15:40' },
  { id:'seed-ojos', date:'2026-06-20', type:'guided', templateId:'personalidad', title:'Abriste los ojos cuando te hablamos', text:'Nos quedamos quietos, mirandote. Fue un momento chiquitito y enorme al mismo tiempo.', category:'Personalidad', color:'#F6C3AE', media:{ photos:['guaguas/guagua5.jpeg'], audios:[], videos:[] }, createdAt:'2026-06-20T12:15:00', dateLabel:'Hoy', fullDate:'20 junio 2026', time:'12:15' },
  { id:'seed-peso', date:'2026-06-19', type:'guided', templateId:'hoy-celebramos', title:'Subiste 20 gramos', text:'La enfermera nos dijo que era una buena noticia para guardar con calma.', category:'Hoy celebramos', color:'#F6C3AE', media:{ photos:[], audios:['audio-placeholder'], videos:[] }, createdAt:'2026-06-19T10:30:00', dateLabel:'Ayer', fullDate:'19 junio 2026', time:'10:30' },
  { id:'seed-piel', date:'2026-06-19', type:'guided', templateId:'piel-con-piel', title:'Hoy pudimos hacer piel con piel', text:'Te senti cerca, tibio/a, respirando despacio. Por un rato el mundo bajo el volumen.', category:'Piel con piel', color:'#F6C3AE', media:{ photos:['guaguas/guagua6.webp','guaguas/guagua7.jpg'], audios:['audio-placeholder'], videos:[] }, createdAt:'2026-06-19T17:05:00', dateLabel:'Ayer', fullDate:'19 junio 2026', time:'17:05' },
  { id:'seed-panal', date:'2026-06-17', type:'guided', templateId:'aprendimos-cuidarte', title:'La enfermera nos enseno a cambiarte el panal', text:'Nos mostro paso a paso, sin apuro. Aprendimos una forma mas de cuidarte.', category:'Aprendizaje', color:'#F6C3AE', media:{ photos:['guaguas/guagua8.jpeg'], audios:[], videos:['video-placeholder'] }, createdAt:'2026-06-17T11:00:00', dateLabel:'Lun 17', fullDate:'17 junio 2026', time:'11:00' },
  { id:'seed-oxigeno', date:'2026-06-17', type:'guided', templateId:'respiracion', title:'Hoy necesitaste menos oxigeno', text:'Mirarte respirar un poco mas tranquilo nos ayudo a respirar tambien a nosotros.', category:'Respiracion', color:'#E9EEF7', media:{ photos:[], audios:[], videos:[] }, createdAt:'2026-06-17T16:20:00', dateLabel:'Lun 17', fullDate:'17 junio 2026', time:'16:20' },
  { id:'seed-leche', date:'2026-06-16', type:'guided', templateId:'alimentacion', title:'Hoy toleraste mejor la leche', text:'Fue poquito a poquito, pero el equipo nos dijo que era una buena senal.', category:'Alimentacion', color:'#EAF2E7', media:{ photos:[], audios:['audio-placeholder'], videos:[] }, createdAt:'2026-06-16T13:10:00', dateLabel:'Dom 16', fullDate:'16 junio 2026', time:'13:10' },
  { id:'seed-dificil', date:'2026-06-16', type:'guided', templateId:'dia-dificil', title:'Hoy no hubo grandes cambios, pero estuvimos contigo', text:'No fue un dia facil. Vinimos igual, te hablamos suave y dejamos este recuerdo sin exigirnos mas.', category:'Dia dificil', color:'#F6C3AE', media:{ photos:[], audios:[], videos:[] }, createdAt:'2026-06-16T19:30:00', dateLabel:'Dom 16', fullDate:'16 junio 2026', time:'19:30' },
  { id:'seed-abuelos', date:'2026-06-15', type:'guided', templateId:'familia-visitas', title:'Hoy tus abuelos te mandaron un mensaje', text:'Preguntaron por ti y nos pidieron contarte que te esperan con mucho carino.', category:'Familia', color:'#F2EBE0', media:{ photos:[], audios:['audio-placeholder'], videos:[] }, createdAt:'2026-06-15T18:00:00', dateLabel:'Sab 15', fullDate:'15 junio 2026', time:'18:00' },
  { id:'seed-casa', date:'2026-06-15', type:'guided', templateId:'preparando-casa', title:'Hoy dimos un paso mas hacia casa', text:'Nos explicaron un cuidado que necesitaremos practicar. Da emocion y tambien un poco de miedo.', category:'Camino a casa', color:'#FFF5DC', media:{ photos:['guaguas/guagua9.jpg'], audios:[], videos:[] }, createdAt:'2026-06-15T11:40:00', dateLabel:'Sab 15', fullDate:'15 junio 2026', time:'11:40' },
];
function DiaryMediaIcon({ type, color = KUN.inkMuted }) {
  if (type === 'audio') return VINK_ICONS.mic(color);
  if (type === 'video') {
    return <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><rect x="3" y="5" width="10" height="10" rx="2" stroke={color} strokeWidth="1.7"/><path d="M13 8L17 6V14L13 12" stroke={color} strokeWidth="1.7" strokeLinejoin="round"/></svg>;
  }
  return VINK_ICONS.camera(color);
}

function DiaryTopBar({ onBack, title = 'Diario de vida', action }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'42px 1fr 42px', alignItems:'center', gap: 10, padding:'8px 20px 16px' }}>
      <DiaryIconButton onClick={onBack} muted>{VINK_ICONS.back(KUN.ink)}</DiaryIconButton>
      <div style={{ textAlign:'center' }}>
        <div style={{ fontFamily: V_FT, fontSize: 12, fontWeight: 800, color: KUN.brick, letterSpacing: 1 }}>KUN</div>
        <div style={{ fontFamily: V_FT, fontSize: 22, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3, lineHeight: 1.05 }}>{title}</div>
      </div>
      <div>{action}</div>
    </div>
  );
}

function MediaButtons({ selected = [], onToggle }) {
  const items = [
    { id:'photo', label:'Foto' },
    { id:'video', label:'Video' },
    { id:'audio', label:'Audio' },
  ];
  return (
    <div style={{ display:'flex', gap: 8, flexWrap:'wrap' }}>
      {items.map(item => {
        const active = selected.includes(item.id);
        return (
          <button key={item.id} onClick={() => onToggle && onToggle(item.id)} style={{
            border: `1px solid ${active ? KUN.brick : KUN.hair}`,
            background: active ? '#FFF1EA' : '#fff',
            color: active ? KUN.brick : KUN.inkSoft,
            borderRadius: 999,
            padding: '9px 12px',
            fontFamily: V_FT,
            fontSize: 12.5,
            fontWeight: 700,
            display:'inline-flex',
            alignItems:'center',
            gap: 6,
            cursor:'pointer',
          }}>
            <DiaryMediaIcon type={item.id} color={active ? KUN.brick : KUN.inkMuted} /> {item.label}
          </button>
        );
      })}
    </div>
  );
}

function CategorySelector({ value, onChange }) {
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap: 8 }}>
      {DIARY_CATEGORIES.map(category => {
        const active = value === category;
        return (
          <button key={category} onClick={() => onChange(category)} style={{
            border: active ? 'none' : `1px solid ${KUN.hair}`,
            background: active ? KUN.brick : KUN.cardSoft,
            color: active ? '#fff' : KUN.inkSoft,
            borderRadius: 999,
            padding: '8px 11px',
            fontFamily: V_FT,
            fontSize: 12.5,
            fontWeight: 700,
            cursor:'pointer',
          }}>{category}</button>
        );
      })}
    </div>
  );
}

function MemoryHighlights({ entries, onOpenDay }) {
  const featured = entries.slice(0, 5);
  return (
    <section style={{ marginBottom: 20 }}>
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', padding:'0 22px 10px' }}>
        <div style={{ fontFamily: V_FT, fontSize: 17, fontWeight: 700, color: KUN.ink }}>Recuerdos destacados</div>
        <div style={{ fontFamily: V_FB, fontSize: 11, color: KUN.inkMuted }}>{entries.length} guardados</div>
      </div>
      <div style={{ display:'flex', gap: 12, overflowX:'auto', padding:'0 20px 4px', scrollSnapType:'x mandatory' }}>
        {featured.map(entry => {
          const photos = getEntryPhotos(entry);
          return (
            <button key={entry.id} onClick={() => onOpenDay(entry.fullDate)} style={{
              width: 206, minHeight: 132, flexShrink: 0, border:'none', borderRadius: 24, padding: 0,
              overflow:'hidden', background: photos[0] ? '#fff' : entry.color, position:'relative',
              textAlign:'left', cursor:'pointer', boxShadow:'0 10px 28px rgba(42,35,32,0.08)', scrollSnapAlign:'start',
            }}>
              {photos[0] && <img src={photos[0]} alt="" style={{ position:'absolute', inset:0, width:'100%', height:'100%', objectFit:'cover' }} />}
              <div style={{ position:'absolute', inset:0, background: photos[0] ? 'linear-gradient(180deg, rgba(42,35,32,0.05), rgba(42,35,32,0.58))' : 'transparent' }} />
              <div style={{ position:'relative', zIndex:1, minHeight:132, padding: 16, display:'flex', flexDirection:'column', justifyContent:'flex-end', boxSizing:'border-box' }}>
                <div style={{ fontFamily: V_FB, fontSize: 11, fontWeight: 600, color: photos[0] ? 'rgba(255,255,255,0.84)' : KUN.inkMuted, marginBottom: 7 }}>{entry.dateLabel} - {entry.category}</div>
                <div style={{ fontFamily: V_FT, fontSize: 17, fontWeight: 700, color: photos[0] ? '#fff' : KUN.ink, lineHeight: 1.12, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', whiteSpace: 'normal', wordWrap: 'break-word' }}>{entry.title}</div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function DiaryEntryCard({ entry, onOpen }) {
  const photos = getEntryPhotos(entry);
  const mediaTypes = getEntryMediaTypes(entry);
  const isGuided = entry.type === 'guided' || !!entry.templateId;
  return (
    <button onClick={onOpen} style={{
      width:'100%', border:'none', background:'#fff', borderRadius: 22, padding: 14,
      display:'grid', gridTemplateColumns: photos.length ? '1fr 74px' : '1fr', gap: 12,
      textAlign:'left', cursor:'pointer', borderTop: `1px solid ${KUN.hairSoft}`,
      boxShadow:'0 6px 18px rgba(42,35,32,0.045)',
    }}>
      <div style={{ minWidth:0 }}>
        <div style={{ display:'flex', alignItems:'center', gap: 7, marginBottom: 5, flexWrap:'wrap' }}>
          <span style={{ width: 8, height: 8, borderRadius:'50%', background: entry.color, boxShadow:`0 0 0 3px ${entry.color}55` }} />
          <span style={{ fontFamily: V_FB, fontSize: 11, color: KUN.inkMuted, fontWeight: 500 }}>{entry.time} - {entry.category}</span>
          {isGuided && <span style={{ borderRadius:999, background:'#FFF1EA', color:KUN.brick, padding:'3px 7px', fontFamily:V_FT, fontSize:10.5, fontWeight:700 }}>Guia</span>}
        </div>
        <div style={{ fontFamily: V_FT, fontSize: 16.5, fontWeight: 700, color: KUN.ink, lineHeight: 1.15 }}>{entry.title}</div>
        <div style={{ fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, lineHeight: 1.45, marginTop: 6, maxHeight: 38, overflow:'hidden' }}>{entry.text || 'Recuerdo guardado con medio adjunto.'}</div>
        <div style={{ display:'flex', gap: 7, marginTop: 9 }}>
          {mediaTypes.map(m => <span key={m} style={{ width: 28, height: 28, borderRadius: 14, background: KUN.cardSoft, display:'flex', alignItems:'center', justifyContent:'center' }}><DiaryMediaIcon type={m} /></span>)}
        </div>
      </div>
      {photos.length > 0 && (
        <div style={{ display:'grid', gridTemplateRows:'1fr 1fr', gap: 5, height: 96 }}>
          <img src={photos[0]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius: 14, gridRow: photos.length === 1 ? '1 / 3' : 'auto' }} />
          {photos[1] && <img src={photos[1]} alt="" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius: 14 }} />}
        </div>
      )}
    </button>
  );
}

function DiaryHome({ entries, onBack, onOpenDay, onCreate, canEditDiary }) {
  const groups = entries.reduce((acc, entry) => {
    acc[entry.fullDate] = acc[entry.fullDate] || [];
    acc[entry.fullDate].push(entry);
    return acc;
  }, {});
  return (
    <div style={{ minHeight:'100%', background: KUN.bg, paddingBottom: 108, position:'relative' }}>
      <DiaryTopBar onBack={onBack} />
      {!canEditDiary && <ReadOnlyDiaryNotice />}
      <div style={{ padding:'0 22px 16px', textAlign:'center' }}>
        <div style={{ fontFamily: V_FB, fontSize: 13.5, color: KUN.inkSoft, lineHeight: 1.55 }}>
          Este recuerdo es tuyo. Puedes escribirlo como quieras. No tiene que quedar perfecto.
        </div>
      </div>
      <MemoryHighlights entries={entries} onOpenDay={onOpenDay} />
      <div style={{ padding:'0 20px', display:'flex', flexDirection:'column', gap: 18 }}>
        {canEditDiary && (
          <button onClick={onCreate} style={{ width:'100%', border:'none', background:'#fff', borderRadius:22, padding:'14px 16px', display:'flex', alignItems:'center', gap:12, cursor:'pointer', boxShadow:'0 6px 18px rgba(42,35,32,0.045)', borderTop:`1px solid ${KUN.hairSoft}`, textAlign:'left' }}>
            <span style={{ width:38, height:38, borderRadius:19, background:KUN.brick, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{VINK_ICONS.plus('#fff')}</span>
            <span style={{ minWidth:0 }}>
              <span style={{ display:'block', fontFamily:V_FT, fontSize:15.5, fontWeight:700, color:KUN.ink }}>Agregar un recuerdo</span>
              <span style={{ display:'block', fontFamily:V_FB, fontSize:12, color:KUN.inkSoft, marginTop:2 }}>Puedes partir libremente o usar una guia suave.</span>
            </span>
          </button>
        )}
        {Object.keys(groups).map(date => (
          <section key={date}>
            <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', margin:'0 4px 10px' }}>
              <div style={{ fontFamily: V_FT, fontSize: 15, fontWeight: 700, color: KUN.ink }}>{date}</div>
              <button onClick={() => onOpenDay(date)} style={{ border:'none', background:'transparent', fontFamily: V_FT, fontSize: 12.5, fontWeight: 700, color: KUN.brick, cursor:'pointer' }}>Ver dia</button>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
              {groups[date].map(entry => <DiaryEntryCard key={entry.id} entry={entry} onOpen={() => onOpenDay(date)} />)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

function MemoryBlock({ block, onOpen }) {
  const base = { width:'100%', maxWidth:'100%', display:'block', boxSizing:'border-box', border:'none', borderRadius: block.kind === 'photo' ? 24 : 22, background: block.color || '#fff', padding: block.kind === 'photo' ? 0 : 15, textAlign:'left', cursor:'pointer', overflow:'hidden', minHeight: block.tall ? 180 : 118, boxShadow:'0 8px 22px rgba(42,35,32,0.055)' };
  if (block.kind === 'photo') return <button onClick={onOpen} style={{ ...base, minHeight: block.tall ? 238 : 150 }}><img src={block.src} alt="" style={{ width:'100%', height:'100%', minHeight: block.tall ? 238 : 150, objectFit:'cover', display:'block' }} /></button>;
  if (block.kind === 'audio') return <button onClick={onOpen} style={base}><div style={{ display:'flex', alignItems:'center', gap: 8, minWidth:0 }}><span style={{ width: 34, height: 34, borderRadius: 17, background: KUN.brick, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{VINK_ICONS.play('#fff', 12)}</span><svg viewBox="0 0 74 22" style={{ flex:1, height:22, minWidth:0 }}>{Array.from({length: 16}).map((_, i) => { const h = 5 + Math.abs(Math.sin(i * .8)) * 13; return <rect key={i} x={i * 4.5} y={(22 - h) / 2} width="2.4" height={h} rx="1.2" fill={KUN.inkSoft} opacity={i < 12 ? .9 : .38}/>; })}</svg><span style={{ fontFamily:V_FT, fontSize:11, fontWeight:700, color:KUN.inkMuted, flexShrink:0 }}>{block.duration || '00:42'}</span></div><div style={{ fontFamily: V_FT, fontSize: 15, fontWeight: 700, color: KUN.ink, marginTop: 12 }}>{block.title}</div></button>;
  if (block.kind === 'video') return <button onClick={onOpen} style={{ ...base, background:'#fff' }}><div style={{ height:96, borderRadius:18, background:block.color || KUN.cardSoft, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:10 }}>{DiaryMediaIcon({ type:'video', color:KUN.brick })}</div><div style={{ fontFamily:V_FT, fontSize:15, fontWeight:700, color:KUN.ink }}>{block.title}</div></button>;
  return (
    <button onClick={onOpen} style={base}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 8, marginBottom: 9 }}>
        <span style={{ fontFamily: V_FB, fontSize: 10.5, color: KUN.inkMuted, fontWeight: 600, letterSpacing: .5, textTransform:'uppercase' }}>{block.label}</span>
        <span style={{ fontFamily: V_FT, fontSize: 11, color: KUN.inkMuted, fontWeight: 700 }}>{block.time}</span>
      </div>
      <div style={{ fontFamily: V_FT, fontSize: 17, fontWeight: 700, color: KUN.ink, lineHeight: 1.12 }}>{block.title}</div>
      <div style={{ fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, lineHeight: 1.45, marginTop: 8 }}>{block.text}</div>
    </button>
  );
}

function DayFloatingAddButton({ onCreate }) {
  const target = typeof document !== 'undefined'
    ? document.querySelector('.kun-device')
    : null;
  const button = (
    <button onClick={onCreate} style={{
      position:'absolute',
      right: 24,
      bottom: 112,
      zIndex: 120,
      width: 54,
      height: 54,
      borderRadius:'50%',
      border:'none',
      background: KUN.brick,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      cursor:'pointer',
      boxShadow:'0 12px 24px rgba(240,116,62,0.28)',
    }}>{VINK_ICONS.plus('#fff')}</button>
  );
  return target && ReactDOM?.createPortal
    ? ReactDOM.createPortal(button, target)
    : button;
}

function DayTimeline({ date, entries, onBack, onCreate }) {
  const blocks = entries.flatMap(entry => {
    const media = getEntryMedia(entry);
    const core = [{ kind:'note', label:entry.category, title:entry.title, text:entry.text || 'Recuerdo guardado sin texto.', time:entry.time, color:entry.color, tall:entry.category === 'Carta' || entry.category === 'Dia dificil' }];
    const photos = media.photos.map((src, i) => ({ kind:'photo', src, tall:i === 0 && entry.category === 'Personalidad' }));
    const audios = media.audios.map(() => ({ kind:'audio', title:'Audio guardado', duration:'01:09', color:'#fff' }));
    const videos = media.videos.map(() => ({ kind:'video', title:'Video guardado', color:entry.color }));
    return [...core, ...photos, ...audios, ...videos];
  });
  return (
    <div style={{ minHeight:'100%', background: KUN.bg, paddingBottom: 108, position:'relative' }}>
      <DiaryTopBar onBack={onBack} title={date || 'Hoy'} />
      <div style={{ padding:'0 22px 18px' }}>
        <div style={{ fontFamily: V_FB, fontSize: 13, lineHeight: 1.55, color: KUN.inkSoft }}>Recuerdos de este dia, ordenados como album. No todo tiene que estar completo para quedar guardado.</div>
      </div>
      <div style={{ columnCount: 2, columnGap: 10, padding:'0 16px' }}>
        {blocks.map((block, i) => (
          <div key={i} style={{ breakInside:'avoid', WebkitColumnBreakInside:'avoid', marginBottom: 10 }}>
            <MemoryBlock block={block} />
          </div>
        ))}
        <div style={{ breakInside:'avoid', WebkitColumnBreakInside:'avoid', marginBottom: 10 }}>
          <MemoryBlock block={{ kind:'note', label:'Para recordar', title:'Un detalle pequeno', text:'Hoy queremos recordar este momento tal como fue.', time:'Noche', color:'#F6C3AE' }} />
        </div>
      </div>
      <DayFloatingAddButton onCreate={onCreate} />
    </div>
  );
}

function TemplateIcon({ icon, color = KUN.ink }) {
  if (icon === 'monitor') return KIcon.cat.ecmo(color);
  if (icon === 'heart') return KIcon.heart(color);
  if (icon === 'camera') return VINK_ICONS.camera(color);
  if (icon === 'people') return KIcon.people(color);
  if (icon === 'home') return KIcon.home(color);
  if (icon === 'book') return KIcon.book(color);
  if (icon === 'milk') return HIcon.bottle(color);
  if (icon === 'tree') {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 19V10" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M12 13C9 13 6.5 11 6.5 8.2C6.5 5.9 8.3 4 10.6 4C11.2 4 11.7 4.1 12 4.4C12.4 4.1 12.9 4 13.4 4C15.7 4 17.5 5.9 17.5 8.2C17.5 11 15 13 12 13Z" stroke={color} strokeWidth="1.7" strokeLinejoin="round"/>
        <path d="M8 20H16" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    );
  }
  return KIcon.spark(color);
}

function TemplateCard({ template, onSelect }) {
  return (
    <button onClick={() => onSelect(template)} style={{ border:`1px solid ${KUN.hair}`, background:'#fff', borderRadius: 20, padding: 14, display:'flex', gap: 12, alignItems:'flex-start', textAlign:'left', cursor:'pointer' }}>
      <span style={{ width: 42, height: 42, borderRadius: 15, background: template.color, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}><TemplateIcon icon={template.icon} color={KUN.ink} /></span>
      <span style={{ flex:1 }}>
        <span style={{ display:'block', fontFamily: V_FT, fontSize: 15.5, fontWeight: 700, color: KUN.ink }}>{template.name}</span>
        <span style={{ display:'block', fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, lineHeight: 1.45, marginTop: 3 }}>{template.shortDescription}</span>
      </span>
    </button>
  );
}

function TemplateSelector({ onSelect }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr', gap: 10 }}>
      {guidedTemplates.map(template => <TemplateCard key={template.id} template={template} onSelect={onSelect} />)}
    </div>
  );
}

function EntryModeSelector({ onFree, onGuide }) {
  return (
    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10, marginBottom: 18 }}>
      <button onClick={onFree} style={{ border:`1px solid ${KUN.hair}`, background:'#fff', borderRadius: 24, padding: 16, textAlign:'left', cursor:'pointer' }}>
        <div style={{ width: 42, height: 42, borderRadius: 16, background:'#FFF5DC', display:'flex', alignItems:'center', justifyContent:'center', marginBottom: 12 }}>{VINK_ICONS.text(KUN.ink)}</div>
        <div style={{ fontFamily: V_FT, fontSize: 16, fontWeight: 700, color: KUN.ink }}>Escribir libremente</div>
        <div style={{ fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, lineHeight: 1.45, marginTop: 5 }}>Una frase, una foto o lo que salga hoy.</div>
      </button>
      <button onClick={onGuide} style={{ border:`1px solid ${KUN.hair}`, background:'#fff', borderRadius: 24, padding: 16, textAlign:'left', cursor:'pointer' }}>
        <div style={{ width: 42, height: 42, borderRadius: 16, background:'#EAF2E7', display:'flex', alignItems:'center', justifyContent:'center', marginBottom: 12 }}>{KIcon.spark(KUN.ink)}</div>
        <div style={{ fontFamily: V_FT, fontSize: 16, fontWeight: 700, color: KUN.ink }}>Usar una guia</div>
        <div style={{ fontFamily: V_FB, fontSize: 12, color: KUN.inkSoft, lineHeight: 1.45, marginTop: 5 }}>Preguntas suaves para empezar.</div>
      </button>
    </div>
  );
}

function WritingIdeas({ ideas = [], onPick }) {
  return <div style={{ display:'flex', flexDirection:'column', gap: 7 }}>{ideas.slice(0, 3).map(idea => <button key={idea} onClick={() => onPick(idea)} style={{ border:'none', background: KUN.cardSoft, borderRadius: 14, padding:'10px 12px', textAlign:'left', fontFamily: V_FB, fontSize: 12.5, color: KUN.inkSoft, cursor:'pointer' }}>{idea}</button>)}</div>;
}

function ExampleChips({ examples = [], onPick }) {
  return <div style={{ display:'flex', gap:8, overflowX:'auto', paddingBottom:2 }}>{examples.map(example => <button key={example} onClick={() => onPick(example)} style={{ border:`1px solid ${KUN.hair}`, background:'#fff', color:KUN.inkSoft, borderRadius:999, padding:'8px 11px', fontFamily:V_FB, fontSize:12, whiteSpace:'nowrap', cursor:'pointer' }}>{example}</button>)}</div>;
}

function GuidedWritingCard({ color, text, setText, ideas, examples, showSuggestions, onStartWriting }) {
  const textareaRef = React.useRef(null);
  const hasEditedText = text.trim().length > 0 && !showSuggestions;
  const starterLineCount = Math.max(1, Math.ceil((text || '').length / 34));
  const focusEditor = (event) => {
    onStartWriting();
    if (event.target.tagName !== 'TEXTAREA') {
      textareaRef.current?.focus();
      const end = textareaRef.current?.value.length || 0;
      textareaRef.current?.setSelectionRange(end, end);
    }
  };
  return (
    <div onClick={focusEditor} style={{ border:`1px solid ${KUN.hair}`, borderRadius: 22, background: color, padding: 16, cursor:'text' }}>
      <textarea
        ref={textareaRef}
        value={text}
        onFocus={onStartWriting}
        onChange={e => setText(e.target.value)}
        placeholder=""
        style={{
          height: showSuggestions ? starterLineCount * 24 : 160,
          minHeight: showSuggestions ? starterLineCount * 24 : 160,
          width:'100%',
          resize:'none',
          boxSizing:'border-box',
          border:'none',
          background:'transparent',
          padding: 0,
          outline:'none',
          fontFamily: V_FB,
          fontSize: 15,
          fontWeight: hasEditedText ? 400 : 600,
          lineHeight: 1.55,
          color: KUN.ink,
          overflow:'hidden',
          marginBottom: showSuggestions ? 4 : 0,
        }}
      />
      {showSuggestions && (
        <div style={{ fontFamily: V_FB, fontSize: 12.5, color: KUN.inkMuted, lineHeight: 1.62, marginBottom: 14 }}>
          {ideas.slice(0, 3).map(idea => <div key={idea}>{idea}</div>)}
          {examples.slice(0, 3).map(example => <div key={example}>{example}</div>)}
        </div>
      )}
    </div>
  );
}

function SoftColorSelector({ value, onChange }) {
  return <div style={{ display:'flex', gap: 9, marginBottom: 16 }}>{DIARY_COLORS.map(c => <button key={c} onClick={() => onChange(c)} style={{ width: 30, height: 30, borderRadius:'50%', background:c, border: value === c ? `2px solid ${KUN.ink}` : '2px solid #fff', boxShadow:`0 0 0 1px ${KUN.hair}`, cursor:'pointer' }} />)}</div>;
}

function ClassicPromptStrip({ onPick }) {
  return (
    <div style={{ margin:'2px 0 16px' }}>
      <div style={{ fontFamily: V_FB, fontSize: 11, fontWeight: 600, color: KUN.inkMuted, letterSpacing: .8, textTransform:'uppercase', marginBottom: 8 }}>Tambien puedes partir desde un recuerdo clasico</div>
      <div style={{ display:'flex', gap:8, overflowX:'auto' }}>{CLASSIC_MEMORY_PROMPTS.slice(0, 6).map(prompt => <button key={prompt} onClick={() => onPick(prompt)} style={{ border:`1px solid ${KUN.hair}`, background:'#fff', borderRadius:999, padding:'8px 12px', fontFamily:V_FB, fontSize:12, color:KUN.inkSoft, whiteSpace:'nowrap', cursor:'pointer' }}>{prompt}</button>)}</div>
    </div>
  );
}

function FreeEditor({ onSave, onUseGuide }) {
  const [text, setText] = React.useState('');
  const [media, setMedia] = React.useState([]);
  const toggleMedia = (type) => setMedia(prev => prev.includes(type) ? prev.filter(x => x !== type) : [...prev, type]);
  const canSave = text.trim() || media.length;
  const saveTitle = text.trim().split('\n')[0] || (media.includes('photo') ? 'Foto de hoy' : media.includes('audio') ? 'Audio de hoy' : media.includes('video') ? 'Video de hoy' : 'Recuerdo de hoy');
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
      <div style={{ fontFamily: V_FB, fontSize: 13, color: KUN.inkSoft, lineHeight: 1.5 }}>Puedes escribir solo una frase. Tambien puedes guardar solo una foto.</div>
      <ClassicPromptStrip onPick={(prompt) => setText(prev => prev ? `${prev}\n${prompt} ` : `${prompt} `)} />
      <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Escribe lo que quieras recordar de hoy..." style={{ minHeight: 190, width:'100%', resize:'none', boxSizing:'border-box', border:`1px solid ${KUN.hair}`, borderRadius: 22, background:'#fff', padding: 16, outline:'none', fontFamily: V_FB, fontSize: 15, lineHeight: 1.55, color: KUN.ink }} />
      <MediaButtons selected={media} onToggle={toggleMedia} />
      {onUseGuide && <button onClick={onUseGuide} style={{ border:'none', background:'transparent', color:KUN.brick, fontFamily:V_FT, fontSize:13, fontWeight:700, cursor:'pointer', alignSelf:'flex-start' }}>Elige una guia si no sabes por donde partir</button>}
      <button onClick={() => onSave({ text, selectedMedia:media, category:'Foto del dia', color:'#F6C3AE', title:saveTitle, type:'free' })} disabled={!canSave} style={{ height: 48, borderRadius: 999, border:'none', background: canSave ? KUN.brick : 'rgba(42,35,32,.12)', color: canSave ? '#fff' : KUN.inkMuted, fontFamily: V_FT, fontSize: 15, fontWeight: 700, cursor:canSave ? 'pointer' : 'not-allowed' }}>Guardar recuerdo</button>
    </div>
  );
}

function GuidedEditor({ template, onSave, onFree }) {
  const [text, setText] = React.useState(template.mainPrompt || '');
  const [hasStartedWriting, setHasStartedWriting] = React.useState(false);
  const [media, setMedia] = React.useState([]);
  const [color, setColor] = React.useState(template.color || '#FCE7DE');
  const [category, setCategoryState] = React.useState(template.category || 'Emocion');
  const categoryTemplate = getTemplateByCategory(category, template);
  const setCategory = (nextCategory) => {
    const nextTemplate = getTemplateByCategory(nextCategory, template);
    setCategoryState(nextCategory);
    if (nextTemplate?.color) setColor(nextTemplate.color);
    setText(nextTemplate?.mainPrompt || '');
    setHasStartedWriting(false);
  };
  const toggleMedia = (type) => setMedia(prev => prev.includes(type) ? prev.filter(x => x !== type) : [...prev, type]);
  const canSave = (text.trim() && text.trim() !== (categoryTemplate.mainPrompt || '').trim()) || media.length;
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
      <div style={{ background:'#fff', border:`1px solid ${KUN.hair}`, borderRadius: 24, padding: 16 }}>
        <div style={{ display:'flex', gap:12, alignItems:'center' }}><span style={{ width:42, height:42, borderRadius:15, background:template.color, display:'flex', alignItems:'center', justifyContent:'center' }}><TemplateIcon icon={template.icon} /></span><div><div style={{ fontFamily: V_FT, fontSize: 20, fontWeight: 700, color: KUN.ink, lineHeight: 1.12 }}>{template.name}</div><div style={{ fontFamily: V_FB, fontSize: 12.5, color: KUN.inkMuted, marginTop:3 }}>{template.shortDescription}</div></div></div>
      </div>
      <GuidedWritingCard color={color} text={text} setText={setText} ideas={categoryTemplate.writingIdeas} examples={categoryTemplate.examples} showSuggestions={!hasStartedWriting} onStartWriting={() => setHasStartedWriting(true)} />
      <div style={{ background:'#fff', border:`1px solid ${KUN.hair}`, borderRadius: 22, padding: 14 }}>
        <div style={diarySectionLabel}>Medios</div><MediaButtons selected={media} onToggle={toggleMedia} />
        <div style={{ ...diarySectionLabel, marginTop: 16 }}>Color suave</div><SoftColorSelector value={color} onChange={setColor} />
        <div style={diarySectionLabel}>Categoria</div><CategorySelector value={category} onChange={setCategory} />
      </div>
      <button onClick={onFree} style={{ border:'none', background:'transparent', color:KUN.brick, fontFamily:V_FT, fontSize:13, fontWeight:700, cursor:'pointer', alignSelf:'flex-start' }}>Prefiero escribir libremente</button>
      <button onClick={() => onSave({ text, selectedMedia:media, category, color, title: text.trim().split('\n')[0] || template.name, type:'guided', templateId:template.id })} disabled={!canSave} style={{ height: 48, borderRadius: 999, border:'none', background: canSave ? KUN.brick : 'rgba(42,35,32,.12)', color: canSave ? '#fff' : KUN.inkMuted, fontFamily: V_FT, fontSize: 15, fontWeight: 700, cursor:canSave ? 'pointer' : 'not-allowed' }}>Guardar recuerdo</button>
    </div>
  );
}

function CreateEntry({ onBack, onSave }) {
  const [mode, setMode] = React.useState('choice');
  const [template, setTemplate] = React.useState(null);
  const selectTemplate = (item) => { setTemplate(item); setMode('guided-editor'); };
  return (
    <div style={{ minHeight:'100%', background: KUN.bg, paddingBottom: 96 }}>
      <DiaryTopBar onBack={onBack} title={mode === 'guided-editor' ? 'Nueva guia' : 'Nuevo recuerdo'} />
      <div style={{ padding:'0 20px 24px' }}>
        {mode === 'choice' && <><EntryModeSelector onFree={() => setMode('free')} onGuide={() => setMode('guided')} /><div style={{ fontFamily:V_FB, fontSize:13, color:KUN.inkSoft, lineHeight:1.5, marginBottom:14 }}>No tiene que quedar perfecto. Elige una guia si no sabes por donde partir.</div><TemplateSelector onSelect={selectTemplate} /></>}
        {mode === 'free' && <FreeEditor onSave={onSave} onUseGuide={() => setMode('guided')} />}
        {mode === 'guided' && <><button onClick={() => setMode('free')} style={{ border:'none', background:'transparent', color:KUN.brick, fontFamily:V_FT, fontSize:13, fontWeight:700, cursor:'pointer', marginBottom:12 }}>Prefiero escribir libremente</button><TemplateSelector onSelect={selectTemplate} /></>}
        {mode === 'guided-editor' && template && <GuidedEditor template={template} onSave={onSave} onFree={() => setMode('free')} />}
      </div>
    </div>
  );
}

function DiaryPrototype({ onBack, canEditDiary = true, demoAccount = false, diaryStorageKey = DIARY_FEED_KEY }) {
  const [entries, setEntries] = React.useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(diaryStorageKey) || '[]');
      let baseEntries = Array.isArray(stored) ? stored : [];
      if (!demoAccount && diaryStorageKey !== DIARY_FEED_KEY && baseEntries.length === 0) {
        const legacy = JSON.parse(localStorage.getItem(DIARY_FEED_KEY) || '[]');
        const legacyEntries = Array.isArray(legacy)
          ? legacy.filter(e => e && !String(e.id || '').startsWith('df'))
          : [];
        if (legacyEntries.length > 0) {
          baseEntries = legacyEntries;
          try { localStorage.setItem(diaryStorageKey, JSON.stringify(legacyEntries)); } catch {}
        }
      }
      const storedIds = new Set(baseEntries.map(e => e.id));
      const seeds = demoAccount ? DIARY_FEED_SEED.filter(s => !storedIds.has(s.id)) : [];
      return [...baseEntries, ...seeds];
    } catch { return demoAccount ? DIARY_FEED_SEED : []; }
  });

  const [fab,   setFab]   = React.useState(false);
  const [sheet, setSheet] = React.useState(null); // null | 'note' | 'recorder' | 'guide'
  const [exportEntry, setExportEntry] = React.useState(null);
  const [pendingPhoto, setPendingPhoto] = React.useState(null);
  const photoRef  = React.useRef(null);
  const bottomRef = React.useRef(null);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior:'instant' });
  }, []);

  const persist = (next) => {
    setEntries(next);
    try {
      localStorage.setItem(diaryStorageKey, JSON.stringify(next.filter(e => !String(e.id).startsWith('df'))));
    } catch {}
  };

  const addEntry = (data) => {
    window.KUNAnalytics?.track('diario_entrada_creada', {
      tipo: data?.type === 'audio' ? 'voz' : data?.type === 'photo' ? 'foto' : 'texto',
      modo: data?.templateId ? 'guided' : 'free',
      template_id: data?.templateId,
      media_count: data?.type === 'photo' || data?.type === 'audio' ? 1 : 0,
    });
    const now = new Date();
    const entry = {
      id: `u${Date.now()}`,
      ts: Date.now(),
      date: now.toISOString().slice(0, 10),
      text: null, imageSrc: null, audioDuration: null, color: null, category: null,
      ...data,
    };
    persist([entry, ...entries]);
  };

  const handlePhotoFile = (file) => {
    if (!file?.type?.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPendingPhoto(reader.result);
      setSheet('photo-caption');
    };
    reader.readAsDataURL(file);
  };

  const groups = groupFeedByDate(entries);

  return (
    <div style={{ height:'100%', background:KUN.bg, position:'relative', display:'flex', flexDirection:'column', boxSizing:'border-box' }}>

      {/* Header — no hace scroll */}
      <div style={{ flexShrink:0 }}>
        <div style={{ display:'flex', alignItems:'center', gap:12, padding:'8px 20px 14px' }}>
          <button onClick={onBack} style={{
            width:40, height:40, borderRadius:'50%', background:'#fff',
            border:`1px solid ${KUN.hair}`, display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer',
          }}>
            {VINK_ICONS.back(KUN.ink)}
          </button>
          <div style={{ fontFamily:V_FT, fontSize:22, fontWeight:700, color:KUN.ink, letterSpacing:-0.4 }}>
            Diario de vida
          </div>
        </div>

        {!canEditDiary && (
          <div style={{ margin:'0 16px 12px', background:KUN.cardSoft, borderRadius:20, padding:'12px 14px', border:`1px solid ${KUN.hair}`, fontFamily:V_FB, fontSize:12.5, color:KUN.inkSoft, lineHeight:1.5 }}>
            Solo mamá y papá pueden editar el diario.
          </div>
        )}
      </div>

      {/* Feed — scroll propio */}
      <div style={{ flex:1, overflowY:'auto', overflowX:'hidden', padding:'0 12px 100px', boxSizing:'border-box' }}>
        {groups.map(group => (
          <div key={group.date}>

            {/* Date separator */}
            <div style={{ display:'flex', alignItems:'center', gap:10, padding:'6px 2px 12px' }}>
              <div style={{ flex:1, height:1, background:KUN.hair }}/>
              <span style={{
                fontFamily:V_FT, fontSize:12, fontWeight:700, color:KUN.inkMuted,
                letterSpacing:0.1, whiteSpace:'nowrap',
              }}>
                {diaryDateLabel(group.date)}
              </span>
              <div style={{ flex:1, height:1, background:KUN.hair }}/>
            </div>

            {/* Two-column masonry */}
            <div style={{ columnCount:2, columnGap:8, marginBottom:6 }}>
              {group.entries.map(entry => (
                <div key={entry.id} style={{ breakInside:'avoid', WebkitColumnBreakInside:'avoid', marginBottom:8 }}>
                  {entry.type === 'photo' && <DiaryFeedPhotoCard entry={entry} onOpen={() => setExportEntry(entry)}/>}
                  {entry.type === 'text'  && <DiaryFeedNoteCard  entry={entry} onOpen={() => setExportEntry(entry)}/>}
                  {entry.type === 'audio' && <DiaryFeedAudioCard entry={entry} onOpen={() => setExportEntry(entry)}/>}
                  {entry.type === 'template' && <DiaryFeedTemplateCard entry={entry} onOpen={() => setExportEntry(entry)}/>}
                </div>
              ))}
            </div>

          </div>
        ))}
        {canEditDiary && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 12, marginBottom: 12, padding: '0 4px' }}>
            <button
              onClick={() => setFab(true)}
              style={{
                width: '100%',
                background: 'rgba(240, 116, 62, 0.04)',
                border: `2px dashed ${KUN.brick}`,
                borderRadius: 24,
                padding: '24px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 12,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(240, 116, 62, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(240, 116, 62, 0.04)';
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: KUN.brick,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(240, 116, 62, 0.24)',
              }}>
                {VINK_ICONS.plus('#fff')}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
                <span style={{ fontFamily: V_FT, fontSize: 15, fontWeight: 700, color: KUN.ink }}>
                  Escribir en el diario
                </span>
                <span style={{ fontFamily: V_FB, fontSize: 12, color: KUN.inkMuted, textAlign: 'center' }}>
                  Añade una foto, nota, audio o usa una guía para continuar hoy
                </span>
              </div>
            </button>
          </div>
        )}

        {/* Anchor para scroll al fondo */}
        <div ref={bottomRef}/>
      </div>{/* fin feed */}

      {/* Hidden photo input */}
      <input ref={photoRef} type="file" accept="image/*" style={{ display:'none' }}
        onChange={e => { handlePhotoFile(e.target.files?.[0]); e.target.value = ''; }}/>

      {/* FAB — fijo sobre el wrapper externo, no sigue el scroll */}
      {canEditDiary && (
        <>
          {fab && (
            <div onClick={() => setFab(false)} style={{
              position:'absolute', inset:0, zIndex:190,
              background:'rgba(42,35,32,0.35)', display:'flex', alignItems:'flex-end',
            }}>
              <div onClick={e => e.stopPropagation()} style={{
                width:'100%', background:KUN.bg,
                borderTopLeftRadius:28, borderTopRightRadius:28,
                padding:'14px 20px 30px', boxSizing:'border-box',
              }}>
                <div style={{ width:44, height:5, borderRadius:3, background:KUN.inkFaint, margin:'0 auto 16px' }}/>
                <div style={{ fontFamily:V_FT, fontSize:19, fontWeight:700, color:KUN.ink, letterSpacing:-0.3, marginBottom:16 }}>
                  Agregar al diario
                </div>
                <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10 }}>
                  {[
                    { label:'Foto',         color:KUN.rosehip, icon:VINK_ICONS.camera(KUN.ink), cb:() => { setFab(false); photoRef.current?.click(); } },
                    { label:'Texto',        color:KUN.viola,   icon:VINK_ICONS.text(KUN.ink),   cb:() => { setFab(false); setSheet('note'); } },
                    { label:'Audio',        color:KUN.apple,   icon:VINK_ICONS.mic(KUN.ink),    cb:() => { setFab(false); setSheet('recorder'); } },
                    { label:'Usar una guía', color:KUN.sun,
                      icon:(
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3C9.2 3 7 5.2 7 8c0 2 1.1 3.7 2.8 4.6L9 20h6l-.8-7.4C15.9 11.7 17 10 17 8c0-2.8-2.2-5-5-5z" stroke={KUN.ink} strokeWidth="1.6" strokeLinejoin="round"/>
                          <path d="M9 20h6" stroke={KUN.ink} strokeWidth="1.6" strokeLinecap="round"/>
                        </svg>
                      ),
                      cb:() => { setFab(false); setSheet('guide'); } },
                    { label:'Plantillas', color:'#FFF5DC', icon:<TemplateIcon icon="tree" color={KUN.ink} />, cb:() => { setFab(false); setSheet('template'); } },
                  ].map(o => (
                    <button key={o.label} onClick={o.cb} style={{
                      background:'#fff', border:`1px solid ${KUN.hair}`,
                      borderRadius:20, padding:'16px 8px',
                      display:'flex', flexDirection:'column', alignItems:'center', gap:12, cursor:'pointer',
                    }}>
                      <div style={{ width:46, height:46, borderRadius:14, background:o.color, display:'flex', alignItems:'center', justifyContent:'center' }}>
                        {o.icon}
                      </div>
                      <div style={{ fontFamily:V_FT, fontSize:14, fontWeight:700, color:KUN.ink, textAlign:'center' }}>
                        {o.label}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      )}

      {/* Sheets */}
      {sheet === 'note' && (
        <DiaryNoteSheet
          onClose={() => setSheet(null)}
          onSave={(data) => { addEntry(data); setSheet(null); }}
        />
      )}
      {sheet === 'photo-caption' && pendingPhoto && (
        <DiaryPhotoCaptionSheet
          imageSrc={pendingPhoto}
          onClose={() => { setPendingPhoto(null); setSheet(null); }}
          onSave={(data) => { addEntry(data); setPendingPhoto(null); setSheet(null); }}
        />
      )}
      {sheet === 'recorder' && (
        <Recorder
          onClose={() => setSheet(null)}
          onSave={({ duration }) => addEntry({ type:'audio', audioDuration:duration })}
          context={{ author:'Mamá', role:'Mamá', color:KUN.rosehip, name:'Audio para Sofía' }}
        />
      )}
      {sheet === 'guide' && (
        <DiaryGuideSheet
          onClose={() => setSheet(null)}
          onSave={(data) => { addEntry(data); setSheet(null); }}
        />
      )}
      {sheet === 'template' && (
        <DiaryTemplateSheet
          onClose={() => setSheet(null)}
          onSave={(data) => { addEntry(data); setSheet(null); }}
        />
      )}
      {exportEntry && (
        <DiaryExportSheet
          entry={exportEntry}
          onClose={() => setExportEntry(null)}
        />
      )}
    </div>
  );
}
function ScreenVinculo({ view, setView, recordings, addRecording, canEditDiary = true, babyName = 'Sofía', demoAccount = false, diaryStorageKey = DIARY_FEED_KEY }) {
  if (view === 'journey') return <DiaryPrototype onBack={() => setView('entry')} canEditDiary={canEditDiary} demoAccount={demoAccount} diaryStorageKey={diaryStorageKey} />;
  if (view === 'activities' || view === 'activities-cuentos' || view === 'activities-canciones' || view === 'activities-musica') {
    const tab = view.startsWith('activities-') ? view.replace('activities-', '') : 'cuentos';
    return <ActividadesGuagua initialTab={tab} onBack={() => setView('entry')} recordings={recordings} addRecording={addRecording} />;
  }
  return <VinkEntry onPick={setView} babyName={babyName} />;
}

window.ScreenVinculo = ScreenVinculo;






