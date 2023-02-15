'use strict'

let gElCanvas
let gCtx

// A function which been called by the DOM as the page loads
function onInit() {
  gElCanvas = document.querySelector('.my-canvas')
  gCtx = gElCanvas.getContext('2d')

  //   resizeCanvas()
  renderMeme()
  renderGallery()
}

function drawText(txt, x, y) {
  gCtx.lineWidth = 1
  gCtx.strokeStyle = 'gray'
  gCtx.fillStyle = 'white'
  gCtx.font = `40px Arial`
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(txt, x, y)
  gCtx.strokeText(txt, x, y)
}

function onChangeText(value) {
    setLineText(value)
    renderMeme()
    return value
}

// A function which been called by the DOM and renders the meme
function renderMeme() {
  const img = new Image()
  img.src = `imgs-square/${gMeme.selectedImgId}.jpg`
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(gMeme.lines[gMeme.selectedLineIdx].txt,50, 50)
  }
}

// A function which resize the canvas accordingly
// function resizeCanvas() {
//   const elContainer = document.querySelector('.canvas-container')
//   // Note: changing the canvas dimension this way clears the canvas
//   gElCanvas.width = elContainer.offsetWidth
//   // Unless needed, better keep height fixed.
//   // gElCanvas.height = elContainer.offsetHeight
// }
