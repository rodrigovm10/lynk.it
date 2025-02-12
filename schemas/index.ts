import z from 'zod'
const tag = z.object({ name: z.string() })

export const LynkSchema = z.object({
  link: z.string().url({ message: 'Invalid link' }),
  shortLink: z.string({ required_error: 'Short link is required' }),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
})

export const TagSchema = z.object({
  name: z.string({ required_error: 'Tag name is required' }),
})
