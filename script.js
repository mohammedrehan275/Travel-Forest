function entersite(){
    $("#landing").css("transform", "translate(-200vw)");
    $("#dimmed-bg").css("visibility", "visible");
    $("#dimmed-bg").css("transform" ,"translate(0)");
    $("#above-fold").css("opacity","1");

    $("#full-site").css("visibility","visible");
    $("#full-site").css("overflow","visible");
    $("#full-site").css("max-height","auto");
    // $("#register-side-bar").css("transform", "translate(0)");

}

function openform(){
    $("#register-side-bar").css("transform","translate(-650px)");
    $("#register-side-bar").css("transition-delay","0s");
    $("#register-side-bar").css("z-index","100");

    $("#call-num").css("opacity","0");
    $("#register").css("opacity","0");
}
function closeform(){
    $("#register-side-bar").css("transform","translate(0)");
    $("#call-num").css("opacity","1");
    $("#register").css("opacity","1");
    $("#register-side-bar").css("z-index","0");
}

let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
let regis = document.getElementById("reg");

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

var intFrameWidth = window.innerWidth;
function width() {
    if(intFrameWidth < 992) { 
        $("figure").remove("#fig");
        regis.addEventListener('click', function() {
            $("#register-side-bar").css("transform","translate(0px)");
            $("#register-side-bar").css("transition-delay","0s");
            $("#register-side-bar").css("z-index","100");
            $("#register-side-bar").css("width","100%");
        });
    }
    else{
        $("i").remove("#back");
        $("button").remove(".btn");
        $("a").remove(".logo");
       
        // $("#visible-section").mouseenter(function() { openForm(); });
        $("#form-section").mouseleave(function() { closeForm(); });
        $("#register-side-bar").mouseenter(function() { openform(); });
        // $("#register-side-bar").mouseleave(function() { closeform(); });
        $("#empty-section").mouseenter(function() { closeform(); });
        $("#register-side-bar").css("transform","translate(0px)");
    }
}
width();
// window.onresize = width;
window.addEventListener('resize', width);


// if(intFrameWidth < 992){
//     regis.addEventListener('click', function() {
//         $("#register-side-bar").css("transition-delay","0s");
//         $("#register-side-bar").css("z-index","100");
//         $("#register-side-bar").css("width","100%");
//     });
// }

// function register() {
// }

function closeRegister() {
    $("#register-side-bar").css("transform","translate(1000px)");
    $("#register-side-bar").css("z-index","0");
    $("#register-side-bar").css("width","");
}