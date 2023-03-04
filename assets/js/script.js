const gamearea = document.querySelector('.gamearea')
const blockWidth = 70
const blockHeight = 20
const paddleStart = [200,10]
let currentPosition = paddleStart

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
    //first row
    new block(10,370),
    new block(90,370),
    new block(170,370),
    new block(250,370),
    new block(330,370),
    new block(410,370),
    //second row
    new block(10,340),
    new block(90,340),
    new block(170,340),
    new block(250,340),
    new block(330,340),
    new block(410,340),
    //third row
    new block(10,310),
    new block(90,310),
    new block(170,310),
    new block(250,310),
    new block(330,310),
    new block(410,310),

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

//paddle

const paddle = document.createElement('div')
paddle.classList.add('paddle')
paddle.style.left = currentPosition[0] + 'px'
paddle.style.bottom = currentPosition[1] + 'px'
gamearea.appendChild(paddle)