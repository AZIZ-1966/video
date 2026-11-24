Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame DOS archivos, en este orden: primero hooks/useBorrarPelicula.ts y después components/BotonBorrar.tsx.

ARCHIVO 1: hooks/useBorrarPelicula.ts

Lleva 'use client'.

Exporta useBorrarPelicula(id: string), que devuelve:

tsx
{
  armado,
  borrando,
  manejarClic
}


Es el ÚNICO sitio que llama a borrarPelicula de @/actions/acciones-peliculas y el único que utiliza toast de Sonner para esta funcionalidad.

Comportamiento:

Primer useState: armado (boolean).
El primer clic pone armado a true.
Segundo clic:
Si armado ya es true, llama mediante await a borrarPelicula(id).
Segundo useState: borrando (boolean).
True mientras dura la Server Action.
Vuelve a false al finalizar.
useEffect:
Si armado es true, crea un setTimeout de 3 segundos.
Si pasan 3 segundos sin confirmar, vuelve a false.
Guarda el identificador del temporizador en un useRef.
Limpia el temporizador con clearTimeout en la función de limpieza del efecto.
Al confirmar el borrado, cancela cualquier temporizador pendiente.
Notificaciones:
toast.success(resultado.mensaje) si tiene éxito.
toast.error(resultado.mensaje) si falla.

Utiliza exclusivamente useState, useRef y useEffect.

No utilices confirm() ni alert().

No utilices any.

ARCHIVO 2: components/BotonBorrar.tsx

Lleva 'use client'.

Recibe:

id: string.

NO utiliza directamente useState, useRef, useEffect ni toast.

Solo llama a useBorrarPelicula(id).

Utiliza el componente Boton de @/components/ui/Boton con:

variante="peligro".
Icono Trash2 de lucide-react.
cargando={borrando}.
onClick={manejarClic}.
Texto inicial Borrar.
Texto ¿Seguro? cuando armado sea true.

El botón debe estar deshabilitado mientras se realiza el borrado.

Respeta todas las reglas de arquitectura, nomenclatura y colores.

Explica por qué es necesaria la limpieza del temporizador.

Entrega los dos archivos completos.