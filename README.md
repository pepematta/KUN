# Handoff: KUN — Prototipo funcional (Inicio · Educación · Acerquémonos · Comunidad)

## Overview
KUN es una app móvil para padres de recién nacidos hospitalizados en la UCIN. Su objetivo es acompañar a los padres con información clínica adaptada, facilitar el vínculo con su bebé a distancia y conectarlos con otras familias. Este paquete entrega el **prototipo funcional unificado** con tres secciones implementadas (Inicio, Educación, Acerquémonos) más placeholder para Comunidad, todas conectadas por una barra de navegación inferior compartida.

## About the Design Files
Los archivos en este bundle son **referencias de diseño creadas en HTML/JSX (React+Babel via CDN)** — un prototipo que muestra la apariencia y comportamiento previstos, **no código de producción para copiar directamente**. La tarea es **recrear estos diseños en el entorno del codebase destino** (React Native, Swift/SwiftUI, Flutter, React web, etc.) usando sus patrones, design tokens, navegación y librerías establecidas. Si no existe un entorno aún, elegir el framework apropiado (recomendado: React Native o Flutter por ser app móvil) e implementar allí.

El JSX está cargado vía Babel en el navegador y depende de variables globales (`window.KUN`, `window.KIcon`, etc.) — esto es un atajo para prototipar, no un patrón a replicar.

## Fidelity
**Alta fidelidad (hifi)**. Colores, tipografía, espaciado, radios y micro-interacciones son finales y deben recrearse pixel-perfect dentro del sistema del codebase destino.

## Tech context
- **Frame**: iPhone 390×844, esquinas 54px, dynamic island simulada.
- **Tipografía**: Nunito (Google Fonts), pesos 400/500/600/700/800 + cursiva 600/700.
- **Render**: React 18 + Babel standalone. Cada archivo `*.jsx` es un script `type="text/babel"` y exporta sus componentes a `window.*` para compartirlos.

## Design Tokens

### Colores (en `edu-shared.jsx` → `KUN`)
```
bg          #FAF6F1   // fondo crema general
card        #FFFFFF
cardSoft    #F2EBE0   // chips/iconos sin acento
ink         #2E2A26   // texto principal
inkSoft     #6B6258   // secundario
inkMuted    #9A9087   // metadatos
inkFaint    #C5BCB1   // bordes/dashes/punteados
accent      #C97B5A   // terracota — acción primaria
accentSoft  #F4E2D6   // fondo suave de acento
accentDeep  #A85F40   // texto sobre fondo blanco
sage        #7E9B86   // segundo tono cálido (enfermera, vista, badges)
sageSoft    #E4ECE4
divider     rgba(46,42,38,0.06)
trackSoft   #E8DFD2   // fondo de progress bars
```

### Tipografía
- Familia: `Nunito`. Fallback `-apple-system, system-ui, sans-serif`.
- Títulos grandes: 22–26px / 700–800 / letter-spacing −0.3 a −0.4 / line-height 1.15–1.2.
- Body: 13–14.5px / 500–600 / line-height 1.4–1.45.
- Caps/etiquetas: 11–12px / 700–800 / letter-spacing 0.6.
- `text-wrap: pretty` aplicado a títulos y descripciones largas.

### Radios y sombras
- Cards grandes: `border-radius: 26–32px`.
- Cards pequeños / list rows: 18–22px.
- Pills / chips / botones: 999px.
- Sombra estándar de card: `0 1px 2px rgba(46,42,38,0.03), 0 6–8px 18–24px rgba(46,42,38,0.04–0.05)`.
- Sombra de acento (botón terracota): `0 6–14px 14–30px rgba(201,123,90,0.22–0.4)`.

### Espaciado
- Padding lateral del frame: 20–24px.
- Gap entre cards en stack: 8–12px.
- Padding interior de card: 14–22px.

## Navegación

**Tab bar inferior** (`KBottomNav`): cuatro tabs — Inicio (home), Educación (book), Acerquémonos (heart), Comunidad (people). Tab activa: ícono y label en terracota sobre pill `accentSoft` con opacidad 0.55.

**Subtabs Educación** (`KSubTabs`): pill blanco con tres segmentos — Cuidados básicos, Especial para mi güagüa, Aprender más. Segmento activo: pill terracota sólido sobre fondo blanco.

**Subtabs Actividades con mi güagüa** (en Acerquémonos): mismo patrón con dos segmentos — Música, Voz.

## Screens

### 01 · Inicio (`screen-home.jsx` → `ScreenHome`)
- **TopBar**: logo "KUN" 800/26px + ícono kangaroo (`KunMark`) + botón campana 40px con dot terracota.
- **Saludo**: "Buenos días, Mateo" + "Sigamos juntos hoy."
- **BabyCard**: card 32px radius con foto circular 84px (placeholder rayado), nombre "Sofía" 22/700, "32 días hospitalizada" (32 días en accentDeep/700), "Peso actual 2,1 kg". Blob `accentSoft` decorativo arriba derecha.
- **NurseCard**: card sageSoft, ícono enfermera, "Enfermera de turno" / "Valentina Rojas", badge "En turno" con punto sage.
- **SectionHeader** "Cápsulas para ti" con subtítulo y "Ver todas" (linkea a Educación · Especial para mi güagüa).
- **CapsuleCards** ×2:
  - "Tu bebé empezó a alimentarse por sonda" — tag NUEVO (accent), illustration drop sage.
  - "Método canguro: cómo empezar" — tag RECOMENDADO PARA TI (sageSoft), illustration kangaroo.
  - Click → Educación · Especial para mi güagüa.

### 02 · Educación

#### Cuidados básicos (`edu-camino.jsx`)
- Saludo "Sigamos juntos, *mamá de Sofía*" (mamá... en cursiva accent).
- Card progreso: "TU CAMINO 2 de 4", barra 50% terracota, "Pilar 1 · Cuerpo y cuidados".
- **Path serpenteante**: SVG 390×{altura calc} con cubic Bézier. 4 estaciones en zig-zag (x=78 / x=312 alternando). Línea sólida terracota 3px hasta la estación activa; luego dashed `4 8` color inkFaint.
- Estaciones: dot 44px (52px si activa) con check (done), play (active), número (next con borde dashed). Active dot tiene halo `0 0 0 6px accentSoft`.
- Card al lado del dot (200px, alterna izq/der según `side`).

Datos: "Cómo se ve tu bebé hoy" (done 3min), "Entender los monitores" (done 5min), "Tocar y contener con calma" (active "Continúa aquí · 4 min"), "Cambios de pañal en incubadora" (next "Pronto").

#### Especial para mi güagüa (`edu-personalizado.jsx`)
- Hero terracota con tag "NUEVO PARA TI" + spark, contexto "Porque Sofía empezó a alimentarse por sonda", título 22/800, descripción, "4 min · Lectura + audio", botón blanco "Empezar".
- Sección "Vuelve cuando quieras" con 3 history cards: badge VISTA (sage), título, duración, fecha.

#### Aprender más (`edu-biblioteca.jsx`)
- Search field placeholder "Buscar cápsulas…".
- Chips horizontales: Todo (activo, ink negro), Lactancia, Prematuridad, Equipos y monitores, Acerquémonos, Alta y hogar.
- Header "18 TEMAS" + "Ordenar".
- Lista de TopicRow (acordeón, click toggle):
  - Lactancia (abierto): Producción de leche, Lactancia con sonda.
  - ECMO (cerrado).
  - Prematuridad (cerrado).
  - Método canguro (abierto): Primeros pasos, Posición correcta.
- Topic abierto: ícono sobre `accentSoft`, chevron en círculo terracota; subtopics con bullet 6px terracota.

### 03 · Acerquémonos (`screen-vinculo.jsx` → `ScreenVinculo`)
Estado interno: `view` = `entry | journey | songs`. Estado compartido con app: array `recordings` y función `addRecording`.

#### Entry
- Headline "Acércate a Sofía, aunque no estés ahí." + "Construyan juntos una memoria de estos días."
- Card terracota grande: "Diario de vida · Registra tus momentos" con icon journey 56px en glass interior.
- Card blanco: "Actividades con mi güagüa · Tu voz y la música que la calma" con icon music sage.

#### Diario de vida
- **ActivityCard** fija arriba: tag "ACTIVIDAD DEL DÍA", título "La mano de tu bebé junto a la tuya", descripción, fila de botones: "Subir foto" (primary terracota) + ghost cuadrado de texto + ghost de mic.
- **Feed** con separadores ("HOY · DÍA 32" / "AYER · DÍA 31") y entradas estilo chat:
  - Avatar circular 36px con inicial.
  - Burbuja blanca radius 20 con esquina superior izq 6 (chat).
  - Tipos: `photo` (placeholder rayado + caption), `text`, `voice` (botón play 36px + waveform SVG 28 barras + duración).
- Entradas demo: Mamá texto "Hoy te vi abrir los ojos…" 14:20; Papá voz 0:42 11:45; Abuela Rosa foto + "Te esperamos con mucho amor 🧡" Ayer 19:30.
- Las entradas de `recordings` se insertan como burbujas voice de Mamá.
- **FAB** terracota 58px en bottom-right del scroll.

#### Actividades con mi güagüa
Subtabs Música / Voz.

**Música**: título "¿Qué necesita tu bebé ahora?". Tres cards con emoji icon, nombre, descripción + duración, botón play/pausa circular. Card abierta: borde 2px terracota, mini-reproductor con barra de progreso 34% + thumb 14px y timestamps.

**Voz**: 
- Sección CUENTOS: 3 StoryRow acordeón.
  - "La nube viajera" (abierto por default) muestra texto completo en card cardSoft + botón "Grabar mientras leo" (mic + texto blanco sobre terracota).
  - "El pez pequeño", "La semilla" (cerrados).
- Sección CANCIÓN: card sageSoft con "Nana de la luna llena", letra completa en card blanca interior (italic, 13.5px line-height 1.6), botón "Cantarle a mi bebé · Grabación libre".
- Sección GRABACIONES GUARDADAS: 
  - Vacío (default): card dashed con 🎙️ "Aún no tienes grabaciones".
  - Con datos: lista de cards con play 40px terracota, nombre, "duración · fecha".

**Recorder overlay** (full-screen interno, z-index 200):
- Header con back + "Grabación".
- Estado idle: "Cuando estés lista, presiona el círculo", contador `0:00`, waveform plana inkFaint, botón circular 86px terracota.
- Estado recording: "Estoy escuchando…", contador running, waveform animada (sin con time-shift), botón blanco con cuadrado terracota.
- Tras parar (seconds>0 && !recording): aparece botón "Guardar para Sofía" (ink sólido). Al guardar, llama `addRecording({ name, duration, time })` y cierra.

### 04 · Comunidad
Placeholder: ícono dentro de cuadro `accentSoft`, título "Comunidad", subtítulo, badge "PRÓXIMAMENTE".

## Interactions & State

```
Prototype state:
  tab:        'home' | 'edu' | 'bond' | 'comm'         (bottom nav)
  eduSub:     'camino' | 'perso' | 'biblio'            (edu subtabs)
  bondView:   'entry' | 'journey' | 'songs'            (vínculo internal)
  recordings: Array<{ name, duration, time }>          (compartido voz↔feed)

Transitions:
  - Home capsule click       → tab='edu', eduSub='perso' (Educación · Especial para mi güagüa)
  - Home "Ver todas" click   → tab='edu', eduSub='perso' (Educación · Especial para mi güagüa)
  - Bottom nav click         → setTab(id); if (id==='bond') no reset bondView
  - Acerquémonos entry pick  → setBondView('journey'|'songs')
  - Acerquémonos back button → setBondView('entry')
  - Recorder save            → addRecording(r); recording entry shows in journey feed AND in voz "Grabaciones guardadas"
  - Library topic click      → toggle open
  - Library chip click       → highlight (currently visual only)
  - Music card click         → toggle player open
  - Story click              → toggle expand

Animations:
  - Content swap fade-in: opacity 0→1, translateY 4→0, 0.25s ease-out forwards.
  - Recorder waveform: per-bar height = 6 + |sin(i*0.6 + seconds*0.3)|*30 — re-renders each second tick.
```

## Files
- `KUN Prototype.html` — entry point, monta `<Prototype/>`, define screen labels y orquesta nav.
- `edu-shared.jsx` — paleta `KUN`, set de íconos `KIcon`, `KunMark`, `KStatusBar`, `KTopBar`, `KSubTabs`, `KBottomNav`, `KHomeIndicator`, `KDevice`.
- `screen-home.jsx` — `ScreenHome`.
- `edu-camino.jsx` — `ScreenCamino` + path serpenteante.
- `edu-personalizado.jsx` — `ScreenPersonalizado`.
- `edu-biblioteca.jsx` — `ScreenBiblioteca`.
- `screen-vinculo.jsx` — `ScreenVinculo` + sub-vistas + recorder.

## Assets / Imágenes
No hay imágenes binarias; el prototipo usa **placeholders rayados con CSS** (`repeating-linear-gradient`) para foto del bebé y fotos del feed. En la implementación real estos slots reciben:
- Foto del recién nacido (cargada por la app desde el sistema clínico).
- Fotos subidas por familiares (uploads, con compresión).
- Avatares con inicial son aceptables como fallback.

Todos los íconos son SVG inline definidos en `KIcon` y `VINK_ICONS` — el equipo puede sustituirlos por su set canónico (Lucide, SF Symbols, Material Symbols) manteniendo grosor 1.7–2px y line-cap round.

## Notas para implementación
- **Audio real**: el prototipo simula reproducción con un timer y waveform decorativa. La implementación debe usar `expo-av` / `AVAudioPlayer` / `MediaPlayer` y exponer eventos de progreso reales.
- **Grabación real**: el `Recorder` es UI; reemplazar con permisos de micrófono y `expo-av Recording` / `AVAudioRecorder`.
- **Persistencia**: las grabaciones deben subirse al backend y aparecer en el feed familiar para todos los miembros con acceso al perfil del bebé.
- **Accesibilidad**: todo botón táctil debe ser ≥44×44 (ya cumplido en mocks). Contraste accent/blanco sobre crema validado para AA en texto ≥14px bold.
- **Microcopy**: en español de Chile, primera persona, sin tono clínico ("Tu bebé", "Sigamos juntos", "Acércate a Sofía"). Mantener.
