function getRandomInt (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min +1)) + min;
}

const ColorBox = document.getElementsByClassName("page-header")[0]

const colors = [
    "Red",
    "Orange",
    "Yellow",
    "Green",
    "Blue",
    "Purple"
]

function changeColor () {
    const colorIndex = getRandomInt(0, colors.length-1)
    const color = colors[colorIndex]

    ColorBox.classList = ""
    ColorBox.classList.add("page-header")
    ColorBox.classList.add(color)
    saveColor(color)

    // clear classList expect for page-header, add the color
}

function saveColor (color) {
    localStorage.setItem("top-bar-color", color)
}