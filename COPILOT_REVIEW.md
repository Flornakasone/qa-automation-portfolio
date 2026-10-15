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


## Día 3 — generateRandomTransaction factory

**Prompt usado:** `// Factory that generates realistic Argentine financial transaction test data...`

**Error encontrado:** status tipado como `string` en vez de `Transaction['status']` — TypeScript no infiere el tipo del array literal.

**Corrección:** declarar el array con tipo explícito `Transaction['status'][]`.

**Qué acepté sin cambios:** lógica de randomización, metadata realista, uso de crypto.randomUUID().

## Semana 2-3 — SauceDemo UI Framework

**Qué construí:** Page Object Models para LoginPage, InventoryPage, CartPage, CheckoutPage. Fixtures con setup de login y navegación. Tests e2e de login, inventario, carrito y checkout.

**Dónde usé Copilot:**
- Sugerencias de getters para locators en los POMs
- Estructura base de los fixtures

**Qué corregí:**
- `testIdAttribute: 'data-test'` faltaba en playwright.config.ts — SauceDemo no usa `data-testid`
- Fixture de checkout tenía `use()` antes del setup completo
- `data-test="complete-header"` vs `checkout_complete_container` — inspeccioné el DOM para encontrar el locator real
- Sort con `.sort()` mutaba el array original — corregí con spread `[...array]`

**Qué aprendí:** fixtures como precondiciones reutilizables, jerarquía de locators, cómo el reporte HTML traza cada step.