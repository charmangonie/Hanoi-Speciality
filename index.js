// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
//check xem đã login chưa
login_check = localStorage.getItem("login_check");
 login_check = JSON.parse(login_check)
 console.log(login_check)
if (login_check== true){
    window.location.href = "homepage.html";
}else{}

//đổi sang sign out
var signin_btn = document.getElementById("signin_btn")
signin_btn.innerHTML="HI"
function signout(){
  signin_btn.addEventListener('click', () =>{
    if (login_check== null){
      window.location.href = "login.html";
    }else{
      signin_btn.innerHTML="HI"
      
      console.log("you are signed out");
    }
  })
}
