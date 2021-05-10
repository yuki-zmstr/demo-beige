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
    

// logo fade out
$(function(){
    var body = $("html,body");
    var top = body.scrollTop();
    $("#logo").delay(2500).fadeOut(1000);
    if(top!=0){
        body.animate({scrollTop:0}, '0');
    }
});

// main content

$(document).ready(function () {
    $(".sidenav").delay(5000).css({opacity: 0.0, visibility: "visible"}).animate({left:10, opacity: 1.0},1000)
    // $("#content").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
    $("#welcome").delay(4000).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
});

// each block
$(window).scroll(function(){
    var scroll = $(window).scrollTop(); 
    var footerPos = $("footer").offset().top;       
    $(".sc").each(function(){
        var elemPos = $(this).offset().top;
        if (scroll > elemPos - wh/1.3){
            $(this).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
        }
        });
    if (scroll > footerPos - wh/1.1){
        $("footer").css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0},1000);
    }
    });

//   


// form validation

$(function () {
    $("#form").submit(function(event) {
      var name = $("#name").val();
      var message = $("#message").val();
      validateNameField(name, event);
      validateMessageField(message, event);
      if (confirm("Confirm submission")){
          alert("Thank you for your message")
          return
      } else {
        event.preventDefault()
      }
    });
    function validateNameField(name, event) {
      if (name.trim().length < 3) {
          alert("Please enter a valid name");
          event.preventDefault();
      } else {
        return
      }
    };
    function validateMessageField(message, event) {
        if (message.trim() == "") {
            alert("Please enter a valid message");
            event.preventDefault();
        } else {
            return
        }
    }
  });