// Biblioteca screen body — search + chips + expandable topics.

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
  const chips = ['Todo', 'Lactancia', 'Prematuridad', 'Equipos y monitores', 'Vínculo', 'Alta y hogar'];
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

function TopicRow({ icon, name, subtopics, defaultOpen }) {
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
            {subtopics ? `${subtopics.length} subtemas` : 'Tocar para ver más'}
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

      {open && subtopics && (
        <div style={{
          marginTop: 12, paddingTop: 12,
          borderTop: `1px dashed ${KUN.divider}`,
          display:'flex', flexDirection:'column', gap: 2,
        }}>
          {subtopics.map((s, i) => (
            <div key={i} style={{ display:'flex', alignItems:'center', gap: 12, padding: '10px 4px', cursor:'pointer' }}>
              <div style={{ width: 6, height: 6, borderRadius:'50%', background: KUN.accent, flexShrink: 0 }}/>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: KUN.ink, letterSpacing: -0.1 }}>{s.title}</div>
                <div style={{ fontSize: 11.5, color: KUN.inkMuted, fontWeight: 600, marginTop: 1 }}>{s.meta}</div>
              </div>
              {KIcon.chevRight(KUN.inkFaint)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function TopicList() {
  const topics = [
    { icon: KIcon.cat.breast, name:'Lactancia', defaultOpen: true,
      subtopics: [
        { title:'Producción de leche',  meta:'4 cápsulas · 18 min' },
        { title:'Lactancia con sonda',  meta:'3 cápsulas · 12 min' },
      ],
    },
    { icon: KIcon.cat.ecmo, name:'ECMO',
      subtopics: [
        { title:'Qué es la ECMO',           meta:'2 cápsulas · 8 min'  },
        { title:'Acompañar durante la ECMO', meta:'3 cápsulas · 14 min' },
      ],
    },
    { icon: KIcon.cat.prem, name:'Prematuridad',
      subtopics: [
        { title:'Etapas del desarrollo',  meta:'3 cápsulas · 12 min' },
        { title:'Cuidados al alta',       meta:'4 cápsulas · 16 min' },
      ],
    },
    { icon: KIcon.cat.kang, name:'Método canguro', defaultOpen: true,
      subtopics: [
        { title:'Primeros pasos',     meta:'2 cápsulas · 10 min' },
        { title:'Posición correcta',  meta:'1 cápsula · 4 min'   },
      ],
    },
  ];
  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding: '0 8px 10px' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: KUN.inkMuted, letterSpacing: 0.6 }}>18 TEMAS</div>
        <div style={{ fontSize: 12, fontWeight: 700, color: KUN.accent, display:'flex', alignItems:'center', gap: 4 }}>
          Ordenar {KIcon.chevDown(KUN.accent)}
        </div>
      </div>
      {topics.map((t, i) => <TopicRow key={i} {...t} />)}
    </div>
  );
}

function ScreenBiblioteca() {
  return (
    <>
      <SearchField />
      <CategoryChips />
      <TopicList />
    </>
  );
}

window.ScreenBiblioteca = ScreenBiblioteca;
