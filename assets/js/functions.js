$( document ).ready(function() {
	alert("Click");

	// navigation scroll
	$('.scroll').click(function(event) {
	var id = $(this).attr("href");
	//var offset = 70;
	var target = $(id).offset().top //- offset;
	$('html, body').animate({
		scrollTop: target
	}, 500);
	event.preventDefault();
	});



	//Logo scroll to top
	$('.logo').click(function(e){
    var linkhref = $(this).attr('href');
    $('html, body').animate({ scrollTop: 0 }, 600);
    e.preventDefault();
 	 });

	 $('#show-more').click(function(e){
		 this.style.display = "none"
     document.getElementById("more-text").style.display = "block";
		 document.getElementById("show-less").style.display = "block";
  	 });

	 $('#show-less').click(function(e){
		 this.style.display = "none"
     document.getElementById("more-text").style.display = "none";
		 document.getElementById("show-more").style.display = "block";
  	 });

		$('#video-click').click(function(e){
		var vid = document.getElementById("videos");
		var gal = document.getElementById("gallery");
		if (vid.style.display != "block"){
				console.log("Click")
				gal.style.display = "none";
				vid.style.right = "-100%";
				vid.style.display = "block";
				$("#videos").animate({right: "0"}, 1000);
			}
		});

		$('#gallery-click').click(function(e){
			var vid = document.getElementById("videos");
			var gal = document.getElementById("gallery");
			if (gal.style.display != "block") {
					vid.style.display = "none";
					gal.style.right = "-100%";
					gal.style.display = "block";
					$("#gallery").animate({right: "0"}, 1000);
				}
		});

		$('#gallery a').click(function(e){
			var image = document.getElementById("");
			var gal = document.getElementById("gallery");
			if (gal.style.display != "block") {
					vid.style.display = "none";
					gal.style.right = "-100%";
					gal.style.display = "block";
					$("#gallery").animate({right: "0"}, 1000);
				}
		});
		$('.Galnext').click(function() {
		    var far = $( '#gallery img' ).width() * 4;
		    var pos = $('#gallery').scrollLeft() + far;
		  $('#gallery').animate( { scrollLeft: pos }, 1000,  );;
		});

		$('.Galprev').click(function() {
		    var far = $( '#gallery img' ).width() * 4;
		    var pos = $('#gallery').scrollLeft() - far;
		      $('#gallery').animate( { scrollLeft: pos }, 1000,  );;
		});




		//Media buttons


            //var show =  $(this).val() === 'Show';
              //          $(this).val(show ? 'Hide' : 'Show');
            //$('#1').toggle('slide',{ direction: 'right' }, 500);
});
