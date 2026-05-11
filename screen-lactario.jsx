// Lactario booking screen.
// Exposes: ScreenLactario({ reservation, onReserve, onCancel, onBack })
// Also exposes: window.LACTARIO_SLOTS (used by LactarioCard in screen-home.jsx)

const LACTARIO_SLOTS = [
  { time: '7:00 AM',  used: 1 },
  { time: '8:00 AM',  used: 4 },
  { time: '9:00 AM',  used: 2 },
  { time: '10:00 AM', used: 0 },
  { time: '11:00 AM', used: 3 },
  { time: '12:00 PM', used: 4 },
  { time: '1:00 PM',  used: 1 },
  { time: '2:00 PM',  used: 0 },
  { time: '3:00 PM',  used: 2 },
  { time: '4:00 PM',  used: 0 },
  { time: '5:00 PM',  used: 1 },
];
window.LACTARIO_SLOTS = LACTARIO_SLOTS;

const LACT_CAP       = 4;
const LACT_GREEN_BG  = '#EBF5EE';
const LACT_GREEN     = '#3D9156';
const LACT_YELLOW_BG = '#FFF6E0';
const LACT_YELLOW    = '#B8860B';

function SlotRow({ slot, idx, isReserved, isExpanded, onToggle, onConfirm, onCancel }) {
  const full       = slot.used >= LACT_CAP;
  const borderColor = isReserved
    ? KUN.accent
    : (isExpanded && !full ? KUN.accent : 'transparent');

  return (
    <div
      onClick={() => !isReserved && onToggle(idx)}
      style={{
        background: isReserved ? KUN.accentSoft : '#fff',
        borderRadius: 18,
        padding: '14px 16px',
        marginBottom: 8,
        border: `1.5px solid ${borderColor}`,
        boxShadow: (isExpanded || isReserved)
          ? '0 4px 14px rgba(201,123,90,0.10)'
          : '0 1px 3px rgba(46,42,38,0.04)',
        cursor: 'pointer',
        transition: 'all .18s',
      }}
    >
      {/* Row header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        {/* Status dot */}
        <div style={{
          width: 10, height: 10, borderRadius: '50%',
          background: isReserved ? KUN.accent : (full ? LACT_YELLOW : LACT_GREEN),
          flexShrink: 0,
          boxShadow: isReserved
            ? `0 0 0 3px ${KUN.accentSoft}`
            : (full ? `0 0 0 3px ${LACT_YELLOW_BG}` : `0 0 0 3px ${LACT_GREEN_BG}`),
        }} />

        {/* Time + badge */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>
            {slot.time}
          </span>
          {isReserved && (
            <span style={{
              fontSize: 11, fontWeight: 800, color: KUN.accentDeep,
              background: '#fff', padding: '2px 8px', borderRadius: 999,
              letterSpacing: 0.2,
            }}>
              Tu reserva
            </span>
          )}
        </div>

        {/* Capacity pill */}
        <div style={{
          padding: '4px 10px', borderRadius: 999,
          background: isReserved ? '#fff' : (full ? LACT_YELLOW_BG : LACT_GREEN_BG),
          color: isReserved ? KUN.accentDeep : (full ? LACT_YELLOW : LACT_GREEN),
          fontSize: 12, fontWeight: 800, flexShrink: 0,
        }}>
          {slot.used}/{LACT_CAP}
        </div>
      </div>

      {/* Cancel — always visible on reserved row */}
      {isReserved && (
        <div style={{
          marginTop: 10, paddingTop: 10,
          borderTop: `1px dashed ${KUN.divider}`,
          textAlign: 'center',
        }}>
          <span
            onClick={(e) => { e.stopPropagation(); onCancel && onCancel(); }}
            style={{
              fontSize: 13, fontWeight: 700, color: KUN.inkMuted,
              cursor: 'pointer', textDecoration: 'underline',
              textDecorationStyle: 'dotted',
            }}
          >
            Cancelar reserva
          </span>
        </div>
      )}

      {/* Expanded body — available slot */}
      {isExpanded && !isReserved && (
        <div style={{
          marginTop: 12, paddingTop: 12,
          borderTop: `1px dashed ${KUN.divider}`,
        }}>
          {full ? (
            <div style={{
              fontSize: 13, fontWeight: 600, color: LACT_YELLOW,
              textAlign: 'center', padding: '4px 0',
            }}>
              Este horario está completo. Elige otro bloque.
            </div>
          ) : (
            <button
              onClick={(e) => { e.stopPropagation(); onConfirm(slot.time, idx); }}
              style={{
                width: '100%', padding: '12px 16px',
                borderRadius: 14, border: 'none',
                background: KUN.accent, color: '#fff',
                fontFamily: 'inherit', fontSize: 14, fontWeight: 800,
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(201,123,90,0.30)',
                letterSpacing: -0.1,
              }}
            >
              Confirmar reserva
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function ScreenLactario({ reservation, onReserve, onCancel, onBack }) {
  const [expandedIdx, setExpandedIdx] = React.useState(null);
  const [slots, setSlots] = React.useState(
    LACTARIO_SLOTS.map(s => ({ ...s }))
  );

  const handleToggle = (idx) => {
    setExpandedIdx(prev => (prev === idx ? null : idx));
  };

  const handleConfirm = (time, idx) => {
    setExpandedIdx(null);
    setSlots(prev => prev.map((s, i) =>
      i === idx ? { ...s, used: Math.min(s.used + 1, LACT_CAP) } : s
    ));
    onReserve(time);
  };

  return (
    <>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '4px 20px 14px',
      }}>
        <div
          onClick={onBack}
          style={{
            width: 40, height: 40, borderRadius: 20, background: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 1px 2px rgba(46,42,38,0.04)', cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16"
              stroke={KUN.ink} strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ fontSize: 20, fontWeight: 800, color: KUN.ink, letterSpacing: -0.3 }}>
          Reservar lactario
        </div>
      </div>

      {/* Active reservation banner — only shown when there's a booking */}
      {reservation && (
        <div style={{
          margin: '0 20px 14px',
          background: KUN.sageSoft, borderRadius: 18,
          padding: '12px 18px',
          fontSize: 14, fontWeight: 700, color: KUN.sage,
          textAlign: 'center', lineHeight: 1.4,
        }}>
          Reservaste el bloque de las {reservation} 🧡
        </div>
      )}

      {/* Legend */}
      <div style={{ display: 'flex', gap: 16, padding: '0 24px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: LACT_GREEN }}/>
          <span style={{ fontSize: 12, fontWeight: 600, color: KUN.inkMuted }}>Con cupos</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: LACT_YELLOW }}/>
          <span style={{ fontSize: 12, fontWeight: 600, color: KUN.inkMuted }}>Completo (4/4)</span>
        </div>
      </div>

      {/* Slot list */}
      <div style={{ padding: '0 20px 32px' }}>
        {slots.map((slot, i) => (
          <SlotRow
            key={i}
            slot={slot}
            idx={i}
            isReserved={reservation === slot.time}
            isExpanded={expandedIdx === i}
            onToggle={handleToggle}
            onConfirm={handleConfirm}
            onCancel={onCancel}
          />
        ))}
      </div>
    </>
  );
}

window.ScreenLactario = ScreenLactario;
