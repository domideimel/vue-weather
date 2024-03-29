import { defineStore } from 'pinia'

interface CoordinatesState {
  lat: number | null
  lon: number | null
}

export const useCoordinatesStore = defineStore('coordinates', {
  state: (): CoordinatesState => ({
    lat: null,
    lon: null
  }),
  actions: {
    setCoordinates ({ lat, lon }: { lat: number, lon: number }) {
      this.lat = lat
      this.lon = lon
    }
  }
})
