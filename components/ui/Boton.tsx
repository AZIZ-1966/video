
import type { ComponentProps } from 'react'
import { Loader2, type LucideIcon } from 'lucide-react'

type VarianteBoton = 'primario' | 'peligro' | 'fantasma'

type BotonProps = ComponentProps<'button'> & {
  variante?: VarianteBoton
  cargando?: boolean
  icono?: LucideIcon
}

export function Boton({
  variante = 'primario',
  cargando = false,
  icono: Icono,
  disabled,
  className = '',
  children,
  ...props
}: BotonProps) {
  const estilos = {
    primario:
      'bg-principal text-texto-invertido hover:opacity-90 focus-visible:ring-principal',
    peligro:
      'bg-error text-texto-invertido hover:opacity-90 focus-visible:ring-error',
    fantasma:
      'bg-informacion text-texto hover:bg-superficie-secundaria focus-visible:ring-principal'
  }

  return (
    <button
      {...props}
      disabled={disabled || cargando}
      className={`
        inline-flex items-center justify-center gap-2
        rounded-lg px-4 py-2
        text-sm font-medium
        transition-colors
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-offset-2
        focus-visible:ring-offset-fondo
        disabled:cursor-not-allowed disabled:opacity-50
        ${estilos[variante]}
        ${className}
      `}
    >
      {cargando ? (
        <Loader2
          className="h-4 w-4 animate-spin"
          aria-hidden="true"
        />
      ) : Icono ? (
        <Icono
          className="h-4 w-4"
          aria-hidden="true"
        />
      ) : null}

      {children}
    </button>
  )
}
