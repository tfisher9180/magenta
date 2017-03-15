$(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 50) {
			$('.navbar').addClass('navbar-slim');
		} else {
			$('.navbar').removeClass('navbar-slim');
		}
	});
});