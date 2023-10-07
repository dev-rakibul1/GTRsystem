// text animation
const textAnimation = document.querySelector(".text-animation")
const newTextContent = textAnimation.textContent.replace(/./g, "<span>$&</span>")

textAnimation.innerHTML = newTextContent

let spans = document.querySelectorAll(".text-animation span")
for (let i = 0; i < spans.length; i++) {
    let left = innerWidth * Math.random()
    let top = innerHeight * Math.random()

    if (Math.random() < 0.5) {
        spans[i].style.left = "-" + left + "px"
    } else {
        spans[i].style.left = left + "px"
    }
    if (Math.random() < 0.5) {
        spans[i].style.top = "-" + top + "px"
    } else {
        spans[i].style.top = top + "px"
    }
}
