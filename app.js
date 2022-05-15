document.addEventListener('DOMcContentLoaded', () => {
    const hunter = document.querySelector('.hunter')
    const game = document.querySelector('.container')
    const ground = document.querySelector('.ground')

    let hunterLeft = 200
    let hunterBottom = 23

    function startGame(){
        hunter.style.bottom = hunterBottom + 'px'
    }
    startGame()
})