import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({ dark: true }),
  actions: {
    init() {
      const saved = localStorage.getItem('hotelo-theme')
      if (saved) this.dark = saved === 'dark'
      document.documentElement.classList.toggle('dark', this.dark)
    },
    toggle() {
      this.dark = !this.dark
      document.documentElement.classList.toggle('dark', this.dark)
      localStorage.setItem('hotelo-theme', this.dark ? 'dark' : 'light')
    },
  },
})
