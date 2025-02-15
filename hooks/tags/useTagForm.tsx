import z from 'zod'
import { toast } from 'sonner'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { addTag } from '@/actions/tag'
import { Tag, TagSchema } from '@/schemas'

export function useTagForm(onSuccess: () => void) {
  const form = useForm<Tag>({
    resolver: zodResolver(TagSchema),
    defaultValues: {
      name: '',
    },
  })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (data: Tag) => {
    startTransition(async () => {
      try {
        const { error } = await addTag(data.name)

        if (error) {
          toast.error(error)
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
