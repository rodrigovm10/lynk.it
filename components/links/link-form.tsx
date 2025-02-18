'use client'

import { toast } from 'sonner'
import { Tag } from '@/types/tags'
import { useTransition } from 'react'
import { addLynk } from '@/actions/lynk'
import { useForm } from 'react-hook-form'
import { Lynk, LynkSchema } from '@/schemas'
import { Lynk as LynkType } from '@/types/lynk'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { SelectTags } from './select-tags'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { NoTagsCreated } from '@/components/tags/no-tags-created'

interface LinkFormProps {
  lynk?: LynkType
  tags?: Tag[]
  onSuccess: () => void
  actions: (isPending: boolean) => React.ReactNode
}

export function LinkForm({ tags, lynk, actions, onSuccess }: LinkFormProps) {
  const [isPending, startTransition] = useTransition()

  const form = useForm<Lynk>({
    resolver: zodResolver(LynkSchema),
    defaultValues: lynk
      ? {
          lynk: lynk.lynk,
          link: lynk.link,
          description: lynk.description ?? undefined,
          tags: [],
        }
      : undefined,
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

  return (
    <Form {...form}>
      <form
        className='space-y-5'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='link'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='link'>Destination link:</FormLabel>
              <FormControl>
                <Input
                  id='link'
                  placeholder='https://'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='lynk'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='lynk'>Short link:</FormLabel>
              <FormControl>
                <Input
                  id='lynk'
                  placeholder='Short link'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='description'>Description (optional):</FormLabel>
              <FormControl>
                <Textarea
                  id='description'
                  placeholder='Enter a description'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {tags && tags.length > 0 ? (
          <SelectTags
            tags={tags}
            onChangeTags={selectedTags => form.setValue('tags', selectedTags)}
          />
        ) : (
          <NoTagsCreated />
        )}

        {actions(isPending)}
      </form>
    </Form>
  )
}
