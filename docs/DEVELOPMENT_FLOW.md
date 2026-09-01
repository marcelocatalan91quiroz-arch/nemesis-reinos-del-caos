# Flujo de desarrollo

## Regla principal

`main` representa siempre la última versión estable conocida.

## Flujo obligatorio

1. Crear una rama `feature/*` o `fix/*` desde `main`.
2. Hacer un cambio pequeño y verificable.
3. Agregar o actualizar pruebas antes de integrar.
4. Ejecutar `npm test`.
5. Abrir Pull Request hacia `main`.
6. Esperar CI verde.
7. Fusionar únicamente con CI verde.
8. No desplegar automáticamente a Vercel durante la fase inicial.

## Reglas de arquitectura

- Un solo `index.html` como entrada web.
- Un solo árbol de código en `src/`.
- Assets únicamente en `assets/` cuando sean incorporados.
- Datos de cartas únicamente en `data/` cuando sean incorporados.
- Prohibido copiar archivos del proyecto anterior.
- Prohibido crear rutas duplicadas para resolver un fallo.
- Todo ID de carta será estable; todo UID de instancia será único.
- Si una prueba falla, no se fusiona.

## Política de cambios

Cada commit debe tener un propósito único. Las correcciones se hacen sobre la causa raíz, no ocultando errores con fallbacks silenciosos.
