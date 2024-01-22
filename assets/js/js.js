let circulo = document.querySelector(".circulo")
let imgCopo = document.querySelector(".copo-grande>img")
let verde = document.querySelector(".verde")
let magenta = document.querySelector(".magenta")
let rosa = document.querySelector(".rosa")

magenta.addEventListener("click", () => {
    imgCopo.src = "assets/img/img2.png"
    circulo.style.background = "#eb7495"
})

verde.addEventListener("click", () => {
    imgCopo.src = "assets/img/img1.png"
    circulo.style.background = "#017143"
})

rosa.addEventListener("click", () => {
    imgCopo.src = "assets/img/img3.png"
    circulo.style.background = "#d752b1"
})