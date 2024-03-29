import { UseQueryOptions } from '@tanstack/vue-query'
import { GEOApiResponse, WeatherApiResponse } from '@/lib/weater.model.ts'
import { BASE_WEATHER_GEO_QUERY, BASE_WEATHER_QUERY, WEATHER_API, WEATHER_API_GEO } from '@/lib/constants.ts'
import axios from 'axios'
import { Ref } from 'vue'

export const fetchWeather = ({ lat, lon }: {
  lat: Ref<number | null>,
  lon: Ref<number | null>
}): UseQueryOptions<WeatherApiResponse> => ({
  queryKey: [BASE_WEATHER_QUERY, { lat, lon }],
  queryFn: async ({ signal }) => {
    const { data } = await axios.get<WeatherApiResponse>(`${WEATHER_API}`, {
      params: { lat: lat.value, lon: lon.value, appid: import.meta.env.VITE_API_KEY, units: 'metric', lang: 'de' },
      signal
    })
    return data
  },
})

export const fetchWeatherGeo = ({ city }: { city: string }): UseQueryOptions<GEOApiResponse[]> => ({
  queryKey: [BASE_WEATHER_GEO_QUERY, { city }],
  queryFn: async ({ signal }) => {
    const { data } = await axios.get<GEOApiResponse[]>(`${WEATHER_API_GEO}`, {
      params: { q: city, appid: import.meta.env.VITE_API_KEY, limit: 1 },
      signal
    })
    return data
  },
  enabled: !!city
})
