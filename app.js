document.addEventListener('DOMcContentLoaded', () => {
    const hunter = document.querySelector('.hunter')
    const game = document.querySelector('.container')
    const ground = document.querySelector('.ground')

    let hunterLeft = 200
    let hunterBottom = 100

    function startGame(){
        hunter.style.left = hunterLeft + 'px'
    }
    startGame()
});