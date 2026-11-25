import { create, StateCreator } from 'zustand'

type ThemeState = {
  isDark: boolean
  toggleTheme: () => void
}

const createThemeStore: StateCreator<ThemeState> = (set) => ({
  isDark: false,
  toggleTheme: () => set((s) => ({ isDark: !s.isDark}))
})

export const useThemeStore = create<ThemeState>(createThemeStore)

export type { ThemeState }