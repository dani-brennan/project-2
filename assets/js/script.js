const gamearea = document.querySelector('.gamearea')
const blockWidth = 70
const blockHeight = 20
const paddleStart = [190,10]
const gameAreaWidth = 500
const gameAreaHeight = 400
const paddleWidth = 100
const paddleHeight = 20
const ballStart = [230,35]
const ballDiameter = 15
const scoreboard = document.querySelector('.scoreboard')

let xDirection = 2
let yDirection = 2

let currentPosition = paddleStart
let ballPosition = ballStart

let timerId

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
gamearea.appendChild(paddle)
drawPaddle()

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
            currentPosition[0] -= 10
            drawPaddle()
        }

        break;

        case 'ArrowRight':
            if (currentPosition[0] < gameAreaWidth - paddleWidth) {
            currentPosition[0] += 10
            drawPaddle()
        }
        break;
    }
}
document.addEventListener('keydown', movePaddle)

//draw ball
function drawBall() {
    ball.style.left = ballPosition[0] + 'px'
    ball.style.bottom = ballPosition[1] + 'px'}

//ball
const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()

gamearea.appendChild(ball)

//move ball
function moveBall() {
    ballPosition[0] += xDirection
    ballPosition[1] += yDirection
    drawBall()
    collision()

}
timerId = setInterval(moveBall, 20)

function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
      yDirection = -2
      return
    }
    if (xDirection === 2 && yDirection === -2) {
      xDirection = -2
      return
    }
    if (xDirection === -2 && yDirection === -2) {
      yDirection = 2
      return
    }
    if (xDirection === -2 && yDirection === 2) {
      xDirection = 2
      return
    }
}

//collision detection
function collision() {
    //if the ball hits a block
    for (let i=0; i < blocks.length; i++) {
        if( 
            (ballPosition[0] > blocks[i].bottomLeft[0] &&
                ballPosition[0] < blocks[i].bottomRight [0]) &&
                ((ballPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] &&
                ballPosition[1] < blocks[i].topLeft[1]) 
        ) {
                //remove block class
                const blocks = Array.from(document.querySelectorAll('.block'))
                blocks[i].classList.remove('block')
                blocks.splice (i, 1)
                changeDirection()
            }
        
    }
    //if the ball hits the wall
    if (ballPosition[0] >= (gameAreaWidth - ballDiameter) || 
        ballPosition[0] <= 0 ||
        ballPosition[1] >= (gameAreaHeight - ballDiameter))
        
    {
        changeDirection()
    }

    //if ball goes out of play - game over
    if (ballPosition[1] <= 0) {
        clearInterval(timerId)
        scoreboard.innerHTML = 'Game Over...'
        document.removeEventListener('keydown'. moveUser)
    } 
}

