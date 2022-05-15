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
    let gameTimer = setInterval(startGame, 20)

    function jump() {
    
        if (hunterBottom < 430) hunterBottom += 50
        hunter.style.bottom = hunterBottom + 'px'
        console.log(hunterBottom)
    }
    document.addEventListener('keydown', jump)
    
})