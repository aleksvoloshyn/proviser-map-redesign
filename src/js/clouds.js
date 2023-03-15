export const cloud = document.querySelectorAll('.cloud__image')

export const showClouds = document.querySelector('.showClouds')
export const cloudImage = document.querySelectorAll('.cloud__image')

export const onShowCloudHandler = (el) => {
  el.forEach((el) => {
    el.classList.toggle('hide')
  })
}

export let server = false
export let europe = false
export let us_w = false
export let us_e = false
export let sg = false

export const onMouseOverHandler = (el, src) => {
  el.setAttribute('src', src)
}
export const onMouseOutHandler = (el, src) => {
  el.setAttribute('src', src)
}

export const checkAllRegionsChecked = (reg1, reg2, reg3, reg4, reg5) => {
  if (reg1 && reg2 && reg3 && reg4 && reg5) {
    onShowCloudHandler(cloud)
    console.log(showClouds)
    showClouds.remove()
  }
}

export const addServerHandler = (e) => {
  if (e.classList.contains('cloud-europe__image')) {
    europe = true
    if (server === false) {
      server = true
      e.parentNode.parentNode.insertAdjacentHTML(
        'beforeend',
        '<img src = "./images/Servers_blue and red.png" alt = "server" class = "server server_blue server__europe"/>'
      )
      e.parentNode.remove()
    } else {
      e.parentNode.parentNode.insertAdjacentHTML(
        'beforeend',
        '<img src = "./images/Servers_blue.png" alt = "server" class = "server server_blue server__europe"/>'
      )
      e.parentNode.remove()
    }
  }

  if (e.classList.contains('cloud-us_w__image')) {
    us_w = true
    if (server === false) {
      server = true
      e.parentNode.parentNode.insertAdjacentHTML(
        'beforeend',
        '<img src = "./images/Servers_blue and red.png" alt = "server" class = "server server_blue server__us_w"/>'
      )
      e.parentNode.remove()
    } else {
      e.parentNode.parentNode.insertAdjacentHTML(
        'beforeend',
        '<img src = "./images/Servers_blue.png" alt = "server" class = "server server_blue server__us_w"/>'
      )
      e.parentNode.remove()
    }
  }
  if (e.classList.contains('cloud-us_e__image')) {
    us_e = true
    if (server === false) {
      server = true
      e.parentNode.parentNode.insertAdjacentHTML(
        'beforeend',
        '<img src = "./images/Servers_blue and red.png" alt = "server" class = "server server_blue server__us_e"/>'
      )
      e.parentNode.remove()
    } else {
      e.parentNode.parentNode.insertAdjacentHTML(
        'beforeend',
        '<img src = "./images/Servers_blue.png" alt = "server" class = "server server_blue server__us_e"/>'
      )
      e.parentNode.remove()
    }
  }
  if (e.classList.contains('cloud-sg__image')) {
    sg = true
    if (server === false) {
      server = true

      e.parentNode.parentNode.insertAdjacentHTML(
        'beforeend',
        '<img src = "./images/Servers_blue and red.png" alt = "server" class = "server server_blue server__sg"/>'
      )
      e.parentNode.remove()
    } else {
      e.parentNode.parentNode.insertAdjacentHTML(
        'beforeend',
        '<img src = "./images/Servers_blue.png" alt = "server" class = "server server_blue server__sg"/>'
      )
      e.parentNode.remove()
    }
  }

  // **
}
