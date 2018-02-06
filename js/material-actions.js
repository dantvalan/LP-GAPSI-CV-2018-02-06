$(function(){
	$('.dropdown-button').dropdown({
	      inDuration: 300,
	      outDuration: 225,
	      constrainWidth: false, // Does not change width of dropdown to that of the activator
	      hover: true, // Activate on hover
	      gutter: 0, // Spacing from edge
	      belowOrigin: false, // Displays dropdown below the button
	      alignment: 'left', // Displays dropdown with edge aligned to the left of button
	      stopPropagation: false // Stops event propagation
    	}
  	);
  	
	$(".button-collapse").sideNav();

	$('.previews a').click(function(){
		var largeImage = $(this).attr('data-full');
		$('.selected').removeClass();
		$(this).addClass('selected');
		$('.full img').hide();
		$('.full img').attr('src', largeImage);
		$('.full img').fadeIn();

	});
	$('.full img').on('click', function(){
		var modalImage = $(this).attr('src');
		$.fancybox.open(modalImage);
	});

	$(".owl-carousel").owlCarousel({
	    loop:true,
	    margin:10,
	    dots: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:false
	        }
	    }
	})
})