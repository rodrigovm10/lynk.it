import { toast } from 'sonner'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'

import { addLynk } from '@/actions/lynk'
import { Lynk, LynkSchema } from '@/schemas'
import { zodResolver } from '@hookform/resolvers/zod'

interface UseLinkFormProps {
  lynk?: Lynk
  onSuccess: () => void
}

export function useLinkForm({ lynk, onSuccess }: UseLinkFormProps) {
  const [isPending, startTransition] = useTransition()

  const form = useForm<Lynk>({
    resolver: zodResolver(LynkSchema),
    defaultValues: lynk ? { ...lynk } : undefined,
  })

  const onSubmit = (data: Lynk) => {
    startTransition(async () => {
      try {
        const { data: lynk, error } = await addLynk(data)

        if (error) {
          toast.error(error)
          return
        }

        toast.success('Lynk created successfully', { description: `Url: ${lynk?.lynk}` })
        form.reset()
        onSuccess()
      } catch (error) {
        toast.error('Something went wrong, please try again.')
      }
    })
  }

  return { isPending, form, onSubmit }
}
