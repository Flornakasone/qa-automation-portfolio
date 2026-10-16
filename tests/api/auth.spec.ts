import { test, expect } from '@playwright/test'

test.describe('Auth - reqres.in', () => {
  let token: string

  test.beforeAll(async ({ request }) => {
    const response = await request.post('/api/login', {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
      }
    })
    const body = await response.json()
    token = body.token
  })

  test('token is returned on valid login', async () => {
    expect(token).toBeDefined()
  })

    test('authenticated request succeeds', async ({ request }) => {
      const response = await request.get('/api/users/2')
      expect(response.status()).toBe(200)
    })

})