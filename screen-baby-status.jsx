// Baby Status System — KUN prototype
// Self-contained; no imports. All components exported via window.*

const BST_FT = 'Quicksand, sans-serif';
const BST_FB = 'Poppins, sans-serif';

// ─── Category definitions ───────────────────────────────────────────────────
const BABY_STATUS_CATS = [
  {
    id: 'lugar',
    title: '¿Dónde está tu bebé?',
    type: 'radio',
    options: [
      { label: 'Recién ingresado', info: 'Primeros momentos en la unidad neonatal. Sirve para orientarse, conocer al equipo y entender las normas básicas.' },
      { label: 'UCI',              info: 'Unidad de Cuidados Intensivos neonatales. Máximo monitoreo y soporte para bebés con necesidades críticas.' },
      { label: 'Intermedio A',     info: 'Unidad de cuidados intermedios. Monitoreo constante pero etapa más estable.' },
      { label: 'Intermedio B',     info: 'Segunda unidad intermedia, para bebés progresando bien hacia el alta.' },
      { label: 'Dado de alta',     info: 'Tu bebé recibió el alta hospitalaria y continúa su desarrollo en casa.' },
    ],
  },
  {
    id: 'temperatura',
    title: '¿Cómo mantiene su temperatura?',
    type: 'radio',
    options: [
      { label: 'Incubadora',             info: 'Caja de plástico transparente que mantiene temperatura y humedad controladas.' },
      { label: 'Cuna de calor radiante', info: 'Cuna abierta con fuente de calor infrarrojo que mantiene la temperatura del bebé.' },
      { label: 'Cuna abierta',           info: 'Tu bebé puede mantener su propia temperatura sin apoyo especial.' },
    ],
  },
  {
    id: 'respiracion',
    title: '¿Cómo respira tu bebé?',
    type: 'radio',
    options: [
      { label: 'Respiración natural',  info: 'Tu bebé respira completamente por sí solo, sin dispositivos de apoyo.' },
      { label: 'Cánula nasal',         info: 'Tubito suave por las fosas nasales que entrega un poco de oxígeno extra. Apoyo más suave.' },
      { label: 'CPAP',                 info: 'Dispositivo que ayuda a tu bebé a mantener sus pulmones abiertos mientras respira por sí solo.' },
      { label: 'Ventilación mecánica', info: 'Máquina que ayuda o realiza completamente la respiración del bebé a través de un tubo.' },
    ],
  },
  {
    id: 'alimentacion',
    title: '¿Cómo se alimenta tu bebé?',
    type: 'checkbox',
    options: [
      { label: 'Pecho directo',        info: 'Tu bebé se alimenta directamente del pecho, succionando por sí solo.' },
      { label: 'Mamadera',             info: 'Tu bebé recibe leche materna o fórmula a través de una mamadera.' },
      { label: 'Sonda nasogástrica',   info: 'Tubo que entra por la nariz y llega al estómago, llevando la leche directamente.' },
      { label: 'Sonda orogástrica',    info: 'Similar a la nasogástrica, pero el tubo entra por la boca en vez de la nariz.' },
      { label: 'Nutrición parenteral', info: 'Nutrición entregada directamente a la sangre, sin pasar por el tubo digestivo.' },
    ],
  },
  {
    id: 'accesos',
    title: '¿Tiene algún acceso vascular?',
    type: 'checkbox',
    options: [
      { label: 'Vía periférica',         info: 'Catéter fino en una vena pequeña (brazo o pierna) para medicamentos o suero.' },
      { label: 'PICC',                   info: 'Catéter largo desde una vena del brazo hasta cerca del corazón. Para tratamientos de mayor duración.' },
      { label: 'Catéter umbilical',      info: 'Catéter en la vena o arteria del cordón umbilical. Solo en los primeros días de vida.' },
      { label: 'Catéter venoso central', info: 'Catéter en una vena grande del cuello o pecho para tratamientos importantes.' },
    ],
  },
  {
    id: 'diagnosticos',
    title: '¿Cuáles son sus diagnósticos?',
    type: 'checkbox',
    options: [
      { label: 'Prematuridad',               info: 'Tu bebé nació antes de las 37 semanas de gestación.' },
      { label: 'Dificultad respiratoria',    info: 'Los pulmones de tu bebé necesitan apoyo adicional para funcionar correctamente.' },
      { label: 'Ictericia / fototerapia',    info: 'Niveles altos de bilirrubina; recibe luz especial (fototerapia) para tratarlo.' },
      { label: 'Sepsis neonatal',            info: 'Infección que afecta al bebé recién nacido. Requiere tratamiento con antibióticos.' },
      { label: 'Cardiopatía congénita',      info: 'El corazón del bebé tiene una malformación que puede requerir seguimiento o cirugía.' },
      { label: 'Enterocolitis necrotizante', info: 'Inflamación severa del intestino, más común en bebés prematuros.' },
      { label: 'Hipoglicemia',               info: 'Nivel de azúcar en sangre bajo, requiere manejo especial.' },
    ],
  },
];
window.BABY_STATUS_CATS = BABY_STATUS_CATS;

// ─── generateBabyStatusSegments ─────────────────────────────────────────────
// Lowercases the first letter of a label, except for acronyms and proper compound names.
function lcLabel(str) {
  const keep = ['UCI', 'CPAP', 'PICC', 'Intermedio A', 'Intermedio B'];
  if (keep.includes(str)) return str;
  return str.charAt(0).toLowerCase() + str.slice(1);
}

function generateBabyStatusSegments(status, babyName) {
  const name = babyName || 'Sofía';
  const segs = [];
  const push  = (text) => segs.push({ text });
  const chip  = (label, color) => segs.push({ chip: label, chipColor: color });

  // ── Lugar + Temperatura (combined sentence) ─────────────────────────────────
  if (status.lugar === 'Alta' || status.lugar === 'Dado de alta') {
    push(`${name} ya está en casa. ¡Un gran paso para toda la familia! `);
  } else if (status.lugar) {
    const lugar = status.lugar;
    const temp  = status.temperatura;
    const intro = (lugar === 'UCI' || lugar === 'Intermedio B') ? `${name} está en ` : `${name} se encuentra en `;
    push(intro); chip(lugar, 'apple');

    if (lugar === 'Recién ingresado') {
      if (temp === 'Incubadora')             { push(', protegida en su '); chip('incubadora', 'clear'); push(' mientras el equipo la evalúa. '); }
      else if (temp === 'Cuna de calor radiante') { push(', bajo una '); chip('cuna de calor radiante', 'clear'); push(' durante sus primeros cuidados. '); }
      else if (temp === 'Cuna abierta')      { push(', descansando en su '); chip('cuna abierta', 'clear'); push('. '); }
      else push('. ');
    } else if (lugar === 'UCI') {
      if (temp === 'Incubadora')             { push(', protegida en su '); chip('incubadora', 'clear'); push('. '); }
      else if (temp === 'Cuna de calor radiante') { push(', bajo una '); chip('cuna de calor radiante', 'clear'); push('. '); }
      else push('. ');
    } else if (lugar === 'Intermedio A') {
      if (temp === 'Incubadora')             { push(', descansando en su '); chip('incubadora', 'clear'); push('. '); }
      else if (temp === 'Cuna de calor radiante') { push(', bajo una '); chip('cuna de calor radiante', 'clear'); push('. '); }
      else if (temp === 'Cuna abierta')      { push(', descansando en su '); chip('cuna abierta', 'clear'); push('. '); }
      else push('. ');
    } else if (lugar === 'Intermedio B') {
      if (temp === 'Incubadora')             { push(', en su '); chip('incubadora', 'clear'); push('. '); }
      else if (temp === 'Cuna de calor radiante') { push(', bajo una '); chip('cuna de calor radiante', 'clear'); push('. '); }
      else if (temp === 'Cuna abierta')      { push(', ya en su '); chip('cuna abierta', 'clear'); push('. '); }
      else push('. ');
    } else {
      push('. ');
    }
  }

  // ── Respiración ─────────────────────────────────────────────────────────────
  if (status.respiracion) {
    const r = status.respiracion;
    if (r === 'Respiración natural') {
      push('Respira de forma autónoma, sin necesidad de apoyo adicional. ');
    } else if (r === 'Cánula nasal') {
      push('Respira con el apoyo de una '); chip('cánula nasal', 'clear'); push(', que le entrega un poco de oxígeno extra. ');
    } else if (r === 'CPAP') {
      push('Usa '); chip('CPAP', 'clear'); push(', un dispositivo que la ayuda a mantener sus pulmones abiertos mientras respira por sí sola. ');
    } else if (r === 'Ventilación mecánica') {
      push('Por ahora respira con ayuda de un '); chip('ventilador mecánico', 'clear'); push(', que hace el trabajo mientras sus pulmones maduran. ');
    }
  }

  // ── Alimentación ─────────────────────────────────────────────────────────────
  if (status.alimentacion && status.alimentacion.length > 0) {
    const al       = status.alimentacion;
    const hasPecho = al.includes('Pecho directo');
    const hasMam   = al.includes('Mamadera');
    const hasNaso  = al.includes('Sonda nasogástrica');
    const hasOro   = al.includes('Sonda orogástrica');
    const hasParent= al.includes('Nutrición parenteral');
    const hasSonda = hasNaso || hasOro;
    const sondaLbl = hasNaso ? 'sonda nasogástrica' : 'sonda orogástrica';

    if (al.length === 1) {
      if (hasPecho)   { push('Se alimenta directamente del '); chip('pecho directo', 'clear'); push('. '); }
      else if (hasMam){ push('Recibe su leche en '); chip('mamadera', 'clear'); push('. '); }
      else if (hasNaso){ push('Recibe su alimentación por '); chip('sonda nasogástrica', 'clear'); push(', un tubito que llega hasta su estómago por la nariz. '); }
      else if (hasOro) { push('Recibe su alimentación por '); chip('sonda orogástrica', 'clear'); push(', un tubito que llega hasta su estómago por la boca. '); }
      else if (hasParent){ push('Recibe sus nutrientes directamente por la '); chip('nutrición parenteral', 'clear'); push(', mientras su sistema digestivo madura. '); }
    } else if (al.length === 2) {
      if (hasPecho && hasSonda) {
        push('Se alimenta combinando el '); chip('pecho directo', 'clear'); push(' con '); chip(sondaLbl, 'clear'); push(', para asegurarse de recibir todo lo que necesita. ');
      } else if (hasMam && hasSonda) {
        push('Recibe su leche en '); chip('mamadera', 'clear'); push(' y por '); chip(sondaLbl, 'clear'); push(', según lo que necesita en cada momento. ');
      } else if (hasSonda && hasParent) {
        push('Recibe su alimentación por '); chip(sondaLbl, 'clear'); push(' y también '); chip('nutrición parenteral', 'clear'); push(' por la vía. ');
      } else {
        push('Se alimenta de varias formas según sus necesidades del momento: ');
        al.forEach((item, i) => { if (i > 0) push(', '); chip(lcLabel(item), 'clear'); });
        push('. ');
      }
    } else {
      push('Se alimenta de varias formas según sus necesidades del momento: ');
      al.forEach((item, i) => { if (i > 0) push(', '); chip(lcLabel(item), 'clear'); });
      push('. ');
    }
  }

  // ── Accesos vasculares ───────────────────────────────────────────────────────
  if (status.accesos && status.accesos.length > 0) {
    const ac = status.accesos;
    if (ac.length === 1) {
      const a = ac[0];
      if (a === 'Vía periférica')        { push('Tiene una '); chip('vía periférica', 'viola'); push(' para recibir sus medicamentos y fluidos. '); }
      else if (a === 'PICC')             { push('Tiene un '); chip('PICC', 'viola'); push(', un catéter fino que le permite recibir medicamentos y nutrición de forma segura. '); }
      else if (a === 'Catéter umbilical'){ push('Tiene un '); chip('catéter umbilical', 'viola'); push(', colocado en el cordón, para sus tratamientos. '); }
      else if (a === 'Catéter venoso central'){ push('Tiene un '); chip('catéter venoso central', 'viola'); push(' para sus medicamentos y nutrición. '); }
    } else {
      push('Tiene ');
      ac.forEach((item, i) => { if (i > 0) push(', '); chip(lcLabel(item), 'viola'); });
      push(' para recibir sus medicamentos y fluidos. ');
    }
  }

  // ── Diagnósticos ─────────────────────────────────────────────────────────────
  if (status.diagnosticos && status.diagnosticos.length > 0) {
    const dx = status.diagnosticos;
    if (dx.length === 1) {
      push('Su diagnóstico es '); chip(lcLabel(dx[0]), 'viola'); push('. ');
    } else {
      push('Sus diagnósticos incluyen ');
      dx.forEach((item, i) => { if (i > 0) push(', '); chip(lcLabel(item), 'viola'); });
      push('. ');
    }
  }

  return segs;
}
window.generateBabyStatusSegments = generateBabyStatusSegments;

function normalizeStatusLabel(str) {
  return String(str || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

function getBabyStatusOptionInfo(label) {
  const normalized = normalizeStatusLabel(label);
  for (const cat of BABY_STATUS_CATS) {
    const match = cat.options.find(opt => normalizeStatusLabel(opt.label) === normalized);
    if (match) return { title: match.label, text: match.info };
  }

  const aliases = {
    'alta': 'Dado de alta',
    'ventilador mecanico': 'Ventilación mecánica',
    'pecho directo': 'Pecho directo',
    'sonda nasogastrica': 'Sonda nasogástrica',
    'sonda orogastrica': 'Sonda orogástrica',
    'nutricion parenteral': 'Nutrición parenteral',
    'via periferica': 'Vía periférica',
    'cateter umbilical': 'Catéter umbilical',
    'cateter venoso central': 'Catéter venoso central',
    'incubadora': 'Incubadora',
    'cuna de calor radiante': 'Cuna de calor radiante',
    'cuna abierta': 'Cuna abierta',
    'canula nasal': 'Cánula nasal',
  };
  const alias = aliases[normalized];
  if (!alias) return null;

  for (const cat of BABY_STATUS_CATS) {
    const match = cat.options.find(opt => opt.label === alias);
    if (match) return { title: match.label, text: match.info };
  }
  return null;
}
window.getBabyStatusOptionInfo = getBabyStatusOptionInfo;

// ─── NarrativeChip ───────────────────────────────────────────────────────────
function NarrativeChip({ label, colorKey, onClick }) {
  const colorMap = {
    apple: KUN.apple,
    clear: KUN.clear,
    viola: KUN.viola,
  };
  const bg = colorMap[colorKey] || KUN.clear;

  return (
    <span onClick={onClick} style={{
      display: 'inline-flex',
      alignItems: 'center',
      background: bg,
      borderRadius: 999,
      padding: '2px 10px',
      fontFamily: BST_FT,
      fontSize: 12.5,
      fontWeight: 700,
      lineHeight: 1.6,
      verticalAlign: 'middle',
      margin: '0 2px',
      color: KUN.ink,
      cursor: onClick ? 'pointer' : 'default',
    }}>
      {label}
    </span>
  );
}

// ─── BabyStatusNarrative ─────────────────────────────────────────────────────
function BabyStatusNarrative({ status, babyName, onEdit }) {
  const segments = generateBabyStatusSegments(status, babyName);
  const [activeInfo, setActiveInfo] = React.useState(null);

  return (
    <div style={{
      background: '#fff',
      border: `1px solid ${KUN.hair}`,
      borderRadius: 24,
      padding: '18px 18px',
      position: 'relative',
    }}>
      <p style={{
        margin: 0,
        fontFamily: BST_FB,
        fontWeight: 400,
        fontSize: 13.5,
        lineHeight: 1.85,
        color: KUN.ink,
      }}>
        {segments.map((seg, i) =>
          seg.chip
            ? <NarrativeChip
                key={i}
                label={seg.chip}
                colorKey={seg.chipColor}
                onClick={() => {
                  const info = getBabyStatusOptionInfo(seg.chip);
                  if (info) setActiveInfo(info);
                }}
              />
            : <React.Fragment key={i}>{seg.text}</React.Fragment>
        )}
      </p>
      {activeInfo && (
        <div onClick={() => setActiveInfo(null)} style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(42,35,32,0.18)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 14,
          boxSizing: 'border-box',
          borderRadius: 24,
          zIndex: 20,
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            width: '100%',
            background: 'rgba(255,255,255,0.98)',
            borderRadius: 18,
            padding: '15px 16px',
            boxSizing: 'border-box',
            border: `1px solid ${KUN.hair}`,
            boxShadow: '0 10px 28px rgba(42,35,32,0.18)',
          }}>
            <div style={{
              fontFamily: BST_FT,
              fontSize: 16,
              fontWeight: 700,
              color: KUN.ink,
              letterSpacing: -0.2,
              marginBottom: 6,
            }}>{activeInfo.title}</div>
            <div style={{
              fontFamily: BST_FB,
              fontSize: 12.5,
              fontWeight: 400,
              color: KUN.inkSoft,
              lineHeight: 1.5,
            }}>{activeInfo.text}</div>
            <div onClick={() => setActiveInfo(null)} style={{
              marginTop: 10,
              fontFamily: BST_FT,
              fontSize: 12.5,
              fontWeight: 700,
              color: KUN.brick,
              cursor: 'pointer',
            }}>Entendido</div>
          </div>
        </div>
      )}
    </div>
  );
}
window.BabyStatusNarrative = BabyStatusNarrative;

// ─── InfoTooltip ─────────────────────────────────────────────────────────────
function InfoTooltip({ text, open, onToggle }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={(e) => { e.stopPropagation(); onToggle(); }}
        style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: open ? 'none' : `1px solid ${KUN.hair}`,
          background: open ? KUN.brick : KUN.cream,
          color: open ? '#fff' : KUN.inkMuted,
          fontFamily: BST_FB,
          fontSize: 11,
          fontWeight: 700,
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          lineHeight: 1,
          padding: 0,
        }}
      >
        i
      </button>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: 30,
            right: 0,
            width: 220,
            background: '#fff',
            border: `1px solid ${KUN.hair}`,
            borderRadius: 14,
            padding: '10px 12px',
            boxShadow: '0 8px 24px rgba(42,35,32,0.13)',
            fontFamily: BST_FB,
            fontSize: 12,
            color: KUN.ink,
            lineHeight: 1.55,
            zIndex: 10,
          }}
        >
          {text}
        </div>
      )}
    </div>
  );
}

// ─── OptionRow ───────────────────────────────────────────────────────────────
function OptionRow({ label, info, selected, onToggle, isRadio }) {
  const [tooltipOpen, setTooltipOpen] = React.useState(false);

  return (
    <div
      onClick={onToggle}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 14px',
        borderRadius: 16,
        border: selected ? `1.5px solid ${KUN.brick}` : `1.5px solid ${KUN.hair}`,
        background: selected ? KUN.rosehip : '#fff',
        marginBottom: 8,
        cursor: 'pointer',
        transition: 'all .15s',
      }}
    >
      {/* Left indicator */}
      <div style={{
        width: 22,
        height: 22,
        borderRadius: isRadio ? '50%' : 6,
        background: selected ? KUN.brick : '#fff',
        border: selected ? 'none' : `1.5px solid ${KUN.hair}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        {selected && isRadio && (
          <div style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#fff',
          }} />
        )}
        {selected && !isRadio && (
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M2.5 6.5L5.5 9.5L10.5 3.5"
              stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>

      {/* Label */}
      <span style={{
        fontFamily: BST_FT,
        fontSize: 14,
        fontWeight: selected ? 700 : 600,
        color: KUN.ink,
        flex: 1,
      }}>
        {label}
      </span>

      {/* Info tooltip */}
      {info && (
        <div onClick={(e) => e.stopPropagation()}>
          <InfoTooltip
            text={info}
            open={tooltipOpen}
            onToggle={() => setTooltipOpen(v => !v)}
          />
        </div>
      )}
    </div>
  );
}

// ─── CategoryBlock ────────────────────────────────────────────────────────────
function CategoryBlock({ cat, values, onChange }) {
  const isRadio = cat.type === 'radio';

  const handleToggle = (label) => {
    if (isRadio) {
      onChange(cat.id, values === label ? null : label);
    } else {
      const arr = Array.isArray(values) ? values : [];
      if (arr.includes(label)) {
        onChange(cat.id, arr.filter(v => v !== label));
      } else {
        onChange(cat.id, [...arr, label]);
      }
    }
  };

  return (
    <div>
      <div style={{
        fontFamily: BST_FT,
        fontSize: 15.5,
        fontWeight: 700,
        color: KUN.ink,
        letterSpacing: -0.2,
        marginBottom: 10,
      }}>
        {cat.title}
      </div>
      {cat.options.map((opt) => {
        const selected = isRadio ? values === opt.label : (Array.isArray(values) && values.includes(opt.label));
        return (
          <OptionRow
            key={opt.label}
            label={opt.label}
            info={opt.info}
            selected={selected}
            onToggle={() => handleToggle(opt.label)}
            isRadio={isRadio}
          />
        );
      })}
    </div>
  );
}

// ─── ScreenBabyStatusOnboarding ──────────────────────────────────────────────
function ScreenBabyStatusOnboarding({ babyName, onSave, onSkip }) {
  const [status, setStatus] = React.useState({
    lugar: null,
    temperatura: null,
    respiracion: null,
    alimentacion: [],
    accesos: [],
    diagnosticos: [],
  });

  const handleChange = (catId, value) => {
    setStatus(prev => ({ ...prev, [catId]: value }));
  };

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 300,
      background: KUN.bg,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Decorative shapes */}
      <div style={{
        position: 'absolute',
        top: -60,
        right: -60,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: KUN.rosehip,
        opacity: 0.18,
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      <div style={{
        position: 'absolute',
        bottom: -80,
        left: -80,
        width: 220,
        height: 220,
        borderRadius: '50%',
        background: KUN.viola,
        opacity: 0.14,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Header */}
      <div style={{
        flexShrink: 0,
        padding: '56px 20px 12px',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        gap: 12,
      }}>
        <div>
          <div style={{
            fontFamily: BST_FT,
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: -0.4,
            lineHeight: 1.2,
            color: KUN.ink,
            whiteSpace: 'pre-line',
          }}>
            {'Cuéntanos sobre\ntu bebé'}
          </div>
          <div style={{
            fontFamily: BST_FB,
            fontSize: 12.5,
            color: KUN.inkSoft,
            lineHeight: 1.5,
            maxWidth: 240,
            marginTop: 6,
          }}>
            Puedes completar esto ahora o más adelante. La enfermera también puede ayudarte.
          </div>
        </div>
        <button
          onClick={onSkip}
          style={{
            background: 'transparent',
            border: `1px solid ${KUN.hair}`,
            borderRadius: 999,
            padding: '7px 14px',
            fontFamily: BST_FT,
            fontSize: 12.5,
            fontWeight: 700,
            color: KUN.inkSoft,
            cursor: 'pointer',
            flexShrink: 0,
            alignSelf: 'flex-start',
            marginTop: 4,
          }}
        >
          Más adelante
        </button>
      </div>

      {/* Scrollable body */}
      <div style={{
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        padding: '4px 20px 24px',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
      }}>
        {BABY_STATUS_CATS.map((cat) => (
          <CategoryBlock
            key={cat.id}
            cat={cat}
            values={status[cat.id]}
            onChange={handleChange}
          />
        ))}

        {/* Save button */}
        <button
          onClick={() => onSave(status)}
          style={{
            width: '100%',
            height: 50,
            borderRadius: 999,
            background: KUN.brick,
            color: '#fff',
            border: 'none',
            fontFamily: BST_FT,
            fontSize: 15,
            fontWeight: 700,
            cursor: 'pointer',
            marginTop: 8,
          }}
        >
          Guardar y continuar
        </button>
      </div>
    </div>
  );
}
window.ScreenBabyStatusOnboarding = ScreenBabyStatusOnboarding;

// ─── ScreenBabyStatusEdit ─────────────────────────────────────────────────────
function ScreenBabyStatusEdit({ babyName, currentStatus, onSave, onBack }) {
  const normalizedCurrentStatus = currentStatus?.lugar === 'Alta'
    ? { ...currentStatus, lugar: 'Dado de alta' }
    : currentStatus;
  const [status, setStatus] = React.useState({
    lugar: null,
    temperatura: null,
    respiracion: null,
    alimentacion: [],
    accesos: [],
    diagnosticos: [],
    ...(normalizedCurrentStatus || {}),
  });
  const [openCat, setOpenCat] = React.useState(null);
  const bodyRef = React.useRef(null);
  const sectionRefs = React.useRef({});

  const handleChange = (catId, value) => {
    setStatus(prev => ({ ...prev, [catId]: value }));
  };

  const toggleCategory = (catId) => {
    const nextOpen = openCat === catId ? null : catId;
    setOpenCat(nextOpen);
    if (nextOpen) {
      window.setTimeout(() => {
        const body = bodyRef.current;
        const section = sectionRefs.current[nextOpen];
        if (!body || !section) return;
        const sectionTop = section.offsetTop - body.offsetTop - 8;
        body.scrollTo({ top: sectionTop, behavior: 'smooth' });
      }, 60);
    }
  };

  const getSummary = (cat) => {
    const val = status[cat.id];
    if (cat.type === 'radio') {
      return val || 'Sin selección';
    } else {
      return Array.isArray(val) && val.length > 0 ? val.join(', ') : 'Sin selección';
    }
  };

  const stripQuestion = (title) => title.replace(/^¿/, '').replace(/\?$/, '');

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      zIndex: 300,
      background: KUN.bg,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    }}>
      {/* Decorative shape */}
      <div style={{
        position: 'absolute',
        top: -60,
        right: -60,
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: KUN.rosehip,
        opacity: 0.18,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Sub-header */}
      <div style={{
        flexShrink: 0,
        padding: '52px 20px 12px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        position: 'relative',
        zIndex: 1,
      }}>
        <button
          onClick={onBack}
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#fff',
            border: `1px solid ${KUN.hair}`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            flexShrink: 0,
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16"
              stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <div>
          <div style={{
            fontFamily: BST_FB,
            fontSize: 10.5,
            color: KUN.brick,
            textTransform: 'uppercase',
            letterSpacing: 1,
            fontWeight: 500,
          }}>
            Estado clínico
          </div>
          <div style={{
            fontFamily: BST_FT,
            fontSize: 17,
            fontWeight: 700,
            color: KUN.ink,
            letterSpacing: -0.2,
            marginTop: 2,
          }}>
            Actualizar estado de {babyName || 'tu bebé'}
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{
        flex: 1,
        minHeight: 0,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        padding: '4px 20px 24px',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 0,
      }} ref={bodyRef}>
        {BABY_STATUS_CATS.map((cat) => {
          const isOpen = openCat === cat.id;
          const summary = getSummary(cat);

          return (
            <div
              key={cat.id}
              ref={(el) => { sectionRefs.current[cat.id] = el; }}
              style={{
                background: '#fff',
                borderRadius: 20,
                border: isOpen ? `1.5px solid ${KUN.brick}` : `1.5px solid ${KUN.hair}`,
                marginBottom: 10,
                overflow: isOpen ? 'visible' : 'hidden',
                flexShrink: 0,
              }}
            >
              {/* Accordion header */}
              <div
                onClick={() => toggleCategory(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '14px 16px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontFamily: BST_FT,
                    fontSize: 14.5,
                    fontWeight: 700,
                    color: KUN.ink,
                    letterSpacing: -0.1,
                  }}>
                    {stripQuestion(cat.title)}
                  </div>
                  <div style={{
                    fontFamily: BST_FB,
                    fontSize: 12,
                    color: KUN.inkSoft,
                    marginTop: 3,
                    lineHeight: 1.4,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}>
                    {summary}
                  </div>
                </div>
                {/* Toggle button */}
                <div style={{
                  width: 30,
                  height: 30,
                  borderRadius: '50%',
                  background: isOpen ? KUN.brick : KUN.cream,
                  border: isOpen ? 'none' : `1px solid ${KUN.hair}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {isOpen ? (
                    /* chevron up */
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 9L7 4L12 9"
                        stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ) : (
                    /* chevron down */
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 5L7 10L12 5"
                        stroke={KUN.brick} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div style={{
                  padding: '14px 16px 16px',
                  borderTop: `1px dashed ${KUN.hair}`,
                  maxHeight: 430,
                  overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch',
                  overscrollBehavior: 'contain',
                }}>
                  <CategoryBlock
                    cat={cat}
                    values={status[cat.id]}
                    onChange={handleChange}
                  />
                </div>
              )}
            </div>
          );
        })}

        {/* Save button */}
        <button
          onClick={() => onSave(status)}
          style={{
            width: '100%',
            height: 50,
            borderRadius: 999,
            background: KUN.brick,
            color: '#fff',
            border: 'none',
            fontFamily: BST_FT,
            fontSize: 15,
            fontWeight: 700,
            cursor: 'pointer',
            marginTop: 8,
          }}
        >
          Guardar cambios
        </button>
      </div>
    </div>
  );
}
window.ScreenBabyStatusEdit = ScreenBabyStatusEdit;
