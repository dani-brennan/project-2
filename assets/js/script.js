const gamearea = document.querySelector('.gamearea');
const blockWidth = 25;
const blockHeight = 25;
const paddleStart = [125, 25];
const gameAreaWidth = 320;
const gameAreaHeight = 400;
const paddleWidth = 80;
const paddleHeight = 20;
const ballStart = [150, 50];
const ballDiameter = 15;
const scoreboard = document.querySelector('.scoreboard');

//(Copyright (c) 2020 Ania Kubow)
let xDirection = 2;
let yDirection = 2;

let currentPosition = paddleStart;
let ballPosition = ballStart;

let timerId;

let score = 0;

// Create the start game variable
let startGame = false;

// the reset button refreshes the page
const resetButton = document.createElement('button');
resetButton.innerText = "Reset Game";
document.body.appendChild(resetButton);

// the start button starts the game
const startButton = document.createElement('button');
startButton.innerText = "Start Game";
document.body.appendChild(startButton);

//Turn the instructions on and off
function instructionsOn() {
	document.getElementById("overlay").style.display = "block";
}

function instructionsOff() {
	document.getElementById("overlay").style.display = "none";
}

function drawPaddle() {
	paddle.style.left = currentPosition[0] + 'px';
	paddle.style.bottom = currentPosition[1] + 'px';
}

//create paddle
const paddle = document.createElement('div');
paddle.classList.add('paddle');
gamearea.appendChild(paddle);
drawPaddle();

//move paddle left
function touchLeft(event) {
	if (currentPosition[0] > 0) {
		currentPosition[0] -= 14;
		drawPaddle();
	}
}

//move paddle right
function touchRight(event) {
	if (currentPosition[0] < gameAreaWidth - paddleWidth) {
		currentPosition[0] += 14;
		drawPaddle();
	}
}

// Listen for the start button to be pressed
startButton.addEventListener('click', (e) => {
	startButton.remove();

	// Make the start game variable true
	startGame = true;

	resetButton.addEventListener('click', () => {
		location.reload();
	});

	// If the start game variable is true and the ball is not at the bottom of the level, start the game
	if (startGame == true && !ballPosition[1] <= 0) {

		//create block (Copyright (c) 2020 Ania Kubow)
		class block {
			constructor(xAxis, yAxis) {
				this.topLeft = [xAxis, yAxis + blockHeight];
				this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
				this.bottomLeft = [xAxis, yAxis];
				this.bottomRight = [xAxis + blockWidth, yAxis];
			}
		}

		//creates the block layout
		const blocks = [
			//first row
			new block(42, 340),
			new block(72, 340),
			new block(102, 340),
			new block(132, 340),
			new block(162, 340),
			new block(192, 340),
			new block(222, 340),
			new block(252, 340),

			//second row
			new block(42, 310),
			new block(72, 310),
			new block(102, 310),
			new block(132, 310),
			new block(162, 310),
			new block(192, 310),
			new block(222, 310),
			new block(252, 310),
			
		];

		console.log(blocks[0]);

		//build blocks (Copyright (c) 2020 Ania Kubow)
		function buildBlocks() {
			for (let i = 0; i < blocks.length; i++) {
				const block = document.createElement('div');
				block.classList.add('block');
				block.style.left = blocks[i].bottomLeft[0] + 'px';
				block.style.bottom = blocks[i].bottomLeft[1] + 'px';
				gamearea.appendChild(block);
			}
		}

		buildBlocks();

		//move paddle (Copyright (c) 2020 Ania Kubow)
		function movePaddle(e) {
			switch (e.key) {
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

		//draw ball (Copyright (c) 2020 Ania Kubow)
		function drawBall() {
			ball.style.left = ballPosition[0] + 'px';
			ball.style.bottom = ballPosition[1] + 'px';
		}

		//ball (Copyright (c) 2020 Ania Kubow)
		const ball = document.createElement('div');
		ball.classList.add('ball');
		gamearea.appendChild(ball);

		//move ball (Copyright (c) 2020 Ania Kubow)
		function moveBall() {
			ballPosition[0] += xDirection;
			ballPosition[1] += yDirection;
			drawBall();
			collision();
		}
		//controls the speed of the ball (Copyright (c) 2020 Ania Kubow)
		timerId = setInterval(moveBall, 20);

		//on collision, change the balls direction (Copyright (c) 2020 Ania Kubow)
		function changeDirection() {
			if (xDirection === 2 && yDirection === 2) {
				yDirection = -2;
				return;
			}

			if (xDirection === 2 && yDirection === -2) {
				xDirection = -2;
				return;
			}

			if (xDirection === -2 && yDirection === -2) {
				yDirection = 2;
				return;
			}

			if (xDirection === -2 && yDirection === 2) {
				xDirection = 2;
				return;
			}
		}

		//collision detection (Copyright (c) 2020 Ania Kubow)
		function collision() {

			//if the ball hits a block
			for (let i = 0; i < blocks.length; i++) {
				if ((ballPosition[0] > blocks[i].bottomLeft[0] && ballPosition[0] < blocks[i].bottomRight[0]) && ((ballPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballPosition[1] < blocks[i].topLeft[1])) {

					//remove block class
					const allBlocks = Array.from(document.querySelectorAll('.block'));
					allBlocks[i].classList.remove('block');
					blocks.splice(i, 1);
					changeDirection();
					score++;
					scoreboard.innerHTML = score;

					if (blocks.length === 0) {
						scoreboard.innerHTML = 'You win!';
						clearInterval(timerId);
						resetButton.addEventListener('click', () => {
							location.reload();
							document.removeEventListener('keydown', movePaddle);
						});
					}
				}
			}


			//if the ball hits the wall (Copyright (c) 2020 Ania Kubow)
			if (ballPosition[0] >= (gameAreaWidth - ballDiameter) || ballPosition[0] <= 0 || ballPosition[1] >= (gameAreaHeight - ballDiameter)) {
				changeDirection();
			}

			//if the ball hits the paddle (Copyright (c) 2020 Ania Kubow)
			if ((ballPosition[0] > currentPosition[0] && ballPosition[0] < currentPosition[0] + paddleWidth) && (ballPosition[1] > currentPosition[1] && ballPosition[1] < currentPosition[1] + paddleHeight)) {
				changeDirection();
			}

			//game over (Copyright (c) 2020 Ania Kubow)
			if (ballPosition[1] <= 0) {
				clearInterval(timerId);
				scoreboard.innerHTML = 'Game Over...';
				document.removeEventListener('keydown', movePaddle);

				// Change start game to false so it does not redraw over itself
				startGame = false;

				// Add a button to reload the page
				resetButton.addEventListener('click', () => {
					location.reload();
				});
			}
		}
	}
});