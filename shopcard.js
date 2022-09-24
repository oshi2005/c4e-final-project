




function Addcard(productImg, productName, productPrice) {
  let AddProduct = document.querySelector(".products-menu")
  let productContent = ` <li class="product-item">
    <div style="flex: 1.5px" class="product-img">
      <img src=" ${productImg}" alt="" />
    </div>
    <div style="flex: 2" class="product-infor">
      <span>${productName}</span>
      <p>size vừa</p>
      <p>${productPrice}</p>
      <button class="btnDelete" style="display: block">xóa</button>
    </div>
    <div style="flex: 4" class="btn-bill">
      <button class="bntMath">-</button>
      <input class="input" type="text" min="1" />
      <button class="bntMath">+</button>
      <a href="#">Chương trình khuyến mãi</a>
    </div>
  </li>`
  AddProduct.innerHTML = productContent
  AddProduct.append(productContent)
}
