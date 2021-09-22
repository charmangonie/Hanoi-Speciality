/*đổi giữa sign up-sign in mode */
const sign_in_btn = document.querySelector("#sign-in-btn")
const sign_up_btn = document.querySelector("#sign-up-btn")
const container = document.querySelector(".container")
sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode")
})

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode")
})

/* tạo array chứa users */
let alluser;
if (localStorage.getItem("alluser") !== null)
{
    alluser = localStorage.getItem("alluser");
    alluser = JSON.parse(alluser)
} else {
    alluser = [];
}


/* check password có trùng k */
let password_notice= document.getElementById('wrong_repeat')
let password = document.getElementById('password')
let password_repeat = document.getElementById('password_repeat')
const check_password = function() {
    var match = false
    if(password.value == password_repeat.value){
        password_notice.innerHTML= '';
        match = true;
    }else{
        password_notice.innerHTML= 'Not matching'
    }
    return match
}

var submit_signup = function(){
    let name = document.getElementById('username').value
    let email = document.getElementById('email').value
    let psw = document.getElementById('password').value
    

    if(psw!=="" && name!=="" && email !=""){
            if(check_username()===false && check_password()===true){
            function User(name,email, psw) {
            this.name = name;
            this.email = email;
            this.psw = psw;
        }
            const user = new User(name,email, psw);
            alluser.push(user)
            localStorage.setItem("alluser", JSON.stringify(alluser));
        } else {
            alert("Please check your sign up information!");
        }
    } else{
        alert("Please fill all the gaps")
    }
    
    
}

/*check username xem có trùng k */
let username = document.getElementById('username')
let username_notice = document.getElementById('username_notice')
const check_username = () => {
    var found = false;
    for (var i=0;i<alluser.length;i++){
        if(username.value === alluser[i].name){
            found = true;
            break;
        }
    }
    if (found){
        username_notice.innerHTML="This username is already in use. Please try another."
    } else {   
       username_notice.innerHTML=''
    }

    return found;
}

const checkLengPassword = () => {
    let psw = document.getElementById('password').value;
    if(psw.length>=6 && psw.length<=20){
        console.log("password hợp lệ");
    } else {
        console.log("password chưa hợp lệ");
    }
}

var signin = localStorage.getItem("alluser");
var signin_data = JSON.parse(signin);
const submit_signin = () => {
    var name = document.getElementById('signin_username').value
    var psw = document.getElementById('signin_password').value
    for (var i=0;i<signin_data.length;i++){
        if(name === signin_data[i].name&& psw=== signin_data[i].psw){
            alert("You are logged in!")
            window.location.href = "homepage.html";
        }else{
            alert("Your password or username is incorrect")
        }
    }
  
}
