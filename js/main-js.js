$(document).ready(function() {

	$('#ua, #ru').click(function() {
		$('#ru, #ua').toggleClass('change-language__active');
	});

	$('.menu-btn-catalog').click(function() {
		$('.menu-catalog').slideToggle(1000);
	});
	$('.menu-btn-services').click(function() {
		$('.menu-services').slideToggle(1000);
	});

	$('.filter').click(function() {
		$('.filter-category').slideToggle( "slow" );
	});

});