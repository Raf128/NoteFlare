<script setup lang="ts">
import { ref } from 'vue'
import { signIn, signUp } from '@/lib/auth'
import Button from '@/components/ui/button.vue'
import Input from '@/components/ui/input.vue'

const isSignUp = ref(false)
const email = ref('')
const password = ref('')
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  if (!email.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }

  loading.value = true
  error.value = ''

  try {
    if (isSignUp.value) {
      await signUp(email.value, password.value)
    } else {
      await signIn(email.value, password.value)
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'An error occurred'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="space-y-6 w-full max-w-sm">
    <div class="space-y-2 text-center">
      <h1 class="text-2xl font-semibold tracking-tight">
        {{ isSignUp ? 'Create an account' : 'Welcome back' }}
      </h1>
      <p class="text-sm text-muted-foreground">
        {{ isSignUp ? 'Enter your email to create your account' : 'Enter your email to sign in to your account' }}
      </p>
    </div>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div class="space-y-2">
        <Input
          v-model="email"
          type="email"
          placeholder="name@example.com"
          required
        />
      </div>
      <div class="space-y-2">
        <Input
          v-model="password"
          type="password"
          placeholder="••••••••"
          required
        />
      </div>
      <Button
        type="submit"
        class="w-full"
        :disabled="loading"
      >
        {{ isSignUp ? 'Sign Up' : 'Sign In' }}
      </Button>
    </form>
    <div v-if="error" class="text-sm text-destructive text-center">
      {{ error }}
    </div>
    <div class="text-center text-sm">
      <button
        class="text-primary hover:underline"
        @click="isSignUp = !isSignUp"
      >
        {{ isSignUp ? 'Already have an account? Sign in' : 'Don\'t have an account? Sign up' }}
      </button>
    </div>
  </div>
</template>