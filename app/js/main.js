$(function () {
	$('.slider').slick({
		arrows: false,
		fade: true,
		autoplay: 3000,
		dots: true
	});


	$('.header-btn').on('click', function () {
		$('.menu').addClass('active');
	});

	$('.clouse-btn').on('click', function () {
		$('.menu').removeClass('active');
	});
});