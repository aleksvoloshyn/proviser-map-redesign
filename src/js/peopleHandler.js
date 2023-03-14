import {
  northAmerica,
  southAmerica,
  europe,
  asia,
  australia,
  regions,
} from './regionClass'

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
    }
    if (reg === 'asia') {
      asia.setDeviceQuantity(1)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
    }
    if (reg === 'northAmerica') {
      northAmerica.setDeviceQuantity(1)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
    }
    if (reg === 'southAmerica') {
      southAmerica.setDeviceQuantity(1)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
    }
    if (reg === 'australia') {
      australia.setDeviceQuantity(1)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
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
    }
    if (reg === 'asia') {
      asia.setDeviceQuantity(2)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
    }
    if (reg === 'northAmerica') {
      northAmerica.setDeviceQuantity(2)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
    }
    if (reg === 'southAmerica') {
      southAmerica.setDeviceQuantity(2)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
    }
    if (reg === 'australia') {
      australia.setDeviceQuantity(2)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
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
    }
    if (reg === 'asia') {
      asia.setDeviceQuantity(3)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      item.parentNode.nextElementSibling.children[2].classList.remove('hide')
    }
    if (reg === 'northAmerica') {
      northAmerica.setDeviceQuantity(3)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      item.parentNode.nextElementSibling.children[2].classList.remove('hide')
    }
    if (reg === 'southAmerica') {
      southAmerica.setDeviceQuantity(3)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      item.parentNode.nextElementSibling.children[2].classList.remove('hide')
    }
    if (reg === 'australia') {
      australia.setDeviceQuantity(3)
      item.parentNode.nextElementSibling.children[0].classList.remove('hide')
      item.parentNode.nextElementSibling.children[1].classList.remove('hide')
      item.parentNode.nextElementSibling.children[2].classList.remove('hide')
    }
    item.parentNode.classList.add('hide')
  }
}

export const peopleIconToggle = () => {
  document.querySelectorAll('.people').forEach((item) => {
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
