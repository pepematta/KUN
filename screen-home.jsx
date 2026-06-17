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
  sunSoft:  '#FFF5DC',
  apple:    '#AAD59E',
  appleSoft:'#EAF2E7',
  clear:    '#9AB2D4',
  sageSoft: '#E4ECE4',
  cardSoft: '#F2EBE0',
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

// ─── Cálculo de edad cronológica y corregida ───────────────────────────────────
// Diferencia entre dos fechas expresada en meses, semanas y días (calendario).
function ageDiffMWD(from, to) {
  if (!(from instanceof Date) || !(to instanceof Date) || to <= from) {
    return { months: 0, weeks: 0, days: 0, totalDays: 0 };
  }
  let months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth());
  let dayDiff = to.getDate() - from.getDate();
  if (dayDiff < 0) {
    months -= 1;
    const daysInPrevMonth = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
    dayDiff += daysInPrevMonth;
  }
  if (months < 0) months = 0;
  const weeks = Math.floor(dayDiff / 7);
  const days = dayDiff % 7;
  const totalDays = Math.floor((to.getTime() - from.getTime()) / 86400000);
  return { months, weeks, days, totalDays };
}

function formatAgeMWD(d) {
  const parts = [];
  if (d.months > 0) parts.push(`${d.months} ${d.months === 1 ? 'mes' : 'meses'}`);
  if (d.weeks > 0)  parts.push(`${d.weeks} ${d.weeks === 1 ? 'semana' : 'semanas'}`);
  if (d.days > 0)   parts.push(`${d.days} ${d.days === 1 ? 'día' : 'días'}`);
  if (!parts.length) return 'Recién nacido';
  if (parts.length === 1) return parts[0];
  if (parts.length === 2) return `${parts[0]} y ${parts[1]}`;
  return `${parts[0]}, ${parts[1]} y ${parts[2]}`;
}

function computeBabyAges(birthDateStr, gestWeeksRaw, gestDaysRaw) {
  if (!birthDateStr) return null;
  const birth = new Date(`${birthDateStr}T00:00:00`);
  if (isNaN(birth.getTime())) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const chrono = ageDiffMWD(birth, today);

  const gw = parseInt(gestWeeksRaw, 10);
  const gd = parseInt(gestDaysRaw, 10) || 0;
  const hasGest = Number.isFinite(gw);
  const totalGestDays = hasGest ? gw * 7 + gd : null;
  const isPreterm = hasGest && totalGestDays < 37 * 7; // estrictamente < 37 semanas

  let corrected = { applies: false, beforeTerm: false };
  if (isPreterm) {
    const shiftDays = 40 * 7 - totalGestDays; // semanas de corrección (40 - EG), en días
    // Fecha estimada de término (equivalente a 40 semanas de gestación).
    const correctedBirth = new Date(birth.getTime() + shiftDays * 86400000);
    const correctedTotalDays = Math.floor((today.getTime() - correctedBirth.getTime()) / 86400000);
    if (correctedTotalDays <= 0) {
      // Edad corregida ≤ 0: el bebé todavía NO alcanza su fecha estimada de
      // término (40 sem). No "ya corrigió"; al contrario, aún no llega al término.
      // Guardamos cuánto falta para esa fecha (today → término).
      corrected = { applies: false, beforeTerm: true, ...ageDiffMWD(today, correctedBirth) };
    } else {
      corrected = { applies: true, beforeTerm: false, ...ageDiffMWD(correctedBirth, today) };
    }
  }
  return { chrono, corrected, isPreterm, hasGest };
}

// Pastilla con etiqueta arriba y valor abajo (soporta texto largo con salto).
function AgeStat({ label, value, onClick }) {
  return (
    <div onClick={onClick} style={{
      background: 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
      borderRadius: 16, padding: '6px 12px',
      maxWidth: '100%', cursor: onClick ? 'pointer' : 'default',
    }}>
      <div style={{
        fontFamily: HF_B, fontWeight: 600, fontSize: 9, color: HC.ink2,
        letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 1,
      }}>{label}</div>
      <div style={{
        fontFamily: HF_T, fontWeight: 700, fontSize: 13, color: HC.ink,
        lineHeight: 1.2,
      }}>{value}</div>
    </div>
  );
}

function BabyHero({ babyName = 'Sofía', birthDate, gestWeeks, gestDays }) {
  const [ageInfo, setAgeInfo] = React.useState(null);
  const ages = computeBabyAges(birthDate, gestWeeks, gestDays);
  const chronoText = ages ? formatAgeMWD(ages.chrono) : 'Sin fecha';
  let correctedText;
  if (!ages) correctedText = '—';
  else if (ages.corrected.applies) correctedText = formatAgeMWD(ages.corrected);
  else if (ages.corrected.beforeTerm) correctedText = `Faltan ${formatAgeMWD(ages.corrected)} para el término`;
  else correctedText = 'No aplica (nació a término)';
  const info = ageInfo === 'chrono'
    ? {
        title: 'Edad cronológica',
        text: 'Es el tiempo que ha pasado desde que tu guagüita nació hasta hoy.',
      }
    : ageInfo === 'corrected'
      ? {
          title: 'Edad corregida',
          text: ages && !ages.isPreterm
            ? 'No aplica porque tu bebé nació a término (37 semanas o más). En ese caso usamos solo la edad cronológica.'
            : (ages && ages.corrected.beforeTerm
                ? 'Tu bebé todavía no alcanza su fecha estimada de término (40 semanas), así que la edad corregida aún es negativa. Por ahora nos guiamos por la edad cronológica.'
                : 'Es la edad calculada según la fecha en que debería haber nacido (40 semanas). Ayuda a mirar su desarrollo con más justicia si nació antes de tiempo.'),
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
          <img src="guaguas/guagua1.jpg" alt={babyName} style={{
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
            <AgeStat label="Edad cronológica" value={chronoText}    onClick={() => setAgeInfo('chrono')} />
            <AgeStat label="Edad corregida"   value={correctedText} onClick={() => setAgeInfo('corrected')} />
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
          background: HC.clear,
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
    { label: 'Ventilación mecánica',   capsuleId: 4, category: 'Cuidado médico', color: HC.clear },
    { label: 'Alimentación por sonda', capsuleId: 1, category: 'Lactancia y alimentación', color: HC.apple },
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

function ChildSwitcher({ childrenList, activeChildId, onSelectChild }) {
  const items = Array.isArray(childrenList) ? childrenList : [];
  if (items.length <= 1) return null;

  return (
    <div style={{ margin: '12px 22px 0' }}>
      <div style={{
        display: 'flex', gap: 8, overflowX: 'auto',
        padding: 4, borderRadius: 999,
        background: 'rgba(255,255,255,0.72)',
        border: `1px solid ${HC.hair}`,
      }}>
        {items.map((child, index) => {
          const selected = child.id === activeChildId;
          const label = child.name || `Bebé ${index + 1}`;
          return (
            <button
              key={child.id || index}
              onClick={() => onSelectChild && onSelectChild(child.id)}
              style={{
                minWidth: 92, maxWidth: 150, height: 36,
                borderRadius: 999, border: 'none',
                background: selected ? HC.brick : 'transparent',
                color: selected ? '#fff' : HC.ink2,
                fontFamily: HF_T, fontSize: 12.5, fontWeight: 700,
                padding: '0 14px',
                cursor: 'pointer',
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                flexShrink: 0,
              }}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function formatWeightDate(date) {
  if (!date) return 'Hoy';
  const [year, month, day] = String(date).split('-');
  if (!day) return date;
  return `${day}/${month}`;
}

function WeightTracker({ history = [], onSave }) {
  const today = new Date().toISOString().slice(0, 10);
  const sorted = Array.isArray(history)
    ? [...history].filter(item => item && item.grams).sort((a, b) => String(a.date).localeCompare(String(b.date)))
    : [];
  const latest = sorted[sorted.length - 1] || null;
  const previous = sorted[sorted.length - 2] || null;
  const [editing, setEditing] = React.useState(false);
  const [draft, setDraft] = React.useState(latest?.grams ? String(latest.grams) : '');
  const [draftDate, setDraftDate] = React.useState(today);

  React.useEffect(() => {
    if (!editing) {
      const todayEntry = sorted.find(item => item.date === today);
      setDraft(todayEntry?.grams ? String(todayEntry.grams) : (latest?.grams ? String(latest.grams) : ''));
      setDraftDate(today);
    }
  }, [latest?.grams, editing, history?.length]);

  const recent = sorted.slice(-7);
  const min = recent.length ? Math.min(...recent.map(item => item.grams)) : 0;
  const max = recent.length ? Math.max(...recent.map(item => item.grams)) : 0;
  const delta = latest && previous ? latest.grams - previous.grams : null;
  const chartW = 286;
  const chartH = 96;
  const points = recent.map((item, index) => {
    const x = recent.length === 1 ? chartW / 2 : (index / (recent.length - 1)) * chartW;
    const ratio = max === min ? 0.5 : (item.grams - min) / (max - min);
    const y = chartH - 18 - ratio * (chartH - 34);
    return { ...item, x, y };
  });
  const polyline = points.map(point => `${point.x},${point.y}`).join(' ');

  const save = () => {
    const grams = parseInt(draft, 10);
    if (!Number.isFinite(grams) || grams <= 0) return;
    onSave && onSave(grams, draftDate || today);
    setEditing(false);
  };

  return (
    <div style={{ margin: '18px 22px 0' }}>
      <div style={{
        background: HC.paper,
        border: `1px solid ${HC.hair}`,
        borderRadius: 24,
        padding: '16px 16px 15px',
        boxShadow: '0 1px 3px rgba(46,42,38,0.04)',
      }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12 }}>
          <div>
            <div style={{
              fontFamily: HF_B,
              fontSize: 11,
              fontWeight: 700,
              color: HC.ink3,
              letterSpacing: 0.8,
              textTransform: 'uppercase',
              marginBottom: 4,
            }}>
              Peso
            </div>
            <div style={{ fontFamily: HF_T, fontSize: 25, fontWeight: 800, color: HC.ink, letterSpacing: -0.5 }}>
              {latest ? latest.grams : '--'} <span style={{ fontFamily: HF_B, fontSize: 13, fontWeight: 600, color: HC.ink2 }}>g</span>
            </div>
            <div style={{ fontFamily: HF_B, fontSize: 12.5, color: HC.ink2, lineHeight: 1.45, marginTop: 3 }}>
              {latest
                ? `${delta === null ? 'Primer registro' : delta >= 0 ? `+${delta} g desde el registro anterior` : `${delta} g desde el registro anterior`}`
                : 'Agrega el primer peso para ver su evolucion.'}
            </div>
          </div>
          <button
            onClick={() => setEditing(true)}
            style={{
              border: `1.5px solid ${HC.apple}`,
              background: HC.appleSoft,
              color: HC.ink,
              borderRadius: 999,
              padding: '9px 13px',
              fontFamily: HF_T,
              fontSize: 13,
              fontWeight: 800,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            Editar
          </button>
        </div>

        {recent.length > 0 && (
          <div style={{ marginTop: 14, background: HC.appleSoft, borderRadius: 18, padding: '12px 12px 10px' }}>
            <svg width="100%" height={chartH} viewBox={`0 0 ${chartW} ${chartH}`} preserveAspectRatio="none" style={{ display: 'block' }}>
              <line x1="0" y1={chartH - 18} x2={chartW} y2={chartH - 18} stroke="rgba(42,35,32,0.10)" strokeWidth="1" />
              {points.length > 1 && <polyline points={polyline} fill="none" stroke={HC.brick} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />}
              {points.map(point => (
                <circle key={point.date} cx={point.x} cy={point.y} r="4" fill={HC.brick} vectorEffect="non-scaling-stroke" />
              ))}
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 6, marginTop: -2 }}>
              {recent.map(item => (
                <div key={item.date} style={{ fontFamily: HF_B, fontSize: 10.5, color: HC.ink3, minWidth: 0 }}>
                  {formatWeightDate(item.date)}
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 7, fontFamily: HF_B, fontSize: 11, color: HC.ink2 }}>
              <span>{min} g</span>
              <span>{max} g</span>
            </div>
          </div>
        )}

        {editing && (
          <div style={{
            marginTop: 14,
            paddingTop: 14,
            borderTop: `1px dashed ${HC.hair}`,
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 9, marginBottom: 9 }}>
              <input
                type="date"
                value={draftDate}
                max={today}
                onChange={e => setDraftDate(e.target.value)}
                style={{
                  minWidth: 0,
                  boxSizing: 'border-box',
                  border: `1.5px solid ${HC.hair}`,
                  borderRadius: 16,
                  padding: '12px 11px',
                  fontFamily: HF_B,
                  fontSize: 12.5,
                  color: HC.ink,
                  outline: 'none',
                  background: '#fff',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <input
                  type="number"
                  value={draft}
                  onChange={e => setDraft(e.target.value)}
                  placeholder="Peso"
                  inputMode="numeric"
                  min={0}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    boxSizing: 'border-box',
                    border: `1.5px solid ${HC.hair}`,
                    borderRadius: 16,
                    padding: '12px 11px',
                    fontFamily: HF_T,
                    fontSize: 15,
                    fontWeight: 800,
                    color: HC.ink,
                    outline: 'none',
                    background: '#fff',
                  }}
                />
                <div style={{ fontFamily: HF_T, fontSize: 13, fontWeight: 800, color: HC.ink2 }}>g</div>
              </div>
            </div>
            <button onClick={save} style={{
              width: '100%',
              border: 'none',
              background: HC.brick,
              color: '#fff',
              borderRadius: 999,
              padding: '12px 13px',
              fontFamily: HF_T,
              fontSize: 13,
              fontWeight: 800,
              cursor: 'pointer',
            }}>
              Guardar registro diario
            </button>
          </div>
        )}

        {sorted.length > 0 && (
          <div style={{ marginTop: 13, display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 2 }}>
            {sorted.slice(-6).reverse().map(item => (
              <div key={item.date} style={{
                flex: '0 0 auto',
                background: '#fff',
                border: `1px solid ${HC.hair}`,
                borderRadius: 14,
                padding: '8px 10px',
                minWidth: 70,
              }}>
                <div style={{ fontFamily: HF_T, fontSize: 13, fontWeight: 800, color: HC.ink }}>{item.grams} g</div>
                <div style={{ fontFamily: HF_B, fontSize: 10.5, color: HC.ink3, marginTop: 2 }}>{formatWeightDate(item.date)}</div>
              </div>
            ))}
          </div>
        )}
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
            fontFamily: HF_T, fontWeight: 700, fontSize: 19,
            color: HC.ink, letterSpacing: '-0.3px',
          }}>{`Resumen de ${bName}`}</div>
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

// ─── Lactario card ────────────────────────────────────────────────────────────
const BEREAVEMENT_CAPSULES = [
  {
    title: 'Qué puedo sentir en estos días',
    desc: 'Emociones intensas, confusión, culpa, rabia o silencio pueden aparecer y cambiar durante el día. No hay una sola forma correcta de vivir esto.',
    tag: 'Acompañamiento',
  },
  {
    title: 'Recuerdos y despedida',
    desc: 'Si la familia lo desea, el equipo puede orientar formas cuidadosas de despedirse, guardar recuerdos o pedir apoyo espiritual y cultural.',
    tag: 'Decisiones con calma',
  },
  {
    title: 'Cuidar el cuerpo después de la pérdida',
    desc: 'El cuerpo puede seguir con cambios hormonales, producción de leche, cansancio o dolor. Pide ayuda al equipo si algo te preocupa.',
    tag: 'Cuidado físico',
  },
  {
    title: 'Cuándo pedir ayuda urgente',
    desc: 'Busca apoyo inmediato si sientes que no puedes mantenerte a salvo, si la angustia te sobrepasa o si necesitas compañía ahora.',
    tag: 'Apoyo humano',
  },
];

const BEREAVEMENT_LIBRARY = [
  {
    title: 'Primeras horas: no hay una forma correcta',
    tag: 'Duelo temprano',
    tone: HC.viola,
    points: [
      'Puedes sentir tristeza, calma, rabia, culpa, desconcierto o nada por momentos.',
      'No tienes que decidir todo de inmediato. Pide que te repitan la informacion si la necesitas.',
      'Puedes pedir estar acompanada/o por alguien de confianza o por el equipo.',
    ],
  },
  {
    title: 'Recuerdos y despedida',
    tag: 'Memoria',
    tone: HC.rosehip,
    points: [
      'Si lo desean, pueden preguntar por formas de despedirse y guardar recuerdos.',
      'Algunas familias eligen fotos, huellas, una manta, una carta o una bendicion/ritual.',
      'Tambien es valido no querer hacerlo ahora. El equipo puede cuidar ese ritmo.',
    ],
  },
  {
    title: 'Cuidar el cuerpo',
    tag: 'Cuidado fisico',
    tone: HC.apple,
    points: [
      'El cuerpo puede seguir con cambios hormonales, cansancio, dolor o produccion de leche.',
      'Pregunta por manejo de dolor, lactancia/inhibicion o senales por las que consultar.',
      'Comer, hidratarse y dormir puede sentirse dificil; pequenos pasos tambien cuentan.',
    ],
  },
  {
    title: 'Cuando pedir ayuda ahora',
    tag: 'Apoyo urgente',
    tone: HC.sun,
    points: [
      'Pide ayuda inmediata si sientes que no puedes mantenerte a salvo.',
      'Tambien si la angustia te sobrepasa o necesitas compania en este momento.',
      'Puedes pedir hablar con enfermeria, psicologia, trabajo social o apoyo espiritual.',
    ],
  },
];

const BEREAVEMENT_RESOURCES = [
  {
    name: 'Sands',
    text: 'Ofrece apoyo para personas afectadas por la muerte de un bebe, incluyendo linea de ayuda, chat, comunidades y materiales de duelo.',
  },
  {
    name: 'Bliss',
    text: 'Organizacion enfocada en bebes prematuros y enfermos; incluye orientacion para familias que viven perdida neonatal.',
  },
  {
    name: 'March of Dimes',
    text: 'Tiene recursos sobre perdida, duelo y apoyo a familias durante embarazo, parto y etapa neonatal.',
  },
];

const POST_DISCHARGE_CAPSULES = [
  { id: 51, title: 'Primeros dias en casa', desc: 'Rutinas simples, visitas y registro de lo importante.', tag: 'Casa', color: HC.sun },
  { id: 52, title: 'Controles y seguimiento', desc: 'Como preparar controles y llevar preguntas utiles.', tag: 'Seguimiento', color: HC.clear },
  { id: 53, title: 'Signos de alarma', desc: 'Cuando llamar o consultar de inmediato.', tag: 'Seguridad', color: HC.rosehip },
  { id: 54, title: 'Alimentacion y medicamentos', desc: 'Horarios, tomas, dosis e indicaciones en casa.', tag: 'Rutina', color: HC.apple },
  { id: 55, title: 'Cuidar tambien a la familia', desc: 'Cansancio, apoyo concreto y emociones despues del alta.', tag: 'Familia', color: HC.viola },
];

const POST_DISCHARGE_TIPS = [
  'Ten a mano controles, telefonos utiles e indicaciones escritas.',
  'Registra tomas, panales, medicamentos o temperatura si eso te ordena.',
  'Limita visitas al inicio y pide lavado de manos a quienes entren.',
  'Consulta si notas dificultad respiratoria, color azulado, fiebre, rechazo persistente de alimentacion o decaimiento marcado.',
];

function BereavementHome({ babyName, childrenList, activeChildId, onSelectChild }) {
  const name = babyName || 'tu bebé';
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ padding: '8px 22px 0' }}>
        <div style={{
          fontFamily: HF_B, fontWeight: 500, fontSize: 12,
          color: HC.ink2, letterSpacing: '0.2px',
        }}>
          Estamos contigo
        </div>
        <div style={{
          fontFamily: HF_T, fontWeight: 700, fontSize: 26,
          color: HC.ink, letterSpacing: '-0.5px',
          marginTop: 4, lineHeight: 1.15,
        }}>
          Acompañamiento para este momento.
        </div>
      </div>

      <ChildSwitcher childrenList={childrenList} activeChildId={activeChildId} onSelectChild={onSelectChild} />

      <div style={{
        margin: '18px 22px 0',
        background: HC.paper,
        border: `1px solid ${HC.hair}`,
        borderRadius: 24,
        padding: '18px 18px 20px',
      }}>
        <div style={{
          fontFamily: HF_T, fontSize: 19, fontWeight: 700,
          color: HC.ink, letterSpacing: '-0.2px',
        }}>
          {name}
        </div>
        <div style={{
          fontFamily: HF_B, fontSize: 13,
          color: HC.ink2, lineHeight: 1.6,
          marginTop: 8,
        }}>
          Sentimos mucho lo que están viviendo. Este espacio queda en pausa de controles y tareas, y reúne apoyo para atravesar estos días con el equipo de salud cerca.
        </div>
      </div>

      <div style={{ margin: '24px 22px 0' }}>
        <HSectionHead title="Para acompañarte" kicker="Cápsulas de duelo" />
        <div style={{ marginBottom: 14 }}>
          <HSectionHead title="Biblioteca de apoyo" kicker="Solo para este momento" />
          {BEREAVEMENT_LIBRARY.map((item) => (
            <div key={item.title} style={{
              background: HC.paper,
              border: `1px solid ${HC.hair}`,
              borderRadius: 22,
              padding: '15px 16px',
              marginBottom: 10,
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 11 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 15,
                  background: item.tone,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: HF_T, fontSize: 16, fontWeight: 700, color: HC.ink,
                }}>
                  {item.tag.slice(0, 1)}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{
                    fontFamily: HF_B, fontSize: 10.5, fontWeight: 700,
                    color: HC.ink3, letterSpacing: 0.8, textTransform: 'uppercase',
                    marginBottom: 4,
                  }}>
                    {item.tag}
                  </div>
                  <div style={{ fontFamily: HF_T, fontSize: 16, fontWeight: 700, color: HC.ink, letterSpacing: '-0.1px' }}>
                    {item.title}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 9 }}>
                    {item.points.map(point => (
                      <div key={point} style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                        <div style={{ width: 5, height: 5, borderRadius: '50%', background: HC.brick, marginTop: 8, flexShrink: 0 }} />
                        <div style={{ fontFamily: HF_B, fontSize: 12.5, color: HC.ink2, lineHeight: 1.5 }}>
                          {point}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {BEREAVEMENT_CAPSULES.map((cap) => (
          <div key={cap.title} style={{
            background: HC.paper,
            border: `1px solid ${HC.hair}`,
            borderRadius: 22,
            padding: '15px 16px',
            marginBottom: 10,
          }}>
            <div style={{
              display: 'inline-flex',
              borderRadius: 999,
              padding: '5px 9px',
              background: HC.sageSoft,
              fontFamily: HF_B,
              fontSize: 10.5,
              fontWeight: 600,
              color: HC.ink2,
              marginBottom: 8,
            }}>
              {cap.tag}
            </div>
            <div style={{
              fontFamily: HF_T,
              fontSize: 15.5,
              fontWeight: 700,
              color: HC.ink,
              letterSpacing: '-0.1px',
            }}>
              {cap.title}
            </div>
            <div style={{
              fontFamily: HF_B,
              fontSize: 12.5,
              color: HC.ink2,
              lineHeight: 1.55,
              marginTop: 5,
            }}>
              {cap.desc}
            </div>
          </div>
        ))}
      </div>

      <div style={{
        margin: '18px 22px 0',
        background: HC.cardSoft,
        borderRadius: 22,
        padding: '16px 17px',
      }}>
        <div style={{ fontFamily: HF_T, fontSize: 15, fontWeight: 700, color: HC.ink }}>
          Apoyo del equipo
        </div>
        <div style={{ fontFamily: HF_B, fontSize: 12.5, color: HC.ink2, lineHeight: 1.55, marginTop: 5 }}>
          Puedes pedir hablar con enfermería, psicología, trabajo social o acompañamiento espiritual si lo necesitas. No tienes que pasar por esto sin compañía.
        </div>
      </div>
      <BereavementResourcesBlock />
    </div>
  );
}

function BereavementResourcesBlock() {
  return (
    <div style={{ margin: '14px 22px 0' }}>
      <div style={{
        background: HC.paper,
        border: `1px solid ${HC.hair}`,
        borderRadius: 22,
        padding: '15px 16px',
      }}>
        <div style={{ fontFamily: HF_T, fontSize: 15, fontWeight: 700, color: HC.ink }}>
          Recursos externos
        </div>
        <div style={{ fontFamily: HF_B, fontSize: 12.5, color: HC.ink2, lineHeight: 1.55, marginTop: 6 }}>
          Estos recursos pueden servir como complemento al acompanamiento local del equipo.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 12 }}>
          {BEREAVEMENT_RESOURCES.map(resource => (
            <div key={resource.name} style={{ background: HC.cardSoft, borderRadius: 16, padding: '11px 12px' }}>
              <div style={{ fontFamily: HF_T, fontSize: 13.5, fontWeight: 700, color: HC.ink }}>
                {resource.name}
              </div>
              <div style={{ fontFamily: HF_B, fontSize: 12, color: HC.ink2, lineHeight: 1.45, marginTop: 3 }}>
                {resource.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PostDischargeHome({ babyName, childrenList, activeChildId, onSelectChild, onGoToCapsula }) {
  const name = babyName || 'tu bebe';
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ padding: '8px 22px 0' }}>
        <div style={{ fontFamily: HF_B, fontWeight: 700, fontSize: 12, color: HC.ink2, letterSpacing: 0.7, textTransform: 'uppercase' }}>
          Hito de alta
        </div>
        <div style={{
          fontFamily: HF_T, fontWeight: 800, fontSize: 27,
          color: HC.ink, letterSpacing: '-0.5px',
          marginTop: 4, lineHeight: 1.12,
        }}>
          Ya estan en camino a casa.
        </div>
      </div>

      <ChildSwitcher childrenList={childrenList} activeChildId={activeChildId} onSelectChild={onSelectChild} />

      <div style={{
        margin: '18px 22px 0',
        background: '#fff',
        border: `1px solid ${HC.hair}`,
        borderRadius: 26,
        padding: '18px 18px 20px',
        boxShadow: '0 16px 30px rgba(154,120,51,0.10)',
      }}>
        <div style={{
          display: 'inline-flex',
          borderRadius: 999,
          padding: '6px 10px',
          background: HC.sunSoft,
          fontFamily: HF_B,
          fontSize: 11,
          fontWeight: 700,
          color: HC.ink2,
          marginBottom: 10,
        }}>
          Nuevo comienzo
        </div>
        <div style={{ fontFamily: HF_T, fontSize: 20, fontWeight: 800, color: HC.ink, letterSpacing: '-0.2px' }}>
          {name}
        </div>
        <div style={{ fontFamily: HF_B, fontSize: 13, color: HC.ink2, lineHeight: 1.6, marginTop: 8 }}>
          Este espacio cambia para acompanarlos fuera del hospital. Dejamos atras lactario y SEDILE, y priorizamos controles, rutinas en casa, signos de alarma y cuidado familiar.
        </div>
      </div>

      <div style={{ margin: '24px 22px 0' }}>
        <HSectionHead title="Capsulas post alta" kicker="Para casa" />
        {POST_DISCHARGE_CAPSULES.map(cap => (
          <div
            key={cap.id}
            onClick={() => onGoToCapsula && onGoToCapsula(cap.id)}
            style={{
              background: '#fff',
              border: `1px solid ${HC.hair}`,
              borderRadius: 22,
              padding: '14px 15px',
              marginBottom: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              cursor: 'pointer',
            }}
          >
            <div style={{
              width: 38, height: 38, borderRadius: 16,
              background: cap.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
              fontFamily: HF_T, fontSize: 16, fontWeight: 800, color: HC.ink,
            }}>
              {cap.tag.slice(0, 1)}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: HF_T, fontSize: 15.5, fontWeight: 800, color: HC.ink, letterSpacing: '-0.1px' }}>
                {cap.title}
              </div>
              <div style={{ fontFamily: HF_B, fontSize: 12.3, color: HC.ink2, lineHeight: 1.45, marginTop: 3 }}>
                {cap.desc}
              </div>
            </div>
            {HIcon.chevR(HC.ink3)}
          </div>
        ))}
      </div>

      <div style={{ margin: '22px 22px 0' }}>
        <HSectionHead title="Checklist en casa" kicker="Primeros dias" />
        <div style={{ background: '#fff', border: `1px solid ${HC.hair}`, borderRadius: 22, padding: '15px 16px' }}>
          {POST_DISCHARGE_TIPS.map(tip => (
            <div key={tip} style={{ display: 'flex', gap: 9, alignItems: 'flex-start', marginBottom: 10 }}>
              <div style={{ width: 18, height: 18, borderRadius: 9, background: HC.apple, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <span style={{ fontFamily: HF_T, fontSize: 11, fontWeight: 800, color: HC.ink }}>✓</span>
              </div>
              <div style={{ fontFamily: HF_B, fontSize: 12.5, color: HC.ink2, lineHeight: 1.5 }}>
                {tip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DischargePrompt({ onConfirm }) {
  const [confirming, setConfirming] = React.useState(false);
  return (
    <div style={{ margin: '18px 22px 0' }}>
      <div style={{ background: HC.sunSoft, border: `1px solid ${HC.hair}`, borderRadius: 22, padding: '15px 16px' }}>
        <div style={{ fontFamily: HF_T, fontSize: 16, fontWeight: 800, color: HC.ink, letterSpacing: '-0.1px' }}>
          ¿Ya les dieron el alta?
        </div>
        <div style={{ fontFamily: HF_B, fontSize: 12.5, color: HC.ink2, lineHeight: 1.5, marginTop: 5 }}>
          Si el equipo ya confirmo el alta, puedes cambiar KUN al modo post alta.
        </div>
        {confirming ? (
          <div style={{ display: 'flex', gap: 9, marginTop: 12 }}>
            <button onClick={() => setConfirming(false)} style={{ flex: 1, border: `1px solid ${HC.hair}`, background: '#fff', color: HC.ink, borderRadius: 999, padding: '11px 12px', fontFamily: HF_T, fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>
              Volver
            </button>
            <button onClick={onConfirm} style={{ flex: 1, border: 'none', background: HC.brick, color: '#fff', borderRadius: 999, padding: '11px 12px', fontFamily: HF_T, fontSize: 13, fontWeight: 800, cursor: 'pointer' }}>
              Confirmar alta
            </button>
          </div>
        ) : (
          <button onClick={() => setConfirming(true)} style={{ width: '100%', border: 'none', background: HC.brick, color: '#fff', borderRadius: 999, padding: '12px 14px', fontFamily: HF_T, fontSize: 13.5, fontWeight: 800, cursor: 'pointer', marginTop: 12 }}>
            Cambiar a post alta
          </button>
        )}
      </div>
    </div>
  );
}

function LactarioCard({ reservation, onOpen, onCancel }) {
  const [confirmCancel, setConfirmCancel] = React.useState(false);

  const reserved = 120;
  const needed   = 180;
  const pct = Math.max(0, Math.min(100, (reserved / Math.max(needed, 1)) * 100));
  const needsMore = reserved < needed;
  const bottleLevel = Math.max(0, Math.min(5, Math.round((pct / 100) * 5)));

  const slots = window.LACTARIO_SLOTS || [];
  const nextSlot = slots.find(s => s.used < 4);
  const reservations = Array.isArray(reservation) ? reservation : (reservation ? [reservation] : []);
  const hasReservation = reservations.length > 0;
  const displayTime = hasReservation ? reservations[0] : (nextSlot ? nextSlot.time : '—');
  const dailyMax = window.LACTARIO_MAX_DAILY || 4;

  return (
    <div style={{ margin: '16px 22px 0' }}>
      <div style={{
        background: HC.paper, border: `1px solid ${HC.hair}`,
        borderRadius: 24, padding: '14px 14px 16px 16px',
        cursor: 'pointer',
      }} onClick={onOpen}>

        {/* ── Top row: icon + text + button ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Mamadera icon — same asset, slightly smaller */}
          <img
            src={`assets/mamadera-${bottleLevel}.svg?v=2`}
            alt="Mamadera"
            style={{ width: 44, height: 52, objectFit: 'contain', flexShrink: 0, display: 'block' }}
          />

          {/* Text */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: HF_B, fontWeight: 400, fontSize: 11.5,
              color: HC.ink2, marginTop: 2,
            }}>
              {hasReservation
                ? `${reservations.length}/${dailyMax} turnos hoy · primero ${displayTime}`
                : `Próximo turno libre: ${displayTime}`}
            </div>
          </div>

          {/* CTA button */}
          <button
            onClick={(e) => { e.stopPropagation(); onOpen && onOpen(); }}
            style={{
              background: hasReservation ? 'transparent' : HC.brick,
              color: hasReservation ? HC.brick : '#fff',
              border: hasReservation ? `1.5px solid ${HC.brick}` : 'none',
              padding: '10px 18px', borderRadius: 999,
              fontFamily: HF_T, fontWeight: 700, fontSize: 13.5,
              cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
            }}
          >
            {hasReservation ? 'Ver' : 'Reservar'}
          </button>
        </div>

        {/* ── Divider ── */}
        <div style={{ height: 1, background: HC.hair, margin: '14px 0 12px' }}/>

        {/* ── Milk meter ── */}
        <div>
          {/* Label + value */}
          <div style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            marginBottom: 8,
          }}>
            <span style={{ fontFamily: HF_B, fontSize: 13, fontWeight: 500, color: HC.ink }}>
              Leche disponible
            </span>
            <span style={{ fontFamily: HF_T, fontSize: 13, fontWeight: 700, color: HC.ink }}>
              <span style={{ fontSize: 17 }}>{reserved}</span>
              {' '}
              <span style={{ fontWeight: 400, color: HC.ink2 }}>/ {needed} ml</span>
            </span>
          </div>

          {/* Progress bar */}
          <div style={{
            height: 8, borderRadius: 999,
            background: HC.hairSoft,
          }}>
            <div style={{
              height: '100%', borderRadius: 999,
              background: HC.apple,
              width: `${pct}%`,
              transition: 'width .4s',
            }}/>
          </div>

          {/* Alert */}
          {needsMore && (
            <div style={{
              marginTop: 10,
              background: HC.appleSoft, borderRadius: 14,
              padding: '10px 13px',
              display: 'flex', alignItems: 'flex-start', gap: 10,
            }}>
              <div style={{
                width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
                background: HC.apple,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginTop: 1,
              }}>
                <span style={{ fontFamily: HF_T, fontSize: 11, fontWeight: 700, color: HC.ink, lineHeight: 1 }}>!</span>
              </div>
              <span style={{
                fontFamily: HF_B, fontSize: 12.5, fontWeight: 500,
                color: HC.ink, lineHeight: 1.45,
              }}>
                Faltan {needed - reserved} ml — pasa a dejar más leche al lactario.
              </span>
            </div>
          )}
        </div>
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
                style={{ color: '#D14B3A', fontWeight: 700, cursor: 'pointer' }}
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
    'Orientación UCIN':              { icon: KIcon.cat.kang,   color: HC.viola },
    'Cuidado médico':                { icon: KIcon.cat.ecmo,   color: HC.clear },
    'Lactancia y alimentación':      { icon: KIcon.cat.breast, color: HC.apple },
    'Vínculo y cuidados cotidianos': { icon: KIcon.cat.kang,   color: HC.rosehip },
    'Camino a casa':                 { icon: KIcon.cat.prem,   color: HC.sun },
    'Familia y comunidad':           { icon: KIcon.cat.kang,   color: HC.cardSoft },
  };
  const tm = topicMap[topic] || { icon: KIcon.cat.kang, color: HC.cardSoft };
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
                       children: childrenList, activeChildId, onSelectChild,
                       activeChildVitalStatus, onMarkDischarged,
                       birthDate, gestWeeks, gestDays,
                       lactarioReservation, onOpenLactario, onCancelLactario,
                       completedCapsulas, babyStatus, babyWeightHistory, onSaveBabyWeight, onEditBabyStatus }) {
  const completed = completedCapsulas || [];
  const bName = babyName || 'Sofía';
  const isBereavement = activeChildVitalStatus === 'deceased';
  const isDischarged = activeChildVitalStatus === 'discharged';
  return (
    <div style={{ position: 'relative', overflowX: 'hidden', maxWidth: '100%', minHeight: '100%', background: isDischarged ? '#FFF9E8' : 'transparent' }}>
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
        {isBereavement ? (
          <BereavementHome babyName={bName} childrenList={childrenList} activeChildId={activeChildId} onSelectChild={onSelectChild} />
        ) : isDischarged ? (
          <PostDischargeHome babyName={bName} childrenList={childrenList} activeChildId={activeChildId} onSelectChild={onSelectChild} onGoToCapsula={onGoToCapsula} />
        ) : (
          <>
            <HomeGreeting parentName={parentName} />
            <BabyHero babyName={bName} birthDate={birthDate} gestWeeks={gestWeeks} gestDays={gestDays} />
            <ChildSwitcher childrenList={childrenList} activeChildId={activeChildId} onSelectChild={onSelectChild} />
            <WeightTracker history={babyWeightHistory} onSave={onSaveBabyWeight} />
            <DailySummary babyName={bName} babyStatus={babyStatus} onEditStatus={onEditBabyStatus} />
            <DischargePrompt onConfirm={onMarkDischarged} />
          </>
        )}
        {!isBereavement && !isDischarged && (
          <>
        <div style={{ marginTop: 26, padding: '0 22px', boxSizing: 'border-box' }}>
          <HSectionHead
            title="Cápsulas recomendadas"
            action="Ver todo"
            onAction={onGoToEdu}
          />
        </div>
        <div style={{ padding: '0 22px', boxSizing: 'border-box' }}>
          <CapsuleCard
            topic="Vínculo y cuidados cotidianos"
            title="El apego en la UCIN"
            mins="5 min"
            tag="Nuevo para ti"
            completed={completed.includes(1)}
            onClick={() => onGoToCapsula ? onGoToCapsula(1) : onGoToEdu()}
          />
          <CapsuleCard
            topic="Lactancia y alimentación"
            title="Sonda al dedo"
            mins="5 min"
            tag="Recomendado"
            completed={completed.includes(2)}
            onClick={() => onGoToCapsula ? onGoToCapsula(2) : onGoToEdu()}
          />
        </div>
          </>
        )}
      </div>
    </div>
  );
}

window.ScreenHome = ScreenHome;
