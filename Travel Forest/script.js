function entersite(){
    $("#landing").css("transform", "translate(-200vw)");
    $("#dimmed-bg").css("visibility", "visible");
    $("#dimmed-bg").css("transform" ,"translate(0)");
    $("#above-fold").css("opacity","1");

    $("#full-site").css("visibility","visible");
    $("#full-site").css("overflow","visible");
    $("#full-site").css("max-height","auto");

    $("#register-side-bar").css("transform","translate(0)");

}

$("#register-side-bar").mouseenter(function() { openform(); });
$("#register-side-bar").mouseleave(function() { closeform(); });
$("#empty-section").mouseenter(function() { closeform(); });

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
