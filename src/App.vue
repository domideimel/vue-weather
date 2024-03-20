<script setup lang="ts">
import Header from '@/components/Header.vue'
import { computedAsync, useGeolocation } from '@vueuse/core'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { fetchWeather } from '@/lib/queries/fetchWeather.queries.ts'
import { computed, watch } from 'vue'
import { AlertCircle } from 'lucide-vue-next'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

const { coords } = useGeolocation()
const queryClient = useQueryClient()

const hasGeoPermission = computedAsync(
  async () => {
    return (await navigator.permissions.query({ name: 'geolocation' })).state
  },
  'denied'
)

const lat = computed(() => {
  return Number.isFinite(coords.value.latitude) ? coords.value.latitude : null
})

const lon = computed(() => {
  return Number.isFinite(coords.value.longitude) ? coords.value.longitude : null
})

watch([lat, lon], ([lat, lon]) => {
  queryClient.fetchQuery(fetchWeather({ lat: lat ?? 0, lon: lon ?? 0 }))
})

const { data } = useQuery(fetchWeather({ lat: lat.value ?? 0, lon: lon.value ?? 0 }))
</script>

<template>
  <div class="min-h-screen">
    <Header/>
    <div class="container flex flex-col mt-5">
      <main class="flex-1">
        <Alert v-if="hasGeoPermission === 'denied' && !data" variant="destructive">
          <AlertCircle class="w-4 h-4"/>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Du hast die Standortfreigabe abgelehnt. Bitte erlaube den Zugriff auf deinen Standort, um das Wetter zu
            sehen oder nutze die Suche.
          </AlertDescription>
        </Alert>
      </main>
    </div>
  </div>
</template>
