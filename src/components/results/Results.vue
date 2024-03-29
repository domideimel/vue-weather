<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchWeather } from '@/lib/queries/fetchWeather.queries.ts'
import { useCoordinatesStore } from '@/lib/store/coordinates.store.ts'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const store = useCoordinatesStore()
const { lat, lon } = storeToRefs(store)

const isEnabled = computed(() => !!lat.value && !!lon.value)

const { data } = useQuery({
  ...fetchWeather({ lat, lon }),
  enabled: isEnabled
})

</script>

<template>
  <h3>Results</h3>
  <div>
    <p>{{ store.lat }}</p>
    <p>{{ store.lon }}</p>
  </div>

  <div v-if="data">
    <p>{{ data.name }}</p>
    <p>{{ data.main.temp }}</p>
    <p>{{ data.weather[0].description }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>
