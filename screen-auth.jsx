// Auth — role selection (apoderado vs. trabajador de salud)
// + RUT + password flow for parents. Session persists in localStorage
// under key kun_auth_v1; once logged in, the app skips this screen.

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
    try { localStorage.removeItem(AUTH_KEY); } catch {}
  },
};
window.KAuth = KAuth;

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

// ── Shared UI ───────────────────────────────────────
function AuthBack({ onBack }) {
  return (
    <div style={{ padding: '60px 24px 4px', minHeight: 50, boxSizing: 'border-box' }}>
      {onBack && (
        <div onClick={onBack} style={{
          width: 40, height: 40, borderRadius: 20, background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 1px 2px rgba(46,42,38,0.04)', cursor: 'pointer',
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </div>
  );
}

function PrimaryButton({ children, onClick, disabled }) {
  return (
    <button onClick={disabled ? undefined : onClick} disabled={!!disabled} style={{
      width: '100%', padding: '16px 18px', borderRadius: 18, border: 'none',
      background: disabled ? KUN.cardSoft : KUN.accent,
      color: disabled ? KUN.inkMuted : '#fff',
      fontFamily: 'inherit', fontSize: 15, fontWeight: 800, letterSpacing: 0.1,
      cursor: disabled ? 'default' : 'pointer',
      boxShadow: disabled ? 'none' : '0 8px 18px rgba(201,123,90,0.35)',
      transition: 'all .2s',
    }}>{children}</button>
  );
}

const inputStyle = {
  width: '100%', padding: '16px 18px', boxSizing: 'border-box',
  background: '#fff', border: 'none', borderRadius: 18,
  fontFamily: 'inherit', fontSize: 16, fontWeight: 600,
  color: KUN.ink, letterSpacing: 0.3, outline: 'none',
  boxShadow: '0 1px 2px rgba(46,42,38,0.04)',
};

// ── Views ───────────────────────────────────────────
function RoleSelectView({ onPick }) {
  return (
    <>
      <div style={{ padding: '74px 28px 24px', textAlign: 'center' }}>
        <div style={{ fontSize: 56, lineHeight: 1, marginBottom: 6 }}>🦘</div>
        <div style={{
          fontSize: 30, fontWeight: 800, color: KUN.ink,
          letterSpacing: -0.6, lineHeight: 1.1,
        }}>KUN</div>
        <div style={{
          marginTop: 18, fontSize: 22, fontWeight: 800,
          color: KUN.ink, letterSpacing: -0.4, lineHeight: 1.2,
        }}>Bienvenido</div>
        <div style={{
          marginTop: 6, fontSize: 14.5, color: KUN.inkSoft,
          fontWeight: 500, lineHeight: 1.5,
        }}>¿Cómo quieres ingresar?</div>
      </div>

      <div style={{ padding: '0 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div onClick={() => onPick('parent')} style={{
          background: '#fff', borderRadius: 22, padding: 20,
          cursor: 'pointer', display: 'flex', gap: 16, alignItems: 'center',
          boxShadow: '0 1px 2px rgba(46,42,38,0.04), 0 8px 22px rgba(46,42,38,0.05)',
          border: `2px solid ${KUN.accent}`,
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 18,
            background: KUN.accentSoft,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="4" stroke={KUN.accentDeep} strokeWidth="1.9"/>
              <path d="M4 21C4 17 7.5 14 12 14C16.5 14 20 17 20 21" stroke={KUN.accentDeep} strokeWidth="1.9" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2 }}>
              Soy apoderado
            </div>
            <div style={{ fontSize: 13, color: KUN.inkSoft, fontWeight: 500, marginTop: 2, textWrap: 'pretty' }}>
              Mamá, papá o cuidador del bebé
            </div>
          </div>
        </div>

        <div onClick={() => onPick('worker')} style={{
          background: '#fff', borderRadius: 22, padding: 20,
          cursor: 'pointer', display: 'flex', gap: 16, alignItems: 'center',
          boxShadow: '0 1px 2px rgba(46,42,38,0.04)',
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 18,
            background: 'rgba(126,155,134,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
              <path d="M9 4H15V8H9V4Z" stroke={KUN.sage} strokeWidth="1.9" strokeLinejoin="round"/>
              <path d="M5 8H19V20C19 20.6 18.6 21 18 21H6C5.4 21 5 20.6 5 20V8Z" stroke={KUN.sage} strokeWidth="1.9" strokeLinejoin="round"/>
              <path d="M12 12V17M9.5 14.5H14.5" stroke={KUN.sage} strokeWidth="1.9" strokeLinecap="round"/>
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 17, fontWeight: 800, color: KUN.ink, letterSpacing: -0.2 }}>
              Trabajo en salud
            </div>
            <div style={{ fontSize: 13, color: KUN.inkSoft, fontWeight: 500, marginTop: 2, textWrap: 'pretty' }}>
              Enfermera, matrona, médico u otro
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 6, padding: '14px 4px', textAlign: 'center',
          fontSize: 12, color: KUN.inkMuted, fontWeight: 600, lineHeight: 1.5,
        }}>
          Al continuar aceptas nuestros<br/>
          <span style={{ color: KUN.accent, fontWeight: 700 }}>Términos y Política de privacidad</span>.
        </div>
      </div>
    </>
  );
}

function WorkerComingSoonView({ onBack }) {
  return (
    <>
      <AuthBack onBack={onBack} />
      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '20px 32px 60px', textAlign: 'center', gap: 14,
      }}>
        <div style={{
          width: 96, height: 96, borderRadius: 32,
          background: 'rgba(126,155,134,0.18)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M9 4H15V8H9V4Z" stroke={KUN.sage} strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M5 8H19V20C19 20.6 18.6 21 18 21H6C5.4 21 5 20.6 5 20V8Z" stroke={KUN.sage} strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M12 12V17M9.5 14.5H14.5" stroke={KUN.sage} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, color: KUN.ink, letterSpacing: -0.3 }}>
          Versión para profesionales
        </div>
        <div style={{
          fontSize: 14.5, color: KUN.inkSoft, fontWeight: 500,
          lineHeight: 1.5, maxWidth: 280, textWrap: 'pretty',
        }}>
          Estamos trabajando en una experiencia diseñada para enfermeras, matronas y médicos que acompañan en UCIN.
        </div>
        <div style={{
          marginTop: 4, padding: '6px 14px', borderRadius: 999,
          background: '#fff', fontSize: 11, fontWeight: 800, color: KUN.accentDeep,
          letterSpacing: 0.6,
        }}>PRÓXIMAMENTE</div>
        <div onClick={onBack} style={{
          marginTop: 14, fontSize: 14, fontWeight: 700,
          color: KUN.accent, cursor: 'pointer',
        }}>Volver</div>
      </div>
    </>
  );
}

function RutEntryView({ onContinue, onBack, initial }) {
  const [rut, setRut] = React.useState(initial || '');
  const valid = isValidRut(rut);
  return (
    <>
      <AuthBack onBack={onBack} />
      <div style={{ padding: '18px 28px 0' }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
          Ingresa tu RUT
        </div>
        <div style={{ marginTop: 8, fontSize: 14, color: KUN.inkSoft, fontWeight: 500, lineHeight: 1.5, textWrap: 'pretty' }}>
          Lo usamos para identificarte y proteger tu información.
        </div>
      </div>
      <div style={{ padding: '28px 28px 0', flex: 1 }}>
        <div style={{ fontSize: 11.5, fontWeight: 800, color: KUN.inkMuted, letterSpacing: 0.6, marginBottom: 8 }}>
          RUT
        </div>
        <input
          value={rut}
          onChange={(e) => setRut(formatRut(e.target.value))}
          onKeyDown={(e) => e.key === 'Enter' && valid && onContinue(rut)}
          placeholder="12.345.678-9"
          inputMode="text"
          autoComplete="off"
          autoFocus
          style={{ ...inputStyle, fontSize: 17, fontWeight: 700 }}
        />
      </div>
      <div style={{ padding: '20px 28px 36px' }}>
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
      <AuthBack onBack={onBack} />
      <div style={{ padding: '18px 28px 0' }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
          Crea tu contraseña
        </div>
        <div style={{ marginTop: 8, fontSize: 14, color: KUN.inkSoft, fontWeight: 500, lineHeight: 1.5, textWrap: 'pretty' }}>
          Es la primera vez que ingresas con <span style={{ fontWeight: 700, color: KUN.ink }}>{rut}</span>. Elige una contraseña fácil de recordar.
        </div>
      </div>
      <div style={{ padding: '24px 28px 0', flex: 1 }}>
        <div style={{ fontSize: 11.5, fontWeight: 800, color: KUN.inkMuted, letterSpacing: 0.6, marginBottom: 8 }}>
          NUEVA CONTRASEÑA
        </div>
        <input
          type="password" value={pass} onChange={(e) => setPass(e.target.value)}
          placeholder="Mínimo 6 caracteres" autoFocus
          style={inputStyle}
        />
        <div style={{ height: 14 }} />
        <div style={{ fontSize: 11.5, fontWeight: 800, color: KUN.inkMuted, letterSpacing: 0.6, marginBottom: 8 }}>
          CONFIRMA TU CONTRASEÑA
        </div>
        <input
          type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && valid && handle()}
          placeholder="Repítela aquí"
          style={inputStyle}
        />
        {err && (
          <div style={{ marginTop: 12, fontSize: 13, color: '#B85F50', fontWeight: 600 }}>{err}</div>
        )}
      </div>
      <div style={{ padding: '20px 28px 36px' }}>
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
      <AuthBack onBack={onBack} />
      <div style={{ padding: '18px 28px 0' }}>
        <div style={{ fontSize: 26, fontWeight: 800, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
          Hola de nuevo
        </div>
        <div style={{ marginTop: 8, fontSize: 14, color: KUN.inkSoft, fontWeight: 500, lineHeight: 1.5, textWrap: 'pretty' }}>
          Ingresa tu contraseña para <span style={{ fontWeight: 700, color: KUN.ink }}>{rut}</span>.
        </div>
      </div>
      <div style={{ padding: '24px 28px 0', flex: 1 }}>
        <div style={{ fontSize: 11.5, fontWeight: 800, color: KUN.inkMuted, letterSpacing: 0.6, marginBottom: 8 }}>
          CONTRASEÑA
        </div>
        <input
          type="password" value={pass} onChange={(e) => setPass(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && pass && handle()}
          placeholder="Tu contraseña" autoFocus
          style={inputStyle}
        />
        {err && (
          <div style={{ marginTop: 12, fontSize: 13, color: '#B85F50', fontWeight: 600 }}>{err}</div>
        )}
        <div onClick={onForgot} style={{
          marginTop: 14, fontSize: 13, fontWeight: 700,
          color: KUN.accent, cursor: 'pointer', display: 'inline-block',
        }}>¿Olvidaste tu contraseña?</div>
      </div>
      <div style={{ padding: '20px 28px 36px' }}>
        <PrimaryButton onClick={handle} disabled={!pass}>
          Entrar
        </PrimaryButton>
      </div>
    </>
  );
}

// ── Main entry ──────────────────────────────────────
function ScreenAuth({ onAuthenticated }) {
  const stored = KAuth.load();
  const [view, setView] = React.useState('role');
  const [pendingRut, setPendingRut] = React.useState(stored?.rut || '');
  const [storedPass, setStoredPass] = React.useState(stored?.password || null);

  return (
    <div style={{
      position: 'absolute', inset: 0, background: KUN.bg,
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
      zIndex: 50,
    }}>
      {view === 'role' && (
        <RoleSelectView onPick={(role) => {
          if (role === 'worker') setView('worker');
          else setView('rut');
        }} />
      )}
      {view === 'worker' && <WorkerComingSoonView onBack={() => setView('role')} />}
      {view === 'rut' && (
        <RutEntryView
          initial={pendingRut}
          onBack={() => setView('role')}
          onContinue={(rut) => {
            setPendingRut(rut);
            const existing = KAuth.load();
            if (existing && existing.rut === rut && existing.password) {
              setStoredPass(existing.password);
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
          onSubmit={(pass) => {
            const data = {
              role: 'parent', rut: pendingRut, password: pass,
              sessionActive: true, createdAt: Date.now(),
            };
            KAuth.save(data);
            onAuthenticated(data);
          }}
        />
      )}
      {view === 'login-pass' && (
        <LoginPasswordView
          rut={pendingRut}
          expectedPassword={storedPass}
          onBack={() => setView('rut')}
          onForgot={() => {
            // For prototype: clears stored auth so a new password can be set
            KAuth.clear();
            setStoredPass(null);
            setView('create-pass');
          }}
          onSubmit={() => {
            const existing = KAuth.load() || {};
            const data = { ...existing, sessionActive: true };
            KAuth.save(data);
            onAuthenticated(data);
          }}
        />
      )}
    </div>
  );
}

window.ScreenAuth = ScreenAuth;
