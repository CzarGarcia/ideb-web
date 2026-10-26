# Revisión UX/UI de IDEB — 25 de octubre de 2026

Fuentes revisadas: inicio, Servicios, Productos, Galeria, Nosotros, Contacto y Pagina.css de https://www.idebmexico.com/.

## Identidad observada

El logotipo es metálico sobre negro. El CSS público usa negro, blanco, fondos #f9f9f9 y grises; la solicitud de servicio usa rgb(230, 8, 8), los enlaces de servicios rgb(0, 174, 255). También hay un separador verde aislado. No se encontró un manual de marca: esta propuesta conserva la base monocromática y prioriza el rojo existente como acento de acción. Los tonos de interfaz son una adaptación, no una supuesta paleta oficial.

## Contenido y navegación

- Servicios: mantener visibles las cuatro familias principales y desplegar detalles sobre instalaciones/facilities, diseño eléctrico, tableros, PLC/HMI/PC/visión, mantenimiento, reparación y posventa. Los detalles nativos funcionan con teclado y sin JavaScript.
- Productos: incorporar HeptaCore PLC, sensor ID24-55V00, PCT y SESD-CONSEN, este último identificado como en desarrollo. Consultar por producto precarga el tipo de solicitud y el mensaje si está vacío. No se inventan precios o existencias.
- Galería: distinguir equipo y material de ingeniería. Las imágenes proceden del sitio existente; no se presentan como casos de éxito verificables ni se atribuyen clientes o resultados a fotografías ilustrativas.
- Nosotros: conservar origen en 2016, Jalisco, valores, misión y visión resumidas; añadir fotografía real del equipo.
- Marcas: mostrar referencias tecnológicas mencionadas por IDEB sin afirmar certificación, distribución autorizada ni alianzas.
- Contacto: teléfono, correo, formulario, domicilio, enlace de ubicación y redes. Formulario aún mediante correo local, sin backend.
- Preguntas frecuentes: orientar sobre información para cotizar, maquinaria existente y alcance del soporte; evitar promesas de tiempos de respuesta o cobertura no confirmada.

## Cambios visuales e interacción

Portada monocromática, titular plateado, tarjetas con transparencia y desenfoque, iluminación ambiental suave, bordes redondeados, efectos al apuntar, entrada con blur, navegación con sección activa, progreso de lectura, contacto flotante y visor de imágenes con dialog nativo. Los efectos respetan movimiento reducido. Los efectos de cursor se limitan a dispositivos con puntero preciso. El desenfoque ambiental anima transformaciones, no su radio.

## Antes de producción

Confirmar identidad con manual de marca y seleccionar fotografías con contexto y derechos; ampliar cada producto y servicio en URLs propias; definir idioma inglés con traducción real; sustituir mailto por API Laravel; gestionar privacidad y antispam; configurar metadatos y sitemap de Next.js. La versión inglesa actual no se simula con un selector sin traducción.
