# KUN — Prototipo funcional

## Overview
KUN es una app móvil para padres de recién nacidos hospitalizados en la UCIN. Acompaña a los padres con información clínica adaptada, facilita el vínculo con su bebé y los conecta con otras familias. Este repositorio contiene el **prototipo funcional de alta fidelidad** con todas las secciones implementadas: Inicio, Educación, Vínculo (Diario de vida + Actividades) y Comunidad, conectadas por barra de navegación inferior.

## About the Design Files
Los archivos son **referencias de diseño en HTML/JSX (React 18 + Babel CDN)** — muestran apariencia y comportamiento finales, **no son código de producción**. La tarea del equipo de desarrollo es **recrear estos diseños en el entorno destino** (React Native, Flutter, Swift/SwiftUI, etc.) usando sus propios patrones, navegación y librerías.

El JSX carga en el navegador via Babel standalone y comparte componentes a través de `window.*` — atajo de prototipado, no un patrón a replicar.

## Fidelity
**Alta fidelidad (hifi)**. Colores, tipografía, espaciado, radios, interacciones y microcopy son finales y deben recrearse con precisión en el sistema destino.

## Tech context
- **Frame**: iPhone 390×844, esquinas 54 px, Dynamic Island simulada.
- **Entry point**: `index.html` — monta `<Prototype/>`, orquesta navegación y estado global.
- **Tipografía**: Quicksand (títulos `V_FT`) + Poppins (body `V_FB`), desde Google Fonts.
- **Render**: React 18 + Babel standalone. Cada `*.jsx` es `<script type="text/babel">` y exporta a `window.*`.

---

## Design System

### Paleta `KUN` (en `edu-shared.jsx`)

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#FAF6F1` | Fondo crema general |
| `card` | `#FFFFFF` | Cards y superficies elevadas |
| `cardSoft` | `#F2EBE0` | Superficies anidadas suaves |
| `ink` | `#2A2320` | Texto principal |
| `inkSoft` | `#5E554E` | Texto secundario |
| `inkMuted` | `#8B827C` | Metadatos, etiquetas |
| `inkFaint` | `#C5BCB1` | Bordes, separadores, dashes |
| `hair` | `rgba(42,35,32,0.10)` | Bordes finos de cards |
| `brick` | `#F0743E` | Acción primaria (botones, FAB, pills activos) |
| `rosehip` | `#F6C3AE` | Acento suave (foto, notas cálidas) |
| `sun` | `#FDD848` | Amarillo (guías, hitos) |
| `apple` | `#AAD59E` | Verde (audio, avances) |
| `clear` | `#9AB2D4` | Azul suave (UCIN, respiración) |
| `viola` | `#CDBCDB` | Lila (texto, emoción) |

> Los tokens `accent`, `accentSoft`, `accentDeep`, `sage`, `sageSoft` son alias de compatibilidad que apuntan a los nuevos tokens.

### Tipografía
- **Quicksand** (`V_FT`): títulos, labels, botones. Pesos 600–700.
- **Poppins** (`V_FB`): body, descripciones, placeholders. Pesos 400–500.
- Títulos grandes: 20–24 px / 700 / letter-spacing −0.3–0.4.
- Body: 13–15 px / 400–500 / line-height 1.45–1.55.
- Etiquetas caps: 10–12 px / 700 / letter-spacing 0.6–0.9.

### Radios y sombras
- Cards grandes: `border-radius: 24–32 px`.
- Cards medias / list rows: 16–20 px.
- Pills / chips / botones: 999 px.
- Sombra card estándar: `0 1px 2px rgba(42,35,32,0.03), 0 6px 18px rgba(42,35,32,0.04)`.
- Sombra FAB brick: `0 8px 22px rgba(240,116,62,0.36)`.

### Íconos
SVG inline definidos en `VINK_ICONS` (edu-shared.jsx). El equipo puede sustituirlos por su set canónico (Lucide, SF Symbols, Material Symbols) manteniendo grosor ~1.7 px y strokeLinecap round.

### Función `tint(hex, alpha)`
Helper disponible en `screen-vinculo.jsx` que mezcla un hex con blanco para generar tints sólidos (sin transparencia real).

---

## Navegación

**Tab bar inferior** (`KBottomNav`): cuatro tabs — Inicio (home), Educación (edu), Vínculo (bond), Comunidad (comm). Tab activa: ícono y label en brick sobre pill cardSoft.

**Estado global** (en `index.html → Prototype`):
```
tab:         'home' | 'edu' | 'bond' | 'comm'
eduSub:      'camino' | 'perso' | 'biblio'
bondView:    'entry' | 'journey' | 'activities' | 'activities-cuentos' | 'activities-canciones' | 'activities-musica'
recordings:  Array<{ name, duration, time }>
babyStatus:  objeto por hijo (ver localStorage)
authData:    datos de autenticación del usuario
```

**Flujos de navegación clave:**
- Home capsule click → Educación · Especial para mi güagüa
- Home BabyCard click → pantalla Estado del bebé
- BabyCard "Registrar turno" → ScreenBabyStatusEdit
- Cualquier notificación → target.tab / target.capsuleId
- Vínculo entry → Diario de vida (`journey`) o Actividades (`activities`)
- Cápsula educativa → ScreenCapsula (overlay full-screen sobre la tab)

---

## Pantallas

### Auth (`screen-auth.jsx` → `ScreenAuth`, `KAuth`, `KTour`)
- **KAuth**: formulario de login con RUT + contraseña, selección de hijo si hay múltiples.
- **KTour**: onboarding de 4 pasos con cards ilustradas. Se muestra una sola vez (flag en localStorage).

### 01 · Inicio (`screen-home.jsx` → `ScreenHome`)
- **TopBar**: logo "KUN" + icono canguro (`KunMark`) + campana con dot brick + engranaje.
- **Saludo**: "Buenos días, [nombre]".
- **BabyCard**: foto circular real (`guaguas/guagua1.jpg`) + nombre bebé + días hospitalizada + peso. Click → ScreenBabyStatusEdit.
- **NurseCard** (si hay enfermera): card con nombre de turno y badge "En turno".
- **NarrativeChip**: chip condensado del estado clínico del bebé (temperatura, respiración, alimentación, accesos, diagnósticos). Generado dinámicamente desde `babyStatus`.
- **NotificationBell** (expandible): lista de notificaciones con destino de navegación.
- **CapsuleCards** ×2: cápsulas personalizadas. Click → ScreenCapsula.
- **Lactario** (overlay): acceso a reserva de sala de lactancia (`ScreenLactario`).

### Estado del bebé (`screen-baby-status.jsx`)
**`ScreenBabyStatusOnboarding`**: formulario de primer ingreso de datos clínicos del bebé.

**`ScreenBabyStatusEdit`**: edición del estado clínico con campos:
- Lugar (incubadora, cuna de calor, cuna normal, pecho materno, brazos)
- Temperatura
- Respiración (ventilación mecánica, CPAP, oxígeno, aire ambiental)
- Alimentación (array múltiple: sonda, pecho, mamadera, parenteral, sin alimentación)
- Accesos vasculares (array múltiple: vía periférica, central, umbilical, PICC)
- Diagnósticos

Persiste en `localStorage` bajo `kun_baby_status_by_child_v1` con clave por hijo. `BabyStatusNarrative` genera frases en lenguaje natural para el NarrativeChip.

### 02 · Educación

#### Cuidados básicos (`edu-camino.jsx` → `ScreenCamino`)
- Card progreso "TU CAMINO N de 4".
- **Path serpenteante SVG**: estaciones en zig-zag con Bézier cúbico. Línea sólida brick hasta estación activa, dashed inkFaint para las siguientes. Dots: check (completada), play (activa con halo), número (próxima dashed).

#### Especial para mi güagüa (`edu-personalizado.jsx` → `ScreenPersonalizado`)
- Hero brick con contexto personalizado + botón "Empezar" → ScreenCapsula.
- Historial de cápsulas vistas.

#### Aprender más (`edu-biblioteca.jsx` → `ScreenBiblioteca`)
- Búsqueda + chips de categoría.
- Lista acordeón de temas con subtopics. Click → ScreenCapsula.

#### Cápsula educativa (`screen-capsula.jsx` → `ScreenCapsula`)
Overlay full-screen con contenido de la cápsula seleccionada. Botón de cierre vuelve al origen (`capsuleSource`).

### 03 · Vínculo (`screen-vinculo.jsx` → `ScreenVinculo`)

#### Entry
- Headline + dos cards: "Diario de vida" y "Actividades con mi güagüa".

#### Diario de vida (`DiaryPrototype`)
Feed de recuerdos en dos columnas (masonry). Orden cronológico: más antiguo arriba, más reciente abajo. Al abrir hace scroll automático al registro más reciente.

**Layout:**
- Header fijo (no scrollea): título + back.
- Feed: `flex:1, overflowY:auto` — scroll interno.
- FAB: `position:absolute` sobre el wrapper — siempre visible, no scrollea con el contenido.

**Tipos de entrada:**

| Tipo | Componente | Descripción |
|---|---|---|
| `photo` | `DiaryFeedPhotoCard` | Imagen a ancho completo con caption opcional en gradiente |
| `text` | `DiaryFeedNoteCard` | Card con fondo tintado, categoría y texto |
| `audio` | `DiaryFeedAudioCard` | Player con waveform SVG decorativa + duración |

**FAB (+)** — grid 2×2 con 4 opciones:
- **Foto**: abre `<input type=file>`, procesa con FileReader a base64.
- **Texto**: abre `DiaryNoteSheet` (textarea + color + categoría simple).
- **Audio**: abre `Recorder` (componente compartido con Actividades).
- **Usar una guía**: abre `DiaryGuideSheet`.

**`DiaryGuideSheet`** — escritura guiada en tres bloques (de arriba a abajo):
1. **Categoría**: 15 píldoras (Hoy celebramos, Hito UCIN, Respiración, Alimentación, Piel con piel, Aprendizaje, Día difícil, Emoción, Personalidad, Calma, Familia, Equipo de salud, Foto del día, Carta, Camino a casa). Al seleccionar, precarga color y prompt principal.
2. **Color suave**: 6 swatches (`#EAF2E7`, `#E9EEF7`, `#F6C3AE`, `#CDBCDB`, `#FFF5DC`, `#F2EBE0`).
3. **Texto**: prompt principal como cabecera coloreada + textarea libre + ideas tocables que insertan texto.

**Persistencia:**
- Clave: `kun_diary_entries_v1`
- Solo se persisten entradas de usuario (id que no empieza con `df`). Las seed entries (`df1`–`df20`) se mezclan al cargar si no existen aún.
- Shape de entrada: `{ id, type, ts, date, text, imageSrc, audioDuration, color, category }`.

**Seed data** (`DIARY_FEED_SEED`): 20 entradas en 8 días (2026-05-25 al 2026-06-08), mostrando días con 1, 2, 3 y 4 entradas combinando fotos, textos y audios. Imágenes reales desde `guaguas/guagua1–10`.

#### Actividades con mi güagüa (`ActividadesGuagua`)
Subtabs: Cuentos / Canciones / Música.
- **Cuentos**: acordeón con texto completo + "Grabar mientras leo".
- **Canciones**: letra completa + "Cantarle a mi güagüa".
- **Música**: tres cards de ambientes sonoros con player toggle.
- **Grabaciones guardadas**: vacío con CTA o lista de cards con play.

**`Recorder`** (compartido entre Actividades y Diario):
- Idle → Recording → (parar) → Guardar.
- Waveform animada en recording. Al guardar llama `addRecording({ name, duration, time })`.

### 04 · Comunidad (`screen-comunidad.jsx` → `ScreenComunidad`)
Feed social de familias UCIN. Completamente implementado.

### Staff (`screen-staff.jsx` → `ScreenStaffApp`)
Vista separada para personal clínico.

### Lactario (`screen-lactario.jsx` → `ScreenLactario`)
Reserva de sala de lactancia. Accesible desde Home.

---

## Imágenes

La carpeta `guaguas/` contiene fotos reales usadas en el feed del Diario de vida:

```
guaguas/guagua1.jpg  →  guagua10.jpg    (seed del feed)
guaguas/premature.jpg                   (referencia legacy)
```

La foto circular del bebé en Home también usa `guaguas/guagua1.jpg`. No hay más placeholders generados con CSS — todo el Diario usa fotos reales.

---

## localStorage

| Clave | Contenido |
|---|---|
| `kun_baby_status_by_child_v1` | Estado clínico por hijo `{ [childKey]: statusObj }` |
| `kun_diary_entries_v1` | Entradas de usuario del Diario de vida |
| `kun_diary_guided_entries_v2` | (legacy) Entradas del diario guiado anterior |
| `kun_auth_*` | Datos de sesión del usuario |

---

## Files

| Archivo | Export principal | Descripción |
|---|---|---|
| `index.html` | `Prototype` | Entry point. Nav, estado global, orquestación de pantallas. |
| `edu-shared.jsx` | `KUN`, `VINK_ICONS`, `KBottomNav`, `KTopBar`, etc. | Design system compartido. |
| `screen-auth.jsx` | `ScreenAuth`, `KAuth`, `KTour` | Login y onboarding. |
| `screen-home.jsx` | `ScreenHome` | Pantalla de inicio. |
| `screen-baby-status.jsx` | `ScreenBabyStatusEdit`, `ScreenBabyStatusOnboarding`, `BabyStatusNarrative` | Estado clínico del bebé. |
| `screen-lactario.jsx` | `ScreenLactario` | Reserva de sala de lactancia. |
| `edu-camino.jsx` | `ScreenCamino` | Educación · Cuidados básicos. |
| `edu-personalizado.jsx` | `ScreenPersonalizado` | Educación · Especial para mi güagüa. |
| `edu-biblioteca.jsx` | `ScreenBiblioteca` | Educación · Aprender más. |
| `screen-capsula.jsx` | `ScreenCapsula` | Cápsula educativa (overlay). |
| `screen-vinculo.jsx` | `ScreenVinculo`, `DiaryPrototype`, `ActividadesGuagua` | Vínculo: diario + actividades + recorder. |
| `screen-comunidad.jsx` | `ScreenComunidad` | Comunidad · Feed social. |
| `screen-staff.jsx` | `ScreenStaffApp` | Vista de personal clínico. |
| `color-system-preview.html` | — | Preview standalone del sistema de color. |

---

## Notas para implementación

- **Audio real**: el `Recorder` simula con timer y waveform decorativa. Implementar con `expo-av` / `AVAudioRecorder` / `MediaRecorder` y exponer progreso real.
- **Fotos**: el prototipo usa FileReader para base64. En producción, comprimir y subir al backend; las fotos del diario deben ser accesibles para todos los miembros de la familia.
- **Persistencia remota**: `localStorage` es un atajo de prototipo. El backend debe sincronizar estado clínico, diario y grabaciones en tiempo real para todos los dispositivos.
- **Multi-hijo**: el prototipo soporta múltiples hijos por familia con selector en Home. `childStatusKey` genera la clave de persistencia por hijo.
- **Accesibilidad**: todos los elementos táctiles son ≥ 44×44 px. Contraste brick/blanco validado para AA ≥ 14 px bold. Mantener microcopy en español de Chile, primera persona, sin tono clínico.
- **Íconos**: SVG inline en `VINK_ICONS`. Sustituir por set canónico del equipo (Lucide, SF Symbols, Material Symbols) manteniendo grosor ~1.7 px y `strokeLinecap: round`.
