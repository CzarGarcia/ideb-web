# Dirección Onyx — referencia proporcionada por el usuario

La referencia de estilo adjunta sustituye la propuesta visual anterior. El prototipo carga exclusivamente `onyx.css`; `styles.css` y `modern.css` conservan las exploraciones anteriores y no se cargan en la página.

## Implementado en HTML

- Tokens onyx #171721, graphite #1e1e2a, obsidian #272735, ash #c3c3cc, ivory #ededf3 y cobalt #5266eb.
- Geist variable como alternativa a Arcadia; encabezados en peso 480; contenido de 16px y descripciones compactas de 14px.
- Cobalto reservado a la conversión de servicio. Filtros activos en marfil para respetar la regla más restrictiva de la referencia.
- Tarjetas sin sombras, radio 12px y relleno de 32px. Botones, navegación y controles redondeados.
- Portada única, centrada, con captura rápida, fotografía ambiental industrial y entrada escalonada de 100 ms. Curva cubic-bezier(.22,1,.36,1), sin rebotes.
- Navegación transparente que aplica blur 16px al desplazarse más de 40px; revelado de tarjetas y marcas en movimiento lento, con alternativa estática al activar movimiento reducido.
- Filtros de catálogo operativos sobre productos verificados, galería con visor y contacto.

## Alcance de esta etapa

La página continúa como HTML, CSS y JS. Los enlaces principales recorren secciones de la página. La navegación inglesa enlaza a la versión vigente del sitio, no simula una traducción local. Rutas individuales, `next-intl`, API de Next.js y administración Laravel/Filament pertenecen a la integración posterior. El formulario prepara un correo; la captura rápida solamente precarga los datos y lleva al formulario.

No se añaden existencias, clientes, certificaciones, disponibilidad contractual 24/7 ni categorías sin productos confirmados. El contenido propuesto en la referencia puede guiar esas ampliaciones cuando la empresa lo valide.

## Imagen de portada

Archivo final: `assets/hero-ideb-plant.png`.

Generada con la herramienta integrada ImageGen. Imagen ambiental conceptual, no fotografía de instalaciones o de un proyecto ejecutado por IDEB. Las imágenes de equipo y catálogo conservan sus fuentes existentes.

Prompt final: “Generate a photorealistic wide 16:9 website hero background, no typography or logos. Wide architectural photography of a state-of-the-art automated industrial manufacturing floor at twilight blue hour, a sleek illuminated HMI control terminal in the foreground on the right, robotic machinery arms in the misty background, deep onyx and slate shadows (#171721), very subtle cool status LEDs, desaturated cinematic color grading, cleanroom precision, shot on Phase One IQ4 150MP, 35mm lens, f/5.6, atmospheric lighting, no people. Keep the central area darker and visually quiet to support a centered white heading added in HTML. Predominantly charcoal graphite, cool slate, almost monochromatic. Realistic industrial engineering, not science fiction. Asset for IDEB Mexico homepage.”
