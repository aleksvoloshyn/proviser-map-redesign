export const cloud = document.querySelectorAll('.cloud__image')

export const showClouds = document.querySelector('.showClouds')

export const onShowCloudHandler = (el) => {
  el.forEach((el) => {
    el.classList.toggle('hide')
  })
}

export const onMouseOverHandler = (el, src) => {
  el.setAttribute('src', src)
}
export const onMouseOutHandler = (el, src) => {
  el.setAttribute('src', src)
}
