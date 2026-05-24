// screen-capsula.jsx — Cápsula educativa genérica, 5 páginas navegables.
// Usa CAP_LIBRARY[capsuleId] para cargar el contenido de cada cápsula.
// Expone: ScreenCapsula({ capsuleId, onBack, onComplete, onPublishForum })

// ── Iconos reutilizables ──────────────────────────────────────────────────────

const CI = {
  drop: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 4C22 12 25 18 25 23C25 27.5 21 31 16 31C11 31 7 27.5 7 23C7 18 10 12 16 4Z" fill={c} opacity="0.85"/>
      <ellipse cx="13" cy="20" rx="3" ry="5" fill="#fff" opacity="0.6"/>
    </svg>
  ),
  face: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="11" fill={c} opacity="0.25" stroke={c} strokeWidth="1.8"/>
      <path d="M11 19C11 19 13 21.5 16 21.5C19 21.5 21 19 21 19" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="12" cy="13.5" r="1.5" fill={c}/>
      <circle cx="20" cy="13.5" r="1.5" fill={c}/>
    </svg>
  ),
  heart: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 26C16 26 5 19 5 11.5C5 8 8 5.5 11.5 5.5C13.5 5.5 15.2 6.5 16 8C16.8 6.5 18.5 5.5 20.5 5.5C24 5.5 27 8 27 11.5C27 19 16 26 16 26Z" fill={c} opacity="0.85"/>
    </svg>
  ),
  kang: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M10 26C10 19 12.5 15 16 14C15.3 12.5 16 11 17.5 10.7C19 10.5 20 12 19.5 13.3C21 14 22 16 22 18" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <ellipse cx="15" cy="19.5" rx="3" ry="2.4" fill={c} opacity="0.35" stroke={c} strokeWidth="1.5"/>
    </svg>
  ),
  baby: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="11" r="5.5" fill={c} opacity="0.85"/>
      <path d="M8 27C8 22 11.5 18.5 16 18.5C20.5 18.5 24 22 24 27" fill={c} opacity="0.85"/>
    </svg>
  ),
  wave: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M4 16C8 9 12 23 16 16C20 9 24 23 28 16" stroke={c} strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    </svg>
  ),
  monitor: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <rect x="3" y="5" width="26" height="18" rx="3" fill={c} opacity="0.18" stroke={c} strokeWidth="1.8"/>
      <path d="M9 14L12 10L16 17L20 12L23 14" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M13 23V27M19 23V27M10 27H22" stroke={c} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  milk: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M11 9C11 7.5 12 7 13 7H19C20 7.5 21 8 21 9L22 24C22 25.5 21 26 20 26H12C11 26 10 25.5 10 24Z" fill={c} opacity="0.85"/>
      <ellipse cx="14" cy="15" rx="2" ry="3.5" fill="#fff" opacity="0.5"/>
    </svg>
  ),
  home: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M5 13L16 5L27 13V27C27 28 26 28 25 28H7C6 28 5 28 5 27V13Z" fill={c} opacity="0.85"/>
      <path d="M12 28V20H20V28" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
    </svg>
  ),
  shield: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L6 8V16C6 21.5 10.5 26.5 16 28C21.5 26.5 26 21.5 26 16V8Z" fill={c} opacity="0.85"/>
      <path d="M11 16L14.5 19.5L21 12.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  star: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <path d="M16 4L19.5 12H28L21.5 17.5L24 26L16 21L8 26L10.5 17.5L4 12H12.5Z" fill={c} opacity="0.85"/>
    </svg>
  ),
  ecmo: (c) => (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="10" fill={c} opacity="0.18" stroke={c} strokeWidth="1.8"/>
      <path d="M10 16C10 12.5 12.5 10 16 10C19.5 10 22 12.5 22 16" stroke={c} strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      <circle cx="10" cy="16" r="2.5" fill={c} opacity="0.85"/>
      <circle cx="22" cy="16" r="2.5" fill={c} opacity="0.85"/>
    </svg>
  ),
};

// ── Librería de cápsulas ──────────────────────────────────────────────────────

const CAP_LIBRARY = {
  // ── 1 · Tu bebé empezó a alimentarse por sonda ──────────────────────────────
  1: {
    headerTitle: 'Alimentación por sonda',
    dur: '4 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué es la sonda nasogástrica?',
        icon: () => CI.drop(KUN.sage),
        text: 'Es un tubo muy delgado y flexible que entra por la nariz de tu bebé y llega hasta su estómago. Se usa cuando el bebé aún no tiene la fuerza o la coordinación para succionar y tragar por sí solo, algo muy común en los prematuros.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: '¿Por qué la necesita?',
        icon: () => CI.drop(KUN.accent),
        text: 'Los bebés prematuros nacen antes de que el reflejo de succión esté completamente desarrollado. La sonda le permite recibir la leche directamente en el estómago, para que pueda crecer y ganar fuerzas sin gastar energía en el esfuerzo de alimentarse.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: '¿Duele?',
        icon: () => CI.face(KUN.sage),
        text: 'No. Puede verse incómoda, pero los bebés se acostumbran rápidamente. Si tu bebé está tranquilo, la sonda no le está molestando.',
      },
      {
        num: 4, kind: 'list',
        title: '¿Qué puedes hacer tú?',
        items: [
          { title: 'Háblale suavemente', text: 'Mientras se alimenta, tu voz lo calma y hace del momento algo más cercano.' },
          { title: 'Succión no nutritiva', text: 'Si el médico lo permite, ofrécele tu dedo o un chupete mientras recibe la leche por la sonda. Esto ayuda a su desarrollo.' },
          { title: 'Pregunta a la enfermera', text: '¿Cuándo podría empezar el pecho o mamadera? Cada bebé tiene su ritmo.' },
        ],
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'La sonda es temporal.', sub: 'Es un puente mientras tu bebé madura.' },
          { headline: 'Tu voz y presencia lo calman.', sub: 'Háblale suavemente durante la alimentación.' },
          { headline: 'La succión no nutritiva ayuda.', sub: 'Ayuda al desarrollo de tu bebé.' },
        ],
      },
    ],
  },

  // ── 2 · Método canguro: cómo empezar ────────────────────────────────────────
  2: {
    headerTitle: 'Método canguro',
    dur: '6 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué es el método canguro?',
        icon: () => CI.kang(KUN.sage),
        text: 'Es la práctica de colocar a tu bebé directamente sobre tu pecho desnudo, piel con piel. La OMS lo recomienda para todos los prematuros porque regula su temperatura, estabiliza su respiración y fortalece el vínculo entre ustedes.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: '¿Qué le hace al bebé?',
        icon: () => CI.heart(KUN.accent),
        text: 'El contacto piel a piel activa el sistema nervioso de tu bebé de forma positiva. Regula su frecuencia cardíaca, mejora su oxigenación y reduce el estrés. Tu calor corporal reemplaza parte del trabajo que hace la incubadora.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: '¿Cómo se hace?',
        icon: () => CI.kang(KUN.sage),
        text: 'Siéntate en una posición cómoda y reclinada. El bebé se coloca verticalmente sobre tu pecho, con su cabeza girada hacia un lado para respirar libremente. Cúbrelo con una manta por la espalda. El equipo de enfermería te guiará la primera vez.',
      },
      {
        num: 4, kind: 'text', accent: KUN.accentSoft,
        title: '¿Cuánto tiempo y con qué frecuencia?',
        icon: () => CI.heart(KUN.accent),
        text: 'Incluso 30 minutos al día tienen beneficios medibles. Idealmente, cuanto más tiempo mejor. Tanto la mamá como el papá pueden practicarlo. No necesitas esperar a que tu bebé esté completamente estable — consulta con la enfermera cuándo es el momento adecuado para tu bebé.',
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'El canguro regula cuerpo y mente.', sub: 'Temperatura, respiración y frecuencia cardíaca se estabilizan.' },
          { headline: 'Mamá y papá pueden practicarlo.', sub: 'Ambos pueden tener este contacto especial con el bebé.' },
          { headline: 'Las sesiones cortas también cuentan.', sub: 'Incluso 30 minutos al día tienen un impacto real.' },
        ],
      },
    ],
  },

  // ── 3 · Cómo se ve tu bebé hoy ──────────────────────────────────────────────
  3: {
    headerTitle: 'Tu bebé hoy',
    dur: '3 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: 'Un cuerpo que sorprende',
        icon: () => CI.baby(KUN.sage),
        text: 'Si tu bebé es prematuro, su apariencia puede ser muy distinta a la de un recién nacido de término. Eso es completamente normal. Su cuerpo está haciendo exactamente lo que debe hacer: seguir desarrollándose fuera del útero.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: 'Su piel',
        icon: () => CI.drop(KUN.accent),
        text: 'Puede verse muy delgada, casi transparente, con venitas visibles. También puede tener un vello fino llamado lanugo. Su piel puede parecer frágil, pero está cumpliendo su función de protegerlo.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: 'Su tamaño y proporciones',
        icon: () => CI.baby(KUN.sage),
        text: 'Su cabeza puede parecer grande en relación a su cuerpo. Sus extremidades son delgadas y sus movimientos pueden ser bruscos o temblorosos. Todo esto es parte del desarrollo neurológico normal a esta etapa.',
      },
      {
        num: 4, kind: 'text', accent: KUN.accentSoft,
        title: 'Los cables y tubos',
        icon: () => CI.monitor(KUN.accent),
        text: 'Ver a tu bebé conectado a monitores, sondas o ventilación puede ser impactante. Cada dispositivo tiene un propósito específico: monitorear sus signos vitales, alimentarlo o ayudarlo a respirar. No indican que algo esté mal, sino que está recibiendo el apoyo que necesita.',
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'Su apariencia es normal para su etapa.', sub: 'Piel delgada, lanugo y proporciones distintas son esperables.' },
          { headline: 'Cuerpo y movimientos irán cambiando.', sub: 'A medida que madure, todo irá tomando su lugar.' },
          { headline: 'Los dispositivos son herramientas de apoyo.', sub: 'No señalan peligro, sino cuidado especializado.' },
        ],
      },
    ],
  },

  // ── 4 · Entender los monitores ──────────────────────────────────────────────
  4: {
    headerTitle: 'Los monitores',
    dur: '5 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Para qué sirven los monitores?',
        icon: () => CI.monitor(KUN.sage),
        text: 'Los monitores registran constantemente las funciones vitales de tu bebé: frecuencia cardíaca, respiración y nivel de oxígeno en sangre. Te permiten a ti y al equipo médico saber en todo momento cómo está tu bebé.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: 'Las alarmas',
        icon: () => CI.wave(KUN.accent),
        text: 'Las alarmas suenan cuando algún valor sale de rango. Esto no siempre significa una emergencia. A veces el sensor se mueve, el bebé cambia de posición o tiene una pausa respiratoria breve que se resuelve sola. El equipo sabe distinguir cuándo actuar.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: 'Los números que verás',
        icon: () => CI.monitor(KUN.sage),
        text: 'Frecuencia cardíaca normal en prematuros: entre 120 y 160 latidos por minuto. Saturación de oxígeno: idealmente sobre 90–95%. Frecuencia respiratoria: entre 40 y 60 respiraciones por minuto. El equipo te explicará los rangos específicos para tu bebé.',
      },
      {
        num: 4, kind: 'list',
        title: '¿Qué hacer cuando suena una alarma?',
        items: [
          { title: 'Mantén la calma', text: 'Observa si tu bebé está bien antes de reaccionar. Muchas alarmas se resuelven solas.' },
          { title: 'Llama a la enfermera', text: 'No intentes ajustar los monitores ni los sensores por tu cuenta.' },
          { title: 'Aprende con el tiempo', text: 'Irás distinguiendo las alarmas que requieren atención inmediata de las que no.' },
        ],
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'Los monitores vigilan signos vitales clave.', sub: 'Frecuencia cardíaca, respiración y oxígeno en sangre.' },
          { headline: 'No toda alarma es una emergencia.', sub: 'El equipo evalúa cada situación con calma.' },
          { headline: 'Te irás familiarizando.', sub: 'Con el tiempo aprenderás a leer los números y sonidos.' },
        ],
      },
    ],
  },

  // ── 5 · Posición correcta en el canguro ─────────────────────────────────────
  5: {
    headerTitle: 'Posición en el canguro',
    dur: '4 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: 'La posición importa',
        icon: () => CI.kang(KUN.sage),
        text: 'Una posición correcta durante el método canguro garantiza que tu bebé respire bien, esté cómodo y pueda aprovechar al máximo el contacto piel a piel. Una posición incorrecta puede comprometer su vía aérea.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: 'La postura de tu bebé',
        icon: () => CI.baby(KUN.accent),
        text: 'Tu bebé debe estar vertical sobre tu pecho, con la cabeza girada hacia un lado y ligeramente extendida hacia atrás para mantener la vía aérea abierta. Sus caderas deben estar flexionadas, como si estuviera en posición de rana. Su abdomen debe apoyarse en tu pecho, no colgar.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: 'Tu postura',
        icon: () => CI.kang(KUN.sage),
        text: 'Siéntate reclinado entre 30 y 60 grados, nunca completamente horizontal ni completamente vertical. Usa almohadas para apoyar tus brazos. El objetivo es que ambos estén cómodos y relajados durante todo el tiempo que dure la sesión.',
      },
      {
        num: 4, kind: 'list',
        title: 'Señales de que todo está bien',
        items: [
          { title: 'Color rosado', text: 'La piel de tu bebé mantiene un tono rosado, sin cambios bruscos de coloración.' },
          { title: 'Respiración regular', text: 'Respira de forma constante y sin esfuerzo visible.' },
          { title: 'Calma y sueño', text: 'Está tranquilo, somnoliento o durmiendo pacíficamente sobre tu pecho.' },
        ],
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'La cabeza debe estar girada y extendida.', sub: 'Para mantener la vía aérea libre en todo momento.' },
          { headline: 'Tú reclinado entre 30 y 60 grados.', sub: 'Cómodo y apoyado para que la sesión dure más.' },
          { headline: 'Color, respiración y calma lo confirman.', sub: 'Esas son las señales de que todo va bien.' },
        ],
      },
    ],
  },

  // ── 6 · Producción de leche materna ─────────────────────────────────────────
  6: {
    headerTitle: 'Producción de leche',
    dur: '5 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: 'Por qué la leche materna es especial',
        icon: () => CI.milk(KUN.sage),
        text: 'La leche de una mamá de prematuro es diferente a la de una mamá de bebé de término. Tiene más proteínas, más anticuerpos y más factores de crecimiento, exactamente lo que tu bebé necesita para madurar. Tu cuerpo sabe lo que está haciendo.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: 'Cómo estimular la producción',
        icon: () => CI.drop(KUN.accent),
        text: 'La extracción frecuente es clave: idealmente cada 2 a 3 horas, incluso de noche. Cuanto más extraes, más produce tu cuerpo. El método canguro también ayuda: el contacto con tu bebé libera oxitocina, la hormona que favorece la bajada de leche.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: 'El estrés y la leche',
        icon: () => CI.milk(KUN.sage),
        text: 'El estrés emocional puede reducir la producción. Esto no es tu culpa, es fisiología. Intenta extraer en un ambiente tranquilo, con una foto de tu bebé cerca o pensando en él. Pide apoyo a la trabajadora de lactancia de la unidad si notas una baja sostenida.',
      },
      {
        num: 4, kind: 'text', accent: KUN.accentSoft,
        title: 'Si la producción baja',
        icon: () => CI.heart(KUN.accent),
        text: 'Es normal que la producción fluctúe. Si baja, no te rindas de inmediato. Aumenta la frecuencia de extracción, mantén la hidratación y el descanso en la medida de lo posible. Si necesitas complementar con fórmula, no significa que hayas fallado: lo importante es el bienestar de tu bebé.',
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'Tu leche es única para tu bebé.', sub: 'Diseñada especialmente para un prematuro.' },
          { headline: 'Extracción frecuente y canguro, tus aliados.', sub: 'Cuanto más extraes, más produce tu cuerpo.' },
          { headline: 'El estrés afecta: busca apoyo.', sub: 'Pide ayuda a la trabajadora de lactancia si lo necesitas.' },
        ],
      },
    ],
  },

  // ── 7 · Lactancia con sonda ──────────────────────────────────────────────────
  7: {
    headerTitle: 'Lactancia con sonda',
    dur: '4 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: 'Alimentarse mientras madura',
        icon: () => CI.milk(KUN.sage),
        text: 'Muchos bebés prematuros reciben leche materna a través de la sonda antes de poder succionar por sí solos. Esto no es un retroceso: es la forma en que tu bebé recibe todos los beneficios de tu leche mientras su reflejo de succión termina de desarrollarse.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: 'Succión no nutritiva',
        icon: () => CI.baby(KUN.accent),
        text: 'Mientras tu bebé se alimenta por sonda, puedes ofrecerle tu pecho o un chupete para que practique la succión sin el esfuerzo de extraer leche. Esto se llama succión no nutritiva y tiene beneficios reales: acelera la maduración del reflejo y reduce el estrés del bebé.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: 'La transición al pecho o mamadera',
        icon: () => CI.milk(KUN.sage),
        text: 'La transición ocurre de forma gradual, a medida que tu bebé gana fuerza y coordinación. Primero intentará succionar por períodos cortos, luego irá aumentando. El ritmo lo marca tu bebé, no una fecha en el calendario.',
      },
      {
        num: 4, kind: 'text', accent: KUN.accentSoft,
        title: 'Cómo acompañar el proceso',
        icon: () => CI.heart(KUN.accent),
        text: 'Tu presencia durante la alimentación por sonda es valiosa aunque no puedas amamantar todavía. Hablarle, tocarlo suavemente y hacer contacto visual le comunica que estás ahí. Cuando llegue el momento de intentar el pecho, el equipo te acompañará.',
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'La sonda permite recibir leche materna.', sub: 'Mientras el reflejo de succión termina de madurar.' },
          { headline: 'La succión no nutritiva acelera el desarrollo.', sub: 'Practica con pecho o chupete durante la alimentación.' },
          { headline: 'La transición es gradual y va al ritmo del bebé.', sub: 'No hay fechas, solo el ritmo de tu bebé.' },
        ],
      },
    ],
  },

  // ── 8 · Etapas del desarrollo prematuro ─────────────────────────────────────
  8: {
    headerTitle: 'Desarrollo prematuro',
    dur: '5 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: 'Un desarrollo que continúa',
        icon: () => CI.star(KUN.sage),
        text: 'Nacer antes de tiempo no detiene el desarrollo de tu bebé, lo traslada a un nuevo entorno. Muchos de los hitos que habría alcanzado en el útero los irá logrando en la UCIN y en casa. La edad corregida, no la de nacimiento, es la referencia para evaluar su desarrollo.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: 'Edad cronológica vs. edad corregida',
        icon: () => CI.baby(KUN.accent),
        text: 'La edad corregida se calcula desde la fecha en que debería haber nacido. Un bebé de 4 meses que nació 2 meses antes tiene una edad corregida de 2 meses. Sus hitos de desarrollo deben evaluarse según esa edad, no la cronológica.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: 'Hitos esperados en prematuros',
        icon: () => CI.star(KUN.sage),
        text: 'En los primeros meses, tu bebé irá ganando tono muscular, control de la cabeza y respuesta a estímulos. La sonrisa social, el balbuceo y el seguimiento visual llegarán en su momento. Cada bebé tiene su propio ritmo, especialmente los prematuros.',
      },
      {
        num: 4, kind: 'text', accent: KUN.accentSoft,
        title: 'Cómo estimularlo',
        icon: () => CI.heart(KUN.accent),
        text: 'El contacto, la voz, la música suave y el método canguro son los mejores estímulos en esta etapa. Evita la sobreestimulación: tu bebé te avisará con señales cuando necesite descanso, como apartar la mirada, fruncir el ceño o ponerse irritable.',
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'Usa la edad corregida como referencia.', sub: 'No la cronológica, para evaluar su desarrollo.' },
          { headline: 'Los hitos llegarán a su tiempo.', sub: 'Cada bebé prematuro tiene su propio ritmo.' },
          { headline: 'Tu voz y contacto son el mejor estímulo.', sub: 'Simple y poderoso en esta etapa.' },
        ],
      },
    ],
  },

  // ── 9 · Qué es el ECMO ──────────────────────────────────────────────────────
  9: {
    headerTitle: 'ECMO',
    dur: '4 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué es el ECMO?',
        icon: () => CI.ecmo(KUN.sage),
        text: 'ECMO significa oxigenación por membrana extracorpórea. Es una máquina que asume temporalmente el trabajo del corazón y los pulmones de tu bebé, permitiendo que estos órganos descansen y se recuperen. Es un tratamiento de soporte avanzado, no una cura en sí mismo.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: '¿Cuándo se usa?',
        icon: () => CI.wave(KUN.accent),
        text: 'Se usa cuando el corazón o los pulmones de tu bebé no pueden funcionar suficientemente bien por sí solos, a pesar de otros tratamientos. Es una medida temporal mientras el cuerpo de tu bebé se estabiliza o se recupera de una condición específica.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: '¿Cómo funciona?',
        icon: () => CI.ecmo(KUN.sage),
        text: 'La sangre de tu bebé sale de su cuerpo a través de un tubo, pasa por una membrana que la oxigena y elimina el dióxido de carbono, y luego regresa a su cuerpo. Todo ocurre de forma continua y controlada por el equipo especializado.',
      },
      {
        num: 4, kind: 'text', accent: KUN.accentSoft,
        title: '¿Qué puedes hacer tú?',
        icon: () => CI.heart(KUN.accent),
        text: 'Con el ECMO, el contacto físico directo es muy limitado. Sin embargo, tu presencia sigue siendo importante. Hablarle en voz baja, poner tu mano cerca de él con autorización del equipo y simplemente estar ahí tiene un valor real para tu bebé y para ti.',
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'El ECMO asume el trabajo del corazón y pulmones.', sub: 'Temporalmente, para que los órganos se recuperen.' },
          { headline: 'Es una medida de soporte, no una cura.', sub: 'Apoya al cuerpo mientras se estabiliza.' },
          { headline: 'Tu presencia sigue siendo valiosa.', sub: 'Tu voz y cercanía importan, incluso con limitaciones.' },
        ],
      },
    ],
  },

  // ── 10 · Cuidados al alta ────────────────────────────────────────────────────
  10: {
    headerTitle: 'Alta y hogar',
    dur: '6 MIN',
    pages: [
      {
        num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué significa el alta?',
        icon: () => CI.home(KUN.sage),
        text: 'El alta es el momento en que tu bebé está listo para continuar su desarrollo en casa. No significa que todo está resuelto, sino que tu bebé ha alcanzado la estabilidad suficiente para salir del hospital. Es un gran logro, y también el inicio de una nueva etapa.',
      },
      {
        num: 2, kind: 'text', accent: KUN.accentSoft,
        title: '¿Cómo saber si están listos?',
        icon: () => CI.shield(KUN.accent),
        text: 'Antes del alta, el equipo médico verificará que tu bebé pueda mantener su temperatura corporal, alimentarse de forma consistente y que su peso vaya en aumento. También recibirás instrucciones claras sobre sus cuidados en casa.',
      },
      {
        num: 3, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué debes preparar en casa?',
        icon: () => CI.home(KUN.sage),
        text: 'Asegúrate de tener un espacio cálido y tranquilo para tu bebé. Evita visitas masivas los primeros días. Ten a mano los números de contacto del equipo médico y la clínica. Menos estímulos al inicio significa más descanso y mejor adaptación.',
      },
      {
        num: 4, kind: 'list',
        title: '¿Qué señales debes vigilar?',
        items: [
          { title: 'Dificultad para respirar', text: 'Busca atención médica de inmediato si notas que le cuesta respirar.' },
          { title: 'Cambios de color en la piel', text: 'Palidez, coloración azulada o amarilla son señales de alerta.' },
          { title: 'Fiebre o rechazo a la alimentación', text: 'Pueden indicar una infección u otro problema que requiere evaluación.' },
        ],
      },
      {
        num: 5, kind: 'summary',
        title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'El alta es un logro real.', sub: 'Tu bebé alcanzó la estabilidad necesaria para ir a casa.' },
          { headline: 'Prepara un ambiente cálido y tranquilo.', sub: 'Pocos estímulos al inicio, más descanso y adaptación.' },
          { headline: 'Conoce las señales de alerta.', sub: 'Y no dudes en consultar ante cualquier duda.' },
        ],
      },
    ],
  },
};

const STAGE_CAPSULE_CONTENT = {
  11: ['Conocer la unidad neonatal', 'Ubícate primero', 'La unidad suele tener recepción, lavamanos, sala clínica, lactario, baños y un lugar de espera familiar. Pide que te muestren el recorrido seguro para entrar y salir sin interrumpir procedimientos.', 'Pregunta dónde dejar tus cosas, dónde lavarte las manos, quién es la enfermera a cargo y cómo reconocer al equipo de turno.', ['Conoce recepción, lavamanos y lactario.', 'Identifica a la enfermera a cargo.', 'Pregunta el recorrido seguro de ingreso.']],
  12: ['Visitas y equipo', 'Horarios de visita', 'Los horarios pueden cambiar según la condición de cada bebé y las normas del hospital. Guarda el horario oficial, los teléfonos útiles y el nombre del profesional que puede responder dudas durante el turno.', 'Si hay cambios de horario, pregunta si son por protocolo de la unidad, por un procedimiento o por la situación clínica de tu bebé.', ['Ten el horario oficial a mano.', 'Pregunta a quién acudir en cada turno.', 'Confirma normas especiales antes de invitar familiares.']],
  13: ['Ley Mila', 'Acompañamiento familiar', 'La Ley Mila promueve el acompañamiento de niñas y niños hospitalizados por su madre, padre o cuidador significativo. En neonatología, el equipo puede ordenar este derecho con medidas de seguridad clínica.', 'Pregunta cómo se aplica en tu hospital, qué horarios contempla, qué identificación necesitas y cuáles son las normas cuando hay procedimientos.', ['La familia tiene un rol activo.', 'Cada unidad define medidas de seguridad.', 'Puedes pedir orientación sobre su aplicación local.']],
  14: ['Higiene de ingreso', 'Manos limpias, bebé protegido', 'El lavado de manos es una de las formas más importantes de proteger a tu bebé. Retira anillos o pulseras, lava hasta muñecas, seca bien y usa alcohol gel si el equipo lo indica.', 'Evita entrar con síntomas respiratorios, fiebre o malestar. Si tienes dudas, avisa antes de ingresar.', ['Lávate antes de tocar al bebé o su entorno.', 'Retira accesorios de manos y muñecas.', 'Avisa si tienes síntomas.']],
  15: ['Equipos iniciales', 'Lo que ves alrededor', 'Incubadora, monitores, bombas de infusión, sondas y sensores pueden impresionar al comienzo. Cada uno cumple una función: dar calor, vigilar signos vitales, administrar medicamentos o apoyar alimentación y respiración.', 'No muevas cables ni sensores por tu cuenta. Si algo se despega o suena, llama a la enfermera.', ['Los equipos tienen una función específica.', 'Las alarmas no siempre son emergencia.', 'El equipo clínico ajusta cables y sensores.']],

  21: ['UCI neonatal', 'Cuidado intensivo', 'La UCI neonatal entrega monitoreo continuo y apoyo avanzado cuando un bebé necesita vigilancia estrecha. Estar en UCI no significa que todo irá mal; significa que hay un equipo mirando cada cambio de cerca.', 'Tu presencia sigue siendo importante: tu voz, tu calma y tus preguntas ayudan a conocer mejor a tu bebé.', ['UCI significa vigilancia estrecha.', 'El equipo observa cambios minuto a minuto.', 'Tu presencia también cuida.']],
  22: ['Monitores y alarmas', 'Aprender los sonidos', 'Los monitores muestran frecuencia cardíaca, respiración y oxígeno. Las alarmas avisan cambios, pero a veces suenan porque un sensor se movió o el bebé cambió de posición.', 'Mira al bebé antes que al número y llama a la enfermera si algo te preocupa.', ['Los monitores vigilan signos vitales.', 'No toda alarma es emergencia.', 'No ajustes sensores sin ayuda.']],
  23: ['Acompañar en UCI', 'Tocar con seguridad', 'En UCI a veces se puede tocar, contener o hablar suavemente, y otras veces conviene dejar descansar. Pregunta qué tipo de contacto es seguro ese día.', 'Una mano quieta y tibia suele calmar más que muchas caricias. El equipo te dirá cuándo probarlo.', ['Pregunta antes de tocar.', 'Prefiere contacto quieto y suave.', 'Respeta pausas y procedimientos.']],
  24: ['Preguntas clínicas', 'Conversar con el equipo', 'Puedes anotar tres preguntas para la visita médica: qué cambió hoy, cuál es la prioridad de cuidado y qué puedes hacer tú. Eso ayuda a transformar la angustia en pasos concretos.', 'Si no entiendes una palabra, pide que la expliquen con ejemplos simples.', ['Pregunta qué cambió hoy.', 'Pregunta la prioridad del día.', 'Pide explicaciones simples.']],
  25: ['Señales de avance', 'Pequeños progresos', 'En UCI los avances pueden ser pequeños: menos oxígeno, más estabilidad, mejor tolerancia a leche, menos pausas o más momentos tranquilos. Cada bebé tiene su ritmo.', 'Celebra pasos pequeños sin comparar con otros bebés.', ['Menos apoyo puede ser avance.', 'La tolerancia a leche importa.', 'Cada bebé progresa a su ritmo.']],

  31: ['Intermedio A', 'Una etapa más estable', 'Intermedio A suele indicar que tu bebé está más estable, aunque todavía necesita monitoreo y apoyo. Es una buena etapa para aprender cuidados básicos con la guía de enfermería.', 'Pregunta qué tareas puedes empezar a practicar hoy.', ['Hay más estabilidad clínica.', 'Aún hay monitoreo y apoyo.', 'Puedes participar más.']],
  32: ['Muda y aseo', 'Cuidar con apoyo', 'La muda, el aseo de piel y el cambio de posición pueden hacerse paso a paso con ayuda. Prepara todo antes de empezar para que el bebé no pierda calor ni se estrese.', 'Si tu bebé se pone pálido, muy inquieto o deja de tolerar, pausa y pide ayuda.', ['Prepara pañal y materiales.', 'Haz movimientos lentos.', 'Pausa si aparecen señales de cansancio.']],
  33: ['Piel con piel', 'Contacto indicado', 'El contacto piel con piel ayuda a regular temperatura, respiración y vínculo. En Intermedio A puede comenzar o aumentar si el equipo confirma que es seguro.', 'La primera vez pide ayuda para trasladar al bebé y acomodar cables o sondas.', ['Confirma si está indicado.', 'Pide ayuda para el traslado.', 'Una posición segura protege la respiración.']],
  34: ['Señales del bebé', 'Hambre y cansancio', 'Tu bebé puede mostrar hambre buscando, chupando, llevando manos a la boca o despertando más activo. También puede cansarse con bostezos, hipo, cambios de color o movimientos bruscos.', 'Aprender estas señales ayuda a cuidar sin sobreestimular.', ['Busca señales tempranas de hambre.', 'Reconoce señales de cansancio.', 'Menos estímulo también es cuidado.']],
  35: ['Alimentación gradual', 'Paso a paso', 'La alimentación puede avanzar de sonda a pecho o mamadera según madurez, respiración y energía. A veces combinar métodos es parte normal del proceso.', 'Pregunta qué meta de alimentación tiene tu bebé esta semana.', ['La transición puede ser gradual.', 'Combinar métodos es común.', 'La energía del bebé guía el ritmo.']],

  41: ['Preparación al alta', 'Practicar antes de casa', 'Intermedio B es una etapa para practicar rutinas: alimentar, mudar, tomar temperatura, administrar indicaciones y reconocer señales de alerta.', 'Pide hacer los cuidados con supervisión para ganar confianza antes de salir.', ['Practica cuidados diarios.', 'Haz preguntas mientras estás en la unidad.', 'La confianza se entrena.']],
  42: ['Alimentación en Intermedio B', 'Ritmos y pausas', 'Pecho y mamadera requieren coordinación de succión, respiración y pausa. Observa si el bebé se cansa, cambia de color, tose o necesita descansar.', 'No fuerces volúmenes. El equipo te enseñará cómo acompañar el ritmo de tu bebé.', ['Respirar y succionar requiere energía.', 'Las pausas son normales.', 'No fuerces la toma.']],
  43: ['Medicamentos', 'Indicaciones claras', 'Si tu bebé se irá con medicamentos, vitaminas o controles especiales, practica horarios y dosis con el equipo. Pide que todo quede escrito de forma simple.', 'Antes del alta, confirma qué hacer si vomita una dosis o si olvidas un horario.', ['Pide indicaciones por escrito.', 'Confirma dosis y horarios.', 'Pregunta qué hacer ante olvidos o vómitos.']],
  44: ['Sueño seguro', 'Dormir en casa', 'La recomendación general es dormir boca arriba, en una superficie firme, sin almohadas, cojines ni peluches sueltos. Evita sobreabrigar y mantén una rutina simple.', 'Si tu bebé tiene una indicación distinta, sigue la recomendación del equipo tratante.', ['Boca arriba para dormir.', 'Superficie firme y despejada.', 'Evita sobreabrigo.']],
  45: ['Checklist de alta', 'Lo que debe quedar listo', 'Antes de salir, confirma controles, medicamentos, alimentación, signos de alarma, carnet o documentos, teléfonos útiles y transporte seguro.', 'Una lista escrita reduce la ansiedad del último día.', ['Controles agendados.', 'Indicaciones y teléfonos claros.', 'Transporte y documentos listos.']],

  51: ['Primeros días en casa', 'Llegar con calma', 'Los primeros días en casa pueden sentirse intensos. Mantén rutinas simples, limita visitas, lava manos con frecuencia y registra alimentación, pañales y medicamentos si te ayuda.', 'No necesitas hacerlo perfecto; necesitas hacerlo acompañado y con información clara.', ['Rutinas simples ayudan.', 'Limita visitas al inicio.', 'Registra lo importante si te ordena.']],
  52: ['Controles', 'Seguimiento después del alta', 'Los controles permiten revisar peso, alimentación, respiración, medicamentos, vacunas y desarrollo. Lleva tus preguntas anotadas para aprovechar cada visita.', 'Si no puedes asistir a un control, avisa y reagenda lo antes posible.', ['Los controles son parte del tratamiento.', 'Lleva preguntas anotadas.', 'Reagenda si no puedes asistir.']],
  53: ['Signos de alarma', 'Cuándo pedir ayuda', 'Consulta de inmediato si hay dificultad para respirar, color azulado, fiebre o temperatura baja, rechazo persistente de alimentación, decaimiento marcado o menos pañales mojados.', 'Ante duda, llama al teléfono indicado por tu equipo o acude a urgencia.', ['Respiración y color importan.', 'Fiebre o hipotermia requieren consulta.', 'Confía en tu intuición y pide ayuda.']],
  54: ['Rutina en casa', 'Alimentación y medicamentos', 'Organiza horarios visibles para tomas, medicamentos y controles. Usa una alarma si lo necesitas y confirma con el equipo cómo preparar o conservar leche y medicamentos.', 'Evita cambiar dosis o fórmulas sin indicación clínica.', ['Usa horarios visibles.', 'Confirma conservación y preparación.', 'No cambies indicaciones sin consultar.']],
  55: ['Cuidar a la familia', 'Sostener el cuidado', 'El alta también mueve emociones: alegría, miedo, cansancio y alerta constante. Reparte tareas, acepta ayuda concreta y pide apoyo si sientes que no descansas o la angustia no baja.', 'Cuidarte no compite con cuidar a tu bebé; lo hace más sostenible.', ['Reparte tareas concretas.', 'Acepta ayuda útil.', 'Pide apoyo emocional cuando lo necesites.']],
};

function makeStageCapsule(id, data) {
  const [headerTitle, title, text, actionText, points] = data;
  return {
    headerTitle,
    dur: '4 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft, title, icon: () => CI.shield(KUN.sage), text },
      { num: 2, kind: 'text', accent: KUN.accentSoft, title: 'Qué puedes hacer tú', icon: () => CI.heart(KUN.accent), text: actionText },
      { num: 3, kind: 'list', title: 'Preguntas útiles', items: [
        { title: 'Hoy', text: '¿Qué es lo más importante que debo saber en esta etapa?' },
        { title: 'Mi rol', text: '¿Qué cuidado puedo practicar con supervisión?' },
        { title: 'Seguridad', text: '¿Cuándo debo llamar al equipo o pedir ayuda?' },
      ] },
      { num: 4, kind: 'text', accent: KUN.sageSoft, title: 'Una idea para recordar', icon: () => CI.star(KUN.sage), text: 'Tu aprendizaje no tiene que ser perfecto ni completo en un día. Puedes volver a esta cápsula, preguntar de nuevo y avanzar por partes.' },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy', points: points.map(point => ({ headline: point, sub: 'Guárdalo como una guía simple para esta etapa.' })) },
    ],
  };
}

Object.keys(STAGE_CAPSULE_CONTENT).forEach(id => {
  CAP_LIBRARY[id] = makeStageCapsule(Number(id), STAGE_CAPSULE_CONTENT[id]);
});

// Exponer catálogo globalmente para otros screens
window.CAP_LIBRARY = CAP_LIBRARY;

const CAP_QUIZZES = {
  1: {
    prompt: '¿Para qué ayuda la sonda nasogástrica mientras tu bebé madura?',
    options: [
      {
        text: 'A que reciba leche sin gastar tanta energía en succionar',
        correct: true,
        feedback: 'Muy bien. La sonda es un apoyo temporal para que tu bebé pueda alimentarse y crecer mientras gana fuerza y coordinación.',
      },
      {
        text: 'A reemplazar siempre la lactancia de forma permanente',
        correct: false,
        feedback: 'Tiene sentido que pueda sentirse así, pero la sonda suele ser un puente temporal. La idea es acompañar a tu bebé hasta que esté listo para pecho o mamadera.',
      },
      {
        text: 'A evitar que necesite compañía durante la alimentación',
        correct: false,
        feedback: 'Tu presencia sigue importando mucho. Hablarle suavemente o acompañarlo durante la alimentación puede calmarlo y fortalecer el vínculo.',
      },
    ],
  },
  2: {
    prompt: '¿Qué efecto puede tener el método canguro en tu bebé?',
    options: [
      {
        text: 'Ayudar a regular temperatura, respiración y vínculo',
        correct: true,
        feedback: 'Muy bien. El piel con piel puede estabilizar el cuerpo de tu bebé y también crear un momento de cercanía para ambos.',
      },
      {
        text: 'Solo sirve cuando el bebé ya está completamente estable',
        correct: false,
        feedback: 'Es una duda muy común. Muchas veces se puede empezar antes de una estabilidad completa, siempre con autorización y guía del equipo de salud.',
      },
      {
        text: 'Debe hacerlo solamente la mamá',
        correct: false,
        feedback: 'No pasa nada: esta idea aparece mucho. Mamá y papá pueden practicarlo si el equipo lo permite; ambos pueden entregar calma y calor.',
      },
    ],
  },
  3: {
    prompt: 'Si ves piel delgada, lanugo o proporciones distintas, ¿qué puede significar?',
    options: [
      {
        text: 'Que muchas de esas características son esperables en prematuros',
        correct: true,
        feedback: 'Exacto. Su cuerpo sigue desarrollándose y muchas cosas que impactan al principio son parte de esta etapa.',
      },
      {
        text: 'Que necesariamente algo está mal',
        correct: false,
        feedback: 'Es comprensible preocuparse al verlo distinto. Aun así, piel delgada, lanugo y movimientos inmaduros pueden ser normales para su edad gestacional.',
      },
      {
        text: 'Que los cables y tubos no tienen una función clara',
        correct: false,
        feedback: 'Puede ser abrumador ver tantos dispositivos. Cada uno tiene un propósito: vigilar, alimentar o ayudar a respirar cuando tu bebé lo necesita.',
      },
    ],
  },
  4: {
    prompt: 'Cuando suena una alarma del monitor, ¿qué es lo más seguro?',
    options: [
      {
        text: 'Mantener la calma y llamar al equipo si hace falta',
        correct: true,
        feedback: 'Muy bien. No toda alarma es una emergencia, y el equipo sabe interpretar cuándo actuar.',
      },
      {
        text: 'Ajustar sensores o cables por cuenta propia',
        correct: false,
        feedback: 'La intención de ayudar es muy natural, pero es mejor no manipular los monitores. Llama a la enfermera para que revise con seguridad.',
      },
      {
        text: 'Asumir que siempre es una emergencia grave',
        correct: false,
        feedback: 'Es normal asustarse con el sonido. A veces la alarma aparece por movimiento o un sensor suelto; observa a tu bebé y pide apoyo al equipo.',
      },
    ],
  },
  5: {
    prompt: 'En el método canguro, ¿qué postura ayuda a cuidar la vía aérea?',
    options: [
      {
        text: 'Bebé vertical, cabeza hacia un lado y un poco extendida',
        correct: true,
        feedback: 'Muy bien. Esa postura ayuda a que respire cómodo y seguro durante el contacto piel con piel.',
      },
      {
        text: 'Bebé completamente horizontal sobre el pecho',
        correct: false,
        feedback: 'Buena pregunta para repasar. En canguro se busca una posición vertical, con la cabeza girada y ligeramente extendida para proteger la respiración.',
      },
      {
        text: 'Bebé con la cara hundida contra el pecho',
        correct: false,
        feedback: 'Es importante corregirlo con calma. La nariz y boca deben quedar libres; pide ayuda al equipo para acomodarlo sin miedo.',
      },
    ],
  },
  6: {
    prompt: '¿Qué puede ayudar a estimular la producción de leche?',
    options: [
      {
        text: 'Extracción frecuente y contacto piel con piel cuando se pueda',
        correct: true,
        feedback: 'Muy bien. La frecuencia y el contacto con tu bebé pueden apoyar la producción. Y si baja, no significa que hayas fallado.',
      },
      {
        text: 'Esperar muchas horas para juntar más leche',
        correct: false,
        feedback: 'Es una idea comprensible, pero suele ayudar más extraer con frecuencia. Tu cuerpo responde al estímulo repetido.',
      },
      {
        text: 'Culparte si la producción cambia',
        correct: false,
        feedback: 'Nada de culpa aquí. El estrés y el cansancio influyen mucho; pedir apoyo de lactancia también es parte del cuidado.',
      },
    ],
  },
  7: {
    prompt: 'Mientras tu bebé usa sonda, ¿qué puede apoyar su aprendizaje para alimentarse?',
    options: [
      {
        text: 'Acercarlo al pecho y usar succión no nutritiva si el equipo lo autoriza',
        correct: true,
        feedback: 'Muy bien. Esos momentos pueden ayudar a asociar el pecho con calma, olor, contacto y alimentación.',
      },
      {
        text: 'Pensar que la lactancia ya no será posible',
        correct: false,
        feedback: 'Es normal sentir esa preocupación. La sonda no cierra la puerta a la lactancia; muchas veces acompaña el proceso mientras el bebé madura.',
      },
      {
        text: 'Forzarlo a succionar aunque se canse',
        correct: false,
        feedback: 'La paciencia es clave. Si se cansa, no es falta de ganas: está aprendiendo y necesita pausas seguras.',
      },
    ],
  },
  8: {
    prompt: '¿Cómo conviene mirar el desarrollo de un bebé prematuro?',
    options: [
      {
        text: 'Según su edad corregida y su propio ritmo',
        correct: true,
        feedback: 'Exacto. La edad corregida ayuda a entender mejor sus avances sin exigirle como si hubiese nacido a término.',
      },
      {
        text: 'Comparándolo siempre con bebés nacidos a término',
        correct: false,
        feedback: 'Es muy humano comparar, pero puede generar presión. Tu bebé tiene su propio calendario y merece ser mirado desde ahí.',
      },
      {
        text: 'Esperando que todos los hitos lleguen al mismo tiempo',
        correct: false,
        feedback: 'Cada avance puede llegar con ritmos distintos. Lo importante es observar tendencias y consultar dudas con el equipo.',
      },
    ],
  },
  9: {
    prompt: '¿Qué rol cumple el ECMO cuando se indica?',
    options: [
      {
        text: 'Apoyar temporalmente corazón y pulmones mientras el cuerpo se estabiliza',
        correct: true,
        feedback: 'Muy bien. El ECMO es un soporte avanzado y temporal para dar tiempo a que el cuerpo de tu bebé se recupere.',
      },
      {
        text: 'Curar por sí sola la enfermedad de base',
        correct: false,
        feedback: 'Es fácil pensarlo así por lo complejo que se ve. En realidad, el ECMO sostiene al cuerpo mientras otros tratamientos y la recuperación hacen su parte.',
      },
      {
        text: 'Eliminar la importancia de tu presencia',
        correct: false,
        feedback: 'Tu presencia sigue teniendo valor. Aunque el contacto sea limitado, tu voz y cercanía pueden acompañar a tu bebé.',
      },
    ],
  },
  10: {
    prompt: 'Antes y después del alta, ¿qué es importante recordar?',
    options: [
      {
        text: 'Preparar un ambiente tranquilo y conocer señales de alerta',
        correct: true,
        feedback: 'Muy bien. El alta es un logro, y tener claridad sobre cuidados y señales de alerta ayuda a llegar a casa con más calma.',
      },
      {
        text: 'Recibir muchas visitas para celebrar de inmediato',
        correct: false,
        feedback: 'La celebración puede esperar un poco. Al principio suele ayudar un ambiente tranquilo, con pocos estímulos y más descanso.',
      },
      {
        text: 'Evitar consultar para no molestar al equipo',
        correct: false,
        feedback: 'Consultar no molesta. Si notas dificultad para respirar, cambios de color, fiebre o rechazo a alimentarse, pide orientación o atención.',
      },
    ],
  },
};

Object.keys(STAGE_CAPSULE_CONTENT).forEach(id => {
  CAP_QUIZZES[id] = {
    prompt: '¿Qué idea ayuda más a cuidar con seguridad en esta etapa?',
    options: [
      {
        text: 'Preguntar al equipo, seguir las indicaciones y avanzar paso a paso',
        correct: true,
        feedback: 'Exacto. Tu rol crece mejor cuando está acompañado por información clara y supervisión.',
      },
      {
        text: 'Hacer todos los cuidados sin pedir ayuda para aprender más rápido',
        correct: false,
        feedback: 'Aprender con supervisión es más seguro para tu bebé y para ti.',
      },
      {
        text: 'Comparar el avance de tu bebé con otros bebés de la unidad',
        correct: false,
        feedback: 'Cada bebé tiene su propio ritmo. La comparación suele aumentar la ansiedad.',
      },
    ],
  };
});

// ── DS scoped fonts ──────────────────────────────────────────
const CAP_FT = 'Quicksand, sans-serif';
const CAP_FB = 'Poppins, sans-serif';

function CapsuleQuiz({ quiz, selected, onSelect, celebrating }) {
  const selectedOption = selected !== null ? quiz.options[selected] : null;
  const correctIndex = quiz.options.findIndex(option => option.correct);

  return (
    <div style={{
      background: '#fff', borderRadius: 22, padding: 18,
      border: `1px solid ${KUN.hair}`,
      marginBottom: 12,
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginBottom: 12,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 12,
          background: KUN.sun,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {CI.star(KUN.ink)}
        </div>
        <div>
          <div style={{
            fontFamily: CAP_FB, fontSize: 10.5, fontWeight: 500, color: KUN.brick,
            letterSpacing: 1, textTransform: 'uppercase',
          }}>Repaso amable</div>
          <div style={{
            fontFamily: CAP_FB, fontSize: 12, fontWeight: 400, color: KUN.inkSoft,
            marginTop: 2,
          }}>No es una prueba: es una pausa para reforzar.</div>
        </div>
      </div>

      <div style={{
        fontFamily: CAP_FT, fontSize: 16, fontWeight: 700, color: KUN.ink,
        letterSpacing: -0.2, lineHeight: 1.35, marginBottom: 14,
      }}>{quiz.prompt}</div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {quiz.options.map((option, i) => {
          const isSelected = selected === i;
          const showCorrect = selected !== null && option.correct;
          return (
            <button key={i} onClick={() => onSelect(i)} style={{
              width: '100%', border: `1.5px solid ${isSelected ? KUN.brick : showCorrect ? KUN.apple : KUN.hair}`,
              background: isSelected ? KUN.rosehip : showCorrect ? KUN.apple : KUN.cream,
              color: KUN.ink, borderRadius: 16, padding: '12px 14px',
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: 'inherit', textAlign: 'left', cursor: 'pointer',
              transition: 'background .2s, border .2s',
            }}>
              <span style={{
                width: 26, height: 26, borderRadius: '50%',
                background: isSelected ? KUN.brick : showCorrect ? KUN.ink : '#fff',
                color: (isSelected || showCorrect) ? '#fff' : KUN.inkMuted,
                border: (isSelected || showCorrect) ? 'none' : `1px solid ${KUN.hair}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, fontFamily: CAP_FT, fontSize: 12, fontWeight: 700,
              }}>
                {showCorrect || (isSelected && option.correct) ? '✓' : String.fromCharCode(65 + i)}
              </span>
              <span style={{
                fontFamily: CAP_FB, fontSize: 13.5, fontWeight: 500, lineHeight: 1.4,
              }}>{option.text}</span>
            </button>
          );
        })}
      </div>

      {selectedOption && (
        <div style={{
          marginTop: 14, borderRadius: 16, padding: '12px 14px',
          background: selectedOption.correct ? KUN.apple : KUN.rosehip,
          color: KUN.ink, fontFamily: CAP_FB, fontSize: 13, fontWeight: 400,
          lineHeight: 1.55,
        }}>
          <strong style={{ fontFamily: CAP_FT, fontWeight: 700, color: KUN.ink }}>
            {selectedOption.correct ? 'Vas muy bien. ' : 'Vamos paso a paso. '}
          </strong>
          {selectedOption.feedback}
          {!selectedOption.correct && (
            <div style={{ marginTop: 8, fontFamily: CAP_FT, fontWeight: 600 }}>
              La respuesta que buscamos es: {quiz.options[correctIndex].text}.
            </div>
          )}
        </div>
      )}

      {selectedOption && (
        <div style={{
          marginTop: 12,
          borderRadius: 999,
          padding: '9px 14px',
          background: celebrating ? KUN.brick : KUN.cream,
          border: celebrating ? 'none' : `1px solid ${KUN.hair}`,
          color: celebrating ? '#fff' : KUN.brick,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          fontFamily: CAP_FT, fontSize: 12.5, fontWeight: 700, letterSpacing: 0.1,
          transition: 'background .25s, color .25s',
        }}>
          {KIcon.check(celebrating ? '#fff' : KUN.brick)}
          Repaso completado
        </div>
      )}
    </div>
  );
}

const CAP_TOTAL_PAGES = 5;

// ── Flecha izquierda ──────────────────────────────────────────────────────────
function CapLeft({ onClick, visible }) {
  return (
    <button onClick={onClick} style={{
      width: 48, height: 48, borderRadius: '50%',
      background: visible ? '#fff' : 'transparent',
      border: visible ? `1px solid ${KUN.hair}` : 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: visible ? 'pointer' : 'default',
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity .2s',
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L6 10L12 16" stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

// ── Flecha derecha ────────────────────────────────────────────────────────────
function CapRight({ onClick, visible }) {
  return (
    <button onClick={onClick} style={{
      width: 48, height: 48, borderRadius: '50%',
      background: visible ? KUN.brick : 'transparent',
      border: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: visible ? 'pointer' : 'default',
      opacity: visible ? 1 : 0,
      pointerEvents: visible ? 'auto' : 'none',
      transition: 'opacity .2s',
    }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M8 4L14 10L8 16" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

// ── Pantalla principal ────────────────────────────────────────────────────────
function ScreenCapsula({ capsuleId, onBack, onComplete, quizResult, onQuizAnswer, onPublishForum }) {
  const [idx, setIdx] = React.useState(0);
  const [question, setQuestion] = React.useState('');
  const [published, setPublished] = React.useState(false);
  const [celebrating, setCelebrating] = React.useState(false);
  const [quizAnswer, setQuizAnswer] = React.useState(quizResult?.selectedIndex ?? null);
  const [quizCelebrating, setQuizCelebrating] = React.useState(false);

  // Reset state only when capsuleId changes (not when quiz result prop updates —
  // that would re-trigger on every answer selection and jump back to page 1).
  React.useEffect(() => {
    setIdx(0);
    setQuestion('');
    setPublished(false);
    setCelebrating(false);
    setQuizAnswer(quizResult?.selectedIndex ?? null);
    setQuizCelebrating(false);
  }, [capsuleId]); // eslint-disable-line react-hooks/exhaustive-deps

  const capsule = CAP_LIBRARY[capsuleId] || CAP_LIBRARY[1];
  const quiz = CAP_QUIZZES[capsuleId] || CAP_QUIZZES[1];
  const pages = capsule.pages;
  const page = pages[idx];
  const isFirst = idx === 0;
  const isLast = idx === CAP_TOTAL_PAGES - 1;

  const goPrev = () => { if (!isFirst) setIdx(i => i - 1); };
  const goNext = () => { if (!isLast) setIdx(i => i + 1); };

  const handlePublish = () => {
    if (!question.trim()) return;
    setPublished(true);
    if (onPublishForum) {
      onPublishForum({
        text: question.trim(),
        capsuleId,
        capsuleTitle: capsule.headerTitle,
      });
    }
  };

  const handleQuizSelect = (selectedIndex) => {
    const selectedOption = quiz.options[selectedIndex];
    setQuizAnswer(selectedIndex);
    setQuizCelebrating(true);
    if (onQuizAnswer) {
      onQuizAnswer({
        answered: true,
        selectedIndex,
        isCorrect: !!selectedOption?.correct,
        correctIndex: quiz.options.findIndex(option => option.correct),
      });
    }
    setTimeout(() => setQuizCelebrating(false), 1400);
  };

  const handleComplete = () => {
    setCelebrating(true);
    setTimeout(() => {
      setCelebrating(false);
      onComplete();
    }, 2200);
  };

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      height: '100%', boxSizing: 'border-box', paddingBottom: 96,
      position: 'relative',
    }}>

      {/* ── Sub-header ──────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        padding: '4px 20px 10px', flexShrink: 0,
      }}>
        <div onClick={onBack} style={{
          width: 40, height: 40, borderRadius: '50%', background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: `1px solid ${KUN.hair}`, cursor: 'pointer', flexShrink: 0,
        }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10L12 16" stroke={KUN.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontFamily: CAP_FB, fontSize: 10.5, fontWeight: 500, color: KUN.brick,
            letterSpacing: 1, textTransform: 'uppercase',
          }}>
            Cápsula educativa · {capsule.dur}
          </div>
          <div style={{
            fontFamily: CAP_FT, fontSize: 16, fontWeight: 700, color: KUN.ink, letterSpacing: -0.2,
            marginTop: 2,
            whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
          }}>
            {capsule.headerTitle}
          </div>
        </div>
      </div>

      {/* ── Barra de progreso ───────────────────────── */}
      <div style={{ padding: '0 20px 14px', flexShrink: 0 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          marginBottom: 8,
        }}>
          <span style={{ fontFamily: CAP_FT, fontSize: 12, fontWeight: 700, color: KUN.ink, letterSpacing: 0.3 }}>
            {page.num} <span style={{ fontFamily: CAP_FB, color: KUN.inkMuted, fontWeight: 500 }}>de {CAP_TOTAL_PAGES}</span>
          </span>
          <span style={{ fontFamily: CAP_FB, fontSize: 11, fontWeight: 500, color: KUN.inkMuted, letterSpacing: 0.3 }}>
            {Math.round((page.num / CAP_TOTAL_PAGES) * 100)}% completado
          </span>
        </div>
        <div style={{ height: 8, borderRadius: 999, background: 'rgba(42,35,32,0.07)', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: 999, background: KUN.brick,
            width: `${(page.num / CAP_TOTAL_PAGES) * 100}%`,
            transition: 'width 0.35s ease',
          }} />
        </div>
      </div>

      {/* ── Contenido de la página (scroll interno) ─── */}
      <div key={idx} style={{
        flex: 1, overflow: 'auto', padding: '0 20px',
        animation: 'fade .2s ease-out forwards',
      }}>

        {/* Título de página */}
        <div style={{
          fontFamily: CAP_FT, fontSize: 26, fontWeight: 700, color: KUN.ink,
          letterSpacing: -0.5, lineHeight: 1.2,
          marginBottom: 20,
        }}>{page.title}</div>

        {/* ── Página de texto ── */}
        {page.kind === 'text' && (
          <div style={{
            background: '#fff', borderRadius: 24,
            padding: '22px 22px 26px',
            border: `1px solid ${KUN.hair}`,
          }}>
            <div style={{
              width: 56, height: 56, borderRadius: 18,
              background: page.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 18,
            }}>
              {page.icon && page.icon()}
            </div>
            <div style={{
              fontFamily: CAP_FB, fontSize: 15, color: KUN.ink, fontWeight: 400,
              lineHeight: 1.65,
            }}>{page.text}</div>
          </div>
        )}

        {/* ── Página de lista ── */}
        {page.kind === 'list' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {page.items.map((item, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 22, padding: '16px 18px',
                border: `1px solid ${KUN.hair}`,
                display: 'flex', gap: 14, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: KUN.rosehip,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  fontFamily: CAP_FT, fontSize: 14, fontWeight: 700, color: KUN.ink,
                }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: CAP_FT, fontSize: 15, fontWeight: 700, color: KUN.ink,
                    letterSpacing: -0.2, marginBottom: 6,
                  }}>{item.title}</div>
                  <div style={{
                    fontFamily: CAP_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400,
                    lineHeight: 1.55,
                  }}>{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Página de resumen ── */}
        {page.kind === 'summary' && (
          <div>
            {/* Puntos clave */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
              {page.points.map((pt, i) => (
                <div key={i} style={{
                  background: '#fff', borderRadius: 22, padding: '14px 18px',
                  border: `1px solid ${KUN.hair}`,
                  display: 'flex', gap: 14, alignItems: 'center',
                }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: KUN.brick,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {KIcon.check('#fff')}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: CAP_FT, fontSize: 14.5, fontWeight: 700, color: KUN.ink, letterSpacing: -0.1,
                    }}>{pt.headline}</div>
                    <div style={{
                      fontFamily: CAP_FB, fontSize: 12.5, color: KUN.inkSoft, fontWeight: 400,
                      marginTop: 3, lineHeight: 1.45,
                    }}>{pt.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Campo de pregunta */}
            <div style={{
              background: '#fff', borderRadius: 22, padding: 18,
              border: `1px solid ${KUN.hair}`,
              marginBottom: 12,
            }}>
              <div style={{
                fontFamily: CAP_FT, fontSize: 15.5, fontWeight: 700, color: KUN.ink,
                letterSpacing: -0.2, marginBottom: 12,
              }}>¿Te quedó alguna duda?</div>

              {published ? (
                <div style={{
                  padding: '14px 0', textAlign: 'center',
                  fontFamily: CAP_FT, fontSize: 14.5, fontWeight: 700, color: KUN.brick, lineHeight: 1.5,
                }}>
                  Tu pregunta fue publicada en el foro 🧡
                </div>
              ) : (
                <>
                  <textarea
                    value={question}
                    onChange={e => setQuestion(e.target.value)}
                    placeholder="Escribe tu pregunta… la comunidad puede ayudarte"
                    style={{
                      width: '100%', minHeight: 90, border: `1.5px solid ${KUN.hair}`, outline: 'none',
                      resize: 'none', fontFamily: CAP_FB,
                      fontSize: 14, color: KUN.ink, fontWeight: 400,
                      background: '#fff', borderRadius: 14,
                      padding: '12px 14px', boxSizing: 'border-box',
                      lineHeight: 1.5,
                    }}
                  />
                  <button onClick={handlePublish} style={{
                    width: '100%', marginTop: 10,
                    padding: '11px 16px', height: 42, borderRadius: 999, border: 'none',
                    background: question.trim() ? KUN.ink : 'rgba(42,35,32,0.08)',
                    color: question.trim() ? '#fff' : KUN.inkMuted,
                    fontFamily: CAP_FT, fontSize: 13.5, fontWeight: 700, letterSpacing: -0.1,
                    cursor: question.trim() ? 'pointer' : 'default',
                    transition: 'background .2s, color .2s',
                  }}>
                    Publicar en el foro
                  </button>
                </>
              )}
            </div>

            <CapsuleQuiz
              quiz={quiz}
              selected={quizAnswer}
              onSelect={handleQuizSelect}
              celebrating={quizCelebrating}
            />

            <div style={{
              margin: '-2px 4px 12px',
              fontFamily: CAP_FB,
              fontSize: 12,
              fontWeight: 400,
              color: KUN.inkMuted,
              lineHeight: 1.5,
              textAlign: 'center',
            }}>
              Puedes responder el repaso o marcar la cápsula como completada ahora.
            </div>

            {/* Botón completar — DS pill */}
            <button onClick={handleComplete} style={{
              width: '100%', padding: '14px 22px', height: 50, borderRadius: 999, border: 'none',
              background: KUN.brick, color: '#fff',
              fontFamily: CAP_FT, fontSize: 15, fontWeight: 700,
              letterSpacing: -0.1, cursor: 'pointer',
              marginBottom: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              {KIcon.check('#fff')} Marcar como completada
            </button>
          </div>
        )}

        <div style={{ height: 16 }} />
      </div>

      {/* ── Navegación inferior ──────────────────────── */}
      <div style={{
        flexShrink: 0,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '10px 20px 14px',
        borderTop: `1px solid ${KUN.hair}`,
      }}>
        <CapLeft onClick={goPrev} visible={!isFirst} />

        {/* Dots */}
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {pages.map((_, i) => (
            <div key={i} onClick={() => setIdx(i)} style={{
              width: i === idx ? 22 : 7, height: 7, borderRadius: 4,
              background: i === idx ? KUN.brick : 'rgba(42,35,32,0.12)',
              transition: 'all 0.3s ease', cursor: 'pointer',
            }} />
          ))}
        </div>

        <CapRight onClick={goNext} visible={!isLast} />
      </div>

      {/* ── Overlay de celebración ───────────────────── */}
      {celebrating && (
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(250,246,241,0.97)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 16, zIndex: 50,
        }}>
          <div style={{ fontSize: 64 }}>🎉</div>
          <div style={{
            fontFamily: CAP_FT, fontSize: 26, fontWeight: 700, color: KUN.ink,
            letterSpacing: -0.4, textAlign: 'center',
          }}>¡Lo lograste!</div>
          <div style={{
            fontFamily: CAP_FB, fontSize: 14.5, color: KUN.inkSoft, fontWeight: 400,
            textAlign: 'center',
            maxWidth: 260, lineHeight: 1.6,
          }}>
            Completaste la cápsula.<br />La encontrarás en tu historial.
          </div>
        </div>
      )}
    </div>
  );
}

window.ScreenCapsula = ScreenCapsula;
