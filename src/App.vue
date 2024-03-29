<script setup lang="ts">
import Header from '@/components/Header.vue'
import { computedAsync, useGeolocation } from '@vueuse/core'
import { computed, watch } from 'vue'
import { AlertCircle } from 'lucide-vue-next'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import Results from '@/components/results/Results.vue'
import { useCoordinatesStore } from '@/lib/store/coordinates.store.ts'

const { coords } = useGeolocation()
const coordinates = useCoordinatesStore()

const hasGeoPermission = computedAsync(
  async () => {
    return (await navigator.permissions.query({ name: 'geolocation' })).state
  },
  'denied'
)

const lat = computed(() => {
  return Number.isFinite(coords.value.latitude) ? coords.value.latitude : 0
})

const lon = computed(() => {
  return Number.isFinite(coords.value.longitude) ? coords.value.longitude : 0
})

watch([lat, lon], ([lat, lon]) => {
  coordinates.setCoordinates({ lat, lon })
})
</script>

<template>
  <div class="min-h-screen">
    <Header/>
    <div class="container flex flex-col mt-8">
      <main class="flex-1">
        <Alert v-if="hasGeoPermission === 'denied'" variant="destructive">
          <AlertCircle class="w-4 h-4"/>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Du hast die Standortfreigabe abgelehnt. Bitte erlaube den Zugriff auf deinen Standort, um das Wetter zu
            sehen oder nutze die Suche.
          </AlertDescription>
        </Alert>

        <Results/>
      </main>
    </div>
  </div>
</template>
