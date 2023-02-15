'use strict'

// var gKeywordSearchCountMap = {'funny': 12,'cat': 16, 'baby': 2}

var IMGS_STORAGE_KEY = 'Images'

var gImgs = [
  { id: 1, url: 'imgs-square/1.jpg', keywords: ['funny', 'usa'] },
  { id: 2, url: 'imgs-square/2.jpg', keywords: ['funny', 'usa'] },
//   { id: 3, url: 'imgs-square/3.jpg', keywords: ['funny', 'usa'] },
//   { id: 4, url: 'imgs-square/4.jpg', keywords: ['funny', 'usa'] },
//   { id: 5, url: 'imgs-square/5.jpg', keywords: ['funny', 'usa'] },
//   { id: 6, url: 'imgs-square/6.jpg', keywords: ['funny', 'usa'] },
//   { id: 7, url: 'imgs-square/7.jpg', keywords: ['funny', 'usa'] },
//   { id: 8, url: 'imgs-square/8.jpg', keywords: ['funny', 'usa'] },
//   { id: 9, url: 'imgs-square/9.jpg', keywords: ['funny', 'usa'] },
//   { id: 10, url: 'imgs-square/10.jpg', keywords: ['funny', 'usa'] },
//   { id: 11, url: 'imgs-square/11.jpg', keywords: ['funny', 'usa'] },
//   { id: 12, url: 'imgs-square/12.jpg', keywords: ['funny', 'usa'] },
//   { id: 13, url: 'imgs-square/13.jpg', keywords: ['funny', 'usa'] },
//   { id: 14, url: 'imgs-square/14.jpg', keywords: ['funny', 'usa'] },
//   { id: 15, url: 'imgs-square/15.jpg', keywords: ['funny', 'usa'] },
//   { id: 16, url: 'imgs-square/16.jpg', keywords: ['funny', 'usa'] },
//   { id: 17, url: 'imgs-square/17.jpg', keywords: ['funny', 'usa'] },
//   { id: 18, url: 'imgs-square/18.jpg', keywords: ['funny', 'usa'] },
]
// saveImgsToStorage()

var gMeme = {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
    {
      txt: '',
      size: 20,
      align: 'left',
      color: 'red',
    },
  ],
}

//  A function which creates a meme
function getMeme() {
  var meme = {
    txt: 'I sometimes eat Falafel',
    size: 20,
    align: 'center',
    color: getRandomColor(),
  }
  return meme
}

// A function which sets the line text
function setLineText(value) {
  gMeme.lines[gMeme.selectedLineIdx].txt = value
}

// A function which save the images to the storage
function saveImgsToStorage() {
  saveToStorage(IMGS_STORAGE_KEY, gImgs)
}