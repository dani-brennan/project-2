<h1>Block Game</h1>
Block Game is a browser based game inspired by one of my favourite childhood games, Breakout. The aim of
the game is to use a paddle to bounce a ball and bounce it off the walls to remove all of the blocks. Breaking all the blocks will result in the level being completed.
<h1>User Experience</h1>
<h2>Project Goals</h2>
<ul>
    <li>The website is fun, interactive and easy to navigate.</li>
    <li>Game instructions are clear, easy to follow and accessible to the player at all times.</li>
    <li>Game is playable on both computer and touch devices</li>
</ul>
<h2>User Stories</h2>
<ul>
<li>As a player, I want the game to be easy to understand</li>
<li>As a player, I want the game to be fun to play</li>
<li>As a player, I want to have access to instructions that teach me how to play the game</li>
<li>As a player, I want to play on computer or on my phone</li>
<li>As a player, I want game controls to be easy to use and access</li>
<li>As a player, I want a game that is challenging</li>
</ul>
<h2>Typography</h2>
The font I used for this project is <a href="https://fonts.google.com/specimen/Press+Start+2P" target="_blank">Press Start 2P</a> sourced from Google Fonts.

<h2>Wireframes - Balsamiq</h2>
[screenshots]

<h1>Technologies Used</h1>
<p>HTML, CSS, JavaScript</p>

<h2>Features</h2>
<h3>Top Bar</h3>
<p>The top bar will have the game title, the score total as well as the notification of when the game is over or if
the player has won.</p>
[final screenshot]
<h4>Game Title</h4>
This area contains the title of the game.
[final screenshot]
<h4>Score Total</h4>
<p>The user will earn points for every block broken. The updated score will show here.</p>
[final screenshot]

<h3>Game Area</h3>
<p>This area will have the game where the user can interact with the paddle and bounce the ball towards the
blocks and off the walls. The top of the game area will have the blocks, the bottom of the game area will have
the paddle (which can only move along the x axis). The ball will spawn above the paddle but can move
throughout the game area. If the ball collides with a block it will disappear. Once all the blocks have been
broken the level is completed. If the ball reaches the bottom of the game area, it will result in game over.</p>
[final screenshot]
<h4>Paddle</h4>
[screenshot]
<h4>Ball</h4>
[screenshot]
<h4>Blocks</h4>
[screenshot]

<h1>Testing</h1>
The game has been tested on multiple browsers (Chrome, Safari, FireFox).

<h2>Validating</h2>
<p>Html was validated using <a href="https://validator.w3.org/" target="_blank">W3 Validator</a></p>

<p>CSS was validated using <a href="https://jigsaw.w3.org/css-validator/" target="_blank">W3 Jigsaw</a></p>
<p>JavaScript was validated using <a href="https://jshint.com/" target="_blank">JS Hint</a></p>
<p>Lighthouse testing</p>
<p>Am I Responsive</p>

<h2>Manual Testing</h2>
<table>
<thead>
  <tr>
    <th>Browser</th>
    <th>Outcome</th>
    <th>Pass/Fail</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Chrome</td>
    <td>No changes to appearance or functionality</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Safari</td>
    <td>No changes to appearance or functionality</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Firefox</td>
    <td>No changes to appearance or functionality</td>
    <td>TBC</td>
  </tr>
</tbody>
</table>
<h3>Device Compatibility</h3>
<table>
<thead>
  <tr>
    <th>Browser</th>
    <th>Outcome</th>
    <th>Pass/Fail</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Desktop</td>
    <td>No changes to appearance or functionality</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Tablet</td>
    <td>No changes to appearance or functionality</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Mobile</td>
    <td>No changes to appearance or functionality</td>
    <td>TBC</td>
  </tr>
</tbody>
</table>
<h3>Elements Testing</h3>
<table>
<thead>
  <tr>
    <th>Element</th>
    <th>Outcome</th>
    <th>Pass/Fail</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Game Area</td>
    <td>Functions as expected</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Paddle</td>
    <td>Paddle moves left and right and stays inside game area as expected. Paddle collides with ball as expected.</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Start Game Button</td>
    <td>Functions as expected.</td>
    <td>TBC</td>
  </tr>
   <tr>
    <td>Reset Game Button</td>
    <td>Functions as expected.</td>
    <td>TBC</td>
  </tr>
   <tr>
    <td>How to Play Button</td>
    <td>Functions as expected.</td>
    <td>TBC</td>
  </tr>
   <tr>
    <td>Game controls (Desktop)</td>
    <td>Left and right keyboard keys move paddle left and right as expected. Left and right buttons move paddle left and right as expected.</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Game Controls (Touch screen)</td>
    <td>Left and right buttons move paddle left and right as expected.</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Ball</td>
    <td>Moves as expected and collision with walls and paddle is as expected.</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Game Loss</td>
    <td>Game over works as expected: when ball hit the bottom of the game area.</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Game Win</td>
    <td>Game win works as expected: when all blocks are destroyed.</td>
    <td>TBC</td>
  </tr>
  <tr>
    <td>Score</td>
    <td>Score works as expected: increases in amount as blocks are destroyed.</td>
    <td>TBC</td>
  </tr>
</tbody>
</table>

<h2>Bugs</h2>
<p>I encountered a bug where the ball would go through the paddle occasionally. I discovered that I had accidentally put blockWidth instead of paddleWidth which meant that physically the block lookedcorrect but it was actually the size of the block which has a smaller width, which resulted in the ball
passing through.</p>
<p>When centering the div containing the game it resulted in the game area being offset i.e. The game
looked like it was in the right place but the game collision barriers were still floating to the left.
Changing the game area position to absolute fixed this issue.</p> 
<p>When implementing mobile touch controls I had a similar problem moving the paddle. The paddle would not move physically but there was still an invisible paddle allowing me to bounce the ball. I solved this bug by moving mobile touch control functions, drawPaddle and movePaddle to outside of
the main loop.</p>
<h1>Future Implementations</h1>
<ul>
<li>More levels with increasing difficulty</li>
<li>Different types of blocks</li>
<li>Powerups</li>
<li>Music/Sound effects</li>
</ul>
<h1>Live Link</h1>
A live link to this project can be found <a href="https://dani-brennan.github.io/project-2/" target="_blank">here.</a>
<h1>Credits</h1>
<h2>Code</h2>
To learn how to create the basic block breaker game elements, I learned from <a href="https://www.youtube.com/watch?v=3KWEud12Pxo" target="_blank">this tutorial.</a>
<h2>Images</h2>
<a href="https://pixabay.com/illustrations/spectrum-psychedelic-green-gradient-553216/" target="_blank">Background image</a>
<a href="https://pixabay.com/illustrations/background-pink-blue-gradient-1591229/" target="_blank">Block image</a>
<h2>Wireframes</h2>
The wireframes were created using <a href="https://balsamiq.com/">Balsamiq.</a>
<h2>Icons</h2>
Made by <a href= "https://fontawesome.com/" target="_blank">Fontawesome</a>