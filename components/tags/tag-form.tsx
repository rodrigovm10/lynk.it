import z from 'zod'
import { TagSchema } from '@/schemas'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input } from '@/components/ui/input'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form'

interface TagFormProps {
  actions: React.ReactNode
}

export function TagForm({ actions }: TagFormProps) {
  const form = useForm<z.infer<typeof TagSchema>>({
    resolver: zodResolver(TagSchema),
  })

  return (
    <Form {...form}>
      <form className='space-y-5'>
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
            </FormItem>
          )}
        ></FormField>
        {actions}
      </form>
    </Form>
  )
}
