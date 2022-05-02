'use strict'
// поисковая форма
const search = document.getElementById("search")
const searchIcon = document.getElementById("search-icon")


document.addEventListener("click", event => {
    let target = event.target
    if (target === search) {
        return
    } else if (target === searchIcon) {
        event.preventDefault()
        searchIcon.style.display = 'none'
        search.style.display = 'inline'
        search.focus()
    } else {
        searchIcon.style.display = 'inline'
        search.style.display = 'none'
    }

})

// модальное окно 
const statement = document.getElementById("statement")
const modalForm = document.getElementById("modal-form")
const closeModalForm = document.getElementById("close-modal")


statement.addEventListener("click", e => {
    e.preventDefault()
    modalForm.style.display = "flex"
    document.body.style.overflow = "hidden"

})

closeModalForm.addEventListener("click", e => {
    modalForm.classList.add("modal-fade")
    setTimeout(() => {
        modalForm.style.display = "none"
        modalForm.classList.remove("modal-fade")
    }, 1000)

    document.body.style.overflow = "auto "
})


// кнопка наверх
const arrowTop = document.getElementById("arrow-top")
window.addEventListener("scroll", () => {
    arrowTop.hidden = pageYOffset < document.documentElement.clientHeight
})
arrowTop.onclick = () => window.scrollTo(0,0) 
