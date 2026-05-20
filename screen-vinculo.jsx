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
function VinkEntry({ onPick }) {
  return (
    <div style={{ position:'relative', padding: '6px 20px 0', overflowX: 'hidden', maxWidth: '100%', boxSizing: 'border-box' }}>
      <VinkShapes/>

      <div style={{ position:'relative', zIndex: 1 }}>
        <div style={{ padding: '10px 4px 18px' }}>
          <div style={{
            fontFamily: V_FT, fontSize: 24, fontWeight: 700, color: KUN.ink,
            letterSpacing: -0.4, lineHeight: 1.2,
          }}>
            Acércate a Sofía,<br/>aunque no estés ahí.
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
        <div onClick={() => onPick('songs')} style={{
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
function ActivityCard({ onOpenSheet, onOpenRecorder }) {
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
        <button onClick={onOpenSheet} style={btnPrimary}>{VINK_ICONS.camera('#fff')}<span style={{ marginLeft: 6 }}>Subir foto</span></button>
        <button onClick={onOpenSheet} style={btnGhost}>{VINK_ICONS.text(KUN.ink)}</button>
        <button onClick={onOpenRecorder} style={btnGhost}>{VINK_ICONS.mic(KUN.ink)}</button>
      </div>
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

function FeedEntry({ author, role, color, time, kind, content, isVoice, duration }) {
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
              <div style={{
                height: 150, borderRadius: 16,
                background: `repeating-linear-gradient(135deg, ${KUN.rosehip} 0 8px, #F8E9DD 8px 16px)`,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily: V_FB, fontSize: 11, color: KUN.ink,
                fontWeight: 500, marginBottom: 8,
              }}>foto · abuela y Sofía</div>
              <div style={{
                fontFamily: V_FB, fontSize: 13.5, color: KUN.ink, fontWeight: 400,
                padding: '0 8px 8px', lineHeight: 1.5,
              }}>
                {content}
              </div>
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

function AddEntrySheet({ onClose, onPickVoice }) {
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
              onClick={() => { if (o.id === 'voice') onPickVoice(); else onClose(); }}
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

function NuestroViaje({ onBack, recordings, addRecording }) {
  const [sheet, setSheet] = React.useState(false);
  const [recording, setRecording] = React.useState(false);

  return (
    <>
      <SubHeader title="Diario de vida" onBack={onBack} />
      <div style={{ position:'relative', height:'100%', overflowX:'hidden', maxWidth:'100%' }}>
        <div style={{ paddingBottom: 100 }}>
          <ActivityCard onOpenSheet={() => setSheet(true)} onOpenRecorder={() => setRecording(true)} />
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
              author="Mamá" role="Mamá · Voz para Sofía" color={KUN.rosehip}
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
        <button onClick={() => setSheet(true)} style={{
          position:'absolute', bottom: 14, right: 20,
          width: 58, height: 58, borderRadius: '50%', border:'none',
          background: KUN.brick, color:'#fff',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow: '0 8px 18px rgba(240,116,62,0.40)', cursor:'pointer',
          zIndex: 5,
        }}>
          {VINK_ICONS.plus('#fff')}
        </button>

        {sheet && (
          <AddEntrySheet
            onClose={() => setSheet(false)}
            onPickVoice={() => { setSheet(false); setRecording(true); }}
          />
        )}
        {recording && addRecording && (
          <Recorder
            onClose={() => setRecording(false)}
            onSave={addRecording}
          />
        )}
      </div>
    </>
  );
}

// ── Actividades con mi hijo ─────────────────────────────────
function MusicaTab() {
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

const SONG_LYRICS = `Duérmete mi niño, duérmete sonriendo, que la luna llena te está protegiendo. Cierra tus ojitos, descansa tu alma, que aquí estoy contigo, llenándote de calma. Eres tan pequeño, tan lleno de vida, eres todo nuestro, nuestra maravilla.`;

function VozTab({ recordings, onOpenRecorder }) {
  return (
    <>
      <div style={{
        fontFamily: V_FT, fontSize: 19, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3,
        padding: '4px 24px 14px',
      }}>
        Tu voz para tu bebé
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

      {/* Canción */}
      <div style={{ padding: '14px 20px 6px' }}>
        <div style={{
          fontFamily: V_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted,
          letterSpacing: 1, padding: '0 8px 10px', textTransform: 'uppercase',
        }}>
          Canción
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
            Letra para que la cantes a tu ritmo
          </div>
          <div style={{
            background:'#fff', borderRadius: 16, padding: 16,
            fontFamily: V_FB, fontSize: 13.5, color: KUN.ink, fontWeight: 400, fontStyle:'italic',
            lineHeight: 1.7, marginBottom: 14,
          }}>
            {SONG_LYRICS}
          </div>
          <button onClick={onOpenRecorder} style={{
            width:'100%', padding: '12px 16px', height: 46, borderRadius: 999, border:'none',
            background: KUN.brick, color:'#fff',
            fontFamily: V_FT, fontSize: 14, fontWeight: 700, letterSpacing: -0.1,
            display:'flex', alignItems:'center', justifyContent:'center', gap: 8,
            cursor:'pointer',
          }}>
            {VINK_ICONS.mic('#fff')} Cantarle a mi bebé · Grabación libre
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
                    {r.duration} · {r.time}
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

function Recorder({ onClose, onSave }) {
  const [recording, setRecording] = React.useState(false);
  const [seconds, setSeconds] = React.useState(0);
  React.useEffect(() => {
    if (!recording) return;
    const id = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(id);
  }, [recording]);

  const fmt = (s) => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;

  const save = () => {
    if (seconds === 0) { onClose(); return; }
    onSave({
      name:'Para Sofía',
      duration: fmt(seconds),
      time: 'Hace un momento',
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
          {recording ? 'Estoy escuchando…' : 'Cuando estés lista, presiona el círculo'}
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

function CuentosCanciones({ onBack, recordings, addRecording }) {
  const [sub, setSub] = React.useState('musica');
  const [recording, setRecording] = React.useState(false);

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
          { id:'voz',    label:'Voz' },
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
        ? <MusicaTab />
        : <VozTab recordings={recordings} onOpenRecorder={() => setRecording(true)} />}

      {recording && <Recorder
        onClose={() => setRecording(false)}
        onSave={addRecording}
      />}
    </div>
  );
}

// ── Public entry ────────────────────────────────────────
function ScreenVinculo({ view, setView, recordings, addRecording }) {
  if (view === 'journey') return <NuestroViaje onBack={() => setView('entry')} recordings={recordings} addRecording={addRecording} />;
  if (view === 'songs')   return <CuentosCanciones onBack={() => setView('entry')} recordings={recordings} addRecording={addRecording} />;
  return <VinkEntry onPick={setView} />;
}

window.ScreenVinculo = ScreenVinculo;
