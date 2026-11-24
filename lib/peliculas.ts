
import { prisma } from '@/lib/prisma'

export async function obtenerPeliculas() {
  return await prisma.pelicula.findMany({
    orderBy: [
      { vista: 'asc' },
      { guardadaEn: 'desc' }
    ]
  })
}

export async function obtenerPeliculasVistas() {
  return await prisma.pelicula.findMany({
    where: {
      vista: true
    },
    orderBy: {
      guardadaEn: 'desc'
    }
  })
}

export async function obtenerPeliculaPorId(id: string) {
  return await prisma.pelicula.findUnique({
    where: {
      id: id
    }
  })
}
