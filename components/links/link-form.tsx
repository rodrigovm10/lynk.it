'use client'

import { Lynk } from '@/schemas'
import { Tag } from '@/types/tags'

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
import { useLinkForm } from '@/hooks/links/useLinkForm'

interface LinkFormProps {
  lynk?: Lynk
  tags?: Tag[]
  onSuccess: () => void
  actions: (isPending: boolean) => React.ReactNode
}

export function LinkForm({ tags, lynk, actions, onSuccess }: LinkFormProps) {
  const { form, isPending, onSubmit } = useLinkForm({ lynk, onSuccess })

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
