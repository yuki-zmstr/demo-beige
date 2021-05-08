var wh = $(window).height();
var ww = $(window).width();

function hide() {
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    })
}
function show() {
    $('html, body').css({
        overflow: 'auto',
        'overflow-x': 'hidden',
        height: 'auto'
    })
}
hide()
setTimeout(() => {
    show()
}, 4000);
    


$(function(){
    var body = $("html,body");
    var top = body.scrollTop();
    $("#logo").delay(2500).fadeOut(1000);
    if(top!=0){
        body.animate({scrollTop:0}, '0');
    }
});

$(document).ready(function () {
    $(".sidenav").delay(5000).css({opacity: 0.0, visibility: "visible"}).animate({left:10, opacity: 1.0},1000)
    // $("#content").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
    $("#welcome").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
});

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var about_first_para = 400; 
    var about_second_para = 800;
    var hobbies_first_para =  1200; 
    var hobbies_second_para = 1600;    
    var first_quote = 1900;           

    if(y_scroll_pos > about_first_para) {
        $("#about-hd").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
        $("#about-first-para").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    };
    if(y_scroll_pos > about_second_para) {
        $("#about-second-para").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    };
    if(y_scroll_pos > hobbies_first_para) {
        $("#hobbies-hd").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
        $("#hobbies-first-para").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    };
    if(y_scroll_pos > hobbies_second_para) {
        $("#hobbies-second-para").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    };
    if(y_scroll_pos > first_quote) {
        $("#first-quote").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    }
  });

console.log('hi')