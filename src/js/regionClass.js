export class Region {
  region
  constructor(region, people, devices, mainServer, reserveServer, peopleClass) {
    this.region = region
    this.people = people
    this.devices = devices
    this.mainServer = mainServer
    this.reserveServer = reserveServer
    this.peopleClass = this.peopleClass
  }
  people = 0
  devices = 0
  mainServer = ''
  reserveServer = ''
  peopleClass = ''

  setDeviceQuantity = function (q) {
    this.devices = q
  }
}

export const europe = new Region(
  'europe',
  0,
  0,
  'de',
  'us_e',
  'people-block__de'
)
export const asia = new Region('asia', 0, 0, 'sg', 'de', 'people - block__asia')
export const australia = new Region(
  'australia',
  0,
  0,
  'sg',
  'de',
  'people - block__au'
)
export const southAmerica = new Region(
  'southAmerica',
  0,
  0,
  'us_e',
  'us_w',
  'people - block__sAm'
)
export const northAmerica = new Region(
  'northAmerica',
  0,
  0,
  'us_w',
  'us_e',
  'people - block__nAm'
)
export const regions = [europe, asia, australia, northAmerica, southAmerica]
