import {test, expect} from '@playwright/test'
import type { ApiResponse, User } from '../../src/types'

test.describe('Users API', () => {
    test('GET /api/users/2 returns valid user data', async ({request}) => {
        const response = await request.get('https://reqres.in/api/users/2')

        expect(response.status()).toBe(200)

        const body = await response.json() as ApiResponse<User>

        expect(body.data.id).toBe(2)
        expect(body.data.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        expect(body.data.first_name).toBeTruthy()
        expect(body.data.last_name).toBeTruthy()
    })

    test('GET /api/users/999 returns 404 for non-existent user', async ({request}) => {
        const response = await request.get('https://reqres.in/api/users/999')
        expect(response.status()).toBe(404)
    })
})