<script setup lang="ts">
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, } from '@/components/ui/dialog'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useForm } from 'vee-validate'
import { useQueryClient } from '@tanstack/vue-query'
import { fetchWeatherGeo } from '@/lib/queries/fetchWeather.queries.ts'
import { ref } from 'vue'
import { useCoordinatesStore } from '@/lib/store/coordinates.store.ts'

const queryClient = useQueryClient()
const open = ref<boolean>(false)

const coordinates = useCoordinatesStore()
const formSchema = toTypedSchema(z.object({
  city: z.string().max(50),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(async (values) => {
  const data = await queryClient.fetchQuery(fetchWeatherGeo({ city: values.city }))

  if (!data.length) {
    return
  }
  coordinates.setCoordinates({ lat: data[0].lat, lon: data[0].lon })
  open.value = false
})

const click = () => {
  open.value = true
}
</script>

<template>
  <Dialog :open="open">
    <DialogTrigger
      @click="click()"
      class="inline-flex items-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:bg-accent hover:text-accent-foreground px-4 py-2 relative h-9 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
      Stadt Suche..
    </DialogTrigger>
    <DialogContent>
      <DialogTitle class="sr-only">Stadt Suche</DialogTitle>
      <DialogDescription class="sr-only">Gib eine Stadt ein, dessen Wetter du erfahren möchtest</DialogDescription>
      <form @submit="onSubmit">
        <FormField v-slot="{ componentField }" name="city">
          <FormItem>
            <FormLabel>Stadt</FormLabel>
            <FormControl>
              <Input type="text" placeholder="London" v-bind="componentField"/>
            </FormControl>
            <FormDescription>
              Gib den Namen einer Stadt ein, um das Wetter zu suchen.
            </FormDescription>
            <FormMessage/>
          </FormItem>
        </FormField>
      </form>
    </DialogContent>
  </Dialog>
</template>
