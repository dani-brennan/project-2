const gamearea = document.querySelector('.gamearea')

//create block
class block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis,yAxis]
        this.bottomRight =

    }

}


//build blocks
function buildBlock() {
const block = document.createElement('div')
block.classList.add('block')
gamearea.appendChild(block)
}

buildBlock()