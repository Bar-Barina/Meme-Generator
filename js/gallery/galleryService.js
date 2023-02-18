'use strict'

var gFilterBy = {keyword:''}

// A function which sets the right image according to the id
function setImg(imgId) {
  gMeme.selectedImgId = imgId
}

// A function which let us download the drawing
function downloadImg(elLink) {
  const imgContent = gElCanvas.toDataURL('image/jpeg') // image/jpeg the default format
  elLink.href = imgContent
}


// A function which set the filter to be by the right keyword
function setFilterBy(filterBy) {
  if (filterBy.keyword !== undefined) gFilterBy.keyword = filterBy.keyword
  return gFilterBy
}

// A function which returns the filterd images
function getImg() {
  var imgs = gImgs.filter(img => img.keyword[0].includes(gFilterBy.keyword))
  console.log('imgs', imgs)
  return imgs
}
