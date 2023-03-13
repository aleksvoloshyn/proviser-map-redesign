// import _ from 'lodash'

import { logger as greeting } from './test'
import { Region } from './regionClass'

// console.log(_.concat([10, 20, 30], [50]))

const europe = new Region('europe', 0, 0, 'de', 'us_e', 'people-block__de')
const asia = new Region('asia', 0, 0, 'sg', 'de', 'people - block__asia')

console.log(europe)
console.log(asia)

const mouseOnPeopleHandler = (item) => {
  if (item.classList.contains(`people-laptop`)) {
    item.classList.add('hide')
    item.parentNode.children[1].classList.remove('hide')
  }
  if (item.classList.contains(`people-phone`)) {
    item.classList.add('hide')
    item.parentNode.children[3].classList.remove('hide')
    item.parentNode.children[1].classList.remove('hide')
    item.parentNode.children[0].classList.add('hide')
  }
  if (item.classList.contains(`people-display`)) {
    item.classList.add('hide')
    item.parentNode.children[1].classList.remove('hide')
    item.parentNode.children[3].classList.remove('hide')
    item.parentNode.children[5].classList.remove('hide')
  }
}

const mouseOutPeopleHandler = (item) => {
  if (item.classList.contains('people-laptop-active')) {
    item.classList.add('hide')

    item.parentNode.children[0].classList.remove('hide')
  }
  if (item.classList.contains(`people-phone-active`)) {
    item.classList.add('hide')
    item.parentNode.children[2].classList.remove('hide')
    item.parentNode.children[1].classList.add('hide')
    item.parentNode.children[0].classList.remove('hide')
  }
  if (item.classList.contains(`people-display-active`)) {
    item.classList.add('hide')
    item.parentNode.children[4].classList.remove('hide')
    item.parentNode.children[3].classList.add('hide')
    item.parentNode.children[2].classList.remove('hide')
    item.parentNode.children[1].classList.add('hide')
    item.parentNode.children[0].classList.remove('hide')
  }
}

const peopleIconToggle = () => {
  document.querySelectorAll('.people').forEach((item) => {
    item.addEventListener('mouseover', () => {
      mouseOnPeopleHandler(item)
    })
    item.addEventListener('mouseout', () => {
      mouseOutPeopleHandler(item)
    })
  })
}

peopleIconToggle()
