// Auth — role selection (padre/madre vs. trabajador de salud)
// + newborn RUT + password flow for parents. Session persists in localStorage
// under key kun_auth_v1; once logged in, the app skips this screen.
//
// Applies KUN Design System v2: Quicksand titles, Poppins body, Brick CTAs,
// hairline cards, decorative half-moon shapes, pill buttons.

const AUTH_KEY = 'kun_auth_v1';

const KAuth = {
  load() {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch { return null; }
  },
  save(data) {
    try { localStorage.setItem(AUTH_KEY, JSON.stringify(data)); } catch {}
  },
  clear() {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      localStorage.setItem(AUTH_KEY, JSON.stringify({ ...data, sessionActive: false }));
    } catch {
      try { localStorage.removeItem(AUTH_KEY); } catch {}
    }
  },
};
window.KAuth = KAuth;

// ── DS tokens (scoped, same values as global) ────────
const A_FT = 'Quicksand, sans-serif';
const A_FB = 'Poppins, sans-serif';

// ── RUT helpers ─────────────────────────────────────
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || '').trim());
}

// ── Shared UI ───────────────────────────────────────
function AuthBack({ onBack }) {
  return (
    <div style={{ padding: '60px 24px 4px', minHeight: 50, boxSizing: 'border-box' }}>
      {onBack && (
        <div onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 20, background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${KUN.hair}`, cursor: 'pointer',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
}

function AuthShapes() {
  // Two decorative half-moons; very subtle, low opacity, recortadas por el viewport.
  return (
    <>
      <div style={{
        position: 'absolute', top: 80, right: -90,
        width: 220, height: 220, borderRadius: '50%',
        background: KUN.rosehip, opacity: 0.18,
        pointerEvents: 'none', zIndex: 0,
      }}/>
      <div style={{
        position: 'absolute', bottom: -120, left: -80,
        width: 240, height: 240, borderRadius: '50%',
        background: KUN.apple, opacity: 0.16,
        pointerEvents: 'none', zIndex: 0,
      }}/>
    </>
  );
}

function PrimaryButton({ children, onClick, disabled }) {
  return (
    <button onClick={disabled ? undefined : onClick} disabled={!!disabled} style={{
      width: '100%', padding: '14px 22px', borderRadius: 999, border: 'none',
      background: disabled ? 'rgba(42,35,32,0.08)' : KUN.brick,
      color: disabled ? KUN.inkMuted : '#fff',
      fontFamily: A_FT, fontSize: 15, fontWeight: 700,
      cursor: disabled ? 'default' : 'pointer',
      height: 50,
      transition: 'all .2s',
    }}>{children}</button>
  );
}

const inputStyle = {
  width: '100%', padding: '14px 16px', boxSizing: 'border-box',
  background: '#fff', border: `1.5px solid ${KUN.hair}`, borderRadius: 16,
  fontFamily: A_FB, fontSize: 15, fontWeight: 500,
  color: KUN.ink, letterSpacing: 0.2, outline: 'none',
};

const labelStyle = {
  fontFamily: A_FB, fontSize: 11, fontWeight: 500,
  color: KUN.inkMuted, letterSpacing: 0.8, marginBottom: 8,
  textTransform: 'uppercase',
};

// ── Views ───────────────────────────────────────────
function RoleSelectView({ onPick, onTerms }) {
  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1, padding: '74px 28px 24px', textAlign: 'center' }}>
        <div style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', marginBottom: 14 }}>
          <img src="logo.png" alt="KUN" style={{ width: 64, height: 64, objectFit: 'contain' }} />
        </div>
        <div style={{
          fontFamily: A_FT, fontSize: 28, fontWeight: 700, color: KUN.ink,
          letterSpacing: 2, lineHeight: 1.1,
        }}>KUN</div>
        <div style={{
          marginTop: 22, fontFamily: A_FT, fontSize: 26, fontWeight: 700,
          color: KUN.ink, letterSpacing: -0.4, lineHeight: 1.2,
        }}>Bienvenido</div>
        <div style={{
          marginTop: 6, fontFamily: A_FB, fontSize: 14, color: KUN.inkSoft,
          fontWeight: 400, lineHeight: 1.5,
        }}>¿Cómo quieres ingresar?</div>
      </div>

      <div style={{ position:'relative', zIndex: 1, padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div onClick={() => onPick('parent')} style={{
          background: '#fff', borderRadius: 22, padding: '16px 18px',
          cursor: 'pointer', display: 'flex', gap: 14, alignItems: 'center',
          border: `1.5px solid ${KUN.brick}`,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 16,
            background: KUN.rosehip,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke={KUN.ink} strokeWidth="1.9"/>
              <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" stroke={KUN.ink} strokeWidth="1.9" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: A_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>
              Soy padre/madre
            </div>
            <div style={{ fontFamily: A_FB, fontSize: 12.5, color: KUN.inkSoft, fontWeight: 400, marginTop: 3, lineHeight: 1.45 }}>
              Mamá, papá o cuidador del bebé
            </div>
          </div>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: KUN.cream, border: `1px solid ${KUN.hair}`,
            display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke={KUN.brick} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <div onClick={() => onPick('worker')} style={{
          background: '#fff', borderRadius: 22, padding: '16px 18px',
          cursor: 'pointer', display: 'flex', gap: 14, alignItems: 'center',
          border: `1px solid ${KUN.hair}`,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 16,
            background: KUN.apple,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M9 4H15V8H9V4Z" stroke={KUN.ink} strokeWidth="1.9" strokeLinejoin="round"/>
              <path d="M5 8H19V20C19 20.6 18.6 21 18 21H6C5.4 21 5 20.6 5 20V8Z" stroke={KUN.ink} strokeWidth="1.9" strokeLinejoin="round"/>
              <path d="M12 12V17M9.5 14.5H14.5" stroke={KUN.ink} strokeWidth="1.9" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: A_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1 }}>
              Trabajo en salud
            </div>
            <div style={{ fontFamily: A_FB, fontSize: 12.5, color: KUN.inkSoft, fontWeight: 400, marginTop: 3, lineHeight: 1.45 }}>
              Enfermera, matrona, médico u otro
            </div>
          </div>
          <div style={{
            width: 32, height: 32, borderRadius: '50%',
            background: KUN.cream, border: `1px solid ${KUN.hair}`,
            display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12" stroke={KUN.brick} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        <button type="button" onClick={() => onPick('admin')} style={{
          alignSelf: 'center',
          marginTop: 4,
          border: `1px solid ${KUN.hair}`,
          background: 'rgba(255,255,255,0.72)',
          color: KUN.inkMuted,
          borderRadius: 999,
          padding: '8px 14px',
          fontFamily: A_FB,
          fontSize: 12,
          fontWeight: 700,
          cursor: 'pointer',
        }}>
          Administracion
        </button>

        <div style={{
          marginTop: 10, padding: '14px 4px', textAlign: 'center',
          fontFamily: A_FB, fontSize: 12, color: KUN.inkMuted, fontWeight: 400, lineHeight: 1.5,
        }}>
          Al continuar aceptas nuestros<br/>
          <button onClick={onTerms} style={{
            border: 'none', background: 'transparent', padding: 0,
            color: KUN.brick, fontWeight: 700, fontFamily: A_FB, fontSize: 12,
            cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 2,
          }}>Términos y Política de privacidad</button>.
        </div>
      </div>
    </>
  );
}

function TermsView({ onBack }) {
  const sections = [
    ['1. Identificacion del servicio', 'KUN es una plataforma de acompanamiento, educacion, organizacion y vinculo para familias con bebes hospitalizados, y una herramienta de apoyo para equipos de salud. Sus funciones pueden incluir informacion educativa, reservas de lactario, diario familiar, comunidad entre usuarios, capsulas y recomendaciones.'],
    ['2. Aceptacion de los terminos', 'Al ingresar, registrarse o utilizar KUN, el usuario declara haber leido y aceptado estos Terminos y Condiciones, junto con la Politica de Privacidad aplicable. Si no esta de acuerdo, debe abstenerse de utilizar la plataforma.'],
    ['3. Usuarios autorizados', 'La plataforma puede ser utilizada por madres, padres, cuidadores, familiares autorizados y personal de salud habilitado. Algunas funciones pueden estar restringidas segun el tipo de usuario, el vinculo con el bebe o los permisos definidos por la institucion.'],
    ['4. Uso adecuado de la aplicacion', 'El usuario se compromete a utilizar KUN de manera responsable, respetuosa y conforme a su finalidad. No esta permitido subir, compartir o difundir contenido falso, ofensivo, discriminatorio, ilegal, amenazante, invasivo de la privacidad de terceros o que pueda afectar la seguridad, dignidad o bienestar de otros usuarios.'],
    ['5. Informacion medica y limites del servicio', 'KUN entrega informacion educativa y de acompanamiento. La plataforma no reemplaza la evaluacion, diagnostico, indicacion, tratamiento ni seguimiento realizado por el equipo medico tratante. Ante cualquier duda sobre la salud, evolucion o tratamiento del bebe, el usuario debe consultar directamente al personal de salud correspondiente.'],
    ['6. Contenido educativo y recomendaciones', 'Las capsulas, materiales educativos y recomendaciones disponibles en KUN tienen fines informativos y de apoyo. Aunque puedan estar relacionadas con la situacion del bebe, no constituyen una indicacion clinica individual ni sustituyen las instrucciones entregadas por el equipo tratante.'],
    ['7. Comunidad y foro', 'La seccion Comunidad permite que usuarios compartan experiencias, preguntas y apoyo entre pares. Red Salud UC CHRISTUS no se hace responsable por la informacion compartida por usuarios en esta seccion. Las respuestas entregadas por otros padres, madres o familiares no estan respaldadas, validadas ni confirmadas por UC CHRISTUS, por lo que no deben considerarse informacion medica oficial, diagnostico, indicacion clinica ni recomendacion profesional.'],
    ['8. Diario, fotos, audios y recuerdos', 'El usuario puede cargar textos, imagenes, audios u otros recuerdos en el diario o secciones de vinculo. Al hacerlo, declara contar con los derechos o autorizaciones necesarias para compartir dicho contenido y acepta que sea utilizado dentro de KUN para las funciones propias de la plataforma.'],
    ['9. Privacidad y datos personales', 'KUN puede tratar datos personales y, eventualmente, datos sensibles asociados a salud, identificacion, vinculo familiar, uso de la plataforma y contenidos cargados por el usuario. El tratamiento de estos datos debe realizarse conforme a la legislacion aplicable y a la Politica de Privacidad, donde se informa que datos se recopilan, con que finalidad, como se resguardan y con quienes podrian compartirse.'],
    ['10. Cuenta y seguridad', 'El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso y de informar cualquier uso no autorizado de su cuenta. KUN podra implementar medidas de seguridad, verificacion o restriccion de acceso cuando sea necesario para proteger a los usuarios y la plataforma.'],
    ['11. Moderacion y suspension', 'KUN podra moderar, ocultar, eliminar contenido o suspender el acceso de usuarios cuando exista incumplimiento de estos terminos, uso indebido de la plataforma, riesgo para otros usuarios o vulneracion de normas institucionales o legales.'],
    ['12. Propiedad intelectual', 'El diseno, marca, funcionalidades, textos, capsulas, materiales educativos y demas contenidos propios de KUN pertenecen a sus respectivos titulares. El contenido cargado por usuarios seguira perteneciendo a quien lo proporciona, sin perjuicio de la autorizacion necesaria para visualizarlo y utilizarlo dentro de la plataforma.'],
    ['13. Cambios en el servicio', 'KUN podra modificar, actualizar, suspender o eliminar funciones, contenidos o estos Terminos y Condiciones cuando sea necesario. Cuando corresponda, se informara a los usuarios sobre cambios relevantes.'],
    ['14. Legislacion aplicable y contacto', 'Estos terminos se regiran por la legislacion chilena, en lo que corresponda. Para dudas sobre el uso de la plataforma, privacidad o estos terminos, el usuario podra contactar al canal de soporte definido por KUN o por la institucion correspondiente.'],
  ];
  return (
    <div style={{ position:'absolute', inset: 0, zIndex: 80, background: KUN.bg, display:'flex', flexDirection:'column' }}>
      <div style={{ padding: '58px 20px 12px', display:'flex', alignItems:'center', gap: 12 }}>
        <div onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 20, background: '#fff',
          display:'flex', alignItems:'center', justifyContent:'center',
          border: `1px solid ${KUN.hair}`, cursor:'pointer', flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <div style={{ fontFamily: A_FT, fontSize: 22, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3 }}>
            Terminos y condiciones
          </div>
          <div style={{ fontFamily: A_FB, fontSize: 12, color: KUN.inkMuted, marginTop: 2 }}>
            KUN · Red Salud UC CHRISTUS
          </div>
        </div>
      </div>
      <div style={{ flex: 1, overflowY:'auto', padding: '0 20px 30px' }}>
        <div style={{
          background:'#fff', borderRadius: 22, padding: 16,
          border: `1px solid ${KUN.hair}`, marginBottom: 12,
          fontFamily: A_FB, fontSize: 12.5, color: KUN.inkSoft, lineHeight: 1.55,
        }}>
          Este documento es una version base para informar el uso de KUN. Para implementacion real con pacientes y datos de salud, debe ser revisado y aprobado por las areas legales, clinicas y de privacidad correspondientes.
        </div>
        {sections.map(([title, text]) => (
          <div key={title} style={{
            background:'#fff', borderRadius: 20, padding: '15px 16px',
            border: `1px solid ${KUN.hair}`, marginBottom: 10,
          }}>
            <div style={{ fontFamily: A_FT, fontSize: 15.5, fontWeight: 700, color: KUN.ink, marginBottom: 7, letterSpacing: -0.1 }}>
              {title}
            </div>
            <div style={{ fontFamily: A_FB, fontSize: 12.5, color: KUN.inkSoft, lineHeight: 1.58 }}>
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkerLoginView({ onBack, onSubmit }) {
  const stored = KAuth.load();
  const [email, setEmail] = React.useState(stored?.role === 'staff' ? (stored.email || '') : '');
  const [pass, setPass] = React.useState('');
  const [err, setErr] = React.useState('');
  const existingStaff = stored?.role === 'staff' && stored?.password;
  const valid = isValidEmail(email) && pass.length >= 6;
  const handle = () => {
    if (!valid) return setErr('Ingresa correo institucional y una contraseña de al menos 6 caracteres.');
    if (existingStaff && stored.email === email.trim() && stored.password !== pass) {
      return setErr('La contraseña no es correcta.');
    }
    setErr('');
    onSubmit({
      role: 'staff',
      email: email.trim(),
      password: pass,
      staffName: email.split('@')[0] || 'Personal de salud',
      sessionActive: true,
      createdAt: stored?.createdAt || Date.now(),
    });
  };

  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
      </div>
      <div style={{
        position:'relative', zIndex: 1,
        padding: '18px 28px 0',
      }}>
        <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
          Ingresa como personal de salud
        </div>
        <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
          Acceso para editar fichas UCIN, lactario, cápsulas educativas y foro de familias.
        </div>
      </div>
      <div style={{ position:'relative', zIndex: 1, padding: '26px 28px 0' }}>
        <div style={labelStyle}>Correo institucional</div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nombre@hospital.cl"
          autoComplete="email"
          autoFocus
          style={inputStyle}
        />
        <div style={{ height: 14 }} />
        <div style={labelStyle}>Contraseña</div>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && valid && handle()}
          placeholder={existingStaff ? 'Tu contraseña' : 'Crea una contraseña'}
          style={inputStyle}
        />
        {err && (
          <div style={{ marginTop: 12, fontFamily: A_FB, fontSize: 12.5, color: '#D14B3A', fontWeight: 500 }}>{err}</div>
        )}
        <div style={{
          marginTop: 14, padding: '12px 14px', borderRadius: 16,
          background: KUN.cardSoft, fontFamily: A_FB, fontSize: 12,
          color: KUN.inkSoft, lineHeight: 1.45,
        }}>
          {existingStaff ? 'Usa la contraseña registrada para este perfil.' : 'En este prototipo, el primer ingreso crea la contraseña del perfil clínico.'}
        </div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={handle} disabled={!valid}>
          Entrar a KUN Salud
        </PrimaryButton>
      </div>
    </>
  );
}

function AdminLoginView({ onBack, onDemo }) {
  const [pass, setPass] = React.useState('');
  const [err, setErr] = React.useState('');
  const validPass = 'kun-admin';
  const handle = () => {
    if (pass.trim() !== validPass) {
      setErr('Clave incorrecta.');
      return;
    }
    setErr('');
    onDemo && onDemo();
  };
  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
      </div>
      <div style={{ position:'relative', zIndex: 1, padding: '18px 28px 0' }}>
        <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
          Administrador
        </div>
        <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
          Acceso interno para revisar la cuenta demo con datos de prueba.
        </div>
      </div>
      <div style={{ position:'relative', zIndex: 1, padding: '26px 28px 0' }}>
        <div style={labelStyle}>Clave de administrador</div>
        <input
          type="password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handle()}
          placeholder="Clave interna"
          autoFocus
          style={inputStyle}
        />
        {err && (
          <div style={{ marginTop: 12, fontFamily: A_FB, fontSize: 12.5, color: '#D14B3A', fontWeight: 500 }}>{err}</div>
        )}
        <div style={{
          marginTop: 14, padding: '12px 14px', borderRadius: 16,
          background: KUN.cardSoft, fontFamily: A_FB, fontSize: 12,
          color: KUN.inkSoft, lineHeight: 1.45,
        }}>
          Esta entrada no crea una cuenta real de familia ni mezcla datos con usuarios de testeo.
        </div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={handle} disabled={!pass.trim()}>
          Abrir cuenta demo
        </PrimaryButton>
      </div>
    </>
  );
}

const PARENTESCO_OPTIONS = [
  { value: 'mama', label: 'Mamá' },
  { value: 'papa', label: 'Papá' },
  { value: 'external', label: 'Invitado externo' },
];

const MAX_CHILDREN = 4;

function readBabyPhotoFile(file, onReady) {
  if (!file?.type?.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      const maxSide = 720;
      const scale = Math.min(1, maxSide / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(img.width * scale));
      canvas.height = Math.max(1, Math.round(img.height * scale));
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      onReady(canvas.toDataURL('image/jpeg', 0.82));
    };
    img.onerror = () => onReady(reader.result);
    img.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function BabyInfoView({ onContinue, onBack, initialFamilyRole, initialParentName, initialChildren, initialBirthDate, initialGestWeeks, initialGestDays }) {
  const [familyRole, setFamilyRole] = React.useState(initialFamilyRole || 'mama');
  const [parentName, setParentName] = React.useState(initialParentName || '');
  const [birthDate, setBirthDate] = React.useState(initialBirthDate || '');
  const [gestWeeks, setGestWeeks] = React.useState(
    (initialGestWeeks === 0 || initialGestWeeks) ? String(initialGestWeeks) : ''
  );
  const [gestDays, setGestDays] = React.useState(
    (initialGestDays === 0 || initialGestDays) ? String(initialGestDays) : '0'
  );
  const [children, setChildren] = React.useState(
    (Array.isArray(initialChildren) && initialChildren.length > 0)
      ? initialChildren
      : [{ id: makeChildId(0), name: '', sex: '', weightGrams: '' }]
  );

  const updateChild = (index, patch) => {
    setChildren(prev => prev.map((child, i) => i === index ? { ...child, ...patch } : child));
  };
  const handleChildPhoto = (index, file) => {
    readBabyPhotoFile(file, (photo) => updateChild(index, { photo }));
  };
  const addChild = () => {
    setChildren(prev => prev.length >= MAX_CHILDREN ? prev : [...prev, { id: makeChildId(prev.length), name: '', sex: '', weightGrams: '', photo: '' }]);
  };
  const removeChild = (index) => {
    setChildren(prev => prev.length <= 1 ? prev : prev.filter((_, i) => i !== index));
  };

  const weeksNum = parseInt(gestWeeks, 10);
  const daysNum = parseInt(gestDays, 10) || 0;
  const gestValid = Number.isFinite(weeksNum) && weeksNum >= 20 && weeksNum <= 44;
  const valid = !!birthDate && gestValid;
  const todayStr = new Date().toISOString().slice(0, 10);

  const handleContinue = () => {
    if (!valid) return;
    const prepared = children.map((child, index) => ({
      id: child.id || makeChildId(index),
      name: (child.name || '').trim(),
      sex: child.sex || '',
      weightGrams: child.weightGrams ? Math.max(0, parseInt(child.weightGrams, 10) || 0) : '',
      photo: child.photo || '',
    }));
    onContinue({
      familyRole, parentName: parentName.trim(), birthDate,
      gestWeeks: weeksNum,
      gestDays: Math.min(6, Math.max(0, daysNum)),
      children: prepared,
    });
  };

  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1, flex: 1, overflowY: 'auto', paddingBottom: 16 }}>
        <AuthBack onBack={onBack} />
        <div style={{ padding: '18px 28px 0' }}>
          <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Cuéntanos de tu recién nacido
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Con estos datos personalizamos el acompañamiento para tu bebé.
          </div>
        </div>

        <div style={{ padding: '24px 28px 0' }}>
          <div style={labelStyle}>¿Cuál es tu parentesco con el bebé?</div>
          <select
            value={familyRole}
            onChange={(e) => setFamilyRole(e.target.value)}
            style={{ ...inputStyle, fontFamily: A_FB, fontSize: 15 }}
          >
            {PARENTESCO_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div style={{ padding: '18px 28px 0' }}>
          <div style={labelStyle}>¿Cómo te llamas?</div>
          <input
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            placeholder="Tu nombre"
            autoComplete="name"
            style={{ ...inputStyle, fontFamily: A_FB, fontSize: 15 }}
          />
        </div>

        <div style={{ padding: '18px 28px 0' }}>
          <div style={labelStyle}>Fecha de nacimiento del bebé</div>
          <input
            type="date"
            value={birthDate}
            max={todayStr}
            onChange={(e) => setBirthDate(e.target.value)}
            style={{ ...inputStyle, fontFamily: A_FB, fontSize: 15 }}
          />
        </div>

        <div style={{ padding: '18px 28px 0' }}>
          <div style={labelStyle}>Edad gestacional al nacer</div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div style={{ flex: 1 }}>
              <input
                type="number"
                value={gestWeeks}
                min={20}
                max={44}
                onChange={(e) => setGestWeeks(e.target.value)}
                placeholder="Semanas"
                inputMode="numeric"
                style={{ ...inputStyle, fontFamily: A_FT, fontSize: 15, fontWeight: 700 }}
              />
              <div style={{ marginTop: 6, fontFamily: A_FB, fontSize: 11.5, color: KUN.inkMuted, fontWeight: 400 }}>Semanas</div>
            </div>
            <div style={{ flex: 1 }}>
              <select
                value={gestDays}
                onChange={(e) => setGestDays(e.target.value)}
                style={{ ...inputStyle, fontFamily: A_FT, fontSize: 15, fontWeight: 700 }}
              >
                {[0, 1, 2, 3, 4, 5, 6].map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
              <div style={{ marginTop: 6, fontFamily: A_FB, fontSize: 11.5, color: KUN.inkMuted, fontWeight: 400 }}>Días</div>
            </div>
          </div>
        </div>

        <div style={{ padding: '20px 28px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
            <div style={labelStyle}>¿Cuántos hijos tienes internados?</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
              <div style={{
                minWidth: 28, height: 28, borderRadius: 999, padding: '0 8px',
                background: KUN.cream, border: `1px solid ${KUN.hair}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: A_FT, fontWeight: 700, fontSize: 14, color: KUN.ink,
              }}>
                {children.length}
              </div>
              <button
                onClick={addChild}
                disabled={children.length >= MAX_CHILDREN}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  height: 34, padding: '0 14px', borderRadius: 999,
                  border: `1.5px solid ${children.length >= MAX_CHILDREN ? KUN.hair : KUN.brick}`,
                  background: children.length >= MAX_CHILDREN ? '#fff' : KUN.rosehip,
                  color: children.length >= MAX_CHILDREN ? KUN.inkMuted : KUN.ink,
                  fontFamily: A_FT, fontWeight: 700, fontSize: 13.5,
                  cursor: children.length >= MAX_CHILDREN ? 'default' : 'pointer',
                }}
              >
                <span style={{ fontSize: 18, lineHeight: 1, marginTop: -1 }}>+</span>
                Agregar
              </button>
            </div>
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 12.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Si son mellizos, trillizos o más, podrás cambiar entre ellos desde Inicio y ver su estado por separado.
          </div>
        </div>

        <div style={{ padding: '14px 28px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {children.map((child, index) => (
            <div key={child.id} style={{
              background: '#fff', border: `1px solid ${KUN.hair}`, borderRadius: 18,
              padding: 14,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <div style={labelStyle}>{`Hijo/a ${index + 1}`}</div>
                {index > 0 && (
                  <button
                    onClick={() => removeChild(index)}
                    style={{
                      border: 'none', background: 'transparent', cursor: 'pointer',
                      color: KUN.inkMuted, fontFamily: A_FB, fontSize: 12.5, fontWeight: 600,
                      padding: 0,
                    }}
                  >
                    Quitar
                  </button>
                )}
              </div>
              <div style={{ marginBottom: 12 }}>
                <div style={labelStyle}>Foto del bebé</div>
                <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
                  <label style={{
                    width: 72, height: 72, borderRadius:'50%',
                    overflow:'hidden', flexShrink:0,
                    border:`1.5px dashed ${KUN.brick}`,
                    background: KUN.cream,
                    display:'flex', alignItems:'center', justifyContent:'center',
                    cursor:'pointer',
                  }}>
                    {children[index]?.photo ? (
                      <img src={children[index].photo} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                    ) : (
                      <span style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:3, fontFamily:A_FT, fontSize:10.5, fontWeight:800, color:KUN.brick, textAlign:'center', lineHeight:1.1 }}>
                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none">
                          <path d="M4 8.2C4 7.1 4.9 6.2 6 6.2H8.2L9.8 4.3H14.2L15.8 6.2H18C19.1 6.2 20 7.1 20 8.2V17C20 18.1 19.1 19 18 19H6C4.9 19 4 18.1 4 17V8.2Z" stroke={KUN.brick} strokeWidth="1.8" strokeLinejoin="round"/>
                          <circle cx="12" cy="12.6" r="3.6" stroke={KUN.brick} strokeWidth="1.8"/>
                        </svg>
                        <span>Subir<br/>foto</span>
                      </span>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      style={{ display:'none' }}
                      onChange={e => { handleChildPhoto(index, e.target.files?.[0]); e.target.value = ''; }}
                    />
                  </label>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontFamily:A_FB, fontSize:12.5, color:KUN.inkSoft, lineHeight:1.45 }}>
                      Esta será la foto de Inicio. Si prefieres, puedes subirla después en Ajustes.
                    </div>
                    {children[index]?.photo && (
                      <button
                        onClick={() => updateChild(index, { photo: '' })}
                        style={{ marginTop:7, border:'none', background:'transparent', padding:0, color:KUN.brick, fontFamily:A_FT, fontSize:12.5, fontWeight:700, cursor:'pointer' }}
                      >
                        Quitar foto
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <input
                value={children[index]?.name || ''}
                onChange={(e) => updateChild(index, { name: e.target.value })}
                onKeyDown={(e) => e.key === 'Enter' && valid && handleContinue()}
                placeholder={`Nombre de bebé ${index + 1}`}
                autoFocus={index === 0}
                style={inputStyle}
              />
              <div style={{ height: 12 }} />
              <div style={labelStyle}>Peso actual</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <input
                  type="number"
                  value={children[index]?.weightGrams || ''}
                  onChange={(e) => updateChild(index, { weightGrams: e.target.value })}
                  placeholder="Ej: 1850"
                  inputMode="numeric"
                  min={0}
                  style={{ ...inputStyle, fontFamily: A_FT, fontSize: 15, fontWeight: 700 }}
                />
                <div style={{ fontFamily: A_FT, fontSize: 14, fontWeight: 700, color: KUN.inkSoft, flexShrink: 0 }}>
                  gramos
                </div>
              </div>
              <div style={{ marginTop: 6, fontFamily: A_FB, fontSize: 11.5, color: KUN.inkMuted, fontWeight: 400 }}>
                Luego podras actualizarlo dia a dia desde Inicio.
              </div>
              <div style={{ height: 12 }} />
              <div style={{ ...labelStyle, marginBottom: 8 }}>Sexo</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {[
                  { value: 'masculino', label: 'Masculino' },
                  { value: 'femenino', label: 'Femenino' },
                ].map(opt => {
                  const selected = (children[index]?.sex || '') === opt.value;
                  return (
                    <button
                      key={opt.value}
                      onClick={() => updateChild(index, { sex: opt.value })}
                      style={{
                        height: 44, borderRadius: 14,
                        border: `1.5px solid ${selected ? KUN.brick : KUN.hair}`,
                        background: selected ? KUN.rosehip : '#fff',
                        color: KUN.ink,
                        fontFamily: A_FB, fontWeight: selected ? 700 : 500, fontSize: 14,
                        cursor: 'pointer',
                      }}
                    >
                      {opt.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={handleContinue} disabled={!valid}>
          Continuar
        </PrimaryButton>
      </div>
    </>
  );
}

// ── Main entry ──────────────────────────────────────
function makeChildId(index) {
  return `child-${index + 1}-${Date.now()}`;
}

function createDemoParentAccount() {
  const childId = 'demo-child-sofia';
  return {
    role: 'parent',
    familyRole: 'mama',
    parentName: 'Camila',
    birthDate: '2026-05-24',
    gestWeeks: 30,
    gestDays: 4,
    children: [{
      id: childId,
      rut: 'demo-bebe',
      name: 'Sofía',
      sex: 'femenino',
      weightGrams: 1720,
      photo: 'guaguas/guagua3.jpg',
      vitalStatus: 'hospitalized',
    }],
    activeChildId: childId,
    babyName: 'Sofía',
    sessionActive: true,
    createdAt: 1719000000000,
    demoAccount: true,
    childrenSetupDone: true,
    tourDone: true,
    babyStatusDone: true,
    babyStatusDoneByChild: { [childId]: true },
  };
}


function ScreenAuth({ onAuthenticated }) {
  const stored = KAuth.load();
  const [view, setView] = React.useState('role');
  const [pendingFamilyRole, setPendingFamilyRole] = React.useState(stored?.familyRole || 'mama');
  const [pendingParentName, setPendingParentName] = React.useState(stored?.parentName || '');
  const [pendingChildren, setPendingChildren] = React.useState([]);
  const [pendingBirthDate, setPendingBirthDate] = React.useState('');
  const [pendingGestWeeks, setPendingGestWeeks] = React.useState('');
  const [pendingGestDays, setPendingGestDays] = React.useState('');

  const finishParentLogin = (data) => {
    const ready = { ...data, childrenSetupDone: true };
    KAuth.save(ready);
    onAuthenticated(ready);
  };

  return (
    <div style={{
      position: 'absolute', inset: 0, background: KUN.bg,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      zIndex: 50,
      fontFamily: A_FB,
    }}>
      {view === 'role' && (
        <RoleSelectView onPick={(role) => {
          if (role === 'admin') setView('admin');
          else if (role === 'worker') setView('worker');
          else setView('rut');
        }} onTerms={() => setView('terms')} />
      )}
      {view === 'terms' && (
        <TermsView onBack={() => setView('role')} />
      )}
      {view === 'worker' && (
        <WorkerLoginView
          onBack={() => setView('role')}
          onSubmit={(data) => {
            KAuth.save(data);
            onAuthenticated(data);
          }}
        />
      )}
      {view === 'admin' && (
        <AdminLoginView
          onBack={() => setView('role')}
          onDemo={() => {
            const demo = createDemoParentAccount();
            KAuth.save(demo);
            onAuthenticated(demo);
          }}
        />
      )}
      {view === 'rut' && (
        <BabyInfoView
          initialFamilyRole={pendingFamilyRole}
          initialParentName={pendingParentName}
          initialChildren={pendingChildren}
          initialBirthDate={pendingBirthDate}
          initialGestWeeks={pendingGestWeeks}
          initialGestDays={pendingGestDays}
          onBack={() => setView('role')}
          onContinue={({ familyRole, parentName, birthDate, gestWeeks, gestDays, children }) => {
            setPendingFamilyRole(familyRole);
            setPendingParentName(parentName);
            setPendingChildren(children);
            setPendingBirthDate(birthDate);
            setPendingGestWeeks(gestWeeks);
            setPendingGestDays(gestDays);
            const source = (children && children.length)
              ? children
              : [{ id: 'child-1', name: '', sex: '' }];
            const prepared = source.map((child, index) => ({
              id: child.id || `child-${index + 1}`,
              name: (child.name || '').trim() || `Bebé ${index + 1}`,
              sex: child.sex || '',
              weightGrams: child.weightGrams ? Math.max(0, parseInt(child.weightGrams, 10) || 0) : '',
              photo: child.photo || '',
            }));
            const first = prepared[0];
            finishParentLogin({
              role: 'parent', familyRole: familyRole || 'mama',
              parentName: (parentName || '').trim(),
              birthDate, gestWeeks, gestDays,
              children: prepared, activeChildId: first.id, babyName: first.name,
              sessionActive: true, createdAt: Date.now(),
              demoAccount: false,
              capsuleProgressByChild: {},
              // Completar el alta es un setup nuevo: reinicia el onboarding para
              // que siempre aparezcan el panel de estado del bebé y el tour guiado.
              tourDone: false,
              babyStatusDone: false,
              babyStatusDoneByChild: {},
            });
          }}
        />
      )}
    </div>
  );
}

window.ScreenAuth = ScreenAuth;
