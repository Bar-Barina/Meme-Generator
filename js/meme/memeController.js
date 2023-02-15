'use strict'

let gElCanvas
let gCtx

// A function which been called by the DOM as the page loads
function onInit() {
  gElCanvas = document.querySelector('.my-canvas')
  gCtx = gElCanvas.getContext('2d')

  renderMeme()
  renderGallery()
}

// A function which been called by the DOM and renders the meme
function renderMeme() {
  const img = new Image()
  img.src = `imgs-square/${gMeme.selectedImgId}.jpg`
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(gMeme.lines[gMeme.selectedLineIdx].txt, 50, 50)
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px Arial`
  }
}

// A function which draw text on the canvas
function drawText(txt, x, y) {
  gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = ''
  gCtx.font = ``
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(txt, x, y)
  gCtx.strokeText(txt, x, y)
}

// A function which been called by the DOM and changes the text by the user input
function onChangeText(value) {
  setLineText(value)
  renderMeme()
  return value
}

// A function which been called by the DOM and changes the color by the user input
function onChangeColor(newColor) {
  changeColor(newColor)
  renderMeme()
}

// A function which been called by the DOM and changes the font size by user click
function onChangeFontSize(num) {
  changeFontSize(num)
  renderMeme()
}

function onSwitchLine() {
  switchLine()
  // renderMeme()
}
