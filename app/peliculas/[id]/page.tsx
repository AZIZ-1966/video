
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import {BotonBorrar} from '@/components/BotonBorrar'
import {BotonVista} from '@/components/BotonVista'
import {EnlaceVolver} from '@/components/nav/EnlaceVolver'
import { obtenerPeliculaPorId } from '@/lib/peliculas'

export const dynamic = 'force-dynamic'

export async function generateMetadata(
  props: PageProps<'/peliculas/[id]'>
): Promise<Metadata> {
  const { id } = await props.params

  const pelicula = await obtenerPeliculaPorId(id)

  if (!pelicula) {
    return {
      title: 'Película no encontrada | Videoteca',
    }
  }

  return {
    title: `${pelicula.titulo} | Videoteca`,
  }
}

export default async function PaginaPelicula(
  props: PageProps<'/peliculas/[id]'>
) {
  const { id } = await props.params

  const pelicula = await obtenerPeliculaPorId(id)

  if (!pelicula) {
    notFound()
  }

  const fechaGuardado = pelicula.guardadaEn.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="min-h-screen bg-fondo px-4 py-8 text-texto sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8">

        <EnlaceVolver href="/" texto="Volver" />

        <article className="flex flex-col gap-6 rounded-2xl border border-borde bg-superficie p-6 shadow-sm sm:p-8">

          <header className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-texto-secundario">
                Guardada el {fechaGuardado}
              </span>

              <span
                className={`rounded-full px-3 py-1 text-sm font-medium ${
                  pelicula.vista
                    ? 'bg-exito/10 text-exito'
                    : 'bg-advertencia/10 text-advertencia'
                }`}
              >
                {pelicula.vista ? 'Vista' : 'Pendiente'}
              </span>
            </div>

            <h1 className="break-words text-3xl font-bold tracking-tight sm:text-4xl">
              {pelicula.titulo}
            </h1>
          </header>

          <div className="flex flex-col gap-3 border-t border-borde pt-6">
            <h2 className="text-lg font-semibold">
              Mi comentario
            </h2>

            {pelicula.comentario ? (
              <p className="whitespace-pre-wrap break-words text-base leading-relaxed text-texto-secundario">
                {pelicula.comentario}
              </p>
            ) : (
              <p className="text-sm italic text-texto-terciario">
                Esta película o serie no tiene comentario.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 border-t border-borde pt-6 sm:flex-row sm:items-center">
            <BotonVista
              id={pelicula.id}
              vista={pelicula.vista}
            />

            <BotonBorrar id={pelicula.id} />
          </div>

        </article>
      </div>
    </main>
  )
}
