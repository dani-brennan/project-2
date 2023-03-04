const gamearea = document.querySelector('.gamearea')


//build blocks
function buildBlock() {
const block = document.createElement('div')
block.classList.add('block')
gamearea.appendChild(block)
}

buildBlock()