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
      drawText(line.txt, idx)
    })
    gCtx.font = `${gMeme.lines[gMeme.selectedLineIdx].size}px "Impact`
  }
}

// A function which draw text on the canvas
function drawText(txt, idx) {
  gCtx.lineWidth = 1
  gCtx.strokeStyle = 'black'
  gCtx.fillStyle = gMeme.lines[idx].color
  gCtx.font = `${gMeme.lines[idx].size}px Impact`
  gCtx.textAlign = gMeme.lines[idx].align
  gCtx.textBaseline = 'middle'
  const { x, y } = setCoords(idx)
  gCtx.fillText(txt, x, y)
  gCtx.strokeText(txt, x, y)
  if (gMeme.selectedLineIdx === idx && txt) drawRect(x, y, txt)
}

// A function which draw rect on the canvas
function drawRect(x, y, txt) {
  let width = gCtx.measureText(txt).width
  gCtx.strokeStyle = 'black'
  gCtx.strokeRect(x - width / 2, y - 20, width, 40)
  gCtx.fillStyle = ''
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
  clearLine()
}

// A function which been called by the DOM and generate meme
function onRandomMeme() {
  randomMeme()
  document.querySelector('.editor-layout').classList.remove('hidden')
  document.querySelector('.gallery-container').classList.add('hidden')
  document.querySelector('.rand-meme').classList.add('hidden')
  renderMeme()
}

// A function which been called by the DOM and align the text
function onAlignText(num) {
  alignText(num)
  renderMeme()
}

// A function which been called by the DOM and delete the selected line
function onDeleteLine() {
  deleteLine()
  renderMeme()
}

// A function which been called by the DOM and adds a line
function onAddLine() {
  addLine()
  renderMeme()
}

// A function which been called by the DOM and adds the hidden class to element
function onHideEditor() {
  document.querySelector('.editor-layout').classList.add('hidden')
  document.querySelector('.gallery-container').classList.remove('hidden')
  document.querySelector('.rand-meme').classList.remove('hidden')
  document.querySelector('.meme-container').classList.add('hidden')
}

// A function which been called by the DOM and shows the meme gallery
function onShowMemeGallery() {
  document.querySelector('.editor-layout').classList.add('hidden')
  document.querySelector('.gallery-container').classList.add('hidden')
  document.querySelector('.rand-meme').classList.add('hidden')
  renderMemeGallery()
  document.querySelector('.meme-container').classList.remove('hidden')
}

// A function which renders the meme gallery
function renderMemeGallery() {
  var savedImages = loadFromStorage('SavedMeme')
  if (!savedImages) return
  var strHTML = ''
  for (let i = 0; i < savedImages.length; i++) {
    strHTML += `<img src=${savedImages[i].url} class="meme-gallery-img gallery-img">`
  }
  var elMemeGContainer = document.querySelector('.meme-container')
  elMemeGContainer.innerHTML = strHTML
}

// A function which been called by the DOM and saves the meme
function onSaveMeme() {
  saveMeme()
}

// A function which been called by the DOM and adds an emoji
function onAddEmoji(val) {
  addEmoji(val)
  renderMeme()
}
