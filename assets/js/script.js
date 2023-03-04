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

//build blocks
function buildBlock() {
const block = document.createElement('div')
block.classList.add('block')
gamearea.appendChild(block)
}

buildBlock()