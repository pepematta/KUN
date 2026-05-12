// Biblioteca screen body — search + chips + expandable topics. KUN DS v2 applied.
// 10 cápsulas organizadas en 7 temas.

const B_FT = 'Quicksand, sans-serif';
const B_FB = 'Poppins, sans-serif';

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

window.CAPSULAS = CAPSULAS;

// Color por tema — usa la paleta DS
const TOPIC_COLOR = {
  'Alimentación por sonda': KUN.sun,
  'Lactancia':              KUN.apple,
  'Prematuridad':           KUN.rosehip,
  'Equipos y monitores':    KUN.clear,
  'Método canguro':         KUN.viola,
  'ECMO':                   KUN.clear,
  'Alta y hogar':           KUN.apple,
};

function SearchField() {
  return (
    <div style={{ padding:'4px 20px 12px' }}>
      <div style={{
        background:'#fff', borderRadius: 16, padding: '12px 16px',
        display:'flex', alignItems:'center', gap: 10,
        border: `1.5px solid ${KUN.hair}`,
      }}>
        {KIcon.search(KUN.inkMuted)}
        <span style={{
          fontFamily: B_FB, fontSize: 14, color: KUN.inkMuted, fontWeight: 400, letterSpacing: 0.1,
        }}>
          Buscar cápsulas…
        </span>
      </div>
    </div>
  );
}

function CategoryChips({ active, onChange }) {
  const chips = ['Todo', 'Lactancia', 'Prematuridad', 'Método canguro', 'ECMO', 'Alta y hogar'];
  return (
    <div style={{
      display:'flex', gap: 8, padding: '0 20px 18px',
      overflowX:'auto', scrollbarWidth:'none',
    }}>
      {chips.map((c) => {
        const isA = c === active;
        return (
          <div key={c}
            onClick={() => onChange(c)}
            style={{
              flexShrink: 0, cursor:'pointer',
              padding: '9px 16px', borderRadius: 999,
              background: isA ? KUN.ink : '#fff',
              color: isA ? '#fff' : KUN.inkSoft,
              fontFamily: B_FT, fontSize: 13, fontWeight: 700, letterSpacing: 0.1,
              border: isA ? 'none' : `1px solid ${KUN.hair}`,
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
      <div style={{ width: 6, height: 6, borderRadius:'50%', background: KUN.brick, flexShrink: 0 }}/>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: B_FT, fontSize: 14, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>{cap.title}</div>
        <div style={{ fontFamily: B_FB, fontSize: 11.5, color: KUN.inkSoft, fontWeight: 400, marginTop: 2 }}>{cap.dur} · lectura</div>
      </div>
      {KIcon.chevRight(KUN.inkFaint)}
    </div>
  );
}

function TopicRow({ icon, name, caps, defaultOpen, onOpenCapsula }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  const tone = TOPIC_COLOR[name] || KUN.rosehip;
  return (
    <div style={{
      background: '#fff', borderRadius: 22, padding: '14px 16px', marginBottom: 10,
      border: `1px solid ${KUN.hair}`,
    }}>
      <div onClick={() => setOpen(o => !o)} style={{
        display:'flex', alignItems:'center', gap: 14, cursor:'pointer',
      }}>
        <div style={{
          width: 44, height: 44, borderRadius: 14,
          background: tone,
          display:'flex', alignItems:'center', justifyContent:'center',
          flexShrink: 0, transition:'background .2s',
        }}>
          {icon(KUN.ink)}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: B_FT, fontSize: 15.5, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>{name}</div>
          <div style={{ fontFamily: B_FB, fontSize: 12, color: KUN.inkSoft, fontWeight: 400, marginTop: 2 }}>
            {caps.length === 1 ? '1 cápsula' : `${caps.length} cápsulas`}
          </div>
        </div>
        <div style={{
          width: 32, height: 32, borderRadius:'50%',
          background: open ? KUN.brick : KUN.cream,
          border: open ? 'none' : `1px solid ${KUN.hair}`,
          display:'flex', alignItems:'center', justifyContent:'center',
          transition:'all .2s',
        }}>
          {open ? KIcon.chevDown('#fff') : KIcon.chevRight(KUN.brick)}
        </div>
      </div>

      {open && (
        <div style={{
          marginTop: 12, paddingTop: 12,
          borderTop: `1px dashed ${KUN.hair}`,
          display:'flex', flexDirection:'column', gap: 2,
        }}>
          {caps.map(cap => <CapsuleItem key={cap.id} cap={cap} onOpenCapsula={onOpenCapsula} />)}
        </div>
      )}
    </div>
  );
}

function TopicList({ onOpenCapsula, activeCategory }) {
  const byTopic = (topicName) => CAPSULAS.filter(c => c.topic === topicName);

  const allTopics = [
    { icon: KIcon.cat.breast,  name: 'Alimentación por sonda', caps: byTopic('Alimentación por sonda'), defaultOpen: true },
    { icon: KIcon.cat.breast,  name: 'Lactancia',              caps: byTopic('Lactancia') },
    { icon: KIcon.cat.prem,    name: 'Prematuridad',           caps: byTopic('Prematuridad') },
    { icon: KIcon.cat.ecmo,    name: 'Equipos y monitores',    caps: byTopic('Equipos y monitores') },
    { icon: KIcon.cat.kang,    name: 'Método canguro',         caps: byTopic('Método canguro') },
    { icon: KIcon.cat.ecmo,    name: 'ECMO',                   caps: byTopic('ECMO') },
    { icon: KIcon.cat.prem,    name: 'Alta y hogar',           caps: byTopic('Alta y hogar') },
  ];

  const chipToTopic = {
    'Lactancia': ['Lactancia', 'Alimentación por sonda'],
    'Prematuridad': ['Prematuridad'],
    'Método canguro': ['Método canguro'],
    'ECMO': ['ECMO', 'Equipos y monitores'],
    'Alta y hogar': ['Alta y hogar'],
  };

  const topics = (!activeCategory || activeCategory === 'Todo')
    ? allTopics
    : allTopics.filter(t => (chipToTopic[activeCategory] || []).includes(t.name));

  const totalCaps = topics.reduce((sum, t) => sum + t.caps.length, 0);

  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: '0 8px 10px' }}>
        <div style={{
          fontFamily: B_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted,
          letterSpacing: 1, textTransform:'uppercase',
        }}>
          {totalCaps} cápsula{totalCaps !== 1 ? 's' : ''}
        </div>
        <div style={{ fontFamily: B_FT, fontSize: 12.5, fontWeight: 700, color: KUN.brick, display:'flex', alignItems:'center', gap: 4 }}>
          Ordenar {KIcon.chevDown(KUN.brick)}
        </div>
      </div>
      {topics.map((t, i) => (
        <TopicRow key={t.name} {...t} defaultOpen={activeCategory !== 'Todo' || i === 0} onOpenCapsula={onOpenCapsula} />
      ))}
    </div>
  );
}

function ScreenBiblioteca({ onOpenCapsula }) {
  const [activeCategory, setActiveCategory] = React.useState('Todo');
  return (
    <>
      <SearchField />
      <CategoryChips active={activeCategory} onChange={setActiveCategory} />
      <TopicList onOpenCapsula={onOpenCapsula} activeCategory={activeCategory} />
    </>
  );
}

window.ScreenBiblioteca = ScreenBiblioteca;
