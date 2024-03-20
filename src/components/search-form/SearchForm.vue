<script setup lang="ts">

import { Dialog, DialogTrigger, DialogContent, DialogTitle, } from '@/components/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger
      class="inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
      Stadt Suche..
    </DialogTrigger>
    <DialogContent>
      <DialogTitle class="sr-only">Stadt Suche</DialogTitle>
      Hallo Welt
    </DialogContent>
  </Dialog>
</template>
