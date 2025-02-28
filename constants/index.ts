import { Tables } from '@/types'

export const LYNK_TO_COPY = (lynk: Tables<'lynks'>) => `http://localhost:3000/${lynk.lynk}`
