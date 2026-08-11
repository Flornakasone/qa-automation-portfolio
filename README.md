# QA Automation Portfolio
Framework de automatización | Playwright + TypeScript 

## Stack
- **Playwright** — framework de testing UI y API
- **TypeScript** — tipado estático, errores en compilación antes de correr tests
- **Zod** — validación de schemas de respuestas de API
- **GitHub Actions** — CI/CD, corre los tests en cada push

## Comandos frecuentes

### Verificar tipos TypeScript (sin generar archivos)
```bash
npx tsc --noEmit
```
Usarlo antes de cada commit. Sin output = sin errores.

### Correr todos los tests
```bash
npx playwright test
```

### Correr tests con interfaz visual
```bash
npx playwright test --ui
```

### Instalar una dependencia de desarrollo
```bash
npm install -D nombre-del-paquete
```
El `-D` la guarda como devDependency en `package.json` (solo para desarrollo).

### Instalar una dependencia de producción
```bash
npm install nombre-del-paquete
```

## Estructura
```
src/
  types/       # Interfaces y types TypeScript
  pages/       # Page Object Models
  fixtures/    # Fixtures de Playwright
  helpers/     # Funciones utilitarias
  schemas/     # Schemas Zod para validación
tests/
  ui/          # Tests de interfaz
  api/         # Tests de API
  reconciliation/ # Tests de reconciliación financiera
```

## Notas de desarrollo

Este proyecto fue desarrollado como plan de carrera estructurado con asistencia de Claude (Anthropic) como advisor técnico. El código, las decisiones de diseño y la revisión crítica de outputs de IA son propios.