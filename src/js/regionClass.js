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
}
