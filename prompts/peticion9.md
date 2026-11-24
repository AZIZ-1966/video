Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame components/ListaPeliculas.tsx.

Props:

peliculas: Pelicula[] (tipo importado de @prisma/client).
tituloVacio: string.
subtituloVacio: string.

Comportamiento:

Si la lista está vacía (peliculas.length === 0):
Muestra EstadoVacio de @/components/ui/EstadoVacio.
Pásale titulo={tituloVacio} y subtitulo={subtituloVacio}.
Si contiene películas:
Muestra una cuadrícula responsive de TarjetaPelicula de @/components/TarjetaPelicula.
Cada tarjeta recibe su prop pelicula.
Incluye key={pelicula.id}.

Diseño:

Móvil: 1 columna.
Tablet (sm:): 2 columnas.
Escritorio (lg:): 3 columnas.
Utiliza gap para separar las tarjetas.

Reglas:

NO lleva 'use client'.
Es un Server Component.
No utiliza hooks.
No consulta PostgreSQL.
No llama a Server Actions.
No importa Prisma como conexión.
Utiliza exclusivamente los componentes existentes.
Utiliza la paleta de colores.
No utilices variantes dark:.
No utilices any.

Entrega el archivo completo.