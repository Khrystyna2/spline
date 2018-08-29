$(document).ready(function() {

	$('#ua, #ru').click(function() {
		$('#ru, #ua').toggleClass('change-language__active');
	});


		if ($(window).width() <= 960) {
			$('.menu-btn-catalog').click(function() {
				$('.menu-catalog').slideToggle(600);
			});
			$('.menu-btn-services').click(function() {
				$('.menu-services').slideToggle(600);
			});
		}
	   else {
		$('.menu-btn-catalog').hover(function() {
			$('.menu-catalog').slideToggle(300);
		});
		$('.menu-btn-services').hover(function() {
			$('.menu-services').slideToggle(300);
		});
	   }
	// $('.menu-btn-catalog').click(function() {
	// 	$('.menu-catalog').slideToggle(600);
	// });
	// $('.menu-btn-services').click(function() {
	// 	$('.menu-services').slideToggle(600);
	// });

	$('.filter').click(function() {
		$('.filter-category').slideToggle( "slow" );
	});

});