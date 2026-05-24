// Camino — serpentine path with capsules positioned on a true sinuous curve.
// Applies KUN Design System v2.

const C_FT = 'Quicksand, sans-serif';
const C_FB = 'Poppins, sans-serif';

const CAMINO_STAGE_PATHS = {
  'Recién ingresado': {
    label: 'Recién ingresado',
    intro: 'Primer mapa para ubicarse, entender las reglas de la unidad y saber qué derechos acompañan a tu familia.',
    caps: [
      { capId: 11, title: 'Conocer la unidad neonatal', dur: '3 min' },
      { capId: 12, title: 'Horarios de visita y a quién preguntar', dur: '4 min' },
      { capId: 13, title: 'Ley Mila y acompañamiento familiar', dur: '4 min' },
      { capId: 14, title: 'Lavado de manos y normas de ingreso', dur: '3 min' },
      { capId: 15, title: 'Primeros equipos que verás', dur: '5 min' },
    ],
  },
  UCI: {
    label: 'UCI',
    intro: 'Un camino para entender la vigilancia intensiva, acompañar con calma y conversar mejor con el equipo clínico.',
    caps: [
      { capId: 21, title: 'Qué significa estar en UCI neonatal', dur: '4 min' },
      { capId: 22, title: 'Monitores, alarmas y tubos', dur: '5 min' },
      { capId: 23, title: 'Cómo tocar y acompañar con seguridad', dur: '4 min' },
      { capId: 24, title: 'Preguntas clave para la visita médica', dur: '3 min' },
      { capId: 25, title: 'Pequeñas señales de avance', dur: '4 min' },
    ],
  },
  'Intermedio A': {
    label: 'Intermedio A',
    intro: 'Aquí empieza una participación más activa: cuidados simples, contacto y lectura de señales del bebé.',
    caps: [
      { capId: 31, title: 'Qué cambia en Intermedio A', dur: '3 min' },
      { capId: 32, title: 'Muda y aseo con apoyo', dur: '5 min' },
      { capId: 33, title: 'Piel con piel cuando está indicado', dur: '5 min' },
      { capId: 34, title: 'Primeras señales de hambre y cansancio', dur: '4 min' },
      { capId: 35, title: 'Alimentación paso a paso', dur: '4 min' },
    ],
  },
  'Intermedio B': {
    label: 'Intermedio B',
    intro: 'Una etapa para ganar autonomía y practicar rutinas parecidas a las que vivirán en casa.',
    caps: [
      { capId: 41, title: 'Qué practicar antes del alta', dur: '4 min' },
      { capId: 42, title: 'Mamadera, pecho y ritmos de alimentación', dur: '5 min' },
      { capId: 43, title: 'Medicamentos e indicaciones', dur: '4 min' },
      { capId: 44, title: 'Sueño seguro desde el hospital', dur: '4 min' },
      { capId: 45, title: 'Checklist familiar de alta', dur: '5 min' },
    ],
  },
  'Dado de alta': {
    label: 'Dado de alta',
    intro: 'El camino de casa: organizar controles, reconocer alertas y sostener el cuidado sin sentirse solos.',
    caps: [
      { capId: 51, title: 'Primeros días en casa', dur: '4 min' },
      { capId: 52, title: 'Controles y seguimiento', dur: '3 min' },
      { capId: 53, title: 'Signos de alarma', dur: '5 min' },
      { capId: 54, title: 'Rutina de alimentación y medicamentos', dur: '5 min' },
      { capId: 55, title: 'Cuidar también a la familia', dur: '4 min' },
    ],
  },
};

function normalizeCaminoStage(stage) {
  if (stage === 'Alta') return 'Dado de alta';
  return CAMINO_STAGE_PATHS[stage] ? stage : 'Recién ingresado';
}

function CaminoHeader({ completedCount, totalCount, parentName, babyName, stagePath }) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const displayName = parentName || 'padre/madre';
  const displayBaby = babyName || 'tu bebé';
  return (
    <div style={{ padding: '4px 24px 14px' }}>
      <div style={{
        fontFamily: C_FT, fontSize: 22, fontWeight: 700, color: KUN.ink,
        letterSpacing: -0.4, lineHeight: 1.2, marginBottom: 14,
      }}>
        Sigamos juntos, <span style={{
          fontStyle: 'italic', color: KUN.brick, fontWeight: 700,
        }}>{displayName}</span>
      </div>

      <div style={{
        background: '#fff', borderRadius: 22,
        padding: '16px 18px',
        border: `1px solid ${KUN.hair}`,
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 10 }}>
          <span style={{
            fontFamily: C_FB, fontSize: 10.5, fontWeight: 500,
            color: KUN.brick, letterSpacing: 1, textTransform:'uppercase',
          }}>
            Tu camino
          </span>
          <span style={{ fontFamily: C_FT, fontSize: 13, fontWeight: 700, color: KUN.ink }}>
            {completedCount} <span style={{ fontFamily: C_FB, color: KUN.inkMuted, fontWeight: 500 }}>de {totalCount}</span>
          </span>
        </div>
        <div style={{
          height: 8, borderRadius: 999, background: 'rgba(42,35,32,0.07)',
          position:'relative', overflow:'hidden',
        }}>
          <div style={{
            position:'absolute', top:0, left:0, height:'100%',
            width: `${pct}%`,
            background: KUN.brick, borderRadius: 999,
            transition: 'width 0.4s ease',
          }}/>
        </div>
        <div style={{
          marginTop: 12, display:'flex', alignItems:'center', gap: 8,
          fontFamily: C_FB, fontSize: 12.5, color: KUN.inkSoft, fontWeight: 400,
        }}>
          <span style={{ width: 8, height: 8, borderRadius:'50%', background: KUN.brick }}/>
          {stagePath.label} · <span style={{ fontFamily: C_FT, color: KUN.ink, fontWeight: 700 }}>Cuidados básicos de {displayBaby}</span>
        </div>
        <div style={{
          marginTop: 8,
          fontFamily: C_FB,
          fontSize: 12.5,
          color: KUN.inkSoft,
          lineHeight: 1.45,
        }}>
          {stagePath.intro}
        </div>
      </div>
    </div>
  );
}

// Station: dot sits on curve, card extends to one side
function Station({ state, num, title, dur, cx, cy, side, onClick }) {
  let dotBg, dotContent, titleColor, durColor, durBold;
  if (state === 'done') {
    dotBg = KUN.brick;
    dotContent = KIcon.check('#fff');
    titleColor = KUN.inkMuted; durColor = KUN.inkMuted; durBold = false;
  } else if (state === 'active') {
    dotBg = KUN.brick;
    dotContent = KIcon.play('#fff');
    titleColor = KUN.ink; durColor = KUN.brick; durBold = true;
  } else {
    dotBg = '#fff';
    dotContent = <span style={{ fontFamily: C_FT, fontSize: 14, fontWeight: 700, color: KUN.inkFaint }}>{num}</span>;
    titleColor = KUN.inkMuted; durColor = KUN.inkMuted; durBold = false;
  }
  const dotSize = state === 'active' ? 54 : 44;

  // card placement
  const cardW = 200;
  const gap = 14;
  const cardLeft = side === 'right' ? cx + dotSize/2 + gap : cx - dotSize/2 - gap - cardW;

  const cardBg = state === 'active' ? '#fff' : (state === 'done' ? '#FBF8F4' : 'transparent');
  const cardBorder = state === 'next'
    ? `1.5px dashed ${KUN.inkFaint}`
    : (state === 'active' || state === 'done' ? `1px solid ${KUN.hair}` : 'none');

  return (
    <>
      {/* dot */}
      <div
        onClick={onClick && state !== 'next' ? onClick : undefined}
        style={{
        position:'absolute',
        left: cx - dotSize/2, top: cy - dotSize/2,
        width: dotSize, height: dotSize, borderRadius:'50%',
        background: dotBg,
        border: state === 'next' ? `2px solid ${KUN.inkFaint}` : 'none',
        boxShadow: state === 'active'
          ? `0 0 0 6px ${KUN.rosehip}, 0 6px 14px rgba(240,116,62,0.30)`
          : 'none',
        display:'flex', alignItems:'center', justifyContent:'center',
        cursor: onClick && state !== 'next' ? 'pointer' : 'default',
        zIndex: 2,
      }}>
        {dotContent}
      </div>
      {/* card */}
      <div
        onClick={onClick && state !== 'next' ? onClick : undefined}
        style={{
        position:'absolute',
        left: cardLeft, top: cy - 28,
        width: cardW,
        background: cardBg,
        border: cardBorder,
        borderRadius: 18,
        padding: '12px 14px',
        textAlign: side === 'right' ? 'left' : 'right',
        opacity: state === 'next' ? 0.85 : 1,
        boxSizing: 'border-box',
        cursor: onClick && state !== 'next' ? 'pointer' : 'default',
      }}>
        <div style={{
          fontFamily: C_FT,
          fontSize: state === 'active' ? 14.5 : 13.5,
          fontWeight: 700,
          color: titleColor, letterSpacing: -0.2,
          lineHeight: 1.3, marginBottom: 5,
        }}>{title}</div>
        <div style={{
          fontFamily: C_FB,
          fontSize: 11.5, fontWeight: durBold ? 600 : 500,
          color: durColor, letterSpacing: 0.1,
        }}>{dur}</div>
      </div>
    </>
  );
}

function CaminoPath({ onOpenCapsula, completedCapsulas, stagePath }) {
  const W = 390;
  const completed = completedCapsulas || [];

  const stationDefs = stagePath.caps.map((cap, idx) => ({
    ...cap,
    num: idx + 1,
    x: idx % 2 === 0 ? 78 : 312,
    y: 40 + (idx * 118),
    side: idx % 2 === 0 ? 'right' : 'left',
  }));

  let foundActive = false;
  const stations = stationDefs.map(s => {
    if (completed.includes(s.capId)) {
      return { ...s, state: 'done', dur: `Completada · ${s.dur}` };
    }
    if (!foundActive) {
      foundActive = true;
      return { ...s, state: 'active', dur: `Continúa aquí · ${s.dur}` };
    }
    return { ...s, state: 'next', dur: `Pronto · ${s.dur}` };
  });

  const buildSeg = (a, b) => {
    const dy = (b.y - a.y);
    const c1x = a.x + (b.x - a.x) * 0.05;
    const c1y = a.y + dy * 0.55;
    const c2x = b.x - (b.x - a.x) * 0.05;
    const c2y = b.y - dy * 0.55;
    return `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${b.x} ${b.y}`;
  };

  const activeIdx = stations.findIndex(s => s.state === 'active');
  const splitIdx = activeIdx >= 0 ? activeIdx : stations.length - 1;

  let solidD = `M ${stations[0].x} ${stations[0].y}`;
  for (let i = 1; i <= splitIdx; i++) {
    solidD += ` ${buildSeg(stations[i-1], stations[i])}`;
  }
  let dashedD = '';
  if (splitIdx < stations.length - 1) {
    dashedD = `M ${stations[splitIdx].x} ${stations[splitIdx].y}`;
    for (let i = splitIdx + 1; i < stations.length; i++) {
      dashedD += ` ${buildSeg(stations[i-1], stations[i])}`;
    }
  }

  const totalH = stations[stations.length-1].y + 60;

  return (
    <div style={{ position:'relative', width:'100%', height: totalH, padding: 0 }}>
      <svg
        width={W} height={totalH}
        viewBox={`0 0 ${W} ${totalH}`}
        style={{ position:'absolute', top: 0, left: 0, pointerEvents:'none' }}
      >
        <path d={solidD} fill="none" stroke={KUN.brick} strokeWidth="3" strokeLinecap="round" opacity="0.85"/>
        {dashedD && <path d={dashedD} fill="none" stroke={KUN.inkFaint} strokeWidth="3" strokeLinecap="round" strokeDasharray="4 8"/>}
      </svg>
      {stations.map((st, i) => (
        <Station
          key={i}
          state={st.state} num={st.num} title={st.title} dur={st.dur}
          cx={st.x} cy={st.y} side={st.side}
          onClick={onOpenCapsula ? () => onOpenCapsula(st.capId) : undefined}
        />
      ))}
    </div>
  );
}

const FEEDBACK_TAGS = [
  'Gracias por la paciencia',
  'Explicaron con claridad',
  'Nos sentimos acompañados',
  'Podrían anticipar más información',
  'Más apoyo en horarios de visita',
  'Más guía para practicar cuidados',
];

function CaminoFeedback({ stagePath, parentName, babyName, feedbackSent, onSubmit }) {
  const [thanks, setThanks] = React.useState('');
  const [note, setNote] = React.useState('');
  const [tags, setTags] = React.useState([]);
  const displayBaby = babyName || 'tu bebé';

  const toggleTag = (tag) => {
    setTags(prev => prev.includes(tag) ? prev.filter(item => item !== tag) : [...prev, tag]);
  };

  const handleSubmit = () => {
    if (!onSubmit || feedbackSent || !canSend) return;
    onSubmit({
      stage: stagePath.label,
      babyName: displayBaby,
      parentName: parentName || 'Familia',
      thanks: thanks.trim(),
      note: note.trim(),
      tags,
    });
    setThanks('');
    setNote('');
    setTags([]);
  };

  const canSend = thanks.trim() || note.trim() || tags.length > 0;

  return (
    <div style={{
      margin: '10px 24px 34px',
      background: '#fff',
      border: `1px solid ${KUN.hair}`,
      borderRadius: 22,
      padding: '18px 18px',
    }}>
      <div style={{
        fontFamily: C_FB,
        fontSize: 10.5,
        fontWeight: 600,
        color: KUN.brick,
        letterSpacing: 1,
        textTransform: 'uppercase',
      }}>
        Cierre de etapa
      </div>
      <div style={{
        fontFamily: C_FT,
        fontSize: 18,
        fontWeight: 700,
        color: KUN.ink,
        letterSpacing: -0.2,
        marginTop: 5,
      }}>
        Retroalimentación para el equipo
      </div>
      <div style={{
        fontFamily: C_FB,
        fontSize: 12.8,
        color: KUN.inkSoft,
        lineHeight: 1.5,
        marginTop: 6,
      }}>
        Ya completaron el camino de {stagePath.label}. Pueden dejar un agradecimiento o una recomendación amistosa para el equipo que cuidó a {displayBaby}.
      </div>

      {feedbackSent ? (
        <div style={{
          marginTop: 14,
          background: KUN.cream,
          borderRadius: 16,
          padding: '14px 16px',
          fontFamily: C_FT,
          fontSize: 14,
          fontWeight: 700,
          color: KUN.brick,
          textAlign: 'center',
        }}>
          Gracias. Tu mensaje quedó disponible para el personal de salud.
        </div>
      ) : (
        <>
          <textarea
            value={thanks}
            onChange={e => setThanks(e.target.value)}
            placeholder="Un agradecimiento para el equipo..."
            style={{
              width: '100%',
              minHeight: 76,
              marginTop: 14,
              border: `1.5px solid ${KUN.hair}`,
              borderRadius: 16,
              padding: '12px 13px',
              boxSizing: 'border-box',
              resize: 'none',
              outline: 'none',
              fontFamily: C_FB,
              fontSize: 13.5,
              lineHeight: 1.5,
              color: KUN.ink,
            }}
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
            {FEEDBACK_TAGS.map(tag => {
              const active = tags.includes(tag);
              return (
                <button key={tag} onClick={() => toggleTag(tag)} style={{
                  border: active ? 'none' : `1px solid ${KUN.hair}`,
                  background: active ? KUN.brick : KUN.cream,
                  color: active ? '#fff' : KUN.inkSoft,
                  borderRadius: 999,
                  padding: '8px 10px',
                  fontFamily: C_FT,
                  fontSize: 11.5,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}>
                  {tag}
                </button>
              );
            })}
          </div>
          <textarea
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="Una recomendación amistosa para mejorar la experiencia..."
            style={{
              width: '100%',
              minHeight: 76,
              marginTop: 10,
              border: `1.5px solid ${KUN.hair}`,
              borderRadius: 16,
              padding: '12px 13px',
              boxSizing: 'border-box',
              resize: 'none',
              outline: 'none',
              fontFamily: C_FB,
              fontSize: 13.5,
              lineHeight: 1.5,
              color: KUN.ink,
            }}
          />
          <button onClick={handleSubmit} style={{
            width: '100%',
            height: 46,
            marginTop: 12,
            borderRadius: 999,
            border: 'none',
            background: canSend ? KUN.brick : 'rgba(42,35,32,0.08)',
            color: canSend ? '#fff' : KUN.inkMuted,
            fontFamily: C_FT,
            fontSize: 14,
            fontWeight: 700,
            cursor: canSend ? 'pointer' : 'default',
          }}>
            Enviar al personal de salud
          </button>
        </>
      )}
    </div>
  );
}

// Decorative half-moon shapes (low opacity, recortadas)
function CaminoShapes() {
  return (
    <>
      <div style={{
        position:'absolute', top: 30, right: -90,
        width: 180, height: 180, borderRadius:'50%',
        background: KUN.rosehip, opacity: 0.16,
        pointerEvents:'none', zIndex: 0,
      }}/>
      <div style={{
        position:'absolute', top: 380, left: -90,
        width: 200, height: 200, borderRadius:'50%',
        background: KUN.viola, opacity: 0.18,
        pointerEvents:'none', zIndex: 0,
      }}/>
    </>
  );
}

function ScreenCamino({ onOpenCapsula, completedCapsulas, parentName, babyName, babyStatus, careFeedback = [], onSubmitCareFeedback }) {
  const stageKey = normalizeCaminoStage(babyStatus?.lugar);
  const stagePath = CAMINO_STAGE_PATHS[stageKey];
  const caminoCapIds = stagePath.caps.map(cap => cap.capId);
  const completedCount = (completedCapsulas || []).filter(id => caminoCapIds.includes(id)).length;
  const stageComplete = completedCount === caminoCapIds.length;
  const feedbackSent = (careFeedback || []).some(item =>
    item.stage === stagePath.label && item.babyName === (babyName || 'tu bebé')
  );
  return (
    <div style={{ position:'relative' }}>
      <CaminoShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <CaminoHeader completedCount={completedCount} totalCount={caminoCapIds.length} parentName={parentName} babyName={babyName} stagePath={stagePath} />
        <CaminoPath onOpenCapsula={onOpenCapsula} completedCapsulas={completedCapsulas} stagePath={stagePath} />
        {stageComplete && (
          <CaminoFeedback
            stagePath={stagePath}
            parentName={parentName}
            babyName={babyName}
            feedbackSent={feedbackSent}
            onSubmit={onSubmitCareFeedback}
          />
        )}
      </div>
    </div>
  );
}

window.ScreenCamino = ScreenCamino;
