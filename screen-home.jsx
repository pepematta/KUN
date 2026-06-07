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

function BabyHero({ babyName = 'Sofía' }) {
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
    <div style={{ margin: '16px 18px 0', display: 'flex', flexDirection: 'column', gap: 10, position: 'relative' }}>

      {/* ── Compact baby card ── */}
      <div style={{
        background: HC.rosehip,
        borderRadius: 28, padding: '16px 18px',
        display: 'flex', alignItems: 'center', gap: 16, overflow: 'hidden',
      }}>
        {/* Decorative circle */}
        <div style={{
          position: 'absolute', top: -40, right: -40,
          width: 130, height: 130, borderRadius: '50%',
          background: 'rgba(255,255,255,0.15)', pointerEvents: 'none',
        }}/>

        {/* Circular photo */}
        <div style={{
          width: 76, height: 76, borderRadius: '50%', flexShrink: 0,
          overflow: 'hidden',
          boxShadow: '0 0 0 3px rgba(255,255,255,0.7)',
        }}>
          <img src="premature.jpg" alt={babyName} style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center 30%',
          }}/>
        </div>

        {/* Name + age pills stacked vertically */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: HF_T, fontWeight: 700, fontSize: 28,
            color: HC.ink, letterSpacing: '-0.4px', lineHeight: 1, marginBottom: 10,
          }}>{babyName}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <PillStat value="34" label="sem. cronológicas" onClick={() => setAgeInfo('chrono')} />
            <PillStat value="32" label="sem. corregidas"   onClick={() => setAgeInfo('corrected')} />
          </div>
        </div>
      </div>

      {/* ── Nurse card ── */}
      <div style={{
        background: HC.paper, borderRadius: 22, padding: '13px 16px',
        display: 'flex', alignItems: 'center', gap: 12,
        border: `1px solid ${HC.hair}`,
      }}>
        {/* Avatar with initial */}
        <div style={{
          width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
          background: HC.apple,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <span style={{ fontFamily: HF_T, fontSize: 16, fontWeight: 700, color: HC.ink }}>V</span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: HF_B, fontSize: 9.5, fontWeight: 600,
            color: HC.ink3, letterSpacing: '0.7px', textTransform: 'uppercase', marginBottom: 3,
          }}>Enfermera de turno</div>
          <div style={{
            fontFamily: HF_T, fontSize: 16, fontWeight: 700,
            color: HC.ink, letterSpacing: '-0.2px',
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>Valentina Rojas</div>
        </div>
        {/* Online indicator */}
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#52C17B', flexShrink: 0 }}/>
      </div>

      {/* ── Age info tooltip — lives OUTSIDE the card so it isn't clipped ── */}
      {info && (
        <div onClick={() => setAgeInfo(null)} style={{
          position: 'absolute', inset: 0, zIndex: 10,
          background: 'rgba(42,35,32,0.18)', borderRadius: 28,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0 14px', boxSizing: 'border-box',
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            width: '100%',
            background: 'rgba(255,255,255,0.97)',
            borderRadius: 20, padding: '18px 20px',
            border: `1px solid ${HC.hair}`,
            boxShadow: '0 10px 28px rgba(42,35,32,0.18)',
          }}>
            <div style={{
              fontFamily: HF_T, fontSize: 16, fontWeight: 700,
              color: HC.ink, letterSpacing: '-0.2px', marginBottom: 6,
            }}>{info.title}</div>
            <div style={{
              fontFamily: HF_B, fontSize: 12.5, fontWeight: 400,
              color: HC.ink2, lineHeight: 1.6,
            }}>{info.text}</div>
            <div onClick={() => setAgeInfo(null)} style={{
              marginTop: 12,
              fontFamily: HF_T, fontSize: 12.5, fontWeight: 700,
              color: HC.brick, cursor: 'pointer',
            }}>Entendido</div>
          </div>
        </div>
      )}

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

function DailySummary({ babyName, babyStatus, onEditStatus }) {
  const bName = babyName || 'Sofía';
  const hasStatus = babyStatus && (
    babyStatus.lugar || babyStatus.temperatura || babyStatus.respiracion ||
    (babyStatus.alimentacion && babyStatus.alimentacion.length > 0) ||
    (babyStatus.accesos && babyStatus.accesos.length > 0) ||
    (babyStatus.diagnosticos && babyStatus.diagnosticos.length > 0)
  );

  return (
    <div style={{ margin: '24px 22px 0' }}>
      {/* Custom header row with pencil button */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        marginBottom: 12,
      }}>
        <div>
          <div style={{
            fontFamily: HF_B, fontWeight: 500, fontSize: 10,
            color: HC.brick, letterSpacing: '0.7px', textTransform: 'uppercase',
            marginBottom: 4,
          }}>Resumen del día</div>
          <div style={{
            fontFamily: HF_T, fontWeight: 700, fontSize: 19,
            color: HC.ink, letterSpacing: '-0.3px',
          }}>{`Cómo está ${bName} hoy`}</div>
        </div>
        {onEditStatus && (
          <button onClick={onEditStatus} style={{
            height: 34, borderRadius: 999,
            background: '#fff', border: `1px solid ${HC.hair}`,
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '0 12px 0 10px',
            cursor: 'pointer', flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M9.5 2.5L11.5 4.5L4.5 11.5H2.5V9.5L9.5 2.5Z"
                stroke={HC.brick} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{
              fontFamily: HF_T, fontSize: 12, fontWeight: 700,
              color: HC.brick, letterSpacing: '-0.1px',
            }}>Actualizar estado</span>
          </button>
        )}
      </div>

      {hasStatus ? (() => {
        const StatusNarrative = window.BabyStatusNarrative;
        return StatusNarrative
          ? <StatusNarrative status={babyStatus} babyName={bName} onEdit={onEditStatus} />
          : null;
      })() : (
        <div
          onClick={onEditStatus}
          style={{
            background: HC.paper, border: `1.5px dashed ${HC.hair}`,
            borderRadius: 24, padding: '22px 20px',
            display: 'flex', alignItems: 'center', gap: 16,
            cursor: onEditStatus ? 'pointer' : 'default',
          }}
        >
          <div style={{
            width: 44, height: 44, borderRadius: 14, flexShrink: 0,
            background: HC.rosehip,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 5V17M5 11H17" stroke={HC.brick} strokeWidth="2.2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div style={{
              fontFamily: HF_T, fontWeight: 700, fontSize: 14.5,
              color: HC.ink, letterSpacing: '-0.1px', marginBottom: 4,
            }}>
              Actualiza el estado de {bName}
            </div>
            <div style={{
              fontFamily: HF_B, fontWeight: 400, fontSize: 12.5,
              color: HC.inkSoft, lineHeight: 1.5,
            }}>
              Registra cómo está hoy para tener un resumen siempre a mano.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Lactario card (compact) ──────────────────────────────────────────────────
function MilkBottleMeter({ reserved = 120, needed = 180 }) {
  const total = Math.max(needed, 1);
  const pct = Math.max(0, Math.min(100, Math.round((reserved / total) * 100)));
  const needsMore = reserved < needed;
  const bottleLevel = Math.max(0, Math.min(5, Math.round((pct / 100) * 5)));

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 12 }}>
      <img
        src={`assets/mamadera-${bottleLevel}.svg?v=2`}
        alt={`${pct}% de leche reservada`}
        style={{
          width: 64,
          height: 116,
          objectFit: 'contain',
          flexShrink: 0,
          display: 'block',
        }}
      />

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

// ─── Capsule cards (compact row style) ────────────────────────────────────────
function CapsuleCard({ topic, title, mins, tag, onClick, completed }) {
  const topicMap = {
    'Apego y vínculo':    { icon: KIcon.cat.kang,   color: HC.rosehip },
    'Alimentación':       { icon: KIcon.cat.breast,  color: HC.sun },
    'Lactancia':          { icon: KIcon.cat.breast,  color: HC.apple },
    'Alta y hogar':       { icon: KIcon.cat.prem,    color: HC.apple },
    'Primeros auxilios':  { icon: KIcon.cat.ecmo,    color: HC.viola },
    'Cuidados por etapa': { icon: KIcon.cat.kang,    color: HC.clear },
  };
  const tm = topicMap[topic] || { icon: KIcon.cat.kang, color: HC.rosehip };
  return (
    <div onClick={onClick} style={{
      background: HC.paper, borderRadius: 22, padding: '14px 16px',
      display: 'flex', alignItems: 'center', gap: 14,
      border: `1px solid ${HC.hair}`, cursor: 'pointer', marginBottom: 10,
    }}>
      {/* Square category icon */}
      <div style={{
        width: 46, height: 46, borderRadius: 14, background: tm.color,
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {completed
          ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10L8 14L16 6" stroke={HC.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          : tm.icon(HC.ink)
        }
      </div>

      {/* Text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontFamily: HF_T, fontSize: 14.5, fontWeight: 700, color: HC.ink,
          letterSpacing: '-0.1px', marginBottom: 4,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>{title}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: HF_B, fontSize: 11.5, color: HC.ink3, fontWeight: 400 }}>
          <span>{mins}</span>
          <span style={{ width: 3, height: 3, borderRadius: '50%', background: HC.ink3 }}/>
          <span>{tag || 'Cápsula'}</span>
        </div>
      </div>

      {/* Chevron */}
      {HIcon.chevR(HC.ink3)}
    </div>
  );
}

// ─── Public entry ──────────────────────────────────────────────────────────────
function ScreenHome({ onGoToEdu, onGoToCapsula, parentName, babyName,
                       lactarioReservation, onOpenLactario, onCancelLactario,
                       completedCapsulas, babyStatus, onEditBabyStatus }) {
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
        <BabyHero babyName={bName} />
        <DailySummary babyName={bName} babyStatus={babyStatus} onEditStatus={onEditBabyStatus} />
        <LactarioCard
          reservation={lactarioReservation}
          onOpen={onOpenLactario}
          onCancel={onCancelLactario}
        />
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
            topic="Apego y vínculo"
            title="El apego en la UCIN"
            mins="5 min"
            tag="Nuevo para ti"
            completed={completed.includes(1)}
            onClick={() => onGoToCapsula ? onGoToCapsula(1) : onGoToEdu()}
          />
          <CapsuleCard
            topic="Alimentación"
            title="Sonda al dedo"
            mins="5 min"
            tag="Recomendado"
            completed={completed.includes(2)}
            onClick={() => onGoToCapsula ? onGoToCapsula(2) : onGoToEdu()}
          />
        </div>
      </div>
    </div>
  );
}

window.ScreenHome = ScreenHome;
