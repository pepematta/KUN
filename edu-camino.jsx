// Camino — serpentine path with capsules positioned on a true sinuous curve.
// The path is a single continuous SVG curve; stations sit at sampled points along it.

function CaminoHeader({ completedCount, totalCount, parentName, babyName }) {
  const pct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const displayName = parentName || 'apoderado/a';
  const displayBaby = babyName || 'tu bebé';
  return (
    <div style={{ padding: '4px 24px 14px' }}>
      <div style={{
        fontSize: 22, fontWeight: 700, color: KUN.ink,
        letterSpacing: -0.4, lineHeight: 1.2, marginBottom: 14,
        textWrap:'pretty',
      }}>
        Sigamos juntos, <span style={{
          fontStyle: 'italic', color: KUN.accent, fontWeight: 700,
        }}>{displayName}</span>
      </div>

      <div style={{
        background: '#fff', borderRadius: 20,
        padding: '14px 16px',
        boxShadow: '0 1px 2px rgba(46,42,38,0.03), 0 6px 16px rgba(46,42,38,0.04)',
      }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginBottom: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 1 }}>
            TU CAMINO
          </span>
          <span style={{ fontSize: 12, fontWeight: 700, color: KUN.ink }}>
            {completedCount} <span style={{ color: KUN.inkMuted, fontWeight: 600 }}>de {totalCount}</span>
          </span>
        </div>
        <div style={{
          height: 6, borderRadius: 3, background: KUN.trackSoft,
          position:'relative', overflow:'hidden',
        }}>
          <div style={{
            position:'absolute', top:0, left:0, height:'100%',
            width: `${pct}%`,
            background: KUN.accent, borderRadius: 3,
            transition: 'width 0.4s ease',
          }}/>
        </div>
        <div style={{
          marginTop: 10, display:'flex', alignItems:'center', gap: 8,
          fontSize: 13, color: KUN.inkSoft, fontWeight: 600,
        }}>
          <span style={{ width: 8, height: 8, borderRadius:'50%', background: KUN.accent }}/>
          Pilar 1 · <span style={{ color: KUN.ink, fontWeight: 700 }}>Cuerpo y cuidados de {displayBaby}</span>
        </div>
      </div>
    </div>
  );
}

// Station: dot sits on curve, card extends to one side
function Station({ state, num, title, dur, cx, cy, side, onClick }) {
  let dotBg, dotContent, titleColor, durColor, durBold;
  if (state === 'done') {
    dotBg = KUN.accent;
    dotContent = KIcon.check('#fff');
    titleColor = KUN.inkMuted; durColor = KUN.inkMuted; durBold = false;
  } else if (state === 'active') {
    dotBg = KUN.accent;
    dotContent = KIcon.play('#fff');
    titleColor = KUN.ink; durColor = KUN.accent; durBold = true;
  } else {
    dotBg = '#fff';
    dotContent = <span style={{ fontSize: 14, fontWeight: 700, color: KUN.inkFaint }}>{num}</span>;
    titleColor = KUN.inkMuted; durColor = KUN.inkMuted; durBold = false;
  }
  const dotSize = state === 'active' ? 54 : 44;

  // card placement
  const cardW = 200;
  const gap = 14;
  const cardLeft = side === 'right' ? cx + dotSize/2 + gap : cx - dotSize/2 - gap - cardW;

  const cardBg = state === 'active' ? '#fff' : (state === 'done' ? '#FBF8F4' : 'transparent');
  const cardShadow = state === 'active'
    ? '0 2px 4px rgba(46,42,38,0.04), 0 10px 24px rgba(201,123,90,0.18)'
    : (state === 'done' ? '0 1px 2px rgba(46,42,38,0.03)' : 'none');
  const cardBorder = state === 'next' ? `1.5px dashed ${KUN.inkFaint}` : 'none';

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
          ? `0 0 0 6px ${KUN.accentSoft}, 0 6px 14px rgba(201,123,90,0.3)`
          : (state === 'done' ? '0 2px 6px rgba(168,95,64,0.25)' : 'none'),
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
        boxShadow: cardShadow,
        opacity: state === 'next' ? 0.85 : 1,
        boxSizing: 'border-box',
        cursor: onClick && state !== 'next' ? 'pointer' : 'default',
      }}>
        <div style={{
          fontSize: state === 'active' ? 14.5 : 13.5,
          fontWeight: state === 'active' ? 700 : 600,
          color: titleColor, letterSpacing: -0.2,
          lineHeight: 1.25, marginBottom: 4, textWrap:'pretty',
        }}>{title}</div>
        <div style={{
          fontSize: 11.5, fontWeight: durBold ? 700 : 600,
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

  // Compute state: first uncompleted = active, before it = done, after it = next
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

  // Build a serpentine path that passes through all station centers.
  const buildSeg = (a, b) => {
    const dy = (b.y - a.y);
    const c1x = a.x + (b.x - a.x) * 0.05;
    const c1y = a.y + dy * 0.55;
    const c2x = b.x - (b.x - a.x) * 0.05;
    const c2y = b.y - dy * 0.55;
    return `C ${c1x} ${c1y}, ${c2x} ${c2y}, ${b.x} ${b.y}`;
  };

  // Solid path: from first station up to and including the active station
  // Dashed path: from active station to the end
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
        <path d={solidD} fill="none" stroke={KUN.accent} strokeWidth="3" strokeLinecap="round" opacity="0.85"/>
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

function ScreenCamino({ onOpenCapsula, completedCapsulas, parentName, babyName }) {
  // Count how many of the 4 camino capsules are done
  const caminoCapIds = [3, 4, 2, 1];
  const completedCount = (completedCapsulas || []).filter(id => caminoCapIds.includes(id)).length;
  return (
    <>
      <CaminoHeader completedCount={completedCount} totalCount={caminoCapIds.length} parentName={parentName} babyName={babyName} />
      <CaminoPath onOpenCapsula={onOpenCapsula} completedCapsulas={completedCapsulas} babyName={babyName} />
    </>
  );
}

window.ScreenCamino = ScreenCamino;
