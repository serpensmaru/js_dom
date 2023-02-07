let elemDiv = document.querySelector(".reveal")

window.addEventListener('scroll', () => {
    // находим координаты элемента
    // определяем область видимости
    // задаем видимость элемента если он в пределах области видимости
    let x = elemDiv.getBoundingClientRect(),
        size = document.documentElement.clientHeight
    if (x.y < size) {
        elemDiv.classList.add("reveal_active")
    } else {
        elemDiv.className = "reveal"
    }
    if (x.y < 0) {
        elemDiv.className = "reveal"
    }
})