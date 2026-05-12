// Auth — role selection (apoderado vs. trabajador de salud)
// + RUT + password flow for parents. Session persists in localStorage
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
    try { localStorage.removeItem(AUTH_KEY); } catch {}
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
      width: '100%', padding: '14px 18px', borderRadius: 999, border: 'none',
      background: disabled ? 'rgba(42,35,32,0.08)' : KUN.brick,
      color: disabled ? KUN.inkMuted : '#fff',
      fontFamily: A_FT, fontSize: 15, fontWeight: 700, letterSpacing: -0.1,
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
function RoleSelectView({ onPick }) {
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
              Soy apoderado
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
          <span style={{ color: KUN.brick, fontWeight: 600 }}>Términos y Política de privacidad</span>.
        </div>
      </div>
    </>
  );
}

function WorkerComingSoonView({ onBack }) {
  return (
    <>
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
      </div>
      <div style={{
        position:'relative', zIndex: 1,
        flex: 1, display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '20px 32px 60px', textAlign: 'center', gap: 14,
      }}>
        <div style={{
          width: 96, height: 96, borderRadius: 32,
          background: KUN.apple,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
            <path d="M9 4H15V8H9V4Z" stroke={KUN.ink} strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M5 8H19V20C19 20.6 18.6 21 18 21H6C5.4 21 5 20.6 5 20V8Z" stroke={KUN.ink} strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M12 12V17M9.5 14.5H14.5" stroke={KUN.ink} strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <div style={{ fontFamily: A_FT, fontSize: 24, fontWeight: 700, color: KUN.ink, letterSpacing: -0.3 }}>
          Versión para profesionales
        </div>
        <div style={{
          fontFamily: A_FB, fontSize: 14, color: KUN.inkSoft, fontWeight: 400,
          lineHeight: 1.6, maxWidth: 280,
        }}>
          Estamos trabajando en una experiencia diseñada para enfermeras, matronas y médicos que acompañan en UCIN.
        </div>
        <div style={{
          marginTop: 4, padding: '6px 14px', borderRadius: 999,
          background: KUN.sun, fontFamily: A_FT, fontSize: 11, fontWeight: 700, color: KUN.ink,
          letterSpacing: 0.6,
        }}>PRÓXIMAMENTE</div>
        <div onClick={onBack} style={{
          marginTop: 14, fontFamily: A_FT, fontSize: 14, fontWeight: 700,
          color: KUN.brick, cursor: 'pointer',
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
      <AuthShapes/>
      <div style={{ position:'relative', zIndex: 1 }}>
        <AuthBack onBack={onBack} />
        <div style={{ padding: '18px 28px 0' }}>
          <div style={{ fontFamily: A_FT, fontSize: 26, fontWeight: 700, color: KUN.ink, letterSpacing: -0.5, lineHeight: 1.15 }}>
            Ingresa tu RUT
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Lo usamos para identificarte y proteger tu información.
          </div>
        </div>
        <div style={{ padding: '28px 28px 0' }}>
          <div style={labelStyle}>RUT</div>
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
            Crea tu contraseña
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Es la primera vez que ingresas con <span style={{ fontWeight: 600, color: KUN.ink }}>{rut}</span>. Elige una contraseña fácil de recordar.
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
            Hola de nuevo
          </div>
          <div style={{ marginTop: 8, fontFamily: A_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400, lineHeight: 1.5 }}>
            Ingresa tu contraseña para <span style={{ fontWeight: 600, color: KUN.ink }}>{rut}</span>.
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
      fontFamily: A_FB,
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
