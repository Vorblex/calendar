import { z } from 'zod'

const validators = z.object({
  email: z.string().email('Invalid email').min(3, 'Email is required'),
  password: z.string().min(3, 'Password must be at least 3 characters long'),
  name: z.string().min(2, 'Name must be at least 2 characters long'),
})

export const loginValidators = validators.omit({ name: true })

export default validators
