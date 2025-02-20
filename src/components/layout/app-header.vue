<script setup lang="ts">
import { user, signOut } from '@/lib/auth'
import Button from '@/components/ui/button.vue'
import ThemeToggle from '@/components/ui/theme-toggle.vue'
</script>

<template>
  <header class="border-b">
    <div class="container flex h-16 items-center justify-between">
      <div class="flex items-center gap-6">
        <h1 class="text-xl font-semibold">Noteflare</h1>
      </div>
      <div class="flex items-center gap-4">
        <ThemeToggle />
        <template v-if="user">
          <span class="text-sm text-muted-foreground">{{ user.email }}</span>
          <Button variant="ghost" size="sm" @click="signOut">
            Sign out
          </Button>
        </template>
      </div>
    </div>
  </header>
</template>