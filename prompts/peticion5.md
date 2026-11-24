Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame DOS archivos, en este orden: primero hooks/useFormularioPelicula.ts y después components/inicio/FormularioPelicula.tsx.

Dame cada uno con su ruta y su código completo.

ARCHIVO 1: hooks/useFormularioPelicula.ts

Lleva 'use client'.

Exporta la constante MAX_TITULO = 80 y la función useFormularioPelicula().

Debe devolver exactamente:

tsx
{
  enviando,
  caracteres,
  formularioRef,
  tituloRef,
  contarCaracteres,
  manejarEnvio
}


Es el ÚNICO sitio que llama a crearPelicula de @/actions/acciones-peliculas y el único que utiliza toast de Sonner para esta funcionalidad.

Utiliza exclusivamente los hooks permitidos:

useState
useRef
useEffect

Estados:

enviando (boolean).
caracteres (number).

Referencias:

formularioRef: referencia al formulario.
tituloRef: referencia al input del título.

Comportamiento:

manejarEnvio debe ser una función asíncrona.
Ejecuta evento.preventDefault().
Construye el FormData mediante new FormData(evento.currentTarget).
Llama con await a crearPelicula(datosFormulario).
Pon enviando a true antes del await y a false al finalizar.
Si el resultado tiene exito: true, muestra toast.success(resultado.mensaje), limpia el formulario con formularioRef.current?.reset() y devuelve el contador a 0.
Si exito: false, muestra toast.error(resultado.mensaje).
Si ocurre un error inesperado, gestiona el error sin utilizar any.
contarCaracteres actualiza el número de caracteres del título.
useEffect debe poner el foco en el input del título al montar el componente.

IMPORTANTE: no utilices evento.currentTarget.reset() después del await. Utiliza la referencia del formulario.

ARCHIVO 2: components/inicio/FormularioPelicula.tsx

Lleva 'use client'.

NO utiliza directamente useState, useRef, useEffect ni toast.

Solo llama a useFormularioPelicula() y representa la interfaz.

Debe incluir:

Un <form ref={formularioRef} onSubmit={manejarEnvio}>.
Un input name="titulo" con ref={tituloRef}, maxLength={MAX_TITULO}, placeholder Título de la película o serie y onChange={contarCaracteres}.
Un contador de caracteres debajo del input.
El contador debe cambiar al color text-error cuando se alcancen los 80 caracteres.
Un textarea name="comentario" de 3 filas con placeholder Comentario (opcional).
Un botón de envío mediante el componente Boton de @/components/ui/Boton.
Icono Plus de lucide-react.
Texto Añadir a mi videoteca.
Prop cargando={enviando}.

No utilices la propiedad action del formulario.

Respeta las reglas de arquitectura, los hooks permitidos y la paleta de colores.

Entrega ambos archivos completos y explica brevemente qué hace cada uno.