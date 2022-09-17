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
let products = [
    {
        img: "./img/Sausage-Kid-Mania.jpg",
        name: "PIZZA XÚC XÍCH XỐT PHÔ MAI - SAUSAGE KID MANIA",
        price: "79,000₫"

    },
    {
        img: "./img/pizza-lap-xuong.jpg",
        name: "PIZZA LẠP XƯỞNG XỐT TRỨNG MUỐI MAYONNAISE - SAIGON MANIA PIZZA",
        price: "99,000₫"

    },
    {
        img: "./img/Okonomiyaki-banh-xeo-nhat.jpg",
        name: "PIZZA BÁNH XÈO NHẬT - OKONOMIYAKI",
        price: "99,000₫"

    },
    {
        img: "./img/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg",
        name: "PIZZA HẢI SẢN XỐT MAYONNAISE - OCEAN MANIA",
        price: "99,000₫"

    },
]

console.log(products)



var gia = products.map((item) => {
    return item.price
})
console.log(gia)
let pizzas = products.map(function (item) {
    return `<li>
      <div class="product-item">
        <div class="product-img">
          <a href="#">
            <img src=${item.img}>
          </a>
        </div>
        <div class="product-infor">   
          <a href="#">${item.name}</a>
          <div class="price">${item.price}</div>
        </div>
      </div>
    </li>`})
let productItems = document.getElementById("pizzas")
productItems.innerHTML = pizzas.join("")
