// Home screen body — used inside unified prototype (no device wrapper).

function HomeGreeting() {
  return (
    <div style={{ padding: '14px 24px 8px' }}>
      <div style={{ fontSize: 15, color: KUN.inkSoft, fontWeight: 500, marginBottom: 4 }}>
        Buenos días, Mateo
      </div>
      <div style={{ fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.4, lineHeight: 1.15 }}>
        Sigamos juntos hoy.
      </div>
    </div>
  );
}

function BabyCard() {
  return (
    <div style={{
      margin: '14px 20px 0', padding: '22px 22px',
      background: KUN.card, borderRadius: 32,
      boxShadow: '0 1px 2px rgba(46,42,38,0.03), 0 8px 24px rgba(46,42,38,0.05)',
      display:'flex', alignItems:'center', gap: 18,
      position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', top: -30, right: -30,
        width: 130, height: 130, borderRadius:'50%',
        background: KUN.accentSoft, opacity: 0.5,
      }}/>
      <div style={{
        width: 84, height: 84, borderRadius: '50%',
        border: `3px solid #fff`,
        boxShadow: `0 0 0 2px ${KUN.accentSoft}`,
        flexShrink: 0, position:'relative', zIndex: 1,
        overflow: 'hidden',
      }}>
        <img src="premature.jpg" alt="Sofía"
          style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 30%' }} />
      </div>

      <div style={{ flex: 1, position:'relative', zIndex: 1 }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3, marginBottom: 6 }}>Sofía</div>
        <div style={{ display:'flex', flexDirection:'column', gap: 3 }}>
          <div style={{ fontSize: 14, color: KUN.inkSoft, fontWeight: 500 }}>
            <span style={{ color: KUN.accentDeep, fontWeight: 700 }}>32 días</span> hospitalizada
          </div>
          <div style={{ fontSize: 14, color: KUN.inkSoft, fontWeight: 500 }}>
            Peso actual <span style={{ color: KUN.ink, fontWeight: 700 }}>2,1 kg</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function NurseCard() {
  return (
    <div style={{
      margin: '12px 20px 0', padding: '14px 18px',
      background: KUN.sageSoft, borderRadius: 24,
      display:'flex', alignItems:'center', gap: 14,
    }}>
      <div style={{
        width: 46, height: 46, borderRadius: 23, background: '#fff',
        flexShrink: 0, overflow: 'hidden',
        boxShadow: `0 0 0 2px ${KUN.sageSoft}`,
      }}>
        <picture>
          <source srcSet="tens.avif" type="image/avif" />
          <img src="tens2.webp" alt="Valentina Rojas"
            style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center 15%' }} />
        </picture>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 12, color: KUN.inkSoft, fontWeight: 600, marginBottom: 2, letterSpacing: 0.2 }}>
          Enfermera de turno
        </div>
        <div style={{ fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>
          Valentina Rojas
        </div>
      </div>
      <div style={{
        padding: '6px 12px', borderRadius: 999, background: '#fff',
        fontSize: 12, fontWeight: 700, color: KUN.sage,
        display:'flex', alignItems:'center', gap: 5,
      }}>
        <span style={{ width: 7, height: 7, borderRadius:'50%', background: KUN.sage }}/>
        En turno
      </div>
    </div>
  );
}

function HomeSectionHeader({ title, onAction }) {
  return (
    <div style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', padding: '24px 28px 12px' }}>
      <div>
        <div style={{ fontSize: 19, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2 }}>{title}</div>
        <div style={{ fontSize: 13, color: KUN.inkMuted, fontWeight: 500, marginTop: 2 }}>
          Pensadas para ti, en este momento
        </div>
      </div>
      <span onClick={onAction} style={{ fontSize: 13, color: KUN.accent, fontWeight: 700, cursor:'pointer' }}>
        Ver todas
      </span>
    </div>
  );
}

function CapsuleCard({ tag, tagKind, title, desc, mins, illoBg, illoEmoji, onClick }) {
  const tagBg = tagKind === 'new' ? KUN.accent : KUN.sageSoft;
  const tagColor = tagKind === 'new' ? '#fff' : KUN.sage;
  return (
    <div onClick={onClick} style={{
      margin: '0 20px 12px', background: KUN.card, borderRadius: 28, padding: 16,
      boxShadow: '0 1px 2px rgba(46,42,38,0.03), 0 6px 18px rgba(46,42,38,0.04)',
      display:'flex', gap: 14, alignItems:'stretch', cursor: 'pointer',
    }}>
      <div style={{
        width: 78, borderRadius: 20, background: illoBg,
        display:'flex', alignItems:'center', justifyContent:'center',
        flexShrink: 0, position:'relative', overflow:'hidden',
      }}>{illoEmoji}</div>

      <div style={{ flex: 1, display:'flex', flexDirection:'column', justifyContent:'space-between', minWidth: 0 }}>
        <div>
          <div style={{
            display:'inline-flex', alignItems:'center', gap: 4,
            padding: '4px 9px', borderRadius: 999,
            background: tagBg, color: tagColor,
            fontSize: 11, fontWeight: 700, letterSpacing: 0.2, marginBottom: 8,
          }}>
            {tagKind === 'new' && KIcon.spark('#fff')}
            {tag}
          </div>
          <div style={{
            fontSize: 15.5, fontWeight: 700, color: KUN.ink,
            letterSpacing: -0.2, lineHeight: 1.25, marginBottom: 4, textWrap:'pretty',
          }}>{title}</div>
          <div style={{ fontSize: 13, color: KUN.inkSoft, fontWeight: 500, lineHeight: 1.4, textWrap:'pretty' }}>
            {desc}
          </div>
        </div>
        <div style={{ marginTop: 8, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontSize: 12, color: KUN.inkMuted, fontWeight: 600 }}>{mins}</span>
          {KIcon.arrow(KUN.accent)}
        </div>
      </div>
    </div>
  );
}

function IlloKangaroo() {
  return (
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none">
      <circle cx="29" cy="29" r="22" fill="#fff" opacity="0.55"/>
      <path d="M19 38 C 19 30, 22 25, 27 23 C 26 21, 27 18.5, 29.5 18 C 32 17.5, 34 19.5, 33.5 22 C 36.5 23, 39 26, 39 30 C 39 34, 36 37, 32 38"
        stroke={KUN.accentDeep} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <ellipse cx="28" cy="32" rx="5" ry="4" fill={KUN.accent} opacity="0.85"/>
      <circle cx="26.5" cy="31" r="0.9" fill="#fff"/>
    </svg>
  );
}
function IlloDrop() {
  return (
    <svg width="50" height="58" viewBox="0 0 50 58" fill="none">
      <path d="M25 8 C 32 18, 38 26, 38 35 C 38 42, 32 47, 25 47 C 18 47, 12 42, 12 35 C 12 26, 18 18, 25 8 Z" fill={KUN.sage} opacity="0.85"/>
      <ellipse cx="21" cy="32" rx="3" ry="5" fill="#fff" opacity="0.6"/>
    </svg>
  );
}

function ScreenHome({ onGoToEdu, onGoToCapsula }) {
  return (
    <>
      <HomeGreeting />
      <BabyCard />
      <NurseCard />
      <HomeSectionHeader title="Cápsulas para ti" onAction={onGoToEdu}/>
      <CapsuleCard
        tagKind="new" tag="NUEVO"
        title="Tu bebé empezó a alimentarse por sonda"
        desc="Qué esperar estos días y cómo acompañar a Sofía en esta etapa."
        mins="4 min de lectura"
        illoBg={KUN.sageSoft} illoEmoji={<IlloDrop />}
        onClick={() => onGoToCapsula ? onGoToCapsula(1) : onGoToEdu()}
      />
      <CapsuleCard
        tagKind="rec" tag="RECOMENDADO PARA TI"
        title="Método canguro: cómo empezar"
        desc="Una guía cálida para tu primer contacto piel con piel con Sofía."
        mins="6 min de lectura"
        illoBg={KUN.accentSoft} illoEmoji={<IlloKangaroo />}
        onClick={() => onGoToCapsula ? onGoToCapsula(2) : onGoToEdu()}
      />
    </>
  );
}

window.ScreenHome = ScreenHome;
