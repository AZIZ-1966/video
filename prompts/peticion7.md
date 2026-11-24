Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame DOS archivos, en este orden: primero hooks/useAlternarVista.ts y después components/BotonVista.tsx.

ARCHIVO 1: hooks/useAlternarVista.ts

Lleva 'use client'.

Exporta useAlternarVista(id: string, vista: boolean), que devuelve:

tsx
{
  cargando,
  manejarClic
}


Es el ÚNICO sitio que llama a alternarVista de @/actions/acciones-peliculas y el único que utiliza toast de Sonner para esta funcionalidad.

Comportamiento:

Utiliza useState para el estado cargando (boolean).
Debe ponerse a true mientras la Server Action está en curso.
Debe volver a false al finalizar.
manejarClic debe ser una función asíncrona.
Llama mediante await a alternarVista(id, !vista).
Si el resultado tiene exito: true, muestra toast.success.
Si tiene exito: false, muestra toast.error.
Gestiona errores inesperados sin utilizar any.

Utiliza exclusivamente los hooks permitidos.

ARCHIVO 2: components/BotonVista.tsx

Lleva 'use client'.

Props:

id: string.
vista: boolean.

NO utiliza directamente useState, useRef, useEffect ni toast.

Solo llama a useAlternarVista(id, vista).

Utiliza el componente Boton de @/components/ui/Boton.

Iconos:

Eye de lucide-react cuando vista sea false.
EyeOff de lucide-react cuando vista sea true.

Comportamiento:

Si está pendiente, el botón permite marcarla como vista.
Si está vista, permite devolverla a pendiente.
Llama a manejarClic al hacer clic.
Se deshabilita mientras cargando sea true.
Utiliza cargando={cargando}.
Debe tener un aria-label descriptivo:
Marcar como vista.
Marcar como pendiente.

Los iconos decorativos deben llevar aria-hidden="true".

No debe llamar directamente a Server Actions ni importar Prisma.

Respeta la arquitectura de cuatro capas y entrega ambos archivos completos.