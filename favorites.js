//header//
const dataHeader = [
    {
      img: "Photos/V_face.png",
      img2: "Photos/anh-ha-noi.jpg",
      a1: "HOME",
      a2: "ABOUT US",
      a3: "FAVOURITE FOOD",
    },
  
  ];
 
let headerHTML = "";
let idHeader = document.getElementById("header");

for (content of dataHeader) {
    headerHTML += `
    <div class="top_header">
        <div class="top_left_header"> 
            <img class="top_left_header_img" src=${content.img} alt />
        </div>
        <div class="top_mid_header">
            <div class="top_mid_header_tag"><a href="#" class="top_mid_header_tag_deco"> ${content.a1} </a></div>
            <div class="top_mid_header_tag"><a href="#" class="top_mid_header_tag_deco"> ${content.a2} </a></div>
            <div class="top_mid_header_tag"><a href="favourite_food.html" class="top_mid_header_tag_deco"> ${content.a3} </a></div>
        </div>
        <div class="top_right_header"></div>
    </div>
  `;
}

idHeader.innerHTML = headerHTML;
//chế độ khi chưa đăng nhập hoặc chưa có món ăn yêu thích
 login_check = localStorage.getItem("login_check");
 login_check = JSON.parse(login_check)
 console.log(login_check)
 const empty = document.querySelector(".empty_page")
 const favourite_page = document.querySelector(".favorites")
if (login_check== true){
  empty.classList.remove("empty_page")
  empty.classList.add("empty_page::before")
  favourite_page.classList.add("favorites")
}else{
  favourite_page.classList.remove("favorites")
  favourite_page.classList.add("favorites::before")
}



// thẻ món ăn//
const dish_data=[
  {
    img:"https://image-us.24h.com.vn/upload/3-2020/images/2020-09-17/1600300541-photo-1-1600006283562691307317.jpg",
    name:"Phở",
    link:"#"
  },
  {
    img:"https://image-us.24h.com.vn/upload/3-2020/images/2020-09-17/1600300541-photo-1-1600006283562691307317.jpg",
    name:"Phở",
    link:"#"
  }
]

let allfav;
//Check local storage
if (localStorage.getItem("favourites") !==null){
  allfav = localStorage.getItem("favourites"); //gán giá trị ở trong local storage cho biến allfav
  allfav = JSON.parse(allfav)//chuyển đổi từ JSON về dữ liệu ban đầu
} else {
  allfav = []
}
let fav_dishes = document.getElementById("fav_dishes")
let dish_card=''
for (content of dish_data){
  dish_card+=`
  <div class="dish">
                        <img src=${content.img}
                            alt="dish-photo">
                        <div class="dish_content">
                            <p id="dish_name">${content.name}</p>
                            <button class="btn">
                                <a href=${content.link} id="dish_button">Discover</a>
                            </button>
                            <button id ="closebutton"><i class="fal fa-minus-circle" id="closeicon"></i></button>
                        </div>
                    </div>
  `
}
fav_dishes.innerHTML=dish_card

//bấm yêu thích
function getFav (img, name, link){
  allfav.push(img, name, link)
  localStorage.setItem("favourites", JSON.stringify(allfav))

  readFav()
}

function readFav(){
  let dish_card='';
  for (let i =0; i<allfav.length; i++){
    dish_card
  }
}