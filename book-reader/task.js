let linkList = document.querySelectorAll(".font-size")
let bookText = document.querySelector(".book")

for (let link of linkList) {
    link.addEventListener("click", (e) => {
        if (link.classList.contains("font-size_small")) {
            linkList.forEach((e) => {e.classList.remove("font-size_active")})
            link.classList.add("font-size_active")
            bookText.classList.remove("book_fs-big")
            bookText.classList.add("book_fs-small")
            e.preventDefault()
            return true
        }
        if (link.classList.contains("font-size_big")) {
            linkList.forEach((e) => {e.classList.remove("font-size_active")})
            link.classList.add("font-size_active")
            bookText.classList.remove("book_fs-small")
            bookText.classList.add("book_fs-big")
            e.preventDefault()
            return true
        } else {
            linkList.forEach((e) => {e.classList.remove("font-size_active")})
            link.classList.add("font-size_active")
            bookText.classList.remove("book_fs-big")
            bookText.classList.remove("book_fs-small")
            e.preventDefault()
            return true
        }
    })
}