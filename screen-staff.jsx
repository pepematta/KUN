// Staff version — clinical editor for the parent-facing KUN prototype.
// Exposes: ScreenStaffApp()

const STAFF_FT = 'Quicksand, sans-serif';
const STAFF_FB = 'Poppins, sans-serif';

const STAFF_INITIAL_BABIES = [
  { id: 'c1', slot: 1, occupied: true, babyName: 'Sofia', sex: 'f', parentName: 'Mariana', parent2Name: 'Diego', rut: '12.345.678-9', condition: 'Prematura extrema, estable en incubadora', devices: ['Sonda orogastrica', 'CPAP'], weight: '2,1 kg', weeks: '34+2', traits: ['Prematuridad', 'Lactancia', 'Alimentacion por sonda'], recommended: [1, 2] },
  { id: 'c2', slot: 2, occupied: true, babyName: 'Tomas', sex: 'm', parentName: 'Pedro', parent2Name: 'Ana', rut: '11.222.333-4', condition: 'Postoperatorio cardiaco, vigilancia estrecha', devices: ['Ventilacion mecanica', 'Via central'], weight: '1,8 kg', weeks: '32+5', traits: ['Equipos y monitores', 'Prematuridad'], recommended: [4] },
  { id: 'c3', slot: 3, occupied: true, babyName: 'Emilia', sex: 'f', parentName: 'Carla', parent2Name: 'Ignacio', rut: '10.555.888-1', condition: 'Soporte ECMO, sedacion y monitorizacion continua', devices: ['ECMO', 'Ventilacion mecanica', 'Via arterial'], weight: '3,0 kg', weeks: '38+1', traits: ['ECMO', 'Equipos y monitores'], recommended: [9, 4] },
  ...Array.from({ length: 5 }, (_, i) => ({ id: `empty-${i + 4}`, slot: i + 4, occupied: false, babyName: '', sex: 'm', parentName: '', parent2Name: '', rut: '', condition: '', devices: [], weight: '', weeks: '', traits: [], recommended: [] })),
];

const STAFF_INITIAL_LACTARIO = [
  { time: '7:00 AM', mother: 'Mariana', baby: 'Sofia', status: 'reservado' },
  { time: '8:00 AM', mother: 'Carla', baby: 'Emilia', status: 'reservado' },
  { time: '9:00 AM', mother: '', baby: '', status: 'libre' },
  { time: '10:00 AM', mother: 'Paula', baby: 'Agustin', status: 'reservado' },
  { time: '11:00 AM', mother: '', baby: '', status: 'libre' },
  { time: '12:00 PM', mother: '', baby: '', status: 'libre' },
  { time: '3:00 PM', mother: 'Mariana', baby: 'Sofia', status: 'reservado' },
  { time: '4:00 PM', mother: '', baby: '', status: 'libre' },
];

const STAFF_INITIAL_CAPSULES = [
  { id: 1, title: 'Tu bebe empezo a alimentarse por sonda', topic: 'Alimentacion por sonda', dur: '4 min', status: 'publicada', text: 'Explica que es una sonda y como acompanar este proceso.', instructions: 'Revisar antes de primera alimentacion enteral.', media: '', quiz: 'La sonda ayuda a alimentar cuando el bebe aun no succiona.' },
  { id: 2, title: 'Metodo canguro: como empezar', topic: 'Metodo canguro', dur: '6 min', status: 'publicada', text: 'Guia para iniciar contacto piel con piel.', instructions: 'Validar estabilidad con enfermeria.', media: '', quiz: 'El metodo canguro puede hacerlo mama o papa.' },
  { id: 3, title: 'Como se ve tu bebe hoy', topic: 'Prematuridad', dur: '3 min', status: 'publicada', text: 'Ayuda a la familia a reconocer cambios normales en el aspecto del bebe hospitalizado.', instructions: 'Usar como apoyo para explicar edema, coloracion y postura.', media: '', quiz: 'Los cambios del aspecto pueden ser parte de la evolucion esperada.' },
  { id: 4, title: 'Entender los monitores', topic: 'Equipos y monitores', dur: '5 min', status: 'publicada', text: 'Describe saturacion, frecuencia cardiaca y alarmas.', instructions: 'No manipular sensores sin equipo clinico.', media: '', quiz: 'No todas las alarmas significan urgencia.' },
  { id: 5, title: 'Posicion correcta en el canguro', topic: 'Metodo canguro', dur: '4 min', status: 'publicada', text: 'Explica postura segura para realizar metodo canguro.', instructions: 'Validar estabilidad antes de iniciar contacto piel con piel.', media: '', quiz: 'La posicion debe permitir respirar comodo y estar contenido.' },
  { id: 6, title: 'Produccion de leche materna', topic: 'Lactancia', dur: '5 min', status: 'publicada', text: 'Consejos basicos para apoyar la produccion de leche durante la hospitalizacion.', instructions: 'Reforzar extraccion frecuente e hidratacion segun indicacion local.', media: '', quiz: 'La extraccion regular ayuda a mantener la produccion.' },
  { id: 7, title: 'Lactancia con sonda', topic: 'Lactancia', dur: '4 min', status: 'publicada', text: 'Explica como la alimentacion por sonda puede convivir con el avance hacia lactancia.', instructions: 'Ajustar segun tolerancia enteral y plan clinico.', media: '', quiz: 'La sonda puede ser una etapa temporal de apoyo.' },
  { id: 8, title: 'Etapas del desarrollo prematuro', topic: 'Prematuridad', dur: '5 min', status: 'publicada', text: 'Describe hitos y ritmos esperables en bebes prematuros.', instructions: 'Usar edad corregida para orientar expectativas familiares.', media: '', quiz: 'La edad corregida ayuda a mirar el desarrollo con mas justicia.' },
  { id: 9, title: 'Que es el ECMO', topic: 'ECMO', dur: '4 min', status: 'publicada', text: 'Introduccion simple a soporte ECMO.', instructions: 'Recomendar solo si aplica a la ficha clinica.', media: '', quiz: 'ECMO es soporte avanzado temporal.' },
  { id: 10, title: 'Cuidados al alta', topic: 'Alta y hogar', dur: '6 min', status: 'publicada', text: 'Primeros cuidados y senales de alerta para preparar el regreso a casa.', instructions: 'Complementar siempre con indicaciones del alta clinica.', media: '', quiz: 'El alta requiere seguir controles e indicaciones del equipo.' },
];

const STAFF_DEVICE_OPTIONS = ['CPAP', 'Ventilacion mecanica', 'Sonda orogastrica', 'Via central', 'Via arterial', 'ECMO', 'Monitor multiparametro'];
const STAFF_TRAIT_OPTIONS = ['Prematuridad', 'Lactancia', 'Alimentacion por sonda', 'Metodo canguro', 'ECMO', 'Equipos y monitores', 'Alta y hogar'];

function loadStaffState(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || 'null') || fallback; }
  catch { return fallback; }
}
function loadStaffCapsules() {
  const stored = loadStaffState('kun_staff_capsules_v3', []);
  if (!Array.isArray(stored) || stored.length === 0) return STAFF_INITIAL_CAPSULES;
  const byId = new Map(stored.map(c => [c.id, c]));
  STAFF_INITIAL_CAPSULES.forEach(c => {
    if (!byId.has(c.id)) byId.set(c.id, c);
  });
  return Array.from(byId.values());
}
function saveStaffState(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

function StaffPill({ children, tone = KUN.cardSoft }) {
  return <span style={{ display: 'inline-flex', alignItems: 'center', padding: '5px 10px', borderRadius: 999, background: tone, color: KUN.ink, fontFamily: STAFF_FT, fontSize: 11.5, fontWeight: 700 }}>{children}</span>;
}

function StaffIconButton({ children, onClick }) {
  return <button onClick={onClick} style={{ width: 38, height: 38, borderRadius: 19, border: `1px solid ${KUN.hair}`, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontFamily: STAFF_FT, fontWeight: 700, color: KUN.brick }}>{children}</button>;
}

function StaffConfirm({ title, text, onCancel, onConfirm }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 300, background: 'rgba(42,35,32,0.34)', display: 'flex', alignItems: 'flex-end' }}>
      <div style={{ width: '100%', background: KUN.bg, borderTopLeftRadius: 28, borderTopRightRadius: 28, padding: '18px 20px 30px' }}>
        <div style={{ width: 44, height: 5, borderRadius: 3, background: KUN.inkFaint, margin: '0 auto 16px' }} />
        <div style={{ fontFamily: STAFF_FT, fontSize: 20, fontWeight: 700, color: KUN.ink }}>{title}</div>
        <div style={{ fontFamily: STAFF_FB, fontSize: 13.5, color: KUN.inkSoft, lineHeight: 1.55, marginTop: 8 }}>{text}</div>
        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          <button onClick={onCancel} style={{ flex: 1, border: `1px solid ${KUN.hair}`, background: '#fff', color: KUN.ink, borderRadius: 999, padding: 13, fontFamily: STAFF_FT, fontWeight: 700, cursor: 'pointer' }}>Cancelar</button>
          <button onClick={onConfirm} style={{ flex: 1, border: 'none', background: KUN.brick, color: '#fff', borderRadius: 999, padding: 13, fontFamily: STAFF_FT, fontWeight: 700, cursor: 'pointer' }}>Confirmar</button>
        </div>
      </div>
    </div>
  );
}

function StaffTop({ title, subtitle, onLogout, reports = [], onReports }) {
  return (
    <div style={{ padding: '8px 20px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
      <img src="logo.png" alt="KUN" style={{ width: 38, height: 38, objectFit: 'contain' }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: STAFF_FT, fontSize: 19, fontWeight: 700, color: KUN.ink }}>{title}</div>
        <div style={{ fontFamily: STAFF_FB, fontSize: 11.5, color: KUN.inkMuted, marginTop: 1 }}>{subtitle}</div>
      </div>
      <button onClick={onReports} style={{ width: 38, height: 38, borderRadius: 19, border: `1px solid ${KUN.hair}`, background: '#fff', cursor: 'pointer', position: 'relative' }}>
        {KIcon.bell(KUN.ink)}
        {reports.length > 0 && <span style={{ position: 'absolute', top: 7, right: 8, width: 9, height: 9, borderRadius: 5, background: KUN.brick, border: '1.5px solid #fff' }} />}
      </button>
      <StaffIconButton onClick={onLogout}>Salir</StaffIconButton>
    </div>
  );
}

function StaffBottomNav({ active, onChange }) {
  const tabs = [
    { id: 'home', label: 'Inicio', icon: KIcon.home },
    { id: 'edu', label: 'Educacion', icon: KIcon.book },
    { id: 'forum', label: 'Foro', icon: KIcon.people },
  ];
  return (
    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, paddingBottom: 28, paddingTop: 14, background: 'linear-gradient(180deg, rgba(250,246,241,0) 0%, #FAF6F1 35%)' }}>
      <div style={{ margin: '0 18px', background: '#fff', borderRadius: 28, padding: '10px 8px', display: 'flex', justifyContent: 'space-around', border: `1px solid ${KUN.hair}`, boxShadow: '0 16px 32px rgba(42,35,32,0.06)' }}>
        {tabs.map(t => {
          const isA = active === t.id;
          const color = isA ? KUN.brick : KUN.inkSoft;
          return (
            <div key={t.id} onClick={() => onChange(t.id)} style={{ minWidth: 78, padding: '6px 10px', borderRadius: 18, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, background: isA ? KUN.cream : 'transparent', cursor: 'pointer' }}>
              {t.icon(color, false)}
              <div style={{ fontFamily: STAFF_FT, fontSize: 11, fontWeight: isA ? 700 : 500, color }}>{t.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StaffField({ label, value, onChange, placeholder, multiline }) {
  const style = { width: '100%', boxSizing: 'border-box', border: `1.5px solid ${KUN.hair}`, background: '#fff', borderRadius: 14, padding: '11px 12px', fontFamily: STAFF_FB, fontSize: 13.5, color: KUN.ink, outline: 'none' };
  return (
    <div>
      <div style={{ fontFamily: STAFF_FB, fontSize: 10.5, fontWeight: 600, color: KUN.inkMuted, letterSpacing: 0.7, textTransform: 'uppercase', marginBottom: 6 }}>{label}</div>
      {multiline
        ? <textarea value={value || ''} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{ ...style, minHeight: 80, resize: 'vertical' }} />
        : <input value={value || ''} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={style} />}
    </div>
  );
}

function StaffActionMenu({ open, onEdit, onDelete, onDischarge }) {
  if (!open) return null;
  return (
    <div style={{ position: 'absolute', top: 44, right: 0, zIndex: 20, background: '#fff', borderRadius: 14, border: `1px solid ${KUN.hair}`, boxShadow: '0 10px 24px rgba(42,35,32,0.14)', minWidth: 170, overflow: 'hidden' }}>
      {onEdit && <div onClick={onEdit} style={menuItemStyle}>Editar informacion</div>}
      {onDischarge && <div onClick={onDischarge} style={{ ...menuItemStyle, color: '#D94F3D' }}>Dar de alta</div>}
      {onDelete && <div onClick={onDelete} style={{ ...menuItemStyle, color: '#D94F3D' }}>Borrar capsula</div>}
    </div>
  );
}
const menuItemStyle = { padding: '12px 14px', fontFamily: STAFF_FB, fontSize: 13, fontWeight: 500, color: KUN.ink, cursor: 'pointer', borderBottom: `1px solid ${KUN.hair}` };

function ToggleChip({ label, active, onClick }) {
  return <button onClick={onClick} style={{ border: active ? 'none' : `1px solid ${KUN.hair}`, background: active ? KUN.brick : '#fff', color: active ? '#fff' : KUN.inkSoft, borderRadius: 999, padding: '8px 10px', fontFamily: STAFF_FT, fontSize: 11.5, fontWeight: 700, cursor: 'pointer' }}>{label}</button>;
}

function StaffBabyCard({ baby, onClick }) {
  return (
    <div onClick={onClick} style={{ background: '#fff', borderRadius: 20, padding: 14, border: `1px solid ${KUN.hair}`, cursor: 'pointer' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ fontFamily: STAFF_FT, fontSize: 14.5, fontWeight: 700, color: KUN.ink }}>Cupo {baby.slot}</div>
        <StaffPill tone={baby.occupied ? KUN.sun : KUN.cardSoft}>{baby.occupied ? 'Ocupado' : 'Libre'}</StaffPill>
      </div>
      {baby.occupied ? (
        <>
          <div style={{ fontFamily: STAFF_FT, fontSize: 18, fontWeight: 700, color: KUN.ink, marginTop: 10 }}>{baby.babyName}</div>
          <div style={{ fontFamily: STAFF_FB, fontSize: 12, color: KUN.inkSoft, marginTop: 2 }}>{baby.parentName} · {baby.rut}</div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginTop: 10 }}>
            <StaffPill>{baby.weight || 'Sin peso'}</StaffPill>
            <StaffPill>{baby.weeks || '--'} sem</StaffPill>
          </div>
        </>
      ) : <div style={{ fontFamily: STAFF_FB, fontSize: 12.5, color: KUN.inkMuted, marginTop: 12 }}>Disponible para ingreso.</div>}
    </div>
  );
}

function BabyEditor({ baby, onSave, onCancel }) {
  const [draft, setDraft] = React.useState(baby);
  const toggleList = (key, value) => {
    const current = draft[key] || [];
    setDraft({ ...draft, [key]: current.includes(value) ? current.filter(x => x !== value) : [...current, value] });
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        <StaffField label="Guaguita" value={draft.babyName} onChange={v => setDraft({ ...draft, babyName: v, occupied: !!v.trim() })} />
        <StaffField label="RUT guagua" value={draft.rut} onChange={v => setDraft({ ...draft, rut: v })} />
        <StaffField label="Madre/padre 1" value={draft.parentName} onChange={v => setDraft({ ...draft, parentName: v })} />
        <StaffField label="Madre/padre 2" value={draft.parent2Name} onChange={v => setDraft({ ...draft, parent2Name: v })} />
        <div>
          <div style={sectionLabel}>Sexo</div>
          <select value={draft.sex || 'm'} onChange={e => setDraft({ ...draft, sex: e.target.value })} style={{ width: '100%', boxSizing: 'border-box', border: `1.5px solid ${KUN.hair}`, background: '#fff', borderRadius: 14, padding: '11px 12px', fontFamily: STAFF_FB, fontSize: 13.5, color: KUN.ink, outline: 'none' }}>
            <option value="m">Masculino</option>
            <option value="f">Femenino</option>
          </select>
        </div>
        <StaffField label="Peso" value={draft.weight} onChange={v => setDraft({ ...draft, weight: v })} />
        <StaffField label="Semanas corr." value={draft.weeks} onChange={v => setDraft({ ...draft, weeks: v })} />
      </div>
      <StaffField label="Condicion" value={draft.condition} onChange={v => setDraft({ ...draft, condition: v })} multiline />
      <div>
        <div style={sectionLabel}>Dispositivos invasivos</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{STAFF_DEVICE_OPTIONS.map(x => <ToggleChip key={x} label={x} active={(draft.devices || []).includes(x)} onClick={() => toggleList('devices', x)} />)}</div>
      </div>
      <div>
        <div style={sectionLabel}>Cualidades que liberan capsulas</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{STAFF_TRAIT_OPTIONS.map(x => <ToggleChip key={x} label={x} active={(draft.traits || []).includes(x)} onClick={() => toggleList('traits', x)} />)}</div>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={onCancel} style={secondaryBtn}>Cancelar</button>
        <button onClick={() => onSave(draft)} style={primaryBtn}>Guardar cambios</button>
      </div>
    </div>
  );
}

const sectionLabel = { fontFamily: STAFF_FB, fontSize: 10.5, fontWeight: 600, color: KUN.inkMuted, letterSpacing: 0.7, textTransform: 'uppercase', marginBottom: 8 };
const primaryBtn = { flex: 1, border: 'none', borderRadius: 999, background: KUN.brick, color: '#fff', padding: '12px 14px', fontFamily: STAFF_FT, fontSize: 13.5, fontWeight: 700, cursor: 'pointer' };
const secondaryBtn = { flex: 1, border: `1px solid ${KUN.hair}`, borderRadius: 999, background: '#fff', color: KUN.ink, padding: '12px 14px', fontFamily: STAFF_FT, fontSize: 13.5, fontWeight: 700, cursor: 'pointer' };

function BabyDetail({ baby, capsules, onBack, onSave, onDischarge, onRecommend, askConfirm }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const filteredCaps = capsules.filter(c => `${c.title} ${c.topic}`.toLowerCase().includes(query.toLowerCase()));
  const detailRows = [
    ['Padres', [baby.parentName, baby.parent2Name].filter(Boolean).join(' · ') || 'Sin registrar'],
    ['RUT guagua', baby.rut || 'Sin registrar'],
    ['Sexo', baby.sex === 'f' ? 'Femenino' : 'Masculino'],
    ['Peso', baby.weight || 'Sin registrar'],
    ['Semanas corregidas', baby.weeks || 'Sin registrar'],
    ['Condicion', baby.condition || 'Sin registrar'],
  ];
  return (
    <div style={{ padding: '0 18px 120px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <StaffIconButton onClick={onBack}>‹</StaffIconButton>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: STAFF_FT, fontSize: 21, fontWeight: 700, color: KUN.ink }}>Cupo {baby.slot}</div>
          <div style={{ fontFamily: STAFF_FB, fontSize: 12, color: KUN.inkMuted }}>{baby.occupied ? baby.babyName : 'Cupo libre'}</div>
        </div>
        <div style={{ position: 'relative' }}>
          <StaffIconButton onClick={() => setMenuOpen(!menuOpen)}>✎</StaffIconButton>
          <StaffActionMenu
            open={menuOpen}
            onEdit={() => { setMenuOpen(false); setEditing(true); }}
            onDischarge={baby.occupied ? () => { setMenuOpen(false); askConfirm('¿Seguro que quieres dar de alta?', `Se liberara el cupo ${baby.slot}.`, () => onDischarge(baby.id)); } : null}
          />
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: 24, padding: 16, border: `1px solid ${KUN.hair}`, marginBottom: 14 }}>
        {editing ? (
          <BabyEditor
            baby={baby}
            onCancel={() => setEditing(false)}
            onSave={(draft) => askConfirm('¿Seguro que quieres guardar estos cambios?', 'La ficha se actualizara y quedara conectada al RUT correspondiente.', () => { onSave(draft); setEditing(false); })}
          />
        ) : (
          <>
            {detailRows.map(([label, value]) => (
              <div key={label} style={{ padding: '10px 0', borderBottom: `1px solid ${KUN.hair}` }}>
                <div style={sectionLabel}>{label}</div>
                <div style={{ fontFamily: STAFF_FB, fontSize: 14, color: KUN.ink, lineHeight: 1.45 }}>{value}</div>
              </div>
            ))}
            <div style={{ marginTop: 12 }}>
              <div style={sectionLabel}>Dispositivos invasivos</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>{(baby.devices || []).length ? baby.devices.map(x => <StaffPill key={x}>{x}</StaffPill>) : <StaffPill>Sin dispositivos</StaffPill>}</div>
            </div>
            <div style={{ marginTop: 12 }}>
              <div style={sectionLabel}>Cualidades</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>{(baby.traits || []).length ? baby.traits.map(x => <StaffPill key={x} tone={KUN.rosehip}>{x}</StaffPill>) : <StaffPill>Sin cualidades</StaffPill>}</div>
            </div>
          </>
        )}
      </div>

      <div style={{ background: '#fff', borderRadius: 24, padding: 16, border: `1px solid ${KUN.hair}` }}>
        <div style={{ fontFamily: STAFF_FT, fontSize: 17, fontWeight: 700, color: KUN.ink, marginBottom: 10 }}>Recomendar capsulas</div>
        <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar por titulo o tema..." style={{ width: '100%', boxSizing: 'border-box', border: `1.5px solid ${KUN.hair}`, borderRadius: 16, padding: '12px 14px', fontFamily: STAFF_FB, fontSize: 13.5, outline: 'none', marginBottom: 10 }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxHeight: 280, overflow: 'auto' }}>
          {filteredCaps.map(cap => (
            <div key={cap.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 16, background: KUN.cardSoft }}>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontFamily: STAFF_FT, fontSize: 13, fontWeight: 700, color: KUN.ink }}>{cap.title}</div>
                <div style={{ fontFamily: STAFF_FB, fontSize: 10.5, color: KUN.inkMuted }}>{cap.topic} · {cap.dur}</div>
              </div>
              <button onClick={() => askConfirm('¿Seguro que quieres recomendar esta capsula?', `Se notificara a la familia de ${baby.babyName || 'este cupo'}.`, () => onRecommend(baby, cap))} style={{ border: 'none', background: KUN.brick, color: '#fff', borderRadius: 999, padding: '8px 10px', fontFamily: STAFF_FT, fontSize: 11.5, fontWeight: 700, cursor: 'pointer' }}>Enviar</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StaffLactario({ slots, setSlots, babies, askConfirm }) {
  const occupiedBabies = babies.filter(b => b.occupied);
  const reserve = (idx, baby) => askConfirm('¿Seguro que quieres reservar este cupo?', `Se reservara ${slots[idx].time} para ${baby.parentName}.`, () => setSlots(slots.map((s, i) => i === idx ? { ...s, status: 'reservado', mother: baby.parentName, baby: baby.babyName } : s)));
  const free = (idx) => askConfirm('¿Seguro que quieres liberar este cupo?', `Se liberara el horario ${slots[idx].time}.`, () => setSlots(slots.map((s, i) => i === idx ? { ...s, status: 'libre', mother: '', baby: '' } : s)));
  return (
    <div style={{ marginTop: 16 }}>
      <div style={{ fontFamily: STAFF_FT, fontSize: 18, fontWeight: 700, color: KUN.ink, margin: '0 2px 10px' }}>Lactario</div>
      {slots.map((slot, idx) => (
        <div key={slot.time} style={{ background: '#fff', borderRadius: 18, padding: 12, border: `1px solid ${KUN.hair}`, display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ width: 64, fontFamily: STAFF_FT, fontSize: 14, fontWeight: 700, color: KUN.ink }}>{slot.time}</div>
          <div style={{ flex: 1, fontFamily: STAFF_FB, fontSize: 12.5, color: slot.status === 'libre' ? KUN.inkMuted : KUN.ink }}>{slot.status === 'libre' ? 'Cupo libre' : `${slot.mother} · ${slot.baby}`}</div>
          {slot.status === 'libre' ? (
            <select onChange={e => { const baby = occupiedBabies.find(b => b.id === e.target.value); if (baby) reserve(idx, baby); e.target.value = ''; }} style={{ maxWidth: 112, borderRadius: 999, border: `1px solid ${KUN.hair}`, padding: '8px', fontFamily: STAFF_FB, fontSize: 11 }}>
              <option value="">Reservar</option>
              {occupiedBabies.map(b => <option key={b.id} value={b.id}>{b.parentName}</option>)}
            </select>
          ) : <button onClick={() => free(idx)} style={{ border: 'none', background: KUN.cardSoft, color: KUN.brick, borderRadius: 999, padding: '8px 10px', fontFamily: STAFF_FT, fontSize: 11.5, fontWeight: 700, cursor: 'pointer' }}>Liberar</button>}
        </div>
      ))}
    </div>
  );
}

function StaffHome({ babies, setBabies, capsules, lactarioSlots, setLactarioSlots, onRecommend, askConfirm }) {
  const [detailId, setDetailId] = React.useState(null);
  const selected = babies.find(b => b.id === detailId);
  const saveBaby = (baby) => setBabies(babies.map(b => b.id === baby.id ? { ...baby, occupied: !!baby.babyName.trim() } : b));
  const discharge = (id) => setBabies(babies.map(b => b.id === id ? { ...b, occupied: false, babyName: '', sex: 'm', parentName: '', parent2Name: '', rut: '', condition: '', devices: [], weight: '', weeks: '', traits: [], recommended: [] } : b));
  if (selected) return <BabyDetail baby={selected} capsules={capsules} onBack={() => setDetailId(null)} onSave={saveBaby} onDischarge={discharge} onRecommend={onRecommend} askConfirm={askConfirm} />;
  return (
    <div style={{ padding: '0 18px 120px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
        {babies.map(b => <StaffBabyCard key={b.id} baby={b} onClick={() => setDetailId(b.id)} />)}
      </div>
      <StaffLactario slots={lactarioSlots} setSlots={setLactarioSlots} babies={babies} askConfirm={askConfirm} />
    </div>
  );
}

function CapsuleEditor({ capsule, onSave, onCancel }) {
  const [draft, setDraft] = React.useState(capsule);
  return (
    <div style={{ background: '#fff', borderRadius: 24, padding: 16, border: `1px solid ${KUN.hair}` }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
        <StaffField label="Titulo" value={draft.title} onChange={v => setDraft({ ...draft, title: v })} />
        <StaffField label="Tema" value={draft.topic} onChange={v => setDraft({ ...draft, topic: v })} />
        <StaffField label="Duracion" value={draft.dur} onChange={v => setDraft({ ...draft, dur: v })} />
        <StaffField label="Texto" value={draft.text} onChange={v => setDraft({ ...draft, text: v })} multiline />
        <StaffField label="Instrucciones" value={draft.instructions} onChange={v => setDraft({ ...draft, instructions: v })} multiline />
        <StaffField label="Imagen o video" value={draft.media} onChange={v => setDraft({ ...draft, media: v })} placeholder="URL o archivo" />
        <StaffField label="Quiz" value={draft.quiz} onChange={v => setDraft({ ...draft, quiz: v })} multiline />
      </div>
      <div style={{ display: 'flex', gap: 10, marginTop: 14 }}>
        <button onClick={onCancel} style={secondaryBtn}>Cancelar</button>
        <button onClick={() => onSave(draft)} style={primaryBtn}>Guardar capsula</button>
      </div>
    </div>
  );
}

function CapsuleDetail({ capsule, onBack, onSave, onDelete, askConfirm }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  return (
    <div style={{ padding: '0 18px 120px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <StaffIconButton onClick={onBack}>‹</StaffIconButton>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: STAFF_FT, fontSize: 20, fontWeight: 700, color: KUN.ink }}>{capsule.title}</div>
          <div style={{ fontFamily: STAFF_FB, fontSize: 12, color: KUN.inkMuted }}>{capsule.topic} · {capsule.dur}</div>
        </div>
        <div style={{ position: 'relative' }}>
          <StaffIconButton onClick={() => setMenuOpen(!menuOpen)}>✎</StaffIconButton>
          <StaffActionMenu
            open={menuOpen}
            onEdit={() => { setMenuOpen(false); setEditing(true); }}
            onDelete={() => { setMenuOpen(false); askConfirm('¿Seguro que quieres borrar esta capsula?', 'La capsula dejara de aparecer en el catalogo.', () => onDelete(capsule.id)); }}
          />
        </div>
      </div>
      {editing ? (
        <CapsuleEditor
          capsule={capsule}
          onCancel={() => setEditing(false)}
          onSave={(draft) => askConfirm('¿Seguro que quieres guardar los cambios?', 'La informacion actualizada se vera en la version de padres.', () => { onSave(draft); setEditing(false); })}
        />
      ) : (
        <div style={{ background: '#fff', borderRadius: 24, padding: 16, border: `1px solid ${KUN.hair}` }}>
          {['text', 'instructions', 'media', 'quiz'].map(key => (
            <div key={key} style={{ padding: '10px 0', borderBottom: `1px solid ${KUN.hair}` }}>
              <div style={sectionLabel}>{key === 'text' ? 'Texto' : key === 'instructions' ? 'Instrucciones' : key === 'media' ? 'Imagen / video' : 'Quiz'}</div>
              <div style={{ fontFamily: STAFF_FB, fontSize: 14, color: KUN.ink, lineHeight: 1.5 }}>{capsule[key] || 'Sin contenido'}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const STAFF_TOPIC_META = [
  { name: 'Alimentacion por sonda', icon: KIcon.cat.breast, tone: KUN.sun, matches: ['alimentacion por sonda'] },
  { name: 'Lactancia', icon: KIcon.cat.breast, tone: KUN.apple, matches: ['lactancia'] },
  { name: 'Prematuridad', icon: KIcon.cat.prem, tone: KUN.rosehip, matches: ['prematuridad'] },
  { name: 'Equipos y monitores', icon: KIcon.cat.ecmo, tone: KUN.clear, matches: ['equipos y monitores'] },
  { name: 'Metodo canguro', icon: KIcon.cat.kang, tone: KUN.viola, matches: ['metodo canguro'] },
  { name: 'ECMO', icon: KIcon.cat.ecmo, tone: KUN.clear, matches: ['ecmo'] },
  { name: 'Alta y hogar', icon: KIcon.cat.prem, tone: KUN.apple, matches: ['alta y hogar'] },
];

const STAFF_CATEGORY_TO_TOPICS = {
  Lactancia: ['Lactancia', 'Alimentacion por sonda'],
  Prematuridad: ['Prematuridad'],
  'Metodo canguro': ['Metodo canguro'],
  ECMO: ['ECMO', 'Equipos y monitores'],
  'Alta y hogar': ['Alta y hogar'],
};

function staffTextKey(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function StaffCategoryChips({ active, onChange }) {
  const chips = ['Todo', 'Lactancia', 'Prematuridad', 'Metodo canguro', 'ECMO', 'Alta y hogar'];
  return (
    <div style={{ display: 'flex', gap: 8, padding: '0 20px 18px', overflowX: 'auto', scrollbarWidth: 'none' }}>
      {chips.map(c => {
        const isA = c === active;
        return (
          <button key={c} onClick={() => onChange(c)} style={{
            flexShrink: 0, cursor: 'pointer', borderRadius: 999,
            border: isA ? 'none' : `1px solid ${KUN.hair}`,
            background: isA ? KUN.ink : '#fff',
            color: isA ? '#fff' : KUN.inkSoft,
            padding: '9px 16px',
            fontFamily: STAFF_FT, fontSize: 13, fontWeight: 700,
          }}>{c}</button>
        );
      })}
    </div>
  );
}

function StaffCapsuleItem({ cap, onOpen }) {
  return (
    <div onClick={() => onOpen(cap.id)} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 4px', cursor: 'pointer' }}>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: KUN.brick, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: STAFF_FT, fontSize: 14, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>{cap.title}</div>
        <div style={{ fontFamily: STAFF_FB, fontSize: 11.5, color: KUN.inkSoft, fontWeight: 400, marginTop: 2 }}>{cap.dur || '4 min'} · lectura</div>
      </div>
      <div style={{ fontFamily: STAFF_FT, fontSize: 10.5, fontWeight: 700, color: cap.status === 'publicada' ? '#3D9156' : KUN.brick, background: cap.status === 'publicada' ? KUN.sageSoft : KUN.rosehip, borderRadius: 999, padding: '4px 8px', flexShrink: 0 }}>
        {cap.status === 'publicada' ? 'Editar' : 'Borrador'}
      </div>
      {KIcon.chevRight(KUN.inkFaint)}
    </div>
  );
}

function StaffTopicRow({ topic, caps, defaultOpen, onOpenCapsule }) {
  const [open, setOpen] = React.useState(!!defaultOpen);
  return (
    <div style={{ background: '#fff', borderRadius: 22, padding: '14px 16px', marginBottom: 10, border: `1px solid ${KUN.hair}` }}>
      <div onClick={() => setOpen(o => !o)} style={{ display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer' }}>
        <div style={{ width: 44, height: 44, borderRadius: 14, background: topic.tone, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {topic.icon(KUN.ink)}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: STAFF_FT, fontSize: 15.5, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>{topic.name}</div>
          <div style={{ fontFamily: STAFF_FB, fontSize: 12, color: KUN.inkSoft, marginTop: 2 }}>
            {caps.length === 1 ? '1 capsula' : `${caps.length} capsulas`}
          </div>
        </div>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          background: open ? KUN.brick : KUN.cream,
          border: open ? 'none' : `1px solid ${KUN.hair}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {open ? KIcon.chevDown('#fff') : KIcon.chevRight(KUN.brick)}
        </div>
      </div>
      {open && (
        <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px dashed ${KUN.hair}`, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {caps.map(cap => <StaffCapsuleItem key={cap.id} cap={cap} onOpen={onOpenCapsule} />)}
        </div>
      )}
    </div>
  );
}

function StaffEducation({ capsules, setCapsules, askConfirm }) {
  const [detailId, setDetailId] = React.useState(null);
  const [activeCategory, setActiveCategory] = React.useState('Todo');
  const [query, setQuery] = React.useState('');
  const selected = capsules.find(c => c.id === detailId);
  const saveCapsule = (draft) => setCapsules(capsules.map(c => c.id === draft.id ? draft : c));
  const deleteCapsule = (id) => { setCapsules(capsules.filter(c => c.id !== id)); setDetailId(null); };
  const create = () => askConfirm('¿Seguro que quieres crear una nueva capsula?', 'Se agregara una capsula borrador al catalogo.', () => {
    const next = { id: Date.now(), title: 'Nueva capsula', topic: 'Prematuridad', dur: '4 min', status: 'borrador', text: '', instructions: '', media: '', quiz: '' };
    setCapsules([next, ...capsules]);
    setDetailId(next.id);
  });
  if (selected) return <CapsuleDetail capsule={selected} onBack={() => setDetailId(null)} onSave={saveCapsule} onDelete={deleteCapsule} askConfirm={askConfirm} />;

  const queryKey = staffTextKey(query);
  const filteredCapsules = capsules.filter(c => !queryKey || staffTextKey(`${c.title} ${c.topic} ${c.status}`).includes(queryKey));
  const topicMatches = (topic, cap) => topic.matches.includes(staffTextKey(cap.topic));
  const visibleTopicNames = activeCategory === 'Todo' ? null : STAFF_CATEGORY_TO_TOPICS[activeCategory] || [];
  const topics = STAFF_TOPIC_META
    .filter(t => !visibleTopicNames || visibleTopicNames.includes(t.name))
    .map(t => ({ ...t, caps: filteredCapsules.filter(c => topicMatches(t, c)) }))
    .filter(t => t.caps.length > 0);
  const uncategorized = filteredCapsules.filter(c => !STAFF_TOPIC_META.some(t => topicMatches(t, c)));
  if (!visibleTopicNames && uncategorized.length) {
    topics.push({ name: 'Sin categoria', icon: KIcon.book, tone: KUN.cardSoft, caps: uncategorized });
  }
  const totalCaps = topics.reduce((sum, t) => sum + t.caps.length, 0);

  return (
    <div style={{ padding: '0 0 120px' }}>
      <button onClick={create} style={{ position: 'absolute', right: 22, bottom: 112, width: 58, height: 58, borderRadius: '50%', border: 'none', background: KUN.brick, color: '#fff', fontFamily: STAFF_FT, fontSize: 30, fontWeight: 700, cursor: 'pointer', zIndex: 20 }}>+</button>
      <div style={{ padding: '4px 20px 12px' }}>
        <div style={{ background: '#fff', borderRadius: 16, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, border: `1.5px solid ${KUN.hair}` }}>
          {KIcon.search(KUN.inkMuted)}
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Buscar capsulas..." style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontFamily: STAFF_FB, fontSize: 14, color: KUN.ink }} />
        </div>
      </div>
      <StaffCategoryChips active={activeCategory} onChange={setActiveCategory} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px 10px' }}>
        <div style={{ fontFamily: STAFF_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted, letterSpacing: 1, textTransform: 'uppercase' }}>
          {totalCaps} capsula{totalCaps !== 1 ? 's' : ''}
        </div>
        <div style={{ fontFamily: STAFF_FT, fontSize: 12.5, fontWeight: 700, color: KUN.brick, display: 'flex', alignItems: 'center', gap: 4 }}>
          Ordenar {KIcon.chevDown(KUN.brick)}
        </div>
      </div>
      <div style={{ padding: '0 20px' }}>
        {topics.length ? topics.map((t, i) => (
          <StaffTopicRow key={t.name} topic={t} caps={t.caps} defaultOpen={activeCategory !== 'Todo' || i === 0} onOpenCapsule={setDetailId} />
        )) : (
          <div style={{ background: '#fff', borderRadius: 22, padding: 18, border: `1px solid ${KUN.hair}`, fontFamily: STAFF_FB, color: KUN.inkSoft }}>
            No hay capsulas para esta busqueda.
          </div>
        )}
        <div style={{ height: 16 }} />
        <button onClick={create} style={{
          width: '100%', border: `1.5px dashed ${KUN.brick}`, background: '#fff',
          color: KUN.brick, borderRadius: 22, padding: '14px 16px',
          fontFamily: STAFF_FT, fontSize: 14, fontWeight: 700, cursor: 'pointer',
        }}>
          + Nueva capsula educativa
        </button>
        </div>
    </div>
  );
}

function ForumMenu({ onRemove }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <div onClick={() => setOpen(!open)} style={{ cursor: 'pointer', padding: '5px 4px', fontFamily: STAFF_FT, fontSize: 20, color: KUN.inkMuted }}>•••</div>
      {open && <div style={{ position: 'absolute', top: 30, right: 0, zIndex: 20, background: '#fff', borderRadius: 12, border: `1px solid ${KUN.hair}`, minWidth: 140, boxShadow: '0 8px 18px rgba(42,35,32,0.12)' }}><div onClick={() => { setOpen(false); onRemove(); }} style={{ padding: '12px 14px', fontFamily: STAFF_FB, fontSize: 13, color: '#D94F3D', cursor: 'pointer' }}>Dar de baja</div></div>}
    </div>
  );
}

function StaffForum({ questions, reports, onAnswerQuestion, onRemoveQuestion, askConfirm }) {
  const [hiddenIds, setHiddenIds] = React.useState([]);
  return (
    <div style={{ height: '100%', position: 'relative' }}>
      {reports.length > 0 && <div style={{ background: KUN.sun, borderRadius: 20, padding: 14, marginBottom: 12, fontFamily: STAFF_FB, fontSize: 12.5, color: KUN.ink, lineHeight: 1.45 }}>Tienes {reports.length} reporte{reports.length === 1 ? '' : 's'} nuevo{reports.length === 1 ? '' : 's'} de entradas del foro.</div>}
      <ScreenComunidad
        questions={questions}
        currentUser=""
        moderationMode
        allowNew={false}
        hiddenIds={hiddenIds}
        onModerateRemove={(id) => askConfirm('¿Seguro que quieres dar de baja esta entrada?', 'La entrada dejara de verse en la version del foro.', () => {
          setHiddenIds(prev => [...new Set([...prev, id])]);
          onRemoveQuestion && onRemoveQuestion(id);
        })}
      />
    </div>
  );
}

function StaffReportsPanel({ reports, feedback = [], onClose }) {
  const notifications = [
    ...feedback.map(item => ({ ...item, kind: 'feedback' })),
    ...reports.map(item => ({ ...item, kind: 'report' })),
  ].sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 220, background: KUN.bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '58px 20px 12px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <StaffIconButton onClick={onClose}>‹</StaffIconButton>
        <div>
          <div style={{ fontFamily: STAFF_FT, fontSize: 22, fontWeight: 700, color: KUN.ink }}>Notificaciones</div>
          <div style={{ fontFamily: STAFF_FB, fontSize: 12, color: KUN.inkMuted }}>{notifications.length} mensaje{notifications.length === 1 ? '' : 's'} para el equipo</div>
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '0 20px 30px' }}>
        {notifications.length === 0 ? <div style={{ background: '#fff', borderRadius: 22, padding: 18, border: `1px solid ${KUN.hair}`, fontFamily: STAFF_FB, color: KUN.inkSoft }}>No hay mensajes nuevos.</div> : notifications.map(r => (
          <div key={r.id} style={{ background: '#fff', borderRadius: 22, padding: 16, border: `1px solid ${KUN.hair}`, marginBottom: 10 }}>
            <StaffPill tone={r.kind === 'feedback' ? KUN.rosehip : KUN.sun}>{r.kind === 'feedback' ? 'Retroalimentación familiar' : 'Reporte foro'}</StaffPill>
            <div style={{ fontFamily: STAFF_FT, fontSize: 15, fontWeight: 700, color: KUN.ink, marginTop: 8 }}>
              {r.kind === 'feedback' ? `${r.stage || 'Camino de cuidados'} · ${r.babyName || 'Bebé'}` : (r.postTitle || 'Entrada reportada')}
            </div>
            {r.kind === 'feedback' ? (
              <>
                <div style={{ fontFamily: STAFF_FB, fontSize: 12.5, color: KUN.inkSoft, lineHeight: 1.5, marginTop: 5 }}>
                  Familia: {r.parentName || 'Sin nombre'}
                </div>
                {r.thanks && <div style={{ fontFamily: STAFF_FB, fontSize: 13, color: KUN.ink, lineHeight: 1.5, marginTop: 8 }}>{r.thanks}</div>}
                {Array.isArray(r.tags) && r.tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                    {r.tags.map(tag => <StaffPill key={tag} tone={KUN.cream}>{tag}</StaffPill>)}
                  </div>
                )}
                {r.note && <div style={{ fontFamily: STAFF_FB, fontSize: 12.5, color: KUN.inkSoft, lineHeight: 1.5, marginTop: 8 }}>Recomendación: {r.note}</div>}
              </>
            ) : (
              <div style={{ fontFamily: STAFF_FB, fontSize: 12.5, color: KUN.inkSoft, lineHeight: 1.5, marginTop: 5 }}>Motivo: {r.reason}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenStaffApp({ authData, onLogout, parentQuestions, forumReports = [], careFeedback = [], onAnswerQuestion, onRemoveQuestion, onRecommendCapsule }) {
  const [tab, setTab] = React.useState('home');
  const [confirm, setConfirm] = React.useState(null);
  const [reportsOpen, setReportsOpen] = React.useState(false);
  const [babies, setBabiesState] = React.useState(() => loadStaffState('kun_staff_babies_v1', STAFF_INITIAL_BABIES));
  const [lactarioSlots, setLactarioSlotsState] = React.useState(() => loadStaffState('kun_staff_lactario_v1', STAFF_INITIAL_LACTARIO));
  const [capsules, setCapsulesState] = React.useState(() => loadStaffCapsules());

  const askConfirm = (title, text, action) => setConfirm({ title, text, action });
  const setBabies = (next) => { setBabiesState(next); saveStaffState('kun_staff_babies_v1', next); };
  const setLactarioSlots = (next) => { setLactarioSlotsState(next); saveStaffState('kun_staff_lactario_v1', next); };
  const setCapsules = (next) => { setCapsulesState(next); saveStaffState('kun_staff_capsules_v3', next); };
  const recommend = (baby, cap) => {
    setBabies(babies.map(b => b.id === baby.id ? { ...b, recommended: [...new Set([...(b.recommended || []), cap.id])] } : b));
    onRecommendCapsule && onRecommendCapsule(baby, cap);
  };
  const subtitle = tab === 'home' ? '8 cupos UCIN y lactario' : tab === 'edu' ? 'Catalogo y editor de capsulas' : 'Foro y reportes de familias';

  return (
    <>
      <div className="kun-content-wrap" style={{ height: 'calc(100% - 50px)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <StaffTop title="KUN Salud" subtitle={subtitle} onLogout={onLogout} reports={[...forumReports, ...careFeedback]} onReports={() => setReportsOpen(true)} />
        <div style={{ flex: 1, overflow: 'auto', overflowX: 'hidden' }}>
          {tab === 'home' && <StaffHome babies={babies} setBabies={setBabies} capsules={capsules} lactarioSlots={lactarioSlots} setLactarioSlots={setLactarioSlots} onRecommend={recommend} askConfirm={askConfirm} />}
          {tab === 'edu' && <StaffEducation capsules={capsules} setCapsules={setCapsules} askConfirm={askConfirm} />}
          {tab === 'forum' && <StaffForum questions={parentQuestions} reports={forumReports} onAnswerQuestion={onAnswerQuestion} onRemoveQuestion={onRemoveQuestion} askConfirm={askConfirm} />}
        </div>
      </div>
      <StaffBottomNav active={tab} onChange={setTab} />
      {reportsOpen && <StaffReportsPanel reports={forumReports} feedback={careFeedback} onClose={() => setReportsOpen(false)} />}
      {confirm && <StaffConfirm title={confirm.title} text={confirm.text} onCancel={() => setConfirm(null)} onConfirm={() => { const action = confirm.action; setConfirm(null); action && action(); }} />}
    </>
  );
}

window.ScreenStaffApp = ScreenStaffApp;
