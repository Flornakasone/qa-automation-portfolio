## Día 1 — PaginatedResponse interface

**Prompt usado:** `// Interface for paginated list response with page, per_page, total, total_pages and data array`

**Qué generó Copilot:** interfaz con campos correctos y data como T[]

**Qué verifiqué:** chequeé contra el response real de GET /api/users en reqres.in — los campos coincidían. El response también tenía `support` y `_meta` que Copilot no incluyó.

**Corrección:** agregué `support: Support` y `_meta?: Record<string, unknown>` manualmente.

**Qué acepté sin cambios:** nombres de campos, tipos numéricos, genérico T[].


## Día 2 — Retry wrapper

**Prompt usado:** `// Retry wrapper that retries a failed async function up to 3 times with exponential backoff`

**Qué generó Copilot:** [pegás el código]

**Error encontrado:** `lastError` usado antes de ser asignado (TS2454) — si maxRetries es 0, el loop no corre y la variable queda sin valor.

**Corrección:** inicializar con `new Error('Max retries reached')` en la declaración.

**Qué acepté sin cambios:** lógica de exponential backoff correcta, tipos genéricos correctos.