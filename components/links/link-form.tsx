'use client'

import z from 'zod'
import { useEffect, useState, useTransition } from 'react'
import { Lynk, LynkSchema } from '@/schemas'
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
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { NoTagsCreated } from '@/components/tags/no-tags-created'
import { Tag } from '@/types/tags'
import { SelectTags } from './select-tags'
import { XIcon } from 'lucide-react'
import { toast } from 'sonner'
import { addLynk } from '@/actions/lynk'

interface LinkFormProps {
  tags: Tag[]
  onSuccess: () => void
  actions: (isPending: boolean) => React.ReactNode
}

export function LinkForm({ tags, actions, onSuccess }: LinkFormProps) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([])
  const [isPending, startTransition] = useTransition()

  const form = useForm<Lynk>({
    resolver: zodResolver(LynkSchema),
    defaultValues: {
      link: '',
      lynk: '',
      description: '',
      tags: [],
    },
  })
  const onSubmit = (data: Lynk) => {
    startTransition(async () => {
      try {
        const { data: lynk, error } = await addLynk(data)

        if (error) {
          toast.error(error)
          console.log(error)
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

  useEffect(() => {
    form.setValue('tags', selectedTags)
  }, [selectedTags])

  const handleSelectTags = (tagId: string) => {
    const tagExists = selectedTags.find(tag => tag.id === tagId)

    if (!tagExists) {
      setSelectedTags(selectedTags => [...selectedTags, tags.find(tag => tag.id === tagId)!])
      return
    }
  }

  const handleRemoveSelectedTag = (tagId: string) => {
    const newTags = selectedTags.filter(tag => tag.id !== tagId)

    setSelectedTags(newTags)
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

        <SelectTags
          tags={tags}
          onSelectTags={handleSelectTags}
        />

        {tags.length === 0 && <NoTagsCreated />}
        {selectedTags.length > 0 && (
          <Card>
            <CardContent className='p-0 flex justify-center h-9 items-center text-base gap-5 py-2 roun'>
              {selectedTags.map(tag => (
                <Badge
                  key={tag.id}
                  variant='secondary'
                  className='flex gap-3 items-center'
                >
                  {tag.name}
                  <button onClick={() => handleRemoveSelectedTag(tag.id)}>
                    <XIcon size={16} />
                  </button>
                </Badge>
              ))}
            </CardContent>
          </Card>
        )}
        {actions(isPending)}
      </form>
    </Form>
  )
}
