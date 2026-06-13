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

function loadPosthogScript(callback) {
  if (window.posthog) return callback();
  if (document.getElementById('kun-posthog-js')) {
    window.setTimeout(callback, 300);
    return;
  }
  const script = document.createElement('script');
  script.id = 'kun-posthog-js';
  script.async = true;
  script.src = 'https://cdn.jsdelivr.net/npm/posthog-js@1/dist/posthog.min.js';
  script.onload = callback;
  document.head.appendChild(script);
}

const KUNAnalytics = {
  enabled: false,
  initialized: false,
  configured: false,
  queue: [],
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
        disable_session_recording: true,
        persistence: 'localStorage',
        loaded: (posthog) => {
          posthog.identify(this.deviceId);
          posthog.register({ anonymous_device_id: this.deviceId });
          this.enabled = true;
          this.queue.splice(0).forEach(item => posthog.capture(item.eventName, item.props));
        },
      });
    });
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
