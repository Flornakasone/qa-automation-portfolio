import type { ApiResponse, User } from '../types/api.types'

export class ApiError extends Error {
  constructor(public readonly status: number, public readonly body: string) {
    super(`HTTP ${status}: ${body}`)
    this.name = 'ApiError'
  }
}

export async function get<T>(url: string, headers?: Record<string, string>): Promise<T> {
  const response = await fetch(url, { headers })
  if (!response.ok) {
    throw new ApiError(response.status, await response.text())
  }
  return response.json() as Promise<T>
}

export async function getUserById(id: number): Promise<User> {
  const result = await get<ApiResponse<User>>(`https://reqres.in/api/users/${id}`)
  return result.data
}

export async function getUsersBatch(ids: number[]): Promise<User[]> {
  return Promise.all(ids.map(getUserById))
}

// Retry wrapper that retries a failed async function up to 3 times with exponential backoff
export async function retry<T>(fn: () => Promise<T>, maxRetries: number = 3): Promise<T> {
  let lastError: Error = new Error('Max retries reached')

  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      lastError = error as Error
      // Wait for an exponentially increasing amount of time
      await new Promise((resolve) => setTimeout(resolve, Math.pow(2, i) * 1000))
    }
  }

  throw lastError
}