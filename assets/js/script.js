const gamearea = document.querySelector('.gamearea')
const blockWidth = 70
const blockHeight = 20
const paddleStart = [190,10]
const gameAreaWidth = 500
const gameAreaHeight = 400
const paddleWidth = 100
const paddleHeight = 20

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

//create paddle

const paddle = document.createElement('div')
paddle.classList.add('paddle')
drawPaddle()
gamearea.appendChild(paddle)


//draw paddle
function drawPaddle () {
paddle.style.left = currentPosition[0] + 'px'
paddle.style.bottom = currentPosition[1] + 'px'
}

//move paddle
function movePaddle(e) {
    switch(e.key) {
        case 'ArrowLeft':
            if (currentPosition[0] > 0) {
            currentPosition[0] -= 10;
            drawPaddle();
        }

        break;

        case 'ArrowRight':
            if (currentPosition[0] < gameAreaWidth - paddleWidth) {
            currentPosition[0] += 10;
            drawPaddle();
        }
        break;
    }
}
document.addEventListener('keydown', movePaddle);

const ball = document.createElement('div')
ball.classList.add('ball');
gamearea.appendChild(ball);