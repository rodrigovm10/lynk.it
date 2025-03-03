'use client'

import { create } from 'zustand'

interface LinkStore {
  search: string
  setSearch: (search: string) => void
}

export const useLinkStore = create<LinkStore>(set => ({
  search: '',
  setSearch: search => set({ search }),
}))
