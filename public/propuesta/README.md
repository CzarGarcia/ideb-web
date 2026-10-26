# Propuesta de inicio — IDEB México

Prototipo independiente en HTML, CSS y JavaScript. Abre `index.html` directamente o, con `npm run dev` desde la raíz, visita `http://localhost:3000/propuesta/index.html`.

## Dirección visual

Dirección actual: base oscura adaptada a la identidad de IDEB por indicación del usuario: negro #151515, tarjetas gris #1e1e1e, texto claro y rojo #e60808 para solicitudes de servicio. Esta revisión sustituye la paleta cobalto de la referencia anterior. Geist variable en peso 480 para encabezados, tarjetas planas sin sombras y controles redondeados. La página carga `onyx.css` y `machine-hero.css`. `styles.css` y `modern.css` son exploraciones anteriores que ya no se consumen.

La portada usa una imagen ambiental generada con ImageGen. El archivo, prompt y decisiones de implementación se documentan en `DIRECCION-ONYX.md`. El catálogo, equipo y galería conservan recursos del sitio existente.

## Interacciones

- Navegación por secciones y menú móvil con estado accesible y cierre con Escape.
- Aparición de secciones al desplazarse, respuesta visual de tarjetas y entrada de portada. Se respeta `prefers-reduced-motion` y el contenido sigue visible sin JavaScript.
- Las tarjetas seleccionan el servicio en el formulario de contacto.
- Las consultas de producto preparan el motivo y el mensaje, sin sobrescribir un mensaje ya escrito.
- Captura rápida de correo o teléfono en portada: valida el formato y precarga el formulario; no envía una solicitud por sí misma.
- Portada con presentación 3D controlada por scroll: el panel HMI de la fotografía original desciende suavemente hasta 180px respecto al fondo. Hay una sola animación, sin cambios de texto, giros, portada fija ni altura adicional. Usa dos capas fotográficas y CSS, sin Three.js ni WebGL. El movimiento se desactiva si se prefiere movimiento reducido.
- Filtros por categorías de productos existentes, con estado accesible y aviso del número de resultados.
- Marcas con desplazamiento lento, control de pausa y versión estática con movimiento reducido.
- Logotipos de marcas con sus colores originales, tomados de `assets/marcas.png` del sitio de IDEB. Se muestran mediante recortes CSS sobre placas claras, con etiquetas accesibles y proporciones ajustadas individualmente. No se recrean las marcas como texto ni se aplican filtros de color.
- Servicios y preguntas frecuentes con desplegables nativos; galería ampliable con un dialog accesible, navegación por sección y progreso de lectura.
- El formulario valida campos y prepara un correo mediante `mailto:`. Requiere una aplicación de correo configurada; no envía ni almacena datos en un servidor.
- Teléfono, correo y aviso legal enlazados a los datos del sitio actual.

## SEO y siguiente integración

Incluye idioma español de México, título, descripción, Open Graph, Twitter Card, un único H1, HTML semántico, textos alternativos y datos estructurados Organization con información pública de IDEB. No se inventaron métricas, certificaciones, clientes ni proyectos.

Antes de publicar: confirmar textos y domicilio con la empresa; configurar URL canónica, URL social e imagen social definitivas; generar sitemap y robots de producción; convertir metadatos a la API de Next.js. El prototipo no tiene URL canónica de producción para evitar asignarle prematuramente la del sitio vigente.

La ruta de propuesta se mantiene separada de `app/page.tsx`. Para Next.js, separar encabezado, hero, servicios, capacidades, productos, galería, nosotros, marcas, proceso, contacto, preguntas frecuentes y pie en componentes. Las rutas independientes y el espejo bilingüe con `next-intl` corresponden a la futura integración, no al prototipo HTML. El enlace EN abre el sitio vigente en inglés. Para Laravel/Filament, convertir contenidos y recursos en registros administrables y conectar el formulario a un endpoint con validación, protección antispam y aviso de privacidad apropiado. La revisión inicial de contenido se conserva en `REVISION-UX.md`; `DIRECCION-ONYX.md` documenta la referencia visual vigente.

## Panel de control de la fotografía

La portada usa assets/hero-factory-clean.png como fondo y assets/hero-console-cutout.png como capa transparente. Ambas capas conservan la proporción y se alinean a la derecha. Solo se transforma la capa del panel al bajar o subir; el fondo permanece fijo respecto a la sección y la portada no agrega altura al recorrido.

Las capas se editaron con ImageGen a partir de la fotografía original, conservada como hero-ideb-plant.png. Se retiraron el brazo 3D, la dependencia Three.js y sus módulos. Los prompts de edición están en CAPAS-PORTADA.md.
