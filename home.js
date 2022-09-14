let slides = 1;
showImg(slides);
function plusImg(n) {
    showImg(slides += n)
}
function showImg(n) {
    let i;
    let x = document.getElementsByClassName("imgSlide");
    if (n > x.length) { slides = 1 };
    if (n < 1) { slides = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slides - 1].style.display = "block";
}


const orderButtons = document.querySelectorAll(".btn-order");
orderButtons.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.add("btnChange");

        orderButtons.forEach(button => {
            if (button !== item) {
                button.classList.remove("btnChange")
            }
        })
    })
})