const halfSideSize = 100
const sideSize = halfSideSize * 2

const getCanvas = () => document.getElementById('canvas')

const clearCanvas = () => {
  const canvas = getCanvas()
  canvas.width = canvas.width
}

window.onload = () => {
  let screenX = window.screenX
  let screenY = window.screenY
  let init = true

  const canvas = getCanvas()

  // setting initial scaling
  canvas.width = window.innerWidth * window.devicePixelRatio
  canvas.height = window.innerHeight * window.devicePixelRatio

  let x = canvas.width / 2 - halfSideSize
  let y = canvas.height / 2 - halfSideSize

  const ctx = canvas.getContext('2d')

  const step = (timeStamp) => {
    const newScreenX = window.screenX
    const newScreenY = window.screenY

    if (init || newScreenX !== screenX || newScreenY !== screenY) {
      init = false

      x += screenX - newScreenX
      y += screenY - newScreenY

      screenX = newScreenX
      screenY = newScreenY

      clearCanvas()
      ctx.fillStyle = 'red'
      ctx.fillRect(x, y, sideSize, sideSize)
    }

    window.requestAnimationFrame(step)
  }

  window.requestAnimationFrame(step)
}
