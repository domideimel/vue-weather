<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import SearchForm from '@/components/search-form/SearchForm.vue'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from '@heroicons/vue/20/solid'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
    <div class="container flex items-center justify-between py-4 gap-4">
      <h1>Wetter</h1>
      <div class="flex gap-2">
        <SearchForm/>
        <Button
          variant="ghost"
          aria-label="Toggle dark mode"
          @click="toggleDark()"
        >
          <MoonIcon class="size-5" v-if="!isDark"/>
          <SunIcon class="size-5" v-else/>
        </Button>
      </div>
    </div>
  </header>
</template>
