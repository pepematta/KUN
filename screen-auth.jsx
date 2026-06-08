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
function formatRut(value) {
  let clean = String(value || '').replace(/[^0-9kK]/g, '').toUpperCase();
  if (clean.length > 9) clean = clean.slice(0, 9);
  if (clean.length < 2) return clean;
  const dv = clean.slice(-1);
  const body = clean.slice(0, -1);
  let formatted = '';
  for (let i = body.length; i > 0; i -= 3) {
    const start = Math.max(0, i - 3);
    formatted = body.slice(start, i) + (formatted ? '.' + formatted : '');
  }
  return formatted + '-' + dv;
}
function isValidRut(rut) {
  const clean = String(rut || '').replace(/[^0-9kK]/g, '');
  return clean.length >= 8;
}
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

function RutEntryView({ onContinue, onBack, initial }) {
  const [rut, setRut] = React.useState(initial || '');
  const valid = isValidRut(rut);
  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
        <div style={{ padding: '18px 28px 0' }}>
          <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Ingresa el RUT de tu recién nacido
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Usaremos el RUT de tu hijo/a para encontrar su cuenta y proteger su información.
          </div>
        </div>
        <div style={{ padding: '28px 28px 0' }}>
          <div style={labelStyle}>RUT del recién nacido</div>
          <input
            value={rut}
            onChange={(e) => setRut(formatRut(e.target.value))}
            onKeyDown={(e) => e.key === 'Enter' && valid && onContinue(rut)}
            placeholder="12.345.678-9"
            inputMode="text"
            autoComplete="off"
            autoFocus
            style={{ ...inputStyle, fontFamily: A_FT, fontSize: 16, fontWeight: 700 }}
          />
        </div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={() => onContinue(rut)} disabled={!valid}>
          Continuar
        </PrimaryButton>
      </div>
    </>
  );
}

function CreatePasswordView({ rut, onSubmit, onBack }) {
  const [pass, setPass] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const mismatch = pass.length > 0 && confirm.length > 0 && pass !== confirm;
  const valid = pass.length >= 6 && pass === confirm && isValidEmail(email);
  const handle = () => {
    if (pass.length < 6) return setErr('La contraseña debe tener al menos 6 caracteres.');
    if (pass !== confirm) return setErr('Las contraseñas no coinciden.');
    if (!isValidEmail(email)) return setErr('Ingresa un correo válido para recuperar tu contraseña.');
    setErr('');
    onSubmit(pass, email.trim());
  };
  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
        <div style={{ padding: '18px 28px 0' }}>
          <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Crea tu contraseña
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Es la primera vez que ingresas con el RUT <span style={{ fontWeight: 600, color: KUN.ink }}>{rut}</span>. Elige una contraseña y deja un correo de respaldo.
          </div>
        </div>
        <div style={{ padding: '24px 28px 0' }}>
          <div style={labelStyle}>Nueva contraseña</div>
          <input
            type="password" value={pass} onChange={(e) => setPass(e.target.value)}
            placeholder="Mínimo 6 caracteres" autoFocus
            style={inputStyle}
          />
          <div style={{ height: 14 }} />
          <div style={labelStyle}>Confirma tu contraseña</div>
          <input
            type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && valid && handle()}
            placeholder="Repítela aquí"
            style={{
              ...inputStyle,
              borderColor: mismatch ? '#D14B3A' : KUN.hair,
            }}
          />
          {mismatch && (
            <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 12.5, color: '#D14B3A', fontWeight: 500 }}>
              Las contraseñas no coinciden.
            </div>
          )}
          <div style={{ height: 14 }} />
          <div style={labelStyle}>Correo de respaldo</div>
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && valid && handle()}
            placeholder="correo@ejemplo.cl"
            autoComplete="email"
            style={inputStyle}
          />
          {err && (
            <div style={{ marginTop: 12, fontFamily: A_FB, fontSize: 12.5, color: '#D14B3A', fontWeight: 500 }}>{err}</div>
          )}
        </div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={handle} disabled={!valid}>
          Crear cuenta
        </PrimaryButton>
      </div>
    </>
  );
}

function LoginPasswordView({ rut, expectedPassword, onSubmit, onBack, onForgot }) {
  const [pass, setPass] = React.useState('');
  const [err, setErr] = React.useState('');
  const handle = () => {
    if (pass === expectedPassword) { setErr(''); onSubmit(); }
    else setErr('La contraseña no es correcta.');
  };
  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
        <div style={{ padding: '18px 28px 0' }}>
          <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Ya tienes una cuenta
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            El RUT <span style={{ fontWeight: 600, color: KUN.ink }}>{rut}</span> ya está registrado. Ingresa tu contraseña para continuar.
          </div>
        </div>
        <div style={{ padding: '24px 28px 0' }}>
          <div style={labelStyle}>Contraseña</div>
          <input
            type="password" value={pass} onChange={(e) => setPass(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && pass && handle()}
            placeholder="Tu contraseña" autoFocus
            style={inputStyle}
          />
          {err && (
            <div style={{ marginTop: 12, fontFamily: A_FB, fontSize: 12.5, color: '#D14B3A', fontWeight: 500 }}>{err}</div>
          )}
          <div onClick={onForgot} style={{
            marginTop: 14, fontFamily: A_FT, fontSize: 13, fontWeight: 700,
            color: KUN.brick, cursor: 'pointer', display: 'inline-block',
          }}>¿Olvidaste tu contraseña?</div>
        </div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={handle} disabled={!pass}>
          Entrar
        </PrimaryButton>
      </div>
    </>
  );
}

function ForgotEmailView({ rut, backupEmail, onBack, onSendCode }) {
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState('');
  const canContinue = isValidEmail(email);
  const handle = () => {
    if (!canContinue) return setErr('Ingresa un correo válido.');
    if (backupEmail && email.trim().toLowerCase() !== backupEmail.toLowerCase()) {
      return setErr('Ese correo no coincide con el correo de respaldo registrado.');
    }
    setErr('');
    onSendCode(email.trim());
  };
  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
        <div style={{ padding: '18px 28px 0' }}>
          <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Recupera tu contraseña
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Escribe el correo de respaldo asociado al RUT <span style={{ fontWeight: 600, color: KUN.ink }}>{rut}</span>. Te enviaremos un código para restablecerla.
          </div>
        </div>
        <div style={{ padding: '24px 28px 0' }}>
          <div style={labelStyle}>Correo de respaldo</div>
          <input
            type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && canContinue && handle()}
            placeholder="correo@ejemplo.cl" autoFocus autoComplete="email"
            style={inputStyle}
          />
          {err && <div style={{ marginTop: 12, fontFamily: A_FB, fontSize: 12.5, color: '#D14B3A', fontWeight: 500 }}>{err}</div>}
        </div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={handle} disabled={!canContinue}>
          Enviar código
        </PrimaryButton>
      </div>
    </>
  );
}

function RecoveryCodeView({ email, code, onBack, onVerified }) {
  const [typed, setTyped] = React.useState('');
  const [err, setErr] = React.useState('');
  const handle = () => {
    if (typed.trim() !== code) return setErr('El código no coincide.');
    setErr('');
    onVerified();
  };
  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
        <div style={{ padding: '18px 28px 0' }}>
          <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Ingresa el código
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            En este prototipo, el código enviado a <span style={{ fontWeight: 600, color: KUN.ink }}>{email}</span> es <span style={{ fontWeight: 700, color: KUN.brick }}>{code}</span>.
          </div>
        </div>
        <div style={{ padding: '24px 28px 0' }}>
          <div style={labelStyle}>Código de recuperación</div>
          <input
            value={typed} onChange={(e) => setTyped(e.target.value.replace(/\D/g, '').slice(0, 6))}
            onKeyDown={(e) => e.key === 'Enter' && typed.length === 6 && handle()}
            placeholder="123456" inputMode="numeric" autoFocus
            style={{ ...inputStyle, fontFamily: A_FT, fontSize: 20, fontWeight: 700, letterSpacing: 4, textAlign: 'center' }}
          />
          {err && <div style={{ marginTop: 12, fontFamily: A_FB, fontSize: 12.5, color: '#D14B3A', fontWeight: 500 }}>{err}</div>}
        </div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={handle} disabled={typed.length !== 6}>
          Verificar código
        </PrimaryButton>
      </div>
    </>
  );
}

function ResetPasswordView({ onBack, onSubmit }) {
  const [pass, setPass] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [err, setErr] = React.useState('');
  const valid = pass.length >= 6 && pass === confirm;
  const handle = () => {
    if (pass.length < 6) return setErr('La contraseña debe tener al menos 6 caracteres.');
    if (pass !== confirm) return setErr('Las contraseñas no coinciden.');
    setErr('');
    onSubmit(pass);
  };
  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
        <div style={{ padding: '18px 28px 0' }}>
          <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Crea una nueva contraseña
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Usa una clave nueva para volver a entrar a KUN.
          </div>
        </div>
        <div style={{ padding: '24px 28px 0' }}>
          <div style={labelStyle}>Nueva contraseña</div>
          <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="Mínimo 6 caracteres" autoFocus style={inputStyle} />
          <div style={{ height: 14 }} />
          <div style={labelStyle}>Confirma tu contraseña</div>
          <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && valid && handle()} placeholder="Repítela aquí" style={inputStyle} />
          {err && <div style={{ marginTop: 12, fontFamily: A_FB, fontSize: 12.5, color: '#D14B3A', fontWeight: 500 }}>{err}</div>}
        </div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={handle} disabled={!valid}>
          Guardar nueva contraseña
        </PrimaryButton>
      </div>
    </>
  );
}

// ── Main entry ──────────────────────────────────────
function makeChildId(index) {
  return `child-${index + 1}-${Date.now()}`;
}

function normalizeAuthChildren(data) {
  const existing = Array.isArray(data?.children) ? data.children : [];
  const children = existing.length > 0
    ? existing
    : [{ id: data?.rut || 'child-1', rut: data?.rut || '', name: data?.babyName || '' }];
  return children.map((child, index) => ({
    id: child.id || child.rut || makeChildId(index),
    rut: child.rut || (index === 0 ? data?.rut || '' : ''),
    name: child.name || child.babyName || (index === 0 ? data?.babyName || '' : ''),
  }));
}

function ChildrenSetupView({ sessionData, onSubmit }) {
  const initialChildren = normalizeAuthChildren(sessionData);
  const [count, setCount] = React.useState(Math.max(1, initialChildren.length || 1));
  const [children, setChildren] = React.useState(() => initialChildren);

  React.useEffect(() => {
    setChildren(prev => {
      const next = [...prev];
      while (next.length < count) next.push({ id: makeChildId(next.length), rut: '', name: '' });
      return next.slice(0, count);
    });
  }, [count]);

  const updateChild = (index, patch) => {
    setChildren(prev => prev.map((child, i) => i === index ? { ...child, ...patch } : child));
  };

  const preparedChildren = children.slice(0, count).map((child, index) => ({
    id: child.id || child.rut || makeChildId(index),
    rut: index === 0 ? (child.rut || sessionData?.rut || '') : (child.rut || ''),
    name: child.name || `Bebé ${index + 1}`,
  }));

  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1, flex: 1, overflowY: 'auto', paddingBottom: 16 }}>
        <div style={{ padding: '72px 28px 0' }}>
          <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
            ¿Tienes más de un hijo internado?
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Si son mellizos, trillizos o más, podrás cambiar entre ellos desde Inicio y ver su estado por separado.
          </div>
        </div>
        <div style={{ padding: '24px 28px 0' }}>
          <div style={labelStyle}>Hijos internados</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
            {[1, 2, 3, 4].map(n => (
              <button
                key={n}
                onClick={() => setCount(n)}
                style={{
                  height: 42, borderRadius: 999,
                  border: `1.5px solid ${count === n ? KUN.brick : KUN.hair}`,
                  background: count === n ? KUN.rosehip : '#fff',
                  color: KUN.ink,
                  fontFamily: A_FT, fontWeight: 700, fontSize: 15,
                  cursor: 'pointer',
                }}
              >
                {n}
              </button>
            ))}
          </div>

          <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {preparedChildren.map((child, index) => (
              <div key={child.id} style={{
                background: '#fff', border: `1px solid ${KUN.hair}`, borderRadius: 18,
                padding: 14,
              }}>
                <div style={{ ...labelStyle, marginBottom: 10 }}>Hijo/a {index + 1}</div>
                <input
                  value={children[index]?.name || ''}
                  onChange={(e) => updateChild(index, { name: e.target.value })}
                  placeholder={`Nombre de bebé ${index + 1}`}
                  style={inputStyle}
                />
                <div style={{ height: 10 }} />
                <input
                  value={index === 0 ? (children[index]?.rut || sessionData?.rut || '') : (children[index]?.rut || '')}
                  onChange={(e) => updateChild(index, { rut: formatRut(e.target.value) })}
                  placeholder={index === 0 ? 'RUT principal' : 'RUT opcional'}
                  style={{ ...inputStyle, fontSize: 13.5 }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ flex: 1 }}/>
      <div style={{ position:'relative', zIndex: 1, padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={() => {
          const first = preparedChildren[0] || {};
          onSubmit({
            ...sessionData,
            rut: first.rut || sessionData?.rut,
            babyName: first.name || sessionData?.babyName,
            children: preparedChildren,
            activeChildId: sessionData?.activeChildId || first.id,
            childrenSetupDone: true,
          });
        }}>
          Continuar
        </PrimaryButton>
      </div>
    </>
  );
}

function ScreenAuth({ onAuthenticated }) {
  const stored = KAuth.load();
  const [view, setView] = React.useState('role');
  const [pendingRut, setPendingRut] = React.useState(stored?.rut || '');
  const [storedPass, setStoredPass] = React.useState(stored?.password || null);
  const [backupEmail, setBackupEmail] = React.useState(stored?.backupEmail || '');
  const [recoveryCode, setRecoveryCode] = React.useState('');
  const [recoveryEmail, setRecoveryEmail] = React.useState('');
  const [pendingSession, setPendingSession] = React.useState(null);

  const finishParentLogin = (data) => {
    if (data.role === 'parent' && !data.childrenSetupDone) {
      setPendingSession(data);
      setView('children-setup');
      return;
    }
    KAuth.save(data);
    onAuthenticated(data);
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
          if (role === 'worker') setView('worker');
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
      {view === 'rut' && (
        <RutEntryView
          initial={pendingRut}
          onBack={() => setView('role')}
          onContinue={(rut) => {
            setPendingRut(rut);
            const existing = KAuth.load();
            if (existing && existing.rut === rut && existing.password) {
              setStoredPass(existing.password);
              setBackupEmail(existing.backupEmail || '');
              setView('login-pass');
            } else {
              setView('create-pass');
            }
          }}
        />
      )}
      {view === 'create-pass' && (
        <CreatePasswordView
          rut={pendingRut}
          onBack={() => setView('rut')}
          onSubmit={(pass, email) => {
            const data = {
              role: 'parent', rut: pendingRut, password: pass, backupEmail: email,
              sessionActive: true, createdAt: Date.now(),
            };
            finishParentLogin(data);
          }}
        />
      )}
      {view === 'login-pass' && (
        <LoginPasswordView
          rut={pendingRut}
          expectedPassword={storedPass}
          onBack={() => setView('rut')}
          onForgot={() => {
            setView('forgot-email');
          }}
          onSubmit={() => {
            const existing = KAuth.load() || {};
            const data = { ...existing, sessionActive: true };
            finishParentLogin(data);
          }}
        />
      )}
      {view === 'forgot-email' && (
        <ForgotEmailView
          rut={pendingRut}
          backupEmail={backupEmail}
          onBack={() => setView('login-pass')}
          onSendCode={(email) => {
            setRecoveryEmail(email);
            setRecoveryCode(String(Math.floor(100000 + Math.random() * 900000)));
            setView('recovery-code');
          }}
        />
      )}
      {view === 'recovery-code' && (
        <RecoveryCodeView
          email={recoveryEmail}
          code={recoveryCode}
          onBack={() => setView('forgot-email')}
          onVerified={() => setView('reset-pass')}
        />
      )}
      {view === 'reset-pass' && (
        <ResetPasswordView
          onBack={() => setView('recovery-code')}
          onSubmit={(pass) => {
            const existing = KAuth.load() || {};
            const data = {
              ...existing,
              role: 'parent',
              rut: pendingRut,
              password: pass,
              backupEmail: existing.backupEmail || recoveryEmail,
              sessionActive: true,
            };
            finishParentLogin(data);
          }}
        />
      )}
      {view === 'children-setup' && pendingSession && (
        <ChildrenSetupView
          sessionData={pendingSession}
          onSubmit={(data) => {
            KAuth.save(data);
            onAuthenticated(data);
          }}
        />
      )}
    </div>
  );
}

window.ScreenAuth = ScreenAuth;
