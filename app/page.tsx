
import { FormularioPelicula } from '@/components/inicio/FormularioPelicula'
import { ListaPeliculas } from '@/components/ListaPeliculas'
import { obtenerPeliculas } from '@/lib/peliculas'

export const dynamic = 'force-dynamic'

export default async function PaginaPrincipal() {
  const peliculas = await obtenerPeliculas()

  const totalPeliculas = peliculas.length

  let mensajeTotal: string

  if (totalPeliculas === 0) {
    mensajeTotal = 'Ningún título guardado todavía.'
  } else if (totalPeliculas === 1) {
    mensajeTotal = '1 título guardado.'
  } else {
    mensajeTotal = `${totalPeliculas} títulos guardados.`
  }

  return (
    <main className="min-h-screen bg-fondo px-4 py-8 text-texto sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Mi videoteca.
          </h1>

          <p className="text-sm text-texto-secundario sm:text-base">
            {mensajeTotal}
          </p>
        </header>

        <section aria-label="Añadir película o serie">
          <FormularioPelicula />
        </section>

        <section aria-label="Lista de películas y series">
          <ListaPeliculas
            peliculas={peliculas}
            tituloVacio="Tu videoteca está vacía."
            subtituloVacio="Añade tu primera película o serie para empezar a organizar lo que quieres ver."
          />
        </section>
      </div>
    </main>
  )
}
