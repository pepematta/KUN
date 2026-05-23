// Lactario booking screen.
// Exposes: ScreenLactario({ reservation, onReserve, onCancel, onBack })
// Also exposes: window.LACTARIO_SLOTS (used by LactarioCard in screen-home.jsx)

const LACTARIO_MAX_DAILY = 4;
const LACTARIO_SLOT_MINUTES = 40;
const LACTARIO_SLOTS = (() => {
  const slots = [];
  const start = 8 * 60 + 30;
  const end = 18 * 60 + 30;
  const seededUse = [1, 3, 0, 2, 3, 1, 0, 2, 3, 0, 1, 3, 2, 0, 1];
  const fmt = (h, m) => `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

  for (let minutes = start, i = 0; minutes + LACTARIO_SLOT_MINUTES <= end; minutes += LACTARIO_SLOT_MINUTES, i += 1) {
    const h1 = Math.floor(minutes / 60);
    const m1 = minutes % 60;
    const h2 = Math.floor((minutes + LACTARIO_SLOT_MINUTES) / 60);
    const m2 = (minutes + LACTARIO_SLOT_MINUTES) % 60;
    slots.push({ time: `${fmt(h1, m1)} - ${fmt(h2, m2)}`, used: seededUse[i] || 0 });
  }
  return slots;
})();
window.LACTARIO_SLOTS = LACTARIO_SLOTS;
window.LACTARIO_MAX_DAILY = LACTARIO_MAX_DAILY;

const LACT_CAP       = 3;
const LACT_GREEN_BG  = '#EBF5EE';
const LACT_GREEN     = '#3D9156';
const LACT_YELLOW_BG = '#FFF6E0';
const LACT_YELLOW    = '#B8860B';

function SlotRow({ slot, idx, isReserved, isExpanded, onToggle, onConfirm, onCancel, dailyLimitReached }) {
  const full = slot.used >= LACT_CAP;
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
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 10, height: 10, borderRadius: '50%',
          background: isReserved ? KUN.accent : (full ? LACT_YELLOW : LACT_GREEN),
          flexShrink: 0,
          boxShadow: isReserved
            ? `0 0 0 3px ${KUN.accentSoft}`
            : (full ? `0 0 0 3px ${LACT_YELLOW_BG}` : `0 0 0 3px ${LACT_GREEN_BG}`),
        }} />

        <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
          <span style={{ fontSize: 15, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>
            {slot.time}
          </span>
          {isReserved && (
            <span style={{
              fontSize: 11, fontWeight: 800, color: KUN.accentDeep,
              background: '#fff', padding: '2px 8px', borderRadius: 999,
              letterSpacing: 0.2, whiteSpace: 'nowrap',
            }}>
              Tu reserva
            </span>
          )}
        </div>

        <div style={{
          padding: '4px 10px', borderRadius: 999,
          background: isReserved ? '#fff' : (full ? LACT_YELLOW_BG : LACT_GREEN_BG),
          color: isReserved ? KUN.accentDeep : (full ? LACT_YELLOW : LACT_GREEN),
          fontSize: 12, fontWeight: 800, flexShrink: 0,
        }}>
          {slot.used}/{LACT_CAP}
        </div>
      </div>

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
              Este horario esta completo. Elige otro bloque.
            </div>
          ) : dailyLimitReached ? (
            <div style={{
              fontSize: 13, fontWeight: 600, color: KUN.accentDeep,
              textAlign: 'center', padding: '4px 0',
            }}>
              Ya tomaste el maximo de 4 turnos diarios.
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

function ScreenLactario({ reservation, onReserve, onCancel, onBack, reminderMinutes = 60 }) {
  const [expandedIdx, setExpandedIdx] = React.useState(null);
  const [slots, setSlots] = React.useState(LACTARIO_SLOTS.map(s => ({ ...s })));
  const reservations = Array.isArray(reservation) ? reservation : (reservation ? [reservation] : []);
  const dailyLimitReached = reservations.length >= LACTARIO_MAX_DAILY;

  const handleToggle = (idx) => {
    setExpandedIdx(prev => (prev === idx ? null : idx));
  };

  const handleConfirm = (time, idx) => {
    if (dailyLimitReached || reservations.includes(time)) return;
    setExpandedIdx(null);
    setSlots(prev => prev.map((s, i) =>
      i === idx ? { ...s, used: Math.min(s.used + 1, LACT_CAP) } : s
    ));
    onReserve(time);
  };

  const handleCancel = (time, idx) => {
    setSlots(prev => prev.map((s, i) =>
      i === idx ? { ...s, used: Math.max(s.used - 1, 0) } : s
    ));
    onCancel(time);
  };

  return (
    <>
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

      {reservations.length > 0 && (
        <div style={{
          margin: '0 20px 14px',
          background: KUN.sageSoft, borderRadius: 18,
          padding: '12px 18px',
          fontSize: 14, fontWeight: 700, color: KUN.sage,
          textAlign: 'center', lineHeight: 1.4,
        }}>
          {reservations.length === 1
            ? `Reservaste el bloque ${reservations[0]}`
            : `Tienes ${reservations.length} turnos reservados hoy`}<br/>
          <span style={{ fontWeight: 600 }}>
            Recordatorio configurado {reminderMinutes} min antes.
          </span>
        </div>
      )}

      <div style={{ display: 'flex', gap: 16, padding: '0 24px 12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: LACT_GREEN }}/>
          <span style={{ fontSize: 12, fontWeight: 600, color: KUN.inkMuted }}>Con cupos</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: LACT_YELLOW }}/>
          <span style={{ fontSize: 12, fontWeight: 600, color: KUN.inkMuted }}>Completo (4/4)</span>
        </div>
        <div style={{ marginLeft: 'auto', fontSize: 12, fontWeight: 700, color: KUN.accentDeep }}>
          {reservations.length}/{LACTARIO_MAX_DAILY} turnos diarios
        </div>
      </div>

      <div style={{ padding: '0 20px 32px' }}>
        {slots.map((slot, i) => (
          <SlotRow
            key={i}
            slot={slot}
            idx={i}
            isReserved={reservations.includes(slot.time)}
            isExpanded={expandedIdx === i}
            onToggle={handleToggle}
            onConfirm={handleConfirm}
            onCancel={() => handleCancel(slot.time, i)}
            dailyLimitReached={dailyLimitReached}
          />
        ))}
        <div style={{
          marginTop: 10,
          background: '#fff',
          border: `1px solid ${KUN.divider}`,
          borderRadius: 18,
          padding: '14px 16px',
          fontSize: 12.5,
          lineHeight: 1.55,
          color: KUN.inkMuted,
          fontWeight: 500,
          textAlign: 'center',
        }}>
          El lactario se cierra por aseo terminal de 19:00 a 20:00 hrs.<br/>
          Por favor respetar horarios para no importunar a nadie. Muchas gracias.
        </div>
      </div>
    </>
  );
}

window.ScreenLactario = ScreenLactario;
