<script setup lang="ts">
import { user } from '@/lib/auth'
import AppHeader from '@/components/layout/app-header.vue'
import AuthForm from '@/components/auth/auth-form.vue'
</script>

<template>
  <link rel="icon" type="image/png" href="./assets/noteflare_favicon.png">
  <div class="min-h-screen bg-background text-foreground">
    <AppHeader />
    <main class="container py-8">
      <template v-if="user">
        <!-- Note list and editor will go here -->
        <div class="text-center">
          <p>Welcome! Note components coming next...</p>
        </div>
      </template>
      <template v-else>
        <div class="flex justify-center">
          <AuthForm />
        </div>
      </template>
    </main>
  </div>
</template>