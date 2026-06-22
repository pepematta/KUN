const TOOLTIP_STORAGE_KEY = 'kun_tooltips_seen';
const tooltipInstanceOwners = new Map();

const TooltipSeenContext = React.createContext(null);

function readSeenTooltips() {
  try {
    const stored = JSON.parse(localStorage.getItem(TOOLTIP_STORAGE_KEY) || '[]');
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
}

function TooltipSeenProvider({ children }) {
  const [seenKeys, setSeenKeys] = React.useState(() => new Set(readSeenTooltips()));
  const [registeredKeys, setRegisteredKeys] = React.useState(() => new Map());
  const [loading] = React.useState(false);

  const registerTooltip = React.useCallback((tooltipKey) => {
    setRegisteredKeys(current => {
      const next = new Map(current);
      next.set(tooltipKey, (next.get(tooltipKey) || 0) + 1);
      return next;
    });
  }, []);

  const unregisterTooltip = React.useCallback((tooltipKey) => {
    setRegisteredKeys(current => {
      const next = new Map(current);
      const count = (next.get(tooltipKey) || 0) - 1;
      if (count > 0) next.set(tooltipKey, count);
      else next.delete(tooltipKey);
      return next;
    });
  }, []);

  const markSeen = React.useCallback((tooltipKey) => {
    const currentKeys = readSeenTooltips();
    if (!currentKeys.includes(tooltipKey)) {
      try {
        localStorage.setItem(
          TOOLTIP_STORAGE_KEY,
          JSON.stringify([...currentKeys, tooltipKey])
        );
      } catch {}
    }

    setSeenKeys(current => {
      if (current.has(tooltipKey)) return current;
      const next = new Set(current);
      next.add(tooltipKey);
      return next;
    });
  }, []);

  const activeTooltipKey = Array.from(registeredKeys.keys())
    .find(key => !seenKeys.has(key)) || null;

  return (
    <TooltipSeenContext.Provider value={{
      seenKeys,
      loading,
      markSeen,
      activeTooltipKey,
      registerTooltip,
      unregisterTooltip,
    }}>
      {children}
    </TooltipSeenContext.Provider>
  );
}

function useContextualTooltip(tooltipKey) {
  const context = React.useContext(TooltipSeenContext);

  if (!context) {
    throw new Error(
      'useContextualTooltip debe usarse dentro de TooltipSeenProvider'
    );
  }

  React.useEffect(() => {
    context.registerTooltip(tooltipKey);
    return () => context.unregisterTooltip(tooltipKey);
  }, [context.registerTooltip, context.unregisterTooltip, tooltipKey]);

  return {
    visible:
      !context.loading &&
      context.activeTooltipKey === tooltipKey &&
      !context.seenKeys.has(tooltipKey),
    dismiss: () => context.markSeen(tooltipKey),
  };
}

function ContextualTooltip({
  tooltipKey,
  content,
  children,
  position = 'bottom',
}) {
  const { visible, dismiss } = useContextualTooltip(tooltipKey);
  const markerRef = React.useRef(null);
  const instanceId = React.useRef(`${tooltipKey}-${Math.random().toString(36).slice(2)}`);
  const [ownsTooltip, setOwnsTooltip] = React.useState(false);
  const [placement, setPlacement] = React.useState(null);

  React.useEffect(() => {
    if (!visible) {
      setOwnsTooltip(false);
      return undefined;
    }

    const currentOwner = tooltipInstanceOwners.get(tooltipKey);
    if (!currentOwner) {
      tooltipInstanceOwners.set(tooltipKey, instanceId.current);
      setOwnsTooltip(true);
    } else {
      setOwnsTooltip(currentOwner === instanceId.current);
    }

    return () => {
      if (tooltipInstanceOwners.get(tooltipKey) === instanceId.current) {
        tooltipInstanceOwners.delete(tooltipKey);
      }
    };
  }, [tooltipKey, visible]);

  const updatePlacement = React.useCallback(() => {
    if (!visible || !ownsTooltip || !markerRef.current) return;
    const target = markerRef.current.nextElementSibling;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const bubbleWidth = Math.min(250, viewportWidth - 24);
    const estimatedHeight = 112;
    const gap = 10;
    const requestedAbove = position === 'top';
    const fitsBelow = rect.bottom + gap + estimatedHeight <= viewportHeight - 12;
    const fitsAbove = rect.top - gap - estimatedHeight >= 12;
    const showAbove = requestedAbove ? fitsAbove || !fitsBelow : !fitsBelow && fitsAbove;
    const targetCenter = rect.left + rect.width / 2;
    const left = Math.max(
      12,
      Math.min(targetCenter - bubbleWidth / 2, viewportWidth - bubbleWidth - 12)
    );
    const top = showAbove
      ? Math.max(12, rect.top - estimatedHeight - gap)
      : Math.min(viewportHeight - estimatedHeight - 12, rect.bottom + gap);
    const arrowLeft = Math.max(
      18,
      Math.min(targetCenter - left, bubbleWidth - 18)
    );

    setPlacement({
      top,
      left,
      width: bubbleWidth,
      arrowLeft,
      showAbove,
    });
  }, [ownsTooltip, position, visible]);

  React.useLayoutEffect(() => {
    updatePlacement();
  }, [updatePlacement]);

  React.useEffect(() => {
    if (!visible) return undefined;
    window.addEventListener('resize', updatePlacement);
    window.addEventListener('scroll', updatePlacement, true);
    return () => {
      window.removeEventListener('resize', updatePlacement);
      window.removeEventListener('scroll', updatePlacement, true);
    };
  }, [updatePlacement, visible]);

  const overlay = visible && ownsTooltip && placement
    ? ReactDOM.createPortal(
        <>
          <div
            onClick={dismiss}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 900,
              background: 'transparent',
            }}
          />
          <div
            role="dialog"
            aria-label="Ayuda contextual"
            onClick={event => event.stopPropagation()}
            style={{
              position: 'fixed',
              top: placement.top,
              left: placement.left,
              width: placement.width,
              boxSizing: 'border-box',
              zIndex: 901,
              padding: '13px 15px',
              borderRadius: 16,
              background: '#fff',
              border: `1px solid ${KUN.hair}`,
              boxShadow: '0 10px 28px rgba(42,35,32,0.16)',
              fontFamily: 'Poppins, sans-serif',
              fontSize: 12.5,
              lineHeight: 1.5,
              color: KUN.ink,
            }}
          >
            <div
              style={{
                position: 'absolute',
                left: placement.arrowLeft - 7,
                [placement.showAbove ? 'bottom' : 'top']: -7,
                width: 14,
                height: 14,
                background: '#fff',
                borderRight: placement.showAbove ? `1px solid ${KUN.hair}` : 'none',
                borderBottom: placement.showAbove ? `1px solid ${KUN.hair}` : 'none',
                borderLeft: placement.showAbove ? 'none' : `1px solid ${KUN.hair}`,
                borderTop: placement.showAbove ? 'none' : `1px solid ${KUN.hair}`,
                transform: 'rotate(45deg)',
              }}
            />
            <div style={{ position: 'relative' }}>{content}</div>
            <button
              onClick={dismiss}
              style={{
                position: 'relative',
                marginTop: 8,
                padding: 0,
                border: 'none',
                background: 'transparent',
                color: KUN.brick,
                fontFamily: 'Quicksand, sans-serif',
                fontSize: 12.5,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Entendido
            </button>
          </div>
        </>,
        document.body
      )
    : null;

  return (
    <>
      <span ref={markerRef} aria-hidden="true" style={{ display: 'none' }} />
      {children}
      {overlay}
    </>
  );
}

window.TooltipSeenProvider = TooltipSeenProvider;
window.useContextualTooltip = useContextualTooltip;
window.ContextualTooltip = ContextualTooltip;
