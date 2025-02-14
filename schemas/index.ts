import z from 'zod'

export const LynkSchema = z.object({
  link: z.string().url({ message: 'Invalid link.' }),
  shortLink: z.string({ required_error: 'Short link is required.' }),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export const TagSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Tag name is required.' })
    .max(15, 'Tag name must be less than 15 characters.'),
})
