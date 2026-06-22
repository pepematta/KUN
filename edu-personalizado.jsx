// Personalizado screen body — KUN DS v2 applied (Quicksand titles, Poppins body, Brick CTAs).

const P_FT = 'Quicksand, sans-serif';
const P_FB = 'Poppins, sans-serif';

function RecommendedHero({ onOpenCapsula }) {
  return (
    <div style={{
      margin: '6px 20px 0',
      borderRadius: 30,
      background: KUN.brick,
      padding: '22px 22px 20px',
      position:'relative', overflow:'hidden',
      color:'#fff',
    }}>
      {/* Decorative shapes */}
      <div style={{ position:'absolute', top:-60, right:-70, width: 200, height: 200, borderRadius:'50%', background:'rgba(255,255,255,0.10)' }}/>
      <div style={{ position:'absolute', bottom:-80, left:-50, width: 170, height: 170, borderRadius:'50%', background:'rgba(255,255,255,0.08)' }}/>

      <div style={{
        display:'inline-flex', alignItems:'center', gap: 6,
        padding: '5px 11px', borderRadius: 999,
        background: KUN.sun, color: KUN.ink,
        fontFamily: P_FT, fontSize: 11, fontWeight: 700, letterSpacing: 0.4,
        marginBottom: 16, position:'relative',
      }}>
        {KIcon.spark(KUN.ink)} NUEVO PARA TI
      </div>

      <div style={{ position:'relative' }}>
        <div style={{ fontFamily: P_FB, fontSize: 12, fontWeight: 400, opacity: 0.9, marginBottom: 6, letterSpacing: 0.2 }}>
          Esencial para estos primeros días en la UCIN
        </div>
        <div style={{ fontFamily: P_FT, fontSize: 22, fontWeight: 700, letterSpacing: -0.4, lineHeight: 1.2, marginBottom: 10 }}>
          El apego en la UCIN
        </div>
        <div style={{ fontFamily: P_FB, fontSize: 13.5, fontWeight: 400, lineHeight: 1.55, opacity: 0.92, marginBottom: 18 }}>
          Cómo construir el vínculo con tu bebé desde los primeros momentos en la unidad neonatal.
        </div>

        <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 12 }}>
          <div style={{ display:'flex', alignItems:'center', gap: 8, fontFamily: P_FB, fontSize: 12.5, fontWeight: 500, opacity: 0.9 }}>
            <span>5 min</span>
            <span style={{ width: 3, height: 3, borderRadius:'50%', background:'#fff', opacity:0.7 }}/>
            <span>Lectura + audio</span>
          </div>
          <button onClick={onOpenCapsula} style={{
            padding: '10px 18px', height: 42, borderRadius: 999, border:'none',
            background:'#fff', color: KUN.ink,
            fontFamily: P_FT, fontSize: 13.5, fontWeight: 700, letterSpacing: -0.1,
            display:'inline-flex', alignItems:'center', gap: 6, cursor:'pointer',
          }}>
            Empezar {KIcon.arrow(KUN.ink)}
          </button>
        </div>
      </div>
    </div>
  );
}

function HistorySection({ completedCapsulas, quizResults, onOpenCapsula, onGoToBiblio }) {
  const libDone = window.CAP_LIBRARY || {};
  const capCatalogDone = window.CAPSULAS || [];
  const doneItems = (completedCapsulas || []).map(id => {
    const cap = libDone[id];
    if (!cap) return null;
    const catalogEntry = capCatalogDone.find(c => c.id === id);
    return {
      id,
      title: catalogEntry?.title || cap.headerTitle,
      dur: (cap.dur || catalogEntry?.dur || 'lectura').toLowerCase(),
      when: 'Completada',
      quiz: quizResults?.[id],
    };
  }).filter(Boolean);
  return (
    <div style={{ margin: '24px 0 0' }}>
      <div style={{ padding: '0 28px 12px', display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontFamily: P_FT, fontSize: 19, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>
            Vuelve cuando quieras
          </div>
          <div style={{ fontFamily: P_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400, marginTop: 3 }}>
            Lo que ya viste, siempre disponible
          </div>
        </div>
        <span onClick={onGoToBiblio} style={{
          fontFamily: P_FT, fontSize: 12.5, color: KUN.brick, fontWeight: 700, cursor: 'pointer',
        }}>Ver todo →</span>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap: 10, padding: '0 20px' }}>
        {doneItems.length === 0 && (
          <div style={{
            background: '#fff', borderRadius: 22, padding: '16px',
            border: `1px dashed ${KUN.hair}`,
            fontFamily: P_FB, fontSize: 13, color: KUN.inkSoft, lineHeight: 1.5,
          }}>
            Cuando completes una cápsula, aparecerá aquí para que puedas volver a verla.
          </div>
        )}
        {doneItems.map((it, i) => (
          <div key={`${it.id}-${i}`} onClick={() => it.id && onOpenCapsula && onOpenCapsula(it.id)} style={{
            background: '#fff', borderRadius: 22, padding: '14px 16px',
            display:'flex', alignItems:'center', gap: 14,
            border: `1px solid ${KUN.hair}`, cursor: 'pointer',
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: 14, background: KUN.apple,
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.5 8.2L6.5 11L12.5 4.8" stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: P_FT, fontSize: 14.5, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1,
                marginBottom: 4, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
              }}>{it.title}</div>
              <div style={{ display:'flex', alignItems:'center', gap: 8, fontFamily: P_FB, fontSize: 11.5, color: KUN.inkSoft, fontWeight: 400 }}>
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
  const base = [
    { id: 3, title: 'Cómo se ve tu bebé hoy',      dur: '3 min', when: 'Hace 2 días' },
    { id: 4, title: 'Entender los monitores',       dur: '5 min', when: 'Hace 5 días' },
    { id: 2, title: 'Método canguro: cómo empezar', dur: '6 min', when: 'La semana pasada' },
  ];
  const lib = window.CAP_LIBRARY || {};
  const capCatalog = window.CAPSULAS || [];
  const newItems = (completedCapsulas || []).map(id => {
    const cap = lib[id];
    if (!cap) return null;
    const catalogEntry = capCatalog.find(c => c.id === id);
    return {
      id,
      title: catalogEntry?.title || cap.headerTitle,
      dur: cap.dur.toLowerCase(),
      when: 'Hoy',
      quiz: quizResults?.[id],
    };
  }).filter(Boolean);
  const items = [...newItems, ...base.filter(b => !newItems.some(n => n.title === b.title))];
  return (
    <div style={{ margin: '24px 0 0' }}>
      <div style={{ padding: '0 28px 12px', display:'flex', alignItems:'flex-end', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontFamily: P_FT, fontSize: 19, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>
            Vuelve cuando quieras
          </div>
          <div style={{ fontFamily: P_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400, marginTop: 3 }}>
            Lo que ya viste, siempre disponible
          </div>
        </div>
        <span onClick={onGoToBiblio} style={{
          fontFamily: P_FT, fontSize: 12.5, color: KUN.brick, fontWeight: 700, cursor: 'pointer',
        }}>Ver todo →</span>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap: 10, padding: '0 20px' }}>
        {items.map((it, i) => (
          <div key={i} onClick={() => it.id && onOpenCapsula && onOpenCapsula(it.id)} style={{
            background: '#fff', borderRadius: 22, padding: '14px 16px',
            display:'flex', alignItems:'center', gap: 14,
            border: `1px solid ${KUN.hair}`, cursor: it.id ? 'pointer' : 'default',
          }}>
            <div style={{
              width: 46, height: 46, borderRadius: 14, background: KUN.apple,
              display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
            }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M3.5 8.2L6.5 11L12.5 4.8" stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{
                fontFamily: P_FT, fontSize: 14.5, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1,
                marginBottom: 4, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis',
              }}>{it.title}</div>
              <div style={{ display:'flex', alignItems:'center', gap: 8, fontFamily: P_FB, fontSize: 11.5, color: KUN.inkSoft, fontWeight: 400 }}>
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

function ScreenPersonalizado({ onOpenCapsula, completedCapsulas, quizResults, onGoToBiblio }) {
  return (
    <>
      <RecommendedHero onOpenCapsula={() => onOpenCapsula && onOpenCapsula(1)} />
      <HistorySection
        completedCapsulas={completedCapsulas}
        quizResults={quizResults}
        onOpenCapsula={onOpenCapsula}
        onGoToBiblio={onGoToBiblio}
      />
    </>
  );
}

window.ScreenPersonalizado = ScreenPersonalizado;
