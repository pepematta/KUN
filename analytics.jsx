// KUN analytics helper. Safe no-op when PostHog config is missing.

const KUN_ANALYTICS_DEVICE_KEY = 'kun_analytics_device_id_v1';

function getKunAnalyticsEnv() {
  return (typeof window !== 'undefined' && window.KUN_ENV) || {};
}

function getKunPosthogConfig() {
  const env = getKunAnalyticsEnv();
  let query = {};
  try {
    query = Object.fromEntries(new URLSearchParams(window.location.search));
  } catch {}

  return {
    key:
      env.VITE_POSTHOG_KEY ||
      env.POSTHOG_KEY ||
      window.VITE_POSTHOG_KEY ||
      window.POSTHOG_KEY ||
      query.posthog_key ||
      localStorage.getItem('VITE_POSTHOG_KEY') ||
      '',
    host:
      env.VITE_POSTHOG_HOST ||
      env.POSTHOG_HOST ||
      window.VITE_POSTHOG_HOST ||
      window.POSTHOG_HOST ||
      query.posthog_host ||
      localStorage.getItem('VITE_POSTHOG_HOST') ||
      'https://us.i.posthog.com',
  };
}

function getAnonymousDeviceId() {
  try {
    const existing = localStorage.getItem(KUN_ANALYTICS_DEVICE_KEY);
    if (existing) return existing;
    const id = `kun_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 12)}`;
    localStorage.setItem(KUN_ANALYTICS_DEVICE_KEY, id);
    return id;
  } catch {
    return `kun_session_${Math.random().toString(36).slice(2, 12)}`;
  }
}

function sanitizeAnalyticsProps(props = {}) {
  const blocked = new Set([
    'name', 'nombre', 'babyName', 'parentName', 'author', 'content', 'text',
    'body', 'title_text', 'question', 'rut', 'email', 'photo', 'image',
  ]);
  return Object.entries(props).reduce((safe, [key, value]) => {
    if (blocked.has(key)) return safe;
    if (value === undefined || value === null) return safe;
    if (typeof value === 'string') safe[key] = value.slice(0, 80);
    else if (typeof value === 'number' || typeof value === 'boolean') safe[key] = value;
    else if (Array.isArray(value)) safe[key] = value.map(item => String(item).slice(0, 40)).slice(0, 8);
    return safe;
  }, {});
}

function getPosthogAssetUrl() {
  const { host } = getKunPosthogConfig();
  if (String(host).includes('eu.')) return 'https://eu-assets.i.posthog.com/static/array.js';
  return 'https://us-assets.i.posthog.com/static/array.js';
}

function loadPosthogScript(callback) {
  if (window.posthog) return callback();
  if (document.getElementById('kun-posthog-js')) {
    window.setTimeout(callback, 300);
    return;
  }
  const script = document.createElement('script');
  script.id = 'kun-posthog-js';
  script.async = true;
  script.src = getPosthogAssetUrl();
  script.onload = callback;
  script.onerror = () => console.warn('KUNAnalytics: no se pudo cargar PostHog.');
  document.head.appendChild(script);
}

const KUNAnalytics = {
  enabled: false,
  initialized: false,
  configured: false,
  queue: [],
  superProps: {},
  deviceId: getAnonymousDeviceId(),

  init() {
    if (this.initialized) return;
    this.initialized = true;
    const config = getKunPosthogConfig();
    if (!config.key) return;
    this.configured = true;

    loadPosthogScript(() => {
      if (!window.posthog || this.enabled) return;
      window.posthog.init(config.key, {
        api_host: config.host,
        person_profiles: 'never',
        autocapture: false,
        capture_pageview: false,
        // Session replay ACTIVO pero en modo enmascarado total: registra
        // navegación, clicks y layout para entender el uso, SIN capturar
        // contenido sensible. KUN muestra fotos de bebés, datos clínicos de
        // UCIN, nombres y texto del diario: nada de eso debe quedar grabado.
        disable_session_recording: false,
        session_recording: {
          maskAllInputs: true,             // oculta todo lo que se escribe
          maskTextSelector: '*',           // enmascara TODO el texto en pantalla
          blockSelector: 'img, picture, video, canvas, svg image', // bloquea fotos/media
          maskTextFn: () => '****',
        },
        persistence: 'localStorage',
        loaded: (posthog) => {
          posthog.identify(this.deviceId);
          posthog.register({ anonymous_device_id: this.deviceId, ...this.superProps });
          this.enabled = true;
          this.queue.splice(0).forEach(item => posthog.capture(item.eventName, item.props));
        },
      });
    });
  },

  // Registra "super properties" persistentes que se adjuntan a TODOS los
  // eventos y a la grabación de sesión. Útil para segmentar por tipo de
  // usuario (mamá / papá / invitado externo) sin datos personales.
  register(props = {}) {
    const safe = sanitizeAnalyticsProps(props);
    this.superProps = { ...this.superProps, ...safe };
    if (this.enabled && window.posthog) {
      window.posthog.register(this.superProps);
    }
  },

  track(eventName, props = {}) {
    const safeProps = {
      ...sanitizeAnalyticsProps(props),
      anonymous_device_id: this.deviceId,
    };
    if (!this.enabled || !window.posthog) {
      if (this.configured && this.queue.length < 50) this.queue.push({ eventName, props: safeProps });
      return;
    }
    window.posthog.capture(eventName, safeProps);
  },
};

window.KUNAnalytics = KUNAnalytics;
KUNAnalytics.init();
