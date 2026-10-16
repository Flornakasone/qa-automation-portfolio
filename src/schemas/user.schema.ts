import { z } from 'zod'

export const UserSchema = z.object({
    id: z.number(),
    email: z.string(),
    first_name: z.string().max(100),
    last_name: z.string().max(100),
    avatar: z.string()
})

export type User = z.infer<typeof UserSchema>