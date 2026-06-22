import { onMounted } from 'vue'

export const useTheme = () => {
  const isDark = useState('theme:isDark', () => false)

  const applyTheme = (theme: 'dark' | 'light') => {
    isDark.value = theme === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
    document.body.classList.toggle('dark', isDark.value)
    document.documentElement.style.colorScheme = theme
    localStorage.setItem('theme', theme)
  }

  const toggleTheme = () => {
    if (import.meta.client) {
      applyTheme(isDark.value ? 'light' : 'dark')
    }
  }

  const initTheme = () => {
    if (import.meta.client) {
      const savedTheme = localStorage.getItem('theme')
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

      if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        applyTheme('dark')
      } else {
        applyTheme('light')
      }
    }
  }

  onMounted(() => {
    initTheme()
  })

  return {
    isDark,
    toggleTheme,
    initTheme
  }
}
