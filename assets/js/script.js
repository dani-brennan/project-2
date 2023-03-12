const gamearea = document.querySelector('.gamearea');
const blockWidth = 30;
const blockHeight = 20;
const paddleStart = [125, 25];
const gameAreaWidth = 350;
const gameAreaHeight = 400;
const paddleWidth = 80;
const paddleHeight = 20;
const ballStart = [125, 50];
const ballDiameter = 15;
const scoreboard = document.querySelector('.scoreboard');

let xDirection = 2;
let yDirection = 2;

let currentPosition = paddleStart;
let ballPosition = ballStart;

let timerId;

let score = 0;

// Create the start game variable.
let startGame = false;

// Make a reset Button
const resetButton = document.createElement('button');
resetButton.innerText = "Reset Game";
document.body.appendChild(resetButton);

// Make a start Button
const startButton = document.createElement('button');
startButton.innerText = "Start Game";
document.body.appendChild(startButton);

function on() {
	document.getElementById("overlay").style.display = "block";
}

function off() {
	document.getElementById("overlay").style.display = "none";
}

//touch controls
//move paddle left
function touchLeft() {
	if (currentPosition[0] > 0) {
		currentPosition[0] -= 10;
		drawPaddle();
	}

}

//move paddle right
function touchRight() {
	if (currentPosition[0] < gameAreaWidth - paddleWidth) {
		currentPosition[0] += 10;
		drawPaddle();
	}
}

// Listen for the startButton to be pressed
startButton.addEventListener('click', (e) => {
	startButton.remove();

	// Make the start game variable true
	startGame = true;

	// If the start game variable is true and the ball is not at the bottom of the level, start the game
	if (startGame = true && !ballPosition[1] <= 0) {

		//create block
		class block {
			constructor(xAxis, yAxis) {
				this.topLeft = [xAxis, yAxis + blockHeight];
				this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
				this.bottomLeft = [xAxis, yAxis];
				this.bottomRight = [xAxis + blockWidth, yAxis];
			}
		}

		//all blocks 
		const blocks = [ //first row
			new block(5, 370),
			new block(55, 370),
			new block(105, 370),
			new block(155, 370),
			new block(205, 370),
			new block(255, 370),
			new block(305, 370),
		];

		console.log(blocks[0]);

		//build blocks
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

		//create paddle
		const paddle = document.createElement('div');
		paddle.classList.add('paddle');
		gamearea.appendChild(paddle);
		drawPaddle();

		//draw paddle
		function drawPaddle() {
			paddle.style.left = currentPosition[0] + 'px';
			paddle.style.bottom = currentPosition[1] + 'px';
		}

		//move paddle
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

		//draw ball
		function drawBall() {
			ball.style.left = ballPosition[0] + 'px';
			ball.style.bottom = ballPosition[1] + 'px';
		}

		//ball
		const ball = document.createElement('div');
		ball.classList.add('ball');

		/*drawBall()*/
		gamearea.appendChild(ball);

		//move ball
		function moveBall() {
			ballPosition[0] += xDirection;
			ballPosition[1] += yDirection;
			drawBall();
			collision();
		}

		timerId = setInterval(moveBall, 20);

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

		//collision detection
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
						document.removeEventListener('keydown', movePaddle);
					}
				}
			}


			//if the ball hits the wall
			if (ballPosition[0] >= (gameAreaWidth - ballDiameter) || ballPosition[0] <= 0 || ballPosition[1] >= (gameAreaHeight - ballDiameter)) {
				changeDirection();
			}

			//if the ball hits the paddle
			if ((ballPosition[0] > currentPosition[0] && ballPosition[0] < currentPosition[0] + paddleWidth) && (ballPosition[1] > currentPosition[1] && ballPosition[1] < currentPosition[1] + paddleHeight)) {
				changeDirection();
			}

			//game over
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