Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame el archivo actions/acciones-peliculas.ts con las Server Actions para ESCRIBIR en la base de datos.

Necesito tres funciones:

crearPelicula(datosFormulario: FormData):
Lee titulo y comentario del FormData.
Valida que el título no esté vacío.
Valida que el título no supere los 80 caracteres.
Si el comentario llega vacío, guarda null.
Si los datos son correctos, crea el registro en PostgreSQL.
borrarPelicula(id: string):
Comprueba que el registro existe.
Si existe, lo elimina.
Si no existe, devuelve un resultado de error.
alternarVista(id: string, vista: boolean):
Comprueba que el registro existe.
Actualiza el campo vista con el valor recibido.
No debe invertirlo internamente, porque el custom hook enviará el nuevo valor.

Reglas adicionales:

El archivo empieza con 'use server'.
Exporta el tipo:
tsx
type ResultadoAccion = {
  exito: boolean
  mensaje: string
}

Las tres funciones deben devolver Promise<ResultadoAccion>.
Envuelve cada operación de Prisma en try/catch.
Devuelve mensajes de éxito y error en español.
Importa Prisma exclusivamente desde @/lib/prisma.
Tras crear, borrar o alternar el estado, utiliza revalidatePath() de next/cache para actualizar las rutas afectadas:
/
/vistas
/peliculas/[id] cuando corresponda.
No utilices Prisma fuera de actions/ y lib/.
No utilices any.

Explícame por qué es necesario utilizar revalidatePath() después de modificar los datos.

Entrega el archivo completo.