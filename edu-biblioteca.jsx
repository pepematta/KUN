// Biblioteca screen body — search + chips + expandable topics.
// 10 cápsulas organizadas en 7 temas.

// Catálogo compartido de las 10 cápsulas
const CAPSULAS = [
  { id: 1,  title: 'Tu bebé empezó a alimentarse por sonda', dur: '4 min',  topic: 'Alimentación por sonda' },
  { id: 2,  title: 'Método canguro: cómo empezar',           dur: '6 min',  topic: 'Método canguro' },
  { id: 3,  title: 'Cómo se ve tu bebé hoy',                 dur: '3 min',  topic: 'Prematuridad' },
  { id: 4,  title: 'Entender los monitores',                  dur: '5 min',  topic: 'Equipos y monitores' },
  { id: 5,  title: 'Posición correcta en el canguro',         dur: '4 min',  topic: 'Método canguro' },
  { id: 6,  title: 'Producción de leche materna',             dur: '5 min',  topic: 'Lactancia' },
  { id: 7,  title: 'Lactancia con sonda',                     dur: '4 min',  topic: 'Lactancia' },
  { id: 8,  title: 'Etapas del desarrollo prematuro',         dur: '5 min',  topic: 'Prematuridad' },
  { id: 9,  title: 'Qué es la ECMO',                          dur: '4 min',  topic: 'ECMO' },
  { id: 10, title: 'Cuidados al alta',                        dur: '6 min',  topic: 'Alta y hogar' },
];

// Expose catalog globally for other screens
window.CAPSULAS = CAPSULAS;

function SearchField() {
  return (
    <div style={{ padding:'4px 20px 12px' }}>
      <div style={{
        background:'#fff', borderRadius: 18, padding: '13px 16px',
        display:'flex', alignItems:'center', gap: 10,
        boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
      }}>
        {KIcon.search(KUN.inkMuted)}
        <span style={{ fontSize: 14.5, color: KUN.inkMuted, fontWeight: 500, letterSpacing: -0.1 }}>
          Buscar cápsulas…
        </span>
      </div>
    </div>
  );
}

function CategoryChips() {
  const [active, setActive] = React.useState(0);
  const chips = ['Todo', 'Lactancia', 'Prematuridad', 'Método canguro', 'ECMO', 'Alta y hogar'];
  return (
    <div style={{
      display:'flex', gap: 8, padding: '0 20px 18px',
      overflowX:'auto', scrollbarWidth:'none',
    }}>
      {chips.map((c, i) => {
        const isA = i === active;
        return (
          <div key={c}
            onClick={() => setActive(i)}
            style={{
              flexShrink: 0, cursor:'pointer',
              padding: '9px 16px', borderRadius: 999,
              background: isA ? KUN.ink : '#fff',
              color: isA ? '#fff' : KUN.inkSoft,
              fontSize: 13, fontWeight: 700, letterSpacing: -0.1,
              boxShadow: isA ? 'none' : '0 1px 2px rgba(46,42,38,0.03)',
              border: isA ? 'none' : `1px solid rgba(46,42,38,0.05)`,
              transition:'all .2s',
          }}>{c}</div>
        );
      })}
    </div>
  );
}

function CapsuleItem({ cap, onOpenCapsula }) {
  return (
    <div onClick={() => onOpenCapsula && onOpenCapsula(cap.id)}
      style={{ display:'flex', alignItems:'center', gap: 12, padding: '10px 4px', cursor:'pointer' }}>
      <div style={{ width: 6, height: 6, borderRadius:'50%', background: KUN.accent, flexShrink: 0 }}/>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: KUN.ink, letterSpacing: -0.1 }}>{cap.title}</div>
        <div style={{ fontSize: 11.5, color: KUN.inkMuted, fontWeight: 600, marginTop: 1 }}>{cap.dur} · lectura</div>
      </div>
      {KIcon.chevRight(KUN.inkFaint)}
    </div>
  );
}

function TopicRow({ icon, name, caps, defaultOpen, onOpenCapsula }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return (
    <div style={{
      background: '#fff', borderRadius: 22, padding: '14px 16px', marginBottom: 10,
      boxShadow: '0 1px 2px rgba(46,42,38,0.03)',
    }}>
      <div onClick={() => setOpen(o => !o)} style={{
        display:'flex', alignItems:'center', gap: 14, cursor:'pointer',
      }}>
        <div style={{
          width: 42, height: 42, borderRadius: 14,
          background: open ? KUN.accentSoft : KUN.cardSoft,
          display:'flex', alignItems:'center', justifyContent:'center',
          flexShrink: 0, transition:'background .2s',
        }}>
          {icon(open ? KUN.accentDeep : KUN.inkSoft)}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 15.5, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>{name}</div>
          <div style={{ fontSize: 12, color: KUN.inkMuted, fontWeight: 600, marginTop: 2 }}>
            {caps.length === 1 ? '1 cápsula' : `${caps.length} cápsulas`}
          </div>
        </div>
        <div style={{
          width: 30, height: 30, borderRadius:'50%',
          background: open ? KUN.accent : 'transparent',
          display:'flex', alignItems:'center', justifyContent:'center',
          transition:'all .2s',
        }}>
          {open ? KIcon.chevDown('#fff') : KIcon.chevRight(KUN.inkSoft)}
        </div>
      </div>

      {open && (
        <div style={{
          marginTop: 12, paddingTop: 12,
          borderTop: `1px dashed ${KUN.divider}`,
          display:'flex', flexDirection:'column', gap: 2,
        }}>
          {caps.map(cap => <CapsuleItem key={cap.id} cap={cap} onOpenCapsula={onOpenCapsula} />)}
        </div>
      )}
    </div>
  );
}

function TopicList({ onOpenCapsula }) {
  const byTopic = (topicName) => CAPSULAS.filter(c => c.topic === topicName);

  const topics = [
    { icon: KIcon.cat.breast,  name: 'Alimentación por sonda', caps: byTopic('Alimentación por sonda') },
    { icon: KIcon.cat.breast,  name: 'Lactancia',              caps: byTopic('Lactancia') },
    { icon: KIcon.cat.prem,    name: 'Prematuridad',           caps: byTopic('Prematuridad') },
    { icon: KIcon.cat.ecmo,    name: 'Equipos y monitores',    caps: byTopic('Equipos y monitores') },
    { icon: KIcon.cat.kang,    name: 'Método canguro',         caps: byTopic('Método canguro') },
    { icon: KIcon.cat.ecmo,    name: 'ECMO',                   caps: byTopic('ECMO') },
    { icon: KIcon.cat.prem,    name: 'Alta y hogar',           caps: byTopic('Alta y hogar') },
  ];

  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: '0 8px 10px' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 0.6 }}>10 CÁPSULAS</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: KUN.accent, display:'flex', alignItems:'center', gap: 4 }}>
          Ordenar {KIcon.chevDown(KUN.accent)}
        </div>
      </div>
      {topics.map((t, i) => <TopicRow key={i} {...t} onOpenCapsula={onOpenCapsula} />)}
    </div>
  );
}

function ScreenBiblioteca({ onOpenCapsula }) {
  return (
    <>
      <SearchField />
      <CategoryChips />
      <TopicList onOpenCapsula={onOpenCapsula} />
    </>
  );
}

window.ScreenBiblioteca = ScreenBiblioteca;
