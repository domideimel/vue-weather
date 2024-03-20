<script setup lang="ts">
import Header from '@/components/Header.vue'

console.log(import.meta.env.VITE_API_KEY)
</script>

<template>
  <div class="min-h-screen">
    <Header/>
    <div class="container flex flex-col">
      <main class="flex-1">
      </main>
    </div>
  </div>
</template>
