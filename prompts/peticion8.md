Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame components/TarjetaPelicula.tsx.

Recibe una prop pelicula del tipo Pelicula, importado de @prisma/client.

Debe mostrar dentro de una tarjeta con borde redondeado, borde y sombra suave:

Título:
Como un <Link> de next/link.
Debe llevar a /peliculas/${pelicula.id}.
Comentario:
Mostrar pelicula.comentario únicamente si existe.
Recortar a dos líneas utilizando line-clamp-2.
Fecha de guardado:
tsx
pelicula.guardadaEn.toLocaleDateString('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

Botón de estado:
Utiliza BotonVista de @/components/BotonVista.
Colócalo arriba a la derecha.
Pásale id={pelicula.id} y vista={pelicula.vista}.
Botón de borrado:
Utiliza BotonBorrar de @/components/BotonBorrar.
Colócalo abajo.
Pásale id={pelicula.id}.
Adaptación visual según el estado
Si pelicula.vista es false, representa una película pendiente.
Si es true, representa una película vista con un aspecto más discreto.

Reglas:

NO lleva 'use client'.
Es un Server Component.
No utiliza hooks.
No importa ni llama a Server Actions.
No importa Prisma como conexión.
Solo recibe los datos mediante props.
Puede importar el tipo Pelicula desde @prisma/client.
Utiliza exclusivamente Tailwind CSS 4 y la paleta de colores.
No utilices variantes dark:.
No utilices SVG manuales.
No utilices any.

Explica por qué puede contener componentes cliente sin necesitar la directiva 'use client'.

Entrega el archivo completo.