import { useTransition } from 'react'
import { toast } from 'sonner'

interface UseDeleteProps {
  entityName: string
  deleteFunction: (id: string) => Promise<{ success: boolean; error?: string }>
}

export function useDelete({ entityName, deleteFunction }: UseDeleteProps) {
  const [isPending, startTransition] = useTransition()

  const handleDelete = async (id: string, name: string) => {
    startTransition(async () => {
      try {
        const { success, error } = await deleteFunction(id)

        if (!success) {
          toast.error(error || `Failed to delete the ${entityName}`)
          return
        }

        toast.success(`${entityName} deleted successfully.`, {
          description: `${entityName} "${name}" has been deleted.`,
        })
      } catch (error) {
        toast.error('Something went wrong, please try again.')
        console.log(error)
      }
    })
  }

  return { isPending, handleDelete }
}
