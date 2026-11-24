Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame app/page.tsx: la página principal que ensambla los componentes de la aplicación.

Características generales
Es un Server Component asíncrono.
NO lleva 'use client'.
Exporta obligatoriamente:
tsx
export const dynamic = 'force-dynamic'

Obtiene las películas y series mediante obtenerPeliculas() de @/lib/peliculas.
No consulta Prisma directamente desde esta página.
Contenido
Cabecera:
Título: Mi videoteca.
Debajo, el número total de títulos.
Singular y plural correctos:
3 títulos guardados.
1 título guardado.
Ningún título guardado todavía.
Formulario:
Utiliza FormularioPelicula de @/components/inicio/FormularioPelicula.
Lista:
Utiliza ListaPeliculas de @/components/ListaPeliculas.
Pásale las películas obtenidas.
Pásale los textos del estado vacío:
Título: Tu videoteca está vacía.
Subtítulo: Añade tu primera película o serie para empezar a organizar lo que quieres ver.
Diseño
Contenido centrado.
Ancho máximo max-w-4xl.
Padding horizontal para móviles.
Espaciado vertical adecuado.
Diseño moderno y responsive.
Utiliza exclusivamente la paleta de colores.
No utilices variantes dark:.
Reglas
No debe llamar a Server Actions.
No debe importar Prisma directamente.
No debe utilizar hooks.
Puede llamar directamente a funciones de lectura de lib/.
No utilices any.

Explícame por qué es necesario export const dynamic = 'force-dynamic' para garantizar que la página consulte los datos actualizados.

Entrega el archivo completo.