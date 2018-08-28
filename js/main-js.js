$(document).ready(function() {

	$('#ua, #ru').click(function() {
		$('#ru, #ua').toggleClass('change-language__active');
	});

	$('.filter').click(function() {
		$('.filter-category').slideToggle( "slow" );
	});

});