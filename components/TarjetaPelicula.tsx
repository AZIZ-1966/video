import Link from 'next/link'
import type { Pelicula } from '@prisma/client'
import { BotonBorrar } from '@/components/BotonBorrar'
import { BotonVista } from '@/components/BotonVista'

type TarjetaPeliculaProps = {
  pelicula: Pelicula
}

export function TarjetaPelicula({
  pelicula
}: TarjetaPeliculaProps) {
  const estilosTarjeta = pelicula.vista
    ? 'border-borde-secundario bg-superficie-secundaria'
    : 'border-borde bg-superficie'

  const estilosTitulo = pelicula.vista
    ? 'text-texto-secundario'
    : 'text-texto'

  return (
    <article
      className={`
        flex flex-col gap-4
        rounded-xl border p-5 shadow-sm
        ${estilosTarjeta}
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <Link
          href={`/peliculas/${pelicula.id}`}
          className={`
            text-lg font-semibold
            transition-colors
            hover:text-principal
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-principal
            focus-visible:ring-offset-2
            focus-visible:ring-offset-fondo
            rounded-sm
            ${estilosTitulo}
          `}
        >
          {pelicula.titulo}
        </Link>

        <BotonVista
          id={pelicula.id}
          vista={pelicula.vista}
        />
      </div>

      {pelicula.comentario && (
        <p className="line-clamp-2 text-sm leading-relaxed text-texto-secundario">
          {pelicula.comentario}
        </p>
      )}

      <div className="flex flex-col gap-3 border-t border-borde-secundario pt-4">
        <p className="text-xs text-texto-terciario">
          Guardada el{' '}
          {pelicula.guardadaEn.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          })}
        </p>

        <div className="flex justify-end">
          <BotonBorrar id={pelicula.id} />
        </div>
      </div>
    </article>
  )
}