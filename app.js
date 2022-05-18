document.addEventListener('DOMContentLoaded', () => {
    const hunter = document.querySelector('.hunter')
    const game = document.querySelector('.container')
    const ground = document.querySelector('.ground')

    let hunterLeft = 250
    let hunterBottom = 150
    let gravity = 2 
    let playerLoss = false
    let spaceBetweenTopAndBottom = 300 

    function startGame() {
        hunterBottom -= gravity
        hunter.style.bottom = hunterBottom + 'px'
        hunter.style.left = hunterLeft + 'px'
    }
    let gameTimerId = setInterval(startGame, 20)

    function jumpButton(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (hunterBottom < 430) hunterBottom += 50
        hunter.style.bottom = hunterBottom + 'px'
        console.log(hunterBottom)
    }
    document.addEventListener('keyup', jumpButton)
    
    function makePipe() {
        let pipeLeft = 460
        let randomHeight = Math.random() * 100
        let pipeBottom = randomHeight
        let pipeTopLeft = 460
        let pipeTopBottom = randomHeight
        
        const pipe = document.createElement('div')
        const pipeTop = document.createElement('div')
       if (!playerLoss){
        pipe.classList.add('pipe')
        pipeTop.classList.add('pipe-top')
    } 
        game.appendChild(pipe)
        game.appendChild(pipeTop)

        pipe.style.left = pipeLeft + 'px'
        pipeTop.style.left = pipeTopLeft + 'px' 
        pipe.style.bottom = pipeBottom + 'px'
        pipeTop.style.bottom = pipeTopBottom + spaceBetweenTopAndBottom + 'px'

        function movePipe() {
            pipeLeft -= 2
            pipeTopLeft -= 2
            pipe.style.left = pipeLeft + 'px'
            pipeTop.style.left = pipeLeft + 'px'

            if (pipeLeft === -40) {
                clearInterval(timerId)
                game.removeChild(pipe)
            }
            if (
                pipeLeft > 220 && pipeLeft < 270 && hunterLeft === 250 && hunterBottom < pipeBottom + 40 || 
                hunterBottom === 0 
                ) {
                gameOver() 
            }
        }
        let timerId = setInterval(movePipe, 20)
        if (!playerLoss) setTimeout(makePipe, 2000)
    }
    makePipe()

    function gameOver() {
        clearInterval(gameTimerId)
        playerLoss = true
        document.removeEventListener('keyup', jumpButton)
    }


})