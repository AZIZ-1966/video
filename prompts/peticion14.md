Siguiendo estrictamente las 14 reglas del Prompt Maestro de VIDEOTECA, mejora el diseño visual de toda la aplicación.

Quiero conseguir un aspecto moderno, limpio, profesional y cuidado.

1. Mejoras visuales

Mejora:

Jerarquía tipográfica: títulos más destacados, subtítulos equilibrados y textos secundarios más discretos.
Espaciado: mejor separación entre secciones, tarjetas, formularios y elementos.
Tarjetas: bordes cuidados, esquinas redondeadas y sombras suaves.
Interacciones: transiciones suaves al pasar el ratón por las tarjetas y botones.
Botones: tamaños, espaciado, bordes y estados visuales coherentes.
Formularios: mejor distribución de campos, contador de caracteres y botón de envío.
Navegación: mejor espaciado y presentación de enlaces.
Responsive: comprobar que todo se vea correctamente en móviles, tablets y escritorio.
2. Colores

Los colores están definidos en app/globals.css mediante la paleta de la regla 14.

El modo oscuro funciona automáticamente.

Por tanto:

NO cambies ningún color.
NO modifiques app/globals.css.
NO añadas variantes dark:.
NO introduzcas colores hexadecimales ni RGB.
Si necesitas matizar un color, utiliza opacidad de la paleta, por ejemplo bg-principal/90.
3. Archivos que puedes revisar
components/ui/Boton.tsx
components/ui/EstadoVacio.tsx
components/nav/BarraNavegacion.tsx
components/nav/EnlaceVolver.tsx
components/inicio/FormularioPelicula.tsx
components/BotonBorrar.tsx
components/BotonVista.tsx
components/TarjetaPelicula.tsx
components/ListaPeliculas.tsx
app/page.tsx
app/vistas/page.tsx
app/peliculas/[id]/page.tsx
4. Restricciones absolutas

NO cambies:

La lógica.
Los imports.
Los nombres de funciones.
Las variables.
Las props.
Los tipos TypeScript.
Los hooks.
Las Server Actions.
Las consultas Prisma.
Las rutas.
La arquitectura de cuatro capas.

SOLO puedes modificar clases de estilo de Tailwind CSS.

No introduzcas librerías adicionales.

5. Forma de trabajar

Quiero que me indiques archivo por archivo:

Ruta completa.
Clases actuales que debo cambiar.
Clases nuevas.
Dónde realizar cada sustitución.
Explicación breve de la mejora visual.

No inventes código de archivos que no hayas visto.

Si necesitas conocer el contenido actual, solicítamelo.

Respeta la regla 10: trabaja progresivamente y espera a que pueda comprobar cada modificación antes de continuar.

El objetivo es conseguir una VIDEOTECA visualmente profesional, moderna, responsive y coherente, sin sacrificar ninguna de las 14 reglas de arquitectura.