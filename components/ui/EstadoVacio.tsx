
import { Film } from 'lucide-react'

type EstadoVacioProps = {
  titulo: string
  subtitulo: string
}

export function EstadoVacio({
  titulo,
  subtitulo
}: EstadoVacioProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 px-6 py-16 text-center">
      <Film
        className="h-16 w-16 text-texto-terciario"
        aria-hidden="true"
        strokeWidth={1.5}
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-texto">
          {titulo}
        </h2>

        <p className="max-w-md text-sm leading-relaxed text-texto-secundario">
          {subtitulo}
        </p>
      </div>
    </div>
  )
}
