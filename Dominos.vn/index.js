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
        </div> 
       </div>`}

})
toTalPremium.innerHTML = productsPremium.join(" ");

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
        </div> 
       </div>`}

})
toTalSignature.innerHTML = productsSignature.join(" ");






let card = document.querySelectorAll(".flex__fit");
card.forEach(function (item) {
  item.addEventListener("click", (e) => {
   let a = e.target
   console.log(a)
  })
})








// let btnAll = document.querySelector()


// document.querySelectorAll("card product__card").forEach(product => {
//   product.addEventListener('click', (e) => {
//     e.target.id == id,
//       console.log(product)
//   })
// })
 



// filter products
// let btnAll = document.querySelector(".All")
// let bntSeeFood = document.querySelector(".seeFood")
// let bntBeef = document.querySelector(".beef")
// let bntChicken = document.querySelector(".chicken")
// let bntMeat = document.querySelector(".meat")
// let bntHealthy = document.querySelector("healthy")
// console.log(bntBeef)



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
//   </div>`, toTalPremium.innerHTML = products.join("")
//     }
//     else if (type == item.id || item.price === "79,000₫") {
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
//   </div>`, toTalFavorite.innerHTML = products.join(" ")
//     } else if (Type == item.id || item.price == "249,000₫" || item.price == "329,000₫") {
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
//   </div>`, toTalSignature.innerHTML = products.join(" ")
//     }
//   }
//   )
// }

// toTalPremium.innerHTML = products.join("")
// toTalFavorite.innerHTML = products.join(" ");
// toTalSignature.innerHTML = products.join(" ")






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

// btnAll.onclick = function () {
//   loading("seeFood")
// }
