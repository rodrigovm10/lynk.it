import z from 'zod'

const TagLynkSchema = z.object({
  created_at: z.string(), // Puedes cambiar a z.date() si quieres validar fechas
  id: z.string(),
  name: z
    .string()
    .min(1, { message: 'Tag name is required.' })
    .max(15, { message: 'Tag name must be less than 15 characters.' }),
  updated_at: z.string(),
  user_id: z.string(),
})

export const LynkSchema = z.object({
  id: z.string().readonly().optional(),
  link: z
    .string()
    .min(1, { message: 'Destination link is required' })
    .url({ message: 'Invalid link.' }),
  lynk: z.string({ required_error: 'Lynk is required.' }).min(1, { message: 'Lynk is required.' }),
  description: z.string().optional(),
  tags: z.array(TagLynkSchema).optional(),
})

export const TagSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Tag name is required.' })
    .max(15, 'Tag name must be less than 15 characters.'),
})

export type Lynk = z.infer<typeof LynkSchema>
export type Tag = z.infer<typeof TagSchema>
