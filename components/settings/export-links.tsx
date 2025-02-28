'use client'

import { toast } from 'sonner'
import { useTransition } from 'react'
import { Download } from 'lucide-react'
import { retrieveAllLynks } from '@/actions/lynk'

import { Button } from '@/components/ui/button'
import { TypographyP } from '@/components/ui/typografy'
import { PendingAction } from '../ui/pending-action'

export function ExportLinks() {
  const [isPending, startTransition] = useTransition()

  const handleExportLinks = () => {
    startTransition(async () => {
      try {
        const { data, error } = await retrieveAllLynks()

        if (error) {
          toast.error(error)
          console.log(error)
          return
        }

        if (data?.length === 0) {
          toast.error('You have no links to export.')
          return
        }

        const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
        const url = URL.createObjectURL(blob)

        const a = document.createElement('a')
        a.href = url
        a.download = 'lynks-export.json'
        a.click()

        URL.revokeObjectURL(url)

        toast.success('Links exported successfully.')
      } catch (error) {
        toast.error('Something went wrong, please try again.')
      }
    })
  }

  return (
    <section>
      <TypographyP>Export Links:</TypographyP>
      <Button
        variant='outline'
        onClick={handleExportLinks}
        disabled={isPending}
      >
        <PendingAction
          isPending={isPending}
          loadingText='Exporting...'
          normalText='Export links'
          icon={<Download />}
        />
      </Button>
    </section>
  )
}
