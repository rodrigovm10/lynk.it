import { Tables } from '@/types'

export const LYNK_TO_COPY = (lynk: Tables<'lynks'>) =>
  `${process.env.NEXT_PUBLIC_API_URL!}/${lynk.lynk}`
