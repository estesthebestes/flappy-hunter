document.addEventListener('DOMContentLoaded', () => {
    const hunter = document.querySelector('.hunter')
    const game = document.querySelector('.container')
    const ground = document.querySelector('.ground')

    let hunterLeft = 100
    let hunterBottom = 100
    let gravity = 2 

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
        const pipe = document.createElement('div')
        pipe.classList.add('pipe')
        game.appendChild(pipe)
        pipe.style.left = pipeLeft + 'px'
        pipe.style.bottom = pipeBottom + 'px'

        function movePipe() {
            pipeLeft -= 2
            pipe.style.left = pipeLeft + 'px'

            if (pipeLeft === -40) {
                clearInterval(timerId)
                game.removeChild(pipe)
            }
        }
        let timerId = setInterval(movePipe, 20)
        setTimeout(makePipe, 2000)
    }
    makePipe()

})