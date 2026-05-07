// Cápsula educativa: "Tu bebé empezó a alimentarse por sonda"
// Contenido paginado — 5 páginas con progreso, navegación y resumen.
// Exposes: ScreenCapsula({ onBack, onComplete, onPublishForum })

const CAP_PAGES = [
  {
    num: 1,
    title: '¿Qué es la sonda nasogástrica?',
    kind: 'text',
    accent: KUN.sageSoft,
    icon: () => (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 4C22 12 25 18 25 23C25 27.5 21 31 16 31C11 31 7 27.5 7 23C7 18 10 12 16 4Z" fill={KUN.sage} opacity="0.85"/>
        <ellipse cx="13" cy="20" rx="3" ry="5" fill="#fff" opacity="0.6"/>
      </svg>
    ),
    text: 'Es un tubo muy delgado y flexible que entra por la nariz de tu bebé y llega hasta su estómago. Se usa cuando el bebé aún no tiene la fuerza o la coordinación para succionar y tragar por sí solo, algo muy común en los prematuros.',
  },
  {
    num: 2,
    title: '¿Por qué la necesita?',
    kind: 'text',
    accent: KUN.accentSoft,
    icon: () => (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <path d="M16 6C16 6 8 12 8 19C8 23.4 11.6 27 16 27C20.4 27 24 23.4 24 19C24 12 16 6 16 6Z" stroke={KUN.accent} strokeWidth="1.8" fill={KUN.accentSoft}/>
        <path d="M12 19C12.5 21.5 14 23 16 23C18 23 19.5 21.5 20 19" stroke={KUN.accent} strokeWidth="1.6" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    text: 'Los bebés prematuros nacen antes de que el reflejo de succión esté completamente desarrollado. La sonda le permite recibir la leche directamente en el estómago, para que pueda crecer y ganar fuerzas sin gastar energía en el esfuerzo de alimentarse.',
  },
  {
    num: 3,
    title: '¿Duele?',
    kind: 'text',
    accent: KUN.sageSoft,
    icon: () => (
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" fill={KUN.sageSoft} stroke={KUN.sage} strokeWidth="1.8"/>
        <path d="M11 19C11 19 13 21.5 16 21.5C19 21.5 21 19 21 19" stroke={KUN.sage} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <circle cx="12" cy="13.5" r="1.5" fill={KUN.sage}/>
        <circle cx="20" cy="13.5" r="1.5" fill={KUN.sage}/>
      </svg>
    ),
    text: 'No. Puede verse incómoda, pero los bebés se acostumbran rápidamente. Si tu bebé está tranquilo, la sonda no le está molestando.',
  },
  {
    num: 4,
    title: '¿Qué puedes hacer tú?',
    kind: 'list',
    items: [
      {
        title: 'Háblale suavemente',
        text: 'Mientras se alimenta, tu voz lo calma y hace del momento algo más cercano.',
      },
      {
        title: 'Succión no nutritiva',
        text: 'Si el médico lo permite, ofrécele tu dedo o un chupete mientras recibe la leche por la sonda. Esto ayuda a su desarrollo.',
      },
      {
        title: 'Pregunta a la enfermera',
        text: '¿Cuándo podría empezar el pecho o mamadera? Cada bebé tiene su ritmo.',
      },
    ],
  },
  {
    num: 5,
    title: 'Lo que aprendiste hoy',
    kind: 'summary',
    points: [
      { headline: 'La sonda es temporal.', sub: 'Es un puente mientras tu bebé madura.' },
      { headline: 'Tu voz y presencia lo calman.', sub: 'Háblale suavemente durante la alimentación.' },
      { headline: 'La succión no nutritiva ayuda.', sub: 'Ayuda al desarrollo de tu bebé.' },
    ],
  },
];

const CAP_TOTAL = CAP_PAGES.length;

// ── Flecha izquierda ────────────────────────────────────
function CapLeft({ onClick, visible }) {
  return (
    <button onClick={onClick} style={{
      width: 48, height: 48, borderRadius: 24, border: 'none',
      background: visible ? '#fff' : 'transparent',
      boxShadow: visible
        ? '0 1px 2px rgba(46,42,38,0.06), 0 4px 12px rgba(46,42,38,0.06)'
        : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: visible ? 'pointer' : 'default',
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity .2s',
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L6 10L12 16" stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

// ── Flecha derecha ──────────────────────────────────────
function CapRight({ onClick, visible }) {
  return (
    <button onClick={onClick} style={{
      width: 48, height: 48, borderRadius: 24, border: 'none',
      background: visible ? KUN.accent : 'transparent',
      boxShadow: visible ? '0 6px 14px rgba(201,123,90,0.3)' : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: visible ? 'pointer' : 'default',
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity .2s',
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8 4L14 10L8 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

// ── Pantalla principal ──────────────────────────────────
function ScreenCapsula({ onBack, onComplete, onPublishForum }) {
  const [idx, setIdx] = React.useState(0);
  const [question, setQuestion] = React.useState('');
  const [published, setPublished] = React.useState(false);
  const [celebrating, setCelebrating] = React.useState(false);

  const page = CAP_PAGES[idx];
  const isFirst = idx === 0;
  const isLast = idx === CAP_TOTAL - 1;

  const goPrev = () => { if (!isFirst) setIdx(i => i - 1); };
  const goNext = () => { if (!isLast) setIdx(i => i + 1); };

  const handlePublish = () => {
    if (!question.trim()) return;
    setPublished(true);
    if (onPublishForum) onPublishForum();
  };

  const handleComplete = () => {
    setCelebrating(true);
    setTimeout(() => {
      setCelebrating(false);
      onComplete();
    }, 2200);
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100%',
      position: 'relative',
    }}>

      {/* ── Sub-header ──────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '4px 20px 10px', flexShrink: 0,
      }}>
        <div onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 20, background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 2px rgba(46,42,38,0.04)', cursor: 'pointer', flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 13, fontWeight: 700, color: KUN.inkSoft, letterSpacing: -0.1,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            Alimentación por sonda
          </div>
          <div style={{
            fontSize: 10.5, fontWeight: 800, color: KUN.accentDeep,
            letterSpacing: 0.5, marginTop: 1,
          }}>
            CÁPSULA EDUCATIVA · 4 MIN
          </div>
        </div>
      </div>

      {/* ── Barra de progreso ───────────────────── */}
      <div style={{ padding: '0 20px 14px', flexShrink: 0 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 8,
        }}>
          <span style={{
            fontSize: 11.5, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 0.6,
          }}>
            {page.num} DE {CAP_TOTAL}
          </span>
          <span style={{ fontSize: 11.5, fontWeight: 600, color: KUN.inkMuted }}>
            {Math.round((page.num / CAP_TOTAL) * 100)}% completado
          </span>
        </div>
        <div style={{ height: 6, borderRadius: 3, background: KUN.trackSoft, overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 3, background: KUN.accent,
            width: `${(page.num / CAP_TOTAL) * 100}%`,
            transition: 'width 0.35s ease',
          }} />
        </div>
      </div>

      {/* ── Contenido de la página (scroll interno) ─ */}
      <div key={idx} style={{
        flex: 1, overflow: 'auto', padding: '0 20px',
        animation: 'fade .2s ease-out forwards',
      }}>

        {/* Título de página */}
        <div style={{
          fontSize: 24, fontWeight: 800, color: KUN.ink,
          letterSpacing: -0.4, lineHeight: 1.2,
          marginBottom: 18, textWrap: 'pretty',
        }}>{page.title}</div>

        {/* ── Página de texto ── */}
        {page.kind === 'text' && (
          <div style={{
            background: '#fff', borderRadius: 24,
            padding: '20px 20px 24px',
            boxShadow: '0 1px 2px rgba(46,42,38,0.03), 0 8px 22px rgba(46,42,38,0.05)',
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: 16,
              background: page.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 16,
            }}>
              {page.icon && page.icon()}
            </div>
            <div style={{
              fontSize: 16, color: KUN.ink, fontWeight: 500,
              lineHeight: 1.65, textWrap: 'pretty',
            }}>{page.text}</div>
          </div>
        )}

        {/* ── Página de lista ── */}
        {page.kind === 'list' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {page.items.map((item, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 22, padding: '16px 18px',
                boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
                display: 'flex', gap: 14, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 17,
                  background: KUN.accentSoft,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 14, fontWeight: 800, color: KUN.accentDeep,
                }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontSize: 15, fontWeight: 800, color: KUN.ink,
                    letterSpacing: -0.2, marginBottom: 5,
                  }}>{item.title}</div>
                  <div style={{
                    fontSize: 13.5, color: KUN.inkSoft, fontWeight: 500,
                    lineHeight: 1.5, textWrap: 'pretty',
                  }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Página de resumen ── */}
        {page.kind === 'summary' && (
          <div>
            {/* Puntos clave */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
              {page.points.map((pt, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: 20, padding: '14px 18px',
                  boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
                  display: 'flex', gap: 14, alignItems: 'center',
                }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 18,
                    background: KUN.accent,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {KIcon.check('#fff')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontSize: 14.5, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2,
                    }}>{pt.headline}</div>
                    <div style={{
                      fontSize: 12.5, color: KUN.inkSoft, fontWeight: 500,
                      marginTop: 2, lineHeight: 1.4,
                    }}>{pt.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Campo de pregunta */}
            <div style={{
              background: '#fff', borderRadius: 22, padding: 16,
              boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
              marginBottom: 12,
            }}>
              <div style={{
                fontSize: 15, fontWeight: 800, color: KUN.ink,
                letterSpacing: -0.2, marginBottom: 12,
              }}>¿Te quedó alguna duda?</div>

              {published ? (
                <div style={{
                  padding: '14px 0', textAlign: 'center',
                  fontSize: 15, fontWeight: 700, color: KUN.accentDeep, lineHeight: 1.5,
                }}>
                  Tu pregunta fue publicada en el foro 🧡
                </div>
              ) : (
                <>
                  <textarea
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    placeholder="Escribe tu pregunta… la comunidad puede ayudarte"
                    style={{
                      width: '100%', minHeight: 90, border: 'none', outline: 'none',
                      resize: 'none', fontFamily: 'inherit',
                      fontSize: 14, color: KUN.ink, fontWeight: 500,
                      background: KUN.cardSoft, borderRadius: 14,
                      padding: '12px 14px', boxSizing: 'border-box',
                      lineHeight: 1.5,
                    }}
                  />
                  <button onClick={handlePublish} style={{
                    width: '100%', marginTop: 10,
                    padding: '12px 16px', borderRadius: 14, border: 'none',
                    background: question.trim() ? KUN.ink : KUN.cardSoft,
                    color: question.trim() ? '#fff' : KUN.inkMuted,
                    fontFamily: 'inherit', fontSize: 14, fontWeight: 800,
                    cursor: question.trim() ? 'pointer' : 'default',
                    transition: 'background .2s, color .2s',
                  }}>
                    Publicar en el foro
                  </button>
                </>
              )}
            </div>

            {/* Botón completar */}
            <button onClick={handleComplete} style={{
              width: '100%', padding: '15px 20px', borderRadius: 18, border: 'none',
              background: KUN.accent, color: '#fff',
              fontFamily: 'inherit', fontSize: 15, fontWeight: 800,
              letterSpacing: 0.1, cursor: 'pointer',
              boxShadow: '0 8px 20px rgba(201,123,90,0.35)',
              marginBottom: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              {KIcon.check('#fff')} Marcar como completada
            </button>
          </div>
        )}

        <div style={{ height: 16 }} />
      </div>

      {/* ── Navegación inferior ─────────────────── */}
      <div style={{
        flexShrink: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '10px 20px 14px',
        borderTop: `1px solid ${KUN.divider}`,
      }}>
        <CapLeft onClick={goPrev} visible={!isFirst} />

        {/* Dots */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {CAP_PAGES.map((_, i) => (
            <div key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 22 : 7, height: 7, borderRadius: 4,
              background: i === idx ? KUN.accent : KUN.trackSoft,
              transition: 'all 0.3s ease', cursor: 'pointer',
            }} />
          ))}
        </div>

        <CapRight onClick={goNext} visible={!isLast} />
      </div>

      {/* ── Overlay de celebración ──────────────── */}
      {celebrating && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(250,246,241,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 16, zIndex: 50,
        }}>
          <div style={{ fontSize: 64 }}>🎉</div>
          <div style={{
            fontSize: 24, fontWeight: 800, color: KUN.ink,
            letterSpacing: -0.4, textAlign: 'center',
          }}>¡Lo lograste!</div>
          <div style={{
            fontSize: 15, color: KUN.inkSoft, fontWeight: 500,
            textAlign: 'center', textWrap: 'pretty',
            maxWidth: 260, lineHeight: 1.55,
          }}>
            Completaste tu primera cápsula.<br />La encontrarás en tu historial.
          </div>
        </div>
      )}
    </div>
  );
}

window.ScreenCapsula = ScreenCapsula;
