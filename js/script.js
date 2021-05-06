$(function(){
    $("#logo").delay(2500).fadeOut(1000)
})

$(document).ready(function () {
    $(".sidenav").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({left:10, opacity: 1.0},1000);
    $("#content").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
    // $("#bg").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0});
  });

