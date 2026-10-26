# Panel HMI de la portada

Se sustituyó el brazo 3D por el panel de control indicado por el usuario en la fotografía de portada. La fábrica es una capa fija y el panel una capa transparente que desciende con el scroll hasta 180px. La portada conserva su altura normal y no contiene etapas adicionales. Se mantiene la paleta negro, blanco, plata y rojo de la revisión anterior.

Archivos finales en `assets/`:

- `hero-console-cutout.png`: panel aislado sobre transparencia, con su ubicación y escala originales.
- `hero-factory-clean.png`: fábrica con el panel retirado y el fondo reconstruido.
- `hero-ideb-plant.png`: original conservado.

Método: herramienta integrada ImageGen, dos ediciones de la imagen original. No se usó generación de vídeo ni modelos 3D.

## Prompt del recorte

Edit target: attached wide industrial factory photograph. Task: precise background extraction. Isolate ONLY the large foreground industrial HMI control console at the right edge, including its tilted display, buttons, front cabinet and entire visible supporting cabinet, exactly as in the source. Remove every other pixel to true transparency. Extremely important: retain the original full 16:9 landscape canvas, original framing, original scale, exact console placement at the far right, including its existing crop against the right and bottom canvas edges. Leave the left roughly 72 percent and top region transparent. Do not center the object, do not make a portrait image, do not expand or reimagine the machine, no new elements, no background, no ground shadow. Preserve detailed CAD-like screen graphics, metallic photographic reflections, push buttons and lighting. This is an aligned foreground layer to overlay the original photograph for a scroll animation.

## Prompt del fondo

Edit target: the attached original 16:9 factory photograph. Precisely remove the large foreground HMI control terminal and cabinet on the right (entire display, push buttons, support cabinet, and tower light belonging to this terminal). Inpaint the area it occupied with the plausible continuation of this exact factory floor, background automated manufacturing equipment, pipes, and distant windows. Preserve all pixels elsewhere as faithfully as possible: existing robots on the left and center, central aisle, industrial machines, horizon, blue-hour lighting and photographic framing. Keep the original full 16:9 landscape canvas and camera position. No new foreground hero objects. Do not replace the whole photograph or create a new scene. This is the clean background plate under an animated cutout of the original terminal.
