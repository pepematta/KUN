// Home screen body — restyled per new KUN Design System (v2).
// Self-contained palette + fonts so this file does not affect other screens.
// All existing functionality, props and texts are preserved verbatim.

// ─── Local design-system tokens ────────────────────────────────────────────────
const HC = {
  cream:    '#FAF6F1',
  paper:    '#FFFFFF',
  rosehip:  '#F6C3AE',
  brick:    '#F0743E',
  viola:    '#CDBCDB',
  sun:      '#FDD848',
  apple:    '#AAD59E',
  clear:    '#9AB2D4',
  ink:      '#2A2320',
  ink2:     '#5E544E',
  ink3:     '#8B827C',
  hair:     'rgba(42,35,32,0.10)',
  hairSoft: 'rgba(42,35,32,0.06)',
};
const HF_T = 'Quicksand, sans-serif'; // titles
const HF_B = 'Poppins, sans-serif';   // body

// ─── Tiny icons (local to home screen) ─────────────────────────────────────────
const HIcon = {
  bottle: (color = HC.ink) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 2h4M9 4h6v3l-1 2v10a3 3 0 0 1-3 3h0a3 3 0 0 1-3-3V9L8 7V4z"/>
      <path d="M9 12h6"/>
    </svg>
  ),
  arrow: (color = HC.ink) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5"
        stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  chevR: (color = HC.ink) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 6 15 12 9 18"/>
    </svg>
  ),
  sparkle: (color = '#fff') => (
    <svg width="11" height="11" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"/>
    </svg>
  ),
  drop: (color = HC.apple) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M12 2s7 8 7 13a7 7 0 1 1-14 0c0-5 7-13 7-13z"/>
    </svg>
  ),
  kangaroo: (color = HC.viola) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
      stroke={HC.ink} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" fill={color} stroke="none"/>
      <path d="M8 15c1-2 3-3.5 5-3 1.5 .4 2.5 1.8 2.5 3.2"/>
      <circle cx="10" cy="11" r="1.2" fill={HC.ink} stroke="none"/>
    </svg>
  ),
};

// ─── Section heading ───────────────────────────────────────────────────────────
function HSectionHead({ title, kicker, action, onAction }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      marginBottom: 12,
    }}>
      <div>
        {kicker && (
          <div style={{
            fontFamily: HF_B, fontWeight: 500, fontSize: 10,
            color: HC.brick, letterSpacing: '0.7px', textTransform: 'uppercase',
            marginBottom: 4,
          }}>{kicker}</div>
        )}
        <div style={{
          fontFamily: HF_T, fontWeight: 700, fontSize: 19,
          color: HC.ink, letterSpacing: '-0.3px',
        }}>{title}</div>
      </div>
      {action && (
        <span onClick={onAction} style={{
          fontFamily: HF_T, fontWeight: 600, fontSize: 12.5,
          color: HC.brick, cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', gap: 2,
        }}>
          {action} {HIcon.chevR(HC.brick)}
        </span>
      )}
    </div>
  );
}

// ─── Greeting ──────────────────────────────────────────────────────────────────
function HomeGreeting({ parentName }) {
  const name = parentName || 'padre/madre';
  return (
    <div style={{ padding: '8px 22px 4px' }}>
      <div style={{
        fontFamily: HF_B, fontWeight: 500, fontSize: 12,
        color: HC.ink2, letterSpacing: '0.2px',
      }}>
        Buenos días, {name}
      </div>
      <div style={{
        fontFamily: HF_T, fontWeight: 700, fontSize: 26,
        color: HC.ink, letterSpacing: '-0.5px',
        marginTop: 4, lineHeight: 1.15,
      }}>
        Sigamos juntos hoy.
      </div>
    </div>
  );
}

// ─── Featured baby card (tarjeta destacada) ────────────────────────────────────
function PillStat({ value, label, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      borderRadius: 999, padding: '6px 12px',
      display: 'inline-flex', alignItems: 'baseline', gap: 4,
      maxWidth: '100%',
      cursor: onClick ? 'pointer' : 'default',
    }}>
      <span style={{ fontFamily: HF_T, fontWeight: 700, fontSize: 14, color: HC.ink }}>{value}</span>
      <span style={{ fontFamily: HF_B, fontWeight: 500, fontSize: 10.5, color: HC.ink2, whiteSpace: 'nowrap' }}>{label}</span>
    </div>
  );
}

function BabyHero({ babyName = 'Sofía', onMessageNurse }) {
  const [ageInfo, setAgeInfo] = React.useState(null);
  const info = ageInfo === 'chrono'
    ? {
        title: 'Semanas cronológicas',
        text: 'Son las semanas que han pasado desde que tu guagüita nació.',
      }
    : ageInfo === 'corrected'
      ? {
          title: 'Semanas corregidas',
          text: 'Es la edad calculada según la fecha en que debería haber nacido. Ayuda a mirar su desarrollo con más justicia si nació antes de tiempo.',
        }
      : null;
  return (
    <div style={{ margin: '16px 18px 0' }}>
      <div style={{
        position: 'relative', borderRadius: 32, overflow: 'hidden',
        aspectRatio: '1 / 1.18', background: HC.rosehip,
      }}>
        {/* Full-bleed baby photo */}
        <img src="premature.jpg" alt={babyName} style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center 30%',
        }}/>

        {/* Bottom gradient covering name + nurse area for legibility */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: '60%',
          background: 'linear-gradient(to top, rgba(42,35,32,0.85) 0%, rgba(42,35,32,0.55) 45%, rgba(42,35,32,0) 100%)',
        }}/>

        {/* Stat pills top-right — edad cronológica + edad corregida */}
        <div style={{ position: 'absolute', top: 16, right: 16, display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'flex-end', maxWidth: 'calc(100% - 32px)' }}>
          <PillStat value="34" label="sem. cronológicas" onClick={() => setAgeInfo('chrono')} />
          <PillStat value="32" label="sem. corregidas" onClick={() => setAgeInfo('corrected')} />
        </div>

        {info && (
          <div onClick={() => setAgeInfo(null)} style={{
            position: 'absolute', inset: 0,
            background: 'rgba(42,35,32,0.34)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            padding: '72px 16px 0',
            boxSizing: 'border-box',
          }}>
            <div onClick={(e) => e.stopPropagation()} style={{
              width: '100%',
              background: 'rgba(255,255,255,0.96)',
              borderRadius: 20,
              padding: '16px 18px',
              boxSizing: 'border-box',
              border: `1px solid ${HC.hair}`,
              boxShadow: '0 10px 28px rgba(42,35,32,0.18)',
            }}>
              <div style={{
                fontFamily: HF_T, fontSize: 16, fontWeight: 700,
                color: HC.ink, letterSpacing: '-0.2px', marginBottom: 6,
              }}>{info.title}</div>
              <div style={{
                fontFamily: HF_B, fontSize: 12.5, fontWeight: 400,
                color: HC.ink2, lineHeight: 1.5,
              }}>{info.text}</div>
              <div onClick={() => setAgeInfo(null)} style={{
                marginTop: 10,
                fontFamily: HF_T, fontSize: 12.5, fontWeight: 700,
                color: HC.brick, cursor: 'pointer',
              }}>Entendido</div>
            </div>
          </div>
        )}

        {/* Bottom content: name + nurse */}
        <div style={{ position: 'absolute', left: 20, right: 20, bottom: 18, color: '#fff' }}>
          <div style={{
            fontFamily: HF_T, fontWeight: 700, fontSize: 34,
            letterSpacing: '-0.4px', lineHeight: 1,
          }}>{babyName}</div>

          {/* Divider */}
          <div style={{
            marginTop: 14, paddingTop: 14,
            borderTop: '1px solid rgba(255,255,255,0.25)',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1, minWidth: 0 }}>
              <span style={{
                fontFamily: HF_B, fontWeight: 500, fontSize: 9.5,
                color: 'rgba(255,255,255,0.75)', letterSpacing: '0.7px', textTransform: 'uppercase',
              }}>Enfermera de turno</span>
              <span style={{
                fontFamily: HF_T, fontWeight: 700, fontSize: 16,
                color: '#fff', marginTop: 4, letterSpacing: '-0.2px',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>Valentina Rojas</span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); onMessageNurse && onMessageNurse(); }}
              style={{
                background: HC.brick, color: '#fff', border: 'none',
                padding: '10px 18px', borderRadius: 999,
                fontFamily: HF_T, fontWeight: 700, fontSize: 13,
                cursor: 'pointer', flexShrink: 0,
                boxShadow: '0 4px 12px rgba(240,116,62,0.35)',
              }}
            >
              Mensaje
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Daily summary (standard card + concept rows) ──────────────────────────────
const DAILY_SUMMARY = {
  text: 'Sofía tuvo una noche tranquila. Está respirando con un poco de ayuda del ventilador y recibiendo leche por sonda cada 3 horas. Su peso se mantiene estable.',
  concepts: [
    { label: 'Ventilación mecánica',   capsuleId: 4, category: 'Cuidado',   color: HC.clear },
    { label: 'Alimentación por sonda', capsuleId: 1, category: 'Lactancia', color: HC.viola },
  ],
};

function ConceptRow({ category, color, title, onClick, completed }) {
  return (
    <div onClick={onClick} style={{
      background: HC.paper, border: `1px solid ${HC.hair}`,
      borderRadius: 20, padding: 14, marginTop: 8,
      display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 14,
        background: color, display: 'grid', placeItems: 'center', flexShrink: 0,
      }}>
        {HIcon.sparkle(HC.ink)}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: HF_B, fontWeight: 500, fontSize: 10,
          color: HC.brick, letterSpacing: '0.5px', textTransform: 'uppercase',
        }}>{category}</div>
        <div style={{
          marginTop: 3, fontFamily: HF_T, fontWeight: 700, fontSize: 14.5,
          color: HC.ink, letterSpacing: '-0.1px', lineHeight: 1.25,
        }}>{title}</div>
      </div>
      <div style={{
        width: 34, height: 34, borderRadius: '50%',
        background: HC.cream, border: `1px solid ${HC.hair}`,
        display: 'grid', placeItems: 'center', flexShrink: 0,
      }}>
        {completed ? KIcon.check(HC.brick) : HIcon.arrow(HC.brick)}
      </div>
    </div>
  );
}

function DailySummary({ babyName }) {
  const bName = babyName || 'Sofía';
  const { text } = DAILY_SUMMARY;
  const empty = !text;
  // Replace fixed name with current baby name to preserve personalisation
  const narrative = text.replace(/^Sofía/, bName);

  return (
    <div style={{ margin: '24px 22px 0' }}>
      <HSectionHead title={`Cómo está ${bName} hoy`} kicker="Resumen del día"/>

      {empty ? (
        <div style={{
          background: HC.paper, border: `1px solid ${HC.hair}`,
          borderRadius: 22, padding: '16px 20px',
          fontFamily: HF_B, fontSize: 13.5, fontWeight: 500, color: HC.ink2,
          textAlign: 'center',
        }}>
          Todo tranquilo hoy
        </div>
      ) : (
        <>
          {/* Narrative card */}
          {text && (
            <div style={{
              background: HC.paper, border: `1px solid ${HC.hair}`,
              borderRadius: 24, padding: '18px 18px',
            }}>
              <p style={{
                margin: 0, fontFamily: HF_B, fontWeight: 400,
                fontSize: 13.5, lineHeight: 1.75, color: HC.ink, letterSpacing: '0.1px',
              }}>
                {narrative}
              </p>
            </div>
          )}

        </>
      )}
    </div>
  );
}

function SummaryCapsules({ onGoToCapsula, completedCapsulas }) {
  const completed = completedCapsulas || [];
  return (
    <div style={{ margin: '18px 22px 0' }}>
      <HSectionHead title="Cuidado y lactancia" kicker="Cápsulas del resumen" />
      {DAILY_SUMMARY.concepts.map((c, i) => (
        <ConceptRow key={i}
          category={c.category} color={c.color} title={c.label}
          completed={completed.includes(c.capsuleId)}
          onClick={() => onGoToCapsula && onGoToCapsula(c.capsuleId)}
        />
      ))}
    </div>
  );
}

// ─── Lactario card (compact) ──────────────────────────────────────────────────
function MilkBottleMeter({ reserved = 120, needed = 180 }) {
  const total = Math.max(needed, 1);
  const pct = Math.max(0, Math.min(100, Math.round((reserved / total) * 100)));
  const needsMore = reserved < needed;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
      <svg width="64" height="92" viewBox="0 0 96 132" style={{ flexShrink: 0, overflow: 'visible' }}>
        <defs>
          <clipPath id="homeMilkBottleBody">
            <path d="M26 48C25 39 30 32 41 28C51 24 58 20 59 11C60 5 64 2 70 3C76 4 79 9 77 15C75 22 78 27 87 34C94 40 96 48 91 57L86 113C84 124 74 129 55 129H45C25 129 15 120 14 101L12 64C11 55 16 49 26 48Z" />
          </clipPath>
        </defs>
        <path
          d="M44 29C55 24 61 20 62 11C63 5 67 1 73 3C79 5 82 10 79 17C77 23 80 28 88 35C96 42 99 51 93 61H28C25 47 29 36 44 29Z"
          fill="#F0B43D"
        />
        <path
          d="M23 48H90C97 48 101 54 100 62C99 69 95 73 88 73H25C16 73 10 69 10 61C10 53 15 48 23 48Z"
          fill="#44D0A7"
        />
        {[25, 38, 51, 64, 77].map((x) => (
          <path key={x} d={`M${x}46L${x - 1}74`} stroke="#171638" strokeWidth="6" strokeLinecap="round" />
        ))}
        <g clipPath="url(#homeMilkBottleBody)">
          <rect x="8" y="38" width="88" height="94" fill="#DDEFE8" />
          <rect
            x="8"
            y={38 + (94 * (100 - pct)) / 100}
            width="88"
            height={(94 * pct) / 100}
            fill={needsMore ? '#F8D96A' : '#BFE4C0'}
            opacity="0.82"
          />
        </g>
        <path
          d="M26 48C25 39 30 32 41 28C51 24 58 20 59 11C60 5 64 2 70 3C76 4 79 9 77 15C75 22 78 27 87 34C94 40 96 48 91 57L86 113C84 124 74 129 55 129H45C25 129 15 120 14 101L12 64C11 55 16 49 26 48Z"
          fill="none"
          stroke="rgba(42,35,32,0.04)"
          strokeWidth="1"
        />
        {[62, 79, 96, 113].map((y) => (
          <path key={y} d={`M5 ${y}H33`} stroke="#171638" strokeWidth="6" strokeLinecap="round" />
        ))}
      </svg>

      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', gap: 10,
          fontFamily: HF_B, fontSize: 11.5, color: HC.ink2,
        }}>
          <span>Reservada</span>
          <strong style={{ color: HC.ink }}>{reserved} ml</strong>
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', gap: 10,
          marginTop: 3,
          fontFamily: HF_B, fontSize: 11.5, color: HC.ink2,
        }}>
          <span>Necesita</span>
          <strong style={{ color: HC.ink }}>{needed} ml</strong>
        </div>
        <div style={{
          marginTop: 7,
          fontFamily: HF_T, fontSize: 12.5, fontWeight: 700,
          color: needsMore ? HC.brick : '#3D9156',
          lineHeight: 1.25,
        }}>
          {needsMore ? 'Se necesita que la madre vaya a dejar mas leche.' : 'Leche suficiente por ahora.'}
        </div>
      </div>
    </div>
  );
}

function LactarioCard({ reservation, onOpen, onCancel }) {
  const [confirmCancel, setConfirmCancel] = React.useState(false);

  const slots = window.LACTARIO_SLOTS || [];
  const nextSlot = slots.find(s => s.used < 4);
  const reservations = Array.isArray(reservation) ? reservation : (reservation ? [reservation] : []);
  const hasReservation = reservations.length > 0;
  const displayTime = hasReservation ? reservations[0] : (nextSlot ? nextSlot.time : '—');
  const dailyMax = window.LACTARIO_MAX_DAILY || 4;

  return (
    <div style={{ margin: '16px 22px 0' }}>
      <div
        onClick={onOpen}
        style={{
          background: HC.paper, border: `1px solid ${HC.hair}`,
          borderRadius: '24px 24px 0 0', padding: '14px 14px 14px 16px',
          display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
        }}
      >
        {/* Sun icon box */}
        <div style={{
          width: 44, height: 44, borderRadius: 14,
          background: HC.sun, display: 'grid', placeItems: 'center', flexShrink: 0,
        }}>
          {HIcon.bottle(HC.ink)}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: HF_B, fontWeight: 500, fontSize: 10,
            color: HC.ink2, letterSpacing: '0.5px', textTransform: 'uppercase',
          }}>Lactario</div>
          <div style={{
            fontFamily: HF_T, fontWeight: 700, fontSize: 15,
            color: HC.ink, marginTop: 3, lineHeight: 1.2,
          }}>
            {hasReservation ? 'Reservado' : 'Reservar extracción'}
          </div>
          <div style={{
            fontFamily: HF_B, fontWeight: 400, fontSize: 11.5,
            color: HC.ink2, marginTop: 2,
          }}>
            {hasReservation
              ? `${reservations.length}/${dailyMax} turnos hoy · primero ${displayTime}`
              : `Próximo turno libre: ${displayTime}`}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={(e) => { e.stopPropagation(); onOpen && onOpen(); }}
          style={{
            background: hasReservation ? 'transparent' : HC.brick,
            color: hasReservation ? HC.brick : '#fff',
            border: hasReservation ? `1.5px solid ${HC.brick}` : 'none',
            padding: '9px 15px', borderRadius: 999,
            fontFamily: HF_T, fontWeight: 700, fontSize: 12.5,
            cursor: 'pointer', whiteSpace: 'nowrap',
          }}
        >
          {hasReservation ? 'Ver' : 'Reservar'}
        </button>
      </div>

      <div style={{
        background: HC.paper,
        border: `1px solid ${HC.hair}`,
        borderTop: 'none',
        borderRadius: '0 0 24px 24px',
        marginTop: -1,
        padding: '14px 16px 16px',
      }}>
        <div style={{ height: 1, background: HC.hairSoft, marginBottom: 2 }}/>
        <MilkBottleMeter reserved={120} needed={180} />
      </div>

      {/* Cancel reservation link */}
      {hasReservation && (
        <div style={{ textAlign: 'center', marginTop: 8 }}>
          {confirmCancel ? (
            <span style={{
              fontFamily: HF_B, fontSize: 11.5, color: HC.ink2, fontWeight: 500,
            }}>
              ¿Confirmar cancelación?{' '}
              <span
                onClick={(e) => { e.stopPropagation(); onCancel(displayTime); setConfirmCancel(false); }}
                style={{ color: '#C0392B', fontWeight: 700, cursor: 'pointer' }}
              >Sí, cancelar</span>
              {' · '}
              <span
                onClick={(e) => { e.stopPropagation(); setConfirmCancel(false); }}
                style={{ color: HC.ink3, cursor: 'pointer' }}
              >No</span>
            </span>
          ) : (
            <span
              onClick={(e) => { e.stopPropagation(); setConfirmCancel(true); }}
              style={{
                fontFamily: HF_B, fontSize: 11.5, fontWeight: 500, color: HC.ink3,
                cursor: 'pointer', textDecoration: 'underline',
                textDecorationStyle: 'dotted',
              }}
            >
              Cancelar reserva
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Capsule cards (standard) ──────────────────────────────────────────────────
function CapsuleCard({ tag, tagKind, title, desc, mins, illoColor, illoIcon, onClick, completed }) {
  const tagBg    = tagKind === 'new' ? HC.sun  : HC.viola;
  const tagDot   = tagKind === 'new' ? HC.brick : null;
  const displayTag = completed ? 'COMPLETADA' : tag;
  return (
    <div onClick={onClick} style={{
      background: HC.paper, border: `1px solid ${HC.hair}`,
      borderRadius: 20, padding: 16, marginBottom: 10,
      display: 'flex', gap: 14, alignItems: 'stretch', cursor: 'pointer',
    }}>
      {/* Illo */}
      <div style={{
        width: 64, borderRadius: 16, background: illoColor,
        display: 'grid', placeItems: 'center', flexShrink: 0,
      }}>
        {illoIcon}
      </div>

      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Tag */}
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 5,
            background: tagBg, color: HC.ink,
            fontFamily: HF_B, fontWeight: 600, fontSize: 10,
            padding: '3px 9px', borderRadius: 999,
            letterSpacing: '0.4px', textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            {completed && KIcon.check(HC.ink)}
            {!completed && tagDot && <span style={{ width: 5, height: 5, borderRadius: '50%', background: tagDot }}/>}
            {displayTag}
          </span>
          <div style={{
            fontFamily: HF_T, fontWeight: 700, fontSize: 15,
            color: HC.ink, letterSpacing: '-0.2px', lineHeight: 1.25,
            marginBottom: 4, textWrap: 'pretty',
          }}>{title}</div>
          <div style={{
            fontFamily: HF_B, fontWeight: 400, fontSize: 12,
            color: HC.ink2, lineHeight: 1.45, textWrap: 'pretty',
          }}>
            {desc}
          </div>
        </div>

        <div style={{
          marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{
            fontFamily: HF_B, fontWeight: 500, fontSize: 11, color: HC.ink3,
            letterSpacing: '0.2px',
          }}>{mins}</span>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: HC.cream, border: `1px solid ${HC.hair}`,
            display: 'grid', placeItems: 'center',
          }}>
            {completed ? KIcon.check(HC.brick) : HIcon.arrow(HC.brick)}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Public entry ──────────────────────────────────────────────────────────────
function ScreenHome({ onGoToEdu, onGoToCapsula, parentName, babyName,
                       lactarioReservation, onOpenLactario, onCancelLactario,
                       onMessageNurse, completedCapsulas }) {
  const completed = completedCapsulas || [];
  const bName = babyName || 'Sofía';
  return (
    <div style={{ position: 'relative', overflowX: 'hidden', maxWidth: '100%' }}>
      {/* subtle decorative shape — half moon rosehip behind content */}
      <div style={{
        position: 'absolute', top: 420, right: -80,
        width: 200, height: 360, borderRadius: '200px 0 0 200px',
        background: HC.rosehip, opacity: 0.18,
        pointerEvents: 'none', zIndex: 0,
      }}/>
      {/* second decorative shape — apple half-circle low-left */}
      <div style={{
        position: 'absolute', top: 980, left: -100,
        width: 180, height: 320, borderRadius: '0 180px 180px 0',
        background: HC.apple, opacity: 0.13,
        pointerEvents: 'none', zIndex: 0,
      }}/>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <HomeGreeting parentName={parentName} />
        <BabyHero babyName={bName} onMessageNurse={onMessageNurse} />
        <DailySummary babyName={bName} />
        <LactarioCard
          reservation={lactarioReservation}
          onOpen={onOpenLactario}
          onCancel={onCancelLactario}
        />
        <SummaryCapsules onGoToCapsula={onGoToCapsula} completedCapsulas={completed} />

        <div style={{ marginTop: 26, padding: '0 22px', boxSizing: 'border-box' }}>
          <HSectionHead
            title="Para ti, hoy"
            kicker="Cápsulas educativas"
            action="Ver todo"
            onAction={onGoToEdu}
          />
        </div>
        <div style={{ padding: '0 22px', boxSizing: 'border-box' }}>
          <CapsuleCard
            tagKind="new" tag="NUEVO"
            title="Tu bebé empezó a alimentarse por sonda"
            desc={`Qué esperar estos días y cómo acompañar a ${bName} en esta etapa.`}
            mins="4 min · cápsula"
            illoColor={HC.apple}
            illoIcon={HIcon.drop(HC.ink)}
            completed={completed.includes(1)}
            onClick={() => onGoToCapsula ? onGoToCapsula(1) : onGoToEdu()}
          />
          <CapsuleCard
            tagKind="rec" tag="RECOMENDADO PARA TI"
            title="Método canguro: cómo empezar"
            desc={`Una guía cálida para tu primer contacto piel con piel con ${bName}.`}
            mins="6 min · cápsula"
            illoColor={HC.rosehip}
            illoIcon={HIcon.kangaroo(HC.viola)}
            completed={completed.includes(2)}
            onClick={() => onGoToCapsula ? onGoToCapsula(2) : onGoToEdu()}
          />
        </div>
      </div>
    </div>
  );
}

window.ScreenHome = ScreenHome;
