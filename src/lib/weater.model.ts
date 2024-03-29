type Exclude = 'current' | 'minutely' | 'hourly' | 'daily' | 'alerts'
export type GenerateWeatherUrlInput = {
  lat: number
  lon: number
  exclude?: Exclude
}

export interface WeatherApiResponse {
  coord: Coord
  weather: Weather[]
  base: string
  main: Main
  visibility: number
  wind: Wind
  clouds: Clouds
  dt: number
  sys: Sys
  timezone: number
  id: number
  name: string
  cod: number
}

export interface Coord {
  lon: number
  lat: number
}

export interface Weather {
  id: number
  main: string
  description: string
  icon: string
}

export interface Main {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
}

export interface Wind {
  speed: number
  deg: number
}

export interface Clouds {
  all: number
}

export interface Sys {
  type: number
  id: number
  country: string
  sunrise: number
  sunset: number
}


export interface GEOApiResponse {
  name: string
  local_names?: LocalNames
  lat: number
  lon: number
  country: string
  state: string
}

export interface LocalNames {
  zh?: string
  nv?: string
  sd?: string
  lo?: string
  se?: string
  hy?: string
  bn?: string
  ar?: string
  pl?: string
  fj?: string
  lv?: string
  ru: string
  or?: string
  feature_name?: string
  mr?: string
  bg?: string
  wa?: string
  bh?: string
  af?: string
  sq?: string
  ml?: string
  ny?: string
  qu?: string
  ro?: string
  to?: string
  ne?: string
  da?: string
  li?: string
  cu?: string
  en: string
  cy?: string
  na?: string
  th?: string
  jv?: string
  km?: string
  it?: string
  lt?: string
  sw?: string
  kn?: string
  ba?: string
  yo?: string
  wo?: string
  cv?: string
  ia?: string
  mi?: string
  sm?: string
  gv?: string
  nn?: string
  bs?: string
  mk?: string
  sc?: string
  ab?: string
  am?: string
  sk?: string
  nl?: string
  he: string
  ff?: string
  gd?: string
  ln?: string
  sr?: string
  om?: string
  bi?: string
  ee?: string
  kl?: string
  ta?: string
  pt?: string
  mt?: string
  az?: string
  de?: string
  mn?: string
  sa?: string
  av?: string
  tt?: string
  te?: string
  si?: string
  fr: string
  ug?: string
  et?: string
  cs?: string
  sv?: string
  sh?: string
  br?: string
  ku?: string
  kk?: string
  yi?: string
  lb?: string
  ko: string
  el?: string
  ps?: string
  tk?: string
  su?: string
  vo?: string
  ky?: string
  tw?: string
  an?: string
  hu?: string
  no?: string
  fa?: string
  ga?: string
  uk?: string
  kv?: string
  ie?: string
  es?: string
  io?: string
  ig?: string
  oc?: string
  uz?: string
  os?: string
  is?: string
  gu?: string
  sn?: string
  eu?: string
  ascii?: string
  ca?: string
  be?: string
  st?: string
  pa?: string
  rm?: string
  mg?: string
  fo?: string
  kw?: string
  sl?: string
  bm?: string
  ka?: string
  ja?: string
  fy?: string
  hr?: string
  bo?: string
  id?: string
  ms?: string
  my?: string
  ht?: string
  ce?: string
  zu?: string
  so?: string
  hi?: string
  tr?: string
  tl?: string
  gl?: string
  ay?: string
  fi?: string
  vi?: string
  ur?: string
  gn?: string
  co?: string
  eo?: string
  ha?: string
  tg?: string
  oj?: string
  cr?: string
  iu?: string
}
