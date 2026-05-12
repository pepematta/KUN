// Camino — serpentine path with capsules positioned on a true sinuous curve.
// Applies KUN Design System v2.

const C_FT = 'Quicksand, sans-serif';
const C_FB = 'Poppins, sans-serif';

function CaminoHeader({ completedCount, totalCount, parentName, babyName }) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const displayName = parentName || 'apoderado/a';
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
          Pilar 1 · <span style={{ fontFamily: C_FT, color: KUN.ink, fontWeight: 700 }}>Cuerpo y cuidados de {displayBaby}</span>
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
      <div style={{
        position:'absolute',
        left: cx - dotSize/2, top: cy - dotSize/2,
        width: dotSize, height: dotSize, borderRadius:'50%',
        background: dotBg,
        border: state === 'next' ? `2px solid ${KUN.inkFaint}` : 'none',
        boxShadow: state === 'active'
          ? `0 0 0 6px ${KUN.rosehip}, 0 6px 14px rgba(240,116,62,0.30)`
          : 'none',
        display:'flex', alignItems:'center', justifyContent:'center',
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

function CaminoPath({ onOpenCapsula, completedCapsulas, babyName }) {
  const W = 390;
  const completed = completedCapsulas || [];

  // Station order: fixed sequence. State computed from completedCapsulas.
  const stationDefs = [
    { num:1, title:'Cómo se ve tu bebé hoy',               dur:'3 min', x: 78,  y:  40, side:'right', capId: 3 },
    { num:2, title:'Entender los monitores',                dur:'5 min', x: 312, y: 150, side:'left',  capId: 4 },
    { num:3, title:'Método canguro: cómo empezar',          dur:'6 min', x: 78,  y: 280, side:'right', capId: 2 },
    { num:4, title:'Tu bebé empezó a alimentarse por sonda', dur:'4 min', x: 312, y: 410, side:'left',  capId: 1 },
  ];

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

function ScreenCamino({ onOpenCapsula, completedCapsulas, parentName, babyName }) {
  const caminoCapIds = [3, 4, 2, 1];
  const completedCount = (completedCapsulas || []).filter(id => caminoCapIds.includes(id)).length;
  return (
    <div style={{ position:'relative' }}>
      <CaminoShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <CaminoHeader completedCount={completedCount} totalCount={caminoCapIds.length} parentName={parentName} babyName={babyName} />
        <CaminoPath onOpenCapsula={onOpenCapsula} completedCapsulas={completedCapsulas} babyName={babyName} />
      </div>
    </div>
  );
}

window.ScreenCamino = ScreenCamino;
