import {z} from 'zod';

export const registerSchema= z.object({
  username: z.string({
    required_error: 'username is required'
  }),
  email: z.string({
    required_error: 'email is required'
  }).email({
    message: 'Invalid email'
  }),
  password: z.string({
    required_error: 'Password is rquired'

  }).min(6, {
      message: 'Password must be at least 6 characters'
  }),
  phone: z.string({
    required_error: 'phone number is required'
  }).max(10, {
    message: 'phone must be at least 10  digits'
  }).min(10,{
    message: 'phone must be at least 10  digits'
  })
})

export const loginSchema = z.object({
  email: z.string({
    required_error: 'email is required'
  }).email({
    message: 'Invalid email'
  }),
  password: z.string({
    required_error: 'Password is rquired'

  }).min(6, {
      message: 'Password must be at least 6 characters'
  })
})