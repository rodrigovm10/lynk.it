import { Tables } from '@/types'

export const LYNK_TO_COPY = (lynk: Tables<'lynks'>) => `${process.env.SITE_URL!}/${lynk.lynk}`
