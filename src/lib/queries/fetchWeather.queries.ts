import { UseQueryOptions } from '@tanstack/vue-query'
import { WeatherApiResponse } from '@/lib/weater.model.ts'
import { BASE_WEATHER_QUERY, WEATHER_API } from '@/lib/constants.ts'
import axios from 'axios'

export const fetchWeather = ({ lat, lon }: { lat: number, lon: number }): UseQueryOptions<WeatherApiResponse> => ({
  queryKey: [BASE_WEATHER_QUERY, { lat, lon }],
  queryFn: async ({ signal }) => {
    const { data } = await axios.get<WeatherApiResponse>(`${WEATHER_API}`, {
      params: { lat, lon, appid: import.meta.env.VITE_API_KEY, units: 'metric', lang: 'de' },
      signal
    })
    return data
  },
  enabled: !!lat && !!lon
})
