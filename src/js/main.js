// import _ from 'lodash'

import { logger as greeting } from './test'
import { regions } from './regionClass'
import {
  peopleIco,
  peopleIcoActive,
  hideUsers,
  peopleIconToggle,
} from './peopleHandler'
import {
  onMouseOverHandler,
  onMouseOutHandler,
  cloud,
  showClouds,
  onShowCloudHandler,
} from './clouds'

// console.log(_.concat([10, 20, 30], [50]))

peopleIconToggle()

showClouds.addEventListener('click', () => {
  onShowCloudHandler(cloud)
  hideUsers(peopleIco, peopleIcoActive)
})

cloud.forEach((el) => {
  el.addEventListener('mouseover', () => {
    onMouseOverHandler(el, './images/Cloud_active.png')
  })
  el.addEventListener('mouseout', () => {
    onMouseOutHandler(el, './images/Cloud_2.png')
  })
})
