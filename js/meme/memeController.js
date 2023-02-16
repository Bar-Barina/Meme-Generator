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
    gMeme.lines.forEach((line, idx) => {
      drawText(line.txt, idx, line.align)
    })
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px "Impact`
  }
}

// A function which draw text on the canvas
function drawText(txt, idx, align) {
  gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = ''
  gCtx.font = ``
  gCtx.textAlign = align
  gCtx.textBaseline = 'middle'
  const { x, y } = setCoords(idx)
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

// A function which been called by the DOM and switch line
function onSwitchLine() {
  switchLine()
}

// A function which been called by the DOM and generate meme
function onRandomMeme() {
  randomMeme()
  document.querySelector('.editor-layout').classList.remove('hidden')
  document.querySelector('.gallery-container').classList.add('hidden')
  renderMeme()
}

// A function which been called by the DOM and align the text
function onAlignText(num) {
  alignText(num)
  renderMeme()
}

function onDeleteLine() {
  deleteLine()
  renderMeme()
}

function onAddLine() {
  addLine()
  renderMeme()
}

// function resizeCanvas() {
//   const elContainer = document.querySelector('.canvas-container')
//   gElCanvas.width = elContainer.offsetWidth
//   gElCanvas.height = elContainer.offsetHeight
// }

function onHide() {
  document.querySelector('.editor-layout').classList.add('hidden')
  document.querySelector('.gallery-container').classList.remove('hidden')
}
