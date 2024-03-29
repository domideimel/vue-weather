<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { fetchWeather } from '@/lib/queries/fetchWeather.queries.ts'
import { useCoordinatesStore } from '@/lib/store/coordinates.store.ts'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { HomeModernIcon } from '@heroicons/vue/20/solid'
import { Separator } from '@/components/ui/separator'

const store = useCoordinatesStore()
const { lat, lon } = storeToRefs(store)

const isEnabled = computed(() => !!lat.value && !!lon.value)

const { data } = useQuery({
  ...fetchWeather({ lat, lon }),
  enabled: isEnabled
})

</script>

<template>

  <Card>
    <CardHeader>
      <CardTitle>
        <template v-if="!isEnabled">
          <Skeleton class="w-1/2 h-4"/>
        </template>
        <template v-else>
          <div class="flex gap-1 items-end">
            <HomeModernIcon class="size-5"/>
            <span>{{ data?.name }}, {{ data?.sys.country }}</span>
          </div>
        </template>
      </CardTitle>
      <CardDescription>
        <template v-if="!isEnabled">
          <Skeleton class="w-1/4 h-3"/>
        </template>
        <template v-else>
          {{ data?.weather[0].description }}
        </template>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div class="space-y-3">
        <template v-if="!isEnabled">
          <Skeleton class="w-1/2 h-6"/>
          <Skeleton class="w-1/2 h-6"/>
          <Skeleton class="w-1/2 h-6"/>
          <Skeleton class="w-1/2 h-6"/>
        </template>
        <template v-else>
          <div v-if="data?.main?.temp">
            Temperatur: {{ data.main.temp }}°C
          </div>
          <div v-if="data?.dt">
            Zeit der Datenermittlung: {{ new Date(data.dt * 1000).toLocaleTimeString() }} Uhr
          </div>
          <Separator/>
          <div v-if="data?.sys?.sunrise">
            Sonnenaufgang: {{ new Date(data.sys.sunrise * 1000).toLocaleTimeString() }}
          </div>
          <div v-if="data?.sys?.sunset">
            Sonnenuntergang: {{ new Date(data.sys.sunset * 1000).toLocaleTimeString() }}
          </div>
        </template>
      </div>
    </CardContent>
  </Card>
</template>
