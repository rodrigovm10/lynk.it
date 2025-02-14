'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useTagForm } from '@/hooks/tags/useTagForm'

interface TagFormProps {
  onSuccess: () => void
  actions: (isPending: boolean) => React.ReactNode
}

export function TagForm({ actions, onSuccess }: TagFormProps) {
  const { form, isPending, handleSubmit } = useTagForm(onSuccess)

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
