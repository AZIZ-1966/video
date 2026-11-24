Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame app/vistas/page.tsx.

Es parecida a app/page.tsx, pero con las siguientes diferencias:

1. Lectura
Utiliza obtenerPeliculasVistas() de @/lib/peliculas.
Debe mostrar exclusivamente los títulos cuyo campo vista sea true.
No consultes Prisma directamente.
2. Cabecera
Título: Películas y series vistas.
Debajo, muestra el número de títulos vistos.
Utiliza correctamente el singular y el plural.
3. Lista
Utiliza ListaPeliculas de @/components/ListaPeliculas.
Pásale las películas obtenidas.
Textos del estado vacío:
tituloVacio: Sin películas ni series vistas.
subtituloVacio: Cuando marques una película o serie como vista, aparecerá aquí.
4. Formulario
NO incluyas FormularioPelicula.
Esta página es exclusivamente para consultar los títulos vistos.
5. Metadata

Exporta:

tsx
export const metadata: Metadata = {
  title: 'Películas vistas',
}


Importa Metadata desde next.

6. Configuración dinámica

Incluye obligatoriamente:

tsx
export const dynamic = 'force-dynamic'

7. Diseño
Contenido centrado.
Ancho máximo max-w-4xl.
Padding horizontal responsive.
Espaciado vertical adecuado.
Diseño moderno y limpio.
Paleta de colores de la regla 14.
Sin variantes dark:.
Reglas
Server Component.
NO lleva 'use client'.
No utiliza hooks.
No llama a Server Actions.
No importa Prisma directamente.
Puede utilizar funciones de lectura de lib/.
No utiliza any.

Entrega el archivo completo y explica brevemente qué hace.