$(function(){
    $("#logo").delay(2500).fadeOut(1000)
})

$(document).ready(function () {
    $(".sidenav").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({left:10, opacity: 1.0},1000);
    // $("#content").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
    $("#welcome").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 0.8},1000);
  });

$(window).on('scroll', function() {
    var y_scroll_pos = window.pageYOffset;
    var about_first_para = 300; 
    var about_second_para = 600;
    var hobbies_first_para =  1000; 
    var hobbies_second_para = 1400;    
    var first_quote = 1800;           

    if(y_scroll_pos > about_first_para) {
        $("#about-hd").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
        $("#about-first-para").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    }
    if(y_scroll_pos > about_second_para) {
        $("#about-second-para").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    }
    if(y_scroll_pos > hobbies_first_para) {
        $("#hobbies-hd").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
        $("#hobbies-first-para").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    }
    if(y_scroll_pos > hobbies_second_para) {
        $("#hobbies-second-para").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    }
    if(y_scroll_pos > first_quote) {
        $("#first-quote").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000)
    }
});