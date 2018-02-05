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
	$('.carousel').carousel();
})