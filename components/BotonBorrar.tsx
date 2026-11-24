
'use client'

import { Trash2 } from 'lucide-react'
import { Boton } from '@/components/ui/Boton'
import { useBorrarPelicula } from '@/hooks/useBorrarPelicula'

type BotonBorrarProps = {
  id: string
}

export function BotonBorrar({ id }: BotonBorrarProps) {
  const {
    armado,
    borrando,
    manejarClic
  } = useBorrarPelicula(id)

  return (
    <Boton
      type="button"
      variante="peligro"
      icono={Trash2}
      cargando={borrando}
      disabled={borrando}
      onClick={manejarClic}
    >
      {armado ? '¿Seguro?' : 'Borrar'}
    </Boton>
  )
}
