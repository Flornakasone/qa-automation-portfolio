import { test, expect } from '@playwright/test'
import { UserSchema } from '../../src/schemas'


test.describe('Users Schema Validation', () =>{
  test ('GET /api/users/2 returns valid schema', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users/2')
    const { data } = await response.json()
    const body = UserSchema.safeParse(data)
    expect(body.success).toBe(true)    
 })
})

