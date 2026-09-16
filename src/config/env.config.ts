export const config = {
    baseUrl: process.env.BASE_URL  ?? 'https://reqres.in',
    apiKey: process.env.API_KEY ?? '',
    dbUrl: process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/qa_portfolio',
    openaiKey: process.env.OPENAI_API_KEY ?? '',
} as const

export type Config = typeof config