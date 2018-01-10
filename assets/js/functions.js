// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.bar').addClass('sticky');
    } else {
        $('.bar').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.bar').hasClass('open-nav')) {
        $('.bar').removeClass('open-nav');
    } else {
        $('.bar').addClass('open-nav');
    }
});

$('.bar li a').click(function() {
    if ($('.bar').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.bar').removeClass('open-nav');
    }
});

// navigation scroll
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

  //Contact botton smooth scroll
  $('.scroll').click(function(e){
    var linkhref = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(linkhref).offset().top
    }, 2500);
    e.preventDefault();
  });
