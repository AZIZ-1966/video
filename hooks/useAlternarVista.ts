'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { alternarVista } from '@/actions/acciones-peliculas'

export function useAlternarVista(id: string, vista: boolean) {
  const [cargando, setCargando] = useState(false)

  async function manejarClic() {
    setCargando(true)

    try {
      const resultado = await alternarVista(id, !vista)

      if (resultado.exito) {
        toast.success(resultado.mensaje)
      } else {
        toast.error(resultado.mensaje)
      }
    } catch {
      toast.error(
        'Ha ocurrido un error inesperado al actualizar el estado de la película o serie.'
      )
    } finally {
      setCargando(false)
    }
  }

  return {
    cargando,
    manejarClic
  }
}