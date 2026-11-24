Siguiendo las reglas del Prompt Maestro de VIDEOTECA, créame components/ui/Boton.tsx: un botón reutilizable que usaremos en toda la aplicación.

Props:

variante: 'primario' | 'peligro' | 'fantasma' (por defecto 'primario').
cargando: boolean. Cuando sea true, muestra el icono Loader2 de lucide-react girando mediante animate-spin y deshabilita el botón.
icono: un componente de icono de lucide-react, opcional.
Todas las props nativas de un <button> HTML (type, disabled, onClick, className, etc.), extendiendo React.ComponentProps<'button'>.

Reglas:

NO lleva 'use client'.
No tiene estado propio.
No contiene manejadores de eventos propios.
Utiliza LucideIcon para tipar el icono.
Utiliza exclusivamente la paleta de colores de la regla 14.
No utilices variantes dark:.
No utilices SVG manuales.
No utilices any.

Explícame en una línea por qué, aunque se utilice dentro de componentes 'use client', este archivo no necesita la directiva.

Entrega el código completo.