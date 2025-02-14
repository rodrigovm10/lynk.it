'use client'

import z from 'zod'
import { toast } from 'sonner'
import { useTransition } from 'react'
import { TagSchema } from '@/schemas'
import { addTag } from '@/actions/tag'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

interface TagFormProps {
  onSuccess: () => void
  actions: (isPending: boolean) => React.ReactNode
}

export function TagForm({ actions, onSuccess }: TagFormProps) {
  const form = useForm<z.infer<typeof TagSchema>>({
    resolver: zodResolver(TagSchema),
  })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (data: z.infer<typeof TagSchema>) => {
    try {
      const { name } = data

      startTransition(async () => {
        const { success, error } = await addTag(name)
        if (!success) {
          toast.error(error!)
          return
        }
        onSuccess()
        form.reset()
        toast.success('Tag has been created.')
      })
    } catch (err) {
      toast.error('Something went wrong, please try again.')
    }
  }

  return (
    <Form {...form}>
      <form
        className='space-y-5'
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='tag-name'>Tag name:</FormLabel>
              <FormControl>
                <Input
                  id='tag-name'
                  placeholder='Programming'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {actions(isPending)}
      </form>
    </Form>
  )
}
