Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame app/peliculas/[id]/page.tsx: la página de detalle de una película o serie.

Características generales
Es un Server Component asíncrono.
NO lleva 'use client'.
Exporta:
tsx
export const dynamic = 'force-dynamic'

Parámetros dinámicos (regla 6)

Declara la función exactamente así:

tsx
export default async function PaginaPelicula(
  props: PageProps<'/peliculas/[id]'>
)


Obtén el ID mediante:

tsx
const { id } = await props.params


PageProps es un tipo global. NO lo importes.

Obtener la película
Utiliza obtenerPeliculaPorId(id) de @/lib/peliculas.
Si devuelve null, llama a notFound() de next/navigation.
No consultes Prisma directamente.
Contenido

Si existe la película:

Arriba, utiliza EnlaceVolver de @/components/nav/EnlaceVolver, con href="/" y texto Volver.
Muestra pelicula.titulo como un <h1> grande.
Muestra la fecha de guardado:
tsx
pelicula.guardadaEn.toLocaleDateString('es-ES', {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
})

Muestra el comentario completo, respetando los saltos de línea con whitespace-pre-wrap.
Si no existe comentario, muestra Esta película o serie no tiene comentario.
Muestra el estado: Vista o Pendiente.
Coloca BotonVista de @/components/BotonVista, pasándole id y vista.
Coloca BotonBorrar de @/components/BotonBorrar, pasándole id.
Metadata dinámica

Exporta también generateMetadata.

Debe establecer como título de la pestaña el título de la película o serie.

Recuerda que también recibe params como promesa y debe utilizar:

tsx
PageProps<'/peliculas/[id]'>


Obtén el ID mediante await props.params y consulta con obtenerPeliculaPorId(id).

Si no existe, devuelve un título apropiado para contenido no encontrado.

Utiliza el tipo Metadata de next.

Diseño
Moderno, limpio y responsive.
Contenido centrado.
Ancho máximo adecuado.
Espaciado coherente.
Colores exclusivamente de la paleta.
Sin variantes dark:.

Reglas:

No utiliza hooks.
No importa Prisma directamente.
No llama a Server Actions.
No utiliza any.
No importa PageProps.

Explícame qué hace exactamente notFound() y por qué es adecuado para una película inexistente.

Entrega el archivo completo.