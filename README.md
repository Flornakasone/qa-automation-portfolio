![CI](https://github.com/Flornakasone/qa-automation-portfolio/actions/workflows/playwright.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)

# QA Automation Portfolio

Framework de automatización | Playwright + TypeScript | Fintech reconciliation testing

## ¿Qué testea?

**Portfolio #1 — UI Framework** (SauceDemo)
Login flow, galería de productos, filtros, carrito y checkout end-to-end.

**Portfolio #2 — API + Reconciliación** (reqres.in + PostgreSQL)
Schema validation con Zod, reconciliación de datos entre API y base de datos.

**Portfolio #3 — AI Agentic TestGen** _(en construcción)_
Generador de tests con LLM API, self-healing locators, CI failure analyzer.

## Stack

| Capa | Herramienta |
|------|-------------|
| UI + API testing | Playwright + TypeScript |
| Schema validation | Zod |
| Base de datos | PostgreSQL (Docker) |
| CI/CD | GitHub Actions |
| AI | OpenAI / Anthropic API |

## Correr localmente

```bash
npm install
npx playwright install chromium
npx playwright test --project=ui-chromium   # UI tests
npx playwright test --project=api           # API tests
npx tsc --noEmit                            # verificar tipos
```

## Estructura
![CI](https://github.com/Flornakasone/qa-automation-portfolio/actions/workflows/playwright.yml/badge.svg)
![Playwright](https://img.shields.io/badge/Playwright-45ba4b?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?logo=typescript&logoColor=white)

# QA Automation Portfolio

Framework de automatización | Playwright + TypeScript | Fintech reconciliation testing

## ¿Qué testea?

**Portfolio #1 — UI Framework** (SauceDemo)
Login flow, galería de productos, filtros, carrito y checkout end-to-end.

**Portfolio #2 — API + Reconciliación** (reqres.in + PostgreSQL)
Schema validation con Zod, reconciliación de datos entre API y base de datos.

**Portfolio #3 — AI Agentic TestGen** _(en construcción)_
Generador de tests con LLM API, self-healing locators, CI failure analyzer.

## Stack

| Capa | Herramienta |
|------|-------------|
| UI + API testing | Playwright + TypeScript |
| Schema validation | Zod |
| Base de datos | PostgreSQL (Docker) |
| CI/CD | GitHub Actions |
| AI | OpenAI / Anthropic API |

## Correr localmente

```bash
npm install
npx playwright install chromium
npx playwright test --project=ui-chromium   # UI tests
npx playwright test --project=api           # API tests
npx tsc --noEmit                            # verificar tipos
```

## Estructura

src/
types/ # Interfaces y types TypeScript
pages/ # Page Object Models
fixtures/ # Fixtures de Playwright
helpers/ # Funciones utilitarias
schemas/ # Schemas Zod para validación
tests/
ui/ # Tests de interfaz
api/ # Tests de API
reconciliation/ # Tests de reconciliación financiera


## Notas de desarrollo

Desarrollado como plan de carrera estructurado con asistencia de Claude (Anthropic) como advisor técnico. El código, las decisiones de diseño y la revisión crítica de outputs de IA son propios.