'use strict'

// A function which renders the gallery
function renderGallery() {
  var strHTML = ''

  for (let i = 0; i < gImgs.length; i++) {
    strHTML += `<img src="imgs-square/${
      i + 1
    }.jpg" class="gallery-img" onclick="onImgSelect('${gImgs[i].id}')">`
  }
  var elGContainer = document.querySelector('.gallery-container')
  elGContainer.innerHTML = strHTML
}

// A function which been called by the DOM and renders the right image
function onImgSelect(imgId) {
  setImg(imgId)
  renderMeme()
}
