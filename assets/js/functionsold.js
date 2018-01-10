$( document ).ready(function() {
  //Fades in landingscreen
  $('#landing').hide(0).delay(300).fadeIn('slow');
//Fades in and out landscreen when scrolling
  $(window).scroll(function(){
      $("#landing").css("opacity", 1 - $(window).scrollTop() / 400);
      if($('#landing').css('opacity') <= 0) {
          $('#landing').hide(0);
          $('#landing').css({"position" : "absolute"});
      }
      else if($('#landing').css('opacity') > 0) {
          $('#landing').show(0);
          $('#landing').css({"position" : "fixed"});
      }
    });
  //Contact botton smooth scroll
  $('.scroll').click(function(e){
    var linkhref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(linkhref).offset().top
    }, 2500);
    e.preventDefault();
  });
});
