const gamearea = document.querySelector('.gamearea')
const blockWidth = 80
const blockHeight = 20

//create block
class block {
    constructor(xAxis, yAxis) {
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
    }

}

//all blocks 
const blocks = [
    new block(10,370)
]

console.log(blocks[0])

//build blocks
function buildBlocks() {

for (let i=0; i < blocks.length; i++) {
const block = document.createElement('div')
block.classList.add('block')
block.style.left = blocks[i].bottomLeft[0] + 'px'
block.style.bottom = blocks[i].bottomLeft[1] + 'px'
gamearea.appendChild(block)
    }
}

buildBlocks()