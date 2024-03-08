let tiles = document.querySelectorAll('.tiles')
let tilesBg = document.querySelectorAll('.tiles-wrap')
let tilesBorder = document.querySelectorAll('.tiles-border')

let setDimensions = () => {
    let tileWidth = document.querySelector('.tiles-border').clientWidth
    let tileHeight = document.querySelector('.tiles-border').clientHeight
    let dimensions

    for (let y = 0; y < tilesBorder.length; y++) {
        dimensions = (tilesBorder[y].offsetLeft / 2.8)
    }

    for (let i = 0; i < tilesBg.length; i++) {
        tilesBg[i].style.height = tileHeight + 'px'
        tilesBg[i].style.width = (tileWidth * 2) + 'px'
        tilesBg[i].style.left = '-' + dimensions + 'px'
    }

    for (let x = 0; x < tiles.length; x++) {
        if (x % 2 !== 0) {
            tiles[x].style.top = (tileHeight / 2) + 'px'
        }
    }
}

setDimensions()
window.addEventListener('resize', () => { setDimensions() })