
import type { Metadata } from 'next'

import {ListaPeliculas} from '@/components/ListaPeliculas'
import { obtenerPeliculasVistas } from '@/lib/peliculas'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Películas vistas',
}

export default async function PaginaVistas() {
  const peliculas = await obtenerPeliculasVistas()

  const totalPeliculas = peliculas.length

  let mensajeTotal: string

  if (totalPeliculas === 0) {
    mensajeTotal = 'Ningún título visto todavía.'
  } else if (totalPeliculas === 1) {
    mensajeTotal = '1 título visto.'
  } else {
    mensajeTotal = `${totalPeliculas} títulos vistos.`
  }

  return (
    <main className="min-h-screen bg-fondo px-4 py-8 text-texto sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Películas y series vistas.
          </h1>

          <p className="text-sm text-texto-secundario sm:text-base">
            {mensajeTotal}
          </p>
        </header>

        <section aria-label="Películas y series vistas">
          <ListaPeliculas
            peliculas={peliculas}
            tituloVacio="Sin películas ni series vistas."
            subtituloVacio="Cuando marques una película o serie como vista, aparecerá aquí."
          />
        </section>
      </div>
    </main>
  )
}
