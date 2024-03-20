type Exclude = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts'
export type GenerateWeatherUrlInput = {
  lat: number
  lon: number
  exclude?: Exclude
}
