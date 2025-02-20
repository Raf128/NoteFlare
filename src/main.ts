import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// Initialize dark mode
const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (isDark) {
  document.documentElement.classList.add('dark')
}

const app = createApp(App)
app.mount('#app')