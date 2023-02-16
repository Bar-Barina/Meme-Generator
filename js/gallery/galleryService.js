'use strict'

// A function which sets the right image according to the id
function setImg(imgId) {
  gMeme.selectedImgId = imgId
}


// A function which let us download the drawing
function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
}