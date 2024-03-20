import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { GenerateWeatherUrlInput } from '@/lib/weater.model.ts'

export const cn =(...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const generateWeatherUrl = ({lat, lon, exclude}: GenerateWeatherUrlInput): string => {
  const baseURL = new URL(WEATHER_API)
  const params = new URLSearchParams({
    appid: import.meta.env.VITE_API_KEY as string,
    lang: 'de',
    units: 'metric',
    lat: lat.toString(),
    lon: lon.toString(),
    exclude: exclude ?? ''
  })
  baseURL.search = params.toString()
  return baseURL.toString()
}
