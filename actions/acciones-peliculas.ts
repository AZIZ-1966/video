
'use server'

import { revalidatePath } from 'next/cache'
import { prisma } from '@/lib/prisma'

export type ResultadoAccion = {
  exito: boolean
  mensaje: string
}

export async function crearPelicula(
  datosFormulario: FormData
): Promise<ResultadoAccion> {
  const tituloFormulario = datosFormulario.get('titulo')
  const comentarioFormulario = datosFormulario.get('comentario')

  const titulo =
    typeof tituloFormulario === 'string'
      ? tituloFormulario.trim()
      : ''

  const comentario =
    typeof comentarioFormulario === 'string'
      ? comentarioFormulario.trim()
      : ''

  if (!titulo) {
    return {
      exito: false,
      mensaje: 'El título es obligatorio.'
    }
  }

  if (titulo.length > 80) {
    return {
      exito: false,
      mensaje: 'El título no puede superar los 80 caracteres.'
    }
  }

  try {
    await prisma.pelicula.create({
      data: {
        titulo,
        comentario: comentario || null
      }
    })

    revalidatePath('/')
    revalidatePath('/vistas')

    return {
      exito: true,
      mensaje: 'Película o serie añadida correctamente.'
    }
  } catch {
    return {
      exito: false,
      mensaje: 'No se pudo añadir la película o serie.'
    }
  }
}

export async function borrarPelicula(
  id: string
): Promise<ResultadoAccion> {
  try {
    const pelicula = await prisma.pelicula.findUnique({
      where: {
        id
      }
    })

    if (!pelicula) {
      return {
        exito: false,
        mensaje: 'La película o serie no existe.'
      }
    }

    await prisma.pelicula.delete({
      where: {
        id
      }
    })

    revalidatePath('/')
    revalidatePath('/vistas')
    revalidatePath(`/peliculas/${id}`)

    return {
      exito: true,
      mensaje: 'Película o serie eliminada correctamente.'
    }
  } catch {
    return {
      exito: false,
      mensaje: 'No se pudo eliminar la película o serie.'
    }
  }
}

export async function alternarVista(
  id: string,
  vista: boolean
): Promise<ResultadoAccion> {
  try {
    const pelicula = await prisma.pelicula.findUnique({
      where: {
        id
      }
    })

    if (!pelicula) {
      return {
        exito: false,
        mensaje: 'La película o serie no existe.'
      }
    }

    await prisma.pelicula.update({
      where: {
        id
      },
      data: {
        vista
      }
    })

    revalidatePath('/')
    revalidatePath('/vistas')
    revalidatePath(`/peliculas/${id}`)

    return {
      exito: true,
      mensaje: vista
        ? 'Marcada como vista correctamente.'
        : 'Marcada como pendiente correctamente.'
    }
  } catch {
    return {
      exito: false,
      mensaje: 'No se pudo actualizar el estado de la película o serie.'
    }
  }
}
