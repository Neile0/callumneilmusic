$( document ).ready(function() {
	console.log("JS Ready");

	// navigation scroll
	$('.scroll').click(function(event) {
	var id = $(this).attr("href");
	var offset = 100;
	var target = $(id).offset().top - offset;
	$('html, body').animate({
		scrollTop: target
	}, 500);
	event.preventDefault();
	});

});
