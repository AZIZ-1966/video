Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame el archivo lib/peliculas.ts con las funciones de LECTURA de películas y series.

Mi modelo de Prisma es EXACTAMENTE:

prisma
model Pelicula {
  id          String   @id @default(cuid())
  titulo      String
  comentario  String?
  vista       Boolean  @default(false)
  guardadaEn  DateTime @default(now())
}


Necesito tres funciones:

obtenerPeliculas() — todas las películas y series, ordenadas primero las pendientes (vista: false) y después las vistas (vista: true). Dentro de cada grupo, las más recientes primero.

Utiliza exactamente:

tsx
orderBy: [
  { vista: 'asc' },
  { guardadaEn: 'desc' }
]

obtenerPeliculasVistas() — exclusivamente las que tienen vista: true, ordenadas por guardadaEn: 'desc'.
obtenerPeliculaPorId(id: string) — una sola película o serie, o null si no existe. Utiliza findUnique.

Reglas obligatorias:

Importa prisma desde @/lib/prisma.
Importa el tipo Pelicula desde @prisma/client únicamente si es necesario.
Son funciones async normales.
Este archivo NO lleva ninguna directiva ('use server', 'use client' ni 'use cache').
No realices escrituras en la base de datos.
No utilices any.
Respeta la arquitectura de cuatro capas.

Entrega el archivo completo, listo para copiar y pegar, acompañado de una explicación breve.