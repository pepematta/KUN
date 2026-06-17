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

function ScreenLactario({ reservation, onReserve, onCancel, onBack, reminderMinutes = 60, title = 'Reservar lactario' }) {
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
        {onBack && (
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
        )}
        <div style={{ fontSize: 20, fontWeight: 800, color: KUN.ink, letterSpacing: -0.3 }}>
          {title}
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

const UCIN_INFO_SECTIONS = [
  {
    title: 'Servicio de Neonatologia',
    tone: KUN.clear,
    items: [
      'Tu hijo/a esta internado en Neonatologia del Hospital UC-Christus, un centro especializado en recien nacidos prematuros y enfermos.',
      'Los padres son esperados todos los dias entre las 8:00 y las 20:30 hrs. En emergencias o procedimientos especiales, el equipo puede pedirles esperar antes de ingresar.',
    ],
  },
  {
    title: 'Equipo medico y apoyo',
    tone: KUN.apple,
    items: [
      'Al ingreso se asigna un medico semanal, disponible en horario habil. Fuera de ese horario queda a cargo el medico de turno.',
      'El equipo incluye enfermeras, matronas, TENS, kinesiologos y otros especialistas.',
      'Pueden pedir informacion sobre estado y tratamiento diariamente, idealmente durante la manana.',
      'Existe apoyo continuo de psicologas y se puede solicitar apoyo espiritual segun sus creencias.',
    ],
  },
  {
    title: 'Visitas y seguridad',
    tone: KUN.rosehip,
    items: [
      'Las visitas son idealmente para ambos padres. Tambien puede asistir un tercero significativo junto a uno de los padres.',
      'Al ingresar, retiren joyas de manos y antebrazos, guarden sus pertenencias y laven sus manos en el lavamanos de entrada.',
      'Usen agua y jabon o alcohol gel antes de tocar a su hijo/a y despues de tocar objetos externos.',
      'No visiten la unidad si tienen diarrea, resfrio, fiebre, infecciones de piel u otra enfermedad contagiosa.',
    ],
  },
  {
    title: 'Participacion en cuidados',
    tone: KUN.viola,
    items: [
      'Si la condicion del bebe lo permite, la madre podra amamantarlo en horarios coordinados por enfermera o matrona.',
      'Si no es posible amamantar, el equipo ensenara extraccion de leche y entregara indicaciones para el procedimiento.',
      'Durante las visitas pueden hablarle, acariciarlo y, si el equipo lo autoriza, tomarlo en brazos o participar en muda y control de temperatura.',
      'Pueden traer gorros o botines. No se recomiendan munecos ni juguetes de peluche, lana o genero porque no se pueden limpiar bien.',
    ],
  },
  {
    title: 'Comunicacion',
    tone: KUN.sun,
    items: [
      'Para preguntar por el estado del bebe, solamente los padres pueden comunicarse con la enfermera o medico a cargo.',
      'UCI Neonatal: 22-3543224',
      'Cuidados Intermedio A: 22-3546436',
      'Cuidados Intermedios B: 22-3543708',
      'No se entregara informacion a otros familiares o amigos; ellos deben comunicarse con los padres.',
    ],
  },
];

function UcinInfoCard({ section }) {
  return (
    <div style={{
      background: '#fff',
      border: `1px solid ${KUN.hair}`,
      borderRadius: 22,
      padding: '15px 16px',
      marginBottom: 10,
      boxShadow: '0 1px 3px rgba(46,42,38,0.04)',
    }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <div style={{
          width: 34, height: 34, borderRadius: 14,
          background: section.tone,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {KIcon.hospital(KUN.ink)}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontFamily: KUN.fontT, fontSize: 16, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2 }}>
            {section.title}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 9 }}>
            {section.items.map((item) => (
              <div key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: KUN.brick, marginTop: 8, flexShrink: 0 }} />
                <div style={{ fontFamily: KUN.fontB, fontSize: 12.5, lineHeight: 1.55, color: KUN.inkSoft, fontWeight: 500 }}>
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UcinLactarioBox({ reservation, onOpen, reminderMinutes = 60 }) {
  const reservations = Array.isArray(reservation) ? reservation : (reservation ? [reservation] : []);
  const nextSlot = LACTARIO_SLOTS.find(s => s.used < LACT_CAP);
  const hasReservation = reservations.length > 0;
  const summary = hasReservation
    ? (reservations.length === 1 ? `Turno reservado: ${reservations[0]}` : `${reservations.length} turnos reservados hoy`)
    : `Proximo turno disponible: ${nextSlot ? nextSlot.time : 'sin cupos'}`;

  return (
    <div style={{ padding: '0 20px 16px' }}>
      <button
        onClick={onOpen}
        style={{
          width: '100%',
          textAlign: 'left',
          border: `1px solid ${KUN.hair}`,
          background: '#fff',
          borderRadius: 24,
          padding: '16px 16px',
          cursor: 'pointer',
          boxShadow: '0 10px 24px rgba(42,35,32,0.05)',
          display: 'flex',
          gap: 13,
          alignItems: 'center',
        }}
      >
        <img
          src="assets/mamadera-3.svg?v=2"
          alt="Mamadera"
          style={{ width: 42, height: 50, objectFit: 'contain', flexShrink: 0, display: 'block' }}
        />
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: KUN.fontT, fontSize: 18, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2 }}>
            Reservar lactario
          </div>
          <div style={{ fontFamily: KUN.fontB, fontSize: 12.5, lineHeight: 1.45, color: KUN.inkSoft, marginTop: 4 }}>
            {summary}
          </div>
          <div style={{ fontFamily: KUN.fontB, fontSize: 11.5, color: KUN.inkMuted, marginTop: 6 }}>
            Recordatorio {reminderMinutes} min antes
          </div>
        </div>
        <div style={{
          width: 34,
          height: 34,
          borderRadius: 17,
          background: KUN.brick,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M8 5L13 10L8 15" stroke="#fff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
    </div>
  );
}

function ScreenUCIN({ reservation, onReserve, onCancel, reminderMinutes = 60 }) {
  const [view, setView] = React.useState('main');

  if (view === 'lactario') {
    return (
      <div style={{ minHeight: '100%', background: KUN.bg, paddingBottom: 24 }}>
        <ScreenLactario
          reservation={reservation}
          onReserve={onReserve}
          onCancel={onCancel}
          reminderMinutes={reminderMinutes}
          title="Reservas al lactario"
          onBack={() => setView('main')}
        />
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100%', background: KUN.bg, paddingBottom: 24 }}>
      <div style={{ padding: '8px 20px 16px' }}>
        <div style={{
          background: '#fff',
          border: `1px solid ${KUN.hair}`,
          borderRadius: 24,
          padding: '18px 18px 16px',
          boxShadow: '0 10px 24px rgba(42,35,32,0.05)',
        }}>
          <div style={{ fontFamily: KUN.fontB, fontSize: 11, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 6 }}>
            Red UC Christus
          </div>
          <div style={{ fontFamily: KUN.fontT, fontSize: 25, fontWeight: 800, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.1 }}>
            UCIN
          </div>
          <div style={{ fontFamily: KUN.fontB, fontSize: 13, color: KUN.inkSoft, lineHeight: 1.55, marginTop: 8 }}>
            Reservas al lactario e informacion importante para acompanarlos durante la hospitalizacion.
          </div>
        </div>
      </div>

      <UcinLactarioBox
        reservation={reservation}
        reminderMinutes={reminderMinutes}
        onOpen={() => setView('lactario')}
      />

      <div style={{ padding: '2px 20px 0' }}>
        <div style={{
          background: KUN.sageSoft,
          color: KUN.ink,
          border: `1px solid rgba(170,213,158,0.55)`,
          borderRadius: 24,
          padding: '17px 18px',
          marginBottom: 14,
          boxShadow: '0 10px 24px rgba(92,132,82,0.10)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <div style={{
              width: 36,
              height: 36,
              borderRadius: 16,
              background: KUN.apple,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <img src="assets/mamadera-4.svg?v=2" alt="" style={{ width: 20, height: 26, objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ fontFamily: KUN.fontB, fontSize: 11, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 0.8, textTransform: 'uppercase', marginBottom: 2 }}>
                Lactancia y alimentacion
              </div>
              <div style={{ fontFamily: KUN.fontT, fontSize: 18, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2 }}>
                Horario SEDILE
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline', background: '#fff', borderRadius: 16, padding: '10px 12px' }}>
              <span style={{ fontFamily: KUN.fontT, fontSize: 18, fontWeight: 800 }}>08:15 - 13:30</span>
              <span style={{ fontFamily: KUN.fontB, fontSize: 12, fontWeight: 800, color: '#3D9156' }}>Abierto</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline', background: KUN.sunSoft, borderRadius: 16, padding: '10px 12px' }}>
              <span style={{ fontFamily: KUN.fontT, fontSize: 18, fontWeight: 800 }}>13:30 - 17:30</span>
              <span style={{ fontFamily: KUN.fontB, fontSize: 12, fontWeight: 800, color: '#9C7410' }}>Cerrado</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline', background: '#fff', borderRadius: 16, padding: '10px 12px' }}>
              <span style={{ fontFamily: KUN.fontT, fontSize: 18, fontWeight: 800 }}>17:30 - 19:45</span>
              <span style={{ fontFamily: KUN.fontB, fontSize: 12, fontWeight: 800, color: '#3D9156' }}>Abierto</span>
            </div>
          </div>
          <div style={{ fontFamily: KUN.fontB, fontSize: 12, lineHeight: 1.45, color: KUN.inkSoft, marginTop: 12 }}>
            La leche extraida se entrega en SEDILE general. Telefono SEDILE: 223543299.
          </div>
        </div>

        <div style={{ fontFamily: KUN.fontB, fontSize: 11, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 0.8, textTransform: 'uppercase', margin: '4px 2px 10px' }}>
          Informacion importante
        </div>
        {UCIN_INFO_SECTIONS.map(section => <UcinInfoCard key={section.title} section={section} />)}
        <div style={{
          background: KUN.cardSoft,
          borderRadius: 20,
          padding: '14px 16px',
          fontFamily: KUN.fontB,
          fontSize: 12.5,
          color: KUN.inkSoft,
          lineHeight: 1.55,
        }}>
          Unidad de Atencion al Paciente y Familia: pueden hacer sugerencias, felicitaciones u observaciones en el primer piso del hall central o en el buzon de sugerencias y reclamos ubicado en el acceso del servicio.
        </div>
      </div>
    </div>
  );
}

window.ScreenLactario = ScreenLactario;
window.ScreenUCIN = ScreenUCIN;
