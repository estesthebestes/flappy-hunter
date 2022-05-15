document.addEventListener('DOMContentLoaded', () => {
    const hunter = document.querySelector('.hunter')
    const game = document.querySelector('.container')
    const ground = document.querySelector('.ground')

    let hunterLeft = 100
    let hunterBottom = 100

    function startGame() {
        hunter.style.bottom = hunterBottom + 'px'
        hunter.style.left = hunterLeft + 'px'
    }
    startGame()
})