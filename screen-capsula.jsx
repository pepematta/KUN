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

  // ── 1 · El apego en la UCIN ──────────────────────────────────────────────────
  1: {
    headerTitle: 'El apego en la UCIN',
    dur: '5 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.rosehip,
        title: '¿Qué es el apego?',
        icon: () => CI.heart(KUN.brick),
        text: 'El apego es un vínculo afectivo entre tu hijo(a) y sus padres o cuidadores principales. Se desarrolla a partir de la interacción y la comunicación, y es una relación de amor que comienza durante el embarazo y perdura toda la vida.',
      },
      { num: 2, kind: 'text', accent: KUN.accentSoft,
        title: '¿Por qué es tan importante?',
        icon: () => CI.heart(KUN.accent),
        text: 'Los estudios indican que las experiencias tempranas de apego influyen en cómo nos relacionamos con otras personas el resto de nuestras vidas. Un apego sano da seguridad, confianza y bienestar emocional.',
      },
      { num: 3, kind: 'text', accent: KUN.sageSoft,
        title: 'La hospitalización y el apego',
        icon: () => CI.baby(KUN.sage),
        text: 'El apego NO se desarrolla solo en los primeros minutos de vida. Se consolida durante los tres primeros años. No poder tomar a tu hijo en brazos de inmediato no interrumpe ese proceso. Tu bebé ya puede reconocer tu voz, la textura de tu piel y tu olor. Incluso mientras duerme, siente tu presencia y tu cariño.',
      },
      { num: 4, kind: 'list',
        title: '¿Qué puedes hacer hoy?',
        items: [
          { title: 'Háblale con voz suave', text: 'Cuéntale cómo está el día, cómo te sientes.' },
          { title: 'Tócalo suavemente', text: 'Con tus manos cuando el equipo te lo permita.' },
          { title: 'Practica el método canguro', text: 'Cuando sea posible.' },
          { title: 'Visítalo todos los días', text: 'Aunque sea un rato.' },
          { title: 'Si a veces te cuesta reconocerlo', text: 'Es algo que les pasa a muchos padres — habla con el equipo, están para apoyarte.' },
        ],
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'El apego se construye con tiempo, amor y presencia.', sub: 'No solo en los primeros minutos de vida.' },
          { headline: 'Tu bebé ya te reconoce.', sub: 'Tu voz, tu olor, tu piel.' },
          { headline: 'La hospitalización no impide el apego.', sub: 'Lo hace diferente, pero no menos real.' },
          { headline: 'Estar presente es el mejor regalo que puedes darle.', sub: 'Hablarle y tocarlo le comunica tu amor.' },
        ],
      },
    ],
  },

  // ── 2 · Alimentación por sonda al dedo ──────────────────────────────────────
  2: {
    headerTitle: 'Sonda al dedo',
    dur: '5 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué es y cuándo se usa?',
        icon: () => CI.drop(KUN.sage),
        image: 'assets/capsulas/sonda_dedo/05.jpeg',
        text: 'La alimentación por sonda al dedo se usa cuando el recién nacido no logra ganar peso adecuado, o cuando la madre tiene dolor en los pezones y necesita evitar la mamadera. La mamadera puede alterar el patrón de succión y dificultar el acople al pecho materno.',
      },
      { num: 2, kind: 'list',
        title: 'Materiales necesarios',
        image: 'assets/capsulas/sonda_dedo/08.jpeg',
        note: 'Solicita estos materiales al equipo de enfermería.',
        items: [
          { title: 'Sonda de alimentación de 5 fr, de 40 cm', text: '' },
          { title: 'Jeringa de 20 ml', text: '' },
          { title: 'Frasco tapa roja de 60 ml o mamadera', text: '' },
          { title: 'Tela adhesiva', text: '' },
        ],
      },
      { num: 3, kind: 'list',
        title: 'Pasos 1 al 4',
        image: 'assets/capsulas/sonda_dedo/06.jpeg',
        items: [
          { title: 'Paso 1', text: 'Lávate las manos.' },
          { title: 'Paso 2', text: 'Extrae leche materna con extractor manual o eléctrico.' },
          { title: 'Paso 3', text: 'Fija el extremo de la sonda en tu dedo índice con tela adhesiva, sin que sobresalga hacia adelante. Uñas cortas y sin esmalte.' },
          { title: 'Paso 4', text: 'Introduce el extremo gris de la sonda dentro del frasco con leche.' },
        ],
      },
      { num: 4, kind: 'list',
        title: 'Pasos 5 al 7',
        image: 'assets/capsulas/sonda_dedo/07.jpeg',
        items: [
          { title: 'Paso 5', text: 'Introduce el dedo en la boca del bebé entre la lengua y el paladar, con la sonda hacia el paladar. El bebé comenzará a succionar el dedo y por este medio, la leche.' },
          { title: 'Paso 6', text: 'Al finalizar, retira la sonda y lávala con 10 cc de agua tibia a través de la jeringa.' },
          { title: 'Paso 7', text: 'Guarda en un lugar hermético y limpio.' },
        ],
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'La sonda al dedo evita la mamadera.', sub: 'Protege el patrón de succión natural del bebé.' },
          { headline: 'Uñas cortas, manos lavadas y sonda bien fijada.', sub: 'Preparación clave antes de empezar.' },
          { headline: 'La sonda va con la punta hacia el paladar del bebé.', sub: 'Para que pueda succionar correctamente.' },
          { headline: 'Lávala siempre después de cada uso.', sub: 'Con 10 cc de agua tibia a través de la jeringa.' },
        ],
      },
    ],
  },

  // ── 3 · Alimentación por sonda al pecho ─────────────────────────────────────
  3: {
    headerTitle: 'Sonda al pecho',
    dur: '5 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué es y cuándo se usa?',
        icon: () => CI.milk(KUN.sage),
        image: 'assets/capsulas/sonda_pecho/02.jpeg',
        text: 'La alimentación por sonda al pecho se usa cuando hay poca producción de leche para estimular la glándula mamaria, o para hacer la transición de mamadera al pecho directo.',
      },
      { num: 2, kind: 'list',
        title: 'Materiales necesarios',
        image: 'assets/capsulas/sonda_pecho/06.jpeg',
        note: 'Solicita estos materiales al equipo de enfermería.',
        items: [
          { title: 'Sonda de alimentación de 5 fr, de 40 cm', text: '' },
          { title: 'Jeringa de 20 ml', text: '' },
          { title: 'Frasco tapa roja de 60 ml o mamadera', text: '' },
          { title: 'Tela adhesiva', text: '' },
        ],
      },
      { num: 3, kind: 'list',
        title: 'Pasos 1 al 4',
        image: 'assets/capsulas/sonda_pecho/04.jpeg',
        items: [
          { title: 'Paso 1', text: 'Lávate las manos.' },
          { title: 'Paso 2', text: 'Prepara el relleno o calienta leche extraída anteriormente.' },
          { title: 'Paso 3', text: 'Fija el extremo de la sonda en el pezón con tela adhesiva, sin que sobresalga hacia adelante.' },
          { title: 'Paso 4', text: 'Introduce el extremo gris de la sonda dentro del frasco con la leche.' },
        ],
      },
      { num: 4, kind: 'list',
        title: 'Pasos 5 al 8',
        image: 'assets/capsulas/sonda_pecho/03.jpeg',
        items: [
          { title: 'Paso 5', text: 'El bebé comenzará a succionar el pecho y por este medio la leche del frasco, estimulando así la glándula mamaria.' },
          { title: 'Paso 6', text: 'Divide la leche preparada entre ambos pechos para lograr una mejor estimulación.' },
          { title: 'Paso 7', text: 'Al finalizar, retira la sonda y lávala con 10 cc de agua tibia.' },
          { title: 'Paso 8', text: 'Guarda en un lugar hermético y limpio.' },
        ],
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'La sonda al pecho estimula la producción de leche.', sub: 'Mientras el bebé succiona y se alimenta.' },
          { headline: 'Divide la leche entre ambos pechos.', sub: 'Para una estimulación pareja.' },
          { headline: 'Es una excelente forma de volver al pecho.', sub: 'Transición de mamadera a pecho directo.' },
          { headline: 'Lávala siempre después de cada uso.', sub: 'Con 10 cc de agua tibia.' },
        ],
      },
    ],
  },

  // ── 4 · Cómo extraer leche materna ──────────────────────────────────────────
  4: {
    headerTitle: 'Extracción de leche',
    dur: '5 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Cuándo y por qué extraer?',
        icon: () => CI.milk(KUN.sage),
        image: 'assets/capsulas/extraccion_leche/05.jpeg',
        text: 'La extracción se realiza cuando tienes los pechos muy congestionados o no puedes amamantar de forma directa. Se recomienda extraer cada 3 horas para mantener la producción.',
      },
      { num: 2, kind: 'list',
        title: 'Materiales',
        items: [
          { title: 'Contenedor', text: 'Mamadera, bolsa recolectora o frasco de vidrio limpio.' },
          { title: 'Bomba extractora', text: 'Manual o eléctrica, si la dispones.' },
          { title: 'Cooler', text: 'Si no hay refrigerador cerca.' },
          { title: 'Material para rotular', text: 'Para identificar el contenedor.' },
          { title: 'Implementos de lavado de manos', text: '' },
        ],
      },
      { num: 3, kind: 'list',
        title: 'Extracción manual',
        image: 'assets/capsulas/extraccion_leche/02.jpeg',
        items: [
          { title: 'Paso 1', text: 'Lávate las manos y descúbrete los pechos.' },
          { title: 'Paso 2', text: 'Masajea con los dedos en círculos y luego como rastrillo desde la base hasta el pezón.' },
          { title: 'Paso 3', text: 'Si hay congestión, coloca una hoja de repollo fría sobre la mama por 10 minutos.' },
          { title: 'Paso 4', text: 'Rodea la areola con pulgar e índice formando una C, empuja hacia las costillas y comprime de forma intermitente. Rota la posición de los dedos para un mejor vaciamiento. Mantén 15 minutos por mama.' },
        ],
      },
      { num: 4, kind: 'text', accent: KUN.accentSoft,
        title: 'Extracción con bomba y rotulado',
        icon: () => CI.drop(KUN.accent),
        image: 'assets/capsulas/extraccion_leche/06.jpeg',
        text: 'Si usas bomba: prepárala según instrucciones, realiza el masaje previo, conecta el adaptador al pezón y extrae 15 minutos por mama. Si deja de salir leche, detén, masajea y reinicia. Siempre cierra el contenedor y rotúlalo con la fecha de extracción. Refrigera o congela según necesidad.',
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'Extrae cada 3 horas para mantener la producción.', sub: 'Incluso de noche.' },
          { headline: 'El masaje previo favorece la bajada de leche.', sub: 'Dedos en círculos y luego como rastrillo.' },
          { headline: '15 minutos por mama es el tiempo recomendado.', sub: 'Sea manual o con bomba.' },
          { headline: 'Rotula siempre con la fecha de extracción.', sub: 'Y refrigera o congela según necesidad.' },
        ],
      },
    ],
  },

  // ── 5 · Conservar y usar leche extraída ─────────────────────────────────────
  5: {
    headerTitle: 'Conservación de leche',
    dur: '4 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: 'Cómo almacenar',
        icon: () => CI.shield(KUN.sage),
        image: 'assets/capsulas/conservacion_leche/02.jpeg',
        text: 'Almacena la leche en recipientes de vidrio, plástico duro libre de BPA o bolsas especiales. Anota siempre la fecha, cantidad y nombre del bebé en cada envase. Es normal que la grasa se separe y la leche parezca cortada — agítala suavemente y recuperará su apariencia.',
      },
      { num: 2, kind: 'list',
        title: '¿Cuánto dura?',
        items: [
          { title: 'Temperatura ambiente', text: 'Solo en invierno, menos de 25°C: 6-8 horas.' },
          { title: 'Refrigerador', text: 'Primera bandeja, nunca en la puerta: 5 días.' },
          { title: 'Congelador de 1 puerta', text: 'Hasta 14 días.' },
          { title: 'Congelador de 2 puertas', text: 'Al fondo: 3-6 meses.' },
          { title: 'Cooler', text: '24 horas.' },
        ],
      },
      { num: 3, kind: 'text', accent: KUN.sageSoft,
        title: 'Cómo descongelar',
        icon: () => CI.drop(KUN.sage),
        text: 'Lo ideal es pasar la leche del congelador al refrigerador la noche anterior. Si necesitas leche de inmediato, coloca el frasco en un recipiente con agua caliente (no hirviendo). La leche descongelada puede mantenerse 1 día en el refrigerador.',
      },
      { num: 4, kind: 'list',
        title: 'Reglas importantes',
        image: 'assets/capsulas/conservacion_leche/05.jpeg',
        items: [
          { title: 'Usa primero la leche más antigua', text: '' },
          { title: 'No vuelvas a congelar leche ya descongelada', text: '' },
          { title: 'No mezcles leche fresca con leche ya congelada', text: '' },
          { title: 'No congeles leche con más de 48 h en el refrigerador', text: '' },
          { title: 'Remanentes del mismo día', text: 'Solo pueden reutilizarse durante ese mismo día.' },
        ],
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'Rotula siempre con fecha, cantidad y nombre del bebé.', sub: 'Es esencial para organizarte.' },
          { headline: 'En refrigerador dura 5 días.', sub: 'En congelador de 2 puertas, hasta 6 meses.' },
          { headline: 'Descongela lentamente, nunca en microondas.', sub: 'Agua caliente o paso previo al refrigerador.' },
          { headline: 'Una vez descongelada no se puede volver a congelar.', sub: 'Y no mezcles con leche fresca.' },
        ],
      },
    ],
  },

  // ── 6 · Lactancia materna ────────────────────────────────────────────────────
  6: {
    headerTitle: 'Lactancia materna',
    dur: '5 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.rosehip,
        title: '¿Por qué es tan especial?',
        icon: () => CI.heart(KUN.brick),
        image: 'assets/capsulas/lactancia/02.jpeg',
        text: 'La leche materna tiene todas las vitaminas, grasas y proteínas que tu bebé necesita en la cantidad exacta. Protege contra infecciones, se digiere bien y favorece el desarrollo psicomotor y del lenguaje. También crea un vínculo único entre ustedes. La OMS recomienda lactancia materna exclusiva hasta los 6 meses.',
      },
      { num: 2, kind: 'list',
        title: 'El acople correcto',
        image: 'assets/capsulas/lactancia_guia/02.png',
        items: [
          { title: 'Posición cómoda', text: 'Siéntate con la espalda apoyada; el bebé enfrentando a la madre, boca a la altura del pecho.' },
          { title: 'Sostén en C', text: 'Rodea la mama con la mano en forma de C.' },
          { title: 'Estimula con el pezón', text: 'Toca el labio del bebé para que abra la boca.' },
          { title: 'Acerca el bebé al pecho (no al revés)', text: 'Con un movimiento rápido. Labios evertidos, mentón tocando el pecho.' },
        ],
      },
      { num: 3, kind: 'text', accent: KUN.sageSoft,
        title: 'Frecuencia y cómo retirar',
        icon: () => CI.milk(KUN.sage),
        image: 'assets/capsulas/lactancia_guia/04.png',
        text: 'Amamanta a libre demanda, sin dejar pasar más de 3-4 horas. No hay un tiempo exacto por pecho: lo importante es que el bebé vacíe un pecho completamente antes de ofrecer el otro. La leche se enriquece a medida que se vacía. Para retirar al bebé, introduce suavemente tu dedo meñique por el costado de su boca.',
      },
      { num: 4, kind: 'list',
        title: '¿Cómo saber si está tomando bien?',
        items: [
          { title: 'Deglute de forma rítmica', text: 'Escucharás o verás que traga mientras mama.' },
          { title: 'Los pechos quedan blandos', text: 'Después de amamantar.' },
          { title: 'Sin dolor mientras amamantas', text: '' },
          { title: 'Moja 6 pañales al día', text: 'Y mama entre 8 y 12 veces en 24 horas.' },
          { title: 'Duerme bien después', text: 'Entre 1½ y 3 horas después de amamantar.' },
        ],
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'La leche materna es el alimento más completo.', sub: 'Vitaminas, proteínas y defensas en un solo alimento.' },
          { headline: 'El acople correcto es clave: sin dolor.', sub: 'Labios evertidos, mentón tocando el pecho.' },
          { headline: 'Amamanta a libre demanda.', sub: 'Sin límite de tiempo por pecho.' },
          { headline: 'Ante cualquier duda o dolor, pide apoyo.', sub: 'La matrona o trabajadora de lactancia pueden ayudarte.' },
        ],
      },
    ],
  },

  // ── 7 · Manejo efectivo del llanto: el enlulamiento ─────────────────────────
  7: {
    headerTitle: 'El enlulamiento',
    dur: '4 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué es el enlulamiento?',
        icon: () => CI.baby(KUN.sage),
        image: 'assets/capsulas/manejo_llanto/02.jpeg',
        text: 'El enlulamiento consiste en envolver al bebé con una manta de algodón para replicar las condiciones del ambiente intrauterino. Puede facilitar el sueño y ayudar a disminuir el llanto en los primeros meses. Se recomienda hasta que el bebé aprenda a girarse, aproximadamente a los 4 meses.',
      },
      { num: 2, kind: 'list',
        title: 'Antes de comenzar',
        items: [
          { title: 'Manta de algodón amplia', text: '' },
          { title: 'Siempre boca arriba', text: 'Obsérvalo permanentemente para evitar que se gire boca abajo.' },
          { title: 'Cuna despejada', text: 'Sin sábanas, frazadas, almohadas ni peluches sueltos.' },
          { title: 'Sin sobreabrigar', text: 'Al envolverlo su temperatura aumentará: evita ropa extra debajo.' },
        ],
      },
      { num: 3, kind: 'list',
        title: 'Cómo hacerlo (pasos 1-4)',
        image: 'assets/capsulas/manejo_llanto/05.jpeg',
        items: [
          { title: 'Paso 1', text: 'Pon la manta en una superficie plana formando un rombo.' },
          { title: 'Paso 2', text: 'Dobla una punta y coloca al bebé boca arriba con la cabeza fuera de la manta.' },
          { title: 'Paso 3', text: 'Estira el brazo izquierdo del bebé al costado de su cuerpo, cúbrelo con la manta e introduce la tela libre bajo el lado derecho del bebé.' },
          { title: 'Paso 4', text: 'Dobla la punta inferior sobre el cuerpo, dejando espacio para que las caderas se muevan libremente.' },
        ],
      },
      { num: 4, kind: 'text', accent: KUN.accentSoft,
        title: 'Paso 5 y cuidados finales',
        icon: () => CI.baby(KUN.accent),
        text: 'Estira el brazo derecho al costado del cuerpo y cúbrelo con la manta. Deja siempre espacio suficiente para que las piernas y caderas se muevan con libertad: esto protege el desarrollo adecuado de la articulación de la cadera. Considera el uso de chupete durante el sueño después del primer mes si el bebé está con lactancia materna exclusiva.',
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'El enlulamiento imita el ambiente del útero.', sub: 'Ayuda a calmar el llanto y facilitar el sueño.' },
          { headline: 'Úsalo solo hasta los 4 meses.', sub: 'Cuando el bebé comience a girarse, detén su uso.' },
          { headline: 'Siempre boca arriba y observándolo permanentemente.', sub: 'La seguridad primero.' },
          { headline: 'Deja espacio libre para las caderas.', sub: 'Protege el desarrollo de la articulación.' },
        ],
      },
    ],
  },

  // ── 8 · Masaje para cólicos y estreñimiento ──────────────────────────────────
  8: {
    headerTitle: 'Masaje anticólico',
    dur: '5 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Cuándo y cómo prepararse?',
        icon: () => CI.heart(KUN.sage),
        image: 'assets/capsulas/masaje/07.jpeg',
        text: 'Haz el masaje 1-2 veces al día de forma preventiva. El bebé debe estar despierto, sin hambre y sin enfermedad aguda. Espera al menos 30 minutos después de la alimentación. Usa aceite hipoalergénico o aceite comestible calentado entre tus manos. El bebé debe estar desnudo o solo con pañal, en un lugar temperado.',
      },
      { num: 2, kind: 'list',
        title: 'Técnica (pasos 1-4)',
        image: 'assets/capsulas/masaje/04.jpeg',
        items: [
          { title: 'Paso 1', text: 'Masajea los costados del abdomen, con las manos en la parte baja subiendo hacia arriba.' },
          { title: 'Paso 2', text: 'Círculos alrededor del ombligo con índice y medio, en sentido de las agujas del reloj.' },
          { title: 'Paso 3', text: 'Círculos alrededor del abdomen con la palma, también en sentido de las agujas del reloj.' },
          { title: 'Paso 4', text: 'Movimientos descendentes en el abdomen con ambas manos, una siguiendo a la otra.' },
        ],
      },
      { num: 3, kind: 'list',
        title: 'Técnica (pasos 5-8)',
        image: 'assets/capsulas/masaje/09.jpeg',
        items: [
          { title: 'Paso 5', text: 'Levanta una pierna sosteniéndola del tobillo; con índice y medio haz suaves toques desde el tobillo hasta la zona glútea.' },
          { title: 'Paso 6', text: 'Flexiones de rodillas de forma alternada.' },
          { title: 'Paso 7', text: 'Flexiona ambas rodillas simultáneamente llevándolas hacia el pecho.' },
          { title: 'Paso 8', text: 'Para finalizar, masaje circular con la palma en la base de la columna.' },
        ],
      },
      { num: 4, kind: 'text', accent: KUN.accentSoft,
        title: 'Señales y cuidados',
        icon: () => CI.face(KUN.accent),
        image: 'assets/capsulas/masaje/03.jpeg',
        text: 'El bebé debe estar cómodo durante todo el masaje. Si llora o se muestra incómodo, detente y vuelve a intentarlo más tarde. El masaje no reemplaza la consulta médica si el bebé presenta cólicos intensos o estreñimiento prolongado.',
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'Haz el masaje 1-2 veces al día.', sub: 'Mínimo 30 minutos después de comer.' },
          { headline: 'Siempre en sentido de las agujas del reloj.', sub: 'Siguiendo el trayecto intestinal.' },
          { headline: 'Las flexiones de rodillas ayudan a liberar gases.', sub: 'Alternadas y simultáneas.' },
          { headline: 'Si el bebé llora o se incomoda, detente.', sub: 'Vuelve a intentarlo en otro momento.' },
        ],
      },
    ],
  },

  // ── 9 · Porteo seguro ────────────────────────────────────────────────────────
  9: {
    headerTitle: 'Porteo seguro',
    dur: '5 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué es el porteo y para qué sirve?',
        icon: () => CI.kang(KUN.sage),
        text: 'El porteo consiste en cargar al bebé sobre el cuerpo de un adulto usando un portabebés, mei-tai, fular o mochila ergonómica. Los especialistas lo recomiendan por sus beneficios para el desarrollo del bebé, la prevención del llanto y la promoción del apego.',
      },
      { num: 2, kind: 'list',
        title: 'Lo más importante: la vía aérea',
        image: 'assets/capsulas/porteo/02.jpeg',
        items: [
          { title: 'Mentón siempre despejado', text: 'Asegúrate de que la cabeza del bebé no obstruya el ingreso de aire: evita que el mentón toque su pecho.' },
          { title: 'Aire fresco', text: 'Permite que reciba aire fresco y que la nariz se mantenga despejada.' },
          { title: 'Lo suficientemente cerca para besarlo', text: 'Así podrás observarlo en todo momento.' },
        ],
      },
      { num: 3, kind: 'list',
        title: 'Posición correcta del cuerpo',
        image: 'assets/capsulas/porteo/03.jpeg',
        items: [
          { title: 'Vertical mientras sea pequeño', text: 'Las posiciones horizontales pueden obstruir la vía aérea.' },
          { title: 'Posición de ranita', text: 'Columna curvada, caderas y rodillas dobladas más de 90°, piernas abiertas.' },
          { title: 'Sostén según edad', text: '0-3 meses: hasta la cabeza. 3-8 meses: hasta el cuello. Desde 8 meses: hasta el hombro.' },
          { title: 'Nunca orientado hacia el frente', text: '' },
        ],
      },
      { num: 4, kind: 'list',
        title: 'Comodidad y seguridad',
        items: [
          { title: 'Lee siempre las instrucciones del fabricante', text: '' },
          { title: 'Tela bien estirada y sin nudos', text: '' },
          { title: 'Sin movimientos bruscos', text: 'No saltes, corras ni hagas movimientos bruscos mientras portas.' },
          { title: 'No usar en auto ni bicicleta', text: '' },
        ],
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'El porteo favorece vínculo, calma el llanto y apoya el desarrollo.', sub: '' },
          { headline: 'Posición de ranita: protege caderas y columna.', sub: '' },
          { headline: 'El mentón siempre despejado del pecho.', sub: 'Para que el bebé pueda respirar.' },
          { headline: 'Nunca orientado hacia el frente.', sub: 'Siempre mirando a quien lo porta.' },
        ],
      },
    ],
  },

  // ── 10 · Detección precoz de hipoacusia ──────────────────────────────────────
  10: {
    headerTitle: 'Screening auditivo',
    dur: '4 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué es el screening auditivo?',
        icon: () => CI.wave(KUN.sage),
        text: 'Es un programa de prevención para identificar a los recién nacidos con sordera congénita. El examen debe realizarse antes del primer mes de vida. La detección temprana es fundamental para maximizar el desarrollo del lenguaje del bebé.',
      },
      { num: 2, kind: 'text', accent: KUN.accentSoft,
        title: '¿Cómo se hace?',
        icon: () => CI.monitor(KUN.accent),
        text: 'Se usan dos tipos de examen: Emisiones Otoacústicas (EOA) o Potenciales Evocados Auditivos (PEAT) automatizados. Son simples, rápidos y no invasivos. Consisten en introducir una pequeña sonda en el oído o colocar electrodos en la piel. No generan ninguna incomodidad al bebé.',
      },
      { num: 3, kind: 'list',
        title: 'Los dos resultados posibles',
        items: [
          { title: 'PASA', text: 'Audición dentro de límites normales. Se entrega el informe correspondiente.' },
          { title: 'REFIERE', text: 'Indica sospecha de audición disminuida, no necesariamente hipoacusia. Se repite el examen en 2-3 semanas. Si vuelve a ser REFIERE, el bebé es derivado al otorrinolaringólogo.' },
        ],
      },
      { num: 4, kind: 'text', accent: KUN.sageSoft,
        title: 'Si el resultado es PASA, ¿hay que seguir controlando?',
        icon: () => CI.shield(KUN.sage),
        text: 'Sí. Un resultado PASA indica audición normal al momento del examen, pero existen causas de hipoacusia que aparecen o progresan después del nacimiento. Es importante mantenerse atento al desarrollo del lenguaje y comunicar al médico cualquier diferencia en cómo el bebé responde a los sonidos.',
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'El screening se hace antes del mes de vida.', sub: 'Sin causar ninguna molestia al bebé.' },
          { headline: 'PASA significa audición normal.', sub: 'REFIERE significa que se necesita más evaluación.' },
          { headline: 'Un REFIERE no significa que tu bebé tiene sordera.', sub: 'Es una señal para hacer más evaluaciones.' },
          { headline: 'La detección temprana protege el desarrollo del lenguaje.', sub: '' },
        ],
      },
    ],
  },

  // ── 60 · Maniobra de Heimlich ────────────────────────────────────────────────
  60: {
    headerTitle: 'Maniobra de Heimlich',
    dur: '5 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Qué es y por qué aprenderla?',
        icon: () => CI.shield(KUN.sage),
        image: 'assets/capsulas/heimlich/25.png',
        text: 'La maniobra de Heimlich es una técnica de primeros auxilios para expulsar un objeto de la garganta de un bebé o niño que se está atragantando. Consiste en compresiones firmes que usan el aire de los pulmones para sacar el objeto. Es importante aprenderla antes de necesitarla.',
      },
      { num: 2, kind: 'list',
        title: 'Para bebés hasta 1 año (conscientes)',
        image: 'assets/capsulas/heimlich/13.png',
        items: [
          { title: 'Paso 1', text: 'Sostén al bebé boca abajo sobre tu antebrazo, sosteniendo su cabeza en todo momento.' },
          { title: 'Paso 2', text: 'Da 5 palmadas firmes en la espalda con la base de la palma, entre los omóplatos.' },
          { title: 'Paso 3', text: 'Si el objeto no sale, voltea al bebé sobre su espalda. Traza una línea imaginaria entre las tetillas y con 2 dedos aplica 5 compresiones en el centro del pecho.' },
          { title: 'Paso 4', text: 'Alterna 5 palmadas y 5 compresiones hasta que el bebé pueda respirar, toser o llorar. Si pierde la conciencia: inicia RCP.' },
        ],
      },
      { num: 3, kind: 'list',
        title: 'Para niños de más de 1 año (conscientes)',
        image: 'assets/capsulas/heimlich/26.png',
        items: [
          { title: 'Paso 1', text: 'Pregúntale si se está ahogando. Si asiente, dile que vas a ayudarlo.' },
          { title: 'Paso 2', text: 'Arrodíllate o párate detrás del niño y rodéalo con los brazos.' },
          { title: 'Paso 3', text: 'Forma un puño con el pulgar levemente por encima del ombligo.' },
          { title: 'Paso 4', text: 'Agarra el puño con la otra mano y realiza compresiones rápidas hacia arriba y hacia adentro del estómago. Continúa hasta que el objeto sea expulsado. Si pierde la conciencia: inicia RCP.' },
        ],
      },
      { num: 4, kind: 'list',
        title: 'Lo que debes recordar',
        image: 'assets/capsulas/heimlich/22.png',
        items: [
          { title: 'Para bebés: palmadas en espalda + compresiones en pecho', text: 'Con 2 dedos en el centro del pecho.' },
          { title: 'Para niños: compresiones abdominales', text: 'Por encima del ombligo, hacia arriba y adentro.' },
          { title: 'La técnica de bebés y la de niños son distintas', text: 'No las confundas.' },
          { title: 'Busca capacitación formal', text: 'Pregunta al equipo médico sobre cursos disponibles.' },
        ],
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'Para bebés: 5 palmadas + 5 compresiones en el pecho.', sub: 'Alternadas hasta que el objeto salga.' },
          { headline: 'Para niños: compresiones abdominales hacia arriba y adentro.', sub: 'Por encima del ombligo.' },
          { headline: 'Si el bebé pierde la conciencia, inicia RCP de inmediato.', sub: '' },
          { headline: 'Aprende esta técnica antes de necesitarla.', sub: '' },
        ],
      },
    ],
  },

  // ── 61 · Traslado seguro en auto ─────────────────────────────────────────────
  61: {
    headerTitle: 'Traslado seguro en auto',
    dur: '5 MIN',
    pages: [
      { num: 1, kind: 'text', accent: KUN.sageSoft,
        title: '¿Por qué es tan importante?',
        icon: () => CI.shield(KUN.sage),
        image: 'assets/capsulas/sillas/04.jpeg',
        text: 'Los accidentes de tránsito son una causa importante de lesiones y muerte en niños. El uso correcto de un sistema de retención infantil (SRI) puede reducir entre un 50% y un 80% las lesiones mortales en caso de accidente. Nunca viajes con el bebé en brazos, sin importar lo corto del trayecto.',
      },
      { num: 2, kind: 'text', accent: KUN.accentSoft,
        title: '¿Qué tipo de silla usar?',
        icon: () => CI.star(KUN.accent),
        image: 'assets/capsulas/sillas/00.jpeg',
        text: 'La elección depende de la edad, peso y talla del bebé, y de las características del vehículo. Usa siempre una silla certificada con normas internacionales y acreditada por el Ministerio de Transportes de Chile. Puedes verificar el listado actualizado en conaset.cl.',
      },
      { num: 3, kind: 'list',
        title: 'Cómo instalarla correctamente',
        image: 'assets/capsulas/sillas/06.jpeg',
        items: [
          { title: 'Paso 1', text: 'Colócala en la posición indicada por el fabricante (mirando hacia adelante o hacia atrás).' },
          { title: 'Paso 2', text: 'La posición más segura es el centro del asiento trasero.' },
          { title: 'Paso 3', text: 'Usa el sistema de anclaje indicado: cinturón, Latch o Isofix. No los combines.' },
          { title: 'Paso 4', text: 'Para verificar el anclaje, toma la silla con una mano a cada lado y muévela lateralmente: el movimiento no debe superar 2,5 cm.' },
        ],
      },
      { num: 4, kind: 'list',
        title: 'Cuidados adicionales',
        image: 'assets/capsulas/sillas/07.jpeg',
        items: [
          { title: 'Revisa la fecha de vencimiento', text: 'Siempre antes de usar la silla.' },
          { title: 'Revisión gratuita disponible', text: 'Un técnico puede revisar la instalación en el programa #RevisaTuSilla (conaset.cl).' },
          { title: 'Ajusta bien el arnés', text: 'Ni muy apretado ni muy suelto.' },
          { title: 'No la uses como cama en casa', text: '' },
        ],
      },
      { num: 5, kind: 'summary', title: 'Lo que aprendiste hoy',
        points: [
          { headline: 'Usa siempre silla certificada, apropiada para la edad y peso.', sub: '' },
          { headline: 'Instálala correctamente: movimiento lateral inferior a 2,5 cm.', sub: 'Centro del asiento trasero, la posición más segura.' },
          { headline: 'Nunca lleves al bebé en brazos en el auto.', sub: 'Sin importar la distancia.' },
          { headline: 'Revisa vencimiento y anclaje antes de cada viaje.', sub: '' },
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
    prompt: '¿El apego entre tu bebé y tú depende de haber estado juntos en los primeros minutos de vida?',
    options: [
      {
        text: 'Sí, los primeros minutos son decisivos y no se pueden recuperar.',
        correct: false,
        feedback: 'El apego NO depende de los primeros minutos. Se construye durante los tres primeros años de vida, con tiempo y amor.',
      },
      {
        text: 'No. El apego se construye con el tiempo, el amor y la presencia a lo largo de los primeros años.',
        correct: true,
        feedback: 'El apego es un vínculo que crece cada vez que estás presente, le hablas y lo tocas.',
      },
      {
        text: 'Solo si el bebé nació de parto natural.',
        correct: false,
        feedback: 'El apego no depende del tipo de parto ni del primer contacto. Lo que importa es la presencia, el cariño y el tiempo compartido.',
      },
    ],
  },
  2: {
    prompt: '¿Por qué se prefiere la sonda al dedo en vez de la mamadera?',
    options: [
      {
        text: 'Porque la mamadera es más difícil de limpiar.',
        correct: false,
        feedback: 'La razón principal es que la mamadera puede alterar el patrón de succión natural del bebé, dificultando el acople al pecho materno.',
      },
      {
        text: 'Porque la mamadera puede alterar el patrón de succión y dificultar el acople al pecho.',
        correct: true,
        feedback: 'La sonda al dedo protege la succión natural del bebé mientras se alimenta de forma segura.',
      },
      {
        text: 'Porque el bebé absorbe más leche con la sonda.',
        correct: false,
        feedback: 'La cantidad de leche no es la razón. La clave es proteger el patrón de succión para que el bebé pueda volver al pecho materno.',
      },
    ],
  },
  3: {
    prompt: '¿Cuál es el objetivo principal de la alimentación por sonda al pecho?',
    options: [
      {
        text: 'Reemplazar la lactancia cuando la madre no tiene leche suficiente.',
        correct: false,
        feedback: 'La sonda al pecho no reemplaza la lactancia: la estimula. Mientras el bebé succiona, se activa la producción de leche materna.',
      },
      {
        text: 'Estimular la producción de leche mientras el bebé succiona el pecho.',
        correct: true,
        feedback: 'La succión activa la glándula mamaria y ayuda a establecer o aumentar la producción de leche.',
      },
      {
        text: 'Evitar que el bebé se canse durante la toma.',
        correct: false,
        feedback: 'Aunque también puede ser cómodo, el objetivo principal es estimular la producción de leche materna y facilitar la transición de mamadera a pecho.',
      },
    ],
  },
  4: {
    prompt: '¿Con qué frecuencia se recomienda extraer leche para mantener la producción?',
    options: [
      {
        text: 'Una vez al día por la mañana.',
        correct: false,
        feedback: 'Una vez al día no es suficiente para mantener una buena producción. La frecuencia recomendada es cada 3 horas, incluso de noche.',
      },
      {
        text: 'Cada 3 horas, incluso de noche.',
        correct: true,
        feedback: 'La extracción frecuente imita el ritmo natural de alimentación del bebé y es clave para mantener la producción.',
      },
      {
        text: 'Solo cuando los pechos se sientan muy cargados.',
        correct: false,
        feedback: 'Esperar a sentir los pechos muy cargados puede reducir la producción con el tiempo. Lo ideal es extraer de forma regular, cada 3 horas.',
      },
    ],
  },
  5: {
    prompt: '¿Cuánto tiempo puede mantenerse la leche materna en el refrigerador?',
    options: [
      {
        text: '24 horas.',
        correct: false,
        feedback: 'La leche en refrigerador dura más: hasta 5 días en la primera bandeja, nunca en la puerta.',
      },
      {
        text: '3 días.',
        correct: false,
        feedback: 'La leche en refrigerador puede durar más tiempo si se almacena correctamente. El plazo es de 5 días en la primera bandeja.',
      },
      {
        text: '5 días en la primera bandeja, nunca en la puerta.',
        correct: true,
        feedback: 'Almacenar bien conserva la leche con todas sus propiedades por más tiempo.',
      },
    ],
  },
  6: {
    prompt: '¿Cómo saber si el bebé está tomando bien el pecho?',
    options: [
      {
        text: 'Deglute de forma rítmica, los pechos quedan blandos y no sientes dolor.',
        correct: true,
        feedback: 'Estos son los tres indicadores más claros de una toma efectiva y un acople correcto.',
      },
      {
        text: 'Tarda más de 30 minutos en cada toma.',
        correct: false,
        feedback: 'Una toma larga puede ser señal de un acople inadecuado. Un bebé que toma bien suele vaciarse eficientemente.',
      },
      {
        text: 'Llora después de cada toma.',
        correct: false,
        feedback: 'El llanto frecuente después de tomar puede indicar que el bebé no está quedando satisfecho. Un buen acople permite vaciamiento completo.',
      },
    ],
  },
  7: {
    prompt: '¿Hasta cuándo se recomienda usar el enlulamiento?',
    options: [
      {
        text: 'Durante el primer año de vida.',
        correct: false,
        feedback: 'El enlulamiento debe dejarse antes: aproximadamente a los 4 meses, cuando el bebé comienza a aprender a girarse.',
      },
      {
        text: 'Hasta los 4 meses, cuando el bebé aprende a girarse.',
        correct: true,
        feedback: 'Cuando el bebé comienza a girar, el enlulamiento puede ser un riesgo, ya que podría quedar boca abajo y no poder girarse solo.',
      },
      {
        text: 'Solo los primeros 15 días de vida.',
        correct: false,
        feedback: 'El enlulamiento puede usarse más tiempo: hasta que el bebé comience a intentar girarse, lo que ocurre alrededor de los 4 meses.',
      },
    ],
  },
  8: {
    prompt: '¿Qué dirección debe seguir el masaje abdominal para ser efectivo?',
    options: [
      {
        text: 'En sentido de las agujas del reloj, siguiendo el trayecto intestinal.',
        correct: true,
        feedback: 'Este sentido sigue el recorrido natural del intestino y favorece el movimiento de gases hacia la salida.',
      },
      {
        text: 'En cualquier dirección, lo importante es la presión.',
        correct: false,
        feedback: 'La dirección importa: el sentido de las agujas del reloj sigue el trayecto intestinal y ayuda a mover los gases de forma natural.',
      },
      {
        text: 'De arriba hacia abajo únicamente.',
        correct: false,
        feedback: 'El masaje incluye movimientos circulares alrededor del ombligo y del abdomen, siempre en sentido de las agujas del reloj.',
      },
    ],
  },
  9: {
    prompt: '¿Cuál es la señal más importante para verificar que el porteo es seguro?',
    options: [
      {
        text: 'Que el bebé esté mirando hacia afuera para ver el entorno.',
        correct: false,
        feedback: 'Al contrario: el bebé nunca debe mirar hacia afuera. Siempre debe mirar hacia quien lo porta, para mantener posición segura y contacto visual.',
      },
      {
        text: 'Que el bebé no llore durante el porteo.',
        correct: false,
        feedback: 'El llanto no es el único indicador de seguridad. Lo más importante es verificar la vía aérea: el mentón despejado del pecho y la nariz libre para respirar.',
      },
      {
        text: 'Que el mentón esté despejado del pecho y la nariz libre para respirar.',
        correct: true,
        feedback: 'La vía aérea es la prioridad absoluta en el porteo. Siempre verifica que el bebé pueda respirar con facilidad.',
      },
    ],
  },
  10: {
    prompt: "¿Qué significa que el resultado del screening auditivo sea 'REFIERE'?",
    options: [
      {
        text: 'Que el bebé tiene confirmada una pérdida auditiva.',
        correct: false,
        feedback: 'REFIERE no confirma sordera. Indica una sospecha que requiere más evaluación, ya sea repetir el examen o consultar al otorrinolaringólogo.',
      },
      {
        text: 'Que hay una sospecha de audición disminuida y se necesita más evaluación.',
        correct: true,
        feedback: 'REFIERE no significa diagnóstico. Es una señal para continuar estudiando, no para alarmarse.',
      },
      {
        text: "Que el bebé pasó el examen sin ningún problema.",
        correct: false,
        feedback: "Cuando el bebé pasa sin problemas, el resultado es 'PASA'. 'REFIERE' indica que se necesita más evaluación.",
      },
    ],
  },
  60: {
    prompt: '¿Cuál es la técnica correcta para un bebé menor de 1 año que se está atragantando?',
    options: [
      {
        text: '5 palmadas en la espalda alternadas con 5 compresiones en el centro del pecho.',
        correct: true,
        feedback: 'Esta secuencia usa la presión del aire en los pulmones para expulsar el objeto obstructor.',
      },
      {
        text: 'Compresiones abdominales por encima del ombligo, como en adultos.',
        correct: false,
        feedback: 'Las compresiones abdominales son para niños mayores de 1 año. En bebés, se usan palmadas en la espalda y compresiones en el pecho.',
      },
      {
        text: 'Introducir un dedo en la boca para sacar el objeto.',
        correct: false,
        feedback: 'Nunca introduzcas el dedo en la boca del bebé: puedes empujar el objeto más adentro. Usa palmadas y compresiones en su lugar.',
      },
    ],
  },
  61: {
    prompt: '¿Cuál es la posición más segura para instalar la silla del bebé en el auto?',
    options: [
      {
        text: 'En el asiento del copiloto, frente al airbag, para que lo veas mejor.',
        correct: false,
        feedback: 'El asiento del copiloto con airbag activo es el lugar más peligroso para una silla infantil. El airbag puede causar lesiones graves al activarse.',
      },
      {
        text: 'En el centro del asiento trasero, con el anclaje correcto.',
        correct: true,
        feedback: 'El centro del asiento trasero es la posición más protegida en caso de impacto lateral. Verifica que el movimiento lateral no supere 2,5 cm.',
      },
      {
        text: 'En cualquier asiento trasero, siempre mirando hacia adelante.',
        correct: false,
        feedback: 'La dirección depende de la edad y peso del bebé, y de las instrucciones del fabricante. Algunos bebés deben ir mirando hacia atrás por más tiempo.',
      },
    ],
  },
}

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
          const isIncorrectSelected = isSelected && !option.correct;
          return (
            <button key={i} onClick={() => onSelect(i)} style={{
              width: '100%', border: `1.5px solid ${isIncorrectSelected ? KUN.brick : showCorrect ? KUN.apple : KUN.hair}`,
              background: isIncorrectSelected ? KUN.rosehip : showCorrect ? KUN.apple : KUN.cream,
              color: KUN.ink, borderRadius: 16, padding: '12px 14px',
              display: 'flex', alignItems: 'center', gap: 10,
              fontFamily: 'inherit', textAlign: 'left', cursor: 'pointer',
              transition: 'background .2s, border .2s',
            }}>
              <span style={{
                width: 26, height: 26, borderRadius: '50%',
                background: isIncorrectSelected ? KUN.brick : showCorrect ? KUN.ink : '#fff',
                color: (isIncorrectSelected || showCorrect) ? '#fff' : KUN.inkMuted,
                border: (isIncorrectSelected || showCorrect) ? 'none' : `1px solid ${KUN.hair}`,
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

  React.useEffect(() => {
    window.KUNAnalytics?.track('capsula_pagina_vista', {
      capsule_id: capsuleId,
      capsule_title: capsule.headerTitle,
      page_number: page.num,
      page_index: idx,
      total_pages: CAP_TOTAL_PAGES,
    });
  }, [capsuleId, idx]);

  const goPrev = () => {
    if (!isFirst) {
      window.KUNAnalytics?.track('capsula_pagina_cambiada', {
        capsule_id: capsuleId,
        direction: 'prev',
        from_page: page.num,
        to_page: pages[idx - 1]?.num,
      });
      setIdx(i => i - 1);
    }
  };
  const goNext = () => {
    if (!isLast) {
      window.KUNAnalytics?.track('capsula_pagina_cambiada', {
        capsule_id: capsuleId,
        direction: 'next',
        from_page: page.num,
        to_page: pages[idx + 1]?.num,
      });
      setIdx(i => i + 1);
    }
  };

  const handleBack = () => {
    window.KUNAnalytics?.track('capsula_abandonada', {
      capsule_id: capsuleId,
      capsule_title: capsule.headerTitle,
      page_number: page.num,
      progress_percent: Math.round((page.num / CAP_TOTAL_PAGES) * 100),
    });
    onBack();
  };

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
        <div onClick={handleBack} style={{
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
            {page.image && (
              <img src={page.image} alt="" style={{
                marginTop: 18, width: '100%', borderRadius: 18, display: 'block',
                border: `1px solid ${KUN.hair}`,
              }} />
            )}
          </div>
        )}

        {/* ── Página de lista ── */}
        {page.kind === 'list' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {page.image && (
              <img src={page.image} alt="" style={{
                width: '100%', borderRadius: 18, display: 'block',
                border: `1px solid ${KUN.hair}`, marginBottom: 4,
              }} />
            )}
            {page.note && (
              <div style={{
                fontFamily: CAP_FB, fontSize: 13, color: KUN.inkSoft, fontWeight: 500,
                padding: '10px 14px', background: KUN.accentSoft, borderRadius: 12,
                lineHeight: 1.5,
              }}>{page.note}</div>
            )}
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
                  {item.text ? (
                    <div style={{
                      fontFamily: CAP_FB, fontSize: 13.5, color: KUN.inkSoft, fontWeight: 400,
                      lineHeight: 1.55,
                    }}>{item.text}</div>
                  ) : null}
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
window.CAP_LIBRARY = CAP_LIBRARY;
