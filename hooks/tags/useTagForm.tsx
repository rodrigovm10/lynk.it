import z from 'zod'
import { toast } from 'sonner'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { TagSchema } from '@/schemas'
import { addTag } from '@/actions/tag'

export function useTagForm(onSuccess: () => void) {
  const form = useForm<z.infer<typeof TagSchema>>({
    resolver: zodResolver(TagSchema),
  })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (data: z.infer<typeof TagSchema>) => {
    startTransition(async () => {
      try {
        const { success, error } = await addTag(data.name)
        if (!success) {
          toast.error(error!)
          return
        }
        onSuccess()
        form.reset()
        toast.success('Tag has been created.')
      } catch (err) {
        toast.error('Something went wrong, please try again.')
        console.error(err)
      }
    })
  }

  return { form, isPending, handleSubmit }
}
