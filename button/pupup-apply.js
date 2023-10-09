document.getElementById("open-apply").addEventListener("click", function(){
    var ppLogin = document.getElementsByClassName("pp-apply")[0];
        ppLogin.classList.add("active");
    });
    
    var closeBtn = document.getElementsByClassName("close-btn1")[0];
    closeBtn.addEventListener("click", function(){
        var ppLogin = document.getElementsByClassName("pp-apply")[0];
        ppLogin.classList.remove("active");
    });