let product = [
  {
    id: "seeFood",
    img: "https://img.dominos.vn/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg",
    name: " PIZZA HẢI SẢN XỐT MAYONNAISE - OCEAN MANIA ",
    price: "99,000₫"
  },
  {
    id: "seeFood Beef",
    img: "https://img.dominos.vn/Surf-turf-Pizza-Bo-Tom-Nuong-Kieu-My-1.jpg",
    name: " PIZZA BÒ & TÔM NƯỚNG KIỂU MỸ - SURF & TURF",
    price: "99,000₫"
  }, {
    id: "seeFood",
    img: "https://img.dominos.vn/Okonomiyaki-banh-xeo-nhat.jpg",
    name: " PIZZA BÁNH XÈO NHẬT - OKONOMIYAKI",
    price: "99,000₫"
  }, {
    id: " beef meat ",
    img: "https://img.dominos.vn/Pizza-Thap-Cam-Thuong-Hang-Extravaganza.jpg",
    name: " PIZZA THẬP CẨM THƯỢNG HẠNG - EXTRAVAGANZA",
    price: "99,000₫"
  }, {
    id: "seeFood meat",
    img: "https://img.dominos.vn/pizza-lap-xuong.jpg",
    name: " PIZZA LẠP XƯỞNG XỐT TRỨNG MUỐI MAYONNAISE - SAIGON MANIA PIZZA",
    price: "99,000₫"
  },
  {
    id: "seeFood beef chicken",
    img: "https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg",
    name: " PIZZA HẢI SẢN NHIỆT ĐỚI XỐT TIÊU - PIZZAMIN SEA",
    price: "99,000₫"
  }, {
    id: "seeFood meat beef chicken",
    img: "https://img.dominos.vn/Half-Half.jpg",
    name: " HALF HALF",
    price: "99,000₫"
  }, {
    id: " beef meat ",
    img: "https://img.dominos.vn/Meat-lover-Pizza-5-Loai-Thit-Thuong-Hang.jpg",
    name: " PIZZA 5 LOẠI THỊT THƯỢNG HẠNG - MEAT LOVERS",
    price: "99,000₫"
  }, {
    id: " meat ",
    img: "https://img.dominos.vn/Pepperoni-feast-Pizza-Xuc-Xich-Y.jpg",
    name: " PIZZA XÚC XÍCH Ý TRUYỀN THỐNG - PEPPERONI FEAST",
    price: "99,000₫"
  }, {
    id: "seeFood",
    img: "https://img.dominos.vn/Pizza-Hai-San-Xot-Ca-Chua-Seafood-Delight.jpg",
    name: " PIZZA HẢI SẢN XỐT CÀ CHUA - SEAFOOD DELIGHT",
    price: "99,000₫"
  }, {
    id: "meat",
    img: "https://img.dominos.vn/Sausage-Kid-Mania.jpg",
    name: " PIZZA XÚC XÍCH XỐT PHÔ MAI - SAUSAGE KID MANIA",
    price: "79,000₫"
  }, {
    id: "meat",
    img: "https://img.dominos.vn/Kid-mania-Pizza-Trung-Cut-Xot-Pho-Mai-1.jpg",
    name: " PIZZA TRỨNG CÚT XỐT PHÔ MAI - KID MANIA",
    price: "79,000₫"
  }, {
    id: "healthy",
    img: "https://img.dominos.vn/Veggie-mania-Pizza-Rau-Cu-Thap-Cam.jpg",
    name: " PIZZA RAU CỦ THẬP CẨM - VEGGIE MANIA",
    price: "79,000₫"
  }, {
    id: "chicken",
    img: "https://img.dominos.vn/Pizza-Ga-Xot-Tuong-Kieu-Nhat-Teriyaki-Chicken.jpg",
    name: " PIZZA GÀ XỐT TƯƠNG KIỂU NHẬT - TERIYAKI CHICKEN",
    price: "79,000₫"
  }, {
    id: "meat ",
    img: "https://img.dominos.vn/Pizza-Dam-Bong-Dua-Kieu-Hawaii-Hawaiian.jpg",
    name: " PIZZA DĂM BÔNG DỨA KIỂU HAWAII - HAWAIIAN",
    price: "79,000₫"
  }, {
    id: " healthy",
    img: "https://img.dominos.vn/Pizza-Pho-Mai-Hao-Hang-Cheese-Mania.jpg",
    name: "PIZZA PHÔ MAI HẢO HẠNG - CHEESE MANIA ",
    price: "79,000₫"
  }, {
    id: "chicken meat ",
    img: "https://img.dominos.vn/Pizza-Ga-Pho-Mai-Thit-Heo-Xong-Khoi-Cheesy-Chicken-Bacon.jpg",
    name: "PIZZA GÀ PHÔ MAI THỊT HEO XÔNG KHÓI - CHEESY CHICKEN BACON ",
    price: "79,000₫"
  }, {
    id: " beef ",
    img: "https://img.dominos.vn/Pizza-Bo-Me-Hi-Co-Thuong-Hang-Prime-Beef.jpg",
    name: " PIZZA BÒ MÊ-HI-CÔ THƯỢNG HẠNG - PRIME BEEF",
    price: "249,000₫"
  }, {
    id: "seeFood",
    img: "https://img.dominos.vn/Pizza-Hai-San-Kieu-Singapore-Singapore-Style-Seafood.jpg",
    name: " PIZZA HẢI SẢN KIỂU SINGAPORE - SINGAPORE STYLE SEAFOOD",
    price: "249,000₫"
  },
  {
    id: "seeFood beef chicken meat",
    img: "https://img.dominos.vn/Pizza-4-Vi-Pizza-Big-4.jpg",
    name: "PIZZA 4 VỊ - PIZZA BIG 4 ",
    price: "329,000₫"
  },
]

let toTalPremium = document.querySelector("#product1")
let productsPremium = product.map(function (item) {
  if (item.price === "99,000₫") {
    return `<div id = " item-${item.id}" class="flex__fit">
         <div   class="card product__card">
          <div class="card__img">
            <a class="resize__img" href="">
              <img
                src="${item.img}"
                alt=""
              />
            </a>
          </div>
          <div class="card__body">
            <a href="" class="product__name"
              >${item.name}</a
            >
            <p class="product__price">
              <span>${item.price}</span>
            </p>
          </div>
          <button class = " bntCash " > Thêm vào giỏ hàng </button>
        </div> 
       </div>`}

})
toTalPremium.innerHTML = productsPremium.join(" ")





let toTalFavorite = document.querySelector("#product2")
let productsFavorite = product.map(function (item) {
  if (item.price === "79,000₫") {
    return `<div id = " item-${item.id}" class="flex__fit">
         <div   class="card product__card">
          <div class="card__img">
            <a class="resize__img" href="">
              <img
                src="${item.img}"
                alt=""
              />
            </a>
          </div>
          <div class="card__body">
            <a href="" class="product__name"
              >${item.name}</a
            >
            <p class="product__price">
              <span>${item.price}</span>
            </p>
          </div>
          <button class = " bntCash " > Thêm vào giỏ hàng </button>
        </div> 
       </div>`}

})
toTalFavorite.innerHTML = productsFavorite.join(" ");





let toTalSignature = document.querySelector("#product3")
let productsSignature = product.map(function (item) {
  if (item.price == "249,000₫" || item.price == "329,000₫") {
    return `<div id=" item-${item.id}"  class="flex__fit">
         <div   class="card product__card">
          <div class="card__img">
            <a class="resize__img" href="">
              <img
                src="${item.img}"
                alt=""
              />
            </a>
          </div>
          <div class="card__body">
            <a href="" class="product__name"
              >${item.name}</a
            >
            <p class="product__price">
              <span>${item.price}</span>
            </p>
          </div>
          <button class = " bntCash " > Thêm vào giỏ hàng </button>
        </div> 
       </div>`}

})
toTalSignature.innerHTML = productsSignature.join(" ");






let card = document.querySelectorAll(".flex__fit");
card.forEach(function (item) {
  item.addEventListener("click", (e) => {
    let bnt = e.target
    let products = bnt.parentElement
    let productImg = products.querySelector("img").src
    let productPrice = products.querySelector("span").innerText
    let productName = products.querySelector(".product__name").innerText;
    console.log(productImg, productName, productPrice)

    // productAdd.push({ productImg, productName, productPrice })
    // console.log(productAdd)
  })
})






// function Addcard (productImg,productName,productPrice) {
//   let productContent = ` <li class="product-item">
//   <div style="flex: 1.5px" class="product-img">
//     <img src=" ${productImg}" alt="" />
//   </div>
//   <div style="flex: 2" class="product-infor">
//     <span>${productName}</span>
//     <p>size vừa</p>
//     <p>${productPrice}</p>
//     <button class="btnDelete" style="display: block">xóa</button>
//   </div>
//   <div style="flex: 4" class="btn-bill">
//     <button class="bntMath">-</button>
//     <input class="input" type="text" min="1" />
//     <button class="bntMath">+</button>
//     <a href="#">Chương trình khuyến mãi</a>
//   </div>
// </li>`
// let AddProduct = document.querySelector(".products-menu")
// AddProduct.innerHTML=productContent
// AddProduct.append(productContent)





// }
// AddProduct = document.querySelector(".products-menu")
// console.log (AddProduct)
//  let productAddNew = productAdd.map( function (item){
//   return ` <li class="product-item">
//   <div style="flex: 1.5px" class="product-img">
//     <img src="${item.productImg}" alt="" />
//   </div>
//   <div style="flex: 2" class="product-infor">
//     <span>${item.productName}</span>
//     <p>size vừa</p>
//     <p>${item.productPrice}</p>
//     <button class="btnDelete" style="display: block">xóa</button>
//   </div>
//   <div style="flex: 4" class="btn-bill">
//     <button class="bntMath">-</button>
//     <input class="input" type="text" min="1" />
//     <button class="bntMath">+</button>
//     <a href="#">Chương trình khuyến mãi</a>
//   </div>
// </li>`
//  });
//  AddProduct.innerHTML = productAddNew.join (" ")






// productAdd.push(productImg,productName,productPrice)
// console.log(productAdd)








// let btnAll = document.querySelector()


// document.querySelectorAll("card product__card").forEach(product => {
//   product.addEventListener('click', (e) => {
//     e.target.id == id,
//       console.log(product)
//   })
// })




// filter products
let btnAll = document.querySelector(".All")
let bntSeeFood = document.querySelector(".seeFood")
let bntBeef = document.querySelector(".beef")
let bntChicken = document.querySelector(".chicken")
let bntMeat = document.querySelector(".meat")
let bntHealthy = document.querySelector("healthy")



btnAll.onclick = function (e) {
  e.target.id;
  toTalPremium.innerHTML = productsPremium.join(" ")
  toTalFavorite.innerHTML = productsFavorite.join(" ");
  toTalSignature.innerHTML = productsSignature.join(" ")}





  bntSeeFood.onclick = function (e) {
    e.target.id;
    let addSeefoodFav = document.querySelector("#product2")
    let addSeefoodPre = document.querySelector("#product1")
    let addSeefoodSig = document.querySelector("#product3")
    console.log (addSeefoodPre)
    
      let seeFoodPre =  product.map(function (item) {
        if (item.id =="seeFood") {
          return `<div id = " item-${item.id}" class="flex__fit">
               <div   class="card product__card">
                <div class="card__img">
                  <a class="resize__img" href="">
                    <img
                      src="${item.img}"
                      alt=""
                    />
                  </a>
                </div>
                <div class="card__body">
                  <a href="" class="product__name"
                    >${item.name}</a
                  >
                  <p class="product__price">
                    <span>${item.price}</span>
                  </p>
                </div>
                <button class = " bntCash " > Thêm vào giỏ hàng </button>
              </div> 
             </div>`}
      
      })
      console.log(seeFoodPre)
      addSeefoodPre.innerHTML = seeFoodPre.join(" ")
    }
    

    
  

  // let toTalPremium = document.querySelector("#product1")
  // console.log(toTalPremium)
  // let productsPremium = product.map(function (item) {
  //   if (item.price === "99,000₫") {
  //     return `<div id = " item-${item.id}" class="flex__fit">
  //          <div   class="card product__card">
  //           <div class="card__img">
  //             <a class="resize__img" href="">
  //               <img
  //                 src="${item.img}"
  //                 alt=""
  //               />
  //             </a>
  //           </div>
  //           <div class="card__body">
  //             <a href="" class="product__name"
  //               >${item.name}</a
  //             >
  //             <p class="product__price">
  //               <span>${item.price}</span>
  //             </p>
  //           </div>
  //           <button class = " bntCash " > Thêm vào giỏ hàng </button>
  //         </div> 
  //        </div>`}
  //   console.log(productsPremium)

  // })
  // toTalPremium.innerHTML = productsPremium.join(" ")












// function loading(type) {
//   let products = product.map(function (item) {
//     if (type == item.id || item.price === "99,000₫") {
//       return `<div id=" item-${item.id}"  class="flex__fit">
//     <div   class="card product__card">
//      <div class="card__img">
//        <a class="resize__img" href="">
//          <img
//            src="${item.img}"
//            alt=""
//          />
//        </a>
//      </div>
//      <div class="card__body">
//        <a href="" class="product__name"
//          >${item.name}</a
//        >
//        <p class="product__price">
//          <span>${item.price}</span>
//        </p>
//      </div>
//    </div>
//   </div>`
//     }
//   })
//   toTalPremium.innerHTML = products.join("")
// }






// btnAll.onclick = function () {
//   loading("All")
// }

// bntSeeFood.onclick = function () {
//   loading("seeFood")
// }
// bntChicken.onclick = function () {
//   loading("chicken")
// }
// bntBeef.onclick = function () {
//   loading("beef")
// }
// // bntHealthy.onclick = function () {
// //   loading("healthy")
// // }
// bntMeat.onclick = function () {
//   loading("meat")
// }
// btnAll.onclick = function () {
//   loading("seeFood")
// }


