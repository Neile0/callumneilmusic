
	// Sticky Header
	$(window).scroll(function() {

		if ($(window).scrollTop() > 100) {
			$('.bar').addClass('sticky');
		} else {
			$('.bar').removeClass('sticky');
		}
	});
$( document ).ready(function() {

	// Mobile Navigation
	//$('.mobile-toggle').click(function() {
	//	if ($('.bar').hasClass('open-nav')) {
	//		$('.bar').removeClass('open-nav');
	//	} else {
	//		$('.bar').addClass('open-nav');
	//	}
	//});

	$('.bar li a').click(function() {
		if ($('.bar').hasClass('open-nav')) {
			$('.navigation').removeClass('open-nav');
			$('.bar').removeClass('open-nav');
		}
	});

	// navigation scroll
	$('nav a').click(function(event) {
	var id = $(this).attr("href");
	var target = $(id).offset().top;
	$('html, body').animate({
		scrollTop: target
	}, 500);
	event.preventDefault();
	});

	//Contact botton smooth scroll
	$('.scroll').click(function(e){
	var linkhref = $(this).attr('href');
	$('html, body').animate({ scrollTop: scrollTop }, 600);
	e.preventDefault();
	});
	
	//Logo scroll to top
	$('.logo').click(function(e){
    var linkhref = $(this).attr('href');
    $('html, body').animate({ scrollTop: 0 }, 600);
    e.preventDefault();
  });

 });


























