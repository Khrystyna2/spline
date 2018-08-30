$(document).ready(function() {

	$('#ua, #ru').click(function() {
		$('#ru, #ua').toggleClass('change-language__active');
	});


	// 	if ($(window).width() <= 960) {
	// 		$('.menu-btn-catalog').click(function() {
	// 			$('.menu-catalog').slideToggle(600);
	// 		});
	// 		$('.menu-btn-services').click(function() {
	// 			$('.menu-services').slideToggle(600);
	// 		});
	// 	}
	//    else {
	// 	$('.menu-btn-catalog').hover(function() {
	// 		$('.menu-catalog').toggleClass('open');
	// 	});
	// 	$('.menu-btn-services').hover(function() {
	// 		$('.menu-services').toggleClass('open');
	// 	});
	//    }
	
	if ($(window).width() > 1024) {
        $('.menu-btn-catalog').hover(function () {
			$('.menu-catalog').fadeIn(200);
        }, function () {
            $('.menu-catalog').fadeOut(200);
        });
	}
	
    if ($(window).width() <= 1024) {
        $('.menu-btn-catalog').click(function () {
            $('.menu-catalog').slideToggle(600);
        });
	}
	
	if ($(window).width() > 1024) {
        $('.menu-btn-services').hover(function () {
			$('.menu-services').fadeIn(200);
        }, function () {
            $('.menu-services').fadeOut(200);
        });
	}
	
    if ($(window).width() <= 1024) {
        $('.menu-btn-services').click(function () {
            $('.menu-services').slideToggle(600);
        });
    }


	$('.filter').click(function() {
		$('.filter-category').slideToggle( "slow" );
	});

	//style for celect
	$('select').styler();


	//slick slider
	  $('.cards-products__img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: false,
		fade: true,
		arrows: false,
		asNavFor: '.cards-products__img-small'
	  });
	  $('.cards-products__img-small').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.cards-products__img',
		focusOnSelect: true
	  });
});