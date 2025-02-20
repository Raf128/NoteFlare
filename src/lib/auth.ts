import { ref } from 'vue'
import { supabase } from './supabase'
import type { User } from '@/types'

export const user = ref<User | null>(null)

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  })
  
  if (error) throw error
  return data
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  
  if (error) throw error
  return data
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

// Initialize user on app load
supabase.auth.onAuthStateChange((event, session) => {
  if (session?.user) {
    user.value = {
      id: session.user.id,
      email: session.user.email!,
    }
  } else {
    user.value = null
  }
})