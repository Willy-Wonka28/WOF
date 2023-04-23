const button = document.querySelector(".btn")
const board = document.querySelector(".board")

button.addEventListener("click", () => {
    board.classList.add("spin")
})