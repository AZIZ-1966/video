
'use client'

import { Plus } from 'lucide-react'
import { Boton } from '@/components/ui/Boton'
import {
  MAX_TITULO,
  useFormularioPelicula
} from '@/hooks/useFormularioPelicula'

export function FormularioPelicula() {
  const {
    enviando,
    caracteres,
    formularioRef,
    tituloRef,
    contarCaracteres,
    manejarEnvio
  } = useFormularioPelicula()

  return (
    <form
      ref={formularioRef}
      onSubmit={manejarEnvio}
      className="flex flex-col gap-4 rounded-xl border border-borde bg-superficie p-5"
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="titulo"
          className="text-sm font-medium text-texto"
        >
          Título
        </label>

        <input
          ref={tituloRef}
          id="titulo"
          name="titulo"
          type="text"
          maxLength={MAX_TITULO}
          placeholder="Título de la película o serie"
          onChange={contarCaracteres}
          required
          className="w-full rounded-lg border border-borde-secundario bg-superficie px-4 py-3 text-texto placeholder:text-texto-terciario focus:border-principal focus:outline-none focus:ring-2 focus:ring-principal/20"
        />

        <p
          className={`text-right text-xs ${
            caracteres >= MAX_TITULO
              ? 'text-error'
              : 'text-texto-terciario'
          }`}
        >
          {caracteres}/{MAX_TITULO} caracteres
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="comentario"
          className="text-sm font-medium text-texto"
        >
          Comentario
        </label>

        <textarea
          id="comentario"
          name="comentario"
          rows={3}
          placeholder="Comentario (opcional)"
          className="w-full resize-y rounded-lg border border-borde-secundario bg-superficie px-4 py-3 text-texto placeholder:text-texto-terciario focus:border-principal focus:outline-none focus:ring-2 focus:ring-principal/20"
        />
      </div>

      <Boton
        type="submit"
        cargando={enviando}
        className="w-full"
      >
        <Plus
          className="h-4 w-4"
          aria-hidden="true"
        />
        Añadir a mi videoteca
      </Boton>
    </form>
  )
}
