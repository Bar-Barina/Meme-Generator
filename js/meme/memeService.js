'use strict'

// var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

var IMGS_STORAGE_KEY = 'Images'

// Images model
var gImgs = [
  { id: 1, url: 'imgs-square/1.jpg', keywords: ['funny', 'usa'] },
  { id: 2, url: 'imgs-square/2.jpg', keywords: ['funny', 'usa'] },
  { id: 3, url: 'imgs-square/3.jpg', keywords: ['funny', 'usa'] },
  { id: 4, url: 'imgs-square/4.jpg', keywords: ['funny', 'usa'] },
  { id: 5, url: 'imgs-square/5.jpg', keywords: ['funny', 'usa'] },
  { id: 6, url: 'imgs-square/6.jpg', keywords: ['funny', 'usa'] },
  { id: 7, url: 'imgs-square/7.jpg', keywords: ['funny', 'usa'] },
  { id: 8, url: 'imgs-square/8.jpg', keywords: ['funny', 'usa'] },
  { id: 9, url: 'imgs-square/9.jpg', keywords: ['funny', 'usa'] },
  { id: 10, url: 'imgs-square/10.jpg', keywords: ['funny', 'usa'] },
  { id: 11, url: 'imgs-square/11.jpg', keywords: ['funny', 'usa'] },
  { id: 12, url: 'imgs-square/12.jpg', keywords: ['funny', 'usa'] },
  { id: 13, url: 'imgs-square/13.jpg', keywords: ['funny', 'usa'] },
  { id: 14, url: 'imgs-square/14.jpg', keywords: ['funny', 'usa'] },
  { id: 15, url: 'imgs-square/15.jpg', keywords: ['funny', 'usa'] },
  { id: 16, url: 'imgs-square/16.jpg', keywords: ['funny', 'usa'] },
  { id: 17, url: 'imgs-square/17.jpg', keywords: ['funny', 'usa'] },
  { id: 18, url: 'imgs-square/18.jpg', keywords: ['funny', 'usa'] },
]

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: '',
      size: 30,
      align: 'center',
      color: 'white',
    },
    {
      txt: '',
      size: 30,
      align: 'center',
      color: 'white',
    },
    {
      txt: '',
      size: 30,
      align: 'center',
      color: 'white',
    },
  ],
}

//  A function which creates a meme
function getMeme() {
  return gMeme.lines[0]
}

// A function which sets the line text
function setLineText(value) {
  gMeme.lines[gMeme.selectedLineIdx].txt = value
}

// A function which save the images to the storage
function saveImgsToStorage() {
  saveToStorage(IMGS_STORAGE_KEY, gImgs)
}

// A function which change the color of the text
function changeColor(newColor) {
  gMeme.lines[gMeme.selectedLineIdx].color = newColor
}

// A function which change the font size
function changeFontSize(num) {
  gMeme.lines[gMeme.selectedLineIdx].size += num
}

// A function which switch the line idx
function switchLine() {
  if (gMeme.lines.length === 1) return
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0
  } else {
    gMeme.selectedLineIdx++
  }
}

//  A function which change the x & y coords for the draw text func
function setCoords(idx) {
  switch (idx) {
    case 0:
      return { x: 200, y: 50 }
    case 1:
      return { x: 200, y: 360 }
    default:
      return { x: 200, y: 200 }
  }
}

// A function which generate a rand meme
function randomMeme() {
  let randMemeImg = getRandomIntInclusive(0, 18)
  gMeme.selectedImgId = randMemeImg
  let randMemeTxt = makeLorem()
  gMeme.lines[gMeme.selectedLineIdx].txt = randMemeTxt
  let randMemeSize = getRandomIntInclusive(15, 40)
  gMeme.lines[gMeme.selectedLineIdx].size = randMemeSize
  // let randMemeColor = getRandomColor()
  // gMeme.lines[gMeme.selectedLineIdx].color = randMemeColor
}

// A function which handle the text alignment
function alignText(num) {
  switch (num) {
    case 1:
      gMeme.lines[gMeme.selectedLineIdx].align = 'right'
      break
    case 2:
      gMeme.lines[gMeme.selectedLineIdx].align = 'center'
      break
    case 3:
      gMeme.lines[gMeme.selectedLineIdx].align = 'left'
      break
  }
}

// A function which delete a line
function deleteLine() {
  gMeme.lines.splice(gMeme.selectedLineIdx, 1)
}

// A function which add a line
function addLine() {
  let newLine = getMeme()
  gMeme.lines.unshift(newLine)
}

// A function which empty the line value after line change
function clearLine() {
  document.querySelector('input[name="text"]').value = ''
}
