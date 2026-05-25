// Biblioteca screen body — search + chips + expandable topics. KUN DS v2 applied.
// 10 cápsulas organizadas en 7 temas.

const B_FT = 'Quicksand, sans-serif';
const B_FB = 'Poppins, sans-serif';

// Catálogo compartido de las cápsulas. El personal de salud puede reemplazarlo
// desde el editor clínico guardado en localStorage.
const DEFAULT_CAPSULAS = [
  { id: 1,  title: 'El apego en la UCIN',               dur: '5 min',  topic: 'Apego y vínculo' },
  { id: 2,  title: 'Sonda al dedo',                     dur: '5 min',  topic: 'Alimentación' },
  { id: 3,  title: 'Sonda al pecho',                    dur: '5 min',  topic: 'Alimentación' },
  { id: 4,  title: 'Extracción de leche',               dur: '5 min',  topic: 'Lactancia' },
  { id: 5,  title: 'Conservación de leche',             dur: '4 min',  topic: 'Lactancia' },
  { id: 6,  title: 'Lactancia materna',                 dur: '5 min',  topic: 'Lactancia' },
  { id: 7,  title: 'El enlulamiento',                   dur: '4 min',  topic: 'Alta y hogar' },
  { id: 8,  title: 'Masaje anticólico',                 dur: '5 min',  topic: 'Alta y hogar' },
  { id: 9,  title: 'Porteo seguro',                     dur: '5 min',  topic: 'Alta y hogar' },
  { id: 10, title: 'Screening auditivo',                dur: '4 min',  topic: 'Alta y hogar' },
  { id: 60, title: 'Maniobra de Heimlich',              dur: '5 min',  topic: 'Primeros auxilios' },
  { id: 61, title: 'Traslado seguro en auto',           dur: '5 min',  topic: 'Alta y hogar' },
  { id: 11, title: 'Conocer la unidad neonatal',               dur: '3 min',  topic: 'Cuidados por etapa' },
  { id: 12, title: 'Horarios de visita y a quién preguntar',   dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 13, title: 'Ley Mila y acompañamiento familiar',       dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 14, title: 'Lavado de manos y normas de ingreso',      dur: '3 min',  topic: 'Cuidados por etapa' },
  { id: 15, title: 'Primeros equipos que verás',               dur: '5 min',  topic: 'Cuidados por etapa' },
  { id: 21, title: 'Qué significa estar en UCI neonatal',      dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 22, title: 'Monitores, alarmas y tubos',               dur: '5 min',  topic: 'Cuidados por etapa' },
  { id: 23, title: 'Cómo tocar y acompañar con seguridad',     dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 24, title: 'Preguntas clave para la visita médica',    dur: '3 min',  topic: 'Cuidados por etapa' },
  { id: 25, title: 'Pequeñas señales de avance',               dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 31, title: 'Qué cambia en Intermedio A',               dur: '3 min',  topic: 'Cuidados por etapa' },
  { id: 32, title: 'Muda y aseo con apoyo',                    dur: '5 min',  topic: 'Cuidados por etapa' },
  { id: 33, title: 'Piel con piel cuando está indicado',       dur: '5 min',  topic: 'Cuidados por etapa' },
  { id: 34, title: 'Primeras señales de hambre y cansancio',   dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 35, title: 'Alimentación paso a paso',                 dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 41, title: 'Qué practicar antes del alta',             dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 42, title: 'Mamadera, pecho y ritmos de alimentación', dur: '5 min',  topic: 'Cuidados por etapa' },
  { id: 43, title: 'Medicamentos e indicaciones',              dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 44, title: 'Sueño seguro desde el hospital',           dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 45, title: 'Checklist familiar de alta',               dur: '5 min',  topic: 'Cuidados por etapa' },
  { id: 51, title: 'Primeros días en casa',                    dur: '4 min',  topic: 'Cuidados por etapa' },
  { id: 52, title: 'Controles y seguimiento',                  dur: '3 min',  topic: 'Cuidados por etapa' },
  { id: 53, title: 'Signos de alarma',                         dur: '5 min',  topic: 'Cuidados por etapa' },
  { id: 54, title: 'Rutina de alimentación y medicamentos',    dur: '5 min',  topic: 'Cuidados por etapa' },
  { id: 55, title: 'Cuidar también a la familia',              dur: '4 min',  topic: 'Cuidados por etapa' },
];

const CAPSULAS = (() => {
  try {
    const stored = JSON.parse(localStorage.getItem('kun_staff_capsules_v2') || 'null');
    return Array.isArray(stored) && stored.length
      ? stored.map(c => ({ id: c.id, title: c.title, dur: c.dur || '4 min', topic: c.topic || 'Prematuridad' }))
      : DEFAULT_CAPSULAS;
  } catch {
    return DEFAULT_CAPSULAS;
  }
})();

window.CAPSULAS = CAPSULAS;

// Color por tema — usa la paleta DS (un color distinto por categoría)
const TOPIC_COLOR = {
  'Apego y vínculo':    KUN.rosehip,
  'Alimentación':       KUN.sun,
  'Lactancia':          KUN.apple,
  'Alta y hogar':       KUN.sageSoft,
  'Primeros auxilios':  KUN.viola,
  'Cuidados por etapa': KUN.clear,
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
  const chips = ['Todo', 'Apego y vínculo', 'Alimentación', 'Lactancia', 'Alta y hogar', 'Primeros auxilios', 'Cuidados por etapa'];
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

function CapsuleItem({ cap, onOpenCapsula, completed }) {
  return (
    <div onClick={() => onOpenCapsula && onOpenCapsula(cap.id)}
      style={{ display:'flex', alignItems:'center', gap: 12, padding: '10px 4px', cursor:'pointer' }}>
      <div style={{
        width: completed ? 18 : 6, height: completed ? 18 : 6, borderRadius:'50%',
        background: completed ? KUN.apple : KUN.brick, flexShrink: 0,
        display:'flex', alignItems:'center', justifyContent:'center',
      }}>
        {completed && KIcon.check(KUN.ink)}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: B_FT, fontSize: 14, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>{cap.title}</div>
        {completed && (
          <div style={{ fontFamily: B_FT, fontSize: 10.5, color: KUN.brick, fontWeight: 700, marginTop: 3, letterSpacing: 0.4, textTransform: 'uppercase' }}>
            Completada
          </div>
        )}
        <div style={{ fontFamily: B_FB, fontSize: 11.5, color: KUN.inkSoft, fontWeight: 400, marginTop: 2 }}>{cap.dur} · lectura</div>
      </div>
      {KIcon.chevRight(KUN.inkFaint)}
    </div>
  );
}

function TopicRow({ icon, name, caps, defaultOpen, onOpenCapsula, completedCapsulas }) {
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
          {caps.map(cap => (
            <CapsuleItem
              key={cap.id}
              cap={cap}
              onOpenCapsula={onOpenCapsula}
              completed={(completedCapsulas || []).includes(cap.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function TopicList({ onOpenCapsula, activeCategory, completedCapsulas }) {
  const byTopic = (topicName) => CAPSULAS.filter(c => c.topic === topicName);

  const allTopics = [
    { icon: KIcon.cat.kang,   name: 'Apego y vínculo',    caps: byTopic('Apego y vínculo') },
    { icon: KIcon.cat.breast, name: 'Alimentación',        caps: byTopic('Alimentación') },
    { icon: KIcon.cat.breast, name: 'Lactancia',           caps: byTopic('Lactancia') },
    { icon: KIcon.cat.prem,   name: 'Alta y hogar',        caps: byTopic('Alta y hogar') },
    { icon: KIcon.cat.ecmo,   name: 'Primeros auxilios',   caps: byTopic('Primeros auxilios') },
    { icon: KIcon.cat.kang,   name: 'Cuidados por etapa',  caps: byTopic('Cuidados por etapa') },
  ];

  // Sólo mostrar categorías que tienen cápsulas; filtrar por chip si aplica
  const topics = allTopics.filter(t =>
    t.caps.length > 0 &&
    (!activeCategory || activeCategory === 'Todo' || t.name === activeCategory)
  );

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
        <TopicRow
          key={t.name + '-' + activeCategory}
          {...t}
          defaultOpen={activeCategory !== 'Todo'}
          onOpenCapsula={onOpenCapsula}
          completedCapsulas={completedCapsulas}
        />
      ))}
    </div>
  );
}

function ScreenBiblioteca({ onOpenCapsula, completedCapsulas }) {
  const [activeCategory, setActiveCategory] = React.useState('Todo');
  return (
    <>
      <SearchField />
      <CategoryChips active={activeCategory} onChange={setActiveCategory} />
      <TopicList onOpenCapsula={onOpenCapsula} activeCategory={activeCategory} completedCapsulas={completedCapsulas} />
    </>
  );
}

window.ScreenBiblioteca = ScreenBiblioteca;
