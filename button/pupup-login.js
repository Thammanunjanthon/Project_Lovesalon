
// document.querySelector("#open-login").addEventListener("click", function(){
//     document.querySelector(".pp-login").classList.add("active");
// });

// document.querySelector(".pp-login .close-btn").addEventListener("click", function(){
//     document.querySelector(".pp-login").classList.remove("active");
// });

document.getElementById("open-login").addEventListener("click", function(){
var ppLogin = document.getElementsByClassName("pp-login")[0];
    ppLogin.classList.add("active");
});

var closeBtn = document.getElementsByClassName("close-btn")[0];
closeBtn.addEventListener("click", function(){
    var ppLogin = document.getElementsByClassName("pp-login")[0];
    ppLogin.classList.remove("active");
});