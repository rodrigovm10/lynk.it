'use client'

import z from 'zod'
import { useState } from 'react'
import { LynkSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { NoTagsCreated } from '@/components/tags/no-tags-created'

interface LinkFormProps {
  actions: React.ReactNode
}

const TagsAray = [
  {
    id: '1',
    name: 'a',
  },
  {
    id: '2',
    name: 'b',
  },
  {
    id: '3',
    name: 'c',
  },
]

export function LinkForm({ actions }: LinkFormProps) {
  const [selectedTags, setSelectedTags] = useState<typeof TagsAray>([])
  const form = useForm<z.infer<typeof LynkSchema>>({
    resolver: zodResolver(LynkSchema),
    defaultValues: {
      tags: ['a'],
    },
  })

  const onSubmit = (data: z.infer<typeof LynkSchema>) => {
    console.log(data)
  }

  const handleSelectTags = (tag: string) => {
    setSelectedTags(selectedTags => [...selectedTags, TagsAray.find(t => t.id === tag)!])
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
          name='shortLink'
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor='short-link'>Short link:</FormLabel>
              <FormControl>
                <Input
                  id='short-link'
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

        <div className='space-y-1'>
          <Label htmlFor='tags'>Add tags to your link:</Label>
          <Select
            onValueChange={value => {
              handleSelectTags(value)
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder='Tag' />
            </SelectTrigger>
            <SelectContent>
              {TagsAray.map(tag => (
                <SelectItem
                  key={tag.id}
                  value={tag.id}
                >
                  {tag.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {TagsAray.length === 0 && <NoTagsCreated />}
        {selectedTags.length > 0 && (
          <Card>
            <CardContent className='p-0 flex justify-center h-9 items-center text-base gap-5 py-2 roun'>
              {selectedTags.map(tag => (
                <Badge
                  key={tag.id}
                  variant='secondary'
                  className='flex gap-3 items-center'
                >
                  {tag.name} <span className='font-thin items-start cursor-pointer'>x</span>
                </Badge>
              ))}
            </CardContent>
          </Card>
        )}
        {actions}
      </form>
    </Form>
  )
}
