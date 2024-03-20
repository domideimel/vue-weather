<script setup lang="ts">
import Header from '@/components/Header.vue'
import { useGeolocation } from '@vueuse/core'
import { useQuery, useQueryClient } from '@tanstack/vue-query'
import { fetchWeather } from '@/lib/queries/fetchWeather.queries.ts'
import { computed, watch } from 'vue'

const { coords } = useGeolocation()
const queryClient = useQueryClient()

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

console.log(data.value)
</script>

<template>
  <div class="min-h-screen">
    <Header/>
    <div class="container flex flex-col">
      <main class="flex-1">
        <pre>
          lat: {{ coords.latitude }}
          lon: {{ coords.longitude }}
        </pre>
      </main>
    </div>
  </div>
</template>
