import {
  northAmerica,
  southAmerica,
  europe,
  asia,
  australia,
  regions,
} from './regionClass'
import { checkAllRegionsChecked, cloud } from './clouds'

export const peopleIco = document.querySelectorAll('.people')
export const peopleIcoActive = document.querySelectorAll(' .active')

export let europeDev = false
export let northAmericaDev = false
export let southAmericaDev = false
export let asiaDev = false
export let australiaDev = false

export const hideUsers = (p, pActive) => {
  p.forEach((el) => {
    el.classList.toggle('hide')
  })
  pActive.forEach((el) => {
    el.classList.toggle('hide')
  })
}

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
    item.parentNode.children[0].classList.add('hide')
    item.parentNode.children[1].classList.remove('hide')
    item.parentNode.children[2].classList.add('hide')
    item.parentNode.children[3].classList.remove('hide')
    item.parentNode.children[4].classList.add('hide')
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

const onUserClickButtonHandler = (reg, item) => {
  if (
    item.classList.contains('people-laptop-active') &&
    item.parentNode.dataset.region === reg
  ) {
    if (reg === 'europe') {
      europe.setDeviceQuantity(1)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      europeDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'asia') {
      asia.setDeviceQuantity(1)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      asiaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'northAmerica') {
      northAmerica.setDeviceQuantity(1)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      northAmericaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'southAmerica') {
      southAmerica.setDeviceQuantity(1)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      southAmericaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'australia') {
      australia.setDeviceQuantity(1)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      australiaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    item.parentNode.classList.add('hide')
  }
  if (
    item.classList.contains('people-phone-active') &&
    item.parentNode.dataset.region === reg
  ) {
    if (reg === 'europe') {
      europe.setDeviceQuantity(2)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      europeDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'asia') {
      asia.setDeviceQuantity(2)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      asiaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'northAmerica') {
      northAmerica.setDeviceQuantity(2)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      northAmericaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'southAmerica') {
      southAmerica.setDeviceQuantity(2)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      southAmericaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'australia') {
      australia.setDeviceQuantity(2)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      australiaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    item.parentNode.classList.add('hide')
  }
  if (
    item.classList.contains('people-display-active') &&
    item.parentNode.dataset.region === reg
  ) {
    if (reg === 'europe') {
      europe.setDeviceQuantity(3)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      item.parentNode.nextElementSibling.children[2].classList.remove('hide')
      europeDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'asia') {
      asia.setDeviceQuantity(3)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      item.parentNode.nextElementSibling.children[2].classList.remove('hide')
      asiaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'northAmerica') {
      northAmerica.setDeviceQuantity(3)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      item.parentNode.nextElementSibling.children[2].classList.remove('hide')
      northAmericaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'southAmerica') {
      southAmerica.setDeviceQuantity(3)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      item.parentNode.nextElementSibling.children[2].classList.remove('hide')
      southAmericaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    if (reg === 'australia') {
      australia.setDeviceQuantity(3)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      item.parentNode.nextElementSibling.children[2].classList.remove('hide')
      australiaDev = true
      checkAllRegionsChecked(
        europeDev,
        asiaDev,
        northAmericaDev,
        southAmericaDev,
        australiaDev
      )
    }
    item.parentNode.classList.add('hide')
  }
}

export const peopleIconToggle = () => {
  peopleIco.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
      mouseOnPeopleHandler(item, e.target.classList[1])
    })
    item.addEventListener('mouseout', (e) => {
      mouseOutPeopleHandler(item, e.target.classList[1])
    })
    item.addEventListener('click', () => {
      onUserClickButtonHandler('europe', item)
      onUserClickButtonHandler('asia', item)
      onUserClickButtonHandler('northAmerica', item)
      onUserClickButtonHandler('southAmerica', item)
      onUserClickButtonHandler('australia', item)

      console.log(regions)
    })
  })
}
