// Personalizado screen body (no device wrapper — used inside unified shell).

function RecommendedHero({ onOpenCapsula }) {
  return (
    <div style={{
      margin: '6px 20px 0',
      borderRadius: 30,
      background: KUN.accent,
      padding: '20px 20px 18px',
      position:'relative', overflow:'hidden',
      color:'#fff',
      boxShadow: '0 1px 2px rgba(46,42,38,0.04), 0 14px 30px rgba(201,123,90,0.22)',
    }}>
      <div style={{ position:'absolute', top:-50, right:-60, width: 180, height: 180, borderRadius:'50%', background:'rgba(255,255,255,0.10)' }}/>
      <div style={{ position:'absolute', bottom:-70, left:-40, width: 160, height: 160, borderRadius:'50%', background:'rgba(255,255,255,0.08)' }}/>

      <div style={{
        display:'inline-flex', alignItems:'center', gap: 5,
        padding: '5px 11px', borderRadius: 999,
        background: 'rgba(255,255,255,0.22)', backdropFilter:'blur(6px)',
        fontSize: 11, fontWeight: 800, letterSpacing: 0.6,
        marginBottom: 14, position:'relative',
      }}>
        {KIcon.spark('#fff')} NUEVO PARA TI
      </div>

      <div style={{ position:'relative' }}>
        <div style={{ fontSize: 12, fontWeight: 600, opacity: 0.85, marginBottom: 6, letterSpacing: 0.2 }}>
          Porque Sofía empezó a alimentarse por sonda
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.4, lineHeight: 1.2, marginBottom: 10, textWrap:'pretty' }}>
          Tu bebé empezó a alimentarse por sonda
        </div>
        <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.45, opacity: 0.92, marginBottom: 18, textWrap:'pretty' }}>
          Aprende qué es la sonda nasogástrica y cómo puedes acompañar este proceso.
        </div>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 12 }}>
          <div style={{ display:'flex', alignItems:'center', gap: 8, fontSize: 13, fontWeight: 600, opacity: 0.9 }}>
            <span>4 min</span>
            <span style={{ width: 3, height: 3, borderRadius:'50%', background:'#fff', opacity:0.7 }}/>
            <span>Lectura + audio</span>
          </div>
          <button onClick={onOpenCapsula} style={{
            padding: '11px 20px', borderRadius: 999, border:'none',
            background:'#fff', color: KUN.accentDeep,
            fontFamily:'inherit', fontSize: 13, fontWeight: 800, letterSpacing: 0.1,
            display:'flex', alignItems:'center', gap: 6, cursor:'pointer',
            boxShadow: '0 4px 10px rgba(46,42,38,0.15)',
          }}>
            Empezar {KIcon.arrow(KUN.accentDeep)}
          </button>
        </div>
      </div>
    </div>
  );
}

function HistorySection({ completed }) {
  const base = [
    { title: 'Cómo se ve tu bebé hoy',  dur: '3 min', when: 'Hace 2 días' },
    { title: 'Entender los monitores',   dur: '5 min', when: 'Hace 5 días' },
    { title: 'El método canguro',        dur: '6 min', when: 'La semana pasada' },
  ];
  const items = completed
    ? [{ title: 'Tu bebé empezó a alimentarse por sonda', dur: '4 min', when: 'Hoy' }, ...base]
    : base;
  return (
    <div style={{ margin: '22px 0 0' }}>
      <div style={{ padding: '0 28px 10px', display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontSize: 17, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>
            Vuelve cuando quieras
          </div>
          <div style={{ fontSize: 12, color: KUN.inkMuted, fontWeight: 500, marginTop: 2 }}>
            Lo que ya viste, siempre disponible
          </div>
        </div>
        <span style={{ fontSize: 12, color: KUN.accent, fontWeight: 700 }}>Ver todo</span>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap: 8, padding: '0 20px' }}>
        {items.map((it, i) => (
          <div key={i} style={{
            background: '#fff', borderRadius: 20, padding: '14px 16px',
            display:'flex', alignItems:'center', gap: 14,
            boxShadow: '0 1px 2px rgba(46,42,38,0.03)', cursor:'pointer',
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: 14, background: KUN.cardSoft,
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.5 8.2L6.5 11L12.5 4.8" stroke={KUN.inkMuted} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontSize: 14.5, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2,
                marginBottom: 3, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
              }}>{it.title}</div>
              <div style={{ display:'flex', alignItems:'center', gap: 8, fontSize: 12, color: KUN.inkMuted, fontWeight: 600 }}>
                <span style={{
                  padding: '2px 8px', borderRadius: 999,
                  background: KUN.sageSoft, color: KUN.sage,
                  fontSize: 10, fontWeight: 800, letterSpacing: 0.3,
                }}>VISTA</span>
                <span>{it.dur}</span>
                <span style={{ width: 3, height: 3, borderRadius:'50%', background: KUN.inkFaint }}/>
                <span>{it.when}</span>
              </div>
            </div>
            {KIcon.chevRight(KUN.inkFaint)}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenPersonalizado({ onOpenCapsula, completed }) {
  return (
    <>
      <RecommendedHero onOpenCapsula={onOpenCapsula} />
      <HistorySection completed={completed} />
    </>
  );
}

window.ScreenPersonalizado = ScreenPersonalizado;
